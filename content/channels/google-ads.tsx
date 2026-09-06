import type { ChannelData } from "@/components/channels/channel-page";
import Image from "next/image";
import { Scaled } from "@/components/site/scaled";
import { ArrowRightGlyph, Glyph1, GoogleG2, ShoppingBagGlyph } from "@/components/brand-icons";

// Source: Google-Ads.dc.html -> /channels/google-ads
// Hero and "Distinguishing behavior" are bespoke compositions; the other sections are data for ChannelPage.

function Hero() {
  return (
    <>
      {/* Google Ads hero */}
      <section className="relative bg-paper pt-[64px] pb-[72px] px-gutter overflow-hidden max-md:pt-[48px] max-md:pb-[48px]">
        <div className="relative z-[2] grid grid-cols-[1fr_700px] gap-[36px] items-center max-xl:grid-cols-2 max-lg:grid-cols-1">
          <div>
            <div className="flex items-center gap-[14px] m-0 mb-[22px]">
              <span className="box-content inline-flex items-center justify-center w-[44px] h-[44px] rounded-10 bg-white border border-line flex-none">
                <GoogleG2 size={26} className="flex-none" />
              </span>
              <p className="m-0 text-[13px] font-semibold tracking-[.14em] uppercase text-rust">
                Channels · Google Ads
              </p>
            </div>
            <h1 className="m-0 text-[50px] leading-[1.08] font-extrabold tracking-[-.035em] text-ink text-pretty max-xl:text-[length:clamp(36px,3.91vw,50px)]">
              Scout manages the product feed your campaigns run on. It does not run the campaigns.
            </h1>
            <p className="m-0 mt-[28px] text-[17.5px] leading-[1.55] text-body text-pretty max-md:text-[16px]">
              Shopping and Performance Max campaigns draw their products from Merchant Center. Scout keeps that supply
              clean and labelled so your campaigns have the right products to work with — and stops at the boundary of
              the ads account.
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
                  Merchants running Shopping or Performance Max campaigns who need the feed side handled.
                </span>
              </div>
            </div>
          </div>

          {/* COMPOSITION 700 x 760 */}
          <Scaled width={700} height={760} className="flex-none" aria-hidden="true">
            <div className="absolute left-[120px] -top-[80px] w-[560px] h-[560px] rounded-full bg-[#4285F4]"></div>
            <div className="absolute left-[130px] top-[120px] w-[380px] h-[380px] rounded-full bg-[#FBBC04]"></div>
            <div className="absolute left-[640px] top-[270px] w-[130px] h-[130px] rounded-[32px] bg-[#EA4335]"></div>
            <div className="absolute left-[470px] top-[420px] w-[380px] h-[380px] rounded-full bg-[#34A853]"></div>
            <div className="absolute left-[430px] top-[40px] w-[330px] h-[600px] p-[12px] flex flex-col gap-[10px] bg-white rounded-[18px] shadow-[0_30px_70px_rgba(24,24,27,.25)] [transform:rotate(3deg)]">
              <span className="flex flex-col gap-[2px] p-[8px] pb-[2px]">
                <span className="text-[15.5px] font-bold text-ink">Performance Max</span>
                <span className="text-[13px] text-faint">Illustrative preview</span>
              </span>
              <span className="block flex-1 rounded-12 overflow-hidden bg-[#DCE9F2]">
                <Image
                  src="/assets/gads-runner.png"
                  width={560}
                  height={840}
                  alt=""
                  sizes="(max-width: 768px) 50vw, 240px"
                  className="block w-full h-full object-cover object-[50%_30%] max-w-none"
                />
              </span>
            </div>
            <div className="absolute left-[100px] top-[180px] w-[410px] p-[16px] flex flex-col gap-[16px] bg-white rounded-[18px] shadow-[0_30px_70px_rgba(24,24,27,.25)] [transform:rotate(-3deg)]">
              <span className="block h-[380px] rounded-12 overflow-hidden bg-[#F5B800]">
                <Image
                  src="/assets/gads-shoe.png"
                  width={640}
                  height={640}
                  alt=""
                  sizes="(max-width: 768px) 50vw, 240px"
                  className="block w-full h-full object-cover max-w-none"
                />
              </span>
              <span className="flex items-end justify-between p-[6px] pt-0">
                <span className="flex flex-col gap-[6px]">
                  <span className="text-[24px] font-extrabold tracking-[-.02em] text-ink">Summit Trail Runner</span>
                  <span className="text-[22px] text-nav">$139.00</span>
                </span>
                <span className="text-[15px] font-semibold text-[#1E7A3A] bg-[#E6F5EA] rounded-8 px-[14px] py-[8px]">
                  In stock
                </span>
              </span>
            </div>
            <div className="absolute -left-[30px] top-[520px] w-[230px] p-[20px] pb-[18px] flex flex-col gap-[14px] bg-white rounded-14 shadow-[0_24px_60px_rgba(24,24,27,.16)]">
              <span className="text-[14.5px] font-bold text-ink">Scout · Feed preparation</span>
              <span className="flex items-center gap-[10px] text-[14.5px] text-ink">
                <Glyph1 size={20} className="flex-none" />
                Price &amp; availability
              </span>
              <span className="flex items-center gap-[10px] text-[14.5px] text-ink">
                <Glyph1 size={20} className="flex-none" />
                Product attributes
              </span>
              <span className="flex items-center gap-[10px] text-[14.5px] text-ink">
                <Glyph1 size={20} className="flex-none" />
                Custom labels
              </span>
              <span className="h-px bg-line"></span>
              <span className="flex items-center gap-[10px] text-[14.5px] text-ink">
                <ShoppingBagGlyph size={20} />
                Merchant Center
              </span>
            </div>
            <span className="absolute left-[210px] top-[740px] text-[15px] text-nav">
              Feed managed in Scout. Campaigns managed in Google Ads.
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
        What makes Google Ads different
      </p>
      <h2 className="m-0 mb-[44px] text-[46px] leading-[1.06] font-extrabold tracking-[-.035em] text-white max-w-[860px] text-pretty max-xl:text-[length:clamp(30px,3.59vw,46px)]">
        The boundary, drawn plainly.
      </h2>
      <div className="grid grid-cols-[1fr_60px_1fr] gap-0 items-stretch max-lg:grid-cols-1">
        <div className="bg-white border border-line rounded-12 px-[26px] py-[24px] shadow-float">
          <span className="text-[12px] font-bold tracking-[.14em] uppercase text-rust">Scout manages</span>
          <ul className="m-0 mt-[14px] p-0 list-none flex flex-col gap-[10px] text-[15px] text-nav">
            <li>The product feed in Merchant Center</li>
            <li>Required attributes and approval state</li>
            <li>
              <code className="font-mono text-[13px] text-rust">custom_label_0 … custom_label_4</code> by rule
            </li>
            <li>Preflight before each submission</li>
          </ul>
          <div className="mt-[18px] px-[14px] py-[12px] bg-paper rounded-8 font-mono text-[12.5px] text-body">
            custom_label_0 = &quot;margin-high&quot; when margin &gt; 40%
            <br />
            custom_label_1 = metafields.season
            <br />
            custom_label_2 = &quot;bestseller&quot; when orders_30d &gt; 20
          </div>
        </div>
        <div className="flex items-center justify-center">
          <ArrowRightGlyph size={40} stroke="#E2703A" strokeWidth="1.6" />
        </div>
        <div className="bg-night-card border border-night-line rounded-10 px-[20px] py-[18px] px-[26px] py-[24px] rounded-12">
          <span className="text-[12px] font-bold tracking-[.14em] uppercase text-faint">You manage, in Google Ads</span>
          <ul className="m-0 mt-[14px] p-0 list-none flex flex-col gap-[10px] text-[15px] text-night-muted-2">
            <li>Campaigns and asset groups</li>
            <li>Budgets</li>
            <li>Bidding strategy and targets</li>
            <li>Listing groups — built from the labels Scout supplies</li>
          </ul>
          <p className="m-0 mt-[18px] text-[13.5px] leading-[1.5] text-faint">
            Scout has no permission on your Ads account and asks for none.
          </p>
        </div>
      </div>
    </>
  );
}

