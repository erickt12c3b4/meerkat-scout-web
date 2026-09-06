import type { ChannelData } from "@/components/channels/channel-page";
import Image from "next/image";
import Link from "next/link";
import { Scaled } from "@/components/site/scaled";
import { RefreshCcw, Shield } from "lucide-react";
import { CheckGlyph, CircleCheckGlyph, ScanGlyph } from "@/components/brand-icons";

// Source: Amazon.dc.html -> /channels/amazon
// Hero and "Distinguishing behavior" are bespoke compositions; the other sections are data for ChannelPage.

function Hero() {
  return (
    <>
      {/* Amazon hero */}
      <section className="relative bg-[#0F1F33] pt-[64px] pb-[72px] px-gutter overflow-hidden max-md:pt-[48px] max-md:pb-[48px]">
        <div
          className="absolute -top-[200px] w-[760px] h-[760px] rounded-full pointer-events-none bg-[#15294A] opacity-60 left-[calc(var(--gutter)-70px+-160px)]"
          aria-hidden="true"
        ></div>
        <div
          className="absolute -bottom-[140px] w-[520px] h-[520px] pointer-events-none bg-[radial-gradient(closest-side,rgba(229,129,58,.28),transparent_72%)] right-[calc(var(--gutter)-70px+-80px)]"
          aria-hidden="true"
        ></div>
        <svg
          aria-hidden="true"
          width="520"
          height="60"
          viewBox="0 0 520 60"
          fill="none"
          className="absolute right-[70px] bottom-[18px] pointer-events-none opacity-90"
        >
          <path d="M8 14c110 46 300 50 484 8" stroke="#FF9900" strokeWidth="7" strokeLinecap="round"></path>
          <path
            d="M470 6l24 15-16 20"
            stroke="#FF9900"
            strokeWidth="7"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
        </svg>
        <div className="relative z-[2] grid grid-cols-[1fr_640px] gap-[56px] items-center max-xl:grid-cols-2 max-lg:grid-cols-1">
          <div>
            <div className="flex items-center gap-[14px] m-0 mb-[22px]">
              <span className="inline-flex items-center justify-center w-[44px] h-[44px] rounded-10 bg-white flex-none">
                <span
                  className="inline-flex flex-col items-center justify-center w-[26px] h-[26px] flex-none"
                  aria-hidden="true"
                >
                  <span className="text-[21px] font-bold text-[#18181B] leading-[.8]">a</span>
                  <svg width="24" height="8" viewBox="0 0 24 8" fill="none">
                    <path
                      d="M2 2.2c5.5 3.6 13 3.9 19.2 1"
                      stroke="#FF9900"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                    ></path>
                    <path
                      d="M18.6 1.3l3.6 1.4-2.3 2.6"
                      stroke="#FF9900"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </span>
              </span>
              <p className="m-0 text-[13px] font-semibold tracking-[.14em] uppercase text-[#FF9900]">
                Channels · Amazon
              </p>
            </div>
            <h1 className="m-0 text-[50px] leading-[1.08] font-extrabold tracking-[-.035em] text-white text-pretty max-xl:text-[length:clamp(36px,3.91vw,50px)]">
              Not a feed. A catalog with its own schema for every product type — and Scout reads that schema live.
            </h1>
            <p className="m-0 mt-[28px] text-[17.5px] leading-[1.55] text-[#B8C0CC] text-pretty max-md:text-[16px]">
              Amazon doesn&#39;t take your product data as-is. It asks what type of thing you&#39;re selling, then
              requires the attributes that type demands — which differ by type and change over time. Scout resolves the
              type, reads the current requirements, validates against them, and only then submits.
            </p>
            <div className="flex gap-[36px] mt-[36px] text-[14px] max-xl:flex-wrap max-xl:gap-[16px]">
              <div className="flex flex-col gap-[4px] flex-none">
                <span className="text-[12px] font-bold tracking-[.12em] uppercase text-[#8A94A3]">Type</span>
                <span className="inline-flex items-center gap-[6px] text-[12px] font-bold tracking-[.1em] uppercase text-white bg-rust-button rounded-[4px] px-[9px] py-[5px]">
                  Marketplace
                </span>
              </div>
              <div className="flex flex-col gap-[4px] flex-none whitespace-nowrap">
                <span className="text-[12px] font-bold tracking-[.12em] uppercase text-[#8A94A3]">Connects via</span>
                <span className="text-white font-medium">Seller Central authorization (SP-API)</span>
              </div>
              <div className="flex flex-col gap-[4px] flex-1 min-w-0">
                <span className="text-[12px] font-bold tracking-[.12em] uppercase text-[#8A94A3]">Who sells here</span>
                <span className="text-white font-medium leading-[1.4]">
                  Merchants listing on Amazon who are tired of rejections that don&#39;t say which of thirty attributes
                  was wrong.
                </span>
              </div>
            </div>
            <p className="m-0 mt-[34px] text-[15px] leading-[1.55] text-[#8A94A3]">
              A feed channel takes your catalog as you send it. A marketplace makes you conform to its own. That
              difference is why this page — and Scout&#39;s work here — looks different from the feed channels.{" "}
              <Link className="text-[#FF9900]" href="/channels#marketplaces">
                How Scout handles marketplaces →
              </Link>
            </p>
          </div>

          {/* COMPOSITION 640 x 660 */}
          <Scaled width={640} height={660} className="flex-none" aria-hidden="true">
            <div className="absolute left-0 top-0 w-[640px] h-[610px] flex flex-col bg-white rounded-16 shadow-[0_30px_70px_rgba(2,10,30,.45)] overflow-hidden">
              <div className="flex items-center gap-[20px] h-[68px] px-[24px] py-0 flex-none">
                <span className="inline-flex flex-col items-start leading-[.9]" aria-hidden="true">
                  <span className="text-[24px] font-bold tracking-[-.04em] text-[#18181B]">amazon</span>
                  <svg width="80" height="10" viewBox="0 0 80 10" fill="none" className="-mt-[2px]">
                    <path d="M3 2.5c18 8 44 8.5 68 2" stroke="#FF9900" strokeWidth="2.2" strokeLinecap="round"></path>
                    <path
                      d="M66 1.4l5.4 2.6-3.6 4.4"
                      stroke="#FF9900"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </span>
                <span className="text-[15.5px] font-semibold text-ink">Catalog requirements</span>
                <span className="ml-auto inline-flex items-center gap-[8px] text-[13.5px] text-nav">
                  <span className="w-[8px] h-[8px] rounded-full bg-[#2E9E4F]"></span>Live schema
                </span>
              </div>
              <div className="flex gap-[28px] px-[24px] py-0 border-b border-b-[#E8E4DE] text-[14px] font-medium text-[#5F5B55] flex-none">
                <span className="inline-flex items-center gap-[8px] pt-[8px] pb-[14px] px-0 text-ink font-semibold border-b-[3px] border-b-[#FF9900] -mb-[1px]">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M4 10a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2Z"></path>
                    <path d="M9 6V4a3 3 0 0 1 6 0v2M8 21v-5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v5"></path>
                  </svg>
                  Backpacks
                </span>
                <span className="inline-flex items-center gap-[8px] pt-[8px] pb-[14px] px-0">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M4 16v-2.38C4 11.5 2.97 10.5 3 8c.03-2.72 1.49-6 4.5-6C9.37 2 10 3.8 10 5.5c0 3.11-2 5.66-2 8.68V16a2 2 0 1 1-4 0Z"></path>
                    <path d="M20 20v-2.38c0-2.12 1.03-3.12 1-5.62-.03-2.72-1.49-6-4.5-6C14.63 6 14 7.8 14 9.5c0 3.11 2 5.66 2 8.68V20a2 2 0 1 0 4 0Z"></path>
                  </svg>
                  Footwear
                </span>
                <span className="inline-flex items-center gap-[8px] pt-[8px] pb-[14px] px-0">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path>
                    <path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                  </svg>
                  Home
                </span>
              </div>
              <div className="box-content grid grid-cols-[230px_1fr] gap-[22px] pt-[22px] pb-[20px] px-[24px] flex-1 min-h-0">
                <div className="flex flex-col bg-[#FCF2E4] rounded-12 p-[12px]">
                  <Image
                    src="/assets/amz-backpack.png"
                    width={560}
                    height={560}
                    alt=""
                    sizes="(max-width: 768px) 50vw, 240px"
                    className="block w-full h-auto aspect-square object-cover rounded-8 max-w-none"
                  />
                  <span className="text-[11.5px] text-faint mt-[10px]">Example product</span>
                  <span className="text-[14.5px] font-semibold text-ink mt-[2px]">Canvas backpack</span>
                  <span className="flex flex-wrap gap-[6px] mt-[10px]">
                    <span className="flex flex-col gap-[2px] bg-white rounded-6 px-[8px] py-[6px]">
                      <span className="text-[9.5px] text-faint">Type</span>
                      <span className="text-[10.5px] font-semibold text-ink">Backpack</span>
                    </span>
                    <span className="flex flex-col gap-[2px] bg-white rounded-6 px-[8px] py-[6px]">
                      <span className="text-[9.5px] text-faint">ASIN</span>
                      <span className="text-[10.5px] font-semibold text-ink">B0EXAMPLE</span>
                    </span>
                    <span className="flex flex-col gap-[2px] bg-white rounded-6 px-[8px] py-[6px]">
                      <span className="text-[9.5px] text-faint">Category</span>
                      <span className="text-[10.5px] font-semibold text-ink">Luggage &amp; Bags</span>
                    </span>
                  </span>
                </div>
                <div className="flex flex-col border-l border-l-[#E8E4DE] pl-[22px]">
                  <span className="text-[15.5px] font-semibold text-ink mb-[10px]">Current requirements</span>
                  <span className="flex flex-col border border-[#E8E4DE] rounded-8 overflow-hidden">
                    <span className="box-content grid grid-cols-[120px_1fr_20px] items-center h-[52px] px-[14px] py-0 border-b border-b-[#E8E4DE] text-[14px]">
                      <span className="font-semibold text-ink">Brand</span>
                      <span className="text-[#5F5B55]">Text (1–100 chars)</span>
                      <CircleCheckGlyph size={20} />
                    </span>
                    <span className="box-content grid grid-cols-[120px_1fr_20px] items-center h-[52px] px-[14px] py-0 bg-badge border border-[#F3C892] rounded-8 text-[14px]">
                      <span className="font-semibold text-ink">Material</span>
                      <span className="text-[#5F5B55]">Text (1–50 chars)</span>
                      <ScanGlyph size={20} stroke="#E5813A" strokeWidth="1.7" />
                    </span>
                    <span className="box-content grid grid-cols-[120px_1fr_20px] items-center h-[52px] px-[14px] py-0 border-b border-b-[#E8E4DE] text-[14px]">
                      <span className="font-semibold text-ink">Color</span>
                      <span className="text-[#5F5B55]">Text (1–30 chars)</span>
                      <CircleCheckGlyph size={20} />
                    </span>
                    <span className="grid grid-cols-[120px_1fr_20px] items-center h-[52px] px-[14px] py-0 text-[14px]">
                      <span className="font-semibold text-ink">Capacity</span>
                      <span className="text-[#5F5B55]">Text (1–20 chars)</span>
                      <CircleCheckGlyph size={20} />
                    </span>
                  </span>
                  <span className="inline-flex items-center gap-[7px] mt-[12px] text-[12px] text-[#5F5B55]">
                    <Shield size={14} strokeWidth={1.6} className="text-[#5F5B55]" />
                    Requirements vary by type and change over time.
                  </span>
                </div>
              </div>
              <div className="flex items-start justify-end pt-[12px] pb-[18px] pr-[24px] pl-[200px] border-t border-t-[#E8E4DE] flex-none">
                <span className="flex flex-col items-center gap-[8px] flex-none w-[110px]">
                  <span className="w-[30px] h-[30px] rounded-full flex items-center justify-center bg-amber text-[13px] font-bold text-white">
                    <CheckGlyph size={16} />
                  </span>
                  <span className="text-[12.5px] font-semibold text-ink leading-[1.2]">Resolve type</span>
                  <span className="text-[11.5px] text-faint -mt-[4px]">Backpack</span>
                </span>
                <span className="flex-1 h-[2px] bg-amber mt-[14px]"></span>
                <span className="flex flex-col items-center gap-[8px] flex-none w-[110px]">
                  <span className="w-[30px] h-[30px] rounded-full flex items-center justify-center bg-amber text-[13px] font-bold text-white">
                    <CheckGlyph size={16} />
                  </span>
                  <span className="text-[12.5px] font-semibold text-ink leading-[1.2]">Read schema</span>
                  <span className="text-[11.5px] text-faint -mt-[4px]">Live schema</span>
                </span>
                <span className="flex-1 h-[2px] bg-amber mt-[14px]"></span>
                <span className="flex flex-col items-center gap-[8px] flex-none w-[110px]">
                  <span className="w-[30px] h-[30px] rounded-full flex items-center justify-center bg-amber text-[13px] font-bold text-white">
                    <CheckGlyph size={16} />
                  </span>
                  <span className="text-[12.5px] font-semibold text-ink leading-[1.2]">Validate</span>
                  <span className="text-[11.5px] text-faint -mt-[4px]">All required fields</span>
                </span>
                <span className="flex-1 h-[2px] bg-amber mt-[14px]"></span>
                <span className="flex flex-col items-center gap-[8px] flex-none w-[110px]">
                  <span className="w-[30px] h-[30px] rounded-full flex items-center justify-center border-[2px] border-amber text-[13px] font-bold text-amber">
                    4
                  </span>
                  <span className="text-[12.5px] font-semibold text-ink leading-[1.2]">Submit</span>
                  <span className="text-[11.5px] text-faint -mt-[4px]">Ready</span>
                </span>
              </div>
            </div>
            <div className="absolute -left-[40px] top-[526px] w-[270px] p-[16px] flex flex-col gap-[12px] bg-white rounded-14 shadow-[0_24px_60px_rgba(2,10,30,.45)]">
              <span className="flex items-center gap-[8px]">
                <span className="block w-[26px] h-[26px] overflow-hidden">
                  <Image
                    src="/assets/img-03.png"
                    width={106}
                    height={26}
                    alt=""
                    className="block h-[26px] w-auto max-w-none"
                  />
                </span>
                <span className="text-[13.5px] font-semibold text-ink">Meerkat Scout</span>
              </span>
              <span className="h-px bg-[#E8E4DE]"></span>
              <span className="flex items-center gap-[10px]">
                <CircleCheckGlyph size={26} />
                <span className="flex flex-col gap-[2px] flex-1">
                  <span className="text-[14px] font-semibold text-ink">Current schema loaded</span>
                  <span className="text-[12px] text-faint">Backpack · Live schema</span>
                </span>
                <span className="box-content w-[32px] h-[32px] rounded-full border border-[#E8E4DE] flex items-center justify-center">
                  <RefreshCcw size={14} strokeWidth={1.8} className="text-[#5F5B55]" />
                </span>
              </span>
            </div>
          </Scaled>
        </div>
      </section>
    </>
  );
}

