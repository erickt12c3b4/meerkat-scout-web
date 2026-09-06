// Compare bounding boxes of matching elements (by selector list) between design and app for one route.
import { chromium } from "/home/eric/meerkat-site-new/node_modules/playwright/index.mjs";
const [file, route, sel = "h1,h2,h3,p,form,label,input,textarea,button,ul,li,img,svg,a"] = process.argv.slice(2);
const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
const measure = async (url) => {
  await page.goto(url, { waitUntil: "networkidle", timeout: 120000 });
  await page.evaluate(() => document.fonts.ready); await page.waitForTimeout(300);
  return page.evaluate((sel) => [...document.querySelectorAll(sel)].filter((e) => !e.closest("[data-slot=sheet-content]") && !e.closest("header") && !e.closest("footer") && e.getBoundingClientRect().height > 0).map((e) => { const r = e.getBoundingClientRect(); return { t: e.tagName.toLowerCase(), txt: (e.textContent || e.getAttribute("alt") || "").trim().replace(/\s+/g, " ").slice(0, 26), x: Math.round(r.left), y: Math.round(r.top + scrollY), w: Math.round(r.width), h: Math.round(r.height) }; }), sel);
};
const d = await measure(`http://localhost:3100/${file}`);
const a = await measure(`http://localhost:3000${route}`);
const n = Math.max(d.length, a.length);
let shown = 0;
for (let i = 0; i < n && shown < 60; i++) {
  const x = d[i], y = a[i];
  if (!x || !y) { console.log(`${i} only in ${x ? "design" : "app"}: ${JSON.stringify(x || y)}`); shown++; continue; }
  const diff = Math.abs(x.h - y.h) > 1 || Math.abs(x.w - y.w) > 1 || Math.abs(x.y - y.y) > 1 || Math.abs(x.x - y.x) > 1;
  if (diff) { console.log(`${String(i).padStart(3)} ${x.t.padEnd(8)} ${x.txt.padEnd(26)} design x${x.x} y${x.y} ${x.w}x${x.h} | app ${y.t.padEnd(8)} ${y.txt.slice(0, 26).padEnd(26)} x${y.x} y${y.y} ${y.w}x${y.h}`); shown++; }
}
await browser.close();
