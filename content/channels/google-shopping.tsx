import type { ChannelData } from "@/components/channels/channel-page";
import Image from "next/image";
import { Scaled } from "@/components/site/scaled";
import { Glyph3, GoogleG, ScanGlyph, SearchGlyph } from "@/components/brand-icons";

// Source: Google-Shopping.dc.html -> /channels/google-shopping
// Hero and "Distinguishing behavior" are bespoke compositions; the other sections are data for ChannelPage.

function Hero() {
  return (
    <>
      {/* Google Shopping hero */}
      <section className="relative bg-paper pt-[64px] pb-[72px] px-gutter overflow-hidden max-md:pt-[48px] max-md:pb-[48px]">
        <div
          className="absolute -top-[140px] w-[600px] h-[600px] rounded-full pointer-events-none bg-[radial-gradient(circle_at_40%_40%,#FFDDA3,#FBD08A_60%,#F7C77A)] left-[calc(var(--gutter)-70px+640px)]"
          aria-hidden="true"
        ></div>
        <div
          className="absolute -bottom-[260px] w-[440px] h-[440px] rounded-full pointer-events-none bg-[#3B6FE3] right-[calc(var(--gutter)-70px+-140px)]"
          aria-hidden="true"
        ></div>
        <div className="relative z-[2] grid grid-cols-[1fr_690px] gap-[40px] items-center max-xl:grid-cols-2 max-lg:grid-cols-1">
          <div>
            <div className="flex items-center gap-[14px] m-0 mb-[22px]">
              <span className="box-content inline-flex items-center justify-center w-[44px] h-[44px] rounded-10 bg-white border border-line flex-none">
                <GoogleG size={26} className="flex-none" />
              </span>
              <p className="m-0 text-[13px] font-semibold tracking-[.14em] uppercase text-rust">
                Channels · Google Shopping
              </p>
            </div>
            <h1 className="m-0 text-[50px] leading-[1.08] font-extrabold tracking-[-.035em] text-ink text-pretty max-xl:text-[length:clamp(36px,3.91vw,50px)]">
              The channel most merchants start with — and the one with the most ways to be disapproved.
            </h1>
            <p className="m-0 mt-[28px] text-[17.5px] leading-[1.55] text-body text-pretty max-md:text-[16px]">
              Google Merchant Center takes your feed, checks every item against its product data specification, and
              decides per product whether it shows. Scout keeps that feed current, translates every disapproval into a
              field, and preflights before each submission.
            </p>
            <div className="flex gap-[36px] mt-[36px] text-[14px] max-xl:flex-wrap max-xl:gap-[16px]">
              <div className="flex flex-col gap-[4px] flex-none">
                <span className="text-[12px] font-bold tracking-[.12em] uppercase text-faint">Type</span>
                <span className="inline-flex items-center gap-[6px] text-[12px] font-bold tracking-[.1em] uppercase text-rust border border-tint-line-strong bg-badge rounded-[4px] px-[9px] py-[5px]">
                  Feed channel
                </span>
              </div>
              <div className="flex flex-col gap-[4px] flex-none">
                <span className="text-[12px] font-bold tracking-[.12em] uppercase text-faint">Connects via</span>
                <span className="text-ink font-medium">OAuth</span>
              </div>
              <div className="flex flex-col gap-[4px] flex-1 min-w-0">
                <span className="text-[12px] font-bold tracking-[.12em] uppercase text-faint">Who sells here</span>
                <span className="text-ink font-medium leading-[1.4]">
                  Any merchant who wants products in Google search results and the Shopping tab.
                </span>
              </div>
            </div>
          </div>

          {/* COMPOSITION 690 x 800 */}
          <Scaled width={690} height={800} className="flex-none" aria-hidden="true">
            <div className="absolute left-0 top-0 w-[690px] pt-[26px] pb-[60px] px-[24px] flex flex-col gap-[16px] bg-white border border-[#E3E8EF] rounded-16 shadow-[0_24px_60px_rgba(30,40,60,.14)]">
              <span className="flex items-center gap-[22px]">
                <span className="inline-flex w-[40px] h-[40px] items-center justify-center">
                  <GoogleG size={40} className="flex-none" />
                </span>
                <span className="box-content flex-1 flex items-center gap-[14px] h-[50px] px-[22px] py-0 border border-[#D9DEE5] rounded-[25px] shadow-[0_2px_8px_rgba(30,40,60,.06)]">
                  <span className="flex-1 text-[16.5px] text-ink">weekend essentials</span>
                  <SearchGlyph size={20} stroke="#5F5B55" />
                  <ScanGlyph size={20} />
                </span>
              </span>
              <span className="flex items-end gap-[26px] pl-[62px] border-b border-b-[#E3E8EF] text-[15px] text-nav">
                <span className="p-[4px] pb-[10px]">All</span>
                <span className="p-[4px] pb-[10px] text-[#1A56DB] font-semibold border-b-[3px] border-b-[#1A56DB] -mb-[1px]">
                  Shopping
                </span>
                <span className="p-[4px] pb-[10px]">Images</span>
                <span className="ml-auto pt-[4px] pb-[10px] px-0 text-[12.5px] text-faint">
                  Illustrative preview · Sample ratings
                </span>
              </span>
              <span className="inline-flex items-center gap-[8px] text-[14.5px] font-medium text-ink">
                Sponsored
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#8A857F"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="M12 16v-4M12 8h.01"></path>
                </svg>
              </span>
              <div className="grid grid-cols-[1fr_1fr_1fr] gap-[14px]">
                <div className="flex flex-col bg-white border border-[#E3E8EF] rounded-10 overflow-hidden">
                  <span className="block h-[196px] bg-[#F8D9B8]">
                    <Image
                      src="/assets/gs-camera.png"
                      width={520}
                      height={520}
                      alt=""
                      sizes="(max-width: 768px) 50vw, 240px"
                      className="block w-full h-full object-cover max-w-none"
                    />
                  </span>
                  <span className="flex flex-col gap-[7px] p-[14px] pb-[16px]">
                    <span className="text-[14.5px] font-medium text-[#1A56DB]">Everyday camera</span>
                    <span className="inline-flex items-center gap-[6px] text-[13px] text-nav">
                      4.8<span className="inline-flex gap-px text-[#F5A623] text-[13px] leading-none">★★★★★</span>
                      <span className="text-faint">(128)</span>
                    </span>
                    <span className="text-[17px] font-bold text-ink">$249.00</span>
                    <span className="text-[13.5px] text-[#5F5B55]">Northline Store</span>
                    <span className="text-[13.5px] text-[#5F5B55]">
                      Free shipping · <span className="text-[#1E7A3A] font-medium">In stock</span>
                    </span>
                  </span>
                </div>
                <div className="flex flex-col bg-white border border-[#E3E8EF] rounded-10 overflow-hidden">
                  <span className="block h-[196px] bg-[#BFD8F2]">
                    <Image
                      src="/assets/gs-daypack.png"
                      width={520}
                      height={520}
                      alt=""
                      sizes="(max-width: 768px) 50vw, 240px"
                      className="block w-full h-full object-cover max-w-none"
                    />
                  </span>
                  <span className="flex flex-col gap-[7px] p-[14px] pb-[16px]">
                    <span className="text-[14.5px] font-medium text-[#1A56DB]">Everyday daypack</span>
                    <span className="inline-flex items-center gap-[6px] text-[13px] text-nav">
                      4.7<span className="inline-flex gap-px text-[#F5A623] text-[13px] leading-none">★★★★★</span>
                      <span className="text-faint">(86)</span>
                    </span>
                    <span className="text-[17px] font-bold text-ink">$89.00</span>
                    <span className="text-[13.5px] text-[#5F5B55]">Northline Store</span>
                    <span className="text-[13.5px] text-[#5F5B55]">Free shipping</span>
                  </span>
                </div>
                <div className="flex flex-col bg-white border border-[#E3E8EF] rounded-10 overflow-hidden">
                  <span className="block h-[196px] bg-[#CFDFC8]">
                    <Image
                      src="/assets/gs-headphones.png"
                      width={520}
                      height={520}
                      alt=""
                      sizes="(max-width: 768px) 50vw, 240px"
                      className="block w-full h-full object-cover max-w-none"
                    />
                  </span>
                  <span className="flex flex-col gap-[7px] p-[14px] pb-[16px]">
                    <span className="text-[14.5px] font-medium text-[#1A56DB]">Wireless headphones</span>
                    <span className="inline-flex items-center gap-[6px] text-[13px] text-nav">
                      4.6<span className="inline-flex gap-px text-[#F5A623] text-[13px] leading-none">★★★★★</span>
                      <span className="text-faint">(214)</span>
                    </span>
                    <span className="text-[17px] font-bold text-ink">$129.00</span>
                    <span className="text-[13.5px] text-[#5F5B55]">Northline Store</span>
                    <span className="text-[13.5px] text-[#5F5B55]">Free shipping</span>
                  </span>
                </div>
              </div>
            </div>
            <div className="absolute -left-[20px] top-[530px] w-[236px] p-[14px] flex flex-col gap-[8px] bg-white border border-[#E3E8EF] rounded-14 shadow-[0_24px_60px_rgba(30,40,60,.16)]">
              <span className="flex items-center gap-[8px] pt-0 pb-[4px] px-[2px]">
                <span className="block w-[24px] h-[24px] overflow-hidden">
                  <Image
                    src="/assets/img-03.png"
                    width={98}
                    height={24}
                    alt=""
                    className="block h-[24px] w-auto max-w-none"
                  />
                </span>
                <span className="text-[13.5px] font-bold text-ink">Scout</span>
                <span className="text-[12px] text-faint">· Field-level checks</span>
              </span>
              <span className="flex flex-col gap-[8px] px-[12px] py-[10px] bg-[#FFF3E6] border border-tint-line-strong rounded-8">
                <span className="flex items-center justify-between">
                  <span className="font-mono text-[12.5px] font-semibold text-ink">price</span>
                  <span className="text-[11px] font-semibold text-white bg-amber rounded-[5px] px-[7px] py-[3px]">
                    Needs review
                  </span>
                </span>
                <span className="flex gap-[10px] text-[12px] text-[#5F5B55]">
                  <span>
                    Feed <strong className="text-ink font-semibold">$229.00</strong>
                  </span>
                  <span>
                    Store <strong className="text-rust-button font-semibold">$249.00</strong>
                  </span>
                </span>
              </span>
              <span className="flex flex-col border border-[#E3E8EF] rounded-8 overflow-hidden">
                <span className="flex items-center justify-between px-[12px] py-[9px] border-b border-b-[#E3E8EF] text-[12px]">
                  <span className="font-mono text-ink">availability</span>
                  <span className="inline-flex items-center gap-[6px] text-[#5F5B55]">
                    <Glyph3 size={14} />
                    In stock
                  </span>
                </span>
                <span className="flex items-center justify-between px-[12px] py-[9px] text-[12px]">
                  <span className="font-mono text-ink">image_link</span>
                  <span className="inline-flex items-center gap-[6px] text-[#5F5B55]">
                    <Glyph3 size={14} />
                    Present
                  </span>
                </span>
              </span>
              <span className="pt-[6px] pb-0 px-[2px] text-[13px] font-semibold text-rust-button">Review field →</span>
            </div>
            <span className="absolute left-[250px] top-[770px] text-[15px] text-nav">
              Checks in Scout. Approval decisions in Merchant Center.
            </span>
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
        What makes Google Shopping different
      </p>
      <h2 className="m-0 mb-[44px] text-[46px] leading-[1.06] font-extrabold tracking-[-.035em] text-white max-w-[860px] text-pretty max-xl:text-[length:clamp(30px,3.59vw,46px)]">
        Approval is decided per product. Scout shows you the split, then the field behind each disapproval.
      </h2>
      <div className="grid grid-cols-[320px_1fr] gap-[20px] items-start max-lg:grid-cols-1">
        <div className="bg-night-card border border-night-line rounded-10 px-[20px] py-[18px]">
          <span className="text-[11.5px] font-bold tracking-[.12em] uppercase text-faint">Merchant Center · US</span>
          <div className="flex flex-col gap-[14px] mt-[14px]">
            <div>
              <div className="flex justify-between text-[13.5px] text-night-text">
                <span>Approved</span>
                <span className="font-mono text-white">1,047</span>
              </div>
              <div className="h-[6px] rounded-[3px] bg-night-line mt-[6px]">
                <div className="w-[83%] h-full rounded-[3px] bg-check"></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between text-[13.5px] text-night-text">
                <span>Disapproved</span>
                <span className="font-mono text-white">214</span>
              </div>
              <div className="h-[6px] rounded-[3px] bg-night-line mt-[6px]">
                <div className="w-[17%] h-full rounded-[3px] bg-amber"></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between text-[13.5px] text-night-text">
                <span>Pending</span>
                <span className="font-mono text-white">23</span>
              </div>
              <div className="h-[6px] rounded-[3px] bg-night-line mt-[6px]">
                <div className="w-[2%] h-full rounded-[3px] bg-faint"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white border border-line rounded-10 overflow-hidden shadow-float">
          <div className="grid grid-cols-[1.6fr_1fr_.7fr_1.2fr] gap-[14px] px-[20px] py-[11px] bg-paper-warm border-b border-b-line text-[11.5px] font-bold tracking-[.12em] uppercase text-faint max-lg:grid-cols-1">
            <span>Google said</span>
            <span>Scout says</span>
            <span>Items</span>
            <span>Field</span>
          </div>
          <div className="grid grid-cols-[1.6fr_1fr_.7fr_1.2fr] gap-[14px] px-[20px] py-[13px] border-b border-b-tint text-[14px] items-center max-lg:grid-cols-1">
            <code className="font-mono text-[12.5px] text-dim">Missing value [gtin]</code>
            <span className="font-semibold">Missing GTIN</span>
            <span>214</span>
            <code className="font-mono text-[12.5px] text-rust">variants.barcode</code>
          </div>
          <div className="grid grid-cols-[1.6fr_1fr_.7fr_1.2fr] gap-[14px] px-[20px] py-[13px] border-b border-b-tint text-[14px] items-center max-lg:grid-cols-1">
            <code className="font-mono text-[12.5px] text-dim">Image too small</code>
            <span className="font-semibold">Image below minimum</span>
            <span>88</span>
            <code className="font-mono text-[12.5px] text-rust">images[0].src</code>
          </div>
          <div className="grid grid-cols-[1.6fr_1fr_.7fr_1.2fr] gap-[14px] px-[20px] py-[13px] border-b border-b-tint text-[14px] items-center max-lg:grid-cols-1">
            <code className="font-mono text-[12.5px] text-dim">Mismatched value (page crawl) [price]</code>
            <span className="font-semibold">Price differs from landing page</span>
            <span>19</span>
            <code className="font-mono text-[12.5px] text-rust">variants.price</code>
          </div>
          <div className="grid grid-cols-[1.6fr_1fr_.7fr_1.2fr] gap-[14px] px-[20px] py-[13px] border-b border-b-tint text-[14px] items-center max-lg:grid-cols-1">
            <code className="font-mono text-[12.5px] text-dim">Missing value [shipping]</code>
            <span className="font-semibold">Missing shipping attribute</span>
            <span>7</span>
            <code className="font-mono text-[12.5px] text-rust">shipping</code>
          </div>
        </div>
      </div>
    </>
  );
}

