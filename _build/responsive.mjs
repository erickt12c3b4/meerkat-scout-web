// Responsive build step for the static site. The pages were exported once from the design workspace (see
// _build/README.md); the responsive layer is the part of that export that lives in this repo, so phone/tablet fixes
// are made here and regenerated — never by hand inside an index.html. For every page it:
//   1. re-derives the [data-g] grid hooks from each grid's inline track list (sub-pages);
//   2. sets [data-m] hooks the mobile rules key on — body copy, standalone tap targets, splittable flex rows,
//      data tables — from the page structure (all pages);
//   3. inlines the responsive CSS + runtime:
//        <style id="ms-responsive">  ← home-responsive.css (homepage) | rwd-pages.css + pages/<slug>.css (sub-pages)
//        responsive runtime <script> ← rwd-home.js (homepage) | rwd.js (sub-pages)
// Hooks are attributes only; the design's inline styles are never touched, so desktop (≥1152px) is unchanged.
// Run: node _build/responsive.mjs          rewrite pages that differ
//      node _build/responsive.mjs --check  exit 1 if any page is out of date
import fs from 'node:fs';
import path from 'node:path';

const BUILD = import.meta.dirname, ROOT = path.resolve(BUILD, '..');
const check = process.argv.includes('--check');
const src = (f) => fs.readFileSync(path.join(BUILD, f), 'utf8').trim();

// ---- minimal parser for the exported pages (DOM-serialized, so well-formed) -------------------------------------
const VOID = new Set('area base br col embed hr img input link meta source track wbr'.split(' '));
const RAW = new Set(['script', 'style', 'textarea', 'title']);
function parse(html) {
  const els = [], stack = [];
  const re = /<!--[\s\S]*?-->|<!DOCTYPE[^>]*>|<\/([a-zA-Z][\w-]*)\s*>|<([a-zA-Z][\w-]*)((?:\s+[^\s=>\/]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s>]+))?)*)\s*(\/?)>/g;
  let m, last = 0;
  const text = (s) => {
    if (!stack.length || !s) return;
    const t = s.replace(/&[a-z#0-9]+;/gi, 'x');
    stack[stack.length - 1].own += t;
    for (const e of stack) e.all += t;
  };
  while ((m = re.exec(html))) {
    text(html.slice(last, m.index));
    last = re.lastIndex;
    if (m[0].startsWith('<!')) continue;
    if (m[1]) {
      const tag = m[1].toLowerCase();
      for (let i = stack.length - 1; i >= 0; i--) if (stack[i].tag === tag) { stack.length = i; break; }
      continue;
    }
    const tag = m[2].toLowerCase(), attrs = m[3];
    const el = { tag, start: m.index, end: re.lastIndex, attrs, parent: stack[stack.length - 1] || null, kids: [], own: '', all: '' };
    el.style = attr(el, 'style') || '';
    if (el.parent) el.parent.kids.push(el);
    els.push(el);
    if (RAW.has(tag)) { last = re.lastIndex = html.indexOf('</' + tag, re.lastIndex); continue; }
    if (!VOID.has(tag) && !m[4]) stack.push(el);
  }
  return els;
}
function attr(el, name) { const m = el.attrs.match(new RegExp(`\\s${name}="([^"]*)"`)); return m ? m[1] : null; }
const css = (el, prop) => { const m = el.style.match(new RegExp(`(?:^|;)\\s*${prop}:([^;]+)`)); return m ? m[1].trim() : null; };
const up = (el, fn) => { for (let e = el; e; e = e.parent) { const v = fn(e); if (v != null && v !== false) return v; } return null; };
const inherited = (el, prop) => up(el, e => css(e, prop));
const within = (el, test) => !!up(el, e => test(e) || null);

// ---- 1. grid hooks ------------------------------------------------------------------------------------------------
// The export's classifier had an if/else slip that tagged nearly every grid data-g="4", so the 2L/2M/3L/ico3/conn
// rules in rwd-pages.css never matched and tablets got every split layout forced into two equal columns. This is the
// classification it intended, plus "2s" (a small fixed badge/icon column that should stay beside its text).
function gridClass(tpl) {
  const tracks = tpl.replace(/repeat\((\d+),\s*([^)]+)\)/g, (m, n, t) => Array(+n).fill(t.trim()).join(' ')).split(/\s+/).filter(Boolean);
  const n = tracks.length;
  const px = tracks.map(t => (t.match(/^(\d+)px$/) || [])[1]).filter(Boolean).map(Number);
  const pxSum = px.reduce((a, b) => a + b, 0), maxPx = Math.max(0, ...px);
  const frs = tracks.filter(t => /fr/.test(t)).length, autos = tracks.filter(t => t === 'auto').length;
  if (n >= 5 && autos >= 2 && frs >= 3) return 'conn';
  if (n === 2) return maxPx >= 480 ? '2L' : maxPx >= 260 ? '2M' : px.length && maxPx <= 60 ? '2s' : '2';
  if (n === 3) return maxPx <= 60 && frs === 1 ? 'ico3' : pxSum >= 500 ? '3L' : '3';
  return '4';
}