function Behavior() {
  return (
    <>
      <p className="m-0 mb-[22px] text-[13px] font-semibold tracking-[.14em] uppercase text-rust-bright">
        What makes Amazon different
      </p>
      <h2 className="m-0 mb-[44px] text-[46px] leading-[1.06] font-extrabold tracking-[-.035em] text-white max-w-[860px] text-pretty max-xl:text-[length:clamp(30px,3.59vw,46px)]">
        One product type. Its live required attributes. Your product checked against them, before submission.
      </h2>
      <div className="grid grid-cols-[340px_1fr] gap-[20px] items-start max-lg:grid-cols-1">
        <div className="bg-night-card border border-night-line rounded-10 px-[20px] py-[18px] px-[24px] py-[22px]">
          <span className="text-[11.5px] font-bold tracking-[.12em] uppercase text-faint">Resolved product type</span>
          <p className="m-0 mt-[10px] font-mono text-[22px] text-white">SHOES</p>
          <div className="mt-[10px] flex items-center gap-[8px]">
            <span className="text-[12px] font-bold text-[#7FB58A] bg-[rgba(78,122,87,.18)] rounded-full px-[9px] py-[3px]">
              High confidence
            </span>
          </div>
          <p className="m-0 mt-[12px] text-[13.5px] leading-[1.55] text-night-muted-2">
            <strong className="text-night-text font-semibold">Because:</strong> product_type &quot;Footwear&quot; and a
            Size (US) option match SHOES; the GTIN resolves to an existing ASIN in this type.
          </p>
          <div className="mt-[16px] px-[14px] py-[12px] bg-[#1A1512] border border-night-line rounded-8 text-[13px] text-night-text">
            <span className="flex justify-between">
              <span>Marketplace</span>
              <span className="text-white">Amazon.com</span>
            </span>
            <span className="flex justify-between mt-[6px]">
              <span>GTIN exemption</span>
              <span className="text-white">None on file</span>
            </span>
            <span className="flex justify-between mt-[6px]">
              <span>Schema read</span>
              <span className="font-mono text-[12px] text-night-muted-2">2 h ago</span>
            </span>
          </div>
          <div className="mt-[14px] flex gap-[8px]">
            <span className="inline-flex items-center justify-center min-h-[36px] px-[14px] py-0 rounded-[7px] bg-paper-light text-[13px] font-semibold text-ink">
              Accept
            </span>
            <span className="box-content inline-flex items-center justify-center min-h-[36px] px-[14px] py-0 rounded-[7px] border border-night-line-5 text-[13px] font-semibold text-white">
              Choose another…
            </span>
          </div>
        </div>
        <div className="bg-white border border-line rounded-12 shadow-float overflow-hidden">
          <div className="flex items-center justify-between px-[20px] py-[12px] bg-paper-warm border-b border-b-line">
            <span className="text-[11.5px] font-bold tracking-[.12em] uppercase text-faint">
              Required for SHOES · Amazon.com
            </span>
            <span className="text-[12.5px] text-faint">15 required · 13 present</span>
          </div>
          <div className="pt-[6px] pb-[10px] px-[20px] flex flex-col">
            <div className="grid grid-cols-[20px_1fr_auto] gap-[12px] items-center px-0 py-[8px] border-b border-b-tint text-[14px] max-lg:grid-cols-1">
              <span className="text-ok-text font-bold">✓</span>
              <code className="font-mono text-[13px] text-ink">item_name</code>
              <span className="text-[12.5px] text-faint">from title</span>
            </div>
            <div className="grid grid-cols-[20px_1fr_auto] gap-[12px] items-center px-0 py-[8px] border-b border-b-tint text-[14px] max-lg:grid-cols-1">
              <span className="text-ok-text font-bold">✓</span>
              <code className="font-mono text-[13px] text-ink">brand</code>
              <span className="text-[12.5px] text-faint">from vendor</span>
            </div>
            <div className="grid grid-cols-[20px_1fr_auto] gap-[12px] items-center px-0 py-[8px] border-b border-b-tint text-[14px] max-lg:grid-cols-1">
              <span className="text-ok-text font-bold">✓</span>
              <code className="font-mono text-[13px] text-ink">external_product_id</code>
              <span className="text-[12.5px] text-faint">from barcode · UPC</span>
            </div>
            <div className="grid grid-cols-[20px_1fr_auto] gap-[12px] items-center px-0 py-[8px] border-b border-b-tint text-[14px] bg-[#FFFBF6] -mx-[20px] my-0 pl-[20px] pr-[20px] max-lg:grid-cols-1">
              <span className="text-rust font-bold">✕</span>
              <code className="font-mono text-[13px] text-rust">footwear_size_system</code>
              <Link className="text-[12.5px] font-semibold" href="/platform/rules-engine">
                Set to &quot;US&quot; for this feed →
              </Link>
            </div>
            <div className="grid grid-cols-[20px_1fr_auto] gap-[12px] items-center px-0 py-[8px] border-b border-b-tint text-[14px] bg-[#FFFBF6] -mx-[20px] my-0 pl-[20px] pr-[20px] max-lg:grid-cols-1">
              <span className="text-rust font-bold">✕</span>
              <code className="font-mono text-[13px] text-rust">footwear_age_group</code>
              <Link className="text-[12.5px] font-semibold" href="/platform/rules-engine">
                Set to &quot;adult&quot; when tag ≠ kids →
              </Link>
            </div>
            <div className="grid grid-cols-[20px_1fr_auto] gap-[12px] items-center px-0 py-[8px] border-b border-b-tint text-[14px] max-lg:grid-cols-1">
              <span className="text-ok-text font-bold">✓</span>
              <code className="font-mono text-[13px] text-ink">color</code>
              <span className="text-[12.5px] text-faint">from option1</span>
            </div>
            <div className="grid grid-cols-[20px_1fr_auto] gap-[12px] items-center px-0 py-[8px] border-b border-b-tint text-[14px] max-lg:grid-cols-1">
              <span className="text-ok-text font-bold">✓</span>
              <code className="font-mono text-[13px] text-ink">target_gender</code>
              <span className="text-[12.5px] text-faint">from tag &quot;men&quot;</span>
            </div>
            <div className="grid grid-cols-[20px_1fr_auto] gap-[12px] items-center px-0 py-[8px] border-b border-b-tint text-[14px] max-lg:grid-cols-1">
              <span className="text-ok-text font-bold">✓</span>
              <code className="font-mono text-[13px] text-ink">country_of_origin</code>
              <span className="text-[12.5px] text-faint">from metafield</span>
            </div>
            <div className="grid grid-cols-[20px_1fr_auto] gap-[12px] items-center px-0 py-[8px] border-b border-b-tint text-[14px] max-lg:grid-cols-1">
              <span className="text-ok-text font-bold"></span>
              <code className="font-mono text-[13px] text-ink">+ 7 more present</code>
              <span className="text-[12.5px] text-faint"></span>
            </div>
          </div>
          <div className="flex justify-between px-[20px] py-[12px] border-t border-t-line bg-paper-warm text-[13.5px]">
            <span className="text-rust font-semibold">2 attributes block submission.</span>
            <span className="text-faint">0 submissions spent</span>
          </div>
        </div>
      </div>
    </>
  );
}

