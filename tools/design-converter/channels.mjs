import fs from "node:fs";
import path from "node:path";
import { Converter, BrandRegistry, loadPage, format, ROUTES } from "./convert.mjs";
const OUTDIR = "/home/eric/meerkat-site-new/content/channels";
fs.mkdirSync(OUTDIR, { recursive: true });
const CH = {
  "Google-Shopping.dc.html": ["google-shopping", "Google Shopping", "Google Shopping feeds — the channel most merchants start with"],
  "Google-Ads.dc.html": ["google-ads", "Google Ads", "Google Ads — the product feed your campaigns run on"],
  "Meta.dc.html": ["meta", "Meta", "Meta — one catalog for Facebook and Instagram Shops"],
  "TikTok.dc.html": ["tiktok", "TikTok", "TikTok Shop — a product catalog attached to your advertiser account"],
  "Pinterest.dc.html": ["pinterest", "Pinterest", "Pinterest — your products as Product Pins"],
  "Snapchat.dc.html": ["snapchat", "Snapchat", "Snapchat — a product catalog under the right organization and ad account"],
  "Bing.dc.html": ["bing", "Microsoft Bing", "Microsoft Bing — the same feed, a second Merchant Center"],
  "Amazon.dc.html": ["amazon", "Amazon", "Amazon — a catalog with its own schema for every product type"],
  "Walmart.dc.html": ["walmart", "Walmart", "Walmart Marketplace — credentials, item spec and GTIN exemptions"],
  "eBay.dc.html": ["ebay", "eBay", "eBay — category aspects, business policies and item location"],
};
const attrs = (n) => Object.fromEntries((n.attrs || []).map((a) => [a.name, a.value]));
const text = (n) => (n.nodeName === "#text" ? n.value : (n.childNodes || []).map(text).join("")).replace(/\s+/g, " ").trim();
const find = (n, pred) => { if (pred(n)) return n; for (const c of n.childNodes || []) { const r = find(c, pred); if (r) return r; } return null; };
const findAll = (n, pred, acc = []) => { if (pred(n)) acc.push(n); for (const c of n.childNodes || []) findAll(c, pred, acc); return acc; };
const kids = (n) => (n.childNodes || []).filter((c) => c.tagName);
const sec = (root, label) => find(root, (n) => n.tagName === "section" && attrs(n)["data-screen-label"] === label);

// brand registry from all pages (same naming as run.mjs)
const brand = new BrandRegistry();
for (const f of Object.keys(ROUTES)) brand.collect(loadPage(f).root);
brand.finalize(2);

const jsxText = (n, conv) => (n.childNodes || []).map((c) => conv.emit(c, 1, { tag: "p", flex: false }, false)).join("").trim();