// ---- 2. mobile hooks ----------------------------------------------------------------------------------------------
const isChrome = (el) => within(el, e => e.tag === 'header' || e.tag === 'footer' || attr(e, 'data-x') === 'menu');
const isMock = (el) => within(el, e => attr(e, 'data-fit') != null || attr(e, 'aria-hidden') === 'true');
const words = (s) => s.replace(/\s+/g, ' ').trim();
const tracksOf = (el) => (css(el, 'grid-template-columns') || '').replace(/\s+/g, ' ');

function hooks(els) {
  const set = new Map(); // el -> { m: Set, g: string|undefined }
  const add = (el, tok) => { if (!set.has(el)) set.set(el, { m: new Set() }); set.get(el).m.add(tok); };
  const setG = (el, g) => { if (!set.has(el)) set.set(el, { m: new Set() }); set.get(el).g = g; };

  for (const el of els) {
    if (isMock(el)) continue;
    const chrome = isChrome(el);

    // body copy set below 16px: raised to 16px where the layout reflows (tablet + phone). Sentences and list items,
    // not labels, eyebrows, captions or code; header/menu excluded, footer blurb included.
    const fs = parseFloat(css(el, 'font-size')), len = words(el.all).length;
    const header = within(el, e => e.tag === 'header' || attr(e, 'data-x') === 'menu');
    if (!header && fs >= 13.45 && fs < 15.95 && (len >= 40 || (len >= 20 && /^(p|li|dd)$/.test(el.tag)))
      && /^(p|span|div|li|ul|ol|dd|dt|td|blockquote|label)$/.test(el.tag) && !within(el, e => e.tag === 'nav' && attr(e, 'aria-label') !== 'On this page' && within(e, f => f.tag === 'footer'))
      && inherited(el, 'text-transform') !== 'uppercase' && !/mono/i.test(inherited(el, 'font-family') || '')) add(el, 'copy');

    // standalone links and buttons (not a link inside a sentence): 44px tap area
    if ((el.tag === 'a' || el.tag === 'button') && !chrome && el.parent && !words(el.parent.own)) {
      const sibs = el.parent.kids.filter(k => k.tag === 'a' || k.tag === 'button');
      const pg = el.parent.parent;
      const listItem = el.parent.tag === 'li' && pg && pg.kids.filter(k => k.tag === 'li').length >= 2;
      const column = sibs.length >= 2 && (css(el.parent, 'flex-direction') === 'column' || el.parent.tag === 'nav' && css(el.parent, 'flex-direction') === 'column');
      add(el, listItem || column ? 'tapr' : 'tap');
    }

    // flex rows of text blocks (heading block + paragraph, copy + buttons): allowed to wrap onto separate lines
    if (!chrome && css(el, 'display') === 'flex' && !/column/.test(css(el, 'flex-direction') || '') && !/wrap/.test(css(el, 'flex-wrap') || '')
      && !attr(el, 'data-x') && el.kids.length >= 2) {
      const blocks = el.kids.filter(k => /^(div|p|nav|ul|ol|h[1-6]|form|dl)$/.test(k.tag));
      const texty = el.kids.filter(k => words(k.all).length >= 20);
      if (blocks.length === el.kids.length && texty.length >= 2) add(el, 'frow');
    }
  }

  // data tables: sibling grid rows sharing one track list
  const seen = new Set();
  for (const el of els) {
    if (seen.has(el) || !css(el, 'grid-template-columns') || isMock(el) || isChrome(el) || !el.parent) continue;
    const rows = el.parent.kids.filter(k => tracksOf(k) && tracksOf(k) === tracksOf(el));
    rows.forEach(r => seen.add(r));
    const n = tracksOf(el).replace(/repeat\((\d+),[^)]*\)\)?/g, (m, k) => 'x '.repeat(+k)).trim().split(/\s+/).length;
    const head = rows.length >= 2 && (/uppercase/.test(rows[0].style) || rows[0].kids.every(k => /uppercase/.test(k.style))) ? rows[0] : null;
    const body = rows.filter(r => r !== head);
    if (rows.length >= 2) {
      const hooked = body.some(r => attr(r, 'data-g'));
      if (!hooked && n >= 4) { add(el.parent, 'tscroll'); rows.forEach(r => add(r, 'trow')); continue; }
      if (!hooked) body.forEach(r => setG(r, gridClass(tracksOf(r))));
      if (head) add(head, 'thead');
    } else if (!attr(el, 'data-g') && n <= 3 && el.kids.some(k => words(k.all).length >= 40)) {
      setG(el, gridClass(tracksOf(el))); // a lone row of long text columns (e.g. a three-up note) stacks like any grid
    }
  }
  return set;
}

