import type { ChannelData } from "@/components/channels/channel-page";
import Image from "next/image";
import Link from "next/link";
import { Scaled } from "@/components/site/scaled";
import { LinkIcon } from "lucide-react";
import { CircleCheckGlyph, PinterestP } from "@/components/brand-icons";

// Source: Pinterest.dc.html -> /channels/pinterest
// Hero and "Distinguishing behavior" are bespoke compositions; the other sections are data for ChannelPage.

function Hero() {
  return (
    <>
      {/* Pinterest hero */}
      <section className="relative bg-paper pt-[64px] pb-0 px-gutter overflow-hidden max-md:pt-[48px]">
        <div
          className="absolute top-0 w-[600px] h-full pointer-events-none bg-[#FBE4E6] rounded-[280px_280px_0_0] left-[calc(var(--gutter)-70px+840px)]"
          aria-hidden="true"
        ></div>
        <div
          className="absolute top-[120px] w-[500px] h-[1000px] pointer-events-none bg-[#E60023] rounded-[235px_235px_0_0] left-[calc(var(--gutter)-70px+890px)]"
          aria-hidden="true"
        ></div>
        <div className="relative z-[2] grid grid-cols-[1fr_680px] gap-[40px] items-center pb-0 max-xl:grid-cols-2 max-lg:grid-cols-1">
          <div className="pb-[72px]">
            <div className="flex items-center gap-[14px] m-0 mb-[22px]">
              <span className="box-content inline-flex items-center justify-center w-[44px] h-[44px] rounded-10 bg-white border border-line flex-none">
                <PinterestP size={26} className="flex-none" />
              </span>
              <p className="m-0 text-[13px] font-semibold tracking-[.14em] uppercase text-rust">Channels · Pinterest</p>
            </div>
            <h1 className="m-0 text-[50px] leading-[1.08] font-extrabold tracking-[-.035em] text-ink text-pretty max-xl:text-[length:clamp(36px,3.91vw,50px)]">
              Your products as Product Pins — priced, in stock, and linked back to the page that sells them.
            </h1>
            <p className="m-0 mt-[28px] text-[17.5px] leading-[1.55] text-body text-pretty max-md:text-[16px]">
              Pinterest turns a catalog feed into Product Pins that carry live price and availability. It rewards
              catalogs that look good at a glance, which makes the image field the one to get right.
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
                  Merchants with visual, lifestyle, or home-and-apparel catalogs, where discovery happens by browsing
                  rather than searching.
                </span>
              </div>
            </div>
          </div>

          {/* COMPOSITION 680 x 790 */}
          <Scaled width={680} height={790} className="flex-none" aria-hidden="true">
            <span className="absolute right-0 top-[6px] text-[14px] font-semibold text-rust-button">
              Illustrative Product Pins
            </span>
            <div className="absolute left-[120px] top-[50px] w-[290px] bg-white rounded-16 overflow-hidden shadow-[0_24px_60px_rgba(24,24,27,.22)]">
              <span className="relative block h-[400px] overflow-hidden">
                <Image
                  src="/assets/pin-chair.png"
                  width={720}
                  height={960}
                  alt=""
                  sizes="(max-width: 768px) 50vw, 240px"
                  className="block w-full h-full object-cover max-w-none"
                />
                <span className="absolute left-[14px] top-[14px] w-[30px] h-[30px] rounded-full bg-white flex items-center justify-center shadow-[0_2px_6px_rgba(0,0,0,.12)]">
                  <PinterestP size={22} />
                </span>
                <span className="absolute right-[14px] top-[14px] h-[34px] px-[16px] py-0 flex items-center rounded-[17px] bg-[#E60023] text-white text-[14px] font-semibold">
                  Save
                </span>
              </span>
              <span className="flex flex-col gap-[10px] pt-[18px] pb-[22px] pr-[18px] pl-[96px]">
                <span className="text-[17px] font-bold text-ink">Sculptural lounge chair</span>
                <span className="relative inline-flex items-center gap-[14px] text-[15px] font-semibold text-ink self-start px-[10px] py-[6px]">
                  $349
                  <span className="inline-flex items-center gap-[7px] text-[14px] text-ink">
                    <span className="w-[8px] h-[8px] rounded-full bg-[#2E9E4F]"></span>In stock
                  </span>
                  <svg
                    width="176"
                    height="42"
                    viewBox="0 0 176 42"
                    fill="none"
                    stroke="#E60023"
                    strokeWidth="2"
                    className="absolute -left-[14px] -top-[4px] overflow-visible"
                  >
                    <path d="M12 22c8-14 60-20 104-16 42 4 58 12 52 22-6 12-70 16-122 8C14 32 4 30 12 22z"></path>
                  </svg>
                </span>
                <span className="inline-flex items-center gap-[8px] text-[14px] text-ink">
                  <LinkIcon size={15} strokeWidth={1.6} className="text-ink" />
                  demo-store.example
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#171514"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M15 3h6v6M10 14 21 3M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  </svg>
                </span>
              </span>
            </div>
            <div className="absolute left-[424px] top-[80px] w-[256px] bg-white rounded-16 overflow-hidden shadow-[0_20px_50px_rgba(24,24,27,.16)]">
              <span className="relative block h-[240px] overflow-hidden">
                <Image
                  src="/assets/pin-lamp.png"
                  width={600}
                  height={600}
                  alt=""
                  sizes="(max-width: 768px) 50vw, 240px"
                  className="block w-full h-full object-cover max-w-none"
                />
                <span className="absolute left-[14px] top-[14px] w-[30px] h-[30px] rounded-full bg-white flex items-center justify-center shadow-[0_2px_6px_rgba(0,0,0,.12)]">
                  <PinterestP size={22} />
                </span>
                <span className="absolute right-[14px] top-[14px] h-[34px] px-[16px] py-0 flex items-center rounded-[17px] bg-[#E60023] text-white text-[14px] font-semibold">
                  Save
                </span>
              </span>
              <span className="flex flex-col gap-[8px] pt-[16px] pb-[20px] px-[18px]">
                <span className="text-[16px] font-bold text-ink">Ceramic table lamp</span>
                <span className="flex items-center gap-[14px] text-[15px] font-semibold text-ink">
                  $89
                  <span className="inline-flex items-center gap-[7px] text-[14px] text-ink">
                    <span className="w-[8px] h-[8px] rounded-full bg-[#2E9E4F]"></span>In stock
                  </span>
                </span>
              </span>
            </div>
            <div className="absolute left-[424px] top-[438px] w-[256px] bg-white rounded-16 overflow-hidden shadow-[0_20px_50px_rgba(24,24,27,.16)]">
              <span className="relative block h-[240px] overflow-hidden">
                <Image
                  src="/assets/pin-bag.png"
                  width={600}
                  height={600}
                  alt=""
                  sizes="(max-width: 768px) 50vw, 240px"
                  className="block w-full h-full object-cover max-w-none"
                />
                <span className="absolute left-[14px] top-[14px] w-[30px] h-[30px] rounded-full bg-white flex items-center justify-center shadow-[0_2px_6px_rgba(0,0,0,.12)]">
                  <PinterestP size={22} />
                </span>
                <span className="absolute right-[14px] top-[14px] h-[34px] px-[16px] py-0 flex items-center rounded-[17px] bg-[#E60023] text-white text-[14px] font-semibold">
                  Save
                </span>
              </span>
              <span className="flex flex-col gap-[8px] pt-[16px] pb-[20px] px-[18px]">
                <span className="text-[16px] font-bold text-ink">Everyday shoulder bag</span>
                <span className="flex items-center gap-[14px] text-[15px] font-semibold text-ink">
                  $129
                  <span className="inline-flex items-center gap-[7px] text-[14px] text-ink">
                    <span className="w-[8px] h-[8px] rounded-full bg-[#2E9E4F]"></span>In stock
                  </span>
                </span>
              </span>
            </div>
            <div className="absolute -left-[40px] top-[490px] w-[236px] p-[18px] pt-[20px] flex flex-col gap-[16px] bg-white rounded-14 shadow-[0_24px_60px_rgba(24,24,27,.18)]">
              <span className="flex items-center gap-[10px]">
                <span className="block w-[28px] h-[28px] overflow-hidden">
                  <Image
                    src="/assets/img-03.png"
                    width={114}
                    height={28}
                    alt=""
                    className="block h-[28px] w-auto max-w-none"
                  />
                </span>
                <span className="text-[15.5px] font-bold text-ink">Pin readiness</span>
              </span>
              <span className="flex items-center gap-[12px]">
                <span className="w-[26px] h-[26px] rounded-6 bg-[#F3F0EA] flex items-center justify-center flex-none">
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#171514"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="3" y="3" width="18" height="18" rx="2"></rect>
                    <circle cx="9" cy="9" r="2"></circle>
                    <path d="m21 15-3.1-3.1a2 2 0 0 0-2.8 0L6 21"></path>
                  </svg>
                </span>
                <span className="flex-1 text-[14.5px] text-ink">Image ready</span>
                <CircleCheckGlyph size={22} />
              </span>
              <span className="flex items-center gap-[12px]">
                <span className="w-[26px] h-[26px] rounded-6 bg-[#F3F0EA] flex items-center justify-center flex-none">
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#171514"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="3" y="3" width="18" height="18" rx="2"></rect>
                    <path d="m8 12 3 3 5-6"></path>
                  </svg>
                </span>
                <span className="flex-1 text-[14.5px] text-ink">Price synced</span>
                <CircleCheckGlyph size={22} />
              </span>
              <span className="flex items-center gap-[12px]">
                <span className="w-[26px] h-[26px] rounded-6 bg-[#F3F0EA] flex items-center justify-center flex-none">
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#171514"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"></path>
                    <path d="M3 6h18"></path>
                    <path d="m9 13 2 2 4-4"></path>
                  </svg>
                </span>
                <span className="flex-1 text-[14.5px] text-ink">Availability live</span>
                <CircleCheckGlyph size={22} />
              </span>
              <span className="flex items-center gap-[12px]">
                <span className="w-[26px] h-[26px] rounded-6 bg-[#F3F0EA] flex items-center justify-center flex-none">
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#171514"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="3" y="3" width="18" height="18" rx="2"></rect>
                    <path d="M14 8h2v2M16 8l-5 5"></path>
                    <path d="M8 14v2h2"></path>
                  </svg>
                </span>
                <span className="flex-1 text-[14.5px] text-ink">Product page linked</span>
                <CircleCheckGlyph size={22} />
              </span>
              <span className="text-[13px] text-faint">Example catalog checks</span>
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
        What makes Pinterest different
      </p>
      <h2 className="m-0 mb-[44px] text-[46px] leading-[1.06] font-extrabold tracking-[-.035em] text-white max-w-[860px] text-pretty max-xl:text-[length:clamp(30px,3.59vw,46px)]">
        The same product, two images, one rule deciding which becomes the Pin.
      </h2>
      <div className="grid grid-cols-[1fr_1fr_1.25fr] gap-[24px] items-start max-lg:grid-cols-1">
        <div className="bg-white border border-line rounded-14 overflow-hidden shadow-float">
          <div className="relative h-[290px] overflow-hidden">
            <Image
              src="/assets/pin-studio.png"
              width={1000}
              height={667}
              alt=""
              sizes="(max-width: 768px) 50vw, 240px"
              className="block w-full h-full object-cover max-w-none"
            />
            <span className="absolute left-[14px] top-[14px] px-[11px] py-[7px] rounded-6 bg-[rgba(255,255,255,.85)] [backdrop-filter:blur(6px)] text-[12px] font-bold tracking-[.1em] uppercase text-[#5F5B55]">
              Images[0] · Studio
            </span>
          </div>
          <div className="pt-[18px] pb-[22px] px-[20px]">
            <p className="m-0 text-[16px] font-semibold text-ink">Northline Court Shoe 2</p>
            <p className="m-0 mt-[6px] text-[14.5px] text-body">$129.00 · In stock</p>
          </div>
        </div>
        <div className="bg-white border-[2px] border-rust rounded-14 overflow-hidden shadow-float">
          <div className="relative h-[290px] overflow-hidden">
            <Image
              src="/assets/pin-court.png"
              width={1000}
              height={500}
              alt=""
              sizes="(max-width: 768px) 50vw, 240px"
              className="block w-full h-full object-cover object-[35%_50%] max-w-none"
            />
            <span className="absolute left-[14px] top-[14px] px-[11px] py-[7px] rounded-6 bg-[rgba(23,21,20,.82)] [backdrop-filter:blur(6px)] text-[12px] font-bold tracking-[.1em] uppercase text-white">
              Images[2] · On court
            </span>
          </div>
          <div className="pt-[18px] pb-[22px] px-[20px]">
            <p className="m-0 text-[16px] font-semibold text-ink">Northline Court Shoe 2</p>
            <p className="m-0 mt-[6px] text-[14.5px] text-body">$129.00 · In stock</p>
            <p className="m-0 mt-[12px] text-[12px] font-bold tracking-[.1em] uppercase text-rust">Used for the Pin</p>
          </div>
        </div>
        <div className="bg-night-card border border-night-line rounded-14 px-[28px] py-[30px]">
          <span className="text-[11.5px] font-bold tracking-[.12em] uppercase text-faint">Rule · Pinterest feed</span>
          <div className="mt-[10px] font-mono text-[14px] leading-[1.85] text-[#EDEAE6]">
            <span className="text-rust-bright">set</span> image_link
            <br />= images[alt contains &quot;lifestyle&quot;][0]
            <br />
            <span className="text-faint">when</span> that image exists
            <br />
            <span className="text-faint">else</span> images[0]
          </div>
          <p className="m-0 mt-[20px] text-[15px] leading-[1.55] text-night-muted-2">
            The Shopify product keeps all its images. Only the feed picks a favourite.
          </p>
          <Link className="inline-block mt-[16px] text-[15px] font-semibold text-amber" href="/platform/rules-engine">
            Rules Engine →
          </Link>
        </div>
      </div>
    </>
  );
}

