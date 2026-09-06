# Handoff: Meerkat Scout marketing site → Next.js / Tailwind / shadcn

## Overview

Meerkat Scout is a Shopify app: product-feed management and commerce intelligence for merchants (feeds to Google Shopping, Meta, TikTok, Pinterest, Snapchat, Bing, Amazon, Walmart, eBay; diagnostics; a rules engine; price and conversion intelligence). This bundle is the complete 26-page marketing site as approved by the owner, plus a lead-capture "Book a demo" page and a contact page with working client-side forms.

The target is a **Next.js (App Router) + Tailwind CSS + shadcn/ui** codebase. Nothing exists yet, so you are choosing structure; the visual result must match these files.

## About the design files

Every file in this bundle is a **design reference written in HTML** — a high-fidelity prototype of the intended look and behavior, not production code to ship. Your job is to **recreate each page in the Next.js codebase**, using Tailwind for styling and shadcn components where they fit, reproducing the layout, type, color, spacing and interactions exactly.

Two file types:

- `Meerkat-Scout-Homepage.html` — a self-contained static page (fonts embedded, Tailwind v4 utility CSS inlined). Open directly.
- `*.dc.html` (25 pages) — the same page pattern authored as "design components". Anatomy:
  - `<helmet>` at the top: Google Fonts link, a small `<style>` with body resets, link colors, form resets and the focus ring, and (Contact, Book a Demo) the reCAPTCHA script.
  - The page markup lives inside `<x-dc>…</x-dc>`. **All styling is inline `style="…"`** — every hex, px and em is the final value. There are no classes to decode.
  - `style-hover="…"` is a hover-state declaration (only ever `filter:brightness(.94)` here → `hover:brightness-[.94]`).
  - Templating (Contact, Book a Demo, Pricing only): `{{ name }}` holes bound to a component state; `<sc-if value="{{ flag }}">` conditional blocks; `<sc-for list="{{ items }}" as="it">` repeaters; `onClick="{{ handler }}"`. The logic is a plain class in `<script type="text/x-dc" data-dc-script>` at the bottom of the file — read it as the React component's state and handlers. Its `data-props` attribute lists the page's configurable props (defaults included).
  - `support.js` is the tiny runtime that renders `.dc.html` in a browser. Serve the folder over HTTP (`npx serve .`) and open any page to see it live; **do not port support.js** — it has no role in the Next.js build.
  - `data-screen-label` attributes name each section — use them as component names.

`DEV-HANDOFF.md` is the owner's running decisions log (facts baked into copy, placeholders, legal constraints, per-page rebuild notes). Read it; it is authoritative on *content*. This README is authoritative on *implementation*.

## Fidelity

**High-fidelity, desktop.** Recreate pixel-for-pixel at 1440px: the values in the markup are final (colors, sizes, weights, letter-spacing, radii, shadows, copy). Do not substitute Tailwind's default scale where it differs — use `theme.extend` or arbitrary values (`text-[14.5px]`, `tracking-[-0.035em]`, `rounded-[10px]`).

**Not designed: responsive layouts.** Every page carries `body{min-width:1440px}` and fixed 70px gutters. The owner has not yet specified tablet/mobile. Build the desktop layout first, then either (a) request mobile designs, or (b) apply a sensible collapse: single column below 1024px, header nav into a sheet, product tables to stacked cards, hero mascots hidden below 768px. Flag (b) as unreviewed.

## Site map and routes

Header nav (identical on every page, 80px tall, sticky): **Platform · Channels · Resources · Pricing**, then **Sign in** (stub `#signin`) and the primary **Book a demo** button → Book a Demo page. Active item: `color:#171514;font-weight:600`; others `#3F3F46` 500.

