import type { ChannelData } from "@/components/channels/channel-page";
import Image from "next/image";
import { Scaled } from "@/components/site/scaled";
import { ChevronDown } from "lucide-react";
import {
  ArrowRightGlyph,
  CircleCheckGlyph,
  Glyph2,
  HeartGlyph,
  RedoGlyph,
  ShoppingBagGlyph,
} from "@/components/brand-icons";

// Source: TikTok.dc.html -> /channels/tiktok
// Hero and "Distinguishing behavior" are bespoke compositions; the other sections are data for ChannelPage.

function Hero() {
  return (
    <>
      {/* TikTok hero */}
      <section className="relative bg-paper pt-[64px] pb-[72px] px-gutter overflow-hidden max-md:pt-[48px] max-md:pb-[48px]">
        <div className="relative z-[2] grid grid-cols-[1fr_680px] gap-[40px] items-center max-xl:grid-cols-2 max-lg:grid-cols-1">
          <div>
            <div className="flex items-center gap-[14px] m-0 mb-[22px]">
              <span className="box-content inline-flex items-center justify-center w-[44px] h-[44px] rounded-10 bg-white border border-line flex-none">
                <Glyph2 size={26} className="flex-none" />
              </span>
              <p className="m-0 text-[13px] font-semibold tracking-[.14em] uppercase text-rust">Channels · TikTok</p>
            </div>
            <h1 className="m-0 text-[50px] leading-[1.08] font-extrabold tracking-[-.035em] text-ink text-pretty max-xl:text-[length:clamp(36px,3.91vw,50px)]">
              A product catalog for TikTok Shop, attached to the advertiser account you choose.
            </h1>
            <p className="m-0 mt-[28px] text-[17.5px] leading-[1.55] text-body text-pretty max-md:text-[16px]">
              TikTok separates the login from the advertiser account that owns catalogs. After OAuth, Scout lists the
              advertiser accounts you can reach and you select the one whose catalog should receive your products.
            </p>
            <div className="flex gap-[36px] mt-[36px] text-[14px] max-xl:flex-wrap max-xl:gap-[16px]">
              <div className="flex flex-col gap-[4px] flex-none">
                <span className="text-[12px] font-bold tracking-[.12em] uppercase text-faint">Type</span>
                <span className="inline-flex items-center gap-[6px] text-[12px] font-bold tracking-[.1em] uppercase text-rust border border-tint-line-strong bg-badge rounded-[4px] px-[9px] py-[5px]">
                  Feed channel
                </span>
              </div>
              <div className="flex flex-col gap-[4px] flex-none whitespace-nowrap">
                <span className="text-[12px] font-bold tracking-[.12em] uppercase text-faint">Connects via</span>
                <span className="text-ink font-medium">OAuth + advertiser selection</span>
              </div>
              <div className="flex flex-col gap-[4px] flex-1 min-w-0">
                <span className="text-[12px] font-bold tracking-[.12em] uppercase text-faint">Who sells here</span>
                <span className="text-ink font-medium leading-[1.4]">
                  Merchants selling through TikTok Shop or running catalog-based ads on TikTok.
                </span>
              </div>
            </div>
          </div>

          {/* COMPOSITION 680 x 700 */}
          <Scaled width={680} height={700} className="flex-none" aria-hidden="true">
            <div className="absolute -left-[14px] -top-[4px] w-[640px] h-[270px] bg-[#25F4EE] rounded-[34px] [transform:rotate(-4deg)]"></div>
            <div className="absolute left-[150px] top-[190px] w-[520px] h-[520px] bg-[#FE2C55] rounded-[34px] [transform:rotate(-4deg)]"></div>
            <div className="absolute left-0 top-[14px] w-[660px] h-[650px] bg-[#111113] rounded-[34px] [transform:rotate(-2deg)] shadow-[0_30px_70px_rgba(24,24,27,.28)] overflow-hidden">
              <span className="absolute left-0 right-0 top-[22px] text-center text-[13.5px] font-medium text-[rgba(255,255,255,.85)]">
                Illustrative creator preview
              </span>{" "}
              <span className="absolute left-[50px] top-[78px] inline-flex items-center gap-[10px] h-[56px] px-[20px] py-0 rounded-10 bg-[#25F4EE] text-[#111113] text-[17px] font-semibold [transform:rotate(-8deg)]">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="#111113">
                  <path d="M11 5 6 9H2v6h4l5 4V5z"></path>
                  <path
                    d="M15.54 8.46a5 5 0 0 1 0 7.07M19.07 4.93a10 10 0 0 1 0 14.14"
                    fill="none"
                    stroke="#111113"
                    strokeWidth="2"
                    strokeLinecap="round"
                  ></path>
                </svg>
                Sound on
              </span>{" "}
              <svg
                width="200"
                height="360"
                viewBox="0 0 200 360"
                fill="none"
                stroke="#fff"
                strokeWidth="7"
                strokeLinecap="round"
                className="absolute left-[30px] top-[180px]"
              >
                <path d="M150 10c-60 70-70 190-40 280"></path>
                <path d="M100 60c-50 70-60 170-30 250"></path>
              </svg>{" "}
              <svg
                width="60"
                height="180"
                viewBox="0 0 60 180"
                fill="none"
                stroke="#25F4EE"
                strokeWidth="5"
                strokeLinecap="round"
                className="absolute left-[600px] top-[100px]"
              >
                <path d="M10 10c40 40 50 110 20 160"></path>
                <path d="M45 20c20 40 20 90 5 120"></path>
              </svg>{" "}
              <svg
                width="60"
                height="140"
                viewBox="0 0 60 140"
                fill="none"
                stroke="#FE2C55"
                strokeWidth="5"
                strokeLinecap="round"
                className="absolute left-[560px] top-[320px]"
              >
                <path d="M10 10c40 40 40 90 10 120"></path>
              </svg>
              <div className="absolute left-[262px] top-[60px] w-[370px] h-[600px] rounded-[26px] overflow-hidden [transform:rotate(3deg)] shadow-[0_20px_50px_rgba(0,0,0,.5)]">
                <Image
                  src="/assets/tt-creator.png"
                  width={640}
                  height={960}
                  alt=""
                  sizes="(max-width: 768px) 50vw, 240px"
                  className="block w-full h-full object-cover object-[50%_20%] max-w-none"
                />
                <span className="absolute inset-0 [background:linear-gradient(to_top,rgba(0,0,0,.75)_0%,rgba(0,0,0,.35)_32%,transparent_55%)]"></span>
                <span className="absolute right-[20px] top-[70px] flex flex-col gap-[26px]">
                  <HeartGlyph size={30} stroke="#fff" strokeWidth="1.6" />
                  <svg
                    width="30"
                    height="30"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#fff"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"></path>
                    <path d="M8 12h.01M12 12h.01M16 12h.01"></path>
                  </svg>
                  <svg
                    width="30"
                    height="30"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#fff"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M8.5 19H8a4 4 0 0 1-4-4v-1a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v1a4 4 0 0 1-4 4h-4l-3.5 3Z"></path>
                    <path d="M9 6a4 4 0 0 1 4-4h3a4 4 0 0 1 4 4v1"></path>
                  </svg>
                  <RedoGlyph size={30} stroke="#fff" />
                </span>
                <span className="absolute left-[24px] bottom-[78px] text-[27px] font-extrabold tracking-[-.03em] leading-[1.12] text-white max-w-[170px]">
                  Small speaker.
                  <br />
                  Big energy.
                </span>
                <span className="absolute left-[24px] bottom-[34px] w-[90px] h-[3px] rounded-[2px] bg-[rgba(255,255,255,.7)]"></span>
              </div>
            </div>
            <div className="absolute left-[470px] top-[480px] w-[220px] p-[12px] flex flex-col gap-[12px] bg-white rounded-14 shadow-[0_24px_60px_rgba(24,24,27,.28)] [transform:rotate(5deg)]">
              <span className="block h-[150px] rounded-10 overflow-hidden bg-[#B9E6E8]">
                <Image
                  src="/assets/tt-speaker.png"
                  width={560}
                  height={560}
                  alt=""
                  sizes="(max-width: 768px) 50vw, 240px"
                  className="block w-full h-full object-cover object-[50%_55%] max-w-none"
                />
              </span>
              <span className="flex items-end justify-between p-[4px] pt-0">
                <span className="flex flex-col gap-[6px]">
                  <span className="text-[15px] font-medium text-ink">Pocket speaker</span>
                  <span className="text-[20px] font-extrabold text-ink">$39</span>
                </span>
                <ShoppingBagGlyph size={24} />
              </span>
            </div>
            <div className="absolute -left-[30px] top-[500px] w-[280px] p-[18px] pt-[20px] flex flex-col gap-[16px] bg-white rounded-14 shadow-[0_24px_60px_rgba(24,24,27,.18)]">
              <span className="flex items-center gap-[10px]">
                <span className="block w-[34px] h-[34px] overflow-hidden">
                  <Image
                    src="/assets/img-03.png"
                    width={139}
                    height={34}
                    alt=""
                    className="block h-[34px] w-auto max-w-none"
                  />
                </span>
                <span className="text-[17px] font-bold text-ink">Catalog destination</span>
              </span>
              <span className="flex flex-col gap-[6px]">
                <span className="text-[13.5px] text-[#5F5B55]">Choose advertiser</span>
                <span className="flex items-center gap-[12px]">
                  <span className="box-content flex-1 flex items-center justify-between h-[42px] px-[14px] py-0 border border-[#E3DFD8] rounded-8 bg-white text-[15px] font-medium text-ink">
                    Demo Store · US
                    <ChevronDown size={16} strokeWidth={1.8} className="text-nav" />
                  </span>
                  <CircleCheckGlyph size={22} className="flex-none" />
                </span>
              </span>
              <span className="h-px bg-line"></span>
              <span className="flex items-center gap-[14px]">
                <span className="box-content w-[38px] h-[38px] rounded-8 border border-[#E3DFD8] flex items-center justify-center">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#171514"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="3" y="4" width="18" height="16" rx="2"></rect>
                    <path d="M7 9h.01M11 9h6M7 13h.01M11 13h6M7 17h.01M11 17h6"></path>
                  </svg>
                </span>
                <span className="flex-1 text-[14.5px] font-medium text-ink whitespace-nowrap">Product catalog</span>
                <span className="text-[12px] font-semibold text-[#1E7A3A] bg-[#E6F5EA] rounded-full px-[10px] py-[5px] whitespace-nowrap">
                  Connected
                </span>
              </span>
              <span className="text-[13.5px] text-faint">Example account selection</span>
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
        What makes TikTok different
      </p>
      <h2 className="m-0 mb-[44px] text-[46px] leading-[1.06] font-extrabold tracking-[-.035em] text-white max-w-[860px] text-pretty max-xl:text-[length:clamp(30px,3.59vw,46px)]">
        Login, then advertiser, then catalog — three things that are one thing on most channels.
      </h2>
      <div className="grid grid-cols-[1fr_auto_1fr_auto_1fr] gap-[16px] items-center max-lg:grid-cols-1 max-lg:justify-items-stretch">
        <div className="bg-night-card border border-night-line rounded-10 px-[20px] py-[18px]">
          <span className="text-[11.5px] font-bold tracking-[.12em] uppercase text-faint">01 · Login</span>
          <p className="m-0 mt-[10px] text-[16px] font-semibold text-white">TikTok for Business</p>
          <p className="m-0 mt-[6px] text-[13.5px] text-night-muted-2">One OAuth sign-in.</p>
        </div>
        <ArrowRightGlyph size={30} stroke="#E2703A" strokeWidth="1.6" />
        <div className="bg-white border border-line rounded-10 px-[18px] py-[16px] shadow-float">
          <span className="text-[11.5px] font-bold tracking-[.12em] uppercase text-faint">02 · Advertiser</span>
          <div className="mt-[10px] flex flex-col gap-[6px]">
            <div className="flex items-center gap-[10px] px-[10px] py-[9px] border border-ink rounded-[7px] text-[13.5px] font-semibold">
              <span className="box-content w-[12px] h-[12px] rounded-full border-[2px] border-ink bg-ink"></span>
              Northline Sports US
            </div>
            <div className="flex items-center gap-[10px] px-[10px] py-[9px] border border-line rounded-[7px] text-[13.5px] font-medium">
              <span className="box-content w-[12px] h-[12px] rounded-full border-[2px] border-[#C9C1B6] bg-transparent"></span>
              Northline Sports UK
            </div>
            <div className="flex items-center gap-[10px] px-[10px] py-[9px] border border-line rounded-[7px] text-[13.5px] font-medium">
              <span className="box-content w-[12px] h-[12px] rounded-full border-[2px] border-[#C9C1B6] bg-transparent"></span>
              Test advertiser
            </div>
          </div>
        </div>
        <ArrowRightGlyph size={30} stroke="#E2703A" strokeWidth="1.6" />
        <div className="bg-night-card border border-night-line rounded-10 px-[20px] py-[18px]">
          <span className="text-[11.5px] font-bold tracking-[.12em] uppercase text-faint">03 · Catalog</span>
          <p className="m-0 mt-[10px] text-[16px] font-semibold text-white">Northline · Main catalog</p>
          <div className="mt-[10px] flex flex-col gap-[6px] text-[13.5px] text-night-text">
            <span className="flex justify-between">
              <span>In review</span>
              <span className="font-mono text-[12px] text-[#E5B15A]">61</span>
            </span>
            <span className="flex justify-between">
              <span>Approved</span>
              <span className="font-mono text-[12px] text-[#7FB58A]">1,190</span>
            </span>
            <span className="flex justify-between">
              <span>Rejected</span>
              <span className="font-mono text-[12px] text-amber">33</span>
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export const tiktok: ChannelData = {
  slug: "tiktok",
  name: "TikTok",
  title: "TikTok Shop — a product catalog attached to your advertiser account",
  description: "",
  hero: <Hero />,
  connectBorderTop: true,
  behaviorBorderTop: false,
  steps: [
    {
      title: "Authorize with TikTok for Business",
      body: "OAuth sign-in with the login that has access to your advertiser accounts.",
    },
    {
      title: "Select the advertiser account",
      body: "Scout lists them; you choose the one that owns the catalog.",
    },
    {
      title: "Pick or create the catalog",
      body: "An existing catalog under that advertiser, or a new one.",
    },
  ],
  behavior: <Behavior />,
  does: [
    <>Publishes a catalog feed in TikTok&#39;s product specification and keeps it current on your schedule.</>,
    <>Reads product review outcomes and item issues and normalizes them into Scout&#39;s vocabulary.</>,
    <>Maps Shopify images and variants to TikTok&#39;s grouping so a product appears once with its options.</>,
  ],
  requires: [
    <>An advertiser account with catalog access; a personal login alone is not enough.</>,
    <>Vertical-friendly imagery is favoured in placements — Scout can pick a specific image by rule.</>,
    <>Product review by TikTok before items show; Scout reports review state per product.</>,
  ],
  requiresNote: (
    <>
      Scout&#39;s starter template for TikTok pre-maps these from Shopify where a mapping exists, and its diagnostics
      name the field when one is missing.
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
