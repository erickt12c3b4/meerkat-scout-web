import Image from "next/image";
import Link from "next/link";
import { MobileNav } from "@/components/site/mobile-nav";

export type NavKey = "platform" | "channels" | "resources" | "pricing";

export const NAV_ITEMS: { key: NavKey; label: string; href: string }[] = [
  { key: "platform", label: "Platform", href: "/#platform" },
  { key: "channels", label: "Channels", href: "/channels" },
  { key: "resources", label: "Resources", href: "/help" },
  { key: "pricing", label: "Pricing", href: "/pricing" },
];

// Stub until the app login URL exists (DEV-HANDOFF: "Unresolved hrefs").
export const SIGN_IN_HREF = process.env.NEXT_PUBLIC_SIGN_IN_URL || "#signin";

/**
 * 80px sticky translucent header, identical on every page.
 * Desktop (≥1024): logo · centered nav · Sign in + Book a demo.
 * Below 1024 the nav and Sign in move into a drawer (shadcn Sheet); logo and the
 * Book a demo button stay visible.
 */
export function SiteHeader({
  active,
  demoHref = "/demo",
}: {
  active?: NavKey;
  demoHref?: string;
}) {
  return (
    <header className="sticky top-0 z-40 grid h-[80px] grid-cols-[1fr_auto_1fr] items-center bg-[rgba(250,249,247,.82)] px-[22px] backdrop-blur-[12px] backdrop-saturate-125 max-lg:grid-cols-[auto_1fr] max-lg:px-[20px]">
      <Link href="/" aria-label="Meerkat Scout home" className="flex items-center gap-[10px]">
        <Image
          src="/assets/img-03.png"
          width={171}
          height={42}
          alt="Meerkat Scout"
          priority
          className="block h-[42px] w-auto max-w-none max-xs:h-[34px]"
        />
      </Link>
      <nav className="flex items-center gap-[34px] text-[14.5px] font-medium text-nav max-lg:hidden">
        {NAV_ITEMS.map((item) =>
          item.key === active ? (
            <Link key={item.key} href={item.href} className="font-semibold text-ink" aria-current="page">
              {item.label}
            </Link>
          ) : (
            <Link key={item.key} href={item.href} className="text-nav">
              {item.label}
            </Link>
          ),
        )}
      </nav>
      <div className="flex items-center justify-end gap-[20px] max-lg:gap-[12px]">
        <a href={SIGN_IN_HREF} className="text-[14.5px] font-medium text-nav max-lg:hidden">
          Sign in
        </a>
        <Link
          href={demoHref}
          className="rounded-6 bg-rust-button px-[20px] py-[11px] text-[14.5px] font-semibold whitespace-nowrap text-white shadow-hairline max-lg:inline-flex max-lg:min-h-[44px] max-lg:items-center max-lg:py-0 max-xs:px-[14px]"
        >
          Book a demo
        </Link>
        <MobileNav active={active} demoHref={demoHref} />
      </div>
    </header>
  );
}
