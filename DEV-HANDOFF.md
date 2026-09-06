# Meerkat Scout — marketing site handoff

## TL;DR

The Meerkat Scout marketing site is a 26-page static build: the approved homepage plus 25 pages covering Platform (five feature pages), Channels (an index and ten channel pages), Resources (Help Center, Contact, Security & Trust), Legal (Privacy, Terms, GDPR, Cookies), and Pricing. Every page shares the homepage's header, footer, and closing CTA, and all internal links resolve locally by file name — mapping to real routes is a per-file find-and-replace, since in-page anchors are stable ids. The pages ship with `support.js` and the `assets/` folder; the homepage is self-contained.

Three bracketed placeholders block publishing: the server-log claim on Privacy and Cookies (pending deployment) and three cookie values on Cookies (to be read from the app, or rewritten if App Bridge means no cookies are set). The Pricing FAQ's post-trial answer is drafted, not confirmed (see "Pricing refinements"). The over-cap/lapse facts on Pricing are unchanged; the wording was shortened on Sep 5. Two hrefs are intentional stubs awaiting URLs — `#signin` and `#start-free-trial` — and a few homepage-internal anchors were left untouched by rule. Before launch, verify the facts the copy asserts (read-only scopes, PII stripping with a build-failing test, per-store DB scoping, Cloud KMS on GCP us-east1, named sub-processors, 30-day raw-response retention, GDPR webhooks, plan tiers and the SKU definition, sole-proprietorship entity details, no certifications), and keep the honesty rules intact: no customers, testimonials, stats, or ROI claims, and revenue figures only on Conversion Intelligence, labelled illustrative.

---

Static site, 29 pages, all in this folder. Open `Meerkat-Scout-Homepage.html` to start; every page cross-links locally.

## Files

- `Meerkat-Scout-Homepage.html` — approved homepage (self-contained HTML, embedded Geist font, footer hrefs updated to point at the pages below; nothing else touched).
- `*.dc.html` — the 28 other pages. Each loads `./support.js` (the small runtime that renders them) and Geist from Google Fonts.
- `assets/` — logo marks (`img-03.png`, `img-03-light.png`), mascot renders (`scout-cta.png`, `scout-map.png`, `img-15.png`), and homepage imagery.
- `support.js` — runtime required by the `.dc.html` pages. Ship it alongside them.

## Page map (file → intended route)

Platform: `Feed-Management` `/platform/feed-management` · `Diagnostics` `/platform/diagnostics` · `Rules-Engine` `/platform/rules-engine` · `Price-Intelligence` `/platform/price-intelligence` · `Conversion-Intelligence` `/platform/conversion-intelligence`

Solutions: **cut (Sep 5, 2026)** — see "Solutions section cut" below. The four pages sit in `parked/` and are not part of the site.

Channels: `Channels` `/channels` · `Google-Shopping` · `Google-Ads` · `Bing` · `Meta` · `TikTok` · `Pinterest` · `Snapchat` · `Amazon` · `Walmart` · `eBay` (each `/channels/<slug>`)

Resources: `Help-Center` `/help` · `Contact` `/contact` · `Security` `/security`

Legal: `Privacy-Policy` `/privacy` · `Terms-of-Service` `/terms` · `GDPR-Data-Rights` `/gdpr` · `Cookie-Preferences` `/cookies`

Commercial: `Pricing` `/pricing`

All internal links currently use the file names (e.g. `href="Pricing.dc.html"`). When mapping to routes, a global find-and-replace per file name is sufficient; anchors (`#uninstall`, `#requests`, `#first-sync`, etc.) are stable ids inside their pages.

## Bracketed placeholders — DO NOT PUBLISH until resolved

These render as dashed rust chips on the page so they are easy to spot. Grep for `[` inside `<mark` to find them.

