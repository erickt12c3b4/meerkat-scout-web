// Design-handoff HTML -> Next.js/Tailwind JSX converter (one-off migration tool).
// Usage: node convert.mjs <file.html> [...] ; writes out/<Name>.tsx and prints a report.
import fs from "node:fs";
import path from "node:path";
import { parse } from "parse5";
import { icons as LUCIDE } from "lucide";
import prettier from "prettier";

const SRC = "/home/eric/meerkat-site-new/design_handoff_meerkat_scout_site";
const OUT = path.join(process.cwd(), "out");
fs.mkdirSync(OUT, { recursive: true });

// ---------------------------------------------------------------- routes
export const ROUTES = {
  "Meerkat-Scout-Homepage.html": "/",
  "Feed-Management.dc.html": "/platform/feed-management",
  "Diagnostics.dc.html": "/platform/diagnostics",
  "Rules-Engine.dc.html": "/platform/rules-engine",
  "Price-Intelligence.dc.html": "/platform/price-intelligence",
  "Conversion-Intelligence.dc.html": "/platform/conversion-intelligence",
  "Channels.dc.html": "/channels",
  "Google-Shopping.dc.html": "/channels/google-shopping",
  "Google-Ads.dc.html": "/channels/google-ads",
  "Meta.dc.html": "/channels/meta",
  "TikTok.dc.html": "/channels/tiktok",
  "Pinterest.dc.html": "/channels/pinterest",
  "Snapchat.dc.html": "/channels/snapchat",
  "Bing.dc.html": "/channels/bing",
  "Amazon.dc.html": "/channels/amazon",
  "Walmart.dc.html": "/channels/walmart",
  "eBay.dc.html": "/channels/ebay",
  "Pricing.dc.html": "/pricing",
  "Book-a-Demo.dc.html": "/demo",
  "Contact.dc.html": "/contact",
  "Help-Center.dc.html": "/help",
  "Security.dc.html": "/security",
  "Privacy-Policy.dc.html": "/legal/privacy",
  "Terms-of-Service.dc.html": "/legal/terms",
  "GDPR-Data-Rights.dc.html": "/legal/gdpr",
  "Cookie-Preferences.dc.html": "/legal/cookies",
};
function mapHref(href) {
  if (!href) return href;
  const [file, hash] = href.split("#");
  if (file === "" && hash !== undefined) return "#" + hash;
  if (ROUTES[file] !== undefined) {
    const r = ROUTES[file];
    return hash ? (r === "/" ? "/#" + hash : r + "#" + hash) : r;
  }
  return href;
}

// ---------------------------------------------------------------- colors
const COLORS = {
  "#f7f4ef": "paper", "#faf8f4": "paper-light", "#faf9f8": "paper-warm",
  "#ffffff": "white", "#fff": "white", "#000": "black", "#000000": "black",
  "#171514": "ink", "#52525b": "body", "#3f3f46": "nav", "#6b655e": "dim", "#8a857f": "faint", "#a9a7a2": "placeholder",
  "#ede9e4": "line", "#e7e1d9": "line-strong", "#ddd6cc": "line-input", "#d9d2c8": "line-button", "#f1ece5": "tint",
  "#a0431a": "rust", "#c2571e": "rust-button", "#e2703a": "rust-bright", "#e5813a": "amber", "#fff3ec": "rust-tint", "#fff6e8": "badge", "#f3d9c8": "tint-line", "#f3c7ae": "tint-line-strong",
  "#0a0a0a": "night", "#0b0a09": "night-deep", "#141312": "night-card", "#2e2a26": "night-line", "#26231f": "night-line-2", "#1f1d1b": "night-line-3", "#3a3430": "night-line-4", "#46423e": "night-line-5",
  "#d2ccc5": "night-text", "#b7b0a8": "night-muted", "#a8a29a": "night-muted-2",
  "#121110": "footer-top", "#0c0c0c": "footer-bottom", "#4a4540": "footer-edge", "#332e2a": "footer-rule", "#5c5650": "footer-dot", "#6a2f18": "curve",
  "#2e9e5b": "ok", "#5dbb7a": "ok-bright", "#1f7a4c": "ok-text", "#eaf5ee": "ok-tint", "#4e7a57": "check", "#e5a33a": "warn", "#b42318": "danger", "#fdecea": "danger-tint", "#2f6b3a": "success", "#e8f3ea": "success-tint",
  transparent: "transparent", currentcolor: "current", inherit: "inherit",
};
const SHADOWS = {
  "0 1px 2px rgba(24,24,27,.10)": "hairline", "0 1px 2px rgba(24,24,27,.1)": "hairline",
  "0 10px 28px rgba(24,24,27,.06)": "card",
  "0 14px 34px rgba(24,24,27,.08)": "raised", "0 14px 34px rgba(24,24,27,.06)": "raised-soft",
  "0 18px 44px rgba(24,24,27,.12)": "hero", "0 18px 44px rgba(24,24,27,.08)": "hero-soft",
  "0 24px 60px rgba(0,0,0,.45)": "float",
};
const RADII = { "6px": "6", "8px": "8", "10px": "10", "12px": "12", "14px": "14", "16px": "16", "999px": "full", "9999px": "full", "50%": "full", "0": "none", "0px": "none" };

const isHex = (v) => /^#[0-9a-f]{3,8}$/i.test(v);
function colorClass(prefix, v) {
  const k = v.trim().toLowerCase();
  if (COLORS[k]) return `${prefix}-${COLORS[k]}`;
  if (isHex(k)) return `${prefix}-[${k.toUpperCase()}]`;
  return `${prefix}-[${k.replace(/\s+/g, "_")}]`;
}
const arb = (v) => v.trim().replace(/\s+/g, "_");
function len(v) {
  v = v.trim();
  if (v === "0" || v === "0px") return "0";
  if (v === "auto") return "auto";
  if (v === "100%") return "full";
  if (v === "50%") return "1/2";
  if (v === "1px") return "px";
  if (v === "100vw") return "screen";
  if (v === "100vh") return "screen";
  if (v === "fit-content") return "fit";
  if (v === "max-content") return "max";
  if (v === "min-content") return "min";
  return `[${arb(v)}]`;
}
function sideClasses(prefix, vals) {
  // vals: [top,right,bottom,left]
  const [t, r, b, l] = vals;
  const out = [];
  const cls = (p, v) => {
    const L = len(v);
    if (L.startsWith("[-") ) return `-${p}-[${L.slice(2)}`;
    return `${p}-${L}`;
  };
  if (t === r && r === b && b === l) return [cls(prefix, t)];
  if (t === b && r === l) return [cls(prefix + "x", r), cls(prefix + "y", t)];
  // 3 equal
  const vals2 = [t, r, b, l];
  const counts = {};
  for (const v of vals2) counts[v] = (counts[v] || 0) + 1;
  const common = Object.keys(counts).find((k) => counts[k] === 3);
  if (common) {
    out.push(cls(prefix, common));
    [["t", t], ["r", r], ["b", b], ["l", l]].forEach(([s, v]) => { if (v !== common) out.push(cls(prefix + s, v)); });
    return out;
  }
  if (t === b) out.push(cls(prefix + "y", t)); else out.push(cls(prefix + "t", t), cls(prefix + "b", b));
  if (r === l) out.push(cls(prefix + "x", r)); else out.push(cls(prefix + "r", r), cls(prefix + "l", l));
  return out;
}
function expand4(v) {
  const p = v.trim().split(/\s+/);
  if (p.length === 1) return [p[0], p[0], p[0], p[0]];
  if (p.length === 2) return [p[0], p[1], p[0], p[1]];
  if (p.length === 3) return [p[0], p[1], p[2], p[1]];
  return p.slice(0, 4);
}
const WEIGHTS = { 100: "thin", 200: "extralight", 300: "light", 400: "normal", 500: "medium", 600: "semibold", 700: "bold", 800: "extrabold", 900: "black", normal: "normal", bold: "bold" };

function parseStyle(style) {
  const decls = [];
  for (const part of style.split(";")) {
    const i = part.indexOf(":");
    if (i < 0) continue;
    const prop = part.slice(0, i).trim().toLowerCase();
    const val = part.slice(i + 1).trim().replace(/\s*!important$/, "");
    if (prop) decls.push([prop, val]);
  }
  return decls;
}

