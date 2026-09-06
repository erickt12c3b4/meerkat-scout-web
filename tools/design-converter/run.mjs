import fs from "node:fs";
import path from "node:path";
import { Converter, BrandRegistry, loadPage, format, ROUTES } from "./convert.mjs";

const SRC = "/home/eric/meerkat-site-new/design_handoff_meerkat_scout_site";
const OUT = path.join(process.cwd(), "out");
const files = process.argv.slice(2).length ? process.argv.slice(2) : Object.keys(ROUTES);

// homepage hover classes (.ixN:hover{...})
const homeHtml = fs.readFileSync(path.join(SRC, "Meerkat-Scout-Homepage.html"), "utf8");
const IX = {};
for (const m of homeHtml.matchAll(/\.(ix\d+):(hover|active)\{([^}]*)\}/g)) {
  const [, cls, state, body] = m;
  IX[cls] ??= [];
  for (const d of body.split(";")) {
    const [p, v0] = d.split(":"); if (!p || !v0) continue;
    const v = v0.replace("!important", "").trim();
    const tw = p.trim() === "color" ? `text-[${v}]` : p.trim() === "background" ? `bg-[${v}]` : p.trim() === "border-color" ? `border-[${v}]` : `[${p.trim()}:${v}]`;
    IX[cls].push(`${state}:${tw}`);
  }
}
const mapClass = (c) => c.split(/\s+/).flatMap((k) => IX[k] || (k ? [k] : []));

const attrs = (n) => Object.fromEntries((n.attrs || []).map((a) => [a.name, a.value]));
const text = (n) => (n.nodeName === "#text" ? n.value : (n.childNodes || []).map(text).join(""));
const find = (n, pred) => { if (pred(n)) return n; for (const c of n.childNodes || []) { const r = find(c, pred); if (r) return r; } return null; };
const findAll = (n, pred, acc = []) => { if (pred(n)) acc.push(n); for (const c of n.childNodes || []) findAll(c, pred, acc); return acc; };

function chromeFor(file) {
  return (node, a, conv) => {
    if (node.tagName === "header") {
      const links = findAll(node, (n) => n.tagName === "a");
      const active = links.find((l) => /color:#171514/.test(attrs(l).style || ""));
      const demo = links.find((l) => /Book a demo/.test(text(l)));
      const props = [];
      if (active) props.push(`active="${text(active).trim().toLowerCase()}"`);
      const dh = attrs(demo || {}).href;
      if (dh && dh !== "Book-a-Demo.dc.html") props.push(`demoHref="${dh}"`);
      conv.chromeUsed ??= new Set(); conv.chromeUsed.add("SiteHeader");
      return `<SiteHeader ${props.join(" ")} />`;
    }
    if (node.tagName === "section" && a["data-screen-label"] === "CTA") {
      const h2 = find(node, (n) => n.tagName === "h2");
      const props = [];
      if (/Prefer to start/.test(text(h2))) props.push(`variant="demo"`);
      const trial = findAll(node, (n) => n.tagName === "a").find((l) => /Start your 14-day/.test(text(l)));
      const th = attrs(trial || {}).href;
      if (th && th !== "Pricing.dc.html") props.push(`trialHref="${th}"`);
      conv.chromeUsed ??= new Set(); conv.chromeUsed.add("PreFooterCta");
      return `<PreFooterCta ${props.join(" ")} />`;
    }
    if (node.tagName === "footer") {
      const links = findAll(node, (n) => n.tagName === "a");
      if (links.length < 8) { conv.chromeUsed ??= new Set(); conv.chromeUsed.add("ContactFooter"); return `<ContactFooter />`; }
      const cur = links.find((l) => /color:#FAF8F4/.test(attrs(l).style || ""));
      const props = [];
      if (cur) props.push(`current="${attrs(cur).href.replace(/\.dc\.html$/, "")}"`);
      if (a.id) props.push(`id="${a.id}"`);
      conv.chromeUsed ??= new Set(); conv.chromeUsed.add("SiteFooter");
      return `<SiteFooter ${props.join(" ")} />`;
    }
    return null;
  };
}

// pass 1: brand svgs
const brand = new BrandRegistry();
const pages = {};
for (const f of Object.keys(ROUTES)) {
  const p = loadPage(f); pages[f] = p; brand.collect(p.root);
}
brand.finalize(2);
fs.writeFileSync(path.join(OUT, "brand-icons.tsx"), await format(brand.render()));
console.log("brand icons:", [...brand.named.values()].join(", "));

// pass 2
const summary = [];
for (const f of files) {
  const { root } = pages[f];
  const isHome = !f.endsWith(".dc.html");
  const conv = new Converter({ hasReset: isHome, mapClass, chrome: chromeFor(f), brand, homeWrap: isHome });
  let body;
  if (isHome) {
    // the approved homepage sits in a 1440px centered wrapper; emit its children directly with full-bleed sections
    const wrapper = root.childNodes.find((n) => n.tagName === "div");
    body = wrapper.childNodes.map((c) => conv.emit(c, 1, { tag: "div", flex: false, homeRoot: true }, false)).filter((s) => s.trim()).join("\n");
  } else body = conv.emit(root, 1, { tag: "root", flex: false }, false);
  const name = f.replace(/\.dc\.html$|\.html$/, "").replace(/[^A-Za-z0-9]/g, "");
  const imports = [];
  if (conv.usesImage) imports.push(`import Image from "next/image";`);
  if (conv.usesLink) imports.push(`import Link from "next/link";`);
  if (conv.usesScaled) imports.push(`import { Scaled } from "@/components/site/scaled";`);
  if (conv.lucideUsed.size) imports.push(`import { ${[...conv.lucideUsed].sort().join(", ")} } from "lucide-react";`);
  const bu = [...brand.used].filter((b) => new RegExp(`<${b}\\b`).test(body));
  if (bu.length) imports.push(`import { ${bu.sort().join(", ")} } from "@/components/brand-icons";`);
  for (const c of conv.chromeUsed || []) imports.push(`import { ${c} } from "@/components/site/${c.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase()}";`);
  const code = `${imports.join("\n")}\n\n// Source: ${f} -> ${ROUTES[f]}\nexport default function ${name}Page() {\n  return (\n    <>\n${body}\n    </>\n  );\n}\n`;
  fs.writeFileSync(path.join(OUT, `${name}.tsx`), await format(code));
  summary.push(`${f.padEnd(34)} lucide=${conv.report.lucide} inlineSvg=${conv.report.unmatchedSvgs} tableLike=${conv.report.tables.length}`);
}
console.log(summary.join("\n"));
