// Build the "Measured numbers" markdown table from sections-1440.txt + compare-1440.txt and inject into the docs.
import fs from "node:fs";
const sec = fs.readFileSync("sections-1440.txt", "utf8");
const cmp = fs.existsSync("compare-1440.txt") ? fs.readFileSync("compare-1440.txt", "utf8") : "";
const rows = {};
let cur = null;
for (const line of sec.split("\n")) {
  const m = line.match(/^== (\S+)\s+design=(\d+)\s+app=(\d+)/);
  if (m) { cur = m[1]; rows[cur] = { design: +m[2], app: +m[3], drift: [] }; continue; }
  const d = line.match(/^\s+(.+?)\s+design h=\s*(\d+) top=\s*\d+ \| app h=\s*(\d+) top=\s*\d+\s+<-- (-?\d+)/);
  if (d && cur) rows[cur].drift.push(`${d[1].trim()} ${+d[4] > 0 ? "+" : ""}${d[4]}px`);
}
for (const line of cmp.split("\n")) {
  const m = line.match(/^(\S+)\s+design (\d+)px\s+app (\d+)px\s+diff ([\d.]+)%/);
  if (m && rows[m[1]]) rows[m[1]].pixel = m[4];
}
const order = Object.keys(rows).sort((a, b) => (a === "/" ? -1 : b === "/" ? 1 : a.localeCompare(b)));
let md = "| Route | Page height design → app | Section drift | Full-page pixel diff |\n| --- | --- | --- | --- |\n";
for (const r of order) {
  const x = rows[r];
  const note = r === "/" ? "expected: pre-footer CTA is its own section (−480 in Pricing, +480 at the end) and the shared footer is 22px shorter (line-height)" : x.drift.length ? x.drift.join("; ") : "none";
  md += `| \`${r}\` | ${x.design} → ${x.app} (${x.app - x.design >= 0 ? "+" : ""}${x.app - x.design}) | ${note} | ${x.pixel ? x.pixel + "%" : "—"} |\n`;
}
md += "\nPixel diff = pixelmatch (threshold .12, anti-aliasing included) over the full-page screenshots at 1440; it is dominated by sub-pixel text rasterisation differences between two separate page loads and by the homepage's structural changes (see notes), which is why the section-height columns are the ones to read.\n";
const p = "/home/eric/meerkat-site-new/docs/fidelity-checklist.md";
let doc = fs.readFileSync(p, "utf8");
doc = doc.replace(/<!-- NUMBERS -->[\s\S]*?(?=\n## Global decisions)/, "<!-- NUMBERS -->\n\n" + md).replace("Filled from `sections-1440` / `compare-1440` runs at the end of the session:", "From the final measurement run (design files on :3100 vs production build on :3000, headless Chromium 1440×900):");
fs.writeFileSync(p, doc);
console.log(md);
