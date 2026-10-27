# Mobile fix — meerkatscout.com (2026-10-26)

**Status:** done and deployed. All 26 pages pass at 390px (iPhone 12), 375px (iPhone SE 3rd gen), 360px (Galaxy S8)
and 768px (iPad). Desktop at 1440px is pixel-identical to before on all 26 pages.

**Rollback point:** `96d428bafd608c8869fe910ecbb720a0940f4430`, the `static-site` commit live before this work. To roll
back: `git push --force-with-lease origin 96d428bafd608c8869fe910ecbb720a0940f4430:static-site`, or `git revert` the
mobile commits.

## Where the site comes from (step zero)

- `static-site` is **not generated from `master`**. `master` is the Next.js port; nothing builds this branch from it.
- The 26 pages were exported once from the design workspace, by scripts that run inside that tool, not in Node. The
  export was copied in by hand (832af47), and this branch has been **edited directly** since: clean URLs, favicons
  (96d428b), the Diagnostics fix (9169993). GitHub Pages serves the branch as-is (legacy build, no workflow).
- So the HTML on this branch is the source of truth for **content**. The **responsive layer** inlined into every page
  (`<style id="ms-responsive">`, the runtime script, hook attributes) is generated, and its source now lives in
  `_build/`. Fixes went into `_build/`, then `node _build/responsive.mjs` regenerated the pages.
  `node _build/responsive.mjs --check` confirms the committed pages match their sources (it reproduced the live pages
  byte-for-byte before any change). Details in `_build/README.md`.
- The only direct page edit: two spaces in the homepage hero (see below). Nothing regenerates page content in this
  repo, and the space is invisible at desktop width.

## What was broken

The pages already had a responsive layer, so nothing scrolled sideways in WebKit: `overflow-x:clip` hid the overflow.
But that meant content wider than the phone was silently **cut off**, not reachable. And it was only clipped on
Safari 16+; on older iOS the same overflow makes the page pan sideways. Measured in WebKit with Playwright's device
profiles. Full-page screenshots were taken of every page at all four widths and 1440px, before and after (the
iPhone 12 sets are on the Desktop, see Proof; the rest stayed in the session scratchpad, not the repo).

Main causes:
1. **A bug in the export's grid classifier.** An `else` attached to the wrong `if`, so nearly every grid was tagged
   `data-g="4"`. The CSS written for split layouts (`2L`/`2M`/`3L`, icon rows, connector rows) never matched. On
   tablets every split was forced into two equal columns, nested two-column grids compounded it, and on Help the
   article text ended up about 80px wide.
2. **Inline styles that beat the mobile CSS.** The channel pages' "Type / Connects via / Who sells here" row has
   inline `flex:none` and `white-space:nowrap`, so "Who sells here" was crushed into a 15–99px column, 13–19 lines of
   one word each. A few rows (two-block flex rows, three-column notes, 5-column tables) had no mobile hook at all.
3. **Absolutely positioned desktop compositions.** On Price Intelligence, the 690px product card pinned bottom-right
   landed half off-screen on phones and covered the hero copy and both buttons.
4. **Touch details.** Almost every link was under 44px: footer, header logo and CTA, "Explore …" links, chips,
   on-this-page lists. Form fields were 15.5px, which makes iOS Safari zoom the page on focus. Most body copy was
   14–15.5px.

## Page by page

Measured by `_build/qa/audit.mjs` in WebKit. Before = live site at 96d428b; after = this commit. Each cell is "before → after". **H-scroll** = how many of the 4 widths had `scrollWidth > innerWidth`. **Cut off at edge** = elements or text past the screen edge, summed over the 4 widths. Every other column = the worst of the 4 widths. "Before" shows no horizontal scroll only because `overflow-x:clip` hid it; the cut-off column is what that hid.

