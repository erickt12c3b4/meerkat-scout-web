import Link from "next/link";

/**
 * Full-bleed pre-footer CTA with the Scout render baked into scout-prefooter.jpg.
 * Shared by every page except Contact and the four legal pages.
 * variant "demo" is the Book a Demo page copy ("Prefer to start on your own?" / "Talk to us").
 */
export function PreFooterCta({
  variant = "default",
  trialHref = "/pricing",
}: {
  variant?: "default" | "demo";
  trialHref?: string;
}) {
  const demo = variant === "demo";
  return (
    <section className="relative flex min-h-[480px] items-center overflow-hidden px-[100px] [background:#0B0A09_url(/assets/scout-prefooter.jpg)_center_bottom/cover_no-repeat] max-lg:px-[40px] max-lg:bg-[position:right_bottom] max-md:bg-none max-xs:px-[20px]">
      <svg
        width="1440"
        height="452"
        viewBox="0 0 1440 452"
        fill="none"
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-0 opacity-35 [mask-image:linear-gradient(90deg,#000_48%,transparent_66%)]"
      >
        <g stroke="#6a2f18" strokeWidth="1" fill="none">
          <path d="M-40 390C160 342 310 426 520 380 730 334 910 412 1110 366 1280 328 1380 350 1500 324"></path>
        </g>
      </svg>
      <div className="relative z-[2] w-[760px] flex-none pt-[72px] pb-[64px] max-md:w-full max-md:pt-[56px] max-md:pb-[56px]">
        <div>
          <p className="m-0 mb-[16px] text-[13px] font-semibold tracking-[.14em] text-rust-bright uppercase">
            {demo ? "Or go it alone" : "Put Scout on watch"}
          </p>
          <h2 className="m-0 text-[46px] leading-[1.06] font-extrabold tracking-[-.035em] text-white max-xl:text-[length:clamp(30px,3.59vw,46px)]">
            {demo ? "Prefer to start on your own?" : "Ready to put Scout on watch?"}
          </h2>
          <p className="m-0 mt-[20px] max-w-[520px] text-[17.5px] leading-[1.55] text-pretty text-night-muted max-md:text-[16px]">
            Connect your Shopify store and see the state of every feed, channel, and product from one place.
          </p>
          <div className="mt-[30px] flex items-center gap-[16px] max-md:flex-wrap max-xs:flex-col max-xs:items-stretch">
            <Link
              href={trialHref}
              className="flex min-h-[52px] items-center justify-center rounded-8 border border-paper-light bg-paper-light px-[26px] text-[17px] font-semibold text-ink"
            >
              Start your 14-day free trial
            </Link>
            <Link
              href={demo ? "/contact" : "/demo"}
              className="flex min-h-[52px] items-center justify-center rounded-8 border border-night-line-5 bg-transparent px-[26px] text-[17px] font-semibold text-white"
            >
              {demo ? "Talk to us" : "Book a demo"}
            </Link>
          </div>
          <div className="mt-[28px] flex items-center gap-[12px]">
            <svg
              width="21"
              height="21"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#8A837B"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
              className="flex-none"
            >
              <path d="M12 3l7.5 3v5.5c0 4.4-3.1 8.2-7.5 9.5-4.4-1.3-7.5-5.1-7.5-9.5V6z"></path>
            </svg>
            <span className="text-[15.5px] text-night-muted">
              No card required. Scout never edits your Shopify products.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
