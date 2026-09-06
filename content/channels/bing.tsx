import type { ChannelData } from "@/components/channels/channel-page";
import Image from "next/image";
import { Scaled } from "@/components/site/scaled";
import { ArrowRightGlyph, Glyph1, SearchGlyph, UserGlyph } from "@/components/brand-icons";

// Source: Bing.dc.html -> /channels/bing
// Hero and "Distinguishing behavior" are bespoke compositions; the other sections are data for ChannelPage.

function Hero() {
  return (
    <>
      {/* Microsoft Bing hero */}
      <section className="relative bg-paper pt-[64px] pb-[72px] px-gutter overflow-hidden max-md:pt-[48px] max-md:pb-[48px]">
        <div
          className="absolute -top-[100px] w-[1000px] h-[1100px] pointer-events-none [background:radial-gradient(closest-side_at_70%_45%,rgba(120,190,230,.55),rgba(160,215,235,.28)_55%,transparent_80%)] right-[calc(var(--gutter)-70px+-200px)]"
          aria-hidden="true"
        ></div>
        <div
          className="absolute -bottom-[500px] w-[900px] h-[900px] rounded-full pointer-events-none bg-[radial-gradient(closest-side,rgba(60,170,210,.35),transparent_75%)] right-[calc(var(--gutter)-70px+-300px)]"
          aria-hidden="true"
        ></div>
        <div className="relative z-[2] grid grid-cols-[1fr_690px] gap-[40px] items-center max-xl:grid-cols-2 max-lg:grid-cols-1">
          <div>
            <div className="flex items-center gap-[14px] m-0 mb-[22px]">
              <span className="box-content inline-flex items-center justify-center w-[44px] h-[44px] rounded-10 bg-white border border-line flex-none">
                <svg width="26" height="26" viewBox="0 0 24 24" aria-hidden="true" className="flex-none">
                  <defs>
                    <linearGradient id="bgB26" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0" stopColor="#37BDFF"></stop>
                      <stop offset="1" stopColor="#1B6FE0"></stop>
                    </linearGradient>
                  </defs>
                  <path
                    fill="url(#bgB26)"
                    d="M6 2.5 10.2 4v12.6l5.5-3.2-2.7-1.3-1.7-4.2L19 10.8v4.5l-8.8 5.2L6 18.2z"
                  ></path>
                </svg>
              </span>
              <p className="m-0 text-[13px] font-semibold tracking-[.14em] uppercase text-rust">
                Channels · Microsoft Bing
              </p>
            </div>
            <h1 className="m-0 text-[50px] leading-[1.08] font-extrabold tracking-[-.035em] text-ink text-pretty max-xl:text-[length:clamp(36px,3.91vw,50px)]">
              The same feed, a second Merchant Center, and a lot fewer people competing for the same shelf.
            </h1>
            <p className="m-0 mt-[28px] text-[17.5px] leading-[1.55] text-body text-pretty max-md:text-[16px]">
              Microsoft Merchant Center accepts a feed built to nearly the same specification as Google. Scout connects
              it, reuses the mapping you already have, and gives you a second search surface for the cost of one more
              schedule.
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
                  Merchants already on Google Shopping who want reach in Bing, Edge, and Microsoft Start without a
                  second data project.
                </span>
              </div>
            </div>
          </div>

          {/* COMPOSITION 690 x 800 */}
          <Scaled width={690} height={800} className="flex-none" aria-hidden="true">
            <span className="absolute left-0 top-0 text-[13.5px] text-[#5F5B55]">Illustrative shopping results</span>
            <div className="absolute left-0 top-[30px] w-[690px] pt-[26px] pb-[30px] px-[28px] flex flex-col gap-[18px] bg-white border border-[#E3E8EF] rounded-16 shadow-[0_24px_60px_rgba(30,60,90,.14)]">
              <span className="flex items-center gap-[10px]">
                <span className="inline-flex items-center gap-[8px] text-[18px] font-semibold text-ink">
                  <svg width="28" height="28" viewBox="0 0 24 24" aria-hidden="true" className="flex-none">
                    <defs>
                      <linearGradient id="bgB28" x1="0" y1="0" x2="1" y2="1">
                        <stop offset="0" stopColor="#37BDFF"></stop>
                        <stop offset="1" stopColor="#1B6FE0"></stop>
                      </linearGradient>
                    </defs>
                    <path
                      fill="url(#bgB28)"
                      d="M6 2.5 10.2 4v12.6l5.5-3.2-2.7-1.3-1.7-4.2L19 10.8v4.5l-8.8 5.2L6 18.2z"
                    ></path>
                  </svg>
                  Bing
                </span>
                <span className="box-content ml-auto w-[32px] h-[32px] rounded-full border border-[#D9DEE5] flex items-center justify-center">
                  <UserGlyph size={16} stroke="#3F3F46" strokeWidth="1.6" />
                </span>
              </span>
              <span className="box-content flex items-center gap-[14px] h-[52px] px-[20px] py-0 border border-[#D9DEE5] rounded-[26px] shadow-[0_2px_8px_rgba(30,60,90,.08)]">
                <SearchGlyph size={20} stroke="#3F3F46" />
                <span className="flex-1 text-[17px] text-ink">home office essentials</span>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#3F3F46"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="9" y="2" width="6" height="12" rx="3"></rect>
                  <path d="M5 10a7 7 0 0 0 14 0M12 19v3"></path>
                </svg>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#3F3F46"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M3 8a2 2 0 0 1 2-2h2l2-3h6l2 3h2a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z"></path>
                  <circle cx="12" cy="13" r="3.5"></circle>
                </svg>
              </span>
              <span className="flex gap-[30px] border-b border-b-[#E3E8EF] text-[14.5px] text-nav">
                <span className="pt-[6px] pb-[12px] px-[4px]">All</span>
                <span className="pt-[6px] pb-[12px] px-[4px] text-[#1B6FE0] font-semibold border-b-[3px] border-b-[#1B6FE0] -mb-[1px]">
                  Shopping
                </span>
                <span className="pt-[6px] pb-[12px] px-[4px]">Images</span>
                <span className="pt-[6px] pb-[12px] px-[4px]">Videos</span>
                <span className="ml-auto inline-flex items-center gap-[8px] pt-[6px] pb-[12px] px-0">
                  Filters
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#3F3F46"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                  >
                    <path d="M4 6h16M7 12h10M10 18h4"></path>
                  </svg>
                </span>
              </span>
              <div className="grid grid-cols-[1fr_1fr_1fr] gap-[14px] mt-[6px]">
                <div className="flex flex-col bg-white border border-[#E3E8EF] rounded-10 overflow-hidden">
                  <span className="block h-[190px] bg-[#DCE9F2]">
                    <Image
                      src="/assets/bing-lamp.png"
                      width={520}
                      height={520}
                      alt=""
                      sizes="(max-width: 768px) 50vw, 240px"
                      className="block w-full h-full object-cover max-w-none"
                    />
                  </span>
                  <span className="flex flex-col gap-[5px] p-[16px] pt-[14px]">
                    <span className="text-[14.5px] font-semibold text-ink">Studio desk lamp</span>
                    <span className="text-[17px] font-bold text-ink">$79</span>
                    <span className="text-[13.5px] text-[#5F5B55]">Demo Store</span>
                    <span className="text-[13.5px] font-medium text-[#1E7A3A]">In stock</span>
                  </span>
                </div>
                <div className="flex flex-col bg-white border border-[#E3E8EF] rounded-10 overflow-hidden">
                  <span className="block h-[190px] bg-[#DCE9F2]">
                    <Image
                      src="/assets/bing-headphones.png"
                      width={520}
                      height={520}
                      alt=""
                      sizes="(max-width: 768px) 50vw, 240px"
                      className="block w-full h-full object-cover max-w-none"
                    />
                  </span>
                  <span className="flex flex-col gap-[5px] p-[16px] pt-[14px]">
                    <span className="text-[14.5px] font-semibold text-ink">Wireless headphones</span>
                    <span className="text-[17px] font-bold text-ink">$129</span>
                    <span className="text-[13.5px] text-[#5F5B55]">Demo Store</span>
                    <span className="text-[13.5px] font-medium text-[#1E7A3A]">In stock</span>
                  </span>
                </div>
                <div className="flex flex-col bg-white border border-[#E3E8EF] rounded-10 overflow-hidden">
                  <span className="block h-[190px] bg-[#DCE9F2]">
                    <Image
                      src="/assets/bing-keyboard.png"
                      width={520}
                      height={520}
                      alt=""
                      sizes="(max-width: 768px) 50vw, 240px"
                      className="block w-full h-full object-cover max-w-none"
                    />
                  </span>
                  <span className="flex flex-col gap-[5px] p-[16px] pt-[14px]">
                    <span className="text-[14.5px] font-semibold text-ink">Compact keyboard</span>
                    <span className="text-[17px] font-bold text-ink">$89</span>
                    <span className="text-[13.5px] text-[#5F5B55]">Demo Store</span>
                    <span className="text-[13.5px] font-medium text-[#1E7A3A]">In stock</span>
                  </span>
                </div>
              </div>
            </div>
            <svg
              width="140"
              height="90"
              viewBox="0 0 140 90"
              fill="none"
              className="absolute left-[180px] top-[594px] overflow-visible"
            >
              <path d="M120 6 C120 50, 70 40, 0 60" stroke="#1F8A9E" strokeWidth="2"></path>
              <circle cx="120" cy="6" r="4" fill="#1F8A9E"></circle>
            </svg>
            <div className="absolute -left-[20px] top-[590px] w-[270px] pt-[16px] pb-[14px] px-[18px] flex flex-col bg-white border border-[#E3E8EF] rounded-14 shadow-[0_24px_60px_rgba(30,60,90,.16)]">
              <span className="flex items-center gap-[8px] pb-[8px]">
                <span className="block w-[26px] h-[26px] overflow-hidden">
                  <Image
                    src="/assets/img-03.png"
                    width={106}
                    height={26}
                    alt=""
                    className="block h-[26px] w-auto max-w-none"
                  />
                </span>
                <span className="text-[15px] font-bold text-ink">Same feed. New channel.</span>
              </span>
              <span className="flex items-center gap-[12px] px-0 py-[10px] border-b border-b-line">
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#171514"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="flex-none"
                >
                  <path d="M12.6 2.9 21 11.3a1.5 1.5 0 0 1 0 2.1l-7.6 7.6a1.5 1.5 0 0 1-2.1 0L2.9 12.6V4.4A1.5 1.5 0 0 1 4.4 2.9Z"></path>
                  <circle cx="7.5" cy="7.5" r="1"></circle>
                </svg>
                <span className="flex-1 flex flex-col gap-px">
                  <span className="text-[14px] font-semibold text-ink">Product mapping</span>
                  <span className="text-[13px] text-[#5F5B55]">Reused</span>
                </span>
                <Glyph1 size={18} className="flex-none" />
              </span>
              <span className="flex items-center gap-[12px] px-0 py-[10px] border-b border-b-line">
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#171514"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="flex-none"
                >
                  <path d="M3 9.5 5 4h14l2 5.5"></path>
                  <path d="M3 9.5a3 3 0 0 0 6 0 3 3 0 0 0 6 0 3 3 0 0 0 6 0"></path>
                  <path d="M5 12v8h14v-8M10 20v-5h4v5"></path>
                </svg>
                <span className="flex-1 flex flex-col gap-px">
                  <span className="text-[14px] font-semibold text-ink">Merchant Center</span>
                  <span className="text-[13px] text-[#5F5B55]">Connected</span>
                </span>
                <Glyph1 size={18} className="flex-none" />
              </span>
              <span className="flex items-center gap-[12px] px-0 py-[10px]">
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#171514"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="flex-none"
                >
                  <circle cx="12" cy="12" r="9"></circle>
                  <path d="M12 7v5l3 2"></path>
                </svg>
                <span className="flex-1 flex flex-col gap-px">
                  <span className="text-[14px] font-semibold text-ink">Feed schedule</span>
                  <span className="text-[13px] text-[#5F5B55]">Scheduled</span>
                </span>
                <Glyph1 size={18} className="flex-none" />
              </span>
              <span className="text-center text-[12.5px] text-faint pt-[6px]">Example feed setup</span>
            </div>
            <div className="absolute left-[270px] top-[690px] w-[420px] h-[70px] flex items-center justify-around px-[30px] py-0 bg-[rgba(255,255,255,.55)] border border-[rgba(255,255,255,.7)] rounded-[35px] [backdrop-filter:blur(10px)] text-[16px] font-medium text-ink">
              <span className="inline-flex items-center gap-[10px]">
                <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true" className="flex-none">
                  <defs>
                    <linearGradient id="bgB24" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0" stopColor="#37BDFF"></stop>
                      <stop offset="1" stopColor="#1B6FE0"></stop>
                    </linearGradient>
                  </defs>
                  <path
                    fill="url(#bgB24)"
                    d="M6 2.5 10.2 4v12.6l5.5-3.2-2.7-1.3-1.7-4.2L19 10.8v4.5l-8.8 5.2L6 18.2z"
                  ></path>
                </svg>
                Bing
              </span>
              <span className="inline-flex items-center gap-[10px]">
                <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true">
                  <defs>
                    <linearGradient id="edgeG" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0" stopColor="#3EE6A8"></stop>
                      <stop offset=".5" stopColor="#1FA7E0"></stop>
                      <stop offset="1" stopColor="#1E5BC6"></stop>
                    </linearGradient>
                  </defs>
                  <path
                    fill="url(#edgeG)"
                    d="M12 2a10 10 0 0 1 10 9.4c0 3.2-2.6 5.2-5.2 5.2-1.4 0-2.3-.6-2.3-1.4 0-.7.6-1 .6-2 0-1.2-1.4-2.2-3.1-2.2-2.6 0-4.4 1.9-4.4 4.6 0 3.4 3 6.4 7.4 6.4 1.6 0 3.1-.4 4.4-1.1A10 10 0 1 1 12 2Z"
                  ></path>
                </svg>
                Edge
              </span>
              <span className="inline-flex items-center gap-[10px]">
                <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true">
                  <circle cx="8.5" cy="8.5" r="4" fill="#E23A6B"></circle>
                  <circle cx="15.5" cy="8.5" r="4" fill="#3B6FE3"></circle>
                  <circle cx="8.5" cy="15.5" r="4" fill="#F5B21B"></circle>
                  <circle cx="15.5" cy="15.5" r="4" fill="#2EB67D"></circle>
                  <circle cx="12" cy="12" r="3.2" fill="#fff"></circle>
                </svg>
                Microsoft Start
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
        What makes Microsoft Bing different
      </p>
      <h2 className="m-0 mb-[44px] text-[46px] leading-[1.06] font-extrabold tracking-[-.035em] text-white max-w-[860px] text-pretty max-xl:text-[length:clamp(30px,3.59vw,46px)]">
        One mapping, two Merchant Centers.
      </h2>
      <div className="grid grid-cols-[1fr_auto_1fr_auto_1fr] gap-[16px] items-center max-lg:grid-cols-1 max-lg:justify-items-stretch">
        <div className="bg-night-card border border-night-line rounded-10 px-[20px] py-[18px]">
          <span className="text-[11.5px] font-bold tracking-[.12em] uppercase text-faint">
            Your rules · Google Shopping
          </span>
          <ul className="m-0 mt-[12px] p-0 list-none flex flex-col gap-[6px] font-mono text-[12.5px] text-night-text">
            <li>title ← vendor + title</li>
            <li>google_product_category ← set</li>
            <li>gtin ← barcode</li>
            <li>image_link ← images[0]</li>
            <li>custom_label_0 ← rule</li>
          </ul>
        </div>
        <ArrowRightGlyph size={34} stroke="#E2703A" strokeWidth="1.6" />
        <div className="bg-white border border-line rounded-10 px-[20px] py-[18px] shadow-float">
          <span className="text-[11.5px] font-bold tracking-[.12em] uppercase text-faint">Reused for Bing</span>
          <ul className="m-0 mt-[12px] p-0 list-none flex flex-col gap-[6px] font-mono text-[12.5px] text-nav">
            <li>
              title ← <span className="text-ok-text">same</span>
            </li>
            <li>
              product_category ← <span className="text-ok-text">same</span>
            </li>
            <li>
              gtin ← <span className="text-ok-text">same</span>
            </li>
            <li>
              image_link ← <span className="text-ok-text">same</span>
            </li>
            <li className="text-rust">seller_name ← added by template</li>
          </ul>
        </div>
        <ArrowRightGlyph size={34} stroke="#E2703A" strokeWidth="1.6" />
        <div className="bg-night-card border border-night-line rounded-10 px-[20px] py-[18px]">
          <span className="text-[11.5px] font-bold tracking-[.12em] uppercase text-faint">
            Microsoft Merchant Center
          </span>
          <div className="mt-[12px] flex flex-col gap-[8px] text-[13.5px] text-night-text">
            <span className="flex justify-between">
              <span>Schedule</span>
              <span className="font-mono text-[12px] text-night-muted-2">daily 04:00</span>
            </span>
            <span className="flex justify-between">
              <span>Diagnostics</span>
              <span className="text-night-muted-2">separate</span>
            </span>
            <span className="flex justify-between">
              <span>Approval</span>
              <span className="text-night-muted-2">independent of Google</span>
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export const bing: ChannelData = {
  slug: "bing",
  name: "Microsoft Bing",
  title: "Microsoft Bing — the same feed, a second Merchant Center",
  description: "",
  hero: <Hero />,
  connectBorderTop: true,
  behaviorBorderTop: false,
  steps: [
    {
      title: "Authorize with Microsoft",
      body: "OAuth sign-in to the Microsoft Advertising account that owns your Merchant Center store.",
    },
    {
      title: "Pick the store",
      body: "Choose which Microsoft Merchant Center store receives the feed.",
    },
  ],
  behavior: <Behavior />,
  does: [
    <>
      Builds the Bing feed from your Google Shopping rules, so the mapping work is done once; the few Bing-specific
      fields are added by a starter template.
    </>,
    <>Runs a separate schedule and separate diagnostics — the two channels approve independently.</>,
    <>Translates Microsoft offer-level errors into the same vocabulary as Google, so the same field fix clears both.</>,
  ],
  requires: [
    <>A Microsoft Merchant Center store with a verified and claimed domain.</>,
    <>Its own feed submission — Bing does not read your Google feed for you.</>,
    <>The same identifier, image, and price-match rules as Google, with minor naming differences Scout maps.</>,
  ],
  requiresNote: (
    <>
      Scout&#39;s starter template for Microsoft Bing pre-maps these from Shopify where a mapping exists, and its
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