| Page | Placeholder | Resolves when |
|---|---|---|
| `Privacy-Policy.dc.html` §10 | `[SERVER LOG CLAIM …]` | Deployment is built; confirm whether logs exist, what they contain, and retention |
| `Cookie-Preferences.dc.html` §4 | `[SERVER LOG CLAIM …]` | Same as above |
| `Cookie-Preferences.dc.html` §3 | `[SESSION COOKIE NAME]` `[SESSION LIFETIME]` `[CSRF COOKIE NAME]` | Read from the application. Scout authenticates via App Bridge session tokens — if the app sets **no** cookies of its own, tell the designer and §3 will be rewritten to say so instead of listing rows |

## Unresolved hrefs (intentional stubs)

- `href="#signin"` — header "Sign in" on every page. Needs the app login URL (Shopify admin deep link or App Store install).
- `href="#start-free-trial"` — Pricing plan buttons and Pricing CTA. Needs the Shopify App Store listing URL.
- Homepage-internal anchors from the original build (`#book-a-demo`, `#talk-to-sales`, `#plan-comparison`, `#channel-directory`, `#opportunity-queue`, `#start-free-trial`) — left as-is per the homepage no-touch rule. Wire when the homepage is next opened for edits.
- All "Book a demo" buttons (header, pre-footer, in-page CTAs, homepage) → `Book-a-Demo.dc.html` as of Sep 5, 2026. On the demo page itself the header button anchors to `#form`.

## Facts baked into copy (verify against implementation before launch)