export const pinterest: ChannelData = {
  slug: "pinterest",
  name: "Pinterest",
  title: "Pinterest — your products as Product Pins",
  description: "",
  hero: <Hero />,
  connectBorderTop: true,
  behaviorBorderTop: false,
  steps: [
    {
      title: "Authorize with Pinterest",
      body: "OAuth sign-in to the Pinterest business account.",
    },
    {
      title: "Confirm the claimed domain",
      body: "Product Pins must link to a domain the account has claimed; Scout checks and tells you if it isn't.",
    },
  ],
  behavior: <Behavior />,
  does: [
    <>
      Publishes the catalog in Pinterest&#39;s feed specification, with price, availability, and product link kept
      current.
    </>,
    <>
      Lets you choose which image a Pin uses by rule — the lifestyle shot rather than the white-background one, for
      instance.
    </>,
    <>Reads ingestion and item issues from Pinterest and normalizes them.</>,
  ],
  requires: [
    <>A claimed website domain on the Pinterest business account; unclaimed links are rejected.</>,
    <>Images at Pinterest&#39;s minimum resolution — small product thumbnails fail ingestion.</>,
    <>A link per item that resolves to a live product page on the claimed domain.</>,
  ],
  requiresNote: (
    <>
      Scout&#39;s starter template for Pinterest pre-maps these from Shopify where a mapping exists, and its diagnostics
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
