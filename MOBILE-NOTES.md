# Mobile / responsive notes — for design review

The design files are desktop-only (1440px, fixed 70px gutters). Everything below 1280px is our
layout, built to the rules given on 2026-09-06. Desktop (≥1280px) is unchanged from the files.
Screenshots of every route at 360 / 390 / 768 / 1024 / 1280 / 1440 are in `qa/screens/<width>/`
(taken from a production build with Playwright; `node qa/screenshot.mjs` regenerates them and
reports any horizontal overflow).

## Breakpoints

| Range | Name | What changes |
| --- | --- | --- |
| ≥ 1440 | wide desktop | Section backgrounds run full-bleed; content stays a centered 1300px column (`--gutter` grows). The files themselves would stretch content to 1780px at 1920 — we chose the centered column. |
| 1280–1439 | desktop | Pixel-matched to the files; gutters 70px. |
| 1024–1279 | small laptop | Gutters 70 → 40px (`--gutter`). Layouts kept. Illustrated hero grids switch from `copy + fixed 640–700px card` to two equal columns; the card composition scales down as one unit (`Scaled`). Display sizes start scaling with `clamp()`. |
| 768–1023 | tablet | Two-column sections become one column (`max-lg:grid-cols-1`): heroes stack copy above card, split sections stack. 3-column card grids go to 2 columns. Header nav collapses into a drawer. Footer becomes 3 columns with the brand block spanning the row. |
| 480–767 | large phone | Everything single-column (`max-md:grid-cols-1`); data tables become stacked cards; mascots hidden; section vertical padding 84–96 → 56px; button rows wrap. Footer 2 columns. |
| < 480 | phone | Gutters 20px, footer 1 column, button rows stack full-width, form field pairs stack, "Sign in" only in the drawer. |

Tailwind: custom `--breakpoint-xs: 480px`; `md` 768, `lg` 1024, `xl` 1280 are Tailwind's defaults.
We use the `max-*` variants so the desktop classes stay exactly the design values.

## Header

- ≥1024: the design (logo · centered nav · Sign in + Book a demo).
- <1024: logo, **Book a demo** (44px tall), and a 44px menu button. Nav + Sign in live in a shadcn
  `Sheet` drawer (right side, 300px, paper background, 48px rows, demo button at the bottom).
  Sticky and translucent blur unchanged. Under 480 the logo drops to 34px and the demo button's
  padding tightens so the three fit in 360px.

## Type

- Display sizes ≥ 40px scale with `clamp(min, size/1280·100vw, size)`: exact at ≥1280, e.g. h1
  58 → 36px, h2 46 → 30px. Tracking values untouched.
- Ledes (17.5–18px with an explicit line-height) → 16px under 768. Body copy never below 14px,
  labels never below 12px (none were smaller in the design).
- Where the design forced line breaks with `<br>` in an h1 (Feed Management) the breaks are kept.

## Heroes and illustrated compositions

- Copy first, card second (DOM order already matched).
- **`Scaled`** (`components/site/scaled.tsx`): the ten channel heroes are fixed-size illustrated
  compositions (640–700 × 640–820px of absolutely positioned windows, cards and product shots). Below
  their design width they scale down as one unit (pure CSS, `transform: scale(min(1, 100cqw/width))`
  with an `aspect-ratio` placeholder), centered, max-width = design width. Nothing is cropped; at
  360px the composition is ~0.5× and its sample text is small but intact. **Question for design:**
  keep as an illustration, or do you want simplified phone versions of any hero?
- Feed Management's hero is a simpler "card + mascot" composition, so it uses `Scaled`'s `flow`
  mode: under 1024 the Feed overview card flows at full width (max 440px) instead of shrinking.
