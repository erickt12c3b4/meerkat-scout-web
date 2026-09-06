# Meerkat Scout — marketing site

Next.js 16 (App Router, React Server Components) · Tailwind CSS v4 · shadcn/ui (base-ui) · TypeScript.

The site is a faithful port of the 26-page design handoff in `design_handoff_meerkat_scout_site/`
(read its `README.md` for tokens and behavior, `DEV-HANDOFF.md` for content decisions). Desktop at
1440px is pixel-matched to those files; responsive behavior below 1280px is ours and documented in
`MOBILE-NOTES.md`. Fidelity notes per page: `docs/fidelity-checklist.md`. Launch state:
`docs/launch-checklist.md`. Conversion log: `docs/what_I_did_conversion.md`.

## Run

```bash
npm install
cp .env.example .env.local   # optional; everything has a safe default
npm run dev                  # http://localhost:3000
npm run build && npm start   # production
npm run lint && npx tsc --noEmit
```

## Layout

| Path | What |
| --- | --- |
| `app/` | Routes (one `page.tsx` per README site-map route), `layout.tsx` (Geist via next/font), `globals.css` (tokens), `sitemap.ts`, `robots.ts`, `api/lead/route.ts` |
| `components/site/` | Shared chrome: `SiteHeader` (+ `MobileNav` drawer), `PreFooterCta`, `SiteFooter` / `ContactFooter`, `Scaled` (illustrated compositions) |
| `components/channels/channel-page.tsx` | The one template behind the ten `/channels/<slug>` pages |
| `content/channels/*.tsx` | Per-channel data: bespoke hero + "distinguishing behavior" JSX, and plain data for the shared sections |
| `components/forms/` | `ContactForm`, `DemoForm` (client components; state mirrors the design's logic classes) |
| `components/pricing/pricing-faq.tsx` | Pricing FAQ on shadcn `Accordion` |
| `components/brand-icons.tsx` | Brand marks and the design's custom stroke glyphs, extracted verbatim from the files |
| `components/ui/` | shadcn primitives (restyled at the call sites to the design's sizes) |
| `lib/recaptcha.ts` | reCAPTCHA v2 loader/hook shared by both forms |
| `public/assets/` | The handoff assets (minus the superseded `court-shoe.png` and legacy `scout-cta.png`) |
| `qa/` | Playwright screenshot + overflow check (`node qa/screenshot.mjs`), output in `qa/screens/<width>/` |
| `tools/design-converter/` | The one-off HTML→JSX converter and the design-vs-app measurement scripts (not part of the build) |

## Environment

See `.env.example`. Without any variables the site runs with Google's public reCAPTCHA **test** key,
no lead endpoint (both forms fall back to `mailto:`), no scheduler embed, and a `#signin` stub.