export const googleAds: ChannelData = {
  slug: "google-ads",
  name: "Google Ads",
  title: "Google Ads — the product feed your campaigns run on",
  description: "",
  hero: <Hero />,
  connectBorderTop: true,
  behaviorBorderTop: false,
  steps: [
    {
      title: "Authorize with Google",
      body: "The same OAuth sign-in as Google Shopping; if Shopping is already connected, Ads reuses it.",
    },
    {
      title: "Link the Merchant Center to your Ads account",
      body: "Done once in Google; Scout reads the link status and tells you if it is missing.",
    },
  ],
  behavior: <Behavior />,
  does: [
    <>Keeps the Merchant Center feed your campaigns depend on current, approved, and preflighted.</>,
    <>
      Fills custom_label_0 through custom_label_4 by rule — margin band, season, bestseller flag — so you can segment
      campaigns without editing products.
    </>,
    <>Reports disapprovals that would remove products from campaigns, with the field to fix.</>,
  ],
  requires: [
    <>A linked Merchant Center account; Ads cannot read a feed that is not linked.</>,
    <>
      Custom labels are the only feed-side lever for campaign segmentation — five of them, each up to 100 characters.
    </>,
    <>Everything Google Shopping requires, since Ads reads the same feed.</>,
  ],
  requiresNote: (
    <>
      Scout&#39;s starter template for Google Ads pre-maps these from Shopify where a mapping exists, and its
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