- Mascot cutouts (`scout-clipboard`, `scout-mail`, `scout-clipboard-point`, `scout-price-hero`,
  `scout-map`, homepage renders) are hidden under 768 (`max-md:hidden`); the Contact mascot is hidden
  under 1024 because it sits under the form once the columns stack. The Book a Demo mascot is in-flow
  and does not overlap, so it stays until 768 (shortened to 300px on tablets).

## Data tables (Feed Management "Recent runs", Conversion Intelligence queue, Diagnostics)

- Under 768 each grid row becomes a card: 1px border (dark line on dark tables, paper line on
  light), 10px radius, 10px vertical rhythm, cells stacked as `LABEL   value` pairs. Labels come from
  the header row (which is hidden) via CSS custom properties, so no copy was added. The first cell
  (product / feed name) shows no label. Status dots, the amber highlighted-row treatment
  (`#1E1A17` + inset amber edge) and row chevrons are unchanged; chevrons hide on the stacked cards.
- Price Intelligence has no multi-column table in the files (its "market range" list is three
  columns and fits); it stacks like any two-column section.

## Grids

- Card grids: `repeat(3/4, 1fr)` → 2 columns under 1024 → 1 under 768.
- Two-column sections (copy + card/list, `420px 1fr`, `1fr 1fr`, `minmax(0,1fr) 560px`…) → 1 column
  under 1024.
- Numbered-step "flow" grids (`1fr auto 1fr auto…` with arrow glyphs) → 1 column under 1024, arrows
  kept between the stacked cards. FAQ `dl` (Book a Demo) → 1 column under 768.
- Pricing plans: 3 aligned subgrid cards stay 3-up down to 900px, then stack in one centered
  column (max 520px) with the Growth outline preserved — the Pricing file is the one design file
  with its own breakpoints, and 900px is its rule.

## Forms

- Field pairs (name/email) stack under 480; every input is full width; buttons already full width.
- Contact topic tiles: 2 × 2 grid → 1 column under 480; the "For specific requests" trio stacks
  under 1024 (the three email addresses do not fit three-up on a tablet). Book a Demo bands: 4 → 2 columns under 480;
  channel chips wrap naturally.
- reCAPTCHA checkbox (304px wide) is scaled to 0.85 under 480 so it fits a 320px content column;
  the invisible badge on `/demo` is hidden per the design, with Google's attribution line kept.
- Scheduler iframe stays 660px tall at every width.

## Footer and pre-footer CTA

- Footer: `300px + 4 columns` → 3 columns with the brand block spanning (under 1024) → 2 columns
  (under 768) → 1 column (under 480). Bottom bar wraps; link rows get a 44px hit area under 1024.
- Pre-footer CTA: under 1024 the render is anchored bottom-right so Scout stays visible next to the
  copy; under 768 the photo is dropped and the dark ground (`#0B0A09`) kept, copy full width,
  buttons stack under 480.

## Touch and hover

- All nav, drawer, footer and form controls are ≥44px tall on touch layouts.
- Hover states in the files are `brightness(.94)` only (plus the homepage's color hovers); every
  control has a visible default state, so nothing is hover-only.

## Homepage specifics

- The approved homepage was built inside a 1440px centered wrapper with its own 60/80px insets. Each
  section now runs full-bleed with a centered 1440px inner column; the insets follow `--gutter`
  (80 → gutter+10px, 60 → max(20px, gutter−10px)).
- Fixed-width blocks (`620px` centered h2, `1180px` rows, `864px` opportunity queue) get
  `max-w-full`; the wide decorative art (jungle composite, map) is clipped by its section as in the
  file.

## Known compromises to review

1. Channel hero compositions at phone widths are small illustrations (see above).
2. Homepage sections keep their desktop composition below 1024 (single column, scaled/clipped art);
   they were converted mechanically and reviewed in screenshots, not redesigned.
3. The `Scaled` technique relies on `tan(atan2())` unit division (Chrome 111+, Safari 15.4+,
   Firefox 118+). Older browsers show the composition at full size inside an overflow-clipped column.