export const amazon: ChannelData = {
  slug: "amazon",
  name: "Amazon",
  title: "Amazon — a catalog with its own schema for every product type",
  description: "",
  hero: <Hero />,
  connectBorderTop: false,
  behaviorBorderTop: true,
  steps: [
    {
      title: "Authorize in Seller Central",
      body: "Scout is authorized as a Selling Partner application against your seller account; you approve it from Seller Central.",
    },
    {
      title: "Choose the marketplace",
      body: "Amazon.com, Amazon.co.uk, Amazon.de — each is a separate marketplace with its own requirements.",
    },
    {
      title: "Confirm GTIN policy",
      body: "Scout reads whether your brand has a GTIN exemption and validates identifiers accordingly.",
    },
  ],
  behavior: <Behavior />,
  does: [
    <>
      Resolves each product to an Amazon Product Type Definition with a confidence level and a stated reason, and lets
      you accept or override before anything is submitted.
    </>,
    <>
      Reads the required attributes for that type from Amazon&#39;s live schema and validates every one before spending
      a submission.
    </>,
    <>
      Translates processing-report errors into Scout&#39;s vocabulary and names the attribute, so a rejection becomes a
      field.
    </>,
  ],
  requires: [
    <>A product type per item, from Amazon&#39;s own definitions — &quot;Shoes&quot; is not a type; SHOES is.</>,
    <>Per-type required attributes that can run to dozens, and that differ between Amazon.com and Amazon.de.</>,
    <>A GTIN on every item unless the brand holds a GTIN exemption, which Amazon tracks and Scout reads.</>,
    <>
      Existing-ASIN matching: if the GTIN already exists on Amazon, you&#39;re contributing to that listing, not
      creating one.
    </>,
  ],
  requiresNote: (
    <>
      Scout&#39;s starter template for Amazon pre-maps these from Shopify where a mapping exists, and its diagnostics
      name the field when one is missing.
    </>
  ),
  depends: [
    {
      label: "Marketplace Readiness",
      title: "Live category and attribute resolution",
      href: "/channels#marketplaces",
    },
    {
      label: "Feed Management",
      title: "Scheduling, preflight, publish",
      href: "/platform/feed-management",
    },
    {
      label: "Rules Engine",
      title: "Map and fill required fields",
      href: "/platform/rules-engine",
    },
    {
      label: "Diagnostics",
      title: "Rejections in one vocabulary",
      href: "/platform/diagnostics",
    },
  ],
};
