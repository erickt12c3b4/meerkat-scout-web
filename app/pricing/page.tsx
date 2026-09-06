import type { Metadata } from "next";
import Link from "next/link";
import { Check, Minus } from "lucide-react";
import { SiteHeader } from "@/components/site/site-header";
import { PreFooterCta } from "@/components/site/pre-footer-cta";
import { SiteFooter } from "@/components/site/site-footer";
import { PricingFaq, type FaqItem } from "@/components/pricing/pricing-faq";

export const metadata: Metadata = {
  title: "Pricing — Simple plans. Room to grow.",
  description: "Choose the catalog size and capabilities your store needs. Start with a 14-day free trial. Billed monthly through Shopify, no card required to start.",
};

// Shopify App Store listing URL is not known yet (DEV-HANDOFF: intentional stub).
const START_TRIAL_HREF = "#start-free-trial";

type Feature = { text: React.ReactNode; included: boolean };
type Plan = {
  name: string;
  price: string;
  blurb: string;
  features: Feature[];
  note?: React.ReactNode;
  featured?: boolean;
};

const PLANS: Plan[] = [
  {
    name: "Starter",
    price: "49",
    blurb: "For a catalog finding its first channels.",
    features: [
      { text: <strong className="font-semibold text-ink">Up to 1,000 SKUs</strong>, included: true },
      { text: "3 channels of your choice", included: true },
      { text: "Daily sync", included: true },
      { text: "Feed management, diagnostics, rules engine", included: true },
      { text: "Price intelligence", included: false },
      { text: "Conversion intelligence", included: false },
    ],
  },
  {
    name: "Growth",
    price: "149",
    blurb: "For established multi-channel operations.",
    featured: true,
    features: [
      { text: <strong className="font-semibold text-ink">Up to 10,000 SKUs</strong>, included: true },
      { text: "All 10 channels", included: true },
      { text: "Hourly sync", included: true },
      { text: "Feed management, diagnostics, rules engine", included: true },
      { text: <Link href="/platform/price-intelligence">Price intelligence</Link>, included: true },
      { text: <Link href="/platform/conversion-intelligence">Conversion intelligence</Link>, included: true },
    ],
  },
  {
    name: "Scale",
    price: "399",
    blurb: "For large catalogs that can't afford to wait.",
    features: [
      { text: <strong className="font-semibold text-ink">Up to 100,000 SKUs</strong>, included: true },
      { text: "Everything in Growth", included: true },
      { text: "Priority support", included: true },
    ],
    note: (
      <>
        Above 100,000 SKUs isn&#39;t a self-serve tier.{" "}
        <Link className="font-semibold" href="/contact">
          Contact us
        </Link>{" "}
        and we&#39;ll scope it with you.
      </>
    ),
  },
];

const FAQ: FaqItem[] = [
  {
    id: "sku",
    q: "What counts as a SKU?",
    a: "Each synced variant counts once, across all channels. Draft and archived variants are included. Usage can take up to 24 hours to update.",
  },
  {
    id: "billing",
    q: "How am I billed?",
    a: (
      <>
        Monthly, through Shopify, on your Shopify invoice. Scout never processes, stores, or sees a card. Cancel by
        uninstalling Scout from your Shopify admin; refunds follow Shopify&#39;s billing policies (see the{" "}
        <Link href="/legal/terms#fees">Terms</Link>).
      </>
    ),
  },
  {
    id: "trial",
    q: "What can I do during the trial?",
    a: "Everything in the plan you chose, for 14 days, with no payment method required — connect your store, publish real feeds, and read real diagnostics.",
  },
  {
    id: "trial-end",
    q: "What happens when my trial ends?",
    a: "Nothing is charged unless you choose to continue. If you do, your plan is billed through Shopify from then on and appears on your Shopify invoice. If you don't, Scout stops syncing at the end of day 14: listings already published stay in each channel's systems, and Scout picks up where it left off when you choose a plan.",
  },
  {
    id: "lapse",
    q: "What happens if my subscription lapses?",
    a: (
      <>
        Existing listings stay live and current; new products wait. This is a different situation from exceeding a SKU
        limit, where your plan is still active. Uninstalling is different again: the subscription stops through Shopify
        and your data is deleted on the timeline described on the <Link href="/legal/gdpr#uninstall">GDPR &amp; Data Rights</Link>{" "}
        page.
      </>
    ),
  },
];

