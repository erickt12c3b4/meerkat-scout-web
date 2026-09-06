import Link from "next/link";
import { XCircle } from "lucide-react";
import { ArrowRightGlyph, LockGlyph } from "@/components/brand-icons";
import { SiteHeader } from "@/components/site/site-header";
import { PreFooterCta } from "@/components/site/pre-footer-cta";
import { SiteFooter } from "@/components/site/site-footer";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Rules Engine — Rules run top to bottom",
  description: "Ordered transformations per feed — set, prepend, append, replace, exclude — with optional match conditions. Order is meaning: for the same field, a later rule wins.",
};

// Source: Rules-Engine.dc.html -> /platform/rules-engine
export default function RulesEnginePage() {
  return (
    <>
      <SiteHeader active="platform" />

      {/* Rules hero */}
      <section className="bg-paper pt-[84px] pb-[64px] px-gutter flex flex-col items-center text-center max-md:pt-[56px] max-md:pb-[48px]">
        <p className="m-0 mb-[22px] text-[13px] font-semibold tracking-[.14em] uppercase text-rust">
          Platform · Rules engine
        </p>
        <h1 className="m-0 text-[57px] leading-[1.08] font-extrabold tracking-[-.035em] max-w-[820px] text-pretty max-xl:text-[length:clamp(36px,4.45vw,57px)]">
          Rules run top to bottom. What comes out is the feed.
        </h1>
        <p className="m-0 mt-[28px] text-[17.5px] leading-[1.55] text-body max-w-[620px] text-pretty max-md:text-[16px]">
          Ordered transformations per feed — set, prepend, append, replace, exclude — with optional match conditions.
          Order is meaning: for the same field, a later rule wins. Watch one product fall through the stack.
        </p>
      </section>

      {/* The drop */}
      <section className="bg-paper pt-0 pb-[96px] px-gutter max-md:pb-[56px]" id="drop">
        <div className="relative bg-night rounded-16 p-[60px] pt-[56px] overflow-hidden">
          <div
            className="absolute left-1/2 top-0 w-[2px] h-full bg-[linear-gradient(180deg,transparent,#3a2a20_12%,#3a2a20_88%,transparent)] [transform:translateX(-1px)]"
            aria-hidden="true"
          ></div>
          <div className="relative z-[2] grid grid-cols-[1fr_1fr] gap-[80px] mb-[34px] max-lg:grid-cols-1">
            <div className="flex flex-col gap-[6px] text-[12px] font-bold tracking-[.12em] uppercase text-faint">
              <span>Entering — as mirrored from Shopify</span>
            </div>
            <div className="flex flex-col gap-[6px] text-[12px] font-bold tracking-[.12em] uppercase text-faint text-right">
              <span>Exiting — into the Google Shopping feed</span>
            </div>
          </div>
          <div className="relative z-[2] flex justify-center mb-[26px]">
            <div className="box-content w-[560px] bg-night-card border border-night-line rounded-10 px-[22px] py-[18px] max-md:w-full max-w-full">
              <div className="flex items-center justify-between mb-[12px]">
                <span className="text-[12px] font-bold tracking-[.12em] uppercase text-faint">Product</span>
                <code className="font-mono text-[12px] text-faint">NL-CS2-BLK-10</code>
              </div>
              <dl className="m-0 grid grid-cols-[200px_1fr] gap-y-[8px] gap-x-[16px] text-[14px] font-mono">
                <dt className="text-faint">title</dt>
                <dd className="m-0 text-[#EDEAE6]">Court Shoe 2</dd>
                <dt className="text-faint">vendor</dt>
                <dd className="m-0 text-[#EDEAE6]">Northline</dd>
                <dt className="text-faint">product_type</dt>
                <dd className="m-0 text-[#EDEAE6]">Footwear</dd>
                <dt className="text-faint">variant.option1</dt>
                <dd className="m-0 text-[#EDEAE6]">Black</dd>
                <dt className="text-faint">price</dt>
                <dd className="m-0 text-[#EDEAE6]">129.00</dd>
                <dt className="text-faint">google_product_category</dt>
                <dd className="m-0 text-footer-dot">— empty</dd>
                <dt className="text-faint">custom_label_0</dt>
                <dd className="m-0 text-footer-dot">— empty</dd>
                <dt className="text-faint">metafields.season</dt>
                <dd className="m-0 text-footer-dot">— empty</dd>
              </dl>
            </div>
          </div>
          <div className="relative z-[2] grid grid-cols-[1fr_560px_1fr] gap-[26px] items-center px-0 py-[14px] max-lg:grid-cols-1">
            <div className="flex flex-col gap-[4px] text-right font-mono text-[13.5px]">
              <span className="text-faint">title</span>
              <span className="text-night-muted-2">Court Shoe 2</span>
            </div>
            <div className="bg-night-card border border-night-line rounded-10 px-[20px] py-[16px] grid grid-cols-[34px_1fr_auto] gap-[14px] items-center max-lg:grid-cols-1">
              <span className="box-content flex items-center justify-center w-[34px] h-[34px] rounded-8 bg-night-line-3 border border-night-line text-[13px] font-bold text-night-text">
                1
              </span>
              <div className="flex flex-col gap-[4px]">
                <span className="text-[15px] text-white">
                  <span className="inline-block text-[11px] font-bold tracking-[.1em] uppercase text-rust-bright mr-[8px]">
                    Prepend
                  </span>
                  title
                </span>
                <code className="font-mono text-[13px] text-night-muted-2">
                  &quot;&#123;&#123; product.vendor &#125;&#125; &quot;
                </code>
              </div>
              <span className="text-[11.5px] text-faint">always</span>
            </div>
            <div className="flex flex-col gap-[4px] font-mono text-[13.5px]">
              <span className="text-faint">title</span>
              <span className="text-white">
                <span className="text-amber">Northline</span>Court Shoe 2
              </span>
            </div>
          </div>
          <div className="relative z-[2] grid grid-cols-[1fr_560px_1fr] gap-[26px] items-center px-0 py-[14px] max-lg:grid-cols-1">
            <div className="flex flex-col gap-[4px] text-right font-mono text-[13.5px]">
              <span className="text-faint">google_product_category</span>
              <span className="text-footer-dot">— empty</span>
            </div>
            <div className="bg-night-card border border-night-line rounded-10 px-[20px] py-[16px] grid grid-cols-[34px_1fr_auto] gap-[14px] items-center max-lg:grid-cols-1">
              <span className="box-content flex items-center justify-center w-[34px] h-[34px] rounded-8 bg-night-line-3 border border-night-line text-[13px] font-bold text-night-text">
                2
              </span>
              <div className="flex flex-col gap-[4px]">
                <span className="text-[15px] text-white">
                  <span className="inline-block text-[11px] font-bold tracking-[.1em] uppercase text-rust-bright mr-[8px]">
                    Set
                  </span>
                  google_product_category
                </span>
                <code className="font-mono text-[13px] text-night-muted-2">
                  &quot;Apparel &amp; Accessories &gt; Shoes&quot;
                </code>
              </div>
              <span className="text-[11.5px] text-faint text-right">
                when product_type
                <br />= Footwear
              </span>
            </div>
            <div className="flex flex-col gap-[4px] font-mono text-[13.5px]">
              <span className="text-faint">google_product_category</span>
              <span className="text-amber">Apparel &amp; Accessories &gt; Shoes</span>
            </div>
          </div>
          <div className="relative z-[2] grid grid-cols-[1fr_560px_1fr] gap-[26px] items-center px-0 py-[14px] max-lg:grid-cols-1">
            <div className="flex flex-col gap-[4px] text-right font-mono text-[13.5px]">
              <span className="text-faint">title</span>
              <span className="text-night-muted-2">Northline Court Shoe 2</span>
            </div>
            <div className="bg-night-card border border-night-line rounded-10 px-[20px] py-[16px] grid grid-cols-[34px_1fr_auto] gap-[14px] items-center max-lg:grid-cols-1">
              <span className="box-content flex items-center justify-center w-[34px] h-[34px] rounded-8 bg-night-line-3 border border-night-line text-[13px] font-bold text-night-text">
                3
              </span>
              <div className="flex flex-col gap-[4px]">
                <span className="text-[15px] text-white">
                  <span className="inline-block text-[11px] font-bold tracking-[.1em] uppercase text-rust-bright mr-[8px]">
                    Append
                  </span>
                  title
                </span>
                <code className="font-mono text-[13px] text-night-muted-2">
                  &quot; — &#123;&#123; variant.option1 &#125;&#125;&quot;
                </code>
              </div>
              <span className="text-[11.5px] text-faint">always</span>
            </div>
            <div className="flex flex-col gap-[4px] font-mono text-[13.5px]">
              <span className="text-faint">title</span>
              <span className="text-white">
                Northline Court Shoe 2<span className="text-amber">— Black</span>
              </span>
            </div>
          </div>
          <div className="relative z-[2] grid grid-cols-[1fr_560px_1fr] gap-[26px] items-center px-0 py-[14px] max-lg:grid-cols-1">
            <div className="flex flex-col gap-[4px] text-right font-mono text-[13.5px]">
              <span className="text-faint">title</span>
              <span className="text-night-muted-2 line-through decoration-curve">Northline Court Shoe 2 — Black</span>
            </div>
            <div className="relative bg-[#111010] border border-dashed border-footer-edge rounded-10 px-[20px] py-[16px] grid grid-cols-[34px_1fr_auto] gap-[14px] items-center max-lg:grid-cols-1">
              <span className="box-content flex items-center justify-center w-[34px] h-[34px] rounded-8 bg-night-line-3 border border-night-line text-[13px] font-bold text-faint">
                4
              </span>
              <div className="flex flex-col gap-[4px]">
                <span className="text-[15px] text-night-text">
                  <span className="inline-block text-[11px] font-bold tracking-[.1em] uppercase text-rust-bright mr-[8px]">
                    Set
                  </span>
                  title
                </span>
                <code className="font-mono text-[13px] text-faint">
                  &quot;Northline Court Shoe 2 — Men&#39;s Black Tennis Shoe&quot;
                </code>
              </div>
              <span className="inline-flex items-center gap-[6px] text-[11.5px] text-faint">
                <LockGlyph size={13} />
                system · read-only
              </span>
              <span className="absolute right-[20px] -top-[11px] text-[10.5px] font-bold tracking-[.1em] uppercase text-night-text bg-night-line rounded-[4px] px-[8px] py-[3px]">
                From an accepted recommendation
              </span>
            </div>
            <div className="flex flex-col gap-[4px] font-mono text-[13.5px]">
              <span className="text-faint">title</span>
              <span className="text-amber">Northline Court Shoe 2 — Men&#39;s Black Tennis Shoe</span>
              <span className="mt-[4px] font-sans text-[12px] text-faint">
                Later rule, same field — rule 4 wins over 1 and 3.
              </span>
            </div>
          </div>
          <div className="relative z-[2] grid grid-cols-[1fr_560px_1fr] gap-[26px] items-center px-0 py-[14px] max-lg:grid-cols-1">
            <div className="flex flex-col gap-[4px] text-right font-mono text-[13.5px]">
              <span className="text-faint">custom_label_0</span>
              <span className="text-footer-dot">— empty</span>
            </div>
            <div className="bg-night-card border border-[#6A4A1E] rounded-10 px-[20px] py-[16px] grid grid-cols-[34px_1fr_auto] gap-[14px] items-center max-lg:grid-cols-1">
              <span className="box-content flex items-center justify-center w-[34px] h-[34px] rounded-8 bg-night-line-3 border border-night-line text-[13px] font-bold text-night-text">
                5
              </span>
              <div className="flex flex-col gap-[4px]">
                <span className="text-[15px] text-white">
                  <span className="inline-block text-[11px] font-bold tracking-[.1em] uppercase text-rust-bright mr-[8px]">
                    Set
                  </span>
                  custom_label_0
                </span>
                <code className="font-mono text-[13px] text-night-muted-2">
                  &quot;&#123;&#123; product.metafields.season &#125;&#125;&quot;
                </code>
              </div>
              <span className="text-[11.5px] text-faint">always</span>
            </div>
            <div className="flex flex-col gap-[4px] font-mono text-[13.5px]">
              <span className="text-faint">custom_label_0</span>
              <span className="text-footer-dot">— unchanged</span>
              <span className="mt-[4px] inline-flex items-center gap-[6px] font-sans text-[12px] text-[#E5B15A]">
                <svg
                  width="13"
                  height="13"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#E5B15A"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m21.7 18-8-14a2 2 0 0 0-3.4 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.7-3"></path>
                  <path d="M12 9v4"></path>
                  <path d="M12 17h.01"></path>
                </svg>
                Warning: metafields.season is empty for this product — rule skipped, not failed.
              </span>
            </div>
          </div>
          <div className="relative z-[2] flex justify-center mt-[26px]">
            <div className="box-content w-[560px] bg-white border border-line rounded-10 px-[22px] py-[18px] shadow-float max-md:w-full max-w-full">
              <div className="flex items-center justify-between mb-[12px]">
                <span className="text-[12px] font-bold tracking-[.12em] uppercase text-faint">Feed item</span>
                <span className="text-[12px] font-semibold text-ok-text">5 rules · 4 applied · 1 warning</span>
              </div>
              <dl className="m-0 grid grid-cols-[200px_1fr] gap-y-[8px] gap-x-[16px] text-[14px] font-mono">
                <dt className="text-faint">title</dt>
                <dd className="m-0 text-rust font-semibold">
                  Northline Court Shoe 2 — Men&#39;s Black Tennis Shoe
                </dd>
                <dt className="text-faint">brand</dt>
                <dd className="m-0 text-ink">Northline</dd>
                <dt className="text-faint">google_product_category</dt>
                <dd className="m-0 text-rust font-semibold">Apparel &amp; Accessories &gt; Shoes</dd>
                <dt className="text-faint">color</dt>
                <dd className="m-0 text-ink">Black</dd>
                <dt className="text-faint">price</dt>
                <dd className="m-0 text-ink">129.00 USD</dd>
                <dt className="text-faint">custom_label_0</dt>
                <dd className="m-0 text-faint">— empty (warning)</dd>
              </dl>
            </div>
          </div>
          <p className="relative z-[2] mt-[34px] mb-0 mx-auto max-w-[640px] text-center text-[15px] leading-[1.6] text-faint">
            Rust marks every field a rule changed. Your Shopify product is untouched — the transformation lives only in
            the feed.
          </p>
        </div>
      </section>

      {/* Grammar */}
      <section className="bg-paper pt-0 pb-[96px] px-gutter max-md:pb-[56px]">
        <div className="grid grid-cols-[480px_1fr] gap-[60px] items-end mb-[44px] max-lg:grid-cols-1">
          <div>
            <p className="m-0 mb-[20px] text-[13px] font-semibold tracking-[.14em] uppercase text-rust">The grammar</p>
            <h2 className="m-0 text-[46px] leading-[1.04] font-extrabold tracking-[-.038em] text-pretty max-xl:text-[length:clamp(30px,3.59vw,46px)]">
              Five verbs. Any field. An optional condition.
            </h2>
          </div>
          <p className="m-0 text-[17.5px] leading-[1.55] text-body max-w-[560px] text-pretty max-md:text-[16px]">
            Template variables can reference any product, variant, or metafield value. A condition limits the rule to
            products that match; without one, the rule runs on everything in the feed.
          </p>
        </div>
        <div className="grid grid-cols-[1.4fr_1fr] gap-[18px] items-start max-lg:grid-cols-1">
          <div className="bg-white border border-line rounded-10 overflow-hidden">
            <div className="grid grid-cols-[120px_1fr_1.3fr] gap-[16px] px-[22px] py-[12px] bg-paper-warm border-b border-b-line text-[11.5px] font-bold tracking-[.12em] uppercase text-faint max-lg:grid-cols-1">
              <span>Verb</span>
              <span>Does</span>
              <span>Example</span>
            </div>
            <div className="grid grid-cols-[120px_1fr_1.3fr] gap-[16px] px-[22px] py-[15px] border-b border-b-line text-[14.5px] text-nav items-center max-lg:grid-cols-1">
              <strong className="text-rust font-bold">Set</strong>
              <span>Replaces the whole value.</span>
              <code className="font-mono text-[12.5px] text-ink">condition = &quot;new&quot;</code>
            </div>
            <div className="grid grid-cols-[120px_1fr_1.3fr] gap-[16px] px-[22px] py-[15px] border-b border-b-line text-[14.5px] text-nav items-center max-lg:grid-cols-1">
              <strong className="text-rust font-bold">Prepend</strong>
              <span>Adds to the front.</span>
              <code className="font-mono text-[12.5px] text-ink">
                title ← &quot;&#123;&#123; product.vendor &#125;&#125; &quot;
              </code>
            </div>
            <div className="grid grid-cols-[120px_1fr_1.3fr] gap-[16px] px-[22px] py-[15px] border-b border-b-line text-[14.5px] text-nav items-center max-lg:grid-cols-1">
              <strong className="text-rust font-bold">Append</strong>
              <span>Adds to the end.</span>
              <code className="font-mono text-[12.5px] text-ink">
                title → &quot; — &#123;&#123; variant.option1 &#125;&#125;&quot;
              </code>
            </div>
            <div className="grid grid-cols-[120px_1fr_1.3fr] gap-[16px] px-[22px] py-[15px] border-b border-b-line text-[14.5px] text-nav items-center max-lg:grid-cols-1">
              <strong className="text-rust font-bold">Replace</strong>
              <span>Swaps a match inside the value.</span>
              <code className="font-mono text-[12.5px] text-ink">
                description: &quot;Free shipping!&quot; → &quot;&quot;
              </code>
            </div>
            <div className="grid grid-cols-[120px_1fr_1.3fr] gap-[16px] px-[22px] py-[15px] text-[14.5px] text-nav items-center max-lg:grid-cols-1">
              <strong className="text-rust font-bold">Exclude</strong>
              <span>Drops the product from this feed.</span>
              <code className="font-mono text-[12.5px] text-ink">when inventory_quantity = 0</code>
            </div>
          </div>
          <div className="flex flex-col gap-[18px]">
            <div className="bg-white border border-line rounded-10 px-[24px] py-[22px]">
              <p className="m-0 mb-[10px] text-[12px] font-bold tracking-[.12em] uppercase text-faint">
                Template variables
              </p>
              <div className="flex flex-wrap gap-[8px]">
                <code className="font-mono text-[12.5px] text-ink bg-paper border border-line-strong rounded-6 px-[9px] py-[5px]">
                  &#123;&#123; product.title &#125;&#125;
                </code>
                <code className="font-mono text-[12.5px] text-ink bg-paper border border-line-strong rounded-6 px-[9px] py-[5px]">
                  &#123;&#123; product.vendor &#125;&#125;
                </code>
                <code className="font-mono text-[12.5px] text-ink bg-paper border border-line-strong rounded-6 px-[9px] py-[5px]">
                  &#123;&#123; variant.sku &#125;&#125;
                </code>
                <code className="font-mono text-[12.5px] text-ink bg-paper border border-line-strong rounded-6 px-[9px] py-[5px]">
                  &#123;&#123; variant.option1 &#125;&#125;
                </code>
                <code className="font-mono text-[12.5px] text-ink bg-paper border border-line-strong rounded-6 px-[9px] py-[5px]">
                  &#123;&#123; variant.price &#125;&#125;
                </code>
                <code className="font-mono text-[12.5px] text-ink bg-paper border border-line-strong rounded-6 px-[9px] py-[5px]">
                  &#123;&#123; product.metafields.* &#125;&#125;
                </code>
              </div>
              <p className="m-0 mt-[14px] text-[14px] leading-[1.55] text-body">
                An empty variable produces a warning on that product and leaves the field as it was. Never a blank field
                shipped silently.
              </p>
            </div>
            <div className="bg-white border border-line rounded-10 px-[24px] py-[22px]">
              <p className="m-0 mb-[10px] text-[12px] font-bold tracking-[.12em] uppercase text-faint">
                Starter templates
              </p>
              <div className="flex flex-wrap gap-[8px] max-md:flex-wrap">
                <span className="text-[13.5px] font-semibold text-ink border border-line-strong rounded-full px-[12px] py-[6px]">
                  Google Shopping
                </span>
                <span className="text-[13.5px] font-semibold text-ink border border-line-strong rounded-full px-[12px] py-[6px]">
                  Meta
                </span>
                <span className="text-[13.5px] font-semibold text-ink border border-line-strong rounded-full px-[12px] py-[6px]">
                  Amazon
                </span>
                <span className="text-[13.5px] font-semibold text-ink border border-line-strong rounded-full px-[12px] py-[6px]">
                  TikTok
                </span>
                <span className="text-[13.5px] font-semibold text-ink border border-line-strong rounded-full px-[12px] py-[6px]">
                  Pinterest
                </span>
                <span className="text-[13.5px] font-semibold text-dim border border-line-strong rounded-full px-[12px] py-[6px]">
                  +5
                </span>
              </div>
              <p className="m-0 mt-[14px] text-[14px] leading-[1.55] text-body">
                Each channel&#39;s required fields, pre-mapped from Shopify. Edit, reorder, or delete any rule — a
                template is a starting point, not a lock.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CSV */}
      <section className="bg-paper pt-0 pb-[96px] px-gutter max-md:pb-[56px]">
        <div className="grid grid-cols-[1fr_1fr] gap-[60px] items-center max-lg:grid-cols-1">
          <div>
            <p className="m-0 mb-[20px] text-[13px] font-semibold tracking-[.14em] uppercase text-rust">
              Import and export
            </p>
            <h2 className="m-0 text-[46px] leading-[1.04] font-extrabold tracking-[-.038em] text-pretty max-xl:text-[length:clamp(30px,3.59vw,46px)]">
              One bad row applies nothing.
            </h2>
            <p className="m-0 mt-[24px] text-[17.5px] leading-[1.55] text-body max-w-[520px] text-pretty max-md:text-[16px]">
              Export a feed&#39;s rules as CSV, edit them in a spreadsheet, and import them back. Validation is
              all-or-nothing: if any row fails, Scout applies none of them and tells you which row and why. A
              half-applied rule stack is worse than no import at all.
            </p>
          </div>
          <div className="bg-white border border-line rounded-12 shadow-raised overflow-hidden">
            <div className="flex items-center justify-between px-[22px] py-[16px] border-b border-b-line">
              <span className="inline-flex items-center gap-[10px] text-[15px] font-semibold">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#171514"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                  <path d="M14 2v6h6"></path>
                </svg>
                google-shopping-rules.csv
              </span>
              <span className="text-[13px] text-faint">42 rows</span>
            </div>
            <div className="px-[22px] py-[18px] flex flex-col gap-[10px] font-mono text-[12.5px] text-body">
              <div className="grid grid-cols-[40px_1fr] gap-[12px] max-lg:grid-cols-1">
                <span className="text-faint">15</span>
                <span>
                  append,title,&quot; — &#123;&#123; variant.option1 &#125;&#125;&quot;,
                </span>
              </div>
              <div className="grid grid-cols-[40px_1fr] gap-[12px] max-lg:grid-cols-1">
                <span className="text-faint">16</span>
                <span>set,condition,new,</span>
              </div>
              <div className="grid grid-cols-[40px_1fr] gap-[12px] bg-badge -mx-[22px] my-0 px-[22px] py-[6px] border-l-[3px] border-l-rust max-lg:grid-cols-1">
                <span className="text-rust font-semibold">17</span>
                <span className="text-ink">
                  <span className="text-rust font-semibold underline decoration-wavy">sett</span>
                  ,custom_label_1,clearance,inventory_quantity &lt; 5
                </span>
              </div>
              <div className="grid grid-cols-[40px_1fr] gap-[12px] max-lg:grid-cols-1">
                <span className="text-faint">18</span>
                <span>exclude,,,inventory_quantity = 0</span>
              </div>
            </div>
            <div className="flex items-center justify-between gap-[16px] px-[22px] py-[16px] border-t border-t-line bg-paper-warm">
              <span className="inline-flex items-center gap-[8px] text-[14px] text-rust font-semibold">
                <XCircle size={15} className="text-rust" />
                Row 17: unknown action &quot;sett&quot;. 0 of 42 rules applied.
              </span>
              <span className="text-[13px] text-faint">Your current rules are unchanged.</span>
            </div>
          </div>
        </div>
      </section>

      {/* The loop */}
      <section className="bg-paper pt-0 pb-[96px] px-gutter max-md:pb-[56px]">
        <p className="m-0 mb-[18px] text-[13px] font-semibold tracking-[.14em] uppercase text-rust">The loop</p>
        <div className="grid grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr] gap-[12px] items-center max-lg:grid-cols-1 max-lg:justify-items-stretch">
          <Link
            className="flex flex-col gap-[6px] px-[20px] py-[18px] bg-white border border-line rounded-10 text-ink"
            href="/platform/diagnostics"
          >
            <span className="text-[12px] font-bold tracking-[.12em] uppercase text-faint">Diagnostics</span>
            <span className="text-[16px] font-semibold">names the field</span>
          </Link>
          <ArrowRightGlyph size={22} stroke="#A0431A" />
          <span className="flex flex-col gap-[6px] px-[20px] py-[18px] bg-ink border border-ink rounded-10 text-white">
            <span className="text-[12px] font-bold tracking-[.12em] uppercase text-tint-line-strong">Rules Engine</span>
            <span className="text-[16px] font-semibold">fixes it</span>
          </span>
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

      <SiteFooter current="Rules-Engine" />
    </>
  );
}
