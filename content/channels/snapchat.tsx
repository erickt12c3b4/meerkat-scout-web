import type { ChannelData } from "@/components/channels/channel-page";
import Image from "next/image";
import { Scaled } from "@/components/site/scaled";
import { ChevronDown, ChevronRight } from "lucide-react";
import { CircleCheckGlyph, SnapchatGhost, UserGlyph } from "@/components/brand-icons";

// Source: Snapchat.dc.html -> /channels/snapchat
// Hero and "Distinguishing behavior" are bespoke compositions; the other sections are data for ChannelPage.

function Hero() {
  return (
    <>
      {/* Snapchat hero */}
      <section className="relative bg-paper pt-[64px] pb-[72px] px-gutter overflow-hidden max-md:pt-[48px] max-md:pb-[48px]">
        <div
          className="absolute -top-[380px] w-[1100px] h-[1100px] rounded-full pointer-events-none bg-[#FFFC00] right-[calc(var(--gutter)-70px+-380px)]"
          aria-hidden="true"
        ></div>
        <div
          className="absolute -top-[520px] w-[1100px] h-[1100px] rounded-full pointer-events-none bg-paper right-[calc(var(--gutter)-70px+-680px)]"
          aria-hidden="true"
        ></div>
        <div
          className="absolute -bottom-[330px] w-[520px] h-[520px] rounded-full pointer-events-none bg-[#FFFC00] right-[calc(var(--gutter)-70px+-120px)]"
          aria-hidden="true"
        ></div>
        <div className="relative z-[2] grid grid-cols-[1fr_640px] gap-[56px] items-center max-xl:grid-cols-2 max-lg:grid-cols-1">
          <div>
            <div className="flex items-center gap-[14px] m-0 mb-[22px]">
              <span className="box-content inline-flex items-center justify-center w-[44px] h-[44px] rounded-10 bg-white border border-line flex-none">
                <SnapchatGhost size={26} className="flex-none" />
              </span>
              <p className="m-0 text-[13px] font-semibold tracking-[.14em] uppercase text-rust">Channels · Snapchat</p>
            </div>
            <h1 className="m-0 text-[50px] leading-[1.08] font-extrabold tracking-[-.035em] text-ink text-pretty max-xl:text-[length:clamp(36px,3.91vw,50px)]">
              A product catalog under the right organization and the right ad account — Scout asks for both.
            </h1>
            <p className="m-0 mt-[28px] text-[17.5px] leading-[1.55] text-body text-pretty max-md:text-[16px]">
              Snapchat nests catalogs under an organization and an ad account. After OAuth, Scout walks you through both
              selections so the catalog lands where your campaigns can reach it.
            </p>
            <div className="flex gap-[36px] mt-[36px] text-[14px] max-xl:flex-wrap max-xl:gap-[16px]">
              <div className="flex flex-col gap-[4px] flex-none">
                <span className="text-[12px] font-bold tracking-[.12em] uppercase text-faint">Type</span>
                <span className="inline-flex items-center gap-[6px] text-[12px] font-bold tracking-[.1em] uppercase text-rust border border-tint-line-strong bg-badge rounded-[4px] px-[9px] py-[5px]">
                  Feed channel
                </span>
              </div>
              <div className="flex flex-col gap-[4px] flex-none max-w-[200px]">
                <span className="text-[12px] font-bold tracking-[.12em] uppercase text-faint">Connects via</span>
                <span className="text-ink font-medium leading-[1.4]">
                  OAuth + organization and ad-account selection
                </span>
              </div>
              <div className="flex flex-col gap-[4px] flex-1 min-w-0">
                <span className="text-[12px] font-bold tracking-[.12em] uppercase text-faint">Who sells here</span>
                <span className="text-ink font-medium leading-[1.4]">
                  Merchants running dynamic product ads or Shopping experiences on Snapchat.
                </span>
              </div>
            </div>
          </div>

          {/* COMPOSITION 640 x 700 */}
          <Scaled width={640} height={700} className="flex-none" aria-hidden="true">
            <span className="absolute left-[465px] top-0 -translate-x-1/2 px-[16px] py-[8px] bg-white rounded-8 shadow-[0_6px_18px_rgba(24,24,27,.10)] text-[13px] font-semibold text-ink whitespace-nowrap">
              Illustrative ad preview
            </span>{" "}
            <svg
              width="300"
              height="200"
              viewBox="0 0 300 200"
              fill="none"
              className="absolute left-[600px] top-[470px] overflow-visible pointer-events-none"
            >
              <path d="M20 120 C 90 130, 160 110, 300 40" stroke="#171514" strokeWidth="8" strokeLinecap="round"></path>
            </svg>
            <div className="absolute left-[290px] top-[50px] w-[350px] h-[640px] border-[8px] border-ink rounded-[36px] bg-[radial-gradient(120%_90%_at_50%_55%,#F8C424_0%,#F1B81C_55%,#E3A60E_100%)] overflow-hidden shadow-[0_30px_70px_rgba(24,24,27,.22)]">
              <span className="absolute left-[18px] right-[18px] top-[16px] grid grid-cols-5 gap-[6px]">
                <span className="h-[3px] rounded-[2px] bg-white"></span>
                <span className="h-[3px] rounded-[2px] bg-white"></span>
                <span className="h-[3px] rounded-[2px] bg-[rgba(255,255,255,.5)]"></span>
                <span className="h-[3px] rounded-[2px] bg-[rgba(255,255,255,.5)]"></span>
                <span className="h-[3px] rounded-[2px] bg-[rgba(255,255,255,.5)]"></span>
              </span>{" "}
              <span className="absolute left-[18px] right-[18px] top-[32px] flex items-center gap-[10px]">
                <span className="w-[32px] h-[32px] rounded-full bg-white flex items-center justify-center">
                  <UserGlyph size={16} />
                </span>
                <span className="flex flex-col gap-[2px] flex-1">
                  <span className="text-[13.5px] font-semibold text-ink">Demo Store</span>
                  <span className="text-[11.5px] text-[rgba(23,21,20,.6)]">Sponsored</span>
                </span>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="#171514">
                  <circle cx="12" cy="5" r="2"></circle>
                  <circle cx="12" cy="12" r="2"></circle>
                  <circle cx="12" cy="19" r="2"></circle>
                </svg>
              </span>{" "}
              <Image
                src="/assets/snap-sneaker.png"
                width={380}
                height={507}
                alt=""
                className="absolute -left-[22px] top-[112px] w-[380px] h-auto [mask-image:linear-gradient(to_bottom,transparent_0,#000_22%)] max-w-none"
              />
              <span className="absolute left-[24px] top-[104px] text-[26px] font-extrabold tracking-[-.03em] leading-[1.15] text-ink">
                Meet your
                <br />
                next move.
              </span>{" "}
              <span className="absolute left-[24px] right-[24px] bottom-[28px] flex items-center justify-center gap-[10px] h-[48px] rounded-[24px] bg-white text-[14.5px] font-semibold text-ink">
                Shop now
                <ChevronRight size={16} className="text-ink" />
              </span>
            </div>
            <div className="absolute left-0 top-[330px] w-[340px] p-[22px] pb-[20px] flex flex-col gap-[16px] bg-white rounded-14 shadow-[0_24px_60px_rgba(24,24,27,.16)]">
              <span className="flex items-center gap-[10px]">
                <span className="block w-[30px] h-[30px] overflow-hidden">
                  <Image
                    src="/assets/img-03.png"
                    width={122}
                    height={30}
                    alt=""
                    className="block h-[30px] w-auto max-w-none"
                  />
                </span>
                <span className="text-[16px] font-bold text-ink flex-1">Catalog destination</span>
                <span className="w-[30px] h-[30px] rounded-8 bg-[#FFFC00] flex items-center justify-center">
                  <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true" className="flex-none">
                    <path
                      fill="#171514"
                      d="M12 3.6c2.4 0 4 1.8 4 4.2 0 .8-.1 1.5-.1 2 .4.1.9.1 1.3 0 .4-.1.8.1.8.5 0 .5-.6.9-1.3 1.1-.5.2-.8.3-.8.5.1.8 1.9 2.8 3.3 3.2.4.1.5.5.3.8-.5.5-1.7.8-2.3.9-.3 0-.4.3-.4.5-.1.4-.1.6-.5.6s-1.2-.3-1.9-.3c-1 0-1.5.9-2.8.9h-.2c-1.3 0-1.8-.9-2.8-.9-.7 0-1.5.3-1.9.3s-.4-.2-.5-.6c0-.2-.1-.5-.4-.5-.6-.1-1.8-.4-2.3-.9-.2-.3-.1-.7.3-.8 1.4-.4 3.2-2.4 3.3-3.2 0-.2-.3-.3-.8-.5-.7-.2-1.3-.6-1.3-1.1 0-.4.4-.6.8-.5.4.1.9.1 1.3 0 0-.5-.1-1.2-.1-2 0-2.4 1.6-4.2 4-4.2z"
                    ></path>
                  </svg>
                </span>
              </span>
              <span className="text-[14px] text-[#5F5B55] -mt-[6px]">Choose where your catalog belongs</span>
              <span className="flex flex-col gap-[6px]">
                <span className="text-[13px] font-medium text-[#5F5B55]">Organization</span>
                <span className="flex items-center gap-[12px]">
                  <span className="box-content flex-1 flex items-center justify-between h-[40px] px-[14px] py-0 border border-[#E3DFD8] rounded-8 bg-white text-[14.5px] font-medium text-ink">
                    Demo Store
                    <ChevronDown size={16} strokeWidth={1.8} className="text-nav" />
                  </span>
                  <CircleCheckGlyph size={22} className="flex-none" />
                </span>
              </span>
              <span className="flex flex-col gap-[6px]">
                <span className="text-[13px] font-medium text-[#5F5B55]">Ad account</span>
                <span className="flex items-center gap-[12px]">
                  <span className="box-content flex-1 flex items-center justify-between h-[40px] px-[14px] py-0 border border-[#E3DFD8] rounded-8 bg-white text-[14.5px] font-medium text-ink">
                    Demo Store · US
                    <ChevronDown size={16} strokeWidth={1.8} className="text-nav" />
                  </span>
                  <CircleCheckGlyph size={22} className="flex-none" />
                </span>
              </span>
              <span className="flex items-center gap-[14px] p-[16px] border border-[#E3DFD8] rounded-10">
                <svg
                  width="26"
                  height="26"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#171514"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path>
                  <path d="M14 2v4a2 2 0 0 0 2 2h4"></path>
                </svg>
                <span className="text-[14.5px] font-medium text-ink flex-1">Spring collection</span>
                <span className="text-[12px] font-semibold text-[#1E7A3A] bg-[#E6F5EA] rounded-full px-[11px] py-[5px]">
                  Connected
                </span>
              </span>
              <span className="text-[13px] text-faint">Example account selections</span>
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
        What makes Snapchat different
      </p>
      <h2 className="m-0 mb-[44px] text-[46px] leading-[1.06] font-extrabold tracking-[-.035em] text-white max-w-[860px] text-pretty max-xl:text-[length:clamp(30px,3.59vw,46px)]">
        Organization, then ad account. Two selections most channels don&#39;t make you make.
      </h2>
      <div className="grid grid-cols-[1fr_1fr] gap-[20px] max-lg:grid-cols-1">
        <div className="bg-white border border-line rounded-12 shadow-float overflow-hidden">
          <div className="px-[20px] py-[14px] border-b border-b-line">
            <span className="text-[11.5px] font-bold tracking-[.12em] uppercase text-faint">
              Step 2 of 3 · Organization
            </span>
          </div>
          <div className="px-[14px] py-[10px] flex flex-col gap-[6px]">
            <div className="flex items-center gap-[10px] px-[12px] py-[11px] border border-ink rounded-8 text-[14px] font-semibold">
              <span className="box-content w-[14px] h-[14px] rounded-full border-[2px] border-ink bg-ink"></span>
              Northline Sports Inc.
            </div>
            <div className="flex items-center gap-[10px] px-[12px] py-[11px] border border-line rounded-8 text-[14px] font-medium">
              <span className="box-content w-[14px] h-[14px] rounded-full border-[2px] border-[#C9C1B6] bg-transparent"></span>
              Courtside Media (agency)
            </div>
          </div>
        </div>
        <div className="bg-white border border-line rounded-12 shadow-float overflow-hidden">
          <div className="px-[20px] py-[14px] border-b border-b-line">
            <span className="text-[11.5px] font-bold tracking-[.12em] uppercase text-faint">
              Step 3 of 3 · Ad account
            </span>
          </div>
          <div className="px-[14px] py-[10px] flex flex-col gap-[6px]">
            <div className="flex items-center gap-[10px] px-[12px] py-[11px] border border-ink rounded-8 text-[14px] font-semibold">
              <span className="box-content w-[14px] h-[14px] rounded-full border-[2px] border-ink bg-ink"></span>
              Northline · US Prospecting
            </div>
            <div className="flex items-center gap-[10px] px-[12px] py-[11px] border border-line rounded-8 text-[14px] font-medium">
              <span className="box-content w-[14px] h-[14px] rounded-full border-[2px] border-[#C9C1B6] bg-transparent"></span>
              Northline · Retargeting
            </div>
            <div className="flex items-center gap-[10px] px-[12px] py-[11px] border border-line rounded-8 text-[14px] font-medium">
              <span className="box-content w-[14px] h-[14px] rounded-full border-[2px] border-[#C9C1B6] bg-transparent"></span>
              Northline · Test
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export const snapchat: ChannelData = {
  slug: "snapchat",
  name: "Snapchat",
  title: "Snapchat — a product catalog under the right organization and ad account",
  description: "",
  hero: <Hero />,
  connectBorderTop: true,
  behaviorBorderTop: false,
  steps: [
    {
      title: "Authorize with Snapchat",
      body: "OAuth sign-in to Snapchat Ads Manager.",
    },
    {
      title: "Select the organization",
      body: "Scout lists the organizations your login can manage.",
    },
    {
      title: "Select the ad account",
      body: "Under that organization, choose the ad account that owns the catalog.",
    },
  ],
  behavior: <Behavior />,
  does: [
    <>Publishes a catalog feed in Snapchat&#39;s product specification, kept current on your schedule.</>,
    <>Reads catalog processing results and item errors and normalizes them.</>,
    <>Keeps availability accurate so ads don&#39;t promote products you&#39;ve sold out of.</>,
  ],
  requires: [
    <>An organization and an ad account — a Snapchat login alone can&#39;t own a catalog.</>,
    <>A public product URL per item, reachable by Snapchat&#39;s crawler.</>,
    <>Image dimensions suitable for vertical placements; Scout can select by rule.</>,
  ],
  requiresNote: (
    <>
      Scout&#39;s starter template for Snapchat pre-maps these from Shopify where a mapping exists, and its diagnostics
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
