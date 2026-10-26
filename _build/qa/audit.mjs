// Mobile audit for the static site: WebKit, real device profiles, full-page screenshots + measurements.
// Usage: node audit.mjs <baseURL> <outDir> [--devices=a,b] [--pages=x/,y/] [--no-shots]
import { webkit, devices } from 'playwright';
import fs from 'node:fs/promises';
import path from 'node:path';

const args = process.argv.slice(2);
const base = args[0].replace(/\/?$/, '/');
const out = args[1];
const opt = Object.fromEntries(args.slice(2).map(a => a.replace(/^--/, '').split('=')).map(([k, v]) => [k, v ?? true]));

export const PAGES = ['', 'pricing/', 'demo/', 'contact/', 'help/', 'security/', 'channels/',
  'channels/google-shopping/', 'channels/google-ads/', 'channels/bing/', 'channels/meta/', 'channels/tiktok/',
  'channels/pinterest/', 'channels/snapchat/', 'channels/amazon/', 'channels/walmart/', 'channels/ebay/',
  'platform/feed-management/', 'platform/diagnostics/', 'platform/rules-engine/', 'platform/price-intelligence/',
  'platform/conversion-intelligence/', 'legal/privacy/', 'legal/terms/', 'legal/gdpr/', 'legal/cookies/'];
