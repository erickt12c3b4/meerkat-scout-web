import type { ChannelData } from "@/components/channels/channel-page";
import Image from "next/image";
import Link from "next/link";
import { Scaled } from "@/components/site/scaled";
import { MapPin, Shield } from "lucide-react";
import { CircleCheckGlyph } from "@/components/brand-icons";

// Source: eBay.dc.html -> /channels/ebay
// Hero and "Distinguishing behavior" are bespoke compositions; the other sections are data for ChannelPage.

function Hero() {
  return (
    <>
      {/* eBay hero */}
      <section className="relative bg-night pt-[84px] pb-[72px] px-gutter overflow-hidden max-md:pt-[56px] max-md:pb-[48px]">
        <div
          className="absolute top-0 w-[820px] h-full pointer-events-none bg-[radial-gradient(rgba(255,255,255,.07)_1px,transparent_1.5px)] bg-[length:22px_22px] [mask-image:radial-gradient(closest-side_at_60%_50%,#000_30%,transparent_100%)] right-[calc(var(--gutter)-70px)]"
          aria-hidden="true"
        ></div>
        <div
          className="absolute -top-[60px] w-[900px] h-[700px] pointer-events-none bg-[radial-gradient(closest-side,rgba(229,129,58,.16),transparent_70%)] right-[calc(var(--gutter)-70px+-100px)]"
          aria-hidden="true"
        ></div>
        <div className="relative z-[2] grid grid-cols-[1fr_640px] gap-[40px] items-center max-xl:grid-cols-2 max-lg:grid-cols-1">
          <div>
            <div className="flex items-center gap-[14px] m-0 mb-[22px]">
              <span className="box-content inline-flex items-center justify-center w-[44px] h-[44px] rounded-10 bg-white border border-night-line flex-none">
                <span
                  className="inline-flex items-baseline text-[21px] font-bold tracking-[-.03em] flex-none h-[26px] items-center"
                  aria-hidden="true"
                >
                  <span className="text-[#E53238]">e</span>
                  <span className="text-[#0064D2]">b</span>
                  <span className="text-[#F5AF02]">a</span>
                  <span className="text-[#86B817]">y</span>
                </span>
              </span>
              <p className="m-0 text-[13px] font-semibold tracking-[.14em] uppercase text-rust-bright">
                Channels · eBay
              </p>
            </div>
            <h1 className="m-0 text-[50px] leading-[1.08] font-extrabold tracking-[-.035em] text-white text-pretty max-xl:text-[length:clamp(36px,3.91vw,50px)]">
              Category aspects from the Taxonomy API — plus two things eBay demands that nothing else does.
            </h1>
            <p className="m-0 mt-[28px] text-[17.5px] leading-[1.55] text-night-muted-2 max-w-[680px] text-pretty max-md:text-[16px]">
              eBay resolves your product to a leaf category and asks for that category&#39;s aspects. Then it asks for
              two things no feed channel does: a set of business policies and an item location. Without both, the
              listing is rejected outright, whatever else is right.
            </p>
            <div className="flex gap-[36px] mt-[36px] text-[14px] max-xl:flex-wrap max-xl:gap-[16px]">
              <div className="flex flex-col gap-[4px] flex-none">
                <span className="text-[12px] font-bold tracking-[.12em] uppercase text-faint">Type</span>
                <span className="inline-flex items-center gap-[6px] text-[12px] font-bold tracking-[.1em] uppercase text-white bg-rust rounded-[4px] px-[9px] py-[5px]">
                  Marketplace
                </span>
              </div>
              <div className="flex flex-col gap-[4px] flex-none whitespace-nowrap">
                <span className="text-[12px] font-bold tracking-[.12em] uppercase text-faint">Connects via</span>
                <span className="text-white font-medium">OAuth + marketplace selection</span>
              </div>
              <div className="flex flex-col gap-[4px] flex-1 min-w-0">
                <span className="text-[12px] font-bold tracking-[.12em] uppercase text-faint">Who sells here</span>
                <span className="text-white font-medium leading-[1.4]">
                  Merchants listing on eBay who want categories and aspects resolved live and the two eBay-only
                  prerequisites checked before submission.
                </span>
              </div>
            </div>
            <p className="m-0 mt-[34px] text-[15px] leading-[1.55] text-faint max-w-[680px]">
              A feed channel takes your catalog as you send it. A marketplace makes you conform to its own. That
              difference is why this page — and Scout&#39;s work here — looks different from the feed channels.{" "}
              <Link className="text-amber" href="/channels#marketplaces">
                How Scout handles marketplaces →
              </Link>
            </p>
          </div>

          {/* COMPOSITION 640 x 440 */}
          <Scaled width={640} height={440} className="flex-none" aria-hidden="true">
            <svg
              width="640"
              height="440"
              viewBox="0 0 640 440"
              fill="none"
              className="absolute inset-0 pointer-events-none overflow-visible"
            >
              <defs>
                <radialGradient id="ebDotG">
                  <stop offset="0" stopColor="#F6A05C" stopOpacity=".8"></stop>
                  <stop offset="1" stopColor="#F6A05C" stopOpacity="0"></stop>
                </radialGradient>
              </defs>
              <g
                style={{ animation: "msFlow 1.6s linear infinite" }}
                stroke="#E5813A"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeDasharray="3 6"
              >
                <path d="M330 95 H352 Q364 95 364 107 V260 Q364 272 376 272"></path>
                <path d="M270 266 H376 M376 266 L376 272"></path>
                <path d="M270 388 H352 Q364 388 364 376 V284 Q364 272 376 272"></path>
                <path d="M472 272 H494"></path>
              </g>
              <g>
                <circle cx="364" cy="180" r="15" fill="url(#ebDotG)"></circle>
                <circle cx="364" cy="180" r="3.5" fill="#F6A05C"></circle>
                <circle cx="364" cy="364" r="15" fill="url(#ebDotG)"></circle>
                <circle cx="364" cy="364" r="3.5" fill="#F6A05C"></circle>
                <circle cx="322" cy="266" r="15" fill="url(#ebDotG)"></circle>
                <circle cx="322" cy="266" r="3.5" fill="#F6A05C"></circle>
                <circle cx="483" cy="272" r="15" fill="url(#ebDotG)"></circle>
                <circle cx="483" cy="272" r="3.5" fill="#F6A05C"></circle>
              </g>
            </svg>
            <div className="absolute left-0 top-0 w-[330px] h-[190px] p-[14px] grid grid-cols-[100px_1fr] grid-rows-[100px_auto] gap-y-[14px] gap-x-[14px] bg-[#141210] border border-night-line rounded-14 shadow-[0_18px_44px_rgba(0,0,0,.45)]">
              <span className="block rounded-8 overflow-hidden bg-[#D9D7D3]">
                <Image
                  src="/assets/product-shoe-square.png"
                  width={200}
                  height={200}
                  alt=""
                  className="block w-full h-full object-cover rounded-8 max-w-none"
                />
              </span>
              <span className="flex flex-col justify-center gap-[10px] pl-[2px] border-b border-b-night-line">
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#fff"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="9" y="3" width="6" height="5" rx="1"></rect>
                  <rect x="2" y="16" width="6" height="5" rx="1"></rect>
                  <rect x="16" y="16" width="6" height="5" rx="1"></rect>
                  <path d="M12 8v4M5 16v-2a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v2"></path>
                </svg>
                <span className="text-[16px] font-medium text-white">Category &amp; aspects</span>
              </span>
              <span className="col-span-full flex items-center gap-[8px]">
                <span className="text-[13.5px] font-medium text-white bg-[#2A2622] rounded-8 px-[14px] py-[8px]">
                  Brand
                </span>
                <span className="text-[13.5px] font-medium text-white bg-[#2A2622] rounded-8 px-[14px] py-[8px]">
                  Size
                </span>
                <span className="text-[13.5px] font-medium text-white bg-[#2A2622] rounded-8 px-[14px] py-[8px]">
                  Color
                </span>
                <CircleCheckGlyph size={24} stroke="#5FB56E" strokeWidth="1.6" className="ml-auto" />
              </span>
            </div>
            <div className="absolute left-0 top-[222px] w-[270px] h-[88px] px-[22px] py-0 flex items-center gap-[16px] bg-[#141210] border border-night-line rounded-14 shadow-[0_18px_44px_rgba(0,0,0,.45)]">
              <Shield size={32} strokeWidth={1.5} className="text-white" />
              <span className="text-[16px] font-medium text-white flex-1">Business policies</span>
              <CircleCheckGlyph size={24} stroke="#5FB56E" strokeWidth="1.6" />
            </div>
            <div className="absolute left-0 top-[344px] w-[270px] h-[88px] px-[22px] py-0 flex items-center gap-[16px] bg-[#141210] border border-night-line rounded-14 shadow-[0_18px_44px_rgba(0,0,0,.45)]">
              <MapPin size={32} strokeWidth={1.5} className="text-white" />
              <span className="text-[16px] font-medium text-white flex-1">Item location</span>
              <CircleCheckGlyph size={24} stroke="#5FB56E" strokeWidth="1.6" />
            </div>
            <div className="box-content absolute left-[372px] top-[222px] w-[100px] h-[100px] flex items-center justify-center bg-[#141210] border border-[#3A352F] rounded-16 shadow-[0_18px_44px_rgba(0,0,0,.5)]">
              <span className="block w-[58px] h-[58px] overflow-hidden">
                <Image
                  src="/assets/img-03-light.png"
                  width={237}
                  height={58}
                  alt=""
                  className="block h-[58px] w-auto max-w-none"
                />
              </span>
            </div>
            <div className="absolute left-[494px] top-[122px] w-[146px] h-[300px] p-[14px] pt-[18px] flex flex-col items-center gap-[12px] bg-[#141210] border border-night-line rounded-16 shadow-[0_18px_44px_rgba(0,0,0,.5)]">
              <span
                className="inline-flex items-baseline text-[34px] font-bold tracking-[-.04em] leading-none"
                aria-hidden="true"
              >
                <span className="text-[#E53238]">e</span>
                <span className="text-[#0064D2]">b</span>
                <span className="text-[#F5AF02]">a</span>
                <span className="text-[#86B817]">y</span>
              </span>
              <span className="block w-full h-[96px] rounded-8 overflow-hidden bg-[#D9D7D3]">
                <Image
                  src="/assets/product-shoe-square.png"
                  width={200}
                  height={200}
                  alt=""
                  className="block w-full h-full object-cover rounded-8 max-w-none"
                />
              </span>
              <span className="flex flex-col gap-[8px] w-full">
                <span className="block w-full h-[8px] rounded-[4px] bg-[#3A352F]"></span>
                <span className="block w-[72%] h-[8px] rounded-[4px] bg-night-line"></span>
                <span className="block w-[56%] h-[8px] rounded-[4px] bg-night-line"></span>
              </span>
              <span className="mt-auto flex items-center justify-center gap-[7px] w-full px-0 py-[9px] rounded-8 bg-[#1C2A1E] border border-[#2F4A33] text-[13px] font-semibold text-[#8FD69A] whitespace-nowrap">
                <CircleCheckGlyph size={15} stroke="#5FB56E" strokeWidth="2" />
                Ready to submit
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
        What makes eBay different
      </p>
      <h2 className="m-0 mb-[44px] text-[46px] leading-[1.06] font-extrabold tracking-[-.035em] text-white max-w-[860px] text-pretty max-xl:text-[length:clamp(30px,3.59vw,46px)]">
        The gate every eBay listing has to pass — before category and aspects even matter.
      </h2>
      <div className="grid grid-cols-[1fr_1fr] gap-[20px] items-start max-lg:grid-cols-1">
        <div className="bg-white border border-line rounded-12 shadow-float overflow-hidden">
          <div className="px-[20px] py-[14px] bg-paper-warm border-b border-b-line">
            <span className="text-[11.5px] font-bold tracking-[.12em] uppercase text-faint">
              eBay.com · account prerequisites
            </span>
          </div>
          <div className="pt-[6px] pb-[10px] px-[20px] flex flex-col">
            <div className="grid grid-cols-[20px_1fr_auto] gap-[12px] items-center px-0 py-[11px] border-b border-b-tint text-[14.5px] max-lg:grid-cols-1">
              <span className="text-ok-text font-bold">✓</span>
              <span className="font-semibold text-ink">Fulfillment policy</span>
              <span className="text-[12.5px] text-faint">&quot;Standard · 2-day handling&quot;</span>
            </div>
            <div className="grid grid-cols-[20px_1fr_auto] gap-[12px] items-center px-0 py-[11px] border-b border-b-tint text-[14.5px] max-lg:grid-cols-1">
              <span className="text-ok-text font-bold">✓</span>
              <span className="font-semibold text-ink">Payment policy</span>
              <span className="text-[12.5px] text-faint">&quot;Managed payments&quot;</span>
            </div>
            <div className="grid grid-cols-[20px_1fr_auto] gap-[12px] items-center px-0 py-[11px] border-b border-b-tint text-[14.5px] bg-[#FFFBF6] -mx-[20px] my-0 pl-[20px] pr-[20px] max-lg:grid-cols-1">
              <span className="text-rust font-bold">✕</span>
              <span className="font-semibold text-rust">Return policy</span>
              <span className="text-[12.5px] text-faint">None on account — create in Seller Hub</span>
            </div>
            <div className="grid grid-cols-[20px_1fr_auto] gap-[12px] items-center px-0 py-[11px] border-b border-b-tint text-[14.5px] bg-[#FFFBF6] -mx-[20px] my-0 pl-[20px] pr-[20px] max-lg:grid-cols-1">
              <span className="text-rust font-bold">✕</span>
              <span className="font-semibold text-rust">Item location</span>
              <span className="text-[12.5px] text-faint">No postal code set</span>
            </div>
          </div>
          <div className="px-[20px] py-[12px] border-t border-t-line bg-paper-warm text-[13.5px] text-rust font-semibold">
            2 prerequisites missing. Submission blocked until both exist — no category or aspect check can rescue it.
          </div>
        </div>
        <div className="bg-night-card border border-night-line rounded-10 px-[20px] py-[18px] px-[24px] py-[22px]">
          <span className="text-[11.5px] font-bold tracking-[.12em] uppercase text-faint">
            Then: category and aspects
          </span>
          <p className="m-0 mt-[10px] font-mono text-[15px] text-white">
            Men&#39;s Athletic Shoes <span className="text-faint">· 15709</span>
          </p>
          <div className="mt-[8px] flex items-center gap-[8px]">
            <span className="text-[12px] font-bold text-[#7FB58A] bg-[rgba(78,122,87,.18)] rounded-full px-[9px] py-[3px]">
              High confidence
            </span>
          </div>
          <p className="m-0 mt-[10px] text-[13.5px] leading-[1.55] text-night-muted-2">
            <strong className="text-night-text font-semibold">Because:</strong> the Taxonomy API returned a single leaf
            for the title; the &quot;men&quot; tag agrees with the gendered category.
          </p>
          <ul className="m-0 mt-[14px] p-0 list-none flex flex-col gap-[5px] font-mono text-[12.5px] text-night-text">
            <li>Brand ✓</li>
            <li>US Shoe Size ✓</li>
            <li>Type ✓</li>
            <li>UPC ✓</li>
            <li className="text-faint">Style, Department — recommended, not required</li>
          </ul>
        </div>
      </div>
    </>
  );
}