export const googleShopping: ChannelData = {
  slug: "google-shopping",
  name: "Google Shopping",
  title: "Google Shopping feeds — the channel most merchants start with",
  description: "",
  hero: <Hero />,
  connectBorderTop: true,
  behaviorBorderTop: false,
  steps: [
    {
      title: "Authorize with Google",
      body: "One OAuth sign-in to the Google account that owns your Merchant Center.",
    },
    {
      title: "Pick the Merchant Center account",
      body: "If you have more than one, choose which receives the feed.",
    },
    {
      title: "Choose target country and language",
      body: "Scout builds one feed per destination you select.",
    },
  ],
  behavior: <Behavior />,
  does: [
    <>
      Generates the feed to the Merchant Center specification, with the required attributes mapped from Shopify by a
      starter template you can edit.
    </>,
    <>Reads item-level disapprovals and warnings and normalizes them into one vocabulary with the field to fix.</>,
    <>Preflights each run so a would-be disapproval is caught before it counts against the account.</>,
  ],
  requires: [
    <>A GTIN, MPN, or explicit identifier_exists flag on every product — missing identifiers limit performance.</>,
    <>Price and availability in the feed must match the landing page; Google crawls to check.</>,
    <>Images at minimum size, without promotional overlays.</>,
    <>Shipping and tax settings at account or item level.</>,
  ],
  requiresNote: (
    <>
      Scout&#39;s starter template for Google Shopping pre-maps these from Shopify where a mapping exists, and its
      diagnostics name the field when one is missing.
    </>
  ),
  depends: [
    {
      label: "Feed Management",
      title: "Scheduling, preflight, publish",
      href: "/platform/feed-management",
    },
    {
      label: "Diagnostics",
      title: "Rejections in one vocabulary",
      href: "/platform/diagnostics",
    },
    {
      label: "Rules Engine",
      title: "Map and fill required fields",
      href: "/platform/rules-engine",
    },
  ],
};
