// Dead-link audit. Run against a prod build (`npm run build && npm start`), then `node qa/linkcheck.mjs`.
// Exit code 1 when any href fails. Only #signin and #start-free-trial are allowed non-resolving hrefs.
import { readFileSync } from "node:fs";
const BASE = "http://localhost:3000";
const routesSrc = readFileSync("lib/routes.ts", "utf8");
const ROUTES = [...routesSrc.matchAll(/"(\/[^"]*)"/g)].map((m) => m[1]);
const STUBS = new Set(["#signin", "#start-free-trial"]);
const html = new Map();
async function page(p) {
  if (!html.has(p)) {
    const r = await fetch(BASE + p);
    html.set(p, { status: r.status, body: await r.text() });
  }
  return html.get(p);
}
const ids = (body) => new Set([...body.matchAll(/\sid="([^"]+)"/g)].map((m) => m[1]));
const problems = [], seen = new Map();
for (const route of ROUTES) {
  const { status, body } = await page(route);
  if (status !== 200) { problems.push({ route, href: "(page)", why: `status ${status}` }); continue; }
  const hrefs = [...body.matchAll(/<a\s[^>]*?href="([^"]*)"/g)].map((m) => m[1].replace(/&amp;/g, "&"));
  for (const href of new Set(hrefs)) {
    seen.set(href, (seen.get(href) || 0) + 1);
    if (STUBS.has(href)) continue;
    if (/^(https?:|mailto:|tel:)/.test(href)) continue;
    if (href === "#" || href === "") { problems.push({ route, href, why: "bare/empty hash" }); continue; }
    let path = route, hash = "";
    if (href.startsWith("#")) hash = href.slice(1);
    else { const [p, h] = href.split("#"); path = p; hash = h || ""; }
    const target = await page(path);
    if (target.status !== 200) { problems.push({ route, href, why: `target ${path} → ${target.status}` }); continue; }
    if (hash && !ids(target.body).has(hash)) problems.push({ route, href, why: `no id="${hash}" on ${path}` });
  }
}
console.log(`routes: ${ROUTES.length}  unique hrefs: ${seen.size}  problems: ${problems.length}`);
for (const p of problems) console.log(`  ${p.route}  ${p.href}  — ${p.why}`);
console.log("--- external/mailto seen:");
for (const [h] of seen) if (/^(https?:|mailto:|tel:)/.test(h)) console.log("  " + h);
// also probe the dropped route directly
process.exitCode = problems.length ? 1 : 0;
for (const p of ["/solutions", "/solutions/fix-feed-errors"]) console.log(`probe ${p} → ${(await page(p)).status}`);