- Read-only Shopify scopes; `read_orders` optional and requested only when Conversion Intelligence is enabled.
- No shopper PII stored; personal fields stripped **before** storage; build-failing schema test enforces it.
- Per-store scoping enforced at the database level, verified by automated tooling on every change.
- Channel credentials encrypted at rest — Google Cloud KMS. Hosting: GCP `us-east1`.
- Sub-processors: the search-API and AI-model vendors are now described by role only (owner's decision, Sep 5, 2026) — "Search API provider" and "AI model provider" on Privacy, Security and GDPR pages. Named: Amazon/Walmart/eBay taxonomy APIs, connected channels, Shopify (billing), Google Cloud. **Legal check before launch:** GDPR Art. 13/28 and Shopify's app requirements generally expect sub-processors to be identifiable — confirm with counsel whether role-only disclosure is enough or a named list must be published (e.g. on a separate sub-processors page).
- Raw third-party API responses retained ≤30 days, then auto-deleted. Billing records 7 years, identity linkage severed.
- Shopify GDPR webhooks: `customers/data_request`, `customers/redact`, `shop/redact` (~48 h after uninstall).
- Pricing: Starter $49 / 1,000 SKUs / 3 channels / daily sync · Growth $149 / 10,000 / all 10 / hourly + Price & Conversion Intelligence · Scale $399 / 100,000 / priority support. 14-day trial, no card. SKU = each synced variant counts once across all channels; draft and archived variants included; usage figure may lag up to 24 h. (Wording aligned Sep 5 — the old card heading said "live variant" while its body included draft/archived. **Not verified against the counting code**; if the code excludes drafts/archived, change the FAQ answer, not the code.)
- Price recommendations are advisory only; Scout never writes a price. Stated on Price Intelligence, Terms §6, and Pricing.
- Entity: "Meerkat Scout, a sole proprietorship owned by Nana A. Smith", 255 Park Avenue, Worcester, MA 01605. No LLC/Inc. anywhere. Effective date on legal pages: September 2, 2026.
- Emails: support@ / privacy@ / legal@ / security@ meerkatscout.com. Hours Mon–Fri excl. US holidays, one-business-day target, no SLA. Contact page no longer shows the postal address or describes the company size.
- No certifications (SOC 2, ISO 27001, HIPAA, PCI), no pen test, no bug bounty — stated explicitly on `Security.dc.html`. Do not add badges.

## Honesty rules the copy follows

No customers, testimonials, logos, "trusted by", usage statistics, ROI or savings claims. All mockup data is illustrative and of the kind Scout produces (error counts, SKU counts, basis-point gaps, connection states). The only revenue figures on the site are on `Conversion-Intelligence.dc.html`, labelled "illustrative". Keep it that way when editing.

## Design constants (for anything new)

Pearl `#F7F4EF` · ink `#171514` · rust `#A0431A` (buttons `#C2571E`, dark-section eyebrows `#E2703A`) · near-black sections `#0A0A0A` / `#171514` · card `#fff` + `1px #EDE9E4` + `radius 10px` · Geist 800 / tracking −.035em for display, Geist Mono for field names and codes · 70px page gutters at 1440 · eyebrow: 13px / 600 / .14em uppercase.


## Channel hero rebuilds (Sep 3–4, 2026)

All ten channel heroes were rebuilt as illustrated compositions from approved mocks. Every preview is labelled illustrative; product names, prices, ratings, store names and handles are sample data and must not be presented as real.

- Meta — FB carousel + IG story ad, Scout "Choose business" card (assets/meta-*.png)
- eBay — three prerequisite cards → Scout → listing card (assets/product-shoe-square.png)
- Walmart — Marketplace catalog window + Seller connection card (assets/wm-*.png)
- Amazon — Catalog requirements window + schema-loaded card (assets/amz-backpack.png)
- Snapchat — phone ad preview + Catalog destination card (assets/snap-sneaker.png)
- Pinterest — three Product Pins + Pin readiness card; comparison section uses assets/pin-studio.png / pin-court.png
- TikTok — creator video card + Pocket speaker card (assets/tt-*.png)
- Bing — shopping results window + surfaces pill (assets/bing-*.png)
- Google Ads — product card + Performance Max preview (assets/gads-*.png)
- Google Shopping — results window with sample ratings + field-level checks card (assets/gs-*.png)

Snapchat badge now uses the black-ghost-on-yellow lockup site-wide.

## Contact page rebuild (Sep 5, 2026)

`Contact.dc.html` is now a contact form (name, email, optional shop domain, topic, message) with a Google reCAPTCHA v2 checkbox and a compact sidebar of the four direct addresses plus hours. All "one-person operation" language and the postal address were removed site-wide on this page; the legal entity and address still appear on Terms/Privacy where they are required.

- **No backend yet.** Submit validates, then opens the visitor's email app via `mailto:` to the topic's address (demo/support/billing → support@, privacy → privacy@, legal → legal@, security → security@) with subject and body prefilled, and shows a confirmation. Replace `submit()` in the logic class with a real POST when a form endpoint exists.
- **reCAPTCHA uses Google's public TEST site key** (`6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI` — always passes, shows a "for testing purposes only" banner). Before launch, register the real domain in the reCAPTCHA admin console and replace the key (the `recaptchaSiteKey` tweak / the default in the logic class). The token is only checked client-side today; verify it server-side (`siteverify`) once the form posts to a backend. Loading `google.com/recaptcha/api.js` sets Google cookies — reconcile with `Cookie-Preferences.dc.html` §4, which currently says the marketing site sets no cookies.
- `#demo` anchors to the form; `#support`, `#privacy`, `#legal`, `#security` preselect the topic. Header "Book a demo" now points to `Contact.dc.html#demo` on this page only — the other pages still link to `Contact.dc.html` (add `#demo` in the route mapping pass if wanted).

## Book a demo page (Sep 5, 2026)

`Book-a-Demo.dc.html` — lead-capture page. The demo is presented by the Meerkat Scout team on its own catalog; the copy promises no store connection, nothing to install. Do not add "connect your store" language here.

- **Form fields:** name, work email (both required), shop domain (optional), monthly-orders band, channel chips, optional notes. UTM params (`utm_source/medium/campaign/content/term`) are read from the URL and attached to every lead. Payload is JSON: `{name,email,shop,monthlyOrders,channels[],notes,page,submittedAt,recaptchaToken,utm_*}`.
- **Delivery:** the `leadEndpoint` prop (Tweaks → Lead capture) is the POST URL. Left blank, submit falls back to a `mailto:support@meerkatscout.com` draft exactly like Contact. Set it before launch.
- **Bot protection:** (1) honeypot `website` field — off-screen, `tabindex=-1`; if filled, the page shows the success state and sends nothing. (2) **reCAPTCHA v2 Invisible** — executes on submit, no checkbox; the token rides in `recaptchaToken`. The endpoint MUST verify it server-side (`https://www.google.com/recaptcha/api/siteverify`) or the captcha does nothing. Same public TEST site key as Contact — swap via the `recaptchaSiteKey` prop. Badge is hidden per Google's allowance, so the attribution line under the button must stay. `humanCheck=false` disables the captcha (dev only).
- If reCAPTCHA fails to load (blocked, offline) the form still submits without a token — leads over friction. Decide server-side whether untokened leads are accepted or quarantined.
- **Scheduling:** `schedulerUrl` prop takes a booking link. After a successful submit the card flips to "Pick a time" with that page in an iframe. Provider-aware: **Cal.com** (recommended — connect Google Calendar in Cal.com; bookings land on the owner's calendar with a Meet link) gets `name`, `email` and a `notes` summary (shop, orders, channels, message) prefilled from the form, so the prospect only picks a slot. **Calendly** gets the same via `name`/`email`/`a1`. **Google Calendar appointment schedules** work too (`gv=true` appended) but cannot be prefilled — name/email are typed twice. Blank = "we'll email you times" fallback. Setup for Cal.com: sign up → Settings → Calendars → connect Google → create a 30-min "Scout demo" event with Google Meet as location → copy its link (`https://cal.com/<user>/<event>`) into the prop.
- All "Book a demo" buttons site-wide now point here (done Sep 5, 2026).

## Solutions section cut (Sep 5, 2026)

The four problem-led pages (Fix Feed Errors, Multi-Channel Publishing, Marketplace Readiness, Global Commerce) are out of the site. Decision: they overlapped Platform and Channels and made claims a live demo can't yet show.

- "Solutions" removed from the header nav on every page (nav is now Platform · Channels · Resources · Pricing) and the footer's Solutions column is gone (footer grid is `300px repeat(4,1fr)`). Homepage included.
- The files are moved to `parked/` (asset and `support.js` paths are relative, so they only render again if moved back to the root). Do not publish them; do not create `/solutions/*` routes. If they were ever indexed, 301 `/solutions/*` → `/channels`.
- Retargeted links: Amazon, Walmart and eBay "How Scout handles marketplaces →" (and their "depends on" Marketplace Readiness card) now point to `Channels.dc.html#marketplaces` — the marketplace explainer on the Channels index, which got that id. The Channels page's own "Marketplace Readiness →" link was removed.
- New page since the original count: `Book-a-Demo.dc.html` (see its section).

## Pre-footer CTA refresh (Sep 5, 2026)

The shared "Ready to put Scout on watch?" pre-footer now uses a single full-bleed background render, `assets/scout-prefooter.jpg` (2172×724 JPEG, mascot with warm glow baked in, sized `cover`, anchored bottom, 480px tall at 1440). The old `<img src="assets/scout-cta.png">` mascot block is gone from every page; copy, buttons and the shield note are unchanged. Applied to all 24 pages that carry the pre-footer (legal pages never had one; the approved homepage is untouched per the no-touch rule — port the same section there when it is next opened). `assets/scout-cta.png` is no longer referenced by the .dc.html pages.

## Multi-Channel Publishing rebuild (Sep 5, 2026)

`Multi-Channel-Publishing.dc.html` rebuilt from the approved mock. New assets: `assets/racket-bag.png` (sample product, illustrative) and `assets/scout-mark.png` (mark cropped from the logo). Hero "Before Scout" card, the dark workflow diagram (catalog → Scout rules → ten channel tiles, Google Shopping and Google Ads grouped under Merchant Center) and the "Automatic removal" timeline are all labelled illustrative; "1,284 products", times and channel states are sample data. Channel tiles link to their channel pages. The page keeps the shared dark mascot CTA before the footer (the mock's compact "Bring your channels together." block was dropped in its favour). "Start free trial" buttons go to `Pricing.dc.html`.

## Pricing refinements (Sep 5, 2026)

`Pricing.dc.html` only. Prices, limits, entitlements and the described billing behavior are unchanged.

- Header: "Simple plans. Room to grow." / "Choose the catalog size and capabilities your store needs. Start with a 14-day free trial." / "Billed monthly through Shopify · No card required to start".
- Plan cards share aligned rows (name, price, description, features, button) via CSS subgrid. Growth carries a 1.5px `#C2571E` outline and the filled orange button; no "Most popular" badge. Footnote under the cards: "Price and conversion intelligence are included with Growth and Scale."
- The three tall Billing / Trial / SKU cards are gone; their facts live in a five-question FAQ built on native `<details>/<summary>` (keyboard-operable, no script). The first item opens by default; `name`-grouped exclusive opening is available as a tweak.
- Over-cap reassurance shortened to one heading + one paragraph; the lapse sentence moved into the FAQ, where it is distinguished from over-limit (plan still active) and from uninstall (subscription stops, data deleted per GDPR page).

### Customer-count wording audit

Searched all 29 pages, `support.js`, assets, and this handoff for "Scout has no customers yet", "no customers", "no one to quote", "most popular", "testimonial", "trusted by", "popular".

- **Customer-facing (removed):** `Pricing.dc.html` and `site/Pricing.dc.html`, closing paragraph of the Billing details section: "Scout has no customers yet, so there is no 'most popular' plan and no one to quote. Pick the tier that matches your SKU count; the trial will tell you the rest." Nothing replaced it.
- **Internal-only (kept):** this file — "Honesty rules" ("No customers, testimonials, logos, 'trusted by'…") and the TL;DR ("no customers, testimonials, stats, or ROI claims"). These are rules for editors, not page copy.
- No hits in shared header/footer markup, page metadata, the homepage, or the standalone homepage export. The words "your customers" on Privacy §03 and GDPR §02 refer to merchants' shoppers and are unrelated.

### Billing rules NOT verified against the implementation

No application code was available for this pass; every FAQ statement is drawn from copy already approved elsewhere on the site (Terms §fees/§15, Help Center §05, the previous Pricing cards). Confirm before launch:

1. **SKU counting** — each synced variant once across channels, drafts and archived included, usage lag ≤24 h.
2. **Trial end without conversion** — the FAQ now says (drafted, unconfirmed): Scout stops syncing at the end of day 14, listings already published stay in each channel's systems, and syncing resumes when a plan is chosen. If the code instead keeps syncing existing listings (as on lapse) or deletes data, rewrite this sentence.
3. **Trial conversion** — that a merchant "chooses to continue" in the app and billing starts through Shopify from that point, with no card collected during the trial.
4. **Lapsed subscription** — "existing listings stay live and current, new products wait": for how long, whether any grace period exists, whether "lapse" covers failed Shopify charges and downgrades, and how a merchant reactivates.
5. **Over-limit** — that exceeding the SKU cap never changes the plan or the bill and only holds back new products (the page implies, but does not state, that the bill is unchanged).
6. **Cancellation** — uninstall is the only cancel path; refunds follow Shopify's policies.

### Responsive note

Pricing is the first page without `min-width:1440px`. Breakpoints at 1100 / 900 / 640 / 480 px live in the page's `<style>` block, keyed on `data-r` attributes (header collapses to a two-row bar with a scrollable nav, cards stack, the two-column lower section stacks, the CTA mascot drops below the copy, footer goes to 3 then 2 columns). The other 28 pages are still fixed at 1440; the same block can be ported to them since header/footer markup is identical.
