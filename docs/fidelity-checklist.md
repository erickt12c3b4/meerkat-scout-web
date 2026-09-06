# Page-by-page fidelity checklist (desktop, 1440px)

Method: the original design files were served with their own runtime (`npx serve`-equivalent on
:3100) and the production build on :3000, both loaded in the same headless Chromium at 1440×900.
For every page a script compared the height of every `section` / `footer` (design vs app) and the
total page height; a second script computed a pixelmatch diff of the full-page screenshots. Text
anti-aliasing differs slightly between the two renders (same font file, different page), so the
pixel diff is reported but the section-height table is the meaningful number: a 0px delta means
every block landed at the same y with the same size.

Legend: **match** = all section heights equal to the design; deviations are listed with the reason.

| Route | Design file | Height design / app | Verdict | Deviations / notes |
| --- | --- | --- | --- | --- |
| `/` | Meerkat-Scout-Homepage.html | see table below | match, minus footer −22px | Shared footer/CTA/header replace the file's own (see conversion log, judgment call 7). Footer −22px because the shared footer renders at line-height `normal` like the other 25 pages, while the homepage file used preflight's 1.5. Hero, Diagnostics, Price/Conversion Intelligence, How Scout works, Connectivity, Pricing sections match. |
| `/platform/feed-management` | Feed-Management.dc.html | equal | match | Hero uses `Scaled` in flow mode (scale 1 at desktop). |
| `/platform/diagnostics` | Diagnostics.dc.html | equal | match | Table rows carry `stack-*` hooks (no desktop effect). |
| `/platform/rules-engine` | Rules-Engine.dc.html | equal | match | |
| `/platform/price-intelligence` | Price-Intelligence.dc.html | equal | match | |
| `/platform/conversion-intelligence` | Conversion-Intelligence.dc.html | equal | match | |
| `/channels` | Channels.dc.html | equal | match | `#marketplaces` anchor kept. |
| `/channels/google-shopping` … `/channels/ebay` (10) | *.dc.html | equal | match | One `ChannelPage` template; heroes and "distinguishing behavior" are the files' markup verbatim inside `Scaled` (scale 1 at desktop). Bing gradients / Walmart+eBay dashed `msFlow` animation kept. |
| `/pricing` | Pricing.dc.html | equal | match | FAQ is shadcn Accordion instead of `<details>`; open/closed geometry identical; the trigger's chevron rotates 180° as in the file. |
| `/demo` | Book-a-Demo.dc.html | equal | match | Form is a client component on shadcn Input/Textarea/Label/Button/ToggleGroup restyled to the file; success state, scheduler iframe and "While you wait" note per spec. |
| `/contact` | Contact.dc.html | equal | match | reCAPTCHA v2 checkbox renders with the test key (red "for testing" banner, as in the file). Compact footer. |
| `/help` | Help-Center.dc.html | equal | match | |
| `/security` | Security.dc.html | equal | match | |
| `/legal/privacy` | Privacy-Policy.dc.html | equal | match | `[SERVER LOG CLAIM …]` chip kept. |
| `/legal/terms` | Terms-of-Service.dc.html | equal | match | |
| `/legal/gdpr` | GDPR-Data-Rights.dc.html | equal | match | |
| `/legal/cookies` | Cookie-Preferences.dc.html | equal | match | Placeholder chips kept. |

## Measured numbers (final production build)

From the final measurement run (design files on :3100 vs production build on :3000, headless Chromium 1440×900):

<!-- NUMBERS -->