| File | Route | Notes |
| --- | --- | --- |
| `Meerkat-Scout-Homepage.html` | `/` | Approved homepage. Anchors `#platform #channels #resources #pricing`; `#start-free-trial` is a stub. |
| `Feed-Management.dc.html` | `/platform/feed-management` | |
| `Diagnostics.dc.html` | `/platform/diagnostics` | |
| `Rules-Engine.dc.html` | `/platform/rules-engine` | |
| `Price-Intelligence.dc.html` | `/platform/price-intelligence` | |
| `Conversion-Intelligence.dc.html` | `/platform/conversion-intelligence` | |
| `Channels.dc.html` | `/channels` | Index; `#marketplaces` anchor is linked from Amazon/Walmart/eBay. |
| `Google-Shopping / Google-Ads / Meta / TikTok / Pinterest / Snapchat / Bing / Amazon / Walmart / eBay.dc.html` | `/channels/<slug>` | Ten channel pages, one shared template (see below). |
| `Pricing.dc.html` | `/pricing` | FAQ accordion (state). |
| `Book-a-Demo.dc.html` | `/demo` | Lead form (state, fetch, reCAPTCHA, scheduler embed). |
| `Contact.dc.html` | `/contact` | Contact form (state, reCAPTCHA). Anchors `#demo #question #support #billing` preselect a topic; `#privacy #legal #security` scroll to the direct-address row. |
| `Help-Center.dc.html` | `/help` | |
| `Security.dc.html` | `/security` | |
| `Privacy-Policy.dc.html` | `/legal/privacy` | |
| `Terms-of-Service.dc.html` | `/legal/terms` | |
| `GDPR-Data-Rights.dc.html` | `/legal/gdpr` | |
| `Cookie-Preferences.dc.html` | `/legal/cookies` | |

Internal links use file names (`href="Pricing.dc.html"`); map them to routes. In-page ids are stable and referenced cross-page — keep them.

There is **no Solutions section** (cut Sep 5, 2026). Do not create `/solutions/*`.

## Shared chrome (build once, use everywhere)

