import type { ChannelData } from "@/components/channels/channel-page";
import Image from "next/image";
import { Scaled } from "@/components/site/scaled";
import { ChevronDown, ChevronRight } from "lucide-react";
import { HeartGlyph, MessageCircleGlyph, MetaLogo, MetaLogo2, RedoGlyph } from "@/components/brand-icons";

// Source: Meta.dc.html -> /channels/meta
// Hero and "Distinguishing behavior" are bespoke compositions; the other sections are data for ChannelPage.

function Hero() {
  return (
    <>
      {/* Meta hero */}
      <section className="relative bg-paper pt-[64px] pb-[60px] px-gutter overflow-hidden max-md:pt-[48px] max-md:pb-[48px]">
        <div className="relative z-[2] grid grid-cols-[1fr_690px] gap-[40px] items-center max-xl:grid-cols-2 max-lg:grid-cols-1">
          <div>
            <div className="flex items-center gap-[14px] m-0 mb-[22px]">
              <span className="box-content inline-flex items-center justify-center w-[44px] h-[44px] rounded-10 bg-white border border-line flex-none">
                <MetaLogo size={26} className="flex-none" />
              </span>
              <p className="m-0 text-[13px] font-semibold tracking-[.14em] uppercase text-rust">Channels · Meta</p>
            </div>
            <h1 className="m-0 text-[46px] leading-[1.08] font-extrabold tracking-[-.035em] text-ink text-pretty max-xl:text-[length:clamp(36px,3.59vw,46px)]">
              One catalog for Facebook and Instagram Shops. One extra step: telling Scout which business it belongs to.
            </h1>
            <p className="m-0 mt-[28px] text-[17.5px] leading-[1.55] text-body text-pretty max-md:text-[16px]">
              Meta organizes everything under a Business account, and a person often has access to several. After you
              authorize, Scout lists the businesses you can see and you pick the one whose catalog should receive the
              feed.
            </p>
            <div className="flex gap-[36px] mt-[36px] text-[14px] max-xl:flex-wrap max-xl:gap-[16px]">
              <div className="flex flex-col gap-[4px] flex-none">
                <span className="text-[12px] font-bold tracking-[.12em] uppercase text-faint">Type</span>
                <span className="inline-flex items-center gap-[6px] text-[12px] font-bold tracking-[.1em] uppercase text-rust border border-tint-line-strong bg-badge rounded-[4px] px-[9px] py-[5px]">
                  Feed channel
                </span>
              </div>
              <div className="flex flex-col gap-[4px] flex-none max-w-[150px]">
                <span className="text-[12px] font-bold tracking-[.12em] uppercase text-faint">Connects via</span>
                <span className="text-ink font-medium leading-[1.4]">OAuth + business selection</span>
              </div>
              <div className="flex flex-col gap-[4px] flex-1 min-w-0">
                <span className="text-[12px] font-bold tracking-[.12em] uppercase text-faint">Who sells here</span>
                <span className="text-ink font-medium leading-[1.4]">
                  Merchants selling through Facebook and Instagram Shops, or running dynamic product ads that draw from
                  a Meta catalog.
                </span>
              </div>
            </div>
          </div>

          {/* COMPOSITION 690 x 820 */}
          <Scaled width={690} height={820} className="flex-none" aria-hidden="true">
            <div className="absolute -left-[10px] top-0 w-[520px] h-[520px] rounded-full bg-[#1877F2]"></div>
            <div className="absolute left-[290px] -top-[20px] w-[520px] h-[520px] rounded-full bg-[radial-gradient(circle_at_30%_30%,#F9C56A,#F2647A_45%,#B04CC8_100%)] opacity-90"></div>
            <div className="absolute left-0 top-[120px] w-[330px] p-[12px] pb-[10px] flex flex-col gap-[12px] bg-white rounded-14 shadow-[0_24px_60px_rgba(24,24,27,.22)]">
              <span className="absolute left-[36px] -top-[32px] w-[52px] h-[52px] rounded-full bg-white flex items-center justify-center shadow-[0_6px_16px_rgba(0,0,0,.15)]">
                <MetaLogo2 size={44} />
              </span>
              <span className="flex items-center gap-[10px] pt-[6px]">
                <span className="w-[38px] h-[38px] rounded-full bg-[#7A6A5C] text-white flex items-center justify-center text-[16px] font-bold">
                  N
                </span>
                <span className="flex flex-col gap-[2px] flex-1">
                  <span className="text-[15px] font-semibold text-ink">Northline Studio</span>
                  <span className="text-[12.5px] text-faint">Sponsored</span>
                </span>
                <span className="text-[18px] text-nav tracking-[1px]">•••</span>
              </span>
              <span className="text-[14.5px] text-ink">Your everyday, upgraded.</span>
              <span className="grid grid-cols-[1fr_1fr] gap-[10px]">
                <span className="flex flex-col border border-[#E3E8EF] rounded-10 overflow-hidden bg-white">
                  <span className="block h-[150px] bg-[#C7CCE8]">
                    <Image
                      src="/assets/meta-bag.png"
                      width={480}
                      height={600}
                      alt=""
                      sizes="(max-width: 768px) 50vw, 240px"
                      className="block w-full h-full object-cover max-w-none"
                    />
                  </span>
                  <span className="flex flex-col gap-[6px] p-[12px]">
                    <span className="text-[13px] text-ink">Everyday crossbody</span>
                    <span className="flex items-center justify-between">
                      <span className="text-[13.5px] font-semibold text-ink">$89.00</span>
                      <span className="text-[11.5px] font-semibold text-ink bg-[#E4E6EB] rounded-6 px-[10px] py-[6px]">
                        Shop now
                      </span>
                    </span>
                  </span>
                </span>
                <span className="flex flex-col border border-[#E3E8EF] rounded-10 overflow-hidden bg-white">
                  <span className="block h-[150px] bg-[#F6DDD6]">
                    <Image
                      src="/assets/meta-sunglasses.png"
                      width={480}
                      height={600}
                      alt=""
                      sizes="(max-width: 768px) 50vw, 240px"
                      className="block w-full h-full object-cover max-w-none"
                    />
                  </span>
                  <span className="flex flex-col gap-[6px] p-[12px]">
                    <span className="text-[13px] text-ink">Weekend sunglasses</span>
                    <span className="flex items-center justify-between">
                      <span className="text-[13.5px] font-semibold text-ink">$49.00</span>
                      <span className="text-[11.5px] font-semibold text-ink bg-[#E4E6EB] rounded-6 px-[10px] py-[6px]">
                        Shop now
                      </span>
                    </span>
                  </span>
                </span>
              </span>
              <span className="flex justify-center gap-[6px]">
                <span className="w-[6px] h-[6px] rounded-full bg-[#1877F2]"></span>
                <span className="w-[6px] h-[6px] rounded-full bg-[#D8DBE0]"></span>
                <span className="w-[6px] h-[6px] rounded-full bg-[#D8DBE0]"></span>
                <span className="w-[6px] h-[6px] rounded-full bg-[#D8DBE0]"></span>
                <span className="w-[6px] h-[6px] rounded-full bg-[#D8DBE0]"></span>
              </span>
              <span className="flex justify-around pt-[8px] border-t border-t-[#E3E8EF]">
                <span className="inline-flex items-center gap-[8px] text-[13.5px] text-nav">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#3F3F46"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M7 10v12M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88Z"></path>
                  </svg>
                  Like
                </span>
                <span className="inline-flex items-center gap-[8px] text-[13.5px] text-nav">
                  <MessageCircleGlyph size={18} />
                  Comment
                </span>
                <span className="inline-flex items-center gap-[8px] text-[13.5px] text-nav">
                  <RedoGlyph size={18} />
                  Share
                </span>
              </span>
            </div>
            <div className="absolute left-[350px] top-[100px] w-[340px] flex flex-col bg-white rounded-14 overflow-hidden shadow-[0_24px_60px_rgba(24,24,27,.22)]">
              <span className="flex items-center gap-[10px] pt-[34px] pb-[12px] px-[16px]">
                <span className="w-[36px] h-[36px] rounded-full bg-[#7A6A5C] text-white flex items-center justify-center text-[15px] font-bold">
                  N
                </span>
                <span className="flex flex-col gap-[2px] flex-1">
                  <span className="text-[14.5px] font-semibold text-ink">northlinestudio</span>
                  <span className="text-[12.5px] text-faint">Sponsored</span>
                </span>
                <span className="text-[18px] text-nav tracking-[1px]">•••</span>
              </span>
              <span className="relative block h-[470px] overflow-hidden">
                <Image
                  src="/assets/meta-model.png"
                  width={560}
                  height={747}
                  alt=""
                  sizes="(max-width: 768px) 50vw, 240px"
                  className="block w-full h-full object-cover object-[50%_20%] max-w-none"
                />
                <span className="absolute left-[14px] bottom-[14px] inline-flex items-center gap-[8px] px-[14px] py-[9px] rounded-full bg-[rgba(20,20,20,.72)] text-white text-[13.5px] font-medium">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#fff"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"></path>
                    <path d="M3 6h18"></path>
                  </svg>
                  Everyday crossbody · $89.00
                </span>
              </span>
              <span className="flex items-center justify-between px-[16px] py-[12px] bg-[#1877F2] text-white text-[15px] font-medium">
                Shop now
                <ChevronRight size={18} className="text-white" />
              </span>
              <span className="flex items-center gap-[18px] p-[16px] pt-[12px]">
                <HeartGlyph size={24} />
                <MessageCircleGlyph size={24} stroke="#171514" strokeWidth="1.7" />
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#171514"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m22 2-7 20-4-9-9-4Z"></path>
                  <path d="M22 2 11 13"></path>
                </svg>
                <span className="ml-auto">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#171514"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="inline"
                  >
                    <path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"></path>
                  </svg>
                </span>
              </span>
            </div>
            <div className="absolute -left-[20px] top-[560px] w-[250px] p-[16px] pb-[14px] flex flex-col gap-[10px] bg-white rounded-14 shadow-[0_24px_60px_rgba(24,24,27,.18)]">
              <span className="flex items-center gap-[8px]">
                <span className="block w-[28px] h-[28px] overflow-hidden">
                  <Image
                    src="/assets/img-03.png"
                    width={114}
                    height={28}
                    alt=""
                    className="block h-[28px] w-auto max-w-none"
                  />
                </span>
                <span className="text-[14px] font-semibold text-ink">Scout · Choose business</span>
              </span>
              <span className="flex flex-col gap-[4px] px-[12px] py-[8px] border border-[#E3DFD8] rounded-8">
                <span className="text-[11px] text-faint">Business</span>
                <span className="flex items-center justify-between text-[14.5px] font-medium text-ink">
                  Northline Studio
                  <ChevronDown size={16} strokeWidth={1.8} className="text-nav" />
                </span>
              </span>
              <span className="flex flex-col gap-[4px] px-[12px] py-[8px] border border-[#E3DFD8] rounded-8">
                <span className="text-[11px] text-faint">Catalog</span>
                <span className="flex items-center justify-between text-[14.5px] font-medium text-ink">
                  Everyday essentials
                  <ChevronDown size={16} strokeWidth={1.8} className="text-nav" />
                </span>
              </span>
              <span className="flex items-center gap-[8px] pt-[4px]">
                <MetaLogo2 size={20} />
                <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true">
                  <defs>
                    <linearGradient id="igSmall" x1="0" y1="1" x2="1" y2="0">
                      <stop offset="0" stopColor="#FFD600"></stop>
                      <stop offset=".45" stopColor="#FF3D6E"></stop>
                      <stop offset="1" stopColor="#7B3FE4"></stop>
                    </linearGradient>
                  </defs>
                  <rect width="24" height="24" rx="6" fill="url(#igSmall)"></rect>
                  <rect x="5" y="5" width="14" height="14" rx="4" fill="none" stroke="#fff" strokeWidth="1.8"></rect>
                  <circle cx="12" cy="12" r="3.3" fill="none" stroke="#fff" strokeWidth="1.8"></circle>
                  <circle cx="16.3" cy="7.7" r="1" fill="#fff"></circle>
                </svg>
                <span className="text-[12px] text-faint ml-auto">One catalog · Both channels</span>
              </span>
            </div>
            <span className="absolute left-[370px] top-[74px] z-[3] w-[52px] h-[52px] rounded-14 bg-white flex items-center justify-center shadow-[0_6px_16px_rgba(0,0,0,.15)]">
              <svg width="40" height="40" viewBox="0 0 24 24" aria-hidden="true">
                <defs>
                  <linearGradient id="igHero" x1="0" y1="1" x2="1" y2="0">
                    <stop offset="0" stopColor="#FFD600"></stop>
                    <stop offset=".45" stopColor="#FF3D6E"></stop>
                    <stop offset="1" stopColor="#7B3FE4"></stop>
                  </linearGradient>
                </defs>
                <rect width="24" height="24" rx="6" fill="url(#igHero)"></rect>
                <rect x="5" y="5" width="14" height="14" rx="4" fill="none" stroke="#fff" strokeWidth="1.8"></rect>
                <circle cx="12" cy="12" r="3.3" fill="none" stroke="#fff" strokeWidth="1.8"></circle>
                <circle cx="16.3" cy="7.7" r="1" fill="#fff"></circle>
              </svg>
            </span>
            <span className="absolute left-[270px] top-[790px] text-[14px] text-faint">
              Illustrative previews · Sample products
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
        What makes Meta different
      </p>
      <h2 className="m-0 mb-[44px] text-[46px] leading-[1.06] font-extrabold tracking-[-.035em] text-white max-w-[860px] text-pretty max-xl:text-[length:clamp(30px,3.59vw,46px)]">
        The business selection step, as it appears after you authorize.
      </h2>
      <div className="grid grid-cols-[1fr_1fr] gap-[20px] items-start max-lg:grid-cols-1">
        <div className="bg-white border border-line rounded-12 shadow-float overflow-hidden">
          <div className="px-[22px] py-[16px] border-b border-b-line">
            <span className="text-[11.5px] font-bold tracking-[.12em] uppercase text-faint">Step 2 of 3</span>
            <p className="m-0 mt-[6px] text-[18px] font-bold tracking-[-.02em]">
              Which business should receive this catalog?
            </p>
          </div>
          <div className="px-[14px] py-[10px] flex flex-col gap-[6px]">
            <div className="grid grid-cols-[22px_1fr_auto] gap-[12px] items-center p-[12px] border border-ink rounded-8 bg-paper-warm max-lg:grid-cols-1">
              <span className="box-content w-[16px] h-[16px] rounded-full border-[2px] border-ink flex items-center justify-center">
                <span className="w-[8px] h-[8px] rounded-full bg-ink"></span>
              </span>
              <span className="flex flex-col gap-[2px]">
                <span className="text-[14.5px] font-semibold">Northline Sports</span>
                <span className="font-mono text-[11.5px] text-faint">Business ID 10442…</span>
              </span>
              <span className="text-[12px] text-faint">2 catalogs</span>
            </div>
            <div className="grid grid-cols-[22px_1fr_auto] gap-[12px] items-center p-[12px] border border-line rounded-8 bg-white max-lg:grid-cols-1">
              <span className="box-content w-[16px] h-[16px] rounded-full border-[2px] border-[#C9C1B6] flex items-center justify-center"></span>
              <span className="flex flex-col gap-[2px]">
                <span className="text-[14.5px] font-semibold">Northline Outlet</span>
                <span className="font-mono text-[11.5px] text-faint">Business ID 10467…</span>
              </span>
              <span className="text-[12px] text-faint">1 catalog</span>
            </div>
            <div className="grid grid-cols-[22px_1fr_auto] gap-[12px] items-center p-[12px] border border-line rounded-8 bg-white max-lg:grid-cols-1">
              <span className="box-content w-[16px] h-[16px] rounded-full border-[2px] border-[#C9C1B6] flex items-center justify-center"></span>
              <span className="flex flex-col gap-[2px]">
                <span className="text-[14.5px] font-semibold">Agency — Courtside Media</span>
                <span className="font-mono text-[11.5px] text-faint">Business ID 99310…</span>
              </span>
              <span className="text-[12px] text-faint">1 catalog</span>
            </div>
          </div>
          <div className="pt-[12px] pb-[16px] px-[22px] flex justify-end">
            <span className="inline-flex items-center justify-center min-h-[40px] px-[16px] py-0 rounded-8 bg-ink text-[14px] font-semibold text-white">
              Continue
            </span>
          </div>
        </div>
        <div className="bg-night-card border border-night-line rounded-10 px-[20px] py-[18px] px-[26px] py-[24px]">
          <span className="text-[11.5px] font-bold tracking-[.12em] uppercase text-faint">Why the extra step</span>
          <p className="m-0 mt-[10px] text-[15px] leading-[1.6] text-night-muted-2">
            Your Meta login can manage several businesses — your own, an old one, an agency&#39;s. Publishing a catalog
            into the wrong one is a mess to unwind. So Scout asks, once, and remembers.
          </p>
          <p className="m-0 mt-[14px] text-[15px] leading-[1.6] text-night-muted-2">
            The catalog Scout writes to is the one you choose here. Nothing else under the business is touched.
          </p>
        </div>
      </div>
    </>
  );
}

