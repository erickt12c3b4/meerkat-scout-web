import type { ChannelData } from "@/components/channels/channel-page";
import Image from "next/image";
import Link from "next/link";
import { Scaled } from "@/components/site/scaled";
import { HelpCircle, ShieldCheck } from "lucide-react";
import { EyeOffGlyph, FileTextGlyph2, LockGlyph, UserGlyph, WalmartSpark } from "@/components/brand-icons";

// Source: Walmart.dc.html -> /channels/walmart
// Hero and "Distinguishing behavior" are bespoke compositions; the other sections are data for ChannelPage.

function Hero() {
  return (
    <>
      {/* Walmart hero */}
      <section className="relative bg-[linear-gradient(135deg,#0B4BC4_0%,#0A5BE0_55%,#1D6BF0_100%)] px-gutter py-[64px] overflow-hidden max-md:pt-[48px] max-md:pb-[48px]">
        <div
          className="absolute -top-[160px] w-[820px] h-[820px] pointer-events-none bg-[radial-gradient(closest-side,rgba(255,255,255,.10),transparent_72%)] left-[calc(var(--gutter)-70px+-200px)]"
          aria-hidden="true"
        ></div>
        <div className="relative z-[2] grid grid-cols-[1fr_640px] gap-[56px] items-center max-xl:grid-cols-2 max-lg:grid-cols-1">
          <div>
            <div className="flex items-center gap-[14px] m-0 mb-[22px]">
              <span className="inline-flex items-center justify-center w-[44px] h-[44px] rounded-10 bg-white flex-none">
                <WalmartSpark size={26} className="flex-none" />
              </span>
              <p className="m-0 text-[13px] font-semibold tracking-[.14em] uppercase text-[#FFC220]">
                Channels · Walmart
              </p>
            </div>
            <h1 className="m-0 text-[50px] leading-[1.08] font-extrabold tracking-[-.035em] text-white text-pretty max-xl:text-[length:clamp(36px,3.91vw,50px)]">
              The one channel where you paste credentials instead of clicking Authorize — because that&#39;s how Walmart
              hands them out.
            </h1>
            <p className="m-0 mt-[28px] text-[17.5px] leading-[1.55] text-[rgba(255,255,255,.86)] text-pretty max-md:text-[16px]">
              Walmart Marketplace issues each seller their own API keys in Seller Center. There is no OAuth screen to
              send you to. Scout gives you two fields, encrypts what you paste, and reads your item spec and GTIN
              exemption status from Walmart directly.
            </p>
            <div className="flex gap-[36px] mt-[36px] text-[14px] max-xl:flex-wrap max-xl:gap-[16px]">
              <div className="flex flex-col gap-[4px] flex-none">
                <span className="text-[12px] font-bold tracking-[.12em] uppercase text-[rgba(255,255,255,.7)]">
                  Type
                </span>
                <span className="inline-flex items-center gap-[6px] text-[12px] font-bold tracking-[.1em] uppercase text-ink bg-[#FFC220] rounded-[4px] px-[9px] py-[5px]">
                  Marketplace
                </span>
              </div>
              <div className="flex flex-col gap-[4px] flex-none whitespace-nowrap">
                <span className="text-[12px] font-bold tracking-[.12em] uppercase text-[rgba(255,255,255,.7)]">
                  Connects via
                </span>
                <span className="text-white font-medium">Pasted API credentials</span>
              </div>
              <div className="flex flex-col gap-[4px] flex-1 min-w-0">
                <span className="text-[12px] font-bold tracking-[.12em] uppercase text-[rgba(255,255,255,.7)]">
                  Who sells here
                </span>
                <span className="text-white font-medium leading-[1.4]">
                  Merchants approved to sell on Walmart Marketplace who want their catalog resolved to Walmart&#39;s
                  item spec rather than guessed at.
                </span>
              </div>
            </div>
            <p className="m-0 mt-[34px] text-[15px] leading-[1.55] text-[rgba(255,255,255,.72)]">
              A feed channel takes your catalog as you send it. A marketplace makes you conform to its own. That
              difference is why this page — and Scout&#39;s work here — looks different from the feed channels.{" "}
              <Link className="text-[#FFC220]" href="/channels#marketplaces">
                How Scout handles marketplaces →
              </Link>
            </p>
          </div>

          {/* COMPOSITION 640 x 640 */}
          <Scaled width={640} height={640} className="flex-none" aria-hidden="true">
            <svg
              width="60"
              height="60"
              viewBox="0 0 60 60"
              fill="none"
              stroke="#FFC220"
              strokeWidth="6"
              strokeLinecap="round"
              className="absolute -right-[16px] -top-[4px]"
            >
              <path d="M14 44 L22 30"></path>
              <path d="M30 40 L44 26"></path>
              <path d="M26 56 L40 48"></path>
            </svg>
            <div className="absolute left-0 top-0 w-[640px] h-[600px] flex flex-col bg-white rounded-16 shadow-[0_30px_70px_rgba(4,20,60,.35)]">
              <div className="flex items-center gap-[20px] h-[70px] px-[24px] py-0 flex-none">
                <span className="inline-flex items-center gap-[6px] text-[23px] font-extrabold tracking-[-.03em] text-[#0071DC] leading-none">
                  Walmart
                  <WalmartSpark size={30} className="flex-none" />
                </span>
                <span className="text-[15.5px] font-semibold text-ink">Marketplace catalog</span>
                <span className="ml-auto flex gap-[22px] text-[#0071DC]">
                  <HelpCircle size={20} strokeWidth={1.6} />
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"></path>
                    <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"></path>
                  </svg>
                  <UserGlyph size={20} stroke="currentColor" strokeWidth="1.6" />
                </span>
              </div>
              <div className="flex gap-[28px] px-[24px] py-0 border-b border-b-[#E3E8EF] text-[14px] font-medium text-nav flex-none">
                <span className="pt-[8px] pb-[14px] px-0 text-[#0071DC] font-semibold border-b-[3px] border-b-[#FFC220] -mb-[1px]">
                  Catalog
                </span>
                <span className="pt-[8px] pb-[14px] px-0">Item spec</span>
                <span className="pt-[8px] pb-[14px] px-0">GTIN status</span>
              </div>
              <div className="grid grid-cols-[1fr_1fr] gap-[16px] p-[24px] pb-0">
                <div className="grid grid-cols-[150px_1fr] bg-white border border-[#E3E8EF] rounded-10 overflow-hidden shadow-[0_2px_8px_rgba(15,40,90,.06)]">
                  <span className="flex items-center justify-center h-[150px] bg-[#EEF4FB]">
                    <Image
                      src="/assets/wm-sneaker.png"
                      width={124}
                      height={124}
                      alt=""
                      className="block w-[124px] h-[124px] object-contain max-w-none"
                    />
                  </span>
                  <span className="flex flex-col justify-center gap-[8px] px-[14px] py-0">
                    <span className="text-[12.5px] font-semibold text-ink leading-[1.35]">
                      Athletic Sneaker
                      <br />
                      Neutral Beige
                    </span>
                    <span className="block w-[70%] h-[6px] rounded-[3px] bg-[#E3E8EF] mt-[6px]"></span>
                    <span className="block w-[84%] h-[6px] rounded-[3px] bg-[#E3E8EF]"></span>
                    <span className="block w-[58%] h-[6px] rounded-[3px] bg-[#E3E8EF]"></span>
                    <FileTextGlyph2 size={18} className="mt-[6px]" />
                  </span>
                </div>
                <div className="grid grid-cols-[150px_1fr] bg-white border border-[#E3E8EF] rounded-10 overflow-hidden shadow-[0_2px_8px_rgba(15,40,90,.06)]">
                  <span className="flex items-center justify-center h-[150px] bg-[#EEF4FB]">
                    <Image
                      src="/assets/wm-tumbler.png"
                      width={124}
                      height={124}
                      alt=""
                      className="block w-[124px] h-[124px] object-contain max-w-none"
                    />
                  </span>
                  <span className="flex flex-col justify-center gap-[8px] px-[14px] py-0">
                    <span className="text-[12.5px] font-semibold text-ink leading-[1.35]">
                      Insulated Tumbler
                      <br />
                      40oz, Green
                    </span>
                    <span className="block w-[76%] h-[6px] rounded-[3px] bg-[#E3E8EF] mt-[6px]"></span>
                    <span className="block w-[60%] h-[6px] rounded-[3px] bg-[#E3E8EF]"></span>
                    <span className="block w-[88%] h-[6px] rounded-[3px] bg-[#E3E8EF]"></span>
                    <FileTextGlyph2 size={18} className="mt-[6px]" />
                  </span>
                </div>
                <div className="grid grid-cols-[150px_1fr] bg-white border border-[#E3E8EF] rounded-10 overflow-hidden shadow-[0_2px_8px_rgba(15,40,90,.06)]">
                  <span className="flex items-center justify-center h-[150px] bg-[#EEF4FB]">
                    <Image
                      src="/assets/wm-headphones.png"
                      width={124}
                      height={124}
                      alt=""
                      className="block w-[124px] h-[124px] object-contain max-w-none"
                    />
                  </span>
                  <span className="flex flex-col justify-center gap-[8px] px-[14px] py-0">
                    <span className="text-[12.5px] font-semibold text-ink leading-[1.35]">
                      Wireless Headphones
                      <br />
                      Ivory
                    </span>
                    <span className="block w-[64%] h-[6px] rounded-[3px] bg-[#E3E8EF] mt-[6px]"></span>
                    <span className="block w-[82%] h-[6px] rounded-[3px] bg-[#E3E8EF]"></span>
                    <span className="block w-[52%] h-[6px] rounded-[3px] bg-[#E3E8EF]"></span>
                    <FileTextGlyph2 size={18} className="mt-[6px]" />
                  </span>
                </div>
                <div className="grid grid-cols-[150px_1fr] bg-white border border-[#E3E8EF] rounded-10 overflow-hidden shadow-[0_2px_8px_rgba(15,40,90,.06)]">
                  <span className="flex items-center justify-center h-[150px] bg-[#EEF4FB]">
                    <Image
                      src="/assets/wm-lamp.png"
                      width={124}
                      height={124}
                      alt=""
                      className="block w-[124px] h-[124px] object-contain max-w-none"
                    />
                  </span>
                  <span className="flex flex-col justify-center gap-[8px] px-[14px] py-0">
                    <span className="text-[12.5px] font-semibold text-ink leading-[1.35]">
                      LED Desk Lamp
                      <br />
                      Cream
                    </span>
                    <span className="block w-[72%] h-[6px] rounded-[3px] bg-[#E3E8EF] mt-[6px]"></span>
                    <span className="block w-[54%] h-[6px] rounded-[3px] bg-[#E3E8EF]"></span>
                    <span className="block w-[84%] h-[6px] rounded-[3px] bg-[#E3E8EF]"></span>
                    <FileTextGlyph2 size={18} className="mt-[6px]" />
                  </span>
                </div>
              </div>
              <div className="mt-auto flex justify-center gap-[14px] p-[24px] pt-0">
                <span className="box-content inline-flex items-center gap-[10px] h-[44px] px-[18px] py-0 border-[1.5px] border-[#0071DC] rounded-8 text-[15px] font-semibold text-[#0071DC]">
                  <FileTextGlyph2 size={18} stroke="currentColor" strokeWidth="1.6" />
                  Item spec
                </span>
                <span className="box-content inline-flex items-center gap-[10px] h-[44px] px-[18px] py-0 border-[1.5px] border-[#0071DC] rounded-8 text-[15px] font-semibold text-[#0071DC]">
                  <ShieldCheck size={18} strokeWidth={1.6} />
                  GTIN status
                </span>
              </div>
            </div>
            <div className="absolute left-[22px] top-[392px] w-[262px] p-[16px] pt-[18px] flex flex-col gap-[14px] bg-white rounded-14 shadow-[0_24px_60px_rgba(4,20,60,.35)]">
              <span className="text-[15px] font-bold text-ink">Seller connection</span>
              <span className="flex items-center gap-[8px]">
                <span className="block w-[30px] h-[30px] overflow-hidden">
                  <Image
                    src="/assets/img-03.png"
                    width={122}
                    height={30}
                    alt=""
                    className="block h-[30px] w-auto max-w-none"
                  />
                </span>
                <span className="text-[14.5px] font-semibold text-ink">Meerkat Scout</span>
              </span>
              <span className="flex flex-col gap-[6px]">
                <span className="text-[13px] font-medium text-nav">Client ID</span>
                <span className="box-content flex items-center gap-[10px] h-[36px] px-[12px] py-0 border border-[#E3E8EF] rounded-8 bg-white">
                  <LockGlyph size={14} strokeWidth="1.8" />
                  <span className="flex-1 text-[11px] tracking-[.18em] text-ink leading-none font-mono">
                    ••••••••••••••••••••••
                  </span>
                  <EyeOffGlyph size={14} />
                </span>
              </span>
              <span className="flex flex-col gap-[6px]">
                <span className="text-[13px] font-medium text-nav">Client secret</span>
                <span className="box-content flex items-center gap-[10px] h-[36px] px-[12px] py-0 border border-[#E3E8EF] rounded-8 bg-white">
                  <LockGlyph size={14} strokeWidth="1.8" />
                  <span className="flex-1 text-[11px] tracking-[.18em] text-ink leading-none font-mono">
                    ••••••••••••••••••••••
                  </span>
                  <EyeOffGlyph size={14} />
                </span>
              </span>
              <span className="flex items-center gap-[8px] h-[34px] px-[12px] py-0 rounded-8 bg-[#E6F5EA] text-[13px] font-semibold text-[#1E7A3A]">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="#2E9E4F" stroke="none">
                  <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                  <path
                    d="m9 12 2 2 4-4"
                    stroke="#fff"
                    strokeWidth="2"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
                Credentials encrypted
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
        What makes Walmart different
      </p>
      <h2 className="m-0 mb-[44px] text-[46px] leading-[1.06] font-extrabold tracking-[-.035em] text-white max-w-[860px] text-pretty max-xl:text-[length:clamp(30px,3.59vw,46px)]">
        Two fields, encrypted on arrival. Then Walmart tells Scout what your account is allowed to do.
      </h2>
      <div className="grid grid-cols-[1fr_1fr] gap-[20px] items-start max-lg:grid-cols-1">
        <div className="bg-white border border-line rounded-12 shadow-float px-[24px] py-[22px]">
          <span className="text-[11.5px] font-bold tracking-[.12em] uppercase text-faint">
            Connect Walmart Marketplace
          </span>
          <p className="m-0 mt-[8px] text-[14.5px] leading-[1.55] text-body">
            Paste the credentials generated in Seller Center → Developer Portal → API Keys.
          </p>
          <div className="mt-[16px] flex flex-col gap-[12px]">
            <label className="flex flex-col gap-[6px] text-[12.5px] font-semibold text-nav">
              Client ID
              <span className="block px-[12px] py-[11px] border border-line-button rounded-8 font-mono text-[13px] text-ink bg-paper-warm">
                a3f1c8e2-…-9b7d
              </span>
            </label>
            <label className="flex flex-col gap-[6px] text-[12.5px] font-semibold text-nav">
              Client Secret
              <span className="block px-[12px] py-[11px] border border-line-button rounded-8 font-mono text-[13px] text-ink bg-paper-warm">
                ••••••••••••••••••••••••
              </span>
            </label>
          </div>
          <div className="mt-[12px] flex items-center gap-[8px] text-[12.5px] text-dim">
            <LockGlyph size={14} stroke="#6B655E" />
            Encrypted at rest with Cloud KMS. Never displayed again after save.
          </div>
          <div className="mt-[16px]">
            <span className="inline-flex items-center justify-center min-h-[40px] px-[16px] py-0 rounded-8 bg-ink text-[14px] font-semibold text-white">
              Verify and connect
            </span>
          </div>
        </div>
        <div className="bg-night-card border border-night-line rounded-10 px-[20px] py-[18px] px-[24px] py-[22px]">
          <span className="text-[11.5px] font-bold tracking-[.12em] uppercase text-faint">
            Read from Walmart after connecting
          </span>
          <div className="mt-[12px] flex flex-col gap-[10px] text-[14px] text-night-text">
            <span className="flex justify-between pb-[10px] border-b border-b-night-line">
              <span>Connection</span>
              <span className="text-[#7FB58A] font-semibold">Verified · read-only call OK</span>
            </span>
            <span className="flex justify-between pb-[10px] border-b border-b-night-line">
              <span>Item spec version</span>
              <span className="font-mono text-[12.5px] text-white">current, read 1 h ago</span>
            </span>
            <span className="flex justify-between pb-[10px] border-b border-b-night-line">
              <span>GTIN exemption · Clothing › Shoes</span>
              <span className="text-amber font-semibold">Not granted</span>
            </span>
            <span className="flex justify-between pb-[10px] border-b border-b-night-line">
              <span>GTIN exemption · Sporting Goods</span>
              <span className="text-[#7FB58A] font-semibold">Granted</span>
            </span>
            <span className="flex justify-between">
              <span>Validation rule applied</span>
              <span className="text-white">Per category, from the above</span>
            </span>
          </div>
          <p className="m-0 mt-[16px] text-[13.5px] leading-[1.55] text-faint">
            Scout doesn&#39;t assume you have or lack an exemption. It asks Walmart, per category, and validates
            accordingly.
          </p>
        </div>
      </div>
    </>
  );
}