// ---- 3. rewrite one page ------------------------------------------------------------------------------------------
function build(html, route) {
  const els = parse(html);
  const body = els.find(e => e.tag === 'body');
  const inBody = els.filter(e => e.start > body.start);
  const set = hooks(inBody);
  const edits = [];
  for (const el of inBody) {
    let a = el.attrs.replace(/\sdata-m="[^"]*"/, '');
    const h = set.get(el);
    if (route !== '' && attr(el, 'data-g') != null && css(el, 'grid-template-columns')) a = a.replace(/\sdata-g="[^"]*"/, ` data-g="${gridClass(tracksOf(el))}"`);
    if (h && h.g && attr(el, 'data-g') == null) a += ` data-g="${h.g}"`;
    if (h && h.m.size) a += ` data-m="${[...h.m].sort().join(' ')}"`;
    if (a !== el.attrs) edits.push([el.start, el.end, html.slice(el.start, el.end).replace(el.attrs, () => a)]);
  }
  let out = '', at = 0;
  for (const [s, e, t] of edits) { out += html.slice(at, s) + t; at = e; }
  out += html.slice(at);

  const slug = route.replace(/\//g, '-') || 'home';
  const extra = path.join('pages', slug + '.css');
  const style = route === ''
    ? src('home-responsive.css')
    : src('rwd-pages.css') + (fs.existsSync(path.join(BUILD, extra)) ? '\n' + src(extra) : '');
  const js = src(route === '' ? 'rwd-home.js' : 'rwd.js');
  let n = 0;
  out = out
    .replace(/<style id="ms-responsive">\n[\s\S]*?\n<\/style>/, () => (n++, `<style id="ms-responsive">\n${style}\n</style>`))
    .replace(/<script>\n\/\/ (?:Shared|Homepage) responsive runtime[\s\S]*?\n<\/script>/, () => (n++, `<script>\n${js}\n</script>`));
  if (n !== 2) throw new Error(`${route || '/'}: expected the ms-responsive style and runtime script, found ${n} of 2`);
  return out;
}

const pages = [];
(function walk(dir) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    if (e.name.startsWith('.') || e.name.startsWith('_') || e.name === 'node_modules') continue;
    const p = path.join(dir, e.name);
    if (e.isDirectory()) walk(p); else if (e.name === 'index.html') pages.push(p);
  }
})(ROOT);

let stale = 0;
for (const file of pages.sort()) {
  const route = path.relative(ROOT, path.dirname(file)).split(path.sep).join('/');
  const before = fs.readFileSync(file, 'utf8');
  const after = build(before, route);
  if (after === before) continue;
  stale++;
  if (check) console.log('out of date:', route || '/');
  else { fs.writeFileSync(file, after); console.log('updated:', route || '/'); }
}
console.log(`${pages.length} pages, ${stale} ${check ? 'out of date' : 'updated'}`);
if (check && stale) process.exit(1);
