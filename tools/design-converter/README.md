# Design converter and fidelity tooling (not part of the build)

These scripts produced the first version of every page under `app/` and `content/channels/` from
the HTML in `design_handoff_meerkat_scout_site/`, and measured the result against the originals.
They are kept for reproducibility if the design files change. Paths inside are absolute to the
original session's checkout; adjust `SRC`/`OUT` at the top of `convert.mjs`, `run.mjs`,
`channels.mjs`, `place.mjs`, `home.mjs` before running.

```bash
cd tools/design-converter && npm install
node run.mjs            # all pages -> out/*.tsx (+ out/brand-icons.tsx)
node channels.mjs       # content/channels/*.tsx
node place.mjs          # static pages -> app/**/page.tsx (overwrites!)
node home.mjs           # homepage -> app/page.tsx (overwrites!)
python3 postprocess.py  # stacked data-table hooks on FM / CI / Diagnostics
```

Note: `place.mjs`/`home.mjs`/`channels.mjs` overwrite generated files; hand edits made after
generation (listed in docs/what_I_did_conversion.md) would have to be re-applied.

Measurement (design served on :3100 with `python3 -m http.server 3100` inside the handoff folder,
app on :3000; Playwright from the repo root's node_modules):

```bash
node sections.mjs [routes…]   # per-section heights design vs app
node compare.mjs  [routes…]   # full-page pixelmatch diff -> compare/*.png
node elements.mjs <file> <route> [selector]   # per-element boxes
node computed.mjs <file> <route> <selector> [index]  # computed styles side by side
node numbers.mjs              # injects the table into docs/fidelity-checklist.md
```

`sections-1440.txt` and `compare-1440.txt` are the final runs behind docs/fidelity-checklist.md.