| Page | H-scroll | Cut off at edge | Crushed columns | Overlaps | Clipped text | Tap <44px | Fields <16px | Glued words | Nav |
|---|---|---|---|---|---|---|---|---|---|
| home | 0 → 0 | 0 → 0 | 0 → 0 | 0 → 0 | 0 → 0 | 29 → 0 | 0 → 0 | 2 → 0 | ok → ok |
| pricing | 0 → 0 | 0 → 0 | 0 → 0 | 0 → 0 | 0 → 0 | 25 → 0 | 0 → 0 | 0 → 0 | ok → ok |
| demo | 0 → 0 | 0 → 0 | 4 → 0 | 0 → 0 | 0 → 0 | 32 → 0 | 4 → 0 | 0 → 0 | ok → ok |
| contact | 0 → 0 | 0 → 0 | 0 → 0 | 0 → 0 | 0 → 0 | 9 → 0 | 4 → 0 | 0 → 0 | ok → ok |
| help | 0 → 0 | 2 → 0 | 25 → 0 | 0 → 0 | 3 → 0 | 29 → 0 | 0 → 0 | 0 → 0 | ok → ok |
| security | 0 → 0 | 0 → 0 | 3 → 0 | 0 → 0 | 0 → 0 | 26 → 0 | 0 → 0 | 0 → 0 | ok → ok |
| channels | 0 → 0 | 0 → 0 | 3 → 0 | 0 → 0 | 0 → 0 | 23 → 0 | 0 → 0 | 0 → 0 | ok → ok |
| channels-google-shopping | 0 → 0 | 0 → 0 | 6 → 0 | 0 → 0 | 2 → 0 | 24 → 0 | 0 → 0 | 0 → 0 | ok → ok |
| channels-google-ads | 0 → 0 | 0 → 0 | 4 → 0 | 0 → 0 | 2 → 0 | 24 → 0 | 0 → 0 | 0 → 0 | ok → ok |
| channels-bing | 0 → 0 | 0 → 0 | 3 → 0 | 0 → 0 | 2 → 0 | 24 → 0 | 0 → 0 | 0 → 0 | ok → ok |
| channels-meta | 0 → 0 | 0 → 0 | 3 → 0 | 0 → 0 | 2 → 0 | 24 → 0 | 0 → 0 | 0 → 0 | ok → ok |
| channels-tiktok | 0 → 0 | 0 → 0 | 4 → 0 | 0 → 0 | 0 → 0 | 24 → 0 | 0 → 0 | 0 → 0 | ok → ok |
| channels-pinterest | 0 → 0 | 0 → 0 | 3 → 0 | 0 → 0 | 2 → 0 | 25 → 0 | 0 → 0 | 0 → 0 | ok → ok |
| channels-snapchat | 0 → 0 | 0 → 0 | 2 → 0 | 0 → 0 | 0 → 0 | 24 → 0 | 0 → 0 | 0 → 0 | ok → ok |
| channels-amazon | 0 → 0 | 0 → 0 | 3 → 0 | 0 → 0 | 1 → 0 | 26 → 0 | 0 → 0 | 0 → 0 | ok → ok |
| channels-walmart | 0 → 0 | 0 → 0 | 4 → 0 | 0 → 0 | 2 → 0 | 24 → 0 | 0 → 0 | 0 → 0 | ok → ok |
| channels-ebay | 0 → 0 | 0 → 0 | 3 → 0 | 0 → 0 | 0 → 0 | 24 → 0 | 0 → 0 | 0 → 0 | ok → ok |
| platform-feed-management | 0 → 0 | 0 → 0 | 0 → 0 | 0 → 0 | 0 → 0 | 24 → 0 | 0 → 0 | 0 → 0 | ok → ok |
| platform-diagnostics | 0 → 0 | 0 → 0 | 1 → 0 | 0 → 0 | 1 → 0 | 28 → 0 | 0 → 0 | 0 → 0 | ok → ok |
| platform-rules-engine | 0 → 0 | 0 → 0 | 2 → 2 | 0 → 0 | 3 → 0 | 23 → 0 | 0 → 0 | 0 → 0 | ok → ok |
| platform-price-intelligence | 0 → 0 | 0 → 0 | 0 → 1 | 5 → 0 | 0 → 0 | 25 → 0 | 0 → 0 | 0 → 0 | ok → ok |
| platform-conversion-intelligence | 0 → 0 | 6 → 0 | 3 → 1 | 0 → 0 | 6 → 0 | 27 → 0 | 0 → 0 | 0 → 0 | ok → ok |
| legal-privacy | 0 → 0 | 0 → 0 | 28 → 0 | 0 → 0 | 0 → 0 | 38 → 0 | 0 → 0 | 0 → 0 | ok → ok |
| legal-terms | 0 → 0 | 0 → 0 | 2 → 0 | 0 → 0 | 0 → 0 | 45 → 0 | 0 → 0 | 0 → 0 | ok → ok |
| legal-gdpr | 0 → 0 | 3 → 0 | 24 → 0 | 1 → 0 | 0 → 0 | 38 → 0 | 0 → 0 | 0 → 0 | ok → ok |
| legal-cookies | 0 → 0 | 0 → 0 | 8 → 0 | 0 → 0 | 0 → 0 | 35 → 0 | 0 → 0 | 0 → 0 | ok → ok |

