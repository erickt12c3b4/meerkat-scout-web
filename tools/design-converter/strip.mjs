import fs from "node:fs"; import path from "node:path"; import { PNG } from "pngjs";
const [name, y0s, hs, y1s] = process.argv.slice(2); const y0 = +y0s, h = +hs, y1 = y1s ? +y1s : y0;
const dir = path.resolve("compare");
const A = PNG.sync.read(fs.readFileSync(path.join(dir, `${name}.design.png`)));
const B = PNG.sync.read(fs.readFileSync(path.join(dir, `${name}.app.png`)));
const out = new PNG({ width: 1440, height: h * 2 + 6 }); out.data.fill(0);
PNG.bitblt(A, out, 0, y0, 1440, Math.min(h, A.height - y0), 0, 0);
PNG.bitblt(B, out, 0, y1, 1440, Math.min(h, B.height - y1), 0, h + 6);
fs.writeFileSync(path.join(dir, `${name}.crop.png`), PNG.sync.write(out)); console.log("ok");
