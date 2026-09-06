import { chromium } from "/home/eric/meerkat-site-new/node_modules/playwright/index.mjs";
const [file, route, sel, idx = "0"] = process.argv.slice(2);
const browser = await chromium.launch(); const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
const props = ["fontFamily","fontSize","fontWeight","lineHeight","letterSpacing","wordSpacing","textWrap","textWrapMode","textWrapStyle","overflowWrap","wordBreak","hyphens","fontKerning","fontFeatureSettings","fontVariationSettings","fontOpticalSizing","textRendering","fontSynthesis","padding","display","width","height","whiteSpace"];
const get = async (url) => { await page.goto(url, { waitUntil: "networkidle", timeout: 120000 }); await page.evaluate(() => document.fonts.ready); return page.evaluate(([sel, idx, props]) => { const el = document.querySelectorAll(sel)[+idx]; if (!el) return null; const cs = getComputedStyle(el); const o = { text: el.textContent.trim().slice(0, 40), rect: el.getBoundingClientRect().toJSON() }; for (const p of props) o[p] = cs[p]; return o; }, [sel, idx, props]); };
const d = await get(`http://localhost:3100/${file}`), a = await get(`http://localhost:3000${route}`);
for (const k of Object.keys(d || {})) { const x = JSON.stringify(d[k]), y = JSON.stringify(a?.[k]); console.log((x === y ? "   " : "DIFF") + " " + k.padEnd(14) + " design " + x.slice(0, 70) + "  | app " + y?.slice(0, 70)); }
await browser.close();
