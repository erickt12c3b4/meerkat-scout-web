import { loadPage, ROUTES } from "./convert.mjs";
import { createRequire } from "node:module";
const require = createRequire(import.meta.url);
const GEOM = new Set(["d","cx","cy","r","rx","ry","x","y","x1","y1","x2","y2","width","height","points"]);
const sig = (list) => JSON.stringify(list.map(([t,a]) => [t, Object.fromEntries(Object.entries(a).filter(([k]) => GEOM.has(k)).map(([k,v])=>[k,String(v).toLowerCase().replace(/\s+/g,' ')]).sort())]).sort());
const versions = ["lucide","lucide-0_400_0","lucide-0_427_0","lucide-0_460_0","lucide-0_475_0","lucide-0_510_0","lucide-0_525_0","lucide-0_540_0"];
const maps = {};
for (const v of versions) { const mod = require(v); const icons = mod.icons || mod; const m = new Map(); for (const [n,raw] of Object.entries(icons)) { if (!Array.isArray(raw)) continue; const nodes = raw[0]==="svg" ? raw[2] : raw; if (!Array.isArray(nodes)) continue; m.set(sig(nodes), n); } maps[v]=m; }
const attrs = (n) => Object.fromEntries((n.attrs||[]).map(a=>[a.name,a.value]));
const kidsOf = (svg) => { const l=[]; const walk=(n)=>{for(const c of n.childNodes||[]){ if(!c.tagName) continue; if(c.tagName==='g'){walk(c);continue;} l.push([c.tagName, attrs(c)]); }}; walk(svg); return l; };
const all = new Map(); // sig -> {count, sample}
const collect = (n) => { if (n.tagName==='svg') { const a=attrs(n); if (a.viewBox==='0 0 24 24' && (!a.fill || a.fill==='none')) { const k=kidsOf(n); if(k.length && !k.some(([t,at])=>at.fill && at.fill!=='none')) { const s=sig(k); const e=all.get(s)||{count:0,sample:k}; e.count++; all.set(s,e);} } return; } for (const c of n.childNodes||[]) collect(c); };
for (const f of Object.keys(ROUTES)) collect(loadPage(f).root);
console.log('distinct stroke icons:', all.size, 'total uses:', [...all.values()].reduce((a,b)=>a+b.count,0));
for (const v of versions) { let d=0,u=0; for (const [s,e] of all) if (maps[v].has(s)) { d++; u+=e.count; } console.log(v.padEnd(16), 'distinct', d, 'uses', u); }
// which are unmatched by best version
const best = 'lucide-0_475_0';
console.log('--- unmatched by', best);
for (const [s,e] of all) if (!maps[best].has(s)) console.log(e.count, JSON.stringify(e.sample.map(([t,a])=>[t,a.d||a.points||`${t} ${a.cx||a.x||''} ${a.r||a.width||''}`])).slice(0,180));
