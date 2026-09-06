// Design (port 3100, original HTML) vs app (port 3000) screenshots at 1440 + pixel diff.
import { chromium } from "/home/eric/meerkat-site-new/node_modules/playwright/index.mjs";
import fs from "node:fs";
import path from "node:path";
import { PNG } from "pngjs";
import pixelmatch from "pixelmatch";

const ROUTES = {
  "Meerkat-Scout-Homepage.html": "/",
  "Feed-Management.dc.html": "/platform/feed-management",
  "Diagnostics.dc.html": "/platform/diagnostics",
  "Rules-Engine.dc.html": "/platform/rules-engine",
  "Price-Intelligence.dc.html": "/platform/price-intelligence",
  "Conversion-Intelligence.dc.html": "/platform/conversion-intelligence",
  "Channels.dc.html": "/channels",
  "Google-Shopping.dc.html": "/channels/google-shopping",
  "Google-Ads.dc.html": "/channels/google-ads",
  "Meta.dc.html": "/channels/meta",
  "TikTok.dc.html": "/channels/tiktok",
  "Pinterest.dc.html": "/channels/pinterest",
  "Snapchat.dc.html": "/channels/snapchat",
  "Bing.dc.html": "/channels/bing",
  "Amazon.dc.html": "/channels/amazon",
  "Walmart.dc.html": "/channels/walmart",
  "eBay.dc.html": "/channels/ebay",
  "Pricing.dc.html": "/pricing",
  "Book-a-Demo.dc.html": "/demo",
  "Contact.dc.html": "/contact",
  "Help-Center.dc.html": "/help",
  "Security.dc.html": "/security",
  "Privacy-Policy.dc.html": "/legal/privacy",
  "Terms-of-Service.dc.html": "/legal/terms",
  "GDPR-Data-Rights.dc.html": "/legal/gdpr",
  "Cookie-Preferences.dc.html": "/legal/cookies",
};
const only = process.argv.slice(2);
const OUT = path.resolve("compare");
fs.mkdirSync(OUT, { recursive: true });
const browser = await chromium.launch();
const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 }, deviceScaleFactor: 1 });
const page = await ctx.newPage();
const results = [];
for (const [file, route] of Object.entries(ROUTES)) {
  if (only.length && !only.some((o) => route === o || file.startsWith(o))) continue;
  const name = route === "/" ? "home" : route.slice(1).replace(/\//g, "__");
  try {
    await page.goto(`http://localhost:3100/${file}`, { waitUntil: "networkidle", timeout: 90000 });
    await page.waitForTimeout(800);
    await page.evaluate(() => document.fonts.ready);
    const a = await page.screenshot({ fullPage: true });
    await page.goto(`http://localhost:3000${route}`, { waitUntil: "networkidle", timeout: 120000 });
    await page.waitForTimeout(400);
    await page.evaluate(() => document.fonts.ready);
    const b = await page.screenshot({ fullPage: true });
    const A = PNG.sync.read(a), B = PNG.sync.read(b);
    const w = Math.max(A.width, B.width), h = Math.max(A.height, B.height);
    const pad = (img) => { const o = new PNG({ width: w, height: h }); o.data.fill(255); PNG.bitblt(img, o, 0, 0, img.width, img.height, 0, 0); return o; };
    const PA = pad(A), PB = pad(B);
    const diff = new PNG({ width: w, height: h });
    const n = pixelmatch(PA.data, PB.data, diff.data, w, h, { threshold: 0.12, includeAA: true });
    const pct = ((n / (w * h)) * 100).toFixed(2);
    fs.writeFileSync(path.join(OUT, `${name}.design.png`), a);
    fs.writeFileSync(path.join(OUT, `${name}.app.png`), b);
    fs.writeFileSync(path.join(OUT, `${name}.diff.png`), PNG.sync.write(diff));
    results.push({ route, designH: A.height, appH: B.height, diffPct: +pct });
    console.log(`${route.padEnd(36)} design ${A.height}px  app ${B.height}px  diff ${pct}%`);
  } catch (e) {
    console.log(`${route.padEnd(36)} ERROR ${String(e.message).split("\n")[0]}`);
    results.push({ route, error: String(e.message).split("\n")[0] });
  }
}
await browser.close();
fs.writeFileSync(path.join(OUT, "results.json"), JSON.stringify(results, null, 2));
