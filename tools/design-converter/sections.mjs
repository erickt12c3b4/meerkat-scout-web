// Compare section heights (design vs app) at 1440 to find layout drift.
import { chromium } from "/home/eric/meerkat-site-new/node_modules/playwright/index.mjs";
const ROUTES = JSON.parse(process.env.ROUTES_JSON || "null") || {
  "Feed-Management.dc.html": "/platform/feed-management", "Diagnostics.dc.html": "/platform/diagnostics", "Rules-Engine.dc.html": "/platform/rules-engine", "Price-Intelligence.dc.html": "/platform/price-intelligence", "Conversion-Intelligence.dc.html": "/platform/conversion-intelligence", "Channels.dc.html": "/channels", "Google-Shopping.dc.html": "/channels/google-shopping", "Google-Ads.dc.html": "/channels/google-ads", "Meta.dc.html": "/channels/meta", "TikTok.dc.html": "/channels/tiktok", "Pinterest.dc.html": "/channels/pinterest", "Snapchat.dc.html": "/channels/snapchat", "Bing.dc.html": "/channels/bing", "Amazon.dc.html": "/channels/amazon", "Walmart.dc.html": "/channels/walmart", "eBay.dc.html": "/channels/ebay", "Pricing.dc.html": "/pricing", "Book-a-Demo.dc.html": "/demo", "Contact.dc.html": "/contact", "Help-Center.dc.html": "/help", "Security.dc.html": "/security", "Privacy-Policy.dc.html": "/legal/privacy", "Terms-of-Service.dc.html": "/legal/terms", "GDPR-Data-Rights.dc.html": "/legal/gdpr", "Cookie-Preferences.dc.html": "/legal/cookies", "Meerkat-Scout-Homepage.html": "/",
};
const only = process.argv.slice(2);
const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
const measure = async (url) => {
  await page.goto(url, { waitUntil: "networkidle", timeout: 120000 });
  await page.evaluate(() => document.fonts.ready);
  await page.waitForTimeout(300);
  return page.evaluate(() => [...document.querySelectorAll("header, section, footer, main > div")].filter((e) => e.closest("[data-slot=sheet-content]") === null).map((e) => ({ tag: e.tagName.toLowerCase(), label: e.getAttribute("data-screen-label") || e.id || (e.querySelector("h1,h2,p")?.textContent || "").trim().slice(0, 30), top: Math.round(e.getBoundingClientRect().top + scrollY), h: Math.round(e.getBoundingClientRect().height) })));
};
for (const [file, route] of Object.entries(ROUTES)) {
  if (only.length && !only.some((o) => route === o)) continue;
  try {
    const d = await measure(`http://localhost:3100/${file}`);
    const a = await measure(`http://localhost:3000${route}`);
    console.log(`\n== ${route}  design=${d.at(-1)?.top + d.at(-1)?.h}  app=${a.at(-1)?.top + a.at(-1)?.h}`);
    const n = Math.max(d.length, a.length);
    for (let i = 0; i < n; i++) {
      const x = d[i], y = a[i];
      const flag = x && y && Math.abs(x.h - y.h) > 1 ? "  <-- " + (y.h - x.h) : "";
      console.log(`  ${(x?.label || "-").padEnd(28).slice(0, 28)} design h=${String(x?.h ?? "-").padStart(5)} top=${String(x?.top ?? "-").padStart(5)} | app h=${String(y?.h ?? "-").padStart(5)} top=${String(y?.top ?? "-").padStart(5)}${flag}`);
    }
  } catch (e) { console.log(route, "ERROR", String(e.message).split("\n")[0]); }
}
await browser.close();