export const ebay: ChannelData = {
  slug: "ebay",
  name: "eBay",
  title: "eBay — category aspects, business policies and item location",
  description: "",
  hero: <Hero />,
  connectBorderTop: false,
  behaviorBorderTop: true,
  steps: [
    {
      title: "Authorize with eBay",
      body: "OAuth sign-in to the eBay seller account.",
    },
    {
      title: "Pick the marketplace",
      body: "eBay.com, eBay.co.uk, and so on — categories and aspects differ per site.",
    },
    {
      title: "Scout checks business policies and location",
      body: "It reads whether fulfillment, payment, and return policies exist on the account and whether an item location is set — and tells you before you try to list.",
    },
  ],
  behavior: <Behavior />,
  does: [
    <>
      Resolves each product to a leaf category through eBay&#39;s Taxonomy API, with confidence and reason, and
      validates the category&#39;s required aspects.
    </>,
    <>
      Checks for the three business policies and an item location up front, and blocks submission with a plain
      explanation if any is missing.
    </>,
    <>Translates listing errors into Scout&#39;s vocabulary and names the aspect or policy behind each.</>,
  ],
  requires: [
    <>Business policies — fulfillment, payment, and return — created on the eBay account and assigned per listing.</>,
    <>An item location: the country and postal code the item ships from.</>,
    <>Required aspects per leaf category, from eBay&#39;s Taxonomy API for the marketplace you&#39;re listing on.</>,
  ],
  requiresNote: (
    <>
      Scout&#39;s starter template for eBay pre-maps these from Shopify where a mapping exists, and its diagnostics name
      the field when one is missing.
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