| Route | Page height design → app | Section drift | Full-page pixel diff |
| --- | --- | --- | --- |
| `/` | 7650 → 7628 (-22) | expected: pre-footer CTA is its own section (−480 in Pricing, +480 at the end) and the shared footer is 22px shorter (line-height) | 8.71% |
| `/channels` | 2505 → 2505 (+0) | none | 0.31% |
| `/channels/amazon` | 3877 → 3877 (+0) | none | 0.20% |
| `/channels/bing` | 3609 → 3609 (+0) | none | 0.27% |
| `/channels/ebay` | 3799 → 3799 (+0) | none | 0.22% |
| `/channels/google-ads` | 3673 → 3673 (+0) | none | 0.28% |
| `/channels/google-shopping` | 3739 → 3739 (+0) | none | 0.20% |
| `/channels/meta` | 3846 → 3846 (+0) | none | 0.25% |
| `/channels/pinterest` | 3753 → 3753 (+0) | none | 0.25% |
| `/channels/snapchat` | 3586 → 3586 (+0) | none | 0.23% |
| `/channels/tiktok` | 3606 → 3606 (+0) | none | 0.21% |
| `/channels/walmart` | 3854 → 3854 (+0) | none | 0.19% |
| `/contact` | 1283 → 1283 (+0) | none | 0.22% |
| `/demo` | 3403 → 3403 (+0) | none | 0.29% |
| `/help` | 3923 → 3923 (+0) | none | 0.29% |
| `/legal/cookies` | 4112 → 4112 (+0) | none | 0.12% |
| `/legal/gdpr` | 7414 → 7414 (+0) | none | 0.16% |
| `/legal/privacy` | 7612 → 7612 (+0) | none | 0.14% |
| `/legal/terms` | 8184 → 8184 (+0) | none | 0.11% |
| `/platform/conversion-intelligence` | 3344 → 3344 (+0) | none | 0.24% |
| `/platform/diagnostics` | 3808 → 3808 (+0) | none | 0.20% |
| `/platform/feed-management` | 3597 → 3597 (+0) | none | 0.22% |
| `/platform/price-intelligence` | 3332 → 3332 (+0) | none | 0.36% |
| `/platform/rules-engine` | 4070 → 4070 (+0) | none | 0.20% |
| `/pricing` | 2371 → 2371 (+0) | none | 0.31% |
| `/security` | 3906 → 3906 (+0) | none | 0.21% |

Pixel diff = pixelmatch (threshold .12, anti-aliasing included) over the full-page screenshots at 1440; it is dominated by sub-pixel text rasterisation differences between two separate page loads and by the homepage's structural changes (see notes), which is why the section-height columns are the ones to read.

## Global decisions that affect every page

- Fonts: Geist / Geist Mono self-hosted from the exact woff2 files the design's Google Fonts
  stylesheet serves (`app/fonts.css`, `public/fonts/`); the homepage additionally uses the Geist
  build embedded in its own file (`Geist Home`) for its sections. Both `next/font/google` and the
  `geist` npm package ship builds with slightly different advance widths that changed line wraps
  (see the conversion log), so neither is used.
- `html { line-height: normal }` (the files have no reset) — see conversion log.
- Links: `#A0431A`, no underline, `filter: brightness(.94)` hover with a 150ms filter transition;
  focus: `2px solid #C2571E`, offset 2px; smooth scroll; every `[id]` gets `scroll-margin-top: 100px`.
- Header/CTA/footer: one component each. Active nav item and current footer link per page as in
  the files. Demo page header button → `#form`; Contact header button → `/contact#demo`; Pricing and
  homepage CTA trial button → `#start-free-trial` stub (as in the files).
- Icons: Lucide via `lucide-react` where the file's paths are current Lucide paths (24 glyphs);
  everything else inline SVG exactly as drawn (shared components in `components/brand-icons.tsx`).
- Images: `next/image` with display-size `width`/`height` (logo 171×42 etc.), intrinsic sizes for
  fluid images with a `sizes` hint; mascots `pointer-events-none`, not `priority`.
- Assets: all handoff assets copied except `court-shoe.png` (superseded, never referenced by the
  pages) and `scout-cta.png` (legacy, unreferenced).

## Behavior parity (forms)

Verified by script against the production build: Contact `#support` preselects the tile,
clicking a tile swaps `aria-pressed`, empty submit → "Please add your name.", filled without captcha
→ "Please confirm you're not a robot.", reCAPTCHA iframe present. Demo: empty submit → "Please add
your name."; band single-select (re-click clears) and chip multi-select; submit executes the
invisible reCAPTCHA (test key) and POSTs `{kind, name, email, shop, monthlyOrders, channels, notes,
page, submittedAt, utm_*, recaptchaToken}` to `/api/lead`; with no `LEAD_ENDPOINT` the route
returns `delivered:false` and the page falls back to the mailto draft and the "You're on the list"
state. API: missing/invalid email → 422; no token → accepted, `verified:false` (see route comment
to change); a token that fails siteverify → 400. Note that with Google's public TEST secret (the
default until `RECAPTCHA_SECRET` is set) siteverify accepts any token, so the 400 path only
exercises with a real key.