// Source: Pricing.dc.html -> /pricing
export default function PricingPage() {
  return (
    <>
      <SiteHeader active="pricing" />

      {/* Plans */}
      <section className="relative overflow-hidden bg-paper px-[70px] pt-[84px] pb-[64px] max-lg:px-[40px] max-md:pt-[56px] max-md:pb-[48px] max-xs:px-[20px]">
        <svg width="1440" height="620" viewBox="0 0 1440 620" fill="none" aria-hidden="true" className="pointer-events-none absolute top-0 left-0 opacity-45">
          <g stroke="#E7E1D7" strokeWidth="1" fill="none">
            <path d="M-60 120C160 60 300 170 520 110 740 50 900 160 1180 80 1320 40 1420 60 1500 40"></path>
            <path d="M-60 180C160 120 300 230 520 170 740 110 900 220 1180 140 1320 100 1420 120 1500 100"></path>
          </g>
        </svg>
        <div className="relative z-[2] flex flex-col items-center text-center">
          <p className="m-0 mb-[18px] text-[13px] font-semibold tracking-[.14em] text-rust uppercase">Pricing</p>
          <h1 className="m-0 max-w-[820px] text-[length:clamp(38px,4vw,57px)] leading-[1.05] font-extrabold tracking-[-.035em] text-pretty">
            Simple plans. Room to grow.
          </h1>
          <p className="m-0 mt-[22px] max-w-[640px] text-[17.5px] leading-[1.55] text-pretty text-body max-md:text-[16px]">
            Choose the catalog size and capabilities your store needs. Start with a 14-day free trial.
          </p>
          <p className="m-0 mt-[12px] text-[15px] text-pretty text-dim">Billed monthly through Shopify · No card required to start</p>
        </div>
        {/* Three cards on aligned subgrid rows; below 900px they stack in one centered column (the design's own responsive rule for this page). */}
        <div className="relative z-[2] mt-[48px] grid grid-cols-3 grid-rows-[repeat(6,auto)] items-stretch gap-x-[20px] gap-y-0 max-[900px]:mt-[40px] max-[900px]:grid-cols-[minmax(0,520px)] max-[900px]:grid-rows-none max-[900px]:justify-center max-[900px]:gap-y-[16px]">
          {PLANS.map((p) => (
            <div
              key={p.name}
              className={
                "row-span-6 grid grid-rows-[subgrid] gap-y-0 rounded-14 bg-white p-[30px] pt-[32px] shadow-card max-[900px]:row-span-1 max-[900px]:flex max-[900px]:flex-col " +
                (p.featured ? "border-[1.5px] border-rust-button" : "border border-line")
              }
            >
              <h2 className="m-0 text-[29px] font-bold tracking-[-.025em]">{p.name}</h2>
              <div className="mt-[16px] flex items-baseline gap-[2px]">
                <span className="mt-[8px] self-start text-[27px] font-semibold">$</span>
                <span className="text-[56px] leading-none font-extrabold tracking-[-.04em] max-xl:text-[length:clamp(40px,4.38vw,56px)]">{p.price}</span>
                <span className="ml-[7px] text-[16px] text-dim">/ month</span>
              </div>
              <p className="m-0 mt-[14px] text-[15.5px] leading-[1.5] text-body">{p.blurb}</p>
              <div className="m-0 mt-[22px] h-px bg-[#E9E3DA]"></div>
              <div className="mt-[20px]">
                <ul className="m-0 flex list-none flex-col gap-[12px] p-0 text-[15px] text-nav">
                  {p.features.map((f, i) => (
                    <li key={i} className={"flex items-start gap-[12px]" + (f.included ? "" : " text-placeholder")}>
                      {f.included ? (
                        <Check size={18} strokeWidth={2.4} className="mt-[2px] flex-none text-check" />
                      ) : (
                        <Minus size={18} strokeWidth={2.2} className="mt-[2px] flex-none text-[#C9C1B6]" />
                      )}
                      <span>{f.text}</span>
                    </li>
                  ))}
                </ul>
                {p.note && (
                  <div className="m-0 mt-[22px] rounded-8 bg-paper px-[16px] py-[14px] text-[13.5px] leading-[1.5] text-body">{p.note}</div>
                )}
              </div>
              <a
                className={
                  "mt-[28px] flex min-h-[48px] w-full items-center justify-center self-end rounded-8 px-[18px] py-0 text-[16px] font-semibold max-[900px]:mt-auto " +
                  (p.featured ? "bg-rust-button text-white" : "border border-ink bg-transparent text-ink")
                }
                href={START_TRIAL_HREF}
              >
                Start free trial
              </a>
            </div>
          ))}
        </div>
        <p className="relative z-[2] m-0 mt-[22px] text-center text-[14.5px] text-pretty text-dim">
          Price and conversion intelligence are included with Growth and Scale.
        </p>
      </section>

      {/* Details */}
      <section className="bg-paper px-[70px] pt-[8px] pb-[88px] max-lg:px-[40px] max-md:pb-[56px] max-xs:px-[20px]">
        <div className="grid grid-cols-[minmax(0,380px)_minmax(0,1fr)] items-start gap-[56px] max-lg:grid-cols-1 max-lg:gap-[36px]">
          <div className="flex flex-col gap-[14px]">
            <span className="pt-[6px] text-[12px] font-bold tracking-[.14em] text-rust uppercase">If you outgrow a plan</span>
            <h2 className="m-0 text-[28px] leading-[1.15] font-bold tracking-[-.025em] text-pretty">
              Your listings never disappear because you added products.
            </h2>
            <p className="m-0 text-[16px] leading-[1.6] text-pretty text-nav">
              Exceed your plan&#39;s SKU limit and existing listings stay live and current — you can still regenerate and
              republish them. New products wait until you upgrade or reduce your catalog, and Scout tells you exactly
              which ones and why.
            </p>
          </div>
          <div className="flex min-w-0 flex-col gap-[14px]">
            <span className="pt-[6px] text-[12px] font-bold tracking-[.14em] text-rust uppercase">Common questions</span>
            <PricingFaq items={FAQ} />
          </div>
        </div>
      </section>

      <PreFooterCta trialHref={START_TRIAL_HREF} />
      <SiteFooter />
    </>
  );
}
