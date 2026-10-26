# `_build/` — the responsive layer's source

**Where the live site comes from.** `meerkatscout.com` is served by GitHub Pages straight from the files on this
`static-site` branch (legacy Pages build: no Actions workflow, no build step; Jekyll copies the HTML through
untouched and skips folders starting with `_`, so nothing in here is published).

Those 26 `index.html` pages were **not** generated from `master` (the Next.js version). They were exported once,
on 2026-09-06, by scripts that run inside the design workspace, not in Node (`build-home.js`, `build-pages.js`,
`config.json`, …; a reference copy is in `~/meerkat-static/release/build/` on the dev box). The export was copied
into this branch by hand (commit 832af47), and the branch has been edited directly since (clean URLs, favicons,
the Diagnostics "Show all" fix). Nothing in this repo regenerates the page content, so **the HTML on this branch is
the source of truth for content**.

The one generated part that lives here is the **responsive layer**: every page carries an inlined
`<style id="ms-responsive">`, a responsive runtime `<script>`, and hook attributes (`data-g`, `data-m`). Those come
from this folder. Edit the files here, never inside an `index.html`, then regenerate:

```bash
node _build/responsive.mjs          # rewrite the pages that are out of date
node _build/responsive.mjs --check  # CI-style check: exit 1 if any page doesn't match its sources
```

| File | What it is |
|---|---|
| `responsive.mjs` | The build step. Re-derives the `data-g` grid hooks, sets the `data-m` mobile hooks, inlines the CSS + JS below. Hooks are attributes only; it never touches the design's inline styles, so desktop (≥1152px) is unchanged. |
| `rwd-pages.css` | Shared responsive CSS for all 25 sub-pages. |
| `pages/<slug>.css` | Page-specific additions, appended to `rwd-pages.css` for that page only (`demo`, `contact`, `pricing`, `platform-price-intelligence`, `platform-rules-engine`). |
| `home-responsive.css` | Responsive CSS for the homepage (its hooks are `data-r`, set by the original export). |
| `rwd.js` / `rwd-home.js` | Responsive runtime: zoom-to-fit for fixed-width mockups (`[data-fit]`), the 1152–1439px zoom, the mobile menu toggle. |
| `qa/audit.mjs` | The QA run: WebKit, iPhone 12 / iPhone SE / Galaxy S8 / iPad / 1440 desktop, full-page screenshots and measurements. |

Ranges: ≥1440 the design as drawn · 1152–1439 the whole page zooms to fit · 768–1151 tablet reflow · ≤767 phone.

**If the design is ever re-exported** from the design workspace, the export overwrites every page, including the
hand edits listed above. Re-apply them, then run `node _build/responsive.mjs` so the pages pick up this folder's CSS
and hooks. The design workspace's `build-pages.js` still has the grid-classifier bug that `responsive.mjs` works
around (an `else` attached to the wrong `if`, which tagged almost every grid `data-g="4"`). Re-running
`responsive.mjs` corrects the hooks either way.

## Running the QA audit

```bash
mkdir -p /tmp/qa && cd /tmp/qa && npm i playwright@1.63 && npx playwright install webkit
python3 -m http.server 3300 --directory ~/meerkat-site-new &   # serve the branch
node ~/meerkat-site-new/_build/qa/audit.mjs http://127.0.0.1:3300/ /tmp/qa/shots   # add --no-shots to skip screenshots
```

On the WSL dev box WebKit needs extra system libraries and there is no sudo. Unpack the `.deb`s with `dpkg-deb -x`
into a folder, pass that folder as `PW_EXTRA_LD` (the MiniBrowser wrapper in `~/.cache/ms-playwright/webkit-*/`
appends it to `LD_LIBRARY_PATH`), and set `PLAYWRIGHT_SKIP_VALIDATE_HOST_REQUIREMENTS=1`. For HTTPS (auditing the
live site), also unpack `glib-networking` and point `GIO_EXTRA_MODULES` at the folder holding `libgiognutls.so`;
without it, WebKit fails with "TLS support is not available".

Per page and device, the audit checks:
- horizontal scroll: `scrollWidth <= innerWidth`
- content cut off at the edge, even where `overflow-x:clip` hides the scrollbar
- text clipped by its container
- long copy squeezed into a sliver
- overlapping text and images
- tap targets under 44px, found by hit-testing so expanded hit areas count
- body copy under 16px
- form fields under 16px, which make iOS Safari zoom the page on focus
- words glued together by a hidden `<br>`
- the menu opening and closing by tap
