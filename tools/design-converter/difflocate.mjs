// For each compare/*.diff.png: find rows with significant diff, print first divergence and crop side-by-side strips.
import fs from "node:fs";
import path from "node:path";
import { PNG } from "pngjs";
const dir = path.resolve("compare");
const only = process.argv.slice(2);
for (const f of fs.readdirSync(dir).filter((f) => f.endsWith(".diff.png"))) {
  const name = f.replace(".diff.png", "");
  if (only.length && !only.includes(name)) continue;
  const diff = PNG.sync.read(fs.readFileSync(path.join(dir, f)));
  const rows = [];
  for (let y = 0; y < diff.height; y++) {
    let n = 0;
    for (let x = 0; x < diff.width; x++) { const i = (y * diff.width + x) * 4; if (diff.data[i] === 255 && diff.data[i + 1] === 0) n++; }
    rows.push(n);
  }
  // first row with > 2% of width differing, then bands
  const bands = [];
  let inBand = false, start = 0;
  for (let y = 0; y < rows.length; y++) {
    const hot = rows[y] > diff.width * 0.02;
    if (hot && !inBand) { inBand = true; start = y; }
    if (!hot && inBand) { inBand = false; if (y - start > 3) bands.push([start, y]); }
  }
  if (inBand) bands.push([start, rows.length]);
  const first = bands[0];
  console.log(`${name.padEnd(36)} bands: ${bands.slice(0, 8).map((b) => `${b[0]}-${b[1]}`).join(", ")}${bands.length > 8 ? " …" : ""}`);
  if (!first) continue;
  // crop strip around first band from design and app, stacked vertically
  const A = PNG.sync.read(fs.readFileSync(path.join(dir, `${name}.design.png`)));
  const B = PNG.sync.read(fs.readFileSync(path.join(dir, `${name}.app.png`)));
  const y0 = Math.max(0, first[0] - 120), h = 360;
  const out = new PNG({ width: 1440, height: h * 2 + 6 });
  out.data.fill(0);
  PNG.bitblt(A, out, 0, y0, 1440, Math.min(h, A.height - y0), 0, 0);
  PNG.bitblt(B, out, 0, y0, 1440, Math.min(h, B.height - y0), 0, h + 6);
  fs.writeFileSync(path.join(dir, `${name}.strip.png`), PNG.sync.write(out));
}
