import Image from "next/image";
import Link from "next/link";

const COLUMNS: { title: string; links: { label: string; href: string }[] }[] = [
  {
    title: "Platform",
    links: [
      { label: "Feed Management", href: "/platform/feed-management" },
      { label: "Diagnostics", href: "/platform/diagnostics" },
      { label: "Rules Engine", href: "/platform/rules-engine" },
      { label: "Price Intelligence", href: "/platform/price-intelligence" },
      { label: "Conversion Intelligence", href: "/platform/conversion-intelligence" },
    ],
  },
  {
    title: "Channels",
    links: [
      { label: "Google Shopping", href: "/channels/google-shopping" },
      { label: "Meta", href: "/channels/meta" },
      { label: "Amazon", href: "/channels/amazon" },
      { label: "Walmart", href: "/channels/walmart" },
      { label: "View all channels", href: "/channels" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Documentation", href: "/help#first-sync" },
      { label: "Help Center", href: "/help" },
      { label: "Contact", href: "/contact" },
      { label: "Security & Trust", href: "/security" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "/legal/privacy" },
      { label: "Terms of Service", href: "/legal/terms" },
      { label: "GDPR & Data Rights", href: "/legal/gdpr" },
      { label: "Cookie Preferences", href: "/legal/cookies" },
    ],
  },
];

const linkBase =
  "text-[14.5px] max-lg:inline-flex max-lg:min-h-[44px] max-lg:items-center";

/**
 * Dark four-column footer. `current` is the route whose link renders in paper (#FAF8F4).
 * Column collapse (not designed): 300px+4 → 3 cols under 1024 (brand spans) → 2 under 768 → 1 under 480.
 */
export function SiteFooter({ current, id }: { current?: string; id?: string }) {
  return (
    <footer
      id={id}
      className="relative z-[1] overflow-hidden border-t border-footer-edge bg-[linear-gradient(180deg,#121110,#0c0c0c)]"
    >
      <svg
        width="1440"
        height="430"
        viewBox="0 0 1440 430"
        fill="none"
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-20"
      >
        <g stroke="#6a2f18" strokeWidth="1" fill="none">
          <path d="M-40 390C160 342 310 426 520 380 730 334 910 412 1110 366 1280 328 1380 350 1500 324"></path>
          <path d="M-40 410C160 362 310 446 520 400 730 354 910 432 1110 386 1280 348 1380 370 1500 344"></path>
          <path d="M1300 -40C1370 48 1310 124 1370 210 1420 286 1370 344 1400 420"></path>
        </g>
      </svg>
      <div className="relative z-[2] grid grid-cols-[300px_repeat(4,1fr)] gap-[30px] px-[70px] pt-[48px] max-lg:grid-cols-3 max-lg:px-[40px] max-lg:pt-[44px] max-md:grid-cols-2 max-md:gap-x-[20px] max-md:gap-y-[26px] max-xs:grid-cols-1 max-xs:px-[20px] max-xs:pt-[40px]">
        <div className="max-lg:col-span-full">
          <Image
            src="/assets/img-03-light.png"
            width={255}
            height={63}
            alt="Meerkat Scout"
            className="block h-[63px] w-[255px] max-w-none object-contain"
          />
          <p className="m-0 mt-[18px] max-w-[270px] text-[15.5px] leading-[1.55] text-night-muted-2">
            Product-feed management and commerce intelligence for Shopify merchants.
          </p>
          <p className="m-0 mt-[18px] text-[15.5px] text-night-text">One catalog. Every destination.</p>
        </div>
        {COLUMNS.map((col) => (
          <nav key={col.title} aria-label={col.title}>
            <h2 className="mt-[8px] mb-[18px] text-[15px] font-bold text-paper-light max-lg:mb-[8px]">{col.title}</h2>
            <ul className="m-0 flex list-none flex-col gap-[13px] p-0 max-lg:gap-0">
              {col.links.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className={linkBase + (current === l.href ? " text-paper-light" : " text-night-muted-2")}
                    aria-current={current === l.href ? "page" : undefined}
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        ))}
      </div>
      <div className="relative z-[2] mx-[70px] mt-[40px] h-px bg-footer-rule max-lg:mx-[40px] max-lg:mt-[36px] max-xs:mx-[20px] max-xs:mt-[30px]"></div>
      <div className="relative z-[2] flex items-center justify-between px-[70px] pt-[22px] pb-[30px] max-lg:px-[40px] max-md:flex-wrap max-md:gap-[10px] max-xs:px-[20px] max-xs:pt-[18px] max-xs:pb-[26px]">
        <p className="m-0 text-[14px] text-faint">© 2026 Meerkat Scout. All rights reserved.</p>
        <div className="flex items-center gap-[20px] text-[14px] max-xs:flex-wrap max-xs:gap-[12px]">
          <Link href="/legal/privacy" className="text-night-muted-2 max-lg:inline-flex max-lg:min-h-[44px] max-lg:items-center">
            Privacy
          </Link>
          <span className="text-footer-dot">•</span>
          <Link href="/legal/terms" className="text-night-muted-2 max-lg:inline-flex max-lg:min-h-[44px] max-lg:items-center">
            Terms
          </Link>
          <span className="text-footer-dot">•</span>
          <Link href="/contact" className="text-night-muted-2 max-lg:inline-flex max-lg:min-h-[44px] max-lg:items-center">
            Contact
          </Link>
          <span className="text-footer-dot">•</span>
          <span className="inline-flex items-center gap-[8px] text-night-muted-2">
            <span aria-hidden="true">◎</span>English
          </span>
        </div>
      </div>
    </footer>
  );
}

/** Compact footer used only on the Contact page. */
export function ContactFooter() {
  return (
    <footer className="flex items-center justify-between gap-[24px] bg-paper px-[70px] pt-[22px] pb-[28px] max-lg:px-[40px] max-xs:flex-wrap max-xs:px-[20px]">
      <Link href="/" aria-label="Meerkat Scout home" className="inline-flex">
        <Image
          src="/assets/img-03.png"
          width={139}
          height={34}
          alt="Meerkat Scout"
          className="block h-[34px] w-auto max-w-none"
        />
      </Link>
      <nav aria-label="Legal" className="flex items-center gap-[10px] text-[14px] text-faint">
        <Link href="/legal/privacy" className="text-dim max-lg:inline-flex max-lg:min-h-[44px] max-lg:items-center">
          Privacy
        </Link>
        <span aria-hidden="true">·</span>
        <Link href="/legal/terms" className="text-dim max-lg:inline-flex max-lg:min-h-[44px] max-lg:items-center">
          Terms
        </Link>
      </nav>
    </footer>
  );
}
