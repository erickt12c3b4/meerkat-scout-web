import Image from "next/image";
import Link from "next/link";
import { RefreshCw } from "lucide-react";
import { ArrowRightGlyph, FileTextGlyph, SearchGlyph2, ShopifyBag } from "@/components/brand-icons";
import { SiteHeader } from "@/components/site/site-header";
import { PreFooterCta } from "@/components/site/pre-footer-cta";
import { SiteFooter } from "@/components/site/site-footer";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Price Intelligence — Know where your price sits",
  description: "Compare your products with matched market listings. Get a recommendation with the evidence behind it. You decide what changes.",
};

// Source: Price-Intelligence.dc.html -> /platform/price-intelligence
export default function PriceIntelligencePage() {
  return (
    <>
      <SiteHeader active="platform" />

      {/* Price hero */}
      <section className="relative bg-paper min-h-[600px] px-gutter py-0 flex items-center overflow-hidden">
        <div className="absolute top-0 bottom-0 left-[40%] overflow-hidden right-[calc(var(--gutter)-70px)]">
          <Image
            src="/assets/scout-price-hero.png"
            width={1942}
            height={809}
            alt="Meerkat Scout scanning the horizon through binoculars at sunrise"
            sizes="(max-width: 768px) 50vw, 240px"
            className="block w-full h-full object-cover object-[right_center] max-w-none"
          />
          <div
            className="absolute inset-0 [background:linear-gradient(90deg,#F7F4EF_0%,rgba(247,244,239,.92)_16%,rgba(247,244,239,0)_46%)]"
            aria-hidden="true"
          ></div>
        </div>
        <div className="relative z-[2] max-w-[640px] pt-[80px] pb-[96px] px-0">
          <p className="m-0 mb-[22px] text-[13px] font-semibold tracking-[.14em] uppercase text-rust">
            Platform · Price intelligence
          </p>
          <h1 className="m-0 text-[56px] leading-[1.06] font-extrabold tracking-[-.035em] text-pretty max-xl:text-[length:clamp(36px,4.38vw,56px)]">
            Know where your price sits before the market tells you.
          </h1>
          <p className="m-0 mt-[26px] text-[17.5px] leading-[1.55] text-body max-w-[520px] text-pretty max-md:text-[16px]">
            Compare your products with matched market listings. Get a recommendation with the evidence behind it. You
            decide what changes.
          </p>
          <div className="flex items-center gap-[26px] mt-[32px] max-md:flex-wrap max-md:gap-[16px]">
            <a
              className="inline-flex items-center justify-center min-h-[52px] px-[28px] py-0 rounded-8 bg-rust-button text-white text-[16.5px] font-semibold shadow-hairline"
              href="#instrument"
            >
              See the market range
            </a>
            <a className="text-[16px] font-semibold text-ink" href="#advisory">
              How recommendations work →
            </a>
          </div>
        </div>
        <div className="absolute bottom-[36px] z-[3] w-[690px] grid grid-cols-[150px_minmax(0,1fr)] gap-[22px] items-center pt-[16px] pb-[14px] pr-[20px] pl-[16px] bg-white border border-line rounded-14 shadow-[0_22px_54px_rgba(24,24,27,.18)] max-lg:grid-cols-1 right-[calc(var(--gutter)-70px+70px)]">
          <div className="flex flex-col gap-[6px]">
            <div className="w-[150px] h-[108px] rounded-10 bg-[#F5F4F0] overflow-hidden flex-none">
              <Image
                src="/assets/court-shoe-2.png"
                width={1254}
                height={1254}
                alt="Northline Court Shoe 2 in black and olive"
                sizes="(max-width: 768px) 50vw, 240px"
                className="block w-full h-full object-cover max-w-none"
              />
            </div>
            <span className="text-[12px] text-faint">Illustrative example</span>
          </div>
          <div className="flex items-center gap-[20px]">
            <div className="flex-1 min-w-0">
              <p className="m-0 text-[20px] font-bold tracking-[-.02em]">Northline Court Shoe 2</p>
              <div className="flex gap-[30px] mt-[10px]">
                <div className="flex flex-col gap-[2px]">
                  <span className="text-[13px] text-dim">Your price</span>
                  <span className="text-[30px] font-extrabold tracking-[-.03em] leading-[1.05]">$129</span>
                </div>
                <div className="flex flex-col gap-[2px]">
                  <span className="text-[13px] text-dim">Market median</span>
                  <span className="text-[30px] font-extrabold tracking-[-.03em] leading-[1.05]">$119</span>
                </div>
              </div>
            </div>
            <div className="w-px self-stretch bg-line" aria-hidden="true"></div>
            <div className="flex flex-col items-center justify-center px-[18px] py-[16px] bg-badge rounded-10 flex-none">
              <span className="text-[30px] font-extrabold tracking-[-.03em] leading-none text-rust-button">8.4%</span>
              <span className="mt-[5px] text-[12.5px] font-semibold text-rust whitespace-nowrap">above median</span>
            </div>
          </div>
        </div>
      </section>

      {/* Market range */}
      <section
        className="relative bg-night pt-[92px] pb-[96px] px-gutter overflow-hidden scroll-mt-[80px] max-md:pt-[56px] max-md:pb-[56px]"
        id="instrument"
      >
        <div
          className="absolute top-[100px] w-[900px] h-[700px] pointer-events-none bg-[radial-gradient(closest-side,rgba(160,67,26,.14),transparent_70%)] left-[calc(var(--gutter)-70px+-200px)]"
          aria-hidden="true"
        ></div>
        <div className="relative z-[2]">
          <p className="m-0 mb-[22px] text-[13px] font-semibold tracking-[.14em] uppercase text-rust-bright">
            Range · position · reasoning
          </p>
          <h2 className="m-0 mb-[44px] text-[52px] leading-[1.06] font-extrabold tracking-[-.035em] text-white max-w-[900px] text-pretty max-xl:text-[length:clamp(30px,4.06vw,52px)]">
            Your price. The market. A clearer next step.
          </h2>
          <div className="grid grid-cols-[minmax(0,1fr)_420px] gap-[24px] items-stretch max-lg:grid-cols-1">
            <div className="bg-night-card border border-night-line rounded-12 pt-[26px] pb-[28px] px-[30px] flex flex-col">
              <div className="flex items-center justify-between gap-[24px]">
                <div className="flex items-center gap-[18px] min-w-0">
                  <div className="w-[128px] h-[86px] rounded-8 bg-[#F5F4F0] overflow-hidden flex-none">
                    <Image
                      src="/assets/court-shoe-2.png"
                      width={1254}
                      height={1254}
                      alt="Northline Court Shoe 2 in black and olive"
                      sizes="(max-width: 768px) 50vw, 240px"
                      className="block w-full h-full object-cover max-w-none"
                    />
                  </div>
                  <div className="min-w-0">
                    <p className="m-0 text-[22px] font-bold tracking-[-.02em] text-white">
                      Northline Court Shoe 2 — Black
                    </p>
                    <p className="m-0 mt-[5px] text-[13.5px] text-night-muted-2">Matched by GTIN</p>
                  </div>
                </div>
                <div className="text-right flex-none">
                  <p className="m-0 text-[28px] font-extrabold tracking-[-.03em] leading-none text-amber">
                    $10 above median
                  </p>
                  <p className="m-0 mt-[8px] text-[15px] font-semibold text-night-muted-2">+8.4%</p>
                </div>
              </div>

              {/* COMPOSITION ? x 156 */}
              <div className="relative m-0 mt-[54px] h-[156px]">
                <div className="absolute left-0 right-0 top-[70px] h-[2px] bg-night-line-4"></div>
                <span className="absolute left-[0%] top-[63px] w-[16px] h-[16px] rounded-full bg-[#6F6963] border-[2px] border-night-card [transform:translateX(-8px)]"></span>
                <span className="absolute left-[14.28%] top-[63px] w-[16px] h-[16px] rounded-full bg-[#6F6963] border-[2px] border-night-card [transform:translateX(-8px)]"></span>
                <span className="absolute left-[28.57%] top-[63px] w-[16px] h-[16px] rounded-full bg-[#6F6963] border-[2px] border-night-card [transform:translateX(-8px)]"></span>
                <span className="absolute left-[57.14%] top-[63px] w-[16px] h-[16px] rounded-full bg-[#6F6963] border-[2px] border-night-card [transform:translateX(-8px)]"></span>
                <span className="absolute left-[71.43%] top-[63px] w-[16px] h-[16px] rounded-full bg-[#6F6963] border-[2px] border-night-card [transform:translateX(-8px)]"></span>
                <span className="absolute left-full top-[63px] w-[16px] h-[16px] rounded-full bg-[#6F6963] border-[2px] border-night-card [transform:translateX(-8px)]"></span>
                <div className="absolute left-[42.86%] top-[42px] w-[2px] h-[56px] bg-rust-button [transform:translateX(-1px)]"></div>
                <span className="absolute left-[42.86%] top-[63px] w-[16px] h-[16px] rounded-full bg-[#8A9A5B] border-[2px] border-night-card [transform:translateX(-8px)]"></span>
                <div className="absolute left-[42.86%] top-0 -translate-x-1/2 flex flex-col items-center gap-px whitespace-nowrap">
                  <span className="text-[12.5px] font-bold text-white">Median</span>
                  <span className="text-[15px] font-bold text-white">$119</span>
                </div>
                <div className="absolute left-[85.71%] top-[57px] w-[28px] h-[28px] rounded-full bg-white border-[3px] border-amber [transform:translateX(-14px)] shadow-[0_0_0_6px_rgba(229,129,58,.18)]"></div>
                <div className="absolute left-[85.71%] top-[98px] -translate-x-1/2 flex flex-col items-center gap-px whitespace-nowrap">
                  <span className="text-[13px] font-semibold text-white">Your price</span>
                  <span className="text-[15px] font-bold text-amber">$129</span>
                </div>
                <span className="absolute left-[0%] top-[94px] -translate-x-1/2 text-[13px] text-night-muted whitespace-nowrap">
                  $98
                </span>
                <span className="absolute left-[14.28%] top-[94px] -translate-x-1/2 text-[13px] text-night-muted whitespace-nowrap">
                  $110
                </span>
                <span className="absolute left-[28.57%] top-[94px] -translate-x-1/2 text-[13px] text-night-muted whitespace-nowrap">
                  $116
                </span>
                <span className="absolute left-[57.14%] top-[94px] -translate-x-1/2 text-[13px] text-night-muted whitespace-nowrap">
                  $122.50
                </span>
                <span className="absolute left-[71.43%] top-[94px] -translate-x-1/2 text-[13px] text-night-muted whitespace-nowrap">
                  $124
                </span>
                <span className="absolute left-full top-[94px] -translate-x-1/2 text-[13px] text-night-muted whitespace-nowrap">
                  $158
                </span>
              </div>
              <div className="flex items-center gap-[26px] mt-[18px] text-[13.5px] text-night-muted">
                <span className="inline-flex items-center gap-[8px]">
                  <span className="w-[12px] h-[12px] rounded-full bg-[#6F6963] flex-none"></span>Competitors (7)
                </span>
                <span className="inline-flex items-center gap-[8px]">
                  <span className="w-[12px] h-[12px] rounded-full bg-[#8A9A5B] flex-none"></span>Median
                </span>
                <span className="inline-flex items-center gap-[8px]">
                  <span className="w-[12px] h-[12px] rounded-full bg-white border-[2.5px] border-amber flex-none"></span>
                  Your price
                </span>
              </div>
              <div className="m-0 mt-auto grid grid-cols-3 pt-[24px] border-t border-t-night-line max-lg:grid-cols-2 max-md:grid-cols-1">
                <div className="flex flex-col gap-[4px]">
                  <span className="text-[11.5px] font-bold tracking-[.12em] uppercase text-faint">Listings</span>
                  <span className="text-[17px] font-bold text-white">7 competitors</span>
                </div>
                <div className="flex flex-col gap-[4px] pl-[24px] border-l border-l-night-line">
                  <span className="text-[11.5px] font-bold tracking-[.12em] uppercase text-faint">Median</span>
                  <span className="text-[17px] font-bold text-white">$119.00</span>
                </div>
                <div className="flex flex-col gap-[4px] pl-[24px] border-l border-l-night-line">
                  <span className="text-[11.5px] font-bold tracking-[.12em] uppercase text-faint">Checked</span>
                  <span className="text-[17px] font-bold text-white">3h ago</span>
                </div>
              </div>
            </div>
            <div className="bg-white border border-line rounded-12 shadow-float pt-[24px] pb-[22px] px-[26px] flex flex-col">
              <div className="flex items-center justify-between">
                <span className="text-[12px] font-bold tracking-[.12em] uppercase text-faint">Recommendation</span>
                <span className="text-[12px] font-bold text-rust bg-badge border border-tint-line-strong rounded-full px-[10px] py-[4px]">
                  Advisory
                </span>
              </div>
              <p className="m-0 mt-[14px] text-[27px] font-extrabold tracking-[-.03em] leading-[1.1]">
                Consider $121 – $124
              </p>
              <p className="m-0 mt-[12px] text-[14.5px] leading-[1.6] text-nav text-pretty">
                Five of seven competing listings sit between $110 and $124. Review the evidence before changing your
                price.
              </p>
              <div className="m-0 mt-[18px] border border-line rounded-8 overflow-hidden">
                <div className="grid grid-cols-[1fr_78px_64px] gap-[10px] px-[12px] py-[9px] bg-paper-warm text-[11px] font-bold tracking-[.1em] uppercase text-faint max-lg:grid-cols-1">
                  <span>Source</span>
                  <span>Price</span>
                  <span>Seen</span>
                </div>
                <div className="grid grid-cols-[1fr_78px_64px] gap-[10px] px-[12px] py-[10px] border-t border-t-line text-[13.5px] text-nav max-lg:grid-cols-1">
                  <span>Court Supply</span>
                  <span className="font-semibold text-ink">$116.00</span>
                  <span className="text-faint">3h ago</span>
                </div>
                <div className="grid grid-cols-[1fr_78px_64px] gap-[10px] px-[12px] py-[10px] border-t border-t-line text-[13.5px] text-nav max-lg:grid-cols-1">
                  <span>Netplay Sports</span>
                  <span className="font-semibold text-ink">$119.00</span>
                  <span className="text-faint">3h ago</span>
                </div>
                <div className="grid grid-cols-[1fr_78px_64px] gap-[10px] px-[12px] py-[10px] border-t border-t-line text-[13.5px] text-nav max-lg:grid-cols-1">
                  <span>All Racquet</span>
                  <span className="font-semibold text-ink">$122.50</span>
                  <span className="text-faint">5h ago</span>
                </div>
              </div>
              <p className="m-0 mt-[10px] text-[12.5px] text-faint">Illustrative sample listings.</p>
              <div className="m-0 mt-auto pt-[20px] flex flex-col gap-[10px]">
                <span className="flex items-center justify-center min-h-[46px] rounded-8 bg-ink text-[15px] font-semibold text-white">
                  Review in Shopify →
                </span>
                <span className="text-center text-[12.5px] text-faint">You make the change in Shopify.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Advisory by design */}
      <section className="bg-paper pt-[96px] pb-0 px-gutter scroll-mt-[80px] max-md:pt-[56px]" id="advisory">
        <p className="m-0 mb-[20px] text-[13px] font-semibold tracking-[.14em] uppercase text-rust">
          Advisory by design
        </p>
        <h2 className="m-0 text-[46px] leading-[1.04] font-extrabold tracking-[-.038em] text-pretty max-xl:text-[length:clamp(30px,3.59vw,46px)]">
          Scout recommends. You stay in control.
        </h2>
        <p className="m-0 mt-[14px] text-[17.5px] leading-[1.5] text-body max-md:text-[16px]">
          Every price change starts with your decision.
        </p>
        <div className="grid grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr] gap-[14px] items-stretch mt-[36px] max-lg:grid-cols-1 max-lg:justify-items-stretch">
          <div className="flex flex-col p-[24px] pt-[22px] bg-white border border-line rounded-12 text-ink">
            <div className="flex items-center gap-[26px]">
              <span className="inline-flex items-center justify-center w-[40px] h-[40px] rounded-full bg-badge text-[13px] font-bold text-rust flex-none">
                01
              </span>
              <SearchGlyph2 size={44} stroke="#C2571E" strokeWidth="1.5" className="flex-none" />
            </div>
            <span className="m-0 mt-[22px] text-[20px] font-bold tracking-[-.02em]">Price Intelligence</span>
            <span className="m-0 mt-[6px] text-[15px] leading-[1.45] text-body text-pretty">
              Review market evidence
            </span>
          </div>
          <ArrowRightGlyph size={24} className="flex-none" />
          <div className="flex flex-col p-[24px] pt-[22px] bg-white border border-line rounded-12 text-ink">
            <div className="flex items-center gap-[26px]">
              <span className="inline-flex items-center justify-center w-[40px] h-[40px] rounded-full bg-badge text-[13px] font-bold text-rust flex-none">
                02
              </span>
              <FileTextGlyph size={44} stroke="#C2571E" className="flex-none" />
            </div>
            <span className="m-0 mt-[22px] text-[20px] font-bold tracking-[-.02em]">Your decision</span>
            <span className="m-0 mt-[6px] text-[15px] leading-[1.45] text-body text-pretty">Choose your next move</span>
          </div>
          <ArrowRightGlyph size={24} className="flex-none" />
          <div className="flex flex-col p-[24px] pt-[22px] bg-white border border-line rounded-12 text-ink">
            <div className="flex items-center gap-[26px]">
              <span className="inline-flex items-center justify-center w-[40px] h-[40px] rounded-full bg-badge text-[13px] font-bold text-rust flex-none">
                03
              </span>
              <ShopifyBag size={44} className="flex-none" />
            </div>
            <span className="m-0 mt-[22px] text-[20px] font-bold tracking-[-.02em]">Shopify</span>
            <span className="m-0 mt-[6px] text-[15px] leading-[1.45] text-body text-pretty">Update your price</span>
          </div>
          <ArrowRightGlyph size={24} className="flex-none" />
          <Link
            className="flex flex-col p-[24px] pt-[22px] bg-white border border-line rounded-12 text-ink"
            href="/platform/feed-management"
          >
            <div className="flex items-center gap-[26px]">
              <span className="inline-flex items-center justify-center w-[40px] h-[40px] rounded-full bg-badge text-[13px] font-bold text-rust flex-none">
                04
              </span>
              <RefreshCw size={44} strokeWidth={1.5} aria-hidden="true" className="flex-none text-rust-button" />
            </div>
            <span className="m-0 mt-[22px] text-[20px] font-bold tracking-[-.02em]">Feed Management</span>
            <span className="m-0 mt-[6px] text-[15px] leading-[1.45] text-body text-pretty">
              Publish on the next scheduled run
            </span>
          </Link>
        </div>
        <p className="m-0 mt-[16px] text-[14px] text-faint">Scout has read-only access to your products.</p>
      </section>

      {/* Two weeks later */}
      <section className="bg-paper pt-[56px] pb-[96px] px-gutter max-md:pb-[56px]">
        <div className="bg-white border border-line rounded-14 shadow-raised pt-[36px] pb-[34px] px-[40px] grid grid-cols-[400px_minmax(0,1fr)] gap-[50px] items-center max-lg:grid-cols-1">
          <div>
            <p className="m-0 mb-[16px] text-[13px] font-semibold tracking-[.14em] uppercase text-rust">
              Two weeks later · Illustrative example
            </p>
            <h2 className="m-0 text-[38px] leading-[1.08] font-extrabold tracking-[-.03em]">See what changed.</h2>
            <p className="m-0 mt-[16px] text-[16px] leading-[1.6] text-body text-pretty">
              Scout keeps watching after you act, so you can compare your new price with the market as it stands.
            </p>
            <Link
              className="inline-block mt-[26px] text-[16px] font-semibold text-rust"
              href="/platform/conversion-intelligence"
            >
              Explore Conversion Intelligence →
            </Link>
            <p className="m-0 mt-[6px] text-[13.5px] text-faint">Understand sales outcomes with separate evidence.</p>
          </div>
          <div className="grid grid-cols-[minmax(0,1fr)_120px_minmax(0,1fr)] gap-[16px] items-center max-lg:grid-cols-1">
            <div className="px-[20px] py-[18px] border border-line rounded-12 bg-white">
              <p className="m-0 text-[16px] font-bold tracking-[-.01em]">Before</p>
              <div className="flex items-center gap-[16px] mt-[12px]">
                <div className="w-[80px] h-[60px] rounded-8 bg-white overflow-hidden flex-none">
                  <Image
                    src="/assets/court-shoe-2.png"
                    width={1254}
                    height={1254}
                    alt="Northline Court Shoe 2 in black and olive"
                    sizes="(max-width: 768px) 50vw, 240px"
                    className="block w-full h-full object-cover max-w-none"
                  />
                </div>
                <div className="flex gap-[22px] max-xl:flex-wrap max-xl:gap-[14px]">
                  <div className="flex flex-col gap-[2px]">
                    <span className="text-[12.5px] text-dim">Your price</span>
                    <span className="text-[22px] font-extrabold tracking-[-.02em] leading-[1.1]">$129</span>
                  </div>
                  <div className="flex flex-col gap-[2px]">
                    <span className="text-[12.5px] text-dim">Median</span>
                    <span className="text-[22px] font-extrabold tracking-[-.02em] leading-[1.1]">$119</span>
                  </div>
                </div>
              </div>
              <span className="inline-flex mt-[14px] px-[12px] py-[6px] rounded-full bg-badge text-rust text-[13px] font-semibold">
                8.4% above median
              </span>

              {/* COMPOSITION ? x 46 */}
              <div className="relative h-[46px] mt-[16px]">
                <div className="absolute left-0 right-0 top-[12px] h-[2px] bg-line-strong"></div>
                <span className="absolute left-[0%] top-[8px] w-[10px] h-[10px] rounded-full bg-[#C9C1B6] [transform:translateX(-5px)]"></span>
                <span className="absolute left-[18%] top-[8px] w-[10px] h-[10px] rounded-full bg-[#C9C1B6] [transform:translateX(-5px)]"></span>
                <span className="absolute left-[76%] top-[8px] w-[10px] h-[10px] rounded-full bg-[#C9C1B6] [transform:translateX(-5px)]"></span>
                <span className="absolute left-full top-[8px] w-[10px] h-[10px] rounded-full bg-[#C9C1B6] [transform:translateX(-5px)]"></span>
                <span className="absolute left-[36%] top-[8px] w-[10px] h-[10px] rounded-full bg-[#8A9A5B] [transform:translateX(-5px)]"></span>
                <span className="absolute left-[52%] top-[5px] w-[16px] h-[16px] rounded-full bg-white border-[2.5px] border-rust-button [transform:translateX(-8px)]"></span>
                <span className="absolute left-0 top-[28px] text-[12px] text-faint">$98</span>
                <span className="absolute left-[36%] top-[28px] -translate-x-1/2 text-[12px] text-faint">$119</span>
                <span className="absolute right-0 top-[28px] text-[12px] text-faint">$158</span>
              </div>
            </div>
            <div className="flex flex-col items-center text-center gap-[6px]">
              <ArrowRightGlyph size={24} className="flex-none" />
              <span className="flex flex-col text-[19px] font-extrabold tracking-[-.02em] leading-[1.2] text-rust-button">
                <span>8.4%</span>
                <span>→ 1.7%</span>
              </span>
              <span className="text-[13px] leading-[1.4] text-dim">Closer to the market</span>
            </div>
            <div className="px-[20px] py-[18px] border border-line rounded-12 bg-white">
              <p className="m-0 text-[16px] font-bold tracking-[-.01em]">Two weeks later</p>
              <div className="flex items-center gap-[16px] mt-[12px]">
                <div className="w-[80px] h-[60px] rounded-8 bg-white overflow-hidden flex-none">
                  <Image
                    src="/assets/court-shoe-2.png"
                    width={1254}
                    height={1254}
                    alt="Northline Court Shoe 2 in black and olive"
                    sizes="(max-width: 768px) 50vw, 240px"
                    className="block w-full h-full object-cover max-w-none"
                  />
                </div>
                <div className="flex gap-[22px] max-xl:flex-wrap max-xl:gap-[14px]">
                  <div className="flex flex-col gap-[2px]">
                    <span className="text-[12.5px] text-dim">Your price</span>
                    <span className="text-[22px] font-extrabold tracking-[-.02em] leading-[1.1]">$122</span>
                  </div>
                  <div className="flex flex-col gap-[2px]">
                    <span className="text-[12.5px] text-dim">Median</span>
                    <span className="text-[22px] font-extrabold tracking-[-.02em] leading-[1.1]">$120</span>
                  </div>
                </div>
              </div>
              <span className="inline-flex mt-[14px] px-[12px] py-[6px] rounded-full bg-[#EAF1DC] text-[#4B6318] text-[13px] font-semibold">
                1.7% above median
              </span>

              {/* COMPOSITION ? x 46 */}
              <div className="relative h-[46px] mt-[16px]">
                <div className="absolute left-0 right-0 top-[12px] h-[2px] bg-line-strong"></div>
                <span className="absolute left-[0%] top-[8px] w-[10px] h-[10px] rounded-full bg-[#C9C1B6] [transform:translateX(-5px)]"></span>
                <span className="absolute left-[18%] top-[8px] w-[10px] h-[10px] rounded-full bg-[#C9C1B6] [transform:translateX(-5px)]"></span>
                <span className="absolute left-[76%] top-[8px] w-[10px] h-[10px] rounded-full bg-[#C9C1B6] [transform:translateX(-5px)]"></span>
                <span className="absolute left-full top-[8px] w-[10px] h-[10px] rounded-full bg-[#C9C1B6] [transform:translateX(-5px)]"></span>
                <span className="absolute left-[36%] top-[8px] w-[10px] h-[10px] rounded-full bg-[#8A9A5B] [transform:translateX(-5px)]"></span>
                <span className="absolute left-[43%] top-[5px] w-[16px] h-[16px] rounded-full bg-white border-[2.5px] border-rust-button [transform:translateX(-8px)]"></span>
                <span className="absolute left-0 top-[28px] text-[12px] text-faint">$98</span>
                <span className="absolute left-[36%] top-[28px] -translate-x-1/2 text-[12px] text-faint">$120</span>
                <span className="absolute right-0 top-[28px] text-[12px] text-faint">$158</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <PreFooterCta />

      <SiteFooter current="Price-Intelligence" />
    </>
  );
}