**Header** — `position:sticky; top:0; z-index:40; height:80px; background:rgba(250,249,247,.82); backdrop-filter:saturate(1.25) blur(12px); display:grid; grid-template-columns:1fr auto 1fr; align-items:center; padding:0 22px`. Logo `assets/img-03.png` at height 42px. Nav `gap:34px; font-size:14.5px; font-weight:500`. Right group `gap:20px`: Sign in (14.5px/500 #3F3F46) and the primary button (14.5px/600 white on #C2571E, `border-radius:6px; padding:11px 20px; box-shadow:0 1px 2px rgba(24,24,27,.10)`).

**Pre-footer CTA** (every page except Contact) — `<section>` `position:relative; display:flex; align-items:center; min-height:480px; padding:0 100px; background:#0B0A09 url(assets/scout-prefooter.jpg) center bottom/cover no-repeat; overflow:hidden`, plus a decorative 1440×452 SVG of thin `#6a2f18` curves at 35% opacity masked out to the right. Content column 760px, `padding:72px 0 64px`: eyebrow (13px/600, `.14em`, uppercase, #E2703A), h2 46px/800/1.06/-.035em white, paragraph 17.5px/1.55 #B7B0A8 max 520px, two buttons (`min-height:52px; padding:0 26px; border-radius:8px; font 17px/600`; primary is paper #FAF8F4 on dark with #171514 text; secondary transparent with `1px solid #46423E` white text), then a shield icon + 15.5px #B7B0A8 note. Copy on feature/channel pages: "Ready to put Scout on watch?" / "Start your 14-day free trial" / "Book a demo"; the demo page uses "Prefer to start on your own?" / "Talk to us".

**Footer** — `background:linear-gradient(180deg,#121110,#0c0c0c); border-top:1px solid #4a4540`, decorative curve SVG at 20% opacity. Grid `300px repeat(4,1fr); gap:30px; padding:48px 70px 0`. Column 1: light logo `assets/img-03-light.png` 255×63, tagline 15.5px/1.55 #A8A29A, "One catalog. Every destination." #D2CCC5. Columns: **Platform, Channels, Resources, Legal** — headings 15px/700 #FAF8F4, links 14.5px #A8A29A (`gap:13px`), current page #FAF8F4. Rule `margin:40px 70px 0; height:1px; background:#332e2a`. Bottom bar `padding:22px 70px 30px`: "© 2026 Meerkat Scout. All rights reserved." 14px #8A857F left; right: Privacy • Terms • Contact • ◎ English (14px #A8A29A, dots #5c5650). Contact has a compact footer instead (logo 34px + Privacy · Terms) — see that file.

**Section rhythm** — light sections `padding:88px 70px` (variants 84/92/96 — read each file), dark sections `background:#0A0A0A` (or `#171514`) with a soft radial glow `radial-gradient(closest-side, rgba(160,67,26,.12), transparent 70%)` positioned top-right. Eyebrow → h2 → lede stack: eyebrow 13px/600/.14em uppercase (#A0431A on light, #E2703A on dark) with `margin-bottom:22px`; h2 44–52px/800/1.06/-.035em; lede 17.5px/1.5 #52525B (light) or #B7B0A8 (dark) with `margin-top:14px`.

## Design tokens

Put these in `tailwind.config` (`theme.extend`) and in shadcn's CSS variables. Names are suggestions; values are not.

**Color**
- Paper (page bg) `#F7F4EF` · paper-light `#FAF8F4` / `#FAF9F8` · card `#FFFFFF`
- Ink `#171514` · body `#52525B` · nav gray `#3F3F46` · muted `#6B655E` · faint `#8A857F` · placeholder `#A9A7A2`
- Border `#EDE9E4` · border-strong `#E7E1D9` / `#DDD6CC` (inputs) / `#D9D2C8` (secondary buttons) · tint `#F1ECE5`
- Rust (text/eyebrow/links) `#A0431A` · Rust button `#C2571E` · Rust on dark `#E2703A` · Amber accent `#E5813A` · Rust tint `#FFF3EC` (selected tiles) / `#FFF6E8` (badges) · tint border `#F3D9C8` / `#F3C7AE`
- Dark sections `#0A0A0A` · `#0B0A09` · `#171514` · `#141312` (dark card) · dark border `#2E2A26` / `#26231F` / `#1F1D1B` / `#3A3430` / `#46423E` · dark text `#D2CCC5` · dark muted `#B7B0A8` / `#A8A29A` · footer gradient `#121110 → #0c0c0c`, rule `#332e2a`, dots `#5c5650`, curves `#6a2f18`
- Status: green `#2E9E5B` (dot) / `#5DBB7A` (text on dark) / `#1F7A4C` + `#EAF5EE` (light badge) / `#4E7A57` (homepage checks); warning `#E5A33A`; error text `#B42318` on `#FDECEA`; success text `#2F6B3A` on `#E8F3EA`
- Channel brand colors appear only inside their own channel heroes (e.g. Amazon `#FF9900`, Walmart blues, Google `#4285F4`) — copy from each file.

**Type** — Family: **Geist** (400–800) and **Geist Mono** (400–600), via Google Fonts today; in Next use the `geist` package (`GeistSans`, `GeistMono`). `-webkit-font-smoothing:antialiased` on body.
- Display h1: 56–58px / 1.04–1.06 / 800 / -.035em to -.038em (Contact hero: 70px / .98 / -.04em; legal pages 57px/1.08)
- h2 section: 44–52px / 1.06 / 800 / -.035em · card titles 22px/700/-.02em · sub-headings 17–18px/700
- Body: 17.5px/1.55 (ledes), 16.5px/1.5, 15.5px/1.55 (card copy), 15px, 14.5px (UI, table cells, nav), 14px, 13.5px (footnotes), 13px eyebrows/labels (600–700, `.12em`–`.14em`, uppercase), 12–12.5px meta, 11–11.5px micro-labels (700, `.1em`–`.12em`, uppercase)
- Mono (Geist Mono) for numbers in tables, identifiers, code-like labels — 11.5–14px

**Radius** — 6px (header button, small chips) · 8px (inputs, buttons, tiles, rows) · 10px (cards, tile buttons) · 12px (section cards) · 14px (hero cards) · 16px (frames) · 999px (pills) · 50% (dots/icons)

**Shadows** — hairline button `0 1px 2px rgba(24,24,27,.10)` · card `0 10px 28px rgba(24,24,27,.06)` · raised card `0 14px 34px rgba(24,24,27,.06–.08)` · hero card `0 18px 44px rgba(24,24,27,.12)` · floating on dark `0 24px 60px rgba(0,0,0,.45)`

**Spacing** — page gutter 70px (CTA 100px); section padding 84–96px; card padding 24–28px (dark cards `28px 28px 30px`); grid gaps 14/16/18/24px; stacked-text gaps 6–8px.

**Interaction** — links `#A0431A`, no underline (underlined only where the design shows it: `text-underline-offset:3px; text-decoration-thickness:1px`). Hover on buttons/links: `filter:brightness(.94)`, `transition:filter .15s ease`. Focus: `outline:2px solid #C2571E; outline-offset:2px` on all controls (never the browser default). `html{scroll-behavior:smooth}`; anchored blocks carry `scroll-margin-top:100px` to clear the sticky header. Disabled button: browser default (no design) — use `opacity:.6; cursor:default`.

## Component patterns (map to shadcn, then override)

shadcn defaults will fight these values; set the CSS variables (`--background: #F7F4EF; --foreground: #171514; --primary: #C2571E; --primary-foreground: #fff; --border: #EDE9E4; --input: #DDD6CC; --ring: #C2571E; --muted-foreground: #52525B; --radius: 0.5rem`) and add size variants — shadcn's `Button` (36–40px) and `Input` (36px) are smaller than anything here.

- **Primary button** — `min-height:50–54px; padding:0 24–28px; border-radius:8px; background:#C2571E; color:#fff; font 16–17px/600; box-shadow:0 1px 2px rgba(24,24,27,.10)`. Full-width variant in forms (54px). Arrow glyph: Lucide `arrow-right` 15–18px, stroke 2.
- **Secondary button** — white, `1px solid #D9D2C8`, #171514 text, same height/radius. On dark: transparent, `1px solid #46423E`, white text.
- **Card** — white, `1px solid #EDE9E4`, radius 12px (10px for small), padding 24–28px. Dark card: `#141312`, `1px solid #2E2A26`.
- **Hero card** (Conversion Intelligence, Price Intelligence, Contact, Book a Demo) — white, radius 14px, `1px solid #EDE9E4`, shadow `0 18px 44px rgba(24,24,27,.12)`/`.08`.
- **Eyebrow + badge** — pill `padding:5px 10px; border-radius:6px; background:#FFF6E8; color:#A0431A; 11px/700/.1em uppercase`. Status dot 18px circle (#E5813A "!" / #2E9E5B check / #E5A33A "?").
- **Data table (dark)** — container `#141312`, `1px solid #2E2A26`, radius 12px; toolbar row with filter pills (`padding:7px 13px; radius 999px; 13px/600`; active = paper fill `#F3EFE9` on ink, inactive = `1px solid #3A3430` text `#D2CCC5`); header row 11.5px/700/.12em uppercase #8A857F; rows `padding:14px 20px`, `border-bottom:1px solid #26231F`, 14.5px #D2CCC5, product tiles 66×46 radius 6; highlighted row `background:#1E1A17; box-shadow:inset 3px 0 0 #E5813A`. Use shadcn `Table` only for semantics; style per above.
- **Topic tiles** (Contact) — `height:66px; padding:0 20px; radius 10px; gap 16px; 17px/500`; icon 28px Lucide stroke 1.5. Unselected: `1px solid #E4DED5` white, icon #171514. Selected: border #C2571E, bg #FFF3EC, icon #C2571E, `aria-pressed=true`. shadcn `ToggleGroup type="single"` fits.
- **Choice pills** (Book a Demo) — bands: `height:44px; radius 8px; 14.5px/600`; chips: `height:36px; padding:0 14px; radius 999px; 14px/500`. Same selected/unselected colors, chips multi-select (`ToggleGroup type="multiple"`), text #A0431A when selected.
- **Inputs** — `height:46px (48 on legal/old forms); padding:0 14px; 1px solid #DDD6CC; radius 8px; 15.5px`; label 15px/600 above, `gap:8px`; optional hint `(optional)` 400 #8A857F inside the label. Textarea `min-height:76–100px; padding:12px 14px; line-height 1.5; resize:vertical`. Placeholder #A9A7A2.
- **Icon circle** — 54px, `background:#FFF3EC; border:1px solid #F3D9C8`, Lucide icon 24px stroke 1.6 #C2571E (Contact, Book a Demo). Checklist dot: 24px version with a 13px check, stroke 2.5.
- **Number steps** — "01/02/03" in Geist Mono 13px/600 #A0431A above a 22px/700 title.
- **FAQ** — Pricing: accordion (see behavior). Book a Demo: static `dl` two-column grid, `gap:34px 40px`, dt 18px/700/-.015em, dd 15.5px/1.55 #52525B.
- **Mascot placement** — Scout PNG cutouts are `position:absolute` or in-flow images anchored to a section's bottom edge (`bottom:0`, sometimes `bottom:-50px` overflowing into the next section of the same color). Keep their exact `left/right` and `height` per file; they are decorative (`pointer-events:none`).

Icons throughout are **Lucide** at stroke 1.5–1.8 (the exact paths are inline in the files) — use `lucide-react`.

## The ten channel pages share one template

`Google-Shopping, Google-Ads, Meta, TikTok, Pinterest, Snapchat, Bing, Amazon, Walmart, eBay` all have the sections **Hero → Connect → Distinguishing behavior → Does and requires → Depends on → CTA → Footer**. Build one `ChannelPage` component with a per-channel data object (copy, brand colors, hero composition, product images) and ten routes. Heroes differ visually (each is an illustrated composition with the channel's brand palette and sample product shots — treat each hero as bespoke markup) but the four content sections below share structure. The "Depends on" grid links to Platform pages and, for the three marketplaces, to `/channels#marketplaces`.

## Interactions and behavior

### Contact (`Contact.dc.html`)
- State: `name, email, shop, topic ('question'|'demo'|'support'|'billing'), message, captcha token, error, sent`.
- Topic tiles set `topic`; URL hash `#question|#demo|#support|#billing` preselects (also on `hashchange`); `#demo` is also the form's id (scroll target).
- Validation on submit (no native validation): name required → "Please add your name."; email regex `/^[^\s@]+@[^\s@]+\.[^\s@]+$/` → "Please enter a valid email address so we can reply."; message required → "Please write a short message."; captcha required → "Please confirm you're not a robot." Error renders as a `role=alert` box (`#FDECEA` bg, `#B42318` text, 14.5px, radius 8, padding 12px 14px) above the button.
- reCAPTCHA **v2 checkbox** rendered explicitly into a container (`grecaptcha.render`, `?render=explicit`). Site key is Google's public TEST key — replace via env var before launch.
- Submit: builds `mailto:support@meerkatscout.com?subject=<Topic> — <shop or name>&body=…` and sets `window.location.href`; then shows a `role=status` success box (`#E8F3EA`/`#2F6B3A`) naming the address. **No backend exists** — replace the mailto with a server action/API route when one does; keep the copy.
- Prop `humanCheck` (default true) hides the captcha and skips its validation (dev only).

### Book a Demo (`Book-a-Demo.dc.html`)
- State: `name, email, shop, orders ('lt500'|'500-5k'|'5k-50k'|'50k+'|''), channels[] (from the 9 chip labels), notes, hp (honeypot), error, busy, done, via`.
- Bands: single-select, clicking the selected one clears it. Chips: multi-select.
- Validation: name required; email regex as above → "Please enter a valid work email so we can send you times." Everything else optional.
- **Honeypot**: off-screen text input `name="website"`, `tabindex=-1`, `autocomplete=off`. If filled, show the success state and send nothing.
- **reCAPTCHA v2 Invisible**: rendered with `size:'invisible'`; on valid submit, `busy=true` → `grecaptcha.execute()` → token callback → send. Badge hidden with `.grecaptcha-badge{visibility:hidden}`, so the attribution line ("Protected by reCAPTCHA. Google's Privacy Policy and Terms apply.") under the button is **required**. 60s timeout and `error-callback` reset `busy` with a message. If the script never loads, submit proceeds without a token (leads over friction).
- UTM capture: `utm_source, utm_medium, utm_campaign, utm_content, utm_term` from the URL are merged into the payload.
- Payload (JSON POST to `leadEndpoint` when set): `{ name, email, shop, monthlyOrders, channels:[], notes, page, submittedAt (ISO), recaptchaToken?, utm_* }`. Non-2xx → error "We couldn't send that. Email support@meerkatscout.com and we'll book you in." When `leadEndpoint` is blank: mailto fallback to support@ (same shape as Contact). **The endpoint must verify `recaptchaToken` server-side** (`siteverify`).
- Success state replaces the form inside the same card: calendar-check icon in a 56px circle, h2 "Thanks, {first name}. Pick a time." (or "…You're on the list." without a scheduler), one-line message, then either the **scheduler iframe** (`height:660px`, framed `1px solid #EDE9E4` radius 10) with an "Open the booking page in a new tab" fallback link, or a paper-tinted "While you wait" note; then a secondary button "Or start a 14-day free trial now →" → Pricing.
- Scheduler URL rules (`schedulerUrl` prop): Cal.com → append `name, email, notes (summary of shop/orders/channels/notes), theme=light, layout=month_view`; Calendly → `name, email, a1, hide_gdpr_banner=1, embed_type=Inline, embed_domain`; Google Calendar appointment page → `gv=true` (cannot prefill). Never duplicate a param already present.
- Props: `leadEndpoint` (string), `schedulerUrl` (string), `humanCheck` (bool), `recaptchaSiteKey` (string), `askChannels` (bool, show chips), `showNotes` (bool). Make these env/config values.

### Pricing (`Pricing.dc.html`)
- FAQ accordion: each item toggles open/closed; props `firstFaqOpen` (default true) and `oneOpenAtATime` (default false). Read the small logic class for the exact open/close markup; shadcn `Accordion` (type single/multiple) maps directly — restyle to the file.

### Everything else
Static. Hover/focus states as in tokens. No animations beyond `transition:filter .15s` (and a dashed-line `msFlow` stroke animation on Walmart/eBay diagrams — `@keyframes msFlow{to{stroke-dashoffset:-9}}`, linear, infinite).

## Assets (`assets/`, 56 files — copy to `/public`)

- Brand: `img-03.png` (logo, dark, 1510×370 → display 42px tall), `img-03-light.png` (logo on dark), `scout-mark.png` (mark only).
- Mascot cutouts (transparent PNG): `scout-clipboard.png` (clipboard left, hand raised right — Book a Demo, Feed Management), `scout-clipboard-point.png` (pointing left — Conversion Intelligence), `scout-mail.png` (mail-carrier bust, 426×371 — Contact), `scout-price-hero.png`, `scout-map.png`, `scout-cta.png` (legacy, unused), `scout-prefooter.jpg` (2172×724, pre-footer background).
- Sample products (illustrative, no brands): `court-shoe-2.png` (use this; `court-shoe.png` is the superseded branded render — do not ship it), `ci-headphones.png`, `ci-overgrip.png`, `ci-wristband.png`, `ci-racket-bag.png`, `racket-bag.png`, `fm-cleat.png`, `fm-football.png`, `fm-jersey.png`, `product-shoe-square.png`, and per-channel shots prefixed `amz- bing- gads- gs- meta- pin- snap- tt- wm-`.
- Homepage imagery `img-01, 04, 06, 08, 09, 11–16.png` (referenced by the homepage only).

Use `next/image` with explicit `width/height` from the markup; mascots keep `priority` off and `pointer-events:none`.

## Files in this bundle

- `README.md` — this document.
- `DEV-HANDOFF.md` — owner's decisions log: content facts, placeholders to resolve, legal notes, per-page change history. Its "Bracketed placeholders — DO NOT PUBLISH" and "Unresolved hrefs" sections are your launch checklist.
- `Meerkat-Scout-Homepage.html` + 25 `*.dc.html` — the pages.
- `support.js` — runtime for viewing the `.dc.html` files locally (`npx serve .`). Not for production.
- `assets/` — all images.

## Launch checklist (from the owner)

1. Production reCAPTCHA site key (Contact + Book a Demo) and server-side verification.
2. `leadEndpoint` for the demo form (CRM/webhook) — until then both forms fall back to `mailto:`.
3. `schedulerUrl` — owner is setting up Cal.com connected to Google Calendar.
4. Sign-in URL (`#signin` stub in every header).
5. Cookie-Preferences bracketed placeholders (see DEV-HANDOFF.md).
6. Sub-processors are described by role, not vendor, on Privacy/Security/GDPR — counsel to confirm that satisfies GDPR/Shopify.
7. Responsive breakpoints — not designed; see Fidelity.
