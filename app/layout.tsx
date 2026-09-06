import type { Metadata } from "next";
import "./fonts.css";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://meerkatscout.com"),
  title: {
    default: "Meerkat Scout",
    template: "%s · Meerkat Scout",
  },
  description:
    "Product-feed management and commerce intelligence for Shopify merchants. One catalog. Every destination.",
};

// Fonts: self-hosted Geist / Geist Mono (app/fonts.css) — the exact files the design's Google Fonts
// stylesheet serves, so text metrics and line wraps match the design files. See docs/what_I_did_conversion.md.
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preload" href="/fonts/geist-latin.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
      </head>
      <body>{children}</body>
    </html>
  );
}