// Convert one declaration to tailwind classes. Returns array of classes.
function declToClasses(prop, val, ctx) {
  const v = val.trim();
  const vl = v.toLowerCase();
  const A = (s) => [`[${prop}:${arb(v)}]`];
  switch (prop) {
    case "display": {
      const m = { flex: "flex", grid: "grid", block: "block", "inline-flex": "inline-flex", "inline-block": "inline-block", inline: "inline", none: "hidden", contents: "contents", table: "table", "inline-grid": "inline-grid", "list-item": "list-item" };
      return m[vl] ? [m[vl]] : A();
    }
    case "position": return ["relative", "absolute", "sticky", "fixed", "static"].includes(vl) ? [vl] : A();
    case "top": case "left": case "right": case "bottom": {
      const L = len(v); if (L.startsWith("[-")) return [`-${prop}-[${L.slice(2)}`]; return [`${prop}-${L}`];
    }
    case "inset": { if (vl === "0") return ["inset-0"]; const p = v.split(/\s+/); if (p.length === 1) return [`inset-${len(v)}`]; return [`[inset:${arb(v)}]`]; }
    case "z-index": return /^(0|10|20|30|40|50)$/.test(vl) ? [`z-${vl}`] : [`z-[${vl}]`];
    case "width": return [`w-${len(v)}`];
    case "height": return [`h-${len(v)}`];
    case "min-width": return [`min-w-${len(v)}`];
    case "min-height": return [`min-h-${len(v)}`];
    case "max-width": return vl === "none" ? ["max-w-none"] : [`max-w-${len(v)}`];
    case "max-height": return [`max-h-${len(v)}`];
    case "padding": return sideClasses("p", expand4(v));
    case "margin": return sideClasses("m", expand4(v));
    case "padding-top": return sideClasses("p", [v, " ", " ", " "]).filter((c) => c.includes("pt-"));
    case "padding-right": return [`pr-${len(v)}`];
    case "padding-bottom": return [`pb-${len(v)}`];
    case "padding-left": return [`pl-${len(v)}`];
    case "margin-top": { const L = len(v); return L.startsWith("[-") ? [`-mt-[${L.slice(2)}`] : [`mt-${L}`]; }
    case "margin-right": { const L = len(v); return L.startsWith("[-") ? [`-mr-[${L.slice(2)}`] : [`mr-${L}`]; }
    case "margin-bottom": { const L = len(v); return L.startsWith("[-") ? [`-mb-[${L.slice(2)}`] : [`mb-${L}`]; }
    case "margin-left": { const L = len(v); return L.startsWith("[-") ? [`-ml-[${L.slice(2)}`] : [`ml-${L}`]; }
    case "gap": { const p = v.split(/\s+/); if (p.length === 1) return [`gap-${len(v)}`]; return [`gap-y-${len(p[0])}`, `gap-x-${len(p[1])}`]; }
    case "row-gap": return [`gap-y-${len(v)}`];
    case "column-gap": return [`gap-x-${len(v)}`];
    case "font-size": {
      if (/^[\d.]+px$/.test(vl)) return [`text-[${vl}]`];
      return [`text-[length:${arb(v)}]`];
    }
    case "font-weight": return WEIGHTS[vl] ? [`font-${WEIGHTS[vl]}`] : [`font-[${vl}]`];
    case "line-height": return vl === "1" ? ["leading-none"] : [`leading-[${arb(v)}]`];
    case "letter-spacing": return vl === "0" || vl === "normal" ? ["tracking-normal"] : [`tracking-[${arb(v)}]`];
    case "text-transform": return vl === "uppercase" ? ["uppercase"] : vl === "none" ? ["normal-case"] : vl === "capitalize" ? ["capitalize"] : A();
    case "font-style": return vl === "italic" ? ["italic"] : ["not-italic"];
    case "font-family": return /mono/i.test(vl) ? ["font-mono"] : /geist|system-ui|sans/i.test(vl) ? ["font-sans"] : [`[font-family:${arb(v)}]`];
    case "font-variant-numeric": return vl.includes("tabular-nums") ? ["tabular-nums"] : A();
    case "font-feature-settings": return A();
    case "color": return [colorClass("text", v)];
    case "background-color": return [colorClass("bg", v)];
    case "background": {
      if (COLORS[vl] || isHex(vl)) return [colorClass("bg", v)];
      if (vl === "none") return ["bg-none"];
      if (/^(radial|linear|conic)-gradient\(/.test(vl) && !/\)\s+\S/.test(vl.replace(/\([^()]*(\([^()]*\))*[^()]*\)/, ""))) {
        return [`bg-[${arb(v).replace(/assets\//g, "/assets/")}]`];
      }
      if (/^rgba?\(/.test(vl) && !/\)\s*\S/.test(vl)) return [`bg-[${arb(v)}]`];
      return [`[background:${arb(v).replace(/url\(assets\//g, "url(/assets/")}]`];
    }
    case "background-image": return vl === "none" ? ["bg-none"] : [`bg-[${arb(v).replace(/assets\//g, "/assets/")}]`];
    case "background-size": return vl === "cover" ? ["bg-cover"] : vl === "contain" ? ["bg-contain"] : [`bg-[length:${arb(v)}]`];
    case "background-position": return [`bg-[position:${arb(v)}]`];
    case "background-repeat": return vl === "no-repeat" ? ["bg-no-repeat"] : [`bg-${vl}`];
    case "border": case "outline": {
      if (prop === "outline" && vl === "none") return ["outline-none"];
      if (vl === "none" || vl === "0") return [prop === "border" ? "border-0" : "outline-0"];
      const p = v.split(/\s+/);
      const out = [];
      const pre = prop === "border" ? "border" : "outline";
      const w = p.find((x) => /^[\d.]+px$/.test(x));
      const st = p.find((x) => /^(solid|dashed|dotted|double|none)$/.test(x));
      const c = p.find((x) => isHex(x) || COLORS[x.toLowerCase()] || /^rgba?\(/.test(x));
      if (w === "1px" || !w) out.push(pre); else out.push(`${pre}-[${w}]`);
      if (st && st !== "solid") out.push(`${pre}-${st}`);
      if (c) out.push(colorClass(pre, c));
      return out;
    }
    case "border-top": case "border-right": case "border-bottom": case "border-left": {
      const s = prop.split("-")[1][0];
      if (vl === "none" || vl === "0") return [`border-${s}-0`];
      const p = v.split(/\s+/);
      const out = [];
      const w = p.find((x) => /^[\d.]+px$/.test(x));
      const st = p.find((x) => /^(solid|dashed|dotted)$/.test(x));
      const c = p.find((x) => isHex(x) || COLORS[x.toLowerCase()] || /^rgba?\(/.test(x));
      if (w === "1px" || !w) out.push(`border-${s}`); else out.push(`border-${s}-[${w}]`);
      if (st && st !== "solid") out.push(`border-${st}`);
      if (c) out.push(colorClass(`border-${s}`, c));
      return out;
    }
    case "border-color": return [colorClass("border", v)];
    case "border-width": return vl === "1px" ? ["border"] : [`border-[${vl}]`];
    case "border-style": return [`border-${vl}`];
    case "border-radius": {
      const p = v.split(/\s+/);
      if (p.length === 1) return RADII[vl] ? [`rounded-${RADII[vl]}`] : [`rounded-[${vl}]`];
      return [`rounded-[${arb(v)}]`];
    }
    case "border-top-left-radius": return [`rounded-tl-${RADII[vl] || `[${vl}]`}`];
    case "border-top-right-radius": return [`rounded-tr-${RADII[vl] || `[${vl}]`}`];
    case "border-bottom-left-radius": return [`rounded-bl-${RADII[vl] || `[${vl}]`}`];
    case "border-bottom-right-radius": return [`rounded-br-${RADII[vl] || `[${vl}]`}`];
    case "box-shadow": {
      const key = vl.replace(/\s*,\s*/g, ",").replace(/\s+/g, " ");
      if (vl === "none") return ["shadow-none"];
      if (SHADOWS[key]) return [`shadow-${SHADOWS[key]}`];
      return [`shadow-[${arb(v)}]`];
    }
    case "box-sizing": return vl === "content-box" ? ["box-content"] : [];
    case "flex": {
      if (vl === "none" || vl === "0 0 auto") return ["flex-none"];
      if (vl === "1" || vl === "1 1 0%" || vl === "1 1 0" || vl === "1 1 0px") return ["flex-1"];
      if (vl === "auto" || vl === "1 1 auto") return ["flex-auto"];
      if (vl === "initial" || vl === "0 1 auto") return ["flex-initial"];
      return [`flex-[${arb(v)}]`];
    }
    case "flex-direction": return ({ column: "flex-col", row: "flex-row", "column-reverse": "flex-col-reverse", "row-reverse": "flex-row-reverse" })[vl] ? [({ column: "flex-col", row: "flex-row", "column-reverse": "flex-col-reverse", "row-reverse": "flex-row-reverse" })[vl]] : A();
    case "flex-wrap": return vl === "wrap" ? ["flex-wrap"] : vl === "nowrap" ? ["flex-nowrap"] : ["flex-wrap-reverse"];
    case "flex-shrink": return vl === "0" ? ["shrink-0"] : [`shrink-[${vl}]`];
    case "flex-grow": return vl === "1" ? ["grow"] : vl === "0" ? ["grow-0"] : [`grow-[${vl}]`];
    case "flex-basis": return [`basis-${len(v)}`];
    case "align-items": return [`items-${({ "flex-start": "start", "flex-end": "end", center: "center", baseline: "baseline", stretch: "stretch", start: "start", end: "end" })[vl] || `[${vl}]`}`];
    case "align-self": return [`self-${({ "flex-start": "start", "flex-end": "end", center: "center", baseline: "baseline", stretch: "stretch", auto: "auto", start: "start", end: "end" })[vl] || `[${vl}]`}`];
    case "align-content": return [`content-${({ "flex-start": "start", "flex-end": "end", center: "center", "space-between": "between", stretch: "stretch", start: "start", end: "end" })[vl] || `[${vl}]`}`];
    case "justify-content": return [`justify-${({ "flex-start": "start", "flex-end": "end", center: "center", "space-between": "between", "space-around": "around", "space-evenly": "evenly", stretch: "stretch", start: "start", end: "end" })[vl] || `[${vl}]`}`];
    case "justify-items": return [`justify-items-${({ "flex-start": "start", start: "start", end: "end", center: "center", stretch: "stretch" })[vl] || `[${vl}]`}`];
    case "justify-self": return [`justify-self-${({ "flex-start": "start", start: "start", end: "end", center: "center", stretch: "stretch", auto: "auto" })[vl] || `[${vl}]`}`];
    case "place-items": return [`place-items-${vl}`];
    case "place-content": return [`place-content-${vl}`];
    case "grid-template-columns": {
      let m = vl.match(/^repeat\((\d+),\s*(1fr|minmax\(0,\s*1fr\))\)$/);
      if (m) return [`grid-cols-${m[1]}`];
      if (vl === "1fr") return ["grid-cols-1"];
      return [`grid-cols-[${arb(v)}]`];
    }
    case "grid-template-rows": { const m = vl.match(/^repeat\((\d+),\s*(1fr|minmax\(0,\s*1fr\))\)$/); if (m) return [`grid-rows-${m[1]}`]; return [`grid-rows-[${arb(v)}]`]; }
    case "grid-column": { if (vl === "1/-1" || vl === "1 / -1") return ["col-span-full"]; let m = vl.match(/^span\s+(\d+)/); if (m) return [`col-span-${m[1]}`]; if (/^\d+$/.test(vl)) return [`col-start-${vl}`]; return [`col-[${arb(v)}]`]; }
    case "grid-row": { if (vl === "1/-1" || vl === "1 / -1") return ["row-span-full"]; let m = vl.match(/^span\s+(\d+)/); if (m) return [`row-span-${m[1]}`]; if (/^\d+$/.test(vl)) return [`row-start-${vl}`]; return [`row-[${arb(v)}]`]; }
    case "grid-column-start": return [`col-start-${vl}`];
    case "grid-column-end": return [`col-end-${vl}`];
    case "grid-row-start": return [`row-start-${vl}`];
    case "grid-row-end": return [`row-end-${vl}`];
    case "grid-auto-flow": return [`grid-flow-${vl.replace(" ", "-")}`];
    case "grid-auto-rows": return [`auto-rows-${len(v)}`];
    case "grid-auto-columns": return [`auto-cols-${len(v)}`];
    case "grid-area": return [`[grid-area:${arb(v)}]`];
    case "overflow": return ["hidden", "auto", "visible", "scroll", "clip"].includes(vl) ? [`overflow-${vl}`] : A();
    case "overflow-x": return [`overflow-x-${vl}`];
    case "overflow-y": return [`overflow-y-${vl}`];
    case "white-space": return [`whitespace-${vl}`];
    case "text-overflow": return vl === "ellipsis" ? ["text-ellipsis"] : ["text-clip"];
    case "text-align": return [`text-${vl}`];
    case "text-decoration": {
      if (vl === "none") return ["no-underline"];
      const out = [];
      const p = v.split(/\s+/);
      if (p.includes("underline")) out.push("underline");
      if (p.includes("line-through")) out.push("line-through");
      const c = p.find((x) => isHex(x) || COLORS[x.toLowerCase()]);
      if (c) out.push(colorClass("decoration", c));
      const st = p.find((x) => /^(dashed|dotted|wavy|double)$/.test(x));
      if (st) out.push(`decoration-${st}`);
      const w = p.find((x) => /^[\d.]+px$/.test(x));
      if (w) out.push(`decoration-[${w}]`);
      return out.length ? out : A();
    }
    case "text-decoration-line": return vl === "none" ? ["no-underline"] : [vl];
    case "text-decoration-thickness": return [`decoration-[${vl}]`];
    case "text-decoration-color": return [colorClass("decoration", v)];
    case "text-decoration-style": return [`decoration-${vl}`];
    case "text-underline-offset": return [`underline-offset-[${vl}]`];
    case "text-wrap": return vl === "pretty" ? ["text-pretty"] : vl === "balance" ? ["text-balance"] : vl === "nowrap" ? ["text-nowrap"] : ["text-wrap"];
    case "word-break": return vl === "break-all" ? ["break-all"] : vl === "break-word" ? ["wrap-break-word"] : vl === "keep-all" ? ["break-keep"] : A();
    case "overflow-wrap": return vl === "anywhere" ? ["wrap-anywhere"] : vl === "break-word" ? ["wrap-break-word"] : A();
    case "hyphens": return [`hyphens-${vl}`];
    case "object-fit": return [`object-${vl}`];
    case "object-position": return [`object-[${arb(v)}]`];
    case "aspect-ratio": return vl === "1" || vl === "1/1" || vl === "1 / 1" ? ["aspect-square"] : [`aspect-[${arb(v)}]`];
    case "mix-blend-mode": return [`mix-blend-${vl}`];
    case "pointer-events": return [`pointer-events-${vl}`];
    case "cursor": return [`cursor-${vl}`];
    case "user-select": return [`select-${vl}`];
    case "visibility": return vl === "hidden" ? ["invisible"] : vl === "visible" ? ["visible"] : ["collapse"];
    case "opacity": { const n = parseFloat(vl); const pct = Math.round(n * 100); return Math.abs(n * 100 - pct) < 0.001 ? [`opacity-${pct}`] : [`opacity-[${vl}]`]; }
    case "list-style": case "list-style-type": return vl === "none" ? ["list-none"] : vl === "disc" ? ["list-disc"] : vl === "decimal" ? ["list-decimal"] : [`[${prop}:${arb(v)}]`];
    case "list-style-position": return [`list-${vl}`];
    case "vertical-align": return ({ middle: "align-middle", baseline: "align-baseline", top: "align-top", bottom: "align-bottom", "text-top": "align-text-top", "text-bottom": "align-text-bottom", sub: "align-sub", super: "align-super" })[vl] ? [({ middle: "align-middle", baseline: "align-baseline", top: "align-top", bottom: "align-bottom", "text-top": "align-text-top", "text-bottom": "align-text-bottom", sub: "align-sub", super: "align-super" })[vl]] : [`align-[${arb(v)}]`];
    case "transform": {
      if (vl === "translatey(-50%)") return ["-translate-y-1/2"];
      if (vl === "translatex(-50%)") return ["-translate-x-1/2"];
      if (vl === "translate(-50%,-50%)" || vl === "translate(-50%, -50%)") return ["-translate-x-1/2", "-translate-y-1/2"];
      if (vl === "rotate(180deg)") return ["rotate-180"];
      if (vl === "rotate(90deg)") return ["rotate-90"];
      if (vl === "rotate(-90deg)") return ["-rotate-90"];
      if (vl === "none") return ["transform-none"];
      return [`[transform:${arb(v)}]`];
    }
    case "transform-origin": return ({ "top left": "origin-top-left", center: "origin-center", "left top": "origin-top-left", "top right": "origin-top-right", "bottom left": "origin-bottom-left", top: "origin-top", bottom: "origin-bottom", left: "origin-left", right: "origin-right" })[vl] ? [({ "top left": "origin-top-left", center: "origin-center", "left top": "origin-top-left", "top right": "origin-top-right", "bottom left": "origin-bottom-left", top: "origin-top", bottom: "origin-bottom", left: "origin-left", right: "origin-right" })[vl]] : [`origin-[${arb(v)}]`];
    case "transform-box": return A();
    case "transition": {
      if (vl === "filter .15s ease" || vl === "filter 0.15s ease") return ["transition-[filter]", "duration-150", "ease-[ease]"];
      return [`[transition:${arb(v)}]`];
    }
    case "filter": { const m = vl.match(/^brightness\(([\d.]+)\)$/); if (m) return [`brightness-[${m[1]}]`]; return [`[filter:${arb(v)}]`]; }
    case "backdrop-filter": {
      if (vl === "saturate(1.25) blur(12px)") return ["backdrop-saturate-125", "backdrop-blur-[12px]"];
      return [`[backdrop-filter:${arb(v)}]`];
    }
    case "-webkit-backdrop-filter": return [];
    case "-webkit-mask-image": return [];
    case "mask-image": return [`[mask-image:${arb(v)}]`];
    case "-webkit-font-smoothing": return vl === "antialiased" ? ["antialiased"] : [];
    case "scroll-margin-top": return [`scroll-mt-${len(v)}`];
    case "resize": return vl === "vertical" ? ["resize-y"] : vl === "none" ? ["resize-none"] : vl === "horizontal" ? ["resize-x"] : ["resize"];
    case "appearance": return vl === "none" ? ["appearance-none"] : ["appearance-auto"];
    case "outline-offset": return [`outline-offset-[${vl}]`];
    case "isolation": return vl === "isolate" ? ["isolate"] : ["isolation-auto"];
    case "border-collapse": return [`border-${vl}`];
    case "table-layout": return [`table-${vl}`];
    case "stroke": return [colorClass("stroke", v)];
    case "fill": return [colorClass("fill", v)];
    case "stroke-width": return [`stroke-[${vl}]`];
    case "content": return [];
    case "clip-path": return [`[clip-path:${arb(v)}]`];
    case "animation": return [`[animation:${arb(v)}]`];
    case "text-shadow": return [`[text-shadow:${arb(v)}]`];
    case "will-change": return [`will-change-[${arb(v)}]`];
    case "columns": return [`columns-[${arb(v)}]`];
    case "column-count": return [`columns-${vl}`];
    case "break-inside": return [`break-inside-${vl}`];
    case "tab-size": return [`tab-${vl}`];
    case "float": return [`float-${vl}`];
    case "clear": return [`clear-${vl}`];
    default: return A();
  }
}

const UA_DEFAULTS = {
  // margins/paddings browsers apply and Tailwind's preflight removes; add back when the design relied on them
  p: { margin: "1em 0" }, h1: { margin: ".67em 0" }, h2: { margin: ".83em 0" }, h3: { margin: "1em 0" }, h4: { margin: "1.33em 0" }, h5: { margin: "1.67em 0" }, h6: { margin: "2.33em 0" },
  ul: { margin: "1em 0", "padding-left": "40px", "list-style": "disc" }, ol: { margin: "1em 0", "padding-left": "40px", "list-style": "decimal" }, dl: { margin: "1em 0" }, dd: { "margin-left": "40px" }, blockquote: { margin: "1em 40px" }, figure: { margin: "1em 40px" }, hr: { margin: ".5em 0" }, fieldset: { margin: "0 2px", padding: ".35em .75em .625em" }, table: {},
};

function styleToClasses(tag, style, hoverStyle, parent, node, opts) {
  const decls = parseStyle(style || "");
  const declMap = Object.fromEntries(decls);
  const classes = [];
  const hasProp = (p) => p in declMap;
  // UA defaults the design relied on (no reset in the .dc files; homepage has a reset)
  if (!opts.hasReset && UA_DEFAULTS[tag]) {
    for (const [p, v] of Object.entries(UA_DEFAULTS[tag])) {
      const covered = hasProp(p) || (p === "margin" && ["margin-top", "margin-bottom"].every(hasProp)) || (p === "list-style" && hasProp("list-style-type")) || (p === "padding-left" && hasProp("padding")) || (p === "margin-left" && hasProp("margin"));
      if (!covered) decls.unshift([p, v]);
    }
  }
  // content-box: designs without a reset rely on it whenever width/height + padding/border are set without box-sizing
  if (!opts.hasReset && !hasProp("box-sizing")) {
    const pad = declMap.padding ? expand4(declMap.padding) : ["0", "0", "0", "0"];
    const bw = declMap.border && !/^(none|0)$/.test(declMap.border) ? "1" : "0";
    const horiz = parseFloat(pad[1]) || parseFloat(pad[3]) || parseFloat(declMap["padding-left"] || 0) || parseFloat(declMap["padding-right"] || 0) || +bw || declMap["border-left"] || declMap["border-right"];
    const vert = parseFloat(pad[0]) || parseFloat(pad[2]) || parseFloat(declMap["padding-top"] || 0) || parseFloat(declMap["padding-bottom"] || 0) || +bw || declMap["border-top"] || declMap["border-bottom"];
    const wSized = ["width", "min-width", "max-width"].some(hasProp) && !/%|auto/.test(declMap.width || "");
    const hSized = ["height", "min-height", "max-height"].some(hasProp) && !/%|auto/.test(declMap.height || "");
    if (((wSized && horiz) || (hSized && vert)) && tag !== "img" && tag !== "svg") classes.push("box-content");
  }
  // svg/img default display: inline in the design (no reset); preflight makes them block
  if (!opts.hasReset && (tag === "svg" || tag === "img") && !hasProp("display")) {
    const pd = parent?.display || "";
    const pos = declMap.position;
    if (!/flex|grid/.test(pd) && pos !== "absolute" && pos !== "fixed") classes.push("inline");
  }
  for (const [p, v] of decls) {
    try { classes.push(...declToClasses(p, v, {})); } catch (e) { classes.push(`[${p}:${arb(v)}]`); }
  }
  if (hoverStyle) {
    for (const [p, v] of parseStyle(hoverStyle)) {
      for (const c of declToClasses(p, v, {})) classes.push(`hover:${c}`);
      if (p === "filter" && !hasProp("transition")) classes.push("transition-[filter]", "duration-150", "ease-[ease]");
    }
  }
  return { classes: dedupe(classes), declMap };
}
function dedupe(arr) { return [...new Set(arr)]; }

// ---------------------------------------------------------------- responsive baseline rules
function responsiveClasses(tag, declMap, node, parentInfo, opts) {
  const out = [];
  const pad = declMap.padding ? expand4(declMap.padding) : null;
  const gutter = pad ? pad[1] === pad[3] && ["70px", "100px"].includes(pad[1]) : ["70px", "100px"].includes(declMap["padding-left"]);
  if (gutter && ["section", "div", "footer", "header", "main", "article"].includes(tag)) node.__gutter = pad ? pad[1] : declMap["padding-left"];
  if (declMap.margin) { const m = expand4(declMap.margin); if (m[1] === "70px" && m[3] === "70px") node.__mgutter = true; }
  // vertical section padding scales down on tablets/phones
  if (pad && ["section", "footer"].includes(tag)) {
    const t = parseFloat(pad[0]), b = parseFloat(pad[2]);
    if (t >= 80) out.push("max-md:pt-[56px]"); else if (t >= 60) out.push("max-md:pt-[48px]");
    if (b >= 80) out.push("max-md:pb-[56px]"); else if (b >= 60) out.push("max-md:pb-[48px]");
  }
  const gtc = declMap["grid-template-columns"];
  if (gtc && declMap.display === "grid" && !parentInfo?.fixed) {
    const g = gtc.toLowerCase();
    const rep = g.match(/^repeat\((\d+)/);
    const tracks = g.replace(/\([^)]*\)/g, "x").split(/\s+/);
    const pxTracks = (g.match(/(\d+)px/g) || []).map((x) => parseInt(x));
    const heroGrid = tracks.length === 2 && pxTracks.some((x) => x >= 500);
    if (/\bauto\b/.test(g) && tracks.length >= 5) out.push("max-lg:grid-cols-1", "max-lg:justify-items-stretch");
    else if (rep && +rep[1] >= 3) out.push("max-lg:grid-cols-2", "max-md:grid-cols-1");
    else if (rep && +rep[1] === 2) out.push("max-md:grid-cols-1");
    else if (heroGrid) out.push("max-xl:grid-cols-2", "max-lg:grid-cols-1");
    else if (tracks.length >= 5) out.push("max-md:grid-cols-1"); // table-like rows: flagged for hand treatment
    else if (tracks.length >= 2) out.push("max-lg:grid-cols-1");
    if (tracks.length >= 4 && !/\bauto\b/.test(g) && !rep) node.__tableLike = true;
  }
  // display sizes
  if (declMap["font-size"]) {
    const px = parseFloat(declMap["font-size"]);
    if (px >= 40) {
      const min = tag === "h1" ? 36 : 30;
      const vw = ((px / 1280) * 100).toFixed(2);
      out.push(`max-xl:text-[length:clamp(${min}px,${vw}vw,${px}px)]`);
    } else if (px >= 17.5 && px <= 18 && ["p", "span", "div"].includes(tag) && declMap["line-height"]) {
      out.push("max-md:text-[16px]");
    }
  }
  // mascots and decorative overflow
  if (tag === "img" && declMap["pointer-events"] === "none" && declMap.position === "absolute") out.push("max-md:hidden");
  if (tag === "img" && (declMap.width || declMap.position === "absolute")) out.push("max-w-none");
  // fixed-width blocks flow on phones
  if (["div", "section", "aside", "article", "form", "ul", "ol"].includes(tag) && declMap.width && /^\d+px$/.test(declMap.width) && parseFloat(declMap.width) >= 300 && declMap.position !== "absolute" && !parentInfo?.fixed) out.push("max-md:w-full");
  if (declMap["min-width"] && /^\d+px$/.test(declMap["min-width"]) && parseFloat(declMap["min-width"]) >= 300) out.push("max-md:min-w-0");
  // button rows wrap / stack
  if (declMap.display === "flex" && !/column/.test(declMap["flex-direction"] || "") && node.childNodes) {
    const kids = node.childNodes.filter((c) => c.tagName);
    const allButtons = kids.length >= 2 && kids.every((k) => {
      const st = (k.attrs?.find((a) => a.name === "style")?.value || "").toLowerCase();
      return (k.tagName === "a" || k.tagName === "button") && (/min-height:\s*(4[4-9]|5\d|6\d)px/.test(st) || /padding:\s*1[0-9]px/.test(st));
    });
    if (allButtons) out.push("max-md:flex-wrap", "max-xs:flex-col", "max-xs:items-stretch");
    const allPills = kids.length >= 3 && kids.every((k) => /border-radius:\s*999px/.test(k.attrs?.find((a) => a.name === "style")?.value || ""));
    if (allPills) out.push("max-md:flex-wrap");
  }
  return out;
}

// ---------------------------------------------------------------- SVG / lucide
const GEOM = new Set(["d", "cx", "cy", "r", "rx", "ry", "x", "y", "x1", "y1", "x2", "y2", "width", "height", "points"]);
function nodeSig(list) {
  return JSON.stringify(list.map(([t, a]) => [t, Object.fromEntries(Object.entries(a).filter(([k]) => GEOM.has(k)).map(([k, v]) => [k, String(v).toLowerCase().replace(/\s+/g, " ").trim()]).sort())]).sort());
}
const LUCIDE_MAP = new Map();
for (const [name, nodes] of Object.entries(LUCIDE)) LUCIDE_MAP.set(nodeSig(nodes), name);

function svgChildrenList(svg) {
  const list = [];
  const walk = (n) => {
    for (const c of n.childNodes || []) {
      if (!c.tagName) continue;
      if (c.tagName === "g") { walk(c); continue; }
      const a = Object.fromEntries((c.attrs || []).map((x) => [x.name, x.value]));
      list.push([c.tagName, a]);
    }
  };
  walk(svg);
  return list;
}
function lucideMatch(svg) {
  const a = attrs(svg);
  if (a.viewBox !== "0 0 24 24") return null;
  if (a.fill && a.fill !== "none") return null;
  const kids = svgChildrenList(svg);
  if (kids.some(([t, at]) => at.fill && at.fill !== "none" && at.fill !== "currentColor")) return null;
  const name = LUCIDE_MAP.get(nodeSig(kids));
  return name || null;
}

const ASSET_DIMS = {"amz-backpack.png":[560,560],"bing-headphones.png":[520,520],"bing-keyboard.png":[520,520],"bing-lamp.png":[520,520],"ci-headphones.png":[520,520],"ci-overgrip.png":[1254,1254],"ci-racket-bag.png":[720,720],"ci-wristband.png":[1254,1254],"court-shoe-2.png":[1254,1254],"fm-cleat.png":[1254,1254],"fm-football.png":[1254,1254],"fm-jersey.png":[1254,1254],"gads-runner.png":[560,840],"gads-shoe.png":[640,640],"gs-camera.png":[520,520],"gs-daypack.png":[520,520],"gs-headphones.png":[520,520],"img-01.png":[760,149],"img-03-light.png":[1510,370],"img-03.png":[1510,370],"img-04.png":[1300,732],"img-06.png":[700,394],"img-08.png":[121,142],"img-09.png":[112,137],"img-11.png":[1254,1254],"img-12.png":[1254,1254],"img-13.png":[1254,1254],"img-14.png":[840,1291],"img-15.png":[1023,1537],"img-16.png":[1180,1366],"meta-bag.png":[480,600],"meta-model.png":[560,747],"meta-sunglasses.png":[480,600],"pin-bag.png":[600,600],"pin-chair.png":[720,960],"pin-court.png":[1000,500],"pin-lamp.png":[600,600],"pin-studio.png":[1000,667],"product-shoe-square.png":[200,200],"racket-bag.png":[720,720],"scout-clipboard-point.png":[1122,1402],"scout-clipboard.png":[1122,1402],"scout-mail.png":[426,371],"scout-map.png":[920,1329],"scout-mark.png":[350,350],"scout-prefooter.jpg":[2172,724],"scout-price-hero.png":[1942,809],"snap-sneaker.png":[560,747],"tt-creator.png":[640,960],"tt-speaker.png":[560,560],"wm-headphones.png":[520,520],"wm-lamp.png":[520,520],"wm-sneaker.png":[520,520],"wm-tumbler.png":[520,520]};
// ---------------------------------------------------------------- JSX emission
const VOID = new Set(["img", "br", "input", "hr", "meta", "link", "source", "area", "base", "col", "embed", "track", "wbr"]);
const INLINE_TAGS = new Set(["span", "a", "strong", "em", "b", "i", "small", "code", "br", "svg", "img", "input", "button", "label", "abbr", "sup", "sub", "mark", "kbd", "time"]);
const ATTR_MAP = { class: "className", for: "htmlFor", tabindex: "tabIndex", autocomplete: "autoComplete", readonly: "readOnly", maxlength: "maxLength", minlength: "minLength", srcset: "srcSet", crossorigin: "crossOrigin", autofocus: "autoFocus", enctype: "encType", novalidate: "noValidate", spellcheck: "spellCheck", contenteditable: "contentEditable", frameborder: "frameBorder", allowfullscreen: "allowFullScreen", referrerpolicy: "referrerPolicy", colspan: "colSpan", rowspan: "rowSpan", datetime: "dateTime", inputmode: "inputMode", accesskey: "accessKey", "xlink:href": "xlinkHref", "xml:space": "xmlSpace" };
function attrs(n) { return Object.fromEntries((n.attrs || []).map((a) => [a.name, a.value])); }
function jsxAttrName(name) {
  if (ATTR_MAP[name]) return ATTR_MAP[name];
  if (name.startsWith("data-") || name.startsWith("aria-")) return name;
  if (name.includes("-")) return name.replace(/-([a-z])/g, (_, c) => c.toUpperCase());
  return name;
}
function escText(s) {
  s = s.replace(/\{\{\s*ob\s*\}\}/g, "{{").replace(/\{\{\s*cb\s*\}\}/g, "}}");
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/\{/g, "&#123;").replace(/\}/g, "&#125;").replace(/'/g, "&#39;").replace(/"/g, "&quot;");
}
function escAttr(s) { return s.replace(/"/g, "&quot;").replace(/\{/g, "&#123;").replace(/\}/g, "&#125;"); }

function styleObj(style) {
  const decls = parseStyle(style);
  const parts = decls.map(([p, v]) => `${p.startsWith("-") ? `"${p}"` : p.replace(/-([a-z])/g, (_, c) => c.toUpperCase())}: ${JSON.stringify(v)}`);
  return `{{ ${parts.join(", ")} }}`;
}

export class Converter {
  constructor(opts) {
    this.opts = opts;
    this.lucideUsed = new Set();
    this.usesImage = false;
    this.usesLink = false;
    this.report = { unmatchedSvgs: 0, lucide: 0, tables: [], compositions: [], todo: [] };
    this.brand = opts.brand; // shared registry {sigs: Map(sig -> {count, name, node})}
  }
  emit(node, depth, parentInfo, inSvg) {
    if (node.nodeName === "#text") return this.emitText(node, parentInfo, inSvg);
    if (node.nodeName === "#comment") return "";
    if (!node.tagName) return (node.childNodes || []).map((c) => this.emit(c, depth, parentInfo, inSvg)).join("");
    const tag = node.tagName;
    if (["helmet", "script", "style", "template", "noscript", "link", "meta", "title"].includes(tag)) return "";
    if (tag === "x-dc" || tag === "body") return (node.childNodes || []).map((c) => this.emit(c, depth, parentInfo, inSvg)).filter((x) => x.trim()).join("\n");
    if (tag === "sc-if" || tag === "sc-for") {
      const a = attrs(node);
      const inner = (node.childNodes || []).map((c) => this.emit(c, depth + 1, parentInfo, inSvg)).join("");
      return `\n{/* <${tag} ${Object.entries(a).map(([k, v]) => `${k}="${v}"`).join(" ")}> */}\n${inner}\n{/* </${tag}> */}\n`;
    }
    const a = attrs(node);
    const chrome = this.opts.chrome?.(node, a, this);
    if (chrome) return `\n${chrome}\n`;

    if (tag === "svg" && !inSvg) return this.emitSvg(node, a, depth, parentInfo);
    if (tag === "img") return this.emitImg(node, a, depth, parentInfo);

    const props = [];
    const style = a.style;
    const hover = a["style-hover"];
    let declMap = {};
    if (!inSvg) {
      const r = styleToClasses(tag, style, hover, parentInfo, node, this.opts);
      declMap = r.declMap;
      const cls = [...r.classes];
      if (a.class) cls.unshift(...this.opts.mapClass(a.class));
      cls.push(...responsiveClasses(tag, declMap, node, parentInfo, this.opts));
      if (node.__gutter) {
        const extra = node.__gutter === "100px" ? "+30px" : "";
        for (let i = cls.length - 1; i >= 0; i--) if (/^px-\[(70|100)px\]$/.test(cls[i])) cls[i] = extra ? `px-[calc(var(--gutter)${extra})]` : "px-gutter";
        node.__gutterExtra = extra;
      }
      if (node.__mgutter) for (let i = cls.length - 1; i >= 0; i--) if (cls[i] === "mx-[70px]") cls[i] = "mx-gutter";
      // absolute direct children of a gutter section: anchor px offsets to the content column, not the viewport
      if (parentInfo?.gutter && declMap.position === "absolute") {
        for (const side of ["left", "right"]) {
          const v = declMap[side];
          if (v && /^-?[\d.]+px$/.test(v)) {
            for (let i = cls.length - 1; i >= 0; i--) if (cls[i] === `${side}-[${v}]` || cls[i] === `-${side}-[${v.slice(1)}]` || (v === "0" && cls[i] === `${side}-0`)) cls.splice(i, 1);
            cls.push(`${side}-[calc(var(--gutter)-70px+${v})]`);
          } else if (v === "0" || v === "0px") {
            for (let i = cls.length - 1; i >= 0; i--) if (cls[i] === `${side}-0`) cls.splice(i, 1);
            cls.push(`${side}-[calc(var(--gutter)-70px)]`);
          }
        }
      }
      if (tag === "table") cls.push("w-full");
      if (cls.length) props.push(`className="${cls.join(" ")}"`);
      if (node.__tableLike) this.report.tables.push(a["data-screen-label"] || style?.slice(0, 60));
    } else if (style) {
      props.push(`style=${styleObj(style)}`);
    }
    let elTag = tag;
    for (const [k, v] of Object.entries(a)) {
      if (k === "style" || k === "style-hover" || k === "class") continue;
      if (k === "data-screen-label") continue;
      if (k === "data-r") continue;
      if (k.startsWith("on")) { props.push(`/* ${k}="${v}" */`); continue; }
      if (k === "href") {
        const h = mapHref(v);
        if (tag === "a" && h.startsWith("/") ) { elTag = "Link"; this.usesLink = true; }
        props.push(`href="${escAttr(h)}"`);
        continue;
      }
      const name = jsxAttrName(k);
      if (["tabIndex", "rows", "cols", "colSpan", "rowSpan", "maxLength", "minLength", "size"].includes(name) && /^-?\d+$/.test(v)) { props.push(`${name}={${v}}`); continue; }
      if (v === "" && (k === "async" || k === "defer" || k === "disabled" || k === "checked" || k === "required" || k === "hidden" || k === "open")) { props.push(name); continue; }
      if (v.includes("{{")) { props.push(`${name}={/* ${v} */ undefined}`); continue; }
      props.push(`${name}="${escAttr(v)}"`);
    }
    // composition candidate: relative box with px height whose element children are all absolutely positioned
    let scaled = null;
    if (declMap.position === "relative" && declMap.height && /^\d+px$/.test(declMap.height)) {
      const kids = (node.childNodes || []).filter((c) => c.tagName);
      if (kids.length && kids.every((k) => /position:\s*absolute/.test(k.attrs?.find((x) => x.name === "style")?.value || ""))) {
        let w = declMap.width && /^\d+px$/.test(declMap.width) ? parseInt(declMap.width) : null;
        if (!w && parentInfo?.gridTracks) {
          const idx = (node.parentNode.childNodes || []).filter((c) => c.tagName).indexOf(node);
          const t = parentInfo.gridTracks[idx];
          if (t && /^\d+px$/.test(t)) w = parseInt(t);
        }
        const h = parseInt(declMap.height);
        this.report.compositions.push(`${w || "col"}x${h}`);
        node.__composition = `${w || "?"} x ${h}`;
        if (w && w >= 300 && h >= 300) scaled = { w, h };
      }
    }
    const fixedHere = (declMap.width && /^\d+px$/.test(declMap.width) && parseFloat(declMap.width) < 900) || declMap.position === "absolute" || (declMap["max-width"] && /^\d+px$/.test(declMap["max-width"]) && parseFloat(declMap["max-width"]) <= 520);
    const gridTracks = declMap.display === "grid" && declMap["grid-template-columns"] ? declMap["grid-template-columns"].replace(/\([^)]*\)/g, "x").split(/\s+/) : null;
    const info = { tag, display: declMap.display || (tag === "button" ? "inline-block" : ""), flex: /flex|grid/.test(declMap.display || ""), fixed: !!(parentInfo?.fixed || fixedHere), gutter: !!node.__gutter, style, gridTracks };
    const label = (a["data-screen-label"] ? `\n{/* ${a["data-screen-label"]} */}\n` : "") + (node.__composition ? `\n{/* COMPOSITION ${node.__composition} */}\n` : "");
    if (scaled) {
      // fixed-size illustrated composition -> <Scaled>: scale 1 at the design width, shrinks as one unit below it
      this.usesScaled = true;
      const ci = props.findIndex((p) => p.startsWith("className="));
      let cls2 = ci >= 0 ? props[ci].slice(11, -1).split(" ") : [];
      cls2 = cls2.filter((c) => !/^(relative|w-\[\d+px\]|h-\[\d+px\]|max-md:w-full)$/.test(c));
      const rest = props.filter((_, i) => i !== ci);
      const inner = "\n" + (node.childNodes || []).map((c) => this.emit(c, depth + 1, info, inSvg)).filter((s) => s.trim()).join("\n") + "\n";
      return `${label}<Scaled width={${scaled.w}} height={${scaled.h}}${cls2.length ? ` className="${cls2.join(" ")}"` : ""}${rest.length ? " " + rest.join(" ") : ""}>${inner}</Scaled>`;
    }
    if (VOID.has(tag)) return `${label}<${elTag}${props.length ? " " + props.join(" ") : ""} />`;
    const kids = (node.childNodes || []);
    if (this.opts.homeWrap && tag === "section" && parentInfo?.tag === "div" && parentInfo?.homeRoot) {
      const inner = "\n" + kids.map((c) => this.emit(c, depth + 2, { ...info, tag: "div" }, inSvg)).filter((s) => s.trim()).join("\n") + "\n";
      const cls2 = props.find((p) => p.startsWith("className="));
      return `${label}<${elTag}${props.length ? " " + props.join(" ") : ""}>\n<div className="relative mx-auto w-full max-w-[1440px]">${inner}</div>\n</${elTag}>`;
    }
    const inlineOnly = kids.every((c) => c.nodeName === "#text" || (c.tagName && INLINE_TAGS.has(c.tagName)) || c.nodeName === "#comment");
    let inner;
    if (inlineOnly) inner = kids.map((c) => this.emit(c, depth + 1, info, inSvg)).join("");
    else inner = "\n" + kids.map((c) => this.emit(c, depth + 1, info, inSvg)).filter((s) => s.trim()).join("\n") + "\n";
    return `${label}<${elTag}${props.length ? " " + props.join(" ") : ""}>${inner}</${elTag}>`;
  }
  emitText(node, parentInfo, inSvg) {
    let t = node.value;
    if (inSvg) return escText(t.trim());
    if (!t.trim()) {
      // whitespace-only: significant between inline siblings in non-flex parents
      if (parentInfo && !parentInfo.flex) {
        const prev = node.previousSibling?.(); // not available; approximate below
      }
      const par = node.parentNode;
      const idx = par.childNodes.indexOf(node);
      const prev = par.childNodes[idx - 1], next = par.childNodes[idx + 1];
      const isInline = (n) => n && ((n.tagName && INLINE_TAGS.has(n.tagName)) || (n.nodeName === "#text" && n.value.trim()));
      if (parentInfo && !parentInfo.flex && isInline(prev) && isInline(next)) return "{' '}";
      return "";
    }
    // collapse internal whitespace like HTML does; keep single leading/trailing spaces
    const lead = /^\s/.test(t) ? " " : "", trail = /\s$/.test(t) ? " " : "";
    t = t.replace(/\s+/g, " ").trim();
    const par = node.parentNode;
    const idx = par.childNodes.indexOf(node);
    const prev = par.childNodes[idx - 1], next = par.childNodes[idx + 1];
    const keepLead = lead && prev && (prev.tagName && INLINE_TAGS.has(prev.tagName)) && !(parentInfo?.flex);
    const keepTrail = trail && next && (next.tagName && INLINE_TAGS.has(next.tagName)) && !(parentInfo?.flex);
    return (keepLead ? "{' '}" : "") + escText(t) + (keepTrail ? "{' '}" : "");
  }
  emitImg(node, a, depth, parentInfo) {
    const src = a.src.replace(/^\.?\/?assets\//, "/assets/");
    const r = styleToClasses("img", a.style, a["style-hover"], parentInfo, node, this.opts);
    const cls = [...r.classes, ...responsiveClasses("img", r.declMap, node, parentInfo, this.opts)];
    if (parentInfo?.gutter && r.declMap.position === "absolute") {
      for (const side of ["left", "right"]) {
        const v = r.declMap[side];
        if (v && /^-?[\d.]+px$/.test(v)) { for (let i = cls.length - 1; i >= 0; i--) if (cls[i] === `${side}-[${v}]` || cls[i] === `-${side}-[${v.slice(1)}]`) cls.splice(i, 1); cls.push(`${side}-[calc(var(--gutter)-70px+${v})]`); }
        else if (v === "0" || v === "0px") { for (let i = cls.length - 1; i >= 0; i--) if (cls[i] === `${side}-0`) cls.splice(i, 1); cls.push(`${side}-[calc(var(--gutter)-70px)]`); }
      }
    }
    const dimsKey = src.split("/").pop();
    const iw = +a.width || ASSET_DIMS[dimsKey]?.[0] || 0, ih = +a.height || ASSET_DIMS[dimsKey]?.[1] || 0;
    let w = iw, h = ih;
    const dm = r.declMap;
    const px = (v) => (v && /^[\d.]+px$/.test(v) ? parseFloat(v) : null);
    if (px(dm.height) && (dm.width === "auto" || !dm.width)) { h = px(dm.height); w = Math.round((iw / ih) * h); }
    else if (px(dm.width) && px(dm.height)) { w = px(dm.width); h = px(dm.height); }
    else if (px(dm.width)) { w = px(dm.width); h = Math.round((ih / iw) * w); }
    const fluid = dm.width === "100%" || (!dm.width && !dm.height);
    this.usesImage = true;
    const props = [`src="${src}"`, `width={${w}}`, `height={${h}}`, `alt="${escAttr(a.alt || "")}"`];
    if (fluid && iw > 400) {
      const tile = dm.height === "100%" || /aspect-ratio/.test(parentInfo?.style || "") || parentInfo?.fixed;
      props.push(tile ? `sizes="(max-width: 768px) 50vw, 240px"` : `sizes="(max-width: 768px) 100vw, ${Math.min(iw, 600)}px"`);
    }
    if (cls.length) props.push(`className="${cls.join(" ")}"`);
    if (a["aria-hidden"]) props.push(`aria-hidden="true"`);
    if (a.loading) props.push(`loading="${a.loading}"`);
    if (a.id) props.push(`id="${a.id}"`);
    return `<Image ${props.join(" ")} />`;
  }
  emitSvg(node, a, depth, parentInfo) {
    const r = styleToClasses("svg", a.style, a["style-hover"], parentInfo, node, this.opts);
    const cls = [...r.classes, ...responsiveClasses("svg", r.declMap, node, parentInfo, this.opts)];
    const name0 = lucideMatch(node);
    const name = name0 && ["Link", "Image", "Table", "Map", "Text", "Menu", "Type", "List", "Code", "File", "Home", "Search"].includes(name0) ? `${name0}Icon` : name0;
    if (name) {
      this.lucideUsed.add(name); this.report.lucide++;
      const props = [];
      if (a.width === a.height) props.push(`size={${a.width}}`); else { props.push(`width={${a.width}}`, `height={${a.height}}`); }
      if (a["stroke-width"] && a["stroke-width"] !== "2") props.push(`strokeWidth={${a["stroke-width"]}}`);
      if (a.stroke && a.stroke !== "currentColor") cls.push(colorClass("text", a.stroke));
      if (a["aria-hidden"]) props.push(`aria-hidden="true"`);
      if (a["aria-label"]) props.push(`aria-label="${escAttr(a["aria-label"])}"`);
      if (cls.length) props.push(`className="${cls.join(" ")}"`);
      return `<${name} ${props.join(" ")} />`;
    }
    // shared brand icon?
    const sig = this.brand?.key(node);
    if (sig && this.brand.named.has(sig)) {
      const bname = this.brand.named.get(sig);
      this.brand.used.add(bname);
      const props = [];
      if (a.width === a.height) props.push(`size={${a.width}}`); else props.push(`width={${a.width}}`, `height={${a.height}}`);
      const ref = attrs(this.brand.nodes.get(sig));
      for (const k of ["stroke", "fill", "stroke-width", "opacity", "stroke-linecap", "stroke-linejoin"]) if (a[k] !== undefined && a[k] !== ref[k]) props.push(`${jsxAttrName(k)}="${escAttr(a[k])}"`);
      if (cls.length) props.push(`className="${cls.join(" ")}"`);
      if (a.id) props.push(`id="${a.id}"`);
      return `<${bname} ${props.join(" ")} />`;
    }
    this.report.unmatchedSvgs++;
    const props = [];
    for (const [k, v] of Object.entries(a)) {
      if (k === "style" || k === "style-hover" || k === "class") continue;
      if (k === "id" && v.includes("{{")) continue;
      props.push(`${jsxAttrName(k)}="${escAttr(v)}"`);
    }
    if (a.class) cls.unshift(...this.opts.mapClass(a.class));
    if (cls.length) props.push(`className="${cls.join(" ")}"`);
    const inner = (node.childNodes || []).map((c) => this.emit(c, depth + 1, { tag: "svg", flex: true }, true)).filter((s) => s.trim()).join("\n");
    return `<svg ${props.join(" ")}>\n${inner}\n</svg>`;
  }
}

// ---------------------------------------------------------------- brand icon registry (pass 1)
export class BrandRegistry {
  constructor() { this.counts = new Map(); this.nodes = new Map(); this.named = new Map(); this.used = new Set(); }
  key(svg) {
    const a = attrs(svg);
    if (lucideMatch(svg)) return null;
    const kids = svgChildrenList(svg);
    if (!kids.length) return null;
    const w = +a.width; if (!w || w > 80) return null;
    return JSON.stringify([a.viewBox, kids.map(([t, at]) => [t, Object.entries(at).filter(([k]) => !k.startsWith("id")).sort()])]);
  }
  collect(node) {
    if (node.tagName === "svg") { const k = this.key(node); if (k) { this.counts.set(k, (this.counts.get(k) || 0) + 1); if (!this.nodes.has(k)) this.nodes.set(k, node); } return; }
    for (const c of node.childNodes || []) this.collect(c);
  }
  finalize(min = 2) {
    let i = 1;
    for (const [k, c] of [...this.counts.entries()].sort((a, b) => b[1] - a[1])) {
      if (c < min) continue;
      const n = this.nodes.get(k);
      const s = JSON.stringify(svgChildrenList(n)).toLowerCase();
      let name = null;
      if (s.includes("#4285f4") && s.includes("#34a853")) name = "GoogleG";
      else if (s.includes("#0866ff")) name = "MetaLogo";
      else if (s.includes("#95bf47")) name = "ShopifyBag";
      else if (s.includes("#fffc00") || (s.includes("ghost") )) name = "SnapchatGhost";
      else if (s.includes("#e60023") || s.includes("#bd081c")) name = "PinterestP";
      else if (s.includes("#25f4ee") || s.includes("#fe2c55")) name = "TikTokNote";
      else if (s.includes("#ffc220") && s.includes("#0071")) name = "WalmartSpark";
      else if (s.includes("#f5af02") || (s.includes("#e53238") && s.includes("#0064d2"))) name = "EbayLogo";
      else if (s.includes("#ff9900")) name = "AmazonSmile";
      else if (s.includes("#f25022") && s.includes("#7fba00")) name = "MicrosoftLogo";
      else if (s.includes("#fbbc04") && s.includes("rotate")) name = "GoogleAdsMark";
      else if (s.includes("#f9ab00") || s.includes("#e37400")) name = "GoogleAnalyticsBars";
      const kids = svgChildrenList(n).map(([t, at]) => at.d || at.points || t).join("|");
      const HINTS = [
        [/^M5 12h14\|m13 6 6 6-6 6$/, "ArrowRightGlyph"], [/^M12 3l7.5 3v5.5c0 4.4/, "ShieldGlyph"], [/M12 22s8-4 8-10V5l-8-3-8 3v7/, "ShieldGlyph2"],
        [/circle\|m8.5 12 2.5 2.5 5-5$/, "CircleCheckGlyph"], [/circle\|M8 12.2l2.7 2.7L16 9.6/, "CircleCheckGlyph2"], [/circle\|m8.5 12 2.5 2.5 4.5-5/, "CircleCheckGlyph3"], [/circle\|m9 12 2 2 4-4/, "CircleCheckGlyph4"],
        [/^m9 6 6 6-6 6$/, "ChevronRightGlyph"], [/^m5 12 5 5 9-10$/, "CheckGlyph"], [/M12 3.4v5.2/, "WalmartSpark"], [/M15 2H6a2 2 0 0 0-2 2v16.*M10 9H8/, "FileTextGlyph"],
        [/circle\|m21 21-4.3-4.3/, "SearchGlyph"], [/^rect\|M7 11V7a5 5 0 0 1 10 0v4$/, "LockGlyph"], [/^M10.29 3.86/, "TriangleAlertGlyph"], [/^rect\|rect$/, "PauseGlyph"],
        [/^M7.9 20A9 9 0 1 0 4 16.1L2 22Z$/, "MessageCircleGlyph"], [/^circle\|M20 21a8 8 0 0 0-16 0$/, "UserGlyph"], [/^rect\|rect\|rect\|rect$/, "GridGlyph"], [/^M4 4h16v16H4z\|M4 9h16$/, "WindowGlyph"],
        [/^M12 3l2.5 6.5L21 12/, "SparkleGlyph"], [/^M3 3v18h18\|m7 15 4-4 3 3 5-6$/, "ChartLineGlyph"], [/^M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18/, "BellGlyph"], [/^circle\|circle\|M12 2v3M12 19v3M2 12h3M19 12h3$/, "TargetGlyph"],
        [/^circle\|M12 11v5\|M12 8h.01$/, "InfoGlyph"], [/^M2 12s3.6-7 10-7 10 7 10 7/, "EyeGlyph"], [/^circle\|M12 8v8\|M8 12h8$/, "CirclePlusGlyph"], [/^M3 7V5a2 2 0 0 1 2-2h2M17 3h2/, "ScanGlyph"],
        [/^M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z\|M3 6h18\|M16 10a4 4 0 0 1-8 0$/, "ShoppingBagGlyph"], [/^M15 5l6 6-6 6\|M21 11H11a7 7 0 0 0-7 7v1$/, "RedoGlyph"], [/^M19 14c1.49-1.46 3-3.21 3-5.5/, "HeartGlyph"],
        [/^M9.88 9.88a3 3 0 1 0 4.24 4.24/, "EyeOffGlyph"], [/^circle\|12 6 12 12 16 14$/, "ClockGlyph"], [/^M3 3v18h18\|M18 17V9\|M13 17V5\|M8 17v-3$/, "BarChartGlyph"], [/^circle$/, "DotGlyph"],
      ];
      if (!name) { const h = HINTS.find(([re]) => re.test(kids)); if (h) name = h[1]; }
      if (!name) name = `Glyph${i++}`;
      // ensure unique
      let base = name, j = 2; while ([...this.named.values()].includes(name)) name = `${base}${j++}`;
      this.named.set(k, name);
    }
  }
  render() {
    const conv = new Converter({ hasReset: true, mapClass: () => [], brand: null });
    let out = `// Brand marks used inline across pages (extracted verbatim from the design files).\n// Auto-generated by the migration converter; names assigned by dominant fill color.\nimport type { SVGProps } from "react";\n\ntype IconProps = SVGProps<SVGSVGElement> & { size?: number | string };\n\n`;
    for (const [k, name] of this.named) {
      const n = this.nodes.get(k);
      const a = attrs(n);
      const inner = (n.childNodes || []).map((c) => conv.emit(c, 1, { tag: "svg", flex: true }, true)).filter((s) => s.trim()).join("\n");
      const extra = Object.entries(a).filter(([k2]) => !["width", "height", "style", "class", "aria-hidden", "id", "viewBox"].includes(k2)).map(([k2, v]) => `${jsxAttrName(k2)}="${escAttr(v)}"`).join(" ");
      const wh = a.width === a.height ? `width={size} height={size}` : `width={size} height={typeof size === "number" ? (size * ${a.height}) / ${a.width} : size}`;
      out += `export function ${name}({ size = ${a.width}, ...props }: IconProps) {\n  return (\n    <svg ${wh} viewBox="${a.viewBox}" ${extra} aria-hidden="true" {...props}>\n${inner}\n    </svg>\n  );\n}\n\n`;
    }
    return out;
  }
}

// ---------------------------------------------------------------- page driver
export function loadPage(file) {
  const html = fs.readFileSync(path.join(SRC, file), "utf8");
  const doc = parse(html);
  const find = (n, pred) => { if (pred(n)) return n; for (const c of n.childNodes || []) { const r = find(c, pred); if (r) return r; } return null; };
  const root = file.endsWith(".dc.html") ? find(doc, (n) => n.tagName === "x-dc") : find(doc, (n) => n.tagName === "body");
  return { html, doc, root };
}

export async function format(code) {
  try { return await prettier.format(code, { parser: "typescript", printWidth: 120 }); } catch (e) { return `// PRETTIER FAILED: ${e.message.split("\n")[0]}\n` + code; }
}