Notes per page (iPhone 12 unless stated):

| Page | Broken before | Fixed |
|---|---|---|
| Home | Hero headline read "Make every **productready** for every channel"; lede read "catalog**everywhere**" (a hidden `<br>` with no space). Footer and "Explore …" links under 44px. | Space added before the two `<br>`s. 44px targets, 16px copy. |
| Pricing | Plan feature links 31px apart; footer and links under 44px; 15.5px copy. Cards and FAQ already stacked correctly. | 44px rows in every plan list, so the cards keep one rhythm. |
| Book a demo | Form fields 15.5px (iOS zooms on focus); channel chips 36px tall; "Thirty minutes, three steps" heading squeezed beside its lede; iPad: "Good to know" answers crushed. | Fields 16px; chips 44px; heading row wraps; grid hooks fixed. |
| Contact | Form fields 15.5px; email links small. | Fields 16px; 44px hit areas. |
| Help | Phone: "You'll see / Means / Then" table crushed to 82px columns. iPad: whole article column about 80px wide. | Table rows stack with the header hidden; grid hooks fixed, so the sidebar stacks above the article on tablets. |
| Security | iPad: sub-processor list values crushed into a narrow column. | Nested two-column layouts stack below 1024px. |
| Channels | Three-column plan note crushed to 56–87px columns. | Stacks on phones. |
| 10 channel pages | "Who sells here" crushed to a sliver (Pinterest's also ran off the screen edge); hero and cards squeezed on iPad. | Facts row wraps; corrected grid hooks. |
| Feed Management | Layout held up; 24 links under 44px, 14–15px body copy. | 44px targets, 16px copy. |
| Diagnostics | Problems-table header clipped ("PROBLEM SEVERITY PRODUCTS CHA"); fix links under 44px. | Header hidden when rows stack; 44px rows. |
| Rules Engine | "From an accepted recommendation" tab wrapped over the rule it labels; CSV line clipped mid-word. | Tab sits inside the card on phones; long mono lines wrap. |
| Price Intelligence | Hero product card off-screen and covering the hero text and CTAs; price-track labels colliding; stat columns indented. | Card flows under the hero copy; track keeps only the range ends and "Your price"; stat separators dropped when stacked. |
| Conversion Intelligence | CTA band text crushed to 70px with "Book a demo" pushed off-screen; 5-column data table cut off; related-features row squeezed. | Band wraps; table scrolls sideways inside its own card; row wraps. |
| Privacy, Terms, GDPR, Cookies | iPad: two-column label/text tables crushed (crushed blocks: Privacy 28, GDPR 24, Cookies 8, Terms 2); GDPR contact email cut off at the screen edge on phones; on-this-page links 35px. | Stacking fixed; email wraps; 44px list rows. |

## How it was fixed

All in shared CSS and hooks first (`_build/rwd-pages.css`, `_build/home-responsive.css`, `_build/responsive.mjs`).
Then three small page files (`_build/pages/platform-price-intelligence.css`, `platform-rules-engine.css`,
`pricing.css`) for compositions that exist on one page only.

- Grid hooks re-derived with the classifier as intended, plus `2s` (a small badge or icon column that stays beside
  its text).
- New hook attribute `data-m`, set from the page structure: `copy` (body copy) · `tap` / `tapr` (standalone links and
  buttons) · `frow` (rows of text blocks that may wrap) · `thead` / `tscroll` / `trow` (tables).
- Body copy set at 13.5–15.5px goes to 16px below 1152px. Eyebrows, labels, captions, fine print and code stay as
  designed.
- Tap targets: standalone links and the header logo and CTA get an invisible 44×44 hit area (`::after`), with no
  visual change. Where neighbours are too close for that (footer lists, on-this-page lists, plan lists, demo chips,
  button rows), rows are 44px tall. Verified by hit-testing, not just box size.
- Form fields are 16px below 1152px. `-webkit-text-size-adjust:100%` stops iOS inflating text in landscape.
- Nothing above 1151px changed: no CSS outside the `max-width` media queries, and the hooks are attributes only.

## Proof

- **No horizontal scroll** at any width: `document.documentElement.scrollWidth <= window.innerWidth` on all 26 pages
  × 4 devices. Stronger: zero elements extend past the viewport even ignoring `overflow-x:clip`, so it also holds on
  iOS versions without `clip` support.
- **Nav:** the hamburger (44×44) opens by tap, the menu fits the screen, its links are at least 53px tall, and a second
  tap closes it, on every page and width. The menu already worked before; this confirms it still does.
- **Nothing overlaps:** text-vs-text and image-vs-text checks at every width.
- **Desktop unchanged:** 1440px full-page screenshots before and after are pixel-identical on all 26 pages (CSS
  animations frozen so the moving connector lines don't count as differences). One run showed a ±1/255 dithering
  difference in Pricing's footer gradient; a back-to-back re-shoot was identical. No CSS outside the ≤1151px media
  queries changed, so 1152–1439px (the zoomed desktop) is unchanged too.
- **Site checks:** the site has no build of its own (static files). `node _build/responsive.mjs --check` passes, all
  1,287 internal links and assets resolve, and every page has
  `<meta name="viewport" content="width=device-width, initial-scale=1">`.
- **Live:** after GitHub Pages deployed, live meerkatscout.com was loaded in WebKit at iPhone 12 and audited. All 26
  pages pass; see "Deploy" below.
- **Screenshots:** iPhone 12 before and after, every page, full length: `C:\Users\eric\Desktop\meerkat-mobile\before\<page>.png`
  and `...\after\<page>.png`. `after\menu-open\<page>.png` shows the menu open on each page.

## Not fixed, and why

- **Text inside the zoomed dashboard mockups stays small.** These are pictures of the product UI, scaled as a unit to
  fit the phone (`[data-fit]`, about 0.42×). Making their text readable would mean redesigning the mockups. They
  read as imagery.
- **Eyebrows, labels, captions, legal fine print and code samples** (12–13.5px) stay at their design sizes. They
  aren't body copy.
- **A few narrow-by-design compositions** wrap more than at desktop: Rules Engine's staggered rule stack (code lines
  wrap to 4 lines at 360px), and Price and Conversion Intelligence instrument headers at 360px. They're legible and
  nothing is cut off. Changing them would change the composition.
- **The Conversion Intelligence table scrolls sideways** inside its card on phones, as the brief allows, with no
  extra scroll hint. The cut-off columns at the card edge are the cue.
- **Tested in WebKit, not on a real iPhone.** Playwright's WebKit is Safari's engine, but not iOS Safari's shell (no
  collapsing address bar, no shrink-to-fit zoom). A quick look on the iPhone 12 is still worth doing.
- **This file was first published at the site root** (meerkatscout.com/MOBILE-FIX.md). It now lives in `_build/`,
  which Pages doesn't serve (Jekyll skips `_` folders) and `robots.txt` disallows. The repo itself is public.
- **The design workspace's `build-pages.js` still has the grid-classifier bug.** I can't edit it from here. A
  re-export overwrites every page; re-run `node _build/responsive.mjs` afterwards (`_build/README.md`).

## Deploy

- Rollback point recorded: `96d428bafd608c8869fe910ecbb720a0940f4430` (was live on `static-site`).
- Pushed `0fe28dd` to `static-site` at 20:58 UTC. The GitHub Pages build of `0fe28dd` reported `built` at 20:59 UTC.
- Live HTML at meerkatscout.com matches the commit byte-for-byte (checked: home, pricing, Amazon, Price Intelligence).
  `/_build/` returns 404, so the build sources are not served.
- **Live check:** https://meerkatscout.com loaded in WebKit with Playwright's "iPhone 12" profile, all 26 pages.
  No horizontal scroll, menu opens and closes on every page, no cut-off content, overlaps, under-44px targets or
  under-16px form fields. Same result as the local run. (Rules Engine still flags its one intentional squeezed
  code line; see "Not fixed".)

