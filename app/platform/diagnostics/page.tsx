import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { ArrowRightGlyph, ChevronRightGlyph } from "@/components/brand-icons";
import { SiteHeader } from "@/components/site/site-header";
import { PreFooterCta } from "@/components/site/pre-footer-cta";
import { SiteFooter } from "@/components/site/site-footer";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Diagnostics — Every rejection in one vocabulary",
  description: "Ten channels describe the same broken field ten different ways. Scout collects every rejection, normalizes it into one problem, counts the products behind it, and names the exact field that would fix it.",
};

// Source: Diagnostics.dc.html -> /platform/diagnostics
export default function DiagnosticsPage() {
  return (
    <>
      <SiteHeader active="platform" />

      {/* Diagnostics hero */}
      <section className="bg-paper pt-[84px] pb-[72px] px-gutter grid grid-cols-[1fr_1fr] gap-[60px] items-end max-md:pt-[56px] max-md:pb-[48px] max-lg:grid-cols-1">
        <div>
          <p className="m-0 mb-[22px] text-[13px] font-semibold tracking-[.14em] uppercase text-rust">
            Platform · Diagnostics
          </p>
          <h1 className="m-0 text-[57px] leading-[1.08] font-extrabold tracking-[-.035em] text-pretty max-xl:text-[length:clamp(36px,4.45vw,57px)]">
            Every rejection, from every channel, in one vocabulary.
          </h1>
        </div>
        <div className="pb-[6px]">
          <p className="m-0 text-[17.5px] leading-[1.55] text-body max-w-[520px] text-pretty max-md:text-[16px]">
            Ten channels describe the same broken field ten different ways. Scout collects every rejection, normalizes
            it into one problem, counts the products behind it, and names the exact field that would fix it.
          </p>
          <div className="flex items-center gap-[16px] mt-[30px] max-md:flex-wrap max-xs:flex-col max-xs:items-stretch">
            <a
              className="flex items-center justify-center min-h-[50px] px-[24px] py-0 rounded-8 bg-ink text-[16px] font-semibold text-white"
              href="#translate"
            >
              See the translation
            </a>
            <Link
              className="box-content flex items-center justify-center min-h-[50px] px-[24px] py-0 rounded-8 border border-line-button text-[16px] font-semibold text-ink"
              href="/pricing"
            >
              Start free trial
            </Link>
          </div>
        </div>
      </section>

      {/* Translation */}
      <section
        className="relative bg-night pt-[92px] pb-[96px] px-gutter overflow-hidden max-md:pt-[56px] max-md:pb-[56px]"
        id="translate"
      >
        <div
          className="absolute top-[80px] w-[900px] h-[700px] pointer-events-none bg-[radial-gradient(closest-side,rgba(160,67,26,.16),transparent_70%)] right-[calc(var(--gutter)-70px+-100px)]"
          aria-hidden="true"
        ></div>
        <div className="relative z-[2]">
          <p className="m-0 mb-[22px] text-[13px] font-semibold tracking-[.14em] uppercase text-rust-bright">
            Three voices, one instruction
          </p>
          <h2 className="m-0 mb-[56px] text-[52px] leading-[1.06] font-extrabold tracking-[-.035em] text-white max-w-[760px] text-pretty max-xl:text-[length:clamp(30px,4.06vw,52px)]">
            Three channels said it three ways. Scout says it once, and names the field.
          </h2>
          <div className="grid grid-cols-[470px_300px_1fr] gap-0 items-center max-lg:grid-cols-1">
            <div className="flex flex-col gap-[18px]">
              <div className="bg-night-card border border-night-line rounded-10 overflow-hidden">
                <div className="flex items-center justify-between px-[16px] py-[10px] border-b border-b-night-line">
                  <span className="inline-flex items-center gap-[8px] text-[12.5px] font-semibold text-night-text">
                    <span className="w-[8px] h-[8px] rounded-[2px] bg-[#4285F4]"></span>Google Merchant Center
                  </span>
                  <span className="text-[11.5px] text-faint">item-level issue</span>
                </div>
                <p className="m-0 p-[16px] pb-[18px] font-mono text-[13.5px] leading-[1.6] text-[#EDEAE6]">
                  Missing value [gtin]
                  <br />
                  <span className="text-faint">Limited performance because of missing identifiers · 214 items</span>
                </p>
              </div>
              <div className="bg-night-card border border-night-line rounded-10 overflow-hidden">
                <div className="flex items-center justify-between px-[16px] py-[10px] border-b border-b-night-line">
                  <span className="inline-flex items-center gap-[8px] text-[12.5px] font-semibold text-night-text">
                    <span className="w-[8px] h-[8px] rounded-[2px] bg-[#FF9900]"></span>Amazon Seller Central
                  </span>
                  <span className="text-[11.5px] text-faint">processing report</span>
                </div>
                <p className="m-0 p-[16px] pb-[18px] font-mono text-[13.5px] leading-[1.6] text-[#EDEAE6]">
                  Missing or invalid external_product_id
                  <br />
                  <span className="text-faint">A UPC/EAN is required for this product type · 187 SKUs</span>
                </p>
              </div>
              <div className="bg-night-card border border-night-line rounded-10 overflow-hidden">
                <div className="flex items-center justify-between px-[16px] py-[10px] border-b border-b-night-line">
                  <span className="inline-flex items-center gap-[8px] text-[12.5px] font-semibold text-night-text">
                    <span className="w-[8px] h-[8px] rounded-[2px] bg-[#E53238]"></span>eBay Seller Hub
                  </span>
                  <span className="text-[11.5px] text-faint">listing error</span>
                </div>
                <p className="m-0 p-[16px] pb-[18px] font-mono text-[13.5px] leading-[1.6] text-[#EDEAE6]">
                  Item specific &quot;UPC&quot; is required for this category
                  <br />
                  <span className="text-faint">Provide a value or &quot;Does not apply&quot; · 214 listings</span>
                </p>
              </div>
            </div>
            <svg width="300" height="420" viewBox="0 0 300 420" fill="none" aria-hidden="true" className="block">
              <path d="M0 62 C120 62 160 210 300 210" stroke="#6a2f18" strokeWidth="1.5" strokeDasharray="4 5"></path>
              <path d="M0 210 L300 210" stroke="#6a2f18" strokeWidth="1.5" strokeDasharray="4 5"></path>
              <path d="M0 358 C120 358 160 210 300 210" stroke="#6a2f18" strokeWidth="1.5" strokeDasharray="4 5"></path>
              <circle cx="0" cy="62" r="4" fill="#E2703A"></circle>
              <circle cx="0" cy="210" r="4" fill="#E2703A"></circle>
              <circle cx="0" cy="358" r="4" fill="#E2703A"></circle>
              <circle cx="300" cy="210" r="6" fill="#A0431A"></circle>
            </svg>
            <div className="bg-white border border-line rounded-12 shadow-float pt-[26px] pb-[24px] px-[28px]">
              <div className="flex items-center justify-between">
                <span className="text-[12px] font-bold tracking-[.12em] uppercase text-faint">Normalized problem</span>
                <span className="inline-flex items-center gap-[6px] text-[12px] font-bold text-rust bg-badge border border-tint-line-strong rounded-full px-[10px] py-[4px]">
                  Error
                </span>
              </div>
              <p className="m-0 mt-[12px] text-[34px] font-extrabold tracking-[-.03em] leading-[1.05]">Missing GTIN</p>
              <p className="m-0 mt-[14px] text-[15.5px] leading-[1.55] text-body">
                The product has no barcode value, so three channels cannot match it to a catalog identity.
              </p>
              <div className="m-0 mt-[22px] grid grid-cols-[1fr_1fr] gap-y-[14px] gap-x-[18px] max-lg:grid-cols-1">
                <div className="flex flex-col gap-[4px]">
                  <span className="text-[12px] font-bold tracking-[.12em] uppercase text-faint">Products</span>
                  <span className="text-[20px] font-bold tracking-[-.02em]">214</span>
                </div>
                <div className="flex flex-col gap-[4px]">
                  <span className="text-[12px] font-bold tracking-[.12em] uppercase text-faint">Channels</span>
                  <span className="text-[20px] font-bold tracking-[-.02em]">
                    3 <span className="text-[14px] font-medium text-dim">of 3 connected</span>
                  </span>
                </div>
                <div className="flex flex-col gap-[4px]">
                  <span className="text-[12px] font-bold tracking-[.12em] uppercase text-faint">Field to fix</span>
                  <code className="box-content font-mono text-[14px] text-rust bg-badge px-[8px] py-[3px] rounded-[4px] w-fit">
                    variants.barcode
                  </code>
                </div>
                <div className="flex flex-col gap-[4px]">
                  <span className="text-[12px] font-bold tracking-[.12em] uppercase text-faint">Auto-fixable</span>
                  <span className="text-[15px] font-semibold text-ink">No — needs a value from you</span>
                </div>
              </div>
              <div className="m-0 mt-[22px] h-px bg-line"></div>
              <div className="m-0 mt-[18px] flex items-center justify-between gap-[14px]">
                <Link
                  className="inline-flex items-center justify-center min-h-[42px] px-[18px] py-0 rounded-8 bg-ink text-[14.5px] font-semibold text-white"
                  href="/platform/rules-engine"
                >
                  Open rule: Set barcode from SKU map →
                </Link>
                <span className="text-[13px] text-faint">Fix once · clears 3 channels</span>
              </div>
            </div>
          </div>
          <p className="m-0 mt-[44px] text-[15.5px] leading-[1.6] text-faint max-w-[760px]">
            Scout keeps the channel&#39;s original text on every diagnostic — the translation sits beside it, never in
            place of it. Nothing is paraphrased away.
          </p>
        </div>
      </section>

      {/* Grouped diagnostics */}
      <section className="bg-paper pt-[96px] pb-[90px] px-gutter max-md:pt-[56px] max-md:pb-[56px]">
        <div className="grid grid-cols-[480px_1fr] gap-[60px] items-end mb-[44px] max-lg:grid-cols-1">
          <div>
            <p className="m-0 mb-[20px] text-[13px] font-semibold tracking-[.14em] uppercase text-rust">
              Grouped by problem
            </p>
            <h2 className="m-0 text-[46px] leading-[1.04] font-extrabold tracking-[-.038em] text-pretty max-xl:text-[length:clamp(30px,3.59vw,46px)]">
              One row per problem, not one row per rejection.
            </h2>
          </div>
          <p className="m-0 text-[17.5px] leading-[1.55] text-body max-w-[560px] text-pretty max-md:text-[16px]">
            Six hundred rejections across three channels collapse into five things to fix. Expand any group to see the
            products behind it, filter to what you can act on today, and jump straight to the rule that clears it.
          </p>
        </div>
        <div className="flex items-center gap-[10px] mb-[16px] flex-wrap">
          <span className="text-[12px] font-bold tracking-[.12em] uppercase text-faint mr-[6px]">Filter</span>
          <span className="inline-flex items-center gap-[6px] text-[13.5px] font-semibold text-ink bg-white border border-ink rounded-full px-[13px] py-[7px]">
            Channel · All 3
          </span>
          <span className="inline-flex items-center gap-[6px] text-[13.5px] font-semibold text-dim bg-white border border-line-strong rounded-full px-[13px] py-[7px]">
            Code
          </span>
          <span className="inline-flex items-center gap-[6px] text-[13.5px] font-semibold text-rust bg-badge border border-tint-line-strong rounded-full px-[13px] py-[7px]">
            Severity · Error
          </span>
          <span className="inline-flex items-center gap-[6px] text-[13.5px] font-semibold text-dim bg-white border border-line-strong rounded-full px-[13px] py-[7px]">
            Auto-fixable
          </span>
          <span className="inline-flex items-center gap-[6px] text-[13.5px] font-semibold text-ink bg-white border border-ink rounded-full px-[13px] py-[7px]">
            Open
          </span>
          <span className="inline-flex items-center gap-[6px] text-[13.5px] font-semibold text-dim bg-white border border-line-strong rounded-full px-[13px] py-[7px]">
            Resolved
          </span>
          <span className="ml-auto text-[14px] text-faint">5 problems · 389 products · 3 channels</span>
        </div>
        <div className="bg-white border border-line rounded-12 overflow-hidden shadow-card stack-table" style={{ "--c3": "\"Severity\"", "--c4": "\"Products\"", "--c5": "\"Channels\"", "--c6": "\"Field\"", "--c7": "\"Rule\"", "--stack-border": "var(--color-line)" } as React.CSSProperties}>
          <div className="stack-head max-md:hidden grid grid-cols-[28px_1.6fr_.7fr_.8fr_1fr_1.2fr_1.3fr] gap-[16px] px-[22px] py-[12px] bg-paper-warm border-b border-b-line text-[11.5px] font-bold tracking-[.12em] uppercase text-faint max-md:grid-cols-1">
            <span></span>
            <span>Problem</span>
            <span>Severity</span>
            <span>Products</span>
            <span>Channels</span>
            <span>Field</span>
            <span>Rule</span>
          </div>
          <div className="stack-row grid grid-cols-[28px_1.6fr_.7fr_.8fr_1fr_1.2fr_1.3fr] gap-[16px] px-[22px] py-[16px] border-b border-b-line text-[15px] items-center bg-[#FFFBF6] max-md:grid-cols-1">
            <ChevronDown size={16} className="text-ink" />
            <span className="font-bold">Missing GTIN</span>
            <span className="text-rust font-semibold">Error</span>
            <span className="font-semibold">214</span>
            <span className="flex gap-[5px]">
              <span className="w-[9px] h-[9px] rounded-[2px] bg-[#4285F4]"></span>
              <span className="w-[9px] h-[9px] rounded-[2px] bg-[#FF9900]"></span>
              <span className="w-[9px] h-[9px] rounded-[2px] bg-[#E53238]"></span>
            </span>
            <code className="font-mono text-[13px] text-rust">variants.barcode</code>
            <Link className="text-[14px] font-semibold" href="/platform/rules-engine">
              Set barcode from SKU map →
            </Link>
          </div>
          <div className="grid grid-cols-[28px_1fr] gap-[16px] px-[22px] py-0 border-b border-b-line bg-[#FFFBF6] max-lg:grid-cols-1">
            <span></span>
            <div className="border-l-[2px] border-l-tint-line-strong stack-table m-0 mb-[14px] pl-[18px] flex flex-col" style={{ "--c2": "\"SKU\"", "--c3": "\"Google · Amazon · eBay\"", "--c4": "\"Original message\"", "--stack-border": "var(--color-line)" } as React.CSSProperties}>
              <div className="stack-head max-md:hidden grid grid-cols-[2fr_1fr_1fr_1fr] gap-[16px] pt-[10px] pb-[8px] px-0 text-[11.5px] font-bold tracking-[.12em] uppercase text-faint max-lg:grid-cols-1">
                <span>Product</span>
                <span>SKU</span>
                <span>Google · Amazon · eBay</span>
                <span>Original message</span>
              </div>
              <div className="stack-row grid grid-cols-[2fr_1fr_1fr_1fr] gap-[16px] px-0 py-[9px] border-t border-t-tint text-[14px] text-nav items-center max-lg:grid-cols-1">
                <span>Northline Court Shoe 2 — Black</span>
                <code className="font-mono text-[12.5px]">NL-CS2-BLK-10</code>
                <span className="flex gap-[6px] text-[12.5px] text-rust font-semibold">
                  <span>✕</span>
                  <span>✕</span>
                  <span>✕</span>
                </span>
                <span className="font-mono text-[12px] text-faint">Missing value [gtin]</span>
              </div>
              <div className="stack-row grid grid-cols-[2fr_1fr_1fr_1fr] gap-[16px] px-0 py-[9px] border-t border-t-tint text-[14px] text-nav items-center max-lg:grid-cols-1">
                <span>Northline Court Shoe 2 — White</span>
                <code className="font-mono text-[12.5px]">NL-CS2-WHT-10</code>
                <span className="flex gap-[6px] text-[12.5px] text-rust font-semibold">
                  <span>✕</span>
                  <span>✕</span>
                  <span>✕</span>
                </span>
                <span className="font-mono text-[12px] text-faint">Missing value [gtin]</span>
              </div>
              <div className="stack-row grid grid-cols-[2fr_1fr_1fr_1fr] gap-[16px] px-0 py-[9px] border-t border-t-tint text-[14px] text-nav items-center max-lg:grid-cols-1">
                <span>Baseline Wristband · 2-pack</span>
                <code className="font-mono text-[12.5px]">BL-WB-2PK</code>
                <span className="flex gap-[6px] text-[12.5px] font-semibold">
                  <span className="text-rust">✕</span>
                  <span className="text-ok-text">✓</span>
                  <span className="text-rust">✕</span>
                </span>
                <span className="font-mono text-[12px] text-faint">Item specific &quot;UPC&quot; is required</span>
              </div>
              <div className="stack-row grid grid-cols-[2fr_1fr_1fr_1fr] gap-[16px] px-0 py-[9px] border-t border-t-tint text-[14px] text-nav items-center max-lg:grid-cols-1">
                <span>Overgrip · Tacky · 3-pack</span>
                <code className="font-mono text-[12.5px]">OG-TK-3</code>
                <span className="flex gap-[6px] text-[12.5px] text-rust font-semibold">
                  <span>✕</span>
                  <span>✕</span>
                  <span>✕</span>
                </span>
                <span className="font-mono text-[12px] text-faint">Missing or invalid external_product_id</span>
              </div>
              <div className="pt-[10px] pb-[4px] px-0 text-[13px] text-faint">
                210 more products ·{" "}
                <a className="font-semibold" href="#">
                  Show all
                </a>
              </div>
            </div>
          </div>
          <div className="stack-row grid grid-cols-[28px_1.6fr_.7fr_.8fr_1fr_1.2fr_1.3fr] gap-[16px] px-[22px] py-[16px] border-b border-b-line text-[15px] items-center max-md:grid-cols-1">
            <ChevronRightGlyph size={16} stroke="#8A857F" strokeWidth="2" />
            <span className="font-semibold">Image below minimum size</span>
            <span className="text-rust font-semibold">Error</span>
            <span className="font-semibold">88</span>
            <span className="flex gap-[5px]">
              <span className="w-[9px] h-[9px] rounded-[2px] bg-[#4285F4]"></span>
              <span className="w-[9px] h-[9px] rounded-[2px] bg-[#1877F2]"></span>
            </span>
            <code className="font-mono text-[13px] text-rust">images[0].src</code>
            <Link className="text-[14px] font-semibold" href="/platform/rules-engine">
              Set image_link from variant image →
            </Link>
          </div>
          <div className="stack-row grid grid-cols-[28px_1.6fr_.7fr_.8fr_1fr_1.2fr_1.3fr] gap-[16px] px-[22px] py-[16px] border-b border-b-line text-[15px] items-center max-md:grid-cols-1">
            <ChevronRightGlyph size={16} stroke="#8A857F" strokeWidth="2" />
            <span className="font-semibold">Price differs from landing page</span>
            <span className="text-rust font-semibold">Error</span>
            <span className="font-semibold">19</span>
            <span className="flex gap-[5px]">
              <span className="w-[9px] h-[9px] rounded-[2px] bg-[#4285F4]"></span>
            </span>
            <code className="font-mono text-[13px] text-rust">variants.price</code>
            <Link className="text-[14px] font-semibold" href="/platform/feed-management">
              Regenerate from current mirror →
            </Link>
          </div>
          <div className="stack-row grid grid-cols-[28px_1.6fr_.7fr_.8fr_1fr_1.2fr_1.3fr] gap-[16px] px-[22px] py-[16px] border-b border-b-line text-[15px] items-center max-md:grid-cols-1">
            <ChevronRightGlyph size={16} stroke="#8A857F" strokeWidth="2" />
            <span className="font-semibold">Title exceeds channel limit</span>
            <span className="text-[#B27A2A] font-semibold">Warning</span>
            <span className="font-semibold">61</span>
            <span className="flex gap-[5px]">
              <span className="w-[9px] h-[9px] rounded-[2px] bg-[#FF9900]"></span>
            </span>
            <code className="font-mono text-[13px] text-rust">title</code>
            <Link className="text-[14px] font-semibold" href="/platform/rules-engine">
              Replace: truncate title to 200 →
            </Link>
          </div>
          <div className="stack-row grid grid-cols-[28px_1.6fr_.7fr_.8fr_1fr_1.2fr_1.3fr] gap-[16px] px-[22px] py-[16px] text-[15px] items-center max-md:grid-cols-1">
            <ChevronRightGlyph size={16} stroke="#8A857F" strokeWidth="2" />
            <span className="font-semibold">Missing shipping attribute</span>
            <span className="text-[#B27A2A] font-semibold">Warning</span>
            <span className="font-semibold">7</span>
            <span className="flex gap-[5px]">
              <span className="w-[9px] h-[9px] rounded-[2px] bg-[#4285F4]"></span>
            </span>
            <code className="font-mono text-[13px] text-rust">shipping</code>
            <Link className="text-[14px] font-semibold" href="/platform/rules-engine">
              Set shipping from template →
            </Link>
          </div>
        </div>
      </section>

      {/* Three things */}
      <section className="bg-paper pt-0 pb-[96px] px-gutter max-md:pb-[56px]">
        <div className="grid grid-cols-3 gap-[18px] max-lg:grid-cols-2 max-md:grid-cols-1">
          <div className="flex flex-col gap-[12px] p-[26px] pb-[24px] bg-white border border-line rounded-10">
            <span className="text-[12px] font-bold tracking-[.14em] uppercase text-rust">The field</span>
            <strong className="text-[22px] font-bold tracking-[-.02em] leading-[1.2]">
              Not &quot;fix your data&quot; — <code className="font-mono text-[18px] text-rust">variants.barcode</code>
            </strong>
            <p className="m-0 text-[15.5px] leading-[1.55] text-body">
              Every diagnostic resolves to a path in your catalog. If Scout can&#39;t name the field, it says so rather
              than pointing vaguely at the product.
            </p>
          </div>
          <div className="flex flex-col gap-[12px] p-[26px] pb-[24px] bg-white border border-line rounded-10">
            <span className="text-[12px] font-bold tracking-[.14em] uppercase text-rust">The rule</span>
            <strong className="text-[22px] font-bold tracking-[-.02em] leading-[1.2]">
              A link to the rule that clears it
            </strong>
            <p className="m-0 text-[15.5px] leading-[1.55] text-body">
              Where a transformation can fix the group, the row links into the{" "}
              <Link href="/platform/rules-engine">Rules Engine</Link> with the field pre-selected. Where it needs a
              value only you have, the row says that instead.
            </p>
          </div>
          <div className="flex flex-col gap-[12px] p-[26px] pb-[24px] bg-white border border-line rounded-10">
            <span className="text-[12px] font-bold tracking-[.14em] uppercase text-rust">The severity</span>
            <strong className="text-[22px] font-bold tracking-[-.02em] leading-[1.2]">
              Error blocks. Warning limits.
            </strong>
            <p className="m-0 text-[15.5px] leading-[1.55] text-body">
              One scale across all channels, mapped from each channel&#39;s own terms. A resolved group stays in history
              with the run that cleared it, so you can see what changed and when.
            </p>
          </div>
        </div>
      </section>

      {/* The loop */}
      <section className="bg-paper pt-0 pb-[96px] px-gutter max-md:pb-[56px]">
        <p className="m-0 mb-[18px] text-[13px] font-semibold tracking-[.14em] uppercase text-rust">The loop</p>
        <div className="grid grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr] gap-[12px] items-center max-lg:grid-cols-1 max-lg:justify-items-stretch">
          <span className="flex flex-col gap-[6px] px-[20px] py-[18px] bg-ink border border-ink rounded-10 text-white">
            <span className="text-[12px] font-bold tracking-[.12em] uppercase text-tint-line-strong">Diagnostics</span>
            <span className="text-[16px] font-semibold">names the field</span>
          </span>
          <ArrowRightGlyph size={22} stroke="#A0431A" />
          <Link
            className="flex flex-col gap-[6px] px-[20px] py-[18px] bg-white border border-line rounded-10 text-ink"
            href="/platform/rules-engine"
          >
            <span className="text-[12px] font-bold tracking-[.12em] uppercase text-faint">Rules Engine</span>
            <span className="text-[16px] font-semibold">fixes it</span>
          </Link>
          <ArrowRightGlyph size={22} stroke="#A0431A" />
          <Link
            className="flex flex-col gap-[6px] px-[20px] py-[18px] bg-white border border-line rounded-10 text-ink"
            href="/platform/feed-management"
          >
            <span className="text-[12px] font-bold tracking-[.12em] uppercase text-faint">Feed Management</span>
            <span className="text-[16px] font-semibold">republishes it</span>
          </Link>
          <ArrowRightGlyph size={22} stroke="#A0431A" />
          <Link
            className="flex flex-col gap-[6px] px-[20px] py-[18px] bg-white border border-line rounded-10 text-ink"
            href="/platform/conversion-intelligence"
          >
            <span className="text-[12px] font-bold tracking-[.12em] uppercase text-faint">Conversion Intelligence</span>
            <span className="text-[16px] font-semibold">says whether it mattered</span>
          </Link>
        </div>
      </section>

      <PreFooterCta />

      <SiteFooter current="Diagnostics" />
    </>
  );
}