const strip = ({ defaultBrowserType, ...d }) => d;
const DEVICES = {
  iphone12: strip(devices['iPhone 12']),
  iphonese: strip(devices['iPhone SE (3rd gen)']),
  android360: strip(devices['Galaxy S8']),
  ipad768: strip(devices['iPad (gen 6)']),
  desktop1440: { viewport: { width: 1440, height: 900 }, deviceScaleFactor: 1 },
};
const slug = p => p.replace(/\/$/, '').replace(/\//g, '-') || 'home';
const devs = (opt.devices ? String(opt.devices).split(',') : Object.keys(DEVICES));
const pages = opt.pages ? String(opt.pages).split(',').map(p => p === 'home' ? '' : p) : PAGES;

// Runs in the page. Everything is measured in CSS px of the layout viewport.
function measure() {
  const vw = window.innerWidth, de = document.documentElement, root = new Set([de, document.body]);
  const cs = el => getComputedStyle(el);
  const zoomOf = el => { let z = 1; for (let e = el; e && e.nodeType === 1; e = e.parentElement) { const v = parseFloat(cs(e).zoom); if (v) z *= v; } return z; };
  const desc = el => {
    const bits = [el.tagName.toLowerCase()];
    for (const a of ['data-x', 'data-r', 'data-g', 'data-fit', 'id', 'aria-label']) if (el.hasAttribute(a)) bits.push(`[${a}=${el.getAttribute(a)}]`);
    const t = (el.textContent || '').trim().replace(/\s+/g, ' ').slice(0, 40);
    let anc = ''; const a = el.parentElement && el.parentElement.closest('[data-x],[data-r],section,header,footer');
    if (a && a !== el) anc = ' in ' + a.tagName.toLowerCase() + (a.getAttribute('data-x') ? `[data-x=${a.getAttribute('data-x')}]` : a.getAttribute('data-r') ? `[data-r=${a.getAttribute('data-r')}]` : '');
    return bits.join('') + (t ? ` "${t}"` : '') + anc;
  };
  const shown = el => { const s = cs(el); if (s.visibility === 'hidden' || s.display === 'none' || !(parseFloat(s.opacity) > 0)) return false; const d = el.closest('details:not([open])'); return !d || !!el.closest('summary'); };
  // Clipped horizontally by a non-root ancestor whose own box is on-screen?
  const clippedBy = el => {
    for (let e = el.parentElement; e && !root.has(e); e = e.parentElement) {
      const s = cs(e);
      if (s.overflowX !== 'visible' || s.position === 'fixed') { const r = e.getBoundingClientRect(); if (r.left >= -1 && r.right <= vw + 1) return e; }
    }
    return null;
  };
  const inMock = el => !!el.closest('[data-fit],[aria-hidden=true]');
  const all = [...document.body.querySelectorAll('*')].filter(el => !el.closest('svg') || el.tagName === 'svg');

  // 1. content past the viewport edge (even if html/body clip hides the scrollbar)
  const offenders = [];
  for (const el of all) {
    const r = el.getBoundingClientRect();
    if (r.width === 0 || r.height === 0 || !shown(el) || cs(el).position === 'fixed') continue;
    if (r.right <= vw + 1 && r.left >= -1) continue;
    if (r.right <= 0) continue; // parked off-screen on purpose (form honeypot)
    if (clippedBy(el)) continue;
    if (el.closest('[hidden]')) continue;
    offenders.push({ el, d: desc(el), left: Math.round(r.left), right: Math.round(r.right), w: Math.round(r.width) });
  }
  const offEls = new Set(offenders.map(o => o.el));
  const outer = offenders.filter(o => !offEls.has(o.el.parentElement)).map(({ el, ...o }) => o);

  // 2. text: cut off at the viewport / overflowing its own box; small type
  const textCut = [], textOver = [], small = [], tiny = [];
  const leaves = [];
  for (const el of all) {
    if (el.tagName === 'svg' || el.closest('[hidden],script,style,noscript')) continue;
    const tn = [...el.childNodes].filter(n => n.nodeType === 3 && n.textContent.trim());
    if (!tn.length || !shown(el)) continue;
    const er = el.getBoundingClientRect(); if (er.width === 0) continue;
    const rects = [];
    for (const n of tn) { const rg = document.createRange(); rg.selectNodeContents(n); rects.push(...[...rg.getClientRects()].filter(r => r.width > 0)); }
    if (!rects.length) continue;
    leaves.push({ el, rects });
    const s = cs(el), mock = inMock(el), clip = clippedBy(el);
    if (!clip && er.right > 0 && rects.some(r => r.right > vw + 1 || r.left < -1)) textCut.push(desc(el));
    if (!mock && s.overflowX === 'visible' && s.whiteSpace !== 'nowrap' && rects.some(r => r.right > er.right + 2) && !clip) textOver.push(desc(el));
    const fs = parseFloat(s.fontSize) * zoomOf(el), len = el.textContent.trim().length;
    if (mock) continue;
    const isBody = /^(P|LI|DD|TD|BLOCKQUOTE)$/.test(el.tagName) || len >= 60;
    if (isBody && len >= 25 && fs < 15.95) small.push({ d: desc(el), fs: +fs.toFixed(1) });
    if (fs < 11.95) tiny.push({ d: desc(el), fs: +fs.toFixed(1) });
  }

  // 3. tap targets
  const tapSmall = [], tapInline = [];
  for (const el of document.body.querySelectorAll('a[href],button,input:not([type=hidden]),select,textarea,summary,[role=button]')) {
    if (el.closest('[hidden]') || !shown(el)) continue;
    const box = (el.matches('input[type=checkbox],input[type=radio]') && el.closest('label')) || el;
    const r = box.getBoundingClientRect(); if (r.width === 0 || r.height === 0) continue;
    if (r.bottom < 0 && cs(el).position === 'fixed') continue;
    if (inMock(el)) continue;
    if (r.width >= 43.5 && r.height >= 43.5) continue;
    // a box under 44px can still have a 44px hit area (expanded with ::after): hit-test 21.5px out from its centre
    // scroll the window only: scrollIntoView would also scroll overflow:hidden sections and shift their content
    window.scrollTo({ top: box.getBoundingClientRect().top + scrollY - innerHeight / 2, behavior: 'instant' });
    const q = box.getBoundingClientRect(), cx = q.left + q.width / 2, cy = q.top + q.height / 2;
    const hits = [[cx, cy - 21.5], [cx, cy + 21.5], [cx - 21.5, cy], [cx + 21.5, cy]].map(([x, y]) => { const t = document.elementFromPoint(x, y); return !!t && (el.contains(t) || box.contains(t)); });
    if (hits.every(Boolean)) continue;
    const item = { d: desc(el), w: Math.round(r.width), h: Math.round(r.height), hits: hits.map(Number).join('') };
    const p = el.parentElement, inline = el.tagName === 'A' && cs(el).display === 'inline' && p && (p.textContent.trim().length > el.textContent.trim().length + 15);
    (inline ? tapInline : tapSmall).push(item);
  }
  // put every scroll position back so the remaining checks (and the screenshot) see the page as loaded
  for (const e of all) if (e.scrollLeft) e.scrollLeft = 0;
  window.scrollTo({ top: 0, left: 0, behavior: 'instant' });

  // the part of a rect that survives every clipping ancestor (overflow != visible), or null
  const clipRect = (el, r) => {
    let L = r.left, T = r.top, R = r.right, B = r.bottom;
    for (let e = el.parentElement; e && !root.has(e); e = e.parentElement) {
      const s = cs(e);
      if (s.overflowX === 'visible' && s.overflowY === 'visible') continue;
      const c = e.getBoundingClientRect();
      if (s.overflowX !== 'visible') { L = Math.max(L, c.left); R = Math.min(R, c.right); }
      if (s.overflowY !== 'visible') { T = Math.max(T, c.top); B = Math.min(B, c.bottom); }
    }
    return R - L > 1 && B - T > 1 ? { left: L, top: T, right: R, bottom: B } : null;
  };
  // text partly hidden by a clipping ancestor (cut mid-line), outside zoom-to-fit mockups
  const textClipped = [];
  for (const { el, rects } of leaves) {
    if (el.closest('[data-fit]')) continue;
    // content inside a sideways-scrolling container is reachable, not cut
    const scroller = up => { for (let e = el.parentElement; e && !root.has(e); e = e.parentElement) { const s = cs(e).overflowX; if ((s === 'auto' || s === 'scroll') && e.scrollWidth > e.clientWidth) return true; } return false; };
    if (rects.some(r => { const v = clipRect(el, r); return v && (r.right - v.right > 2 || v.left - r.left > 2); }) && !scroller()) textClipped.push(desc(el));
  }
  // 4. overlaps: text-vs-text and image-vs-text, outside mockups, using only the visible part of each box
  const boxes = [];
  for (const { el, rects } of leaves) if (!inMock(el) && !el.closest('[data-x=menu],[data-r=menu]')) for (const r0 of rects) { const r = clipRect(el, r0); if (r) boxes.push({ el, r }); }
  for (const img of document.body.querySelectorAll('img')) {
    if (inMock(img) || !shown(img) || img.closest('[hidden],header')) continue;
    const r = clipRect(img, img.getBoundingClientRect()); if (r && r.right - r.left > 4 && r.bottom - r.top > 4) boxes.push({ el: img, r, img: true });
  }
  const overlaps = []; const seen = new Set();
  for (let i = 0; i < boxes.length; i++) for (let j = i + 1; j < boxes.length; j++) {
    const a = boxes[i], b = boxes[j];
    if (a.el === b.el || a.el.contains(b.el) || b.el.contains(a.el) || (a.img && b.img)) continue;
    const w = Math.min(a.r.right, b.r.right) - Math.max(a.r.left, b.r.left), h = Math.min(a.r.bottom, b.r.bottom) - Math.max(a.r.top, b.r.top);
    if (w <= 3 || h <= 3 || w * h < 40) continue;
    // an image that is a positioned background (behind the text) is design, not overlap
    // an image used as a backdrop, or a label chip laid over an image, is the design, not an overlap
    if (a.img || b.img) {
      const im = a.img ? a.el : b.el, tx = a.img ? b.el : a.el;
      const absOf = e => { for (; e && !root.has(e); e = e.parentElement) if (cs(e).position === 'absolute') return e; return null; };
      const ai = absOf(im), at = absOf(tx);
      if (ai && !ai.contains(tx)) continue;
      if (at && !at.contains(im)) continue;
    }
    const k = desc(a.el) + ' × ' + desc(b.el); if (seen.has(k)) continue; seen.add(k);
    overlaps.push({ a: desc(a.el), b: desc(b.el), w: Math.round(w), h: Math.round(h) });
  }

  // 5. long copy forced into a narrow column (outside mockups)
  const squeezed = [];
  for (const { el, rects } of leaves) {
    if (inMock(el)) continue;
    const len = el.textContent.trim().length, r = el.getBoundingClientRect(), lines = new Set(rects.map(x => Math.round(x.top))).size;
    if (vw < 1152 && len >= 20 && r.width < Math.min(170, vw * 0.45) && lines >= 4) squeezed.push({ d: desc(el), w: Math.round(r.width), lines });
  }
  // 6. form fields under 16px: iOS Safari zooms the whole page in when one is focused
  const inputsSmall = [...document.querySelectorAll('input:not([type=hidden]):not([type=checkbox]):not([type=radio]),select,textarea')]
    .filter(i => shown(i) && i.getBoundingClientRect().width > 0 && parseFloat(cs(i).fontSize) * zoomOf(i) < 15.95)
    .map(i => ({ d: desc(i), fs: +(parseFloat(cs(i).fontSize) * zoomOf(i)).toFixed(1) }));
  // 7. a hidden <br> with no whitespace either side glues two words together
  const glued = [...document.body.querySelectorAll('br')].filter(b => cs(b).display === 'none' && b.previousSibling && b.nextSibling
    && /\S$/.test(b.previousSibling.textContent) && /^\S/.test(b.nextSibling.textContent) && !inMock(b)).map(b => desc(b.parentElement));

  return {
    textClipped: [...new Set(textClipped)].slice(0, 20), textClippedCount: new Set(textClipped).size,
    squeezed: squeezed.slice(0, 20), squeezedCount: squeezed.length, inputsSmall: inputsSmall.slice(0, 10), inputsSmallCount: inputsSmall.length, glued,
    vw, scrollW: de.scrollWidth, bodyScrollW: document.body.scrollWidth, docH: de.scrollHeight,
    viewportMeta: (document.querySelector('meta[name=viewport]') || {}).content || null,
    hScroll: de.scrollWidth > vw, offenders: outer.slice(0, 25), offenderCount: outer.length,
    textCut: [...new Set(textCut)].slice(0, 20), textOver: [...new Set(textOver)].slice(0, 20),
    smallBody: small.slice(0, 30), smallBodyCount: small.length, tiny: tiny.slice(0, 20), tinyCount: tiny.length,
    tapSmall: tapSmall.slice(0, 40), tapSmallCount: tapSmall.length, tapInlineCount: tapInline.length, tapInline: tapInline.slice(0, 10),
    overlaps: overlaps.slice(0, 20), overlapCount: overlaps.length,
  };
}

async function settle(page) {
  await page.evaluate(async () => {
    await document.fonts.ready;
    // full-page captures don't scroll, so lazy images below the fold would never start loading
    for (const i of document.querySelectorAll('img[loading=lazy]')) i.loading = 'eager';
    await Promise.all([...document.images].map(i => i.complete && i.naturalWidth ? 0 : new Promise(r => { i.addEventListener('load', r); i.addEventListener('error', r); setTimeout(r, 5000); })));
    scrollTo({ top: 0, left: 0, behavior: 'instant' });
  });
  await page.waitForLoadState('networkidle').catch(() => {}); // CSS background images aren't in document.images
  await page.waitForTimeout(250);
}

async function navTest(page, vw) {
  const burger = page.locator('[data-x=burger],[data-r=burger]').first();
  const r = { burgerVisible: false };
  if (!(await burger.count())) return { ...r, note: 'no burger in DOM' };
  r.burgerVisible = await burger.isVisible();
  const navVisible = await page.locator('[data-x=nav],[data-r=nav]').first().isVisible().catch(() => false);
  r.desktopNavVisible = navVisible;
  if (!r.burgerVisible) return r;
  const bb = await burger.boundingBox(); r.burgerBox = bb && { w: Math.round(bb.width), h: Math.round(bb.height), right: Math.round(bb.x + bb.width) };
  await burger.tap();
  await page.waitForTimeout(200);
  const menu = page.locator('#ms-menu');
  r.openedVisible = await menu.isVisible();
  r.ariaExpanded = await burger.getAttribute('aria-expanded');
  if (r.openedVisible) {
    r.menu = await menu.evaluate((m, vw) => {
      const mr = m.getBoundingClientRect();
      const links = [...m.querySelectorAll('a')].map(a => { const b = a.getBoundingClientRect(); return { t: a.textContent.trim(), h: Math.round(b.height), w: Math.round(b.width) }; });
      // is the first link actually hit-testable (not covered)?
      const a0 = m.querySelector('a'), b0 = a0.getBoundingClientRect();
      const hit = document.elementFromPoint(b0.left + b0.width / 2, b0.top + b0.height / 2);
      return { left: Math.round(mr.left), right: Math.round(mr.right), top: Math.round(mr.top), h: Math.round(mr.height), fits: mr.left >= -1 && mr.right <= vw + 1, links, firstLinkHittable: !!hit && a0.contains(hit) };
    }, vw);
  }
  r.shotOpen = true;
  return r;
}

async function closeMenu(page) {
  const burger = page.locator('[data-x=burger],[data-r=burger]').first();
  await burger.tap();
  await page.waitForTimeout(200);
  return { closedHidden: !(await page.locator('#ms-menu').isVisible()), ariaExpanded: await burger.getAttribute('aria-expanded') };
}

const browser = await webkit.launch();
const report = {};
for (const dk of devs) {
  const ctx = await browser.newContext({ ...DEVICES[dk] });
  report[dk] = {};
  for (const p of pages) {
    const page = await ctx.newPage();
    const url = base + p;
    let rec;
    try {
      await page.goto(url, { waitUntil: 'load', timeout: 60000 });
      await settle(page);
      rec = await page.evaluate(measure);
      if (!opt['no-shots']) {
        await fs.mkdir(path.join(out, dk), { recursive: true });
        await page.screenshot({ path: path.join(out, dk, slug(p) + '.png'), fullPage: true, scale: 'css', animations: 'disabled' });
      }
      if (rec.vw < 1152) {
        rec.nav = await navTest(page, rec.vw);
        if (rec.nav.openedVisible) {
          if (!opt['no-shots'] && dk === 'iphone12') await page.screenshot({ path: path.join(out, dk, slug(p) + '--menu-open.png'), scale: 'css' });
          rec.nav.scrollWAfterOpen = await page.evaluate(() => document.documentElement.scrollWidth);
          Object.assign(rec.nav, await closeMenu(page));
        }
      }
    } catch (e) { rec = { error: String(e).slice(0, 400) }; }
    report[dk][slug(p)] = rec;
    const n = rec.nav || {};
    console.log(`${dk.padEnd(11)} ${slug(p).padEnd(34)} sw=${rec.scrollW}/${rec.vw} off=${rec.offenderCount ?? '-'} cut=${rec.textCut?.length ?? '-'} tap<44=${rec.tapSmallCount ?? '-'} small=${rec.smallBodyCount ?? '-'} ovl=${rec.overlapCount ?? '-'} clip=${rec.textClippedCount ?? '-'} sq=${rec.squeezedCount ?? '-'} in<16=${rec.inputsSmallCount ?? '-'} glue=${rec.glued?.length ?? '-'} nav=${rec.vw < 1152 ? (n.burgerVisible ? (n.openedVisible ? (n.closedHidden ? 'ok' : 'NOCLOSE') : 'NOOPEN') : 'NOBURGER') : '-'}${rec.error ? ' ERROR ' + rec.error : ''}`);
    await page.close();
  }
  await ctx.close();
}
await browser.close();
await fs.mkdir(out, { recursive: true });
await fs.writeFile(path.join(out, 'report.json'), JSON.stringify(report, null, 1));