export const meta: ChannelData = {
  slug: "meta",
  name: "Meta",
  title: "Meta — one catalog for Facebook and Instagram Shops",
  description: "",
  hero: <Hero />,
  connectBorderTop: true,
  behaviorBorderTop: false,
  steps: [
    {
      title: "Authorize with Meta",
      body: "OAuth sign-in with your personal Meta login — the one that has access to the business.",
    },
    {
      title: "Select the business",
      body: "Scout lists every Business account you can manage. Pick one.",
    },
    {
      title: "Pick or create the catalog",
      body: "Choose an existing product catalog under that business, or let Scout create one.",
    },
  ],
  behavior: <Behavior />,
  does: [
    <>
      Publishes a catalog feed in the Meta product specification, with image and variant grouping mapped from Shopify.
    </>,
    <>Reads catalog-level and item-level issues from Commerce Manager and normalizes them.</>,
    <>Keeps availability and price current on Meta&#39;s schedule, so Shops don&#39;t show stock you&#39;ve sold.</>,
  ],
  requires: [
    <>
      A Business account and a Commerce account with checkout configured on Meta&#39;s side — Scout supplies the
      catalog, not the checkout.
    </>,
    <>Variant grouping via item_group_id so colours and sizes appear as one product.</>,
    <>Square-friendly imagery; Shops crop to 1:1 in most placements.</>,
  ],
  requiresNote: (
    <>
      Scout&#39;s starter template for Meta pre-maps these from Shopify where a mapping exists, and its diagnostics name
      the field when one is missing.
    </>
  ),
  depends: [
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
