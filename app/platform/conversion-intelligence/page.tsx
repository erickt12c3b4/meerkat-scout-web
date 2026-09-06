import Image from "next/image";
import Link from "next/link";
import { ArrowDown, Box, Check, Database, TriangleAlert } from "lucide-react";
import { ArrowRightGlyph, ShopifyBag } from "@/components/brand-icons";
import { SiteHeader } from "@/components/site/site-header";
import { PreFooterCta } from "@/components/site/pre-footer-cta";
import { SiteFooter } from "@/components/site/site-footer";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Conversion Intelligence — Know which products to fix first",
  description: "Bring feed issues, Shopify orders and GA4 traffic into one product view. See what deserves your attention next.",
};

// Source: Conversion-Intelligence.dc.html -> /platform/conversion-intelligence
export default function ConversionIntelligencePage() {
  return (
    <>
      <SiteHeader active="platform" />

      {/* Conversion hero */}
      <section className="relative bg-paper min-h-[700px] px-gutter py-0 grid grid-cols-[minmax(0,1fr)_660px] gap-[30px] items-center overflow-hidden max-xl:grid-cols-2 max-lg:grid-cols-1">
        <div className="relative z-[2] px-0 py-[70px]">
          <p className="m-0 mb-[22px] text-[13px] font-semibold tracking-[.14em] uppercase text-rust">
            Platform · Conversion intelligence
          </p>
          <h1 className="m-0 text-[56px] leading-[1.06] font-extrabold tracking-[-.035em] text-pretty max-xl:text-[length:clamp(36px,4.38vw,56px)]">
            Know which products to fix first.
          </h1>
          <p className="m-0 mt-[24px] text-[17.5px] leading-[1.55] text-body max-w-[560px] text-pretty max-md:text-[16px]">
            Bring feed issues, Shopify orders and GA4 traffic into one product view. See what deserves your attention
            next.
          </p>
          <div className="flex items-center gap-[16px] mt-[32px] max-md:flex-wrap max-xs:flex-col max-xs:items-stretch">
            <Link
              className="inline-flex items-center justify-center gap-[6px] min-h-[52px] px-[28px] py-0 rounded-8 bg-rust-button text-white text-[16.5px] font-semibold shadow-hairline"
              href="/pricing"
            >
              Start free trial ›
            </Link>
            <a
              className="box-content inline-flex items-center justify-center min-h-[52px] px-[26px] py-0 rounded-8 border border-line-button bg-white text-ink text-[16px] font-semibold"
              href="#table"
            >
              Explore the example
            </a>
          </div>
          <p className="m-0 mt-[24px] text-[15px] text-dim">Your data. Clear sources. A useful next step.</p>
        </div>
        <div className="relative h-[700px] flex flex-col justify-center">
          <div className="w-[366px] p-[14px] bg-white border border-line rounded-14 shadow-hero relative z-[2] max-md:w-full max-w-full">
            <div className="flex items-center justify-between">
              <span className="px-[10px] py-[5px] rounded-6 bg-badge text-rust text-[11px] font-bold tracking-[.1em] uppercase">
                Review first
              </span>
              <span className="text-[12px] text-faint">Illustrative example</span>
            </div>
            <div className="mt-[12px] h-[182px] rounded-10 bg-[#F3F1EE] overflow-hidden">
              <Image
                src="/assets/court-shoe-2.png"
                width={1254}
                height={1254}
                alt="Northline Court Shoe 2 in black and olive"
                sizes="(max-width: 768px) 50vw, 240px"
                className="block w-full h-full object-cover mix-blend-multiply max-w-none"
              />
            </div>
            <p className="m-0 mt-[14px] text-[22px] font-bold tracking-[-.02em]">Northline Court Shoe 2</p>
            <div className="flex items-center gap-[9px] mt-[10px] px-[12px] py-[8px] rounded-8 bg-badge text-rust text-[13px] font-semibold">
              <span className="inline-flex items-center justify-center w-[18px] h-[18px] rounded-full bg-amber text-white text-[12px] font-extrabold leading-none flex-none">
                !
              </span>
              Google Shopping · Missing GTIN
            </div>
            <p className="m-0 mt-[16px] text-[11px] font-bold tracking-[.1em] uppercase text-faint">
              Historical store activity · Last 30 days
            </p>
            <div className="grid grid-cols-[1fr_1fr] mt-[10px]">
              <div className="flex flex-col gap-[3px] pr-[16px]">
                <span className="text-[26px] font-extrabold tracking-[-.03em] leading-none">41</span>
                <span className="text-[13px] text-dim">Shopify orders</span>
              </div>
              <div className="flex flex-col gap-[3px] pl-[16px] border-l border-l-line">
                <span className="text-[26px] font-extrabold tracking-[-.03em] leading-none">1,920</span>
                <span className="text-[13px] text-dim">GA4 sessions</span>
              </div>
            </div>
            <div className="flex justify-between items-center mt-[12px] pt-[10px] border-t border-t-line text-[13px]">
              <span className="text-dim">Shopify revenue</span>
              <span className="font-bold">$5,289</span>
            </div>
            <span className="flex items-center justify-center gap-[8px] mt-[14px] min-h-[44px] rounded-8 bg-rust-button text-[14.5px] font-semibold text-white">
              Review feed issue
              <ArrowRightGlyph size={15} stroke="#fff" strokeWidth="2" className="flex-none" />
            </span>
          </div>
          <p className="m-0 mt-[12px] w-[366px] text-[12px] text-faint text-center max-w-full">
            Sample data shown. Store activity is not attributed to this channel.
          </p>
          <Image
            src="/assets/scout-clipboard-point.png"
            width={472}
            height={590}
            alt="Meerkat Scout with a clipboard, presenting the product card"
            className="absolute -right-[50px] bottom-0 h-[590px] w-auto z-[3] pointer-events-none max-md:hidden max-w-none"
          />
        </div>
      </section>

      {/* Order of work */}
      <section
        className="relative bg-night pt-[88px] pb-[90px] px-gutter overflow-hidden scroll-mt-[80px] max-md:pt-[56px] max-md:pb-[56px]"
        id="table"
      >
        <div
          className="absolute top-0 w-[1000px] h-[800px] pointer-events-none bg-[radial-gradient(closest-side,rgba(160,67,26,.12),transparent_70%)] right-[calc(var(--gutter)-70px+-200px)]"
          aria-hidden="true"
        ></div>
        <div className="relative z-[2]">
          <p className="m-0 mb-[22px] text-[13px] font-semibold tracking-[.14em] uppercase text-rust-bright">
            Feed issues, with context
          </p>
          <h2 className="m-0 text-[52px] leading-[1.06] font-extrabold tracking-[-.035em] text-white max-xl:text-[length:clamp(30px,4.06vw,52px)]">
            A clearer order of work.
          </h2>
          <p className="m-0 mt-[14px] text-[17.5px] leading-[1.5] text-night-muted text-pretty max-md:text-[16px]">
            Spot rejected products with orders, then investigate products with traffic and no sales.
          </p>
          <div className="mt-[36px] bg-night-card border border-night-line rounded-12 stack-table overflow-hidden" style={{ "--c2": "\"Feed status\"", "--c3": "\"Shopify orders\"", "--c4": "\"GA4 sessions\"", "--c5": "\"Next action\"" } as React.CSSProperties}>
            <div className="flex items-center justify-between gap-[16px] px-[20px] py-[16px] border-b border-b-night-line-2">
              <div className="flex items-center gap-[8px] max-md:flex-wrap">
                <span className="inline-flex items-center gap-[6px] px-[13px] py-[7px] rounded-full text-[13px] font-semibold bg-[#F3EFE9] text-ink border border-[#F3EFE9]">
                  Google Shopping
                </span>
                <span className="inline-flex items-center gap-[6px] px-[13px] py-[7px] rounded-full text-[13px] font-semibold bg-transparent text-night-text border border-night-line-4">
                  Last 30 days
                </span>
                <span className="inline-flex items-center gap-[6px] px-[13px] py-[7px] rounded-full text-[13px] font-semibold bg-transparent text-night-text border border-night-line-4">
                  Priority view
                  <ArrowDown size={13} aria-hidden="true" className="flex-none text-night-text" />
                </span>
              </div>
              <span className="text-[13px] text-faint">Illustrative data</span>
            </div>
            <div className="stack-head max-md:hidden grid grid-cols-[2.2fr_1.4fr_1.15fr_1.15fr_1.6fr] gap-[16px] px-[20px] py-[12px] border-b border-b-night-line-2 text-[11.5px] font-bold tracking-[.12em] uppercase text-faint max-md:grid-cols-1">
              <span>Product</span>
              <span>Feed status</span>
              <span>Shopify orders</span>
              <span>GA4 sessions</span>
              <span>Next action</span>
            </div>
            <div className="stack-row grid grid-cols-[2.2fr_1.4fr_1.15fr_1.15fr_1.6fr] gap-[16px] items-center px-[20px] py-[14px] border-b border-b-night-line-2 bg-[#1E1A17] shadow-[inset_3px_0_0_#E5813A] text-[14.5px] text-night-text max-md:grid-cols-1">
              <span className="flex items-center gap-[14px] font-semibold text-white">
                <span className="inline-flex items-center justify-center w-[66px] h-[46px] rounded-6 bg-[#F5F4F0] overflow-hidden flex-none">
                  <Image
                    src="/assets/court-shoe-2.png"
                    width={1254}
                    height={1254}
                    alt="Northline Court Shoe 2"
                    sizes="(max-width: 768px) 50vw, 240px"
                    className="block w-full h-full object-cover max-w-none"
                  />
                </span>
                Northline Court Shoe 2
              </span>
              <span className="inline-flex items-center gap-[9px] font-semibold text-amber">
                <span className="inline-flex items-center justify-center w-[18px] h-[18px] rounded-full bg-amber text-white text-[12px] font-extrabold leading-none flex-none">
                  !
                </span>
                Missing GTIN
              </span>
              <span className="font-mono text-[14px]">41</span>
              <span className="font-mono text-[14px]">1,920</span>
              <span className="inline-flex items-center gap-[8px] font-semibold text-amber">
                Review feed issue
                <ArrowRightGlyph size={15} stroke="#E5813A" strokeWidth="2" className="flex-none" />
              </span>
            </div>
            <div className="stack-row grid grid-cols-[2.2fr_1.4fr_1.15fr_1.15fr_1.6fr] gap-[16px] items-center px-[20px] py-[14px] border-b border-b-night-line-2 text-[14.5px] text-night-text max-md:grid-cols-1">
              <span className="flex items-center gap-[14px] font-semibold text-white">
                <span className="inline-flex items-center justify-center w-[66px] h-[46px] rounded-6 bg-white overflow-hidden flex-none">
                  <Image
                    src="/assets/ci-headphones.png"
                    width={520}
                    height={520}
                    alt="Studio Headphones"
                    sizes="(max-width: 768px) 50vw, 240px"
                    className="block w-full h-full object-contain p-[3px] max-w-none"
                  />
                </span>
                Studio Headphones
              </span>
              <span className="inline-flex items-center gap-[9px] font-semibold text-ok-bright">
                <span className="inline-flex items-center justify-center w-[18px] h-[18px] rounded-full bg-ok flex-none">
                  <Check size={11} strokeWidth={3} aria-hidden="true" className="flex-none text-white" />
                </span>
                Live
              </span>
              <span className="font-mono text-[14px]">0</span>
              <span className="font-mono text-[14px]">1,310</span>
              <span className="inline-flex items-center gap-[8px] font-semibold text-white">
                Investigate product
                <ArrowRightGlyph size={15} stroke="#fff" strokeWidth="2" className="flex-none" />
              </span>
            </div>
            <div className="stack-row grid grid-cols-[2.2fr_1.4fr_1.15fr_1.15fr_1.6fr] gap-[16px] items-center px-[20px] py-[14px] border-b border-b-night-line-2 text-[14.5px] text-night-text max-md:grid-cols-1">
              <span className="flex items-center gap-[14px] font-semibold text-white">
                <span className="inline-flex items-center justify-center w-[66px] h-[46px] rounded-6 bg-[#F5F4F0] overflow-hidden flex-none">
                  <Image
                    src="/assets/ci-overgrip.png"
                    width={1254}
                    height={1254}
                    alt="Tacky Overgrip 3-pack"
                    sizes="(max-width: 768px) 50vw, 240px"
                    className="block w-full h-full object-cover max-w-none"
                  />
                </span>
                Tacky Overgrip · 3-pack
              </span>
              <span className="inline-flex items-center gap-[9px] font-semibold text-amber">
                <span className="inline-flex items-center justify-center w-[18px] h-[18px] rounded-full bg-amber text-white text-[12px] font-extrabold leading-none flex-none">
                  !
                </span>
                Missing GTIN
              </span>
              <span className="font-mono text-[14px]">2</span>
              <span className="font-mono text-[14px]">64</span>
              <span className="inline-flex items-center gap-[8px] font-semibold text-amber">
                Review feed issue
                <ArrowRightGlyph size={15} stroke="#E5813A" strokeWidth="2" className="flex-none" />
              </span>
            </div>
            <div className="stack-row grid grid-cols-[2.2fr_1.4fr_1.15fr_1.15fr_1.6fr] gap-[16px] items-center px-[20px] py-[14px] text-[14.5px] text-night-text max-md:grid-cols-1">
              <span className="flex items-center gap-[14px] font-semibold text-white">
                <span className="inline-flex items-center justify-center w-[66px] h-[46px] rounded-6 bg-[#F5F4F0] overflow-hidden flex-none">
                  <Image
                    src="/assets/ci-wristband.png"
                    width={1254}
                    height={1254}
                    alt="Baseline Wristband"
                    sizes="(max-width: 768px) 50vw, 240px"
                    className="block w-full h-full object-cover max-w-none"
                  />
                </span>
                Baseline Wristband
              </span>
              <span className="inline-flex items-center gap-[9px] font-semibold text-ok-bright">
                <span className="inline-flex items-center justify-center w-[18px] h-[18px] rounded-full bg-ok flex-none">
                  <Check size={11} strokeWidth={3} aria-hidden="true" className="flex-none text-white" />
                </span>
                Live
              </span>
              <span className="font-mono text-[14px]">12</span>
              <span className="inline-flex items-center gap-[9px] font-semibold text-warn">
                <span className="inline-flex items-center justify-center w-[18px] h-[18px] rounded-full bg-warn text-white text-[12px] font-extrabold leading-none flex-none">
                  ?
                </span>
                Unavailable
              </span>
              <span className="inline-flex items-center gap-[8px] font-semibold text-white">
                Review data coverage
                <ArrowRightGlyph size={15} stroke="#fff" strokeWidth="2" className="flex-none" />
              </span>
            </div>
            <div className="pt-[16px] pb-0 px-[20px]">
              <div className="flex items-center justify-center gap-[10px] px-[16px] py-[12px] border border-dashed border-night-line-4 rounded-8 text-[13.5px] text-night-muted-2">
                <Box size={17} strokeWidth={1.7} aria-hidden="true" className="flex-none text-night-muted-2" />
                <span>1 unmatched product · Excluded from totals</span>
                <span className="inline-flex items-center gap-[6px] font-semibold text-white">
                  Review match
                  <ArrowRightGlyph size={14} stroke="#fff" strokeWidth="2" className="flex-none" />
                </span>
              </div>
            </div>
            <p className="m-0 pt-[14px] pb-[18px] px-[20px] text-[13.5px] text-faint">
              Shopify orders and GA4 sessions stay separate. Missing data is never shown as zero.
            </p>
          </div>
        </div>
      </section>

      {/* Identity layer */}
      <section className="bg-paper pt-[88px] pb-0 px-gutter max-md:pt-[56px]">
        <div className="grid grid-cols-[minmax(0,1fr)_640px] gap-[56px] items-center max-xl:grid-cols-2 max-lg:grid-cols-1">
          <div>
            <p className="m-0 mb-[20px] text-[13px] font-semibold tracking-[.14em] uppercase text-rust">
              The identity layer
            </p>
            <h2 className="m-0 text-[46px] leading-[1.06] font-extrabold tracking-[-.038em] text-pretty max-xl:text-[length:clamp(30px,3.59vw,46px)]">
              The right data.
              <br />
              Matched to the right product.
            </h2>
            <p className="m-0 mt-[22px] text-[17.5px] leading-[1.55] text-body max-w-[560px] text-pretty max-md:text-[16px]">
              Scout connects records only when an exact product identifier agrees. When a match is missing, the gap
              stays visible.
            </p>
          </div>
          <div className="p-[16px] bg-[#F1EDE6] border border-line-strong rounded-16">
            <div className="grid grid-cols-[1fr_1fr] gap-[16px] max-lg:grid-cols-1">
              <div className="flex items-start gap-[14px] px-[18px] py-[16px] bg-white border border-line rounded-12">
                <span className="inline-flex items-center justify-center w-[38px] h-[38px] rounded-[9px] bg-paper flex-none">
                  <ShopifyBag size={24} className="flex-none" />
                </span>
                <span className="flex flex-col gap-[3px] min-w-0">
                  <span className="text-[15px] font-bold">Shopify orders</span>
                  <span className="text-[13px] text-body">Line items</span>
                  <span className="font-mono text-[11.5px] text-faint mt-[3px]">SKU · barcode · product_id</span>
                </span>
              </div>
              <div className="flex items-start gap-[14px] px-[18px] py-[16px] bg-white border border-line rounded-12">
                <span className="inline-flex items-center justify-center w-[38px] h-[38px] rounded-[9px] bg-paper flex-none">
                  <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true" className="flex-none">
                    <rect x="3" y="14" width="5" height="7" rx="2.5" fill="#E37400"></rect>
                    <rect x="9.5" y="8" width="5" height="13" rx="2.5" fill="#F9AB00"></rect>
                    <rect x="16" y="3" width="5" height="18" rx="2.5" fill="#E37400"></rect>
                  </svg>
                </span>
                <span className="flex flex-col gap-[3px] min-w-0">
                  <span className="text-[15px] font-bold">Google Analytics 4</span>
                  <span className="text-[13px] text-body">Item events</span>
                  <span className="font-mono text-[11.5px] text-faint mt-[3px]">item_id · item_name</span>
                </span>
              </div>
            </div>
            <svg
              width="100%"
              height="32"
              viewBox="0 0 608 32"
              preserveAspectRatio="none"
              fill="none"
              aria-hidden="true"
              className="block"
            >
              <path
                d="M148 0v10c0 6 4 10 10 10h136c6 0 10 4 10 10v2"
                stroke="#C2571E"
                strokeWidth="1.5"
                strokeDasharray="4 4"
              ></path>
              <path
                d="M460 0v10c0 6-4 10-10 10H314c-6 0-10 4-10 10v2"
                stroke="#C2571E"
                strokeWidth="1.5"
                strokeDasharray="4 4"
              ></path>
            </svg>
            <div className="bg-white border border-line-strong rounded-12 overflow-hidden">
              <div className="flex items-center gap-[16px] px-[16px] py-[14px] bg-ink">
                <span className="inline-flex items-center justify-center w-[82px] h-[56px] rounded-8 bg-[#F5F4F0] overflow-hidden flex-none">
                  <Image
                    src="/assets/court-shoe-2.png"
                    width={1254}
                    height={1254}
                    alt=""
                    sizes="(max-width: 768px) 50vw, 240px"
                    className="block w-full h-full object-cover max-w-none"
                  />
                </span>
                <span className="flex flex-col gap-[7px]">
                  <span className="text-[17px] font-bold text-white">Northline Court Shoe 2</span>
                  <span className="inline-flex items-center gap-[7px] self-start px-[10px] py-[4px] rounded-full bg-ok-tint text-ok-text text-[12.5px] font-semibold">
                    <span className="inline-flex items-center justify-center w-[15px] h-[15px] rounded-full bg-ok flex-none">
                      <Check size={11} strokeWidth={3} aria-hidden="true" className="flex-none text-white" />
                    </span>
                    Exact product match
                  </span>
                </span>
              </div>
              <div className="grid grid-cols-[1fr_1fr] px-[16px] py-[14px] max-lg:grid-cols-1">
                <div className="flex flex-col gap-[4px] pr-[16px]">
                  <span className="text-[13px] text-dim">Orders from Shopify</span>
                  <span className="text-[22px] font-extrabold tracking-[-.02em] leading-none">41</span>
                </div>
                <div className="flex flex-col gap-[4px] pl-[16px] border-l border-l-line">
                  <span className="text-[13px] text-dim">Sessions from GA4</span>
                  <span className="text-[22px] font-extrabold tracking-[-.02em] leading-none">1,920</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-[18px] mt-[24px] max-lg:grid-cols-2 max-md:grid-cols-1">
          <div className="flex items-start gap-[18px] px-[26px] py-[24px] bg-white border border-line rounded-12">
            <svg
              width="30"
              height="30"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#C2571E"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
              className="flex-none"
            >
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="22" x2="18" y1="12" y2="12"></line>
              <line x1="6" x2="2" y1="12" y2="12"></line>
              <line x1="12" x2="12" y1="6" y2="2"></line>
              <line x1="12" x2="12" y1="22" y2="18"></line>
              <circle cx="12" cy="12" r="2"></circle>
            </svg>
            <span className="flex flex-col gap-[6px]">
              <span className="text-[18px] font-bold tracking-[-.015em]">Exact matches</span>
              <span className="text-[15px] leading-[1.5] text-body text-pretty">
                Unmatched products stay visible and out of totals.
              </span>
            </span>
          </div>
          <div className="flex items-start gap-[18px] px-[26px] py-[24px] bg-white border border-line rounded-12">
            <Database size={30} strokeWidth={1.5} aria-hidden="true" className="flex-none text-rust-button" />
            <span className="flex flex-col gap-[6px]">
              <span className="text-[18px] font-bold tracking-[-.015em]">Separate sources</span>
              <span className="text-[15px] leading-[1.5] text-body text-pretty">
                Orders and sessions keep their own labels.
              </span>
            </span>
          </div>
          <div className="flex items-start gap-[18px] px-[26px] py-[24px] bg-white border border-line rounded-12">
            <TriangleAlert size={30} strokeWidth={1.5} aria-hidden="true" className="flex-none text-rust-button" />
            <span className="flex flex-col gap-[6px]">
              <span className="text-[18px] font-bold tracking-[-.015em]">Visible gaps</span>
              <span className="text-[15px] leading-[1.5] text-body text-pretty">
                Unavailable data stays unavailable.
              </span>
            </span>
          </div>
        </div>
        <div className="flex items-center justify-between gap-[40px] mt-[24px] px-[40px] py-[34px] bg-ink rounded-14 max-md:flex-wrap max-md:gap-[20px] max-md:px-[24px]">
          <div>
            <p className="m-0 text-[30px] font-extrabold tracking-[-.03em] text-white leading-[1.15]">
              Turn your next fix into a clear decision.
            </p>
            <p className="m-0 mt-[8px] text-[16.5px] text-night-muted">
              See feed status and product activity together.
            </p>
          </div>
          <div className="flex items-center gap-[12px] flex-none max-md:flex-wrap max-xs:flex-col max-xs:items-stretch">
            <Link
              className="inline-flex items-center justify-center min-h-[50px] px-[24px] py-0 rounded-8 bg-rust-button text-white text-[16px] font-semibold"
              href="/pricing"
            >
              Start free trial ›
            </Link>
            <Link
              className="box-content inline-flex items-center justify-center gap-[8px] min-h-[50px] px-[24px] py-0 rounded-8 border border-night-line-5 text-white text-[16px] font-semibold"
              href="/demo"
            >
              Book a demo
              <ArrowRightGlyph size={15} stroke="#fff" strokeWidth="2" className="flex-none" />
            </Link>
          </div>
        </div>
        <div className="flex items-end justify-between gap-[24px] mt-[28px] pb-[88px] max-md:flex-wrap max-md:pb-[56px]">
          <nav className="flex items-end gap-[28px] max-md:flex-wrap max-md:gap-[16px]" aria-label="Related features">
            <Link
              className="p-0 pb-[10px] text-[14.5px] font-semibold text-body border-b-[2px] border-b-transparent"
              href="/platform/diagnostics"
            >
              Diagnostics
            </Link>
            <Link
              className="p-0 pb-[10px] text-[14.5px] font-semibold text-body border-b-[2px] border-b-transparent"
              href="/platform/rules-engine"
            >
              Rules Engine
            </Link>
            <Link
              className="p-0 pb-[10px] text-[14.5px] font-semibold text-body border-b-[2px] border-b-transparent"
              href="/platform/feed-management"
            >
              Feed Management
            </Link>
            <Link
              className="p-0 pb-[10px] text-[14.5px] font-semibold text-rust-button border-b-[2px] border-b-rust-button"
              href="/platform/conversion-intelligence"
            >
              Conversion Intelligence
            </Link>
          </nav>
          <p className="m-0 mb-[10px] text-[13.5px] text-faint">
            Order access is optional. Other Scout features keep working without it.
          </p>
        </div>
      </section>

      <PreFooterCta />

      <SiteFooter current="Conversion-Intelligence" />
    </>
  );
}
