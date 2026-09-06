// QA: full-page screenshots of every route at the review widths, plus a horizontal-overflow check.
// Usage: node qa/screenshot.mjs [baseUrl] [--routes=/a,/b] [--widths=360,1440]
// Output: qa/screens/<width>/<route>.jpg (full page, JPEG q85 to keep the repo small) and qa/overflow-report.json
import { chromium } from "playwright";
import fs from "node:fs";
import path from "node:path";

const args = process.argv.slice(2);
const base = args.find((a) => !a.startsWith("--")) || "http://localhost:3000";
const opt = (k, d) => (args.find((a) => a.startsWith(`--${k}=`)) || "").split("=")[1] || d;
const WIDTHS = opt("widths", "360,390,768,1024,1280,1440").split(",").map(Number);
const ROUTES = opt(
  "routes",
  [
    "/",
    "/platform/feed-management",
    "/platform/diagnostics",
    "/platform/rules-engine",
    "/platform/price-intelligence",
    "/platform/conversion-intelligence",
    "/channels",
    "/channels/google-shopping",
    "/channels/google-ads",
    "/channels/meta",
    "/channels/tiktok",
    "/channels/pinterest",
    "/channels/snapchat",
    "/channels/bing",
    "/channels/amazon",
    "/channels/walmart",
    "/channels/ebay",
    "/pricing",
    "/demo",
    "/contact",
    "/help",
    "/security",
    "/legal/privacy",
    "/legal/terms",
    "/legal/gdpr",
    "/legal/cookies",
  ].join(","),
).split(",");

const outDir = path.resolve("qa/screens");
const browser = await chromium.launch();
const report = [];
for (const width of WIDTHS) {
  const ctx = await browser.newContext({ viewport: { width, height: 900 }, deviceScaleFactor: 1 });
  const page = await ctx.newPage();
  fs.mkdirSync(path.join(outDir, String(width)), { recursive: true });
  for (const route of ROUTES) {
    const url = base + route;
    try {
      // the dev server restarts itself under memory pressure; retry a few times
      for (let attempt = 0; ; attempt++) {
        try {
          await page.goto(url, { waitUntil: "networkidle", timeout: 90000 });
          break;
        } catch (e) {
          if (attempt >= 4 || !/ERR_CONNECTION_REFUSED|ERR_EMPTY_RESPONSE|Timeout/.test(String(e.message))) throw e;
          await new Promise((r) => setTimeout(r, 4000));
        }
      }
      await page.waitForTimeout(250);
      const overflow = await page.evaluate(() => {
        const vw = document.documentElement.clientWidth;
        const sw = document.documentElement.scrollWidth;
        const offenders = [];
        if (sw > vw + 1) {
          for (const el of document.querySelectorAll("body *")) {
            const r = el.getBoundingClientRect();
            if (r.right > vw + 1 && r.width > 0) {
              // skip elements clipped by an overflow-hidden ancestor
              let p = el.parentElement, clipped = false;
              while (p) {
                const o = getComputedStyle(p).overflowX;
                if (o === "hidden" || o === "clip") { clipped = true; break; }
                p = p.parentElement;
              }
              if (!clipped) offenders.push(`${el.tagName.toLowerCase()}${el.id ? "#" + el.id : ""}.${(el.className && el.className.baseVal === undefined ? el.className : "").toString().split(" ").slice(0, 3).join(".")} right=${Math.round(r.right)}`);
              if (offenders.length > 8) break;
            }
          }
        }
        return { vw, sw, offenders };
      });
      const name = route === "/" ? "home" : route.replace(/^\//, "").replace(/\//g, "__");
      await page.screenshot({ path: path.join(outDir, String(width), `${name}.jpg`), fullPage: true, type: "jpeg", quality: 85 });
      report.push({ width, route, scrollWidth: overflow.sw, viewport: overflow.vw, overflow: overflow.sw > overflow.vw + 1, offenders: overflow.offenders });
      if (overflow.sw > overflow.vw + 1) console.log(`OVERFLOW ${width} ${route}: ${overflow.sw}>${overflow.vw} ${overflow.offenders.slice(0, 3).join(" | ")}`);
    } catch (e) {
      report.push({ width, route, error: String(e.message).split("\n")[0] });
      console.log(`ERROR ${width} ${route}: ${String(e.message).split("\n")[0]}`);
    }
  }
  await ctx.close();
}
await browser.close();
fs.writeFileSync("qa/overflow-report.json", JSON.stringify(report, null, 2));
const bad = report.filter((r) => r.overflow || r.error);
console.log(`done: ${report.length} shots, ${bad.length} with overflow/errors`);
