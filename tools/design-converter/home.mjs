import fs from "node:fs";
let s = fs.readFileSync("out/MeerkatScoutHomepage.tsx", "utf8");
const i = s.indexOf("          {/* Final CTA */}");
const j = s.indexOf("        </div>\n      </section>\n\n      <SiteFooter");
s = s.slice(0, i) + s.slice(j);
s = s.replace('      </section>\n\n      <SiteFooter id="resources" />', '      </section>\n\n      <PreFooterCta trialHref="#start-free-trial" />\n      <SiteFooter id="resources" />');
s = s.replace('<SiteHeader demoHref="#pricing" />', "<SiteHeader />");
s = s.replace('import { SiteFooter } from "@/components/site/site-footer";', 'import { SiteFooter } from "@/components/site/site-footer";\nimport { PreFooterCta } from "@/components/site/pre-footer-cta";\nimport type { Metadata } from "next";\n\nexport const metadata: Metadata = {\n  title: { absolute: "Meerkat Scout — Make every product ready for every channel" },\n  description:\n    "Clean, enrich, validate, and publish your catalog everywhere — then see exactly what to fix and where to grow. Product feed management and commerce intelligence for Shopify.",\n};');
s = s.replace("export default function MeerkatScoutHomepagePage()", "export default function HomePage()");
// The approved homepage was built on Tailwind preflight (line-height 1.5); the 25 .dc pages use the browser default.
s = s.replace(/\n      <section(\s|>)/g, (m, sp) => `\n      <section${sp}`).replace(/(\n      <section[^>]*?)className="/g, '$1className="leading-normal ');
// drop unused imports
for (const name of ["Link", "ShieldGlyph"]) {
  if (!new RegExp(`<${name}\\b`).test(s)) {
    s = s.replace(new RegExp(`import ${name} from "next/link";\n`), "");
    s = s.replace(new RegExp(`\\n  ${name},`), "");
  }
}
fs.writeFileSync("/home/eric/meerkat-site-new/app/page.tsx", s);
console.log("home placed", s.split("\n").length);