const registry = [];
for (const [file, [slug, name, title]] of Object.entries(CH)) {
  const { root } = loadPage(file);
  const conv = new Converter({ hasReset: false, mapClass: (c) => c.split(/\s+/), chrome: () => null, brand });
  const hero = sec(root, `${name} hero`) || find(root, (n) => n.tagName === "section" && /hero$/.test(attrs(n)["data-screen-label"] || ""));
  const heroJsx = conv.emit(hero, 2, { tag: "root", flex: false }, false);
  const connect = sec(root, "Connect");
  const connectBorderTop = /border-top/.test(attrs(connect).style || "");
  const steps = findAll(connect, (n) => n.tagName === "li").map((li) => ({ title: text(find(li, (n) => n.tagName === "strong")), body: text(kids(li)[2]) }));
  const behavior = sec(root, "Distinguishing behavior");
  const rel = kids(behavior).find((k) => /position:relative/.test(attrs(k).style || ""));
  const wrapperSig = [attrs(behavior).style, attrs(kids(behavior)[0]).style].join(" || ");
  const behaviorJsx = (rel.childNodes || []).map((c) => conv.emit(c, 3, { tag: "div", flex: false }, false)).filter((s) => s.trim()).join("\n");
  const does = sec(root, "Does and requires");
  const cols = kids(kids(does)[0]);
  const doesItems = findAll(cols[0], (n) => n.tagName === "p" && !/uppercase/.test(attrs(n).style || "")).map((p) => jsxText(p, conv));
  const reqItems = findAll(cols[1], (n) => n.tagName === "li").map((li) => jsxText(kids(li)[1], conv));
  const notes = findAll(cols[1], (n) => n.tagName === "p");
  const requiresNote = jsxText(notes[notes.length - 1], conv);
  const dep = sec(root, "Depends on");
  const depends = findAll(dep, (n) => n.tagName === "a" && !/All ten/.test(text(n))).map((a) => { const s = kids(a); return { label: text(s[0]), title: text(s[1]), href: attrs(a).href }; });
  const lede = text(kids(kids(hero).find((k) => /grid/.test(attrs(k).style || ""))?.childNodes?.filter((c) => c.tagName)[0] || hero).childNodes?.filter((c) => c.tagName === "p")?.[1] || { childNodes: [] });
  const imports = [`import type { ChannelData } from "@/components/channels/channel-page";`];
  if (conv.usesImage) imports.push(`import Image from "next/image";`);
  if (conv.usesLink) imports.push(`import Link from "next/link";`);
  if (conv.usesScaled) imports.push(`import { Scaled } from "@/components/site/scaled";`);
  if (conv.lucideUsed.size) imports.push(`import { ${[...conv.lucideUsed].sort().join(", ")} } from "lucide-react";`);
  const all = heroJsx + behaviorJsx + doesItems.join("") + reqItems.join("") + requiresNote;
  const bu = [...brand.named.values()].filter((b) => new RegExp(`<${b}\\b`).test(all));
  if (bu.length) imports.push(`import { ${bu.sort().join(", ")} } from "@/components/brand-icons";`);
  const wrap = (s) => (/^<[A-Za-z]/.test(s) && !s.slice(1).includes("<") ? s : `<>${s}</>`);
  const code = `${imports.join("\n")}

// Source: ${file} -> /channels/${slug}
// Hero and "Distinguishing behavior" are bespoke compositions; the other sections are data for ChannelPage.

function Hero() {
  return (
    <>
${heroJsx}
    </>
  );
}

function Behavior() {
  return (
    <>
${behaviorJsx}
    </>
  );
}

export const ${slug.replace(/-([a-z])/g, (_, c) => c.toUpperCase())}: ChannelData = {
  slug: ${JSON.stringify(slug)},
  name: ${JSON.stringify(name)},
  title: ${JSON.stringify(title)},
  description: ${JSON.stringify(lede.slice(0, 300))},
  hero: <Hero />,
  connectBorderTop: ${connectBorderTop},
  behaviorBorderTop: ${/border-top/.test(attrs(behavior).style || "")},
  steps: ${JSON.stringify(steps, null, 2)},
  behavior: <Behavior />,
  does: [
${doesItems.map((d) => `    <>${d}</>,`).join("\n")}
  ],
  requires: [
${reqItems.map((d) => `    <>${d}</>,`).join("\n")}
  ],
  requiresNote: <>${requiresNote}</>,
  depends: ${JSON.stringify(depends.map((d) => ({ ...d, href: d.href.replace(/^Channels\.dc\.html#/, "/channels#").replace(/^Feed-Management\.dc\.html$/, "/platform/feed-management").replace(/^Diagnostics\.dc\.html$/, "/platform/diagnostics").replace(/^Rules-Engine\.dc\.html$/, "/platform/rules-engine").replace(/^Price-Intelligence\.dc\.html$/, "/platform/price-intelligence").replace(/^Conversion-Intelligence\.dc\.html$/, "/platform/conversion-intelligence") })), null, 2)},
};
`;
  fs.writeFileSync(path.join(OUTDIR, `${slug}.tsx`), await format(code));
  registry.push([slug, slug.replace(/-([a-z])/g, (_, c) => c.toUpperCase())]);
  console.log(slug.padEnd(16), "steps", steps.length, "does", doesItems.length, "req", reqItems.length, "dep", depends.length, "borderTop", connectBorderTop, "| wrapper:", wrapperSig.slice(0, 90));
}
fs.writeFileSync(path.join(OUTDIR, "index.ts"), await format(`${registry.map(([s, v]) => `import { ${v} } from "./${s}";`).join("\n")}
import type { ChannelData } from "@/components/channels/channel-page";

export const CHANNELS: ChannelData[] = [${registry.map(([, v]) => v).join(", ")}];
export const CHANNEL_BY_SLUG: Record<string, ChannelData> = Object.fromEntries(CHANNELS.map((c) => [c.slug, c]));
`));