export const walmart: ChannelData = {
  slug: "walmart",
  name: "Walmart",
  title: "Walmart Marketplace — credentials, item spec and GTIN exemptions",
  description: "",
  hero: <Hero />,
  connectBorderTop: false,
  behaviorBorderTop: true,
  steps: [
    {
      title: "Generate API keys in Seller Center",
      body: "Under Developer Portal → API Keys, create a Client ID and Client Secret for Scout.",
    },
    {
      title: "Paste them into Scout",
      body: "Two fields. Scout encrypts both at rest with keys held in a key management service; nobody at Scout can read them back.",
    },
    {
      title: "Scout verifies the connection",
      body: "A read-only call confirms the keys work and pulls your item spec version and GTIN exemption status.",
    },
  ],
  behavior: <Behavior />,
  does: [
    <>
      Resolves each product to a Walmart item spec category with confidence and reason, and validates its required
      attributes before submission.
    </>,
    <>
      Reads GTIN exemption status from Walmart rather than assuming — so items are validated against the rule that
      actually applies to you.
    </>,
    <>Translates feed status and item errors into Scout&#39;s vocabulary with the attribute named.</>,
  ],
  requires: [
    <>Per-seller API credentials pasted in, not authorized through a login.</>,
    <>A Walmart item spec category per product, with that category&#39;s required attributes.</>,
    <>A GTIN per item unless Walmart has granted you an exemption for that category.</>,
  ],
  requiresNote: (
    <>
      Scout&#39;s starter template for Walmart pre-maps these from Shopify where a mapping exists, and its diagnostics
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
