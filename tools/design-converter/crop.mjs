import fs from "node:fs"; import { PNG } from "pngjs";
const [src, y0s, hs, out] = process.argv.slice(2); const y0 = +y0s, h = +hs;
const A = PNG.sync.read(fs.readFileSync(src));
const H = Math.min(h, A.height - y0);
const o = new PNG({ width: A.width, height: H }); PNG.bitblt(A, o, 0, y0, A.width, H, 0, 0);
fs.writeFileSync(out, PNG.sync.write(o)); console.log(A.width, A.height, "->", out);
