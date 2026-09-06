import fs from "node:fs";
import path from "node:path";
const APP = "/home/eric/meerkat-site-new/app";
const META = {
  FeedManagement: ["platform/feed-management", "Feed Management — One catalog, kept current", "Keep your Shopify catalog current. Preview, check and publish each feed, with a clear record of every run."],
  Diagnostics: ["platform/diagnostics", "Diagnostics — Every rejection in one vocabulary", "Ten channels describe the same broken field ten different ways. Scout collects every rejection, normalizes it into one problem, counts the products behind it, and names the exact field that would fix it."],
  RulesEngine: ["platform/rules-engine", "Rules Engine — Rules run top to bottom", "Ordered transformations per feed — set, prepend, append, replace, exclude — with optional match conditions. Order is meaning: for the same field, a later rule wins."],
  PriceIntelligence: ["platform/price-intelligence", "Price Intelligence — Know where your price sits", "Compare your products with matched market listings. Get a recommendation with the evidence behind it. You decide what changes."],
  ConversionIntelligence: ["platform/conversion-intelligence", "Conversion Intelligence — Know which products to fix first", "Bring feed issues, Shopify orders and GA4 traffic into one product view. See what deserves your attention next."],
  Channels: ["channels", "Channels — Ten destinations, two kinds", "Feed channels take your catalog as you send it; marketplaces make you conform to theirs. Scout connects Google Shopping, Google Ads, Meta, TikTok, Pinterest, Snapchat, Bing, Amazon, Walmart and eBay."],
  HelpCenter: ["help", "Help Center — Getting started with Scout", "What actually happens from install to your first live listing, and how to reach a person when something isn't covered."],
  Security: ["security", "Security & Trust — What Scout can touch and how it is enforced", "Written for the people who have to check it: specific, verifiable controls on what Scout accesses, what it never touches, and how each is enforced."],
  PrivacyPolicy: ["legal/privacy", "Privacy Policy", "Exactly what Meerkat Scout reads from your store, what it sends to the channels you connect, how long it is kept, and how to get it deleted."],
  TermsofService: ["legal/terms", "Terms of Service", "The terms governing use of the Meerkat Scout Shopify app: what the service does, what stays in your hands, what each channel controls, and how billing and termination work."],
  GDPRDataRights: ["legal/gdpr", "GDPR & Data Rights", "Where Scout is a controller and where it is a processor, the rights you can exercise, and the uninstall-to-deletion timeline step by step."],
  CookiePreferences: ["legal/cookies", "Cookie Preferences", "Scout uses strictly necessary cookies and nothing else: no advertising, no cross-site tracking, no analytics. This page shows exactly what is set, and when."],
};
const only = process.argv.slice(2);
for (const [name, [route, title, description]] of Object.entries(META)) {
  if (only.length && !only.includes(name)) continue;
  let src = fs.readFileSync(path.join("out", `${name}.tsx`), "utf8");
  const importsEnd = src.indexOf("\n// Source:");
  const head = src.slice(0, importsEnd);
  const body = src.slice(importsEnd);
  const meta = `\nimport type { Metadata } from "next";\n\nexport const metadata: Metadata = {\n  title: ${JSON.stringify(title)},\n  description: ${JSON.stringify(description)},\n};\n`;
  const dir = path.join(APP, route);
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, "page.tsx"), head + meta + body);
  console.log("placed", route);
}
