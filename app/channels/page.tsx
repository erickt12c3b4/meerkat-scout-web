import Link from "next/link";
import {
  AmazonSmile,
  Glyph2,
  GoogleG,
  GoogleG2,
  MetaLogo,
  MicrosoftLogo,
  PinterestP,
  SnapchatGhost,
  WalmartSpark,
} from "@/components/brand-icons";
import { SiteHeader } from "@/components/site/site-header";
import { PreFooterCta } from "@/components/site/pre-footer-cta";
import { SiteFooter } from "@/components/site/site-footer";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Channels — Ten destinations, two kinds",
  description: "Feed channels take your catalog as you send it; marketplaces make you conform to theirs. Scout connects Google Shopping, Google Ads, Meta, TikTok, Pinterest, Snapchat, Bing, Amazon, Walmart and eBay.",
};

// Source: Channels.dc.html -> /channels
export default function ChannelsPage() {
  return (
    <>
      <SiteHeader active="channels" />

      {/* Channels hero */}
      <section className="bg-paper pt-[84px] pb-[64px] px-gutter max-md:pt-[56px] max-md:pb-[48px]">
        <p className="m-0 mb-[22px] text-[13px] font-semibold tracking-[.14em] uppercase text-rust">Channels</p>
        <h1 className="m-0 text-[57px] leading-[1.08] font-extrabold tracking-[-.035em] max-w-[860px] text-pretty max-xl:text-[length:clamp(36px,4.45vw,57px)]">
          Ten destinations. Two kinds. The difference is the thing most merchants get wrong.
        </h1>
        <div className="grid grid-cols-[1fr_1fr] gap-[18px] mt-[48px] max-lg:grid-cols-1">
          <div className="px-[28px] py-[26px] bg-white border border-line rounded-12">
            <span className="text-[12px] font-bold tracking-[.14em] uppercase text-rust">Feed channels</span>
            <p className="m-0 mt-[10px] text-[22px] font-bold tracking-[-.02em] leading-[1.25]">
              A feed channel takes your catalog.
            </p>
            <p className="m-0 mt-[10px] text-[15.5px] leading-[1.55] text-body">
              You describe your products in their specification, they check the fields, and your listings appear more or
              less as you sent them. Seven of the ten work this way.
            </p>
          </div>
          <div className="px-[28px] py-[26px] bg-ink rounded-12 text-white scroll-mt-[100px]" id="marketplaces">
            <span className="text-[12px] font-bold tracking-[.14em] uppercase text-tint-line-strong">Marketplaces</span>
            <p className="m-0 mt-[10px] text-[22px] font-bold tracking-[-.02em] leading-[1.25]">
              A marketplace makes you conform to its own.
            </p>
            <p className="m-0 mt-[10px] text-[15.5px] leading-[1.55] text-night-muted-2">
              It has a taxonomy, and every category in it has required attributes you cannot guess. Scout resolves those
              live, per marketplace, before submitting.
            </p>
          </div>
        </div>
      </section>

      {/* Feed channels */}
      <section className="bg-paper px-gutter py-[40px]">
        <p className="m-0 mb-[22px] text-[13px] font-semibold tracking-[.14em] uppercase text-rust">
          Feed channels · 7
        </p>
        <div className="grid grid-cols-4 gap-[16px] max-lg:grid-cols-2 max-md:grid-cols-1">
          <Link
            className="flex flex-col gap-[8px] p-[22px] pb-[20px] bg-white border border-line rounded-10 text-ink shadow-[0_10px_28px_rgba(24,24,27,.05)]"
            href="/channels/google-shopping"
          >
            <span className="flex items-center gap-[10px]">
              <span className="box-content inline-flex items-center justify-center w-[28px] h-[28px] rounded-[7px] bg-paper border border-line flex-none">
                <GoogleG size={18} className="flex-none" />
              </span>
              <strong className="text-[19px] font-bold tracking-[-.02em]">Google Shopping</strong>
            </span>
            <span className="text-[14px] leading-[1.5] text-body">
              Any merchant who wants products in Google search results and the Shopping tab.
            </span>
            <span className="mt-auto text-[13px] text-faint">OAuth</span>
          </Link>
          <Link
            className="flex flex-col gap-[8px] p-[22px] pb-[20px] bg-white border border-line rounded-10 text-ink shadow-[0_10px_28px_rgba(24,24,27,.05)]"
            href="/channels/google-ads"
          >
            <span className="flex items-center gap-[10px]">
              <span className="box-content inline-flex items-center justify-center w-[28px] h-[28px] rounded-[7px] bg-paper border border-line flex-none">
                <GoogleG2 size={18} className="flex-none" />
              </span>
              <strong className="text-[19px] font-bold tracking-[-.02em]">Google Ads</strong>
            </span>
            <span className="text-[14px] leading-[1.5] text-body">
              Merchants running Shopping or Performance Max campaigns who need the feed side handled.
            </span>
            <span className="mt-auto text-[13px] text-faint">OAuth</span>
          </Link>
          <Link
            className="flex flex-col gap-[8px] p-[22px] pb-[20px] bg-white border border-line rounded-10 text-ink shadow-[0_10px_28px_rgba(24,24,27,.05)]"
            href="/channels/bing"
          >
            <span className="flex items-center gap-[10px]">
              <span className="box-content inline-flex items-center justify-center w-[28px] h-[28px] rounded-[7px] bg-paper border border-line flex-none">
                <MicrosoftLogo size={18} className="flex-none" />
              </span>
              <strong className="text-[19px] font-bold tracking-[-.02em]">Microsoft Bing</strong>
            </span>
            <span className="text-[14px] leading-[1.5] text-body">
              Merchants already on Google Shopping who want reach in Bing, Edge, and Microsoft Start without a second
              data project.
            </span>
            <span className="mt-auto text-[13px] text-faint">OAuth</span>
          </Link>
          <Link
            className="flex flex-col gap-[8px] p-[22px] pb-[20px] bg-white border border-line rounded-10 text-ink shadow-[0_10px_28px_rgba(24,24,27,.05)]"
            href="/channels/meta"
          >
            <span className="flex items-center gap-[10px]">
              <span className="box-content inline-flex items-center justify-center w-[28px] h-[28px] rounded-[7px] bg-paper border border-line flex-none">
                <MetaLogo size={18} className="flex-none" />
              </span>
              <strong className="text-[19px] font-bold tracking-[-.02em]">Meta</strong>
            </span>
            <span className="text-[14px] leading-[1.5] text-body">
              Merchants selling through Facebook and Instagram Shops, or running dynamic product ads that draw from a
              Meta catalog.
            </span>
            <span className="mt-auto text-[13px] text-faint">OAuth + business selection</span>
          </Link>
          <Link
            className="flex flex-col gap-[8px] p-[22px] pb-[20px] bg-white border border-line rounded-10 text-ink shadow-[0_10px_28px_rgba(24,24,27,.05)]"
            href="/channels/tiktok"
          >
            <span className="flex items-center gap-[10px]">
              <span className="box-content inline-flex items-center justify-center w-[28px] h-[28px] rounded-[7px] bg-paper border border-line flex-none">
                <Glyph2 size={18} className="flex-none" />
              </span>
              <strong className="text-[19px] font-bold tracking-[-.02em]">TikTok</strong>
            </span>
            <span className="text-[14px] leading-[1.5] text-body">
              Merchants selling through TikTok Shop or running catalog-based ads on TikTok.
            </span>
            <span className="mt-auto text-[13px] text-faint">OAuth + advertiser selection</span>
          </Link>
          <Link
            className="flex flex-col gap-[8px] p-[22px] pb-[20px] bg-white border border-line rounded-10 text-ink shadow-[0_10px_28px_rgba(24,24,27,.05)]"
            href="/channels/pinterest"
          >
            <span className="flex items-center gap-[10px]">
              <span className="box-content inline-flex items-center justify-center w-[28px] h-[28px] rounded-[7px] bg-paper border border-line flex-none">
                <PinterestP size={18} className="flex-none" />
              </span>
              <strong className="text-[19px] font-bold tracking-[-.02em]">Pinterest</strong>
            </span>
            <span className="text-[14px] leading-[1.5] text-body">
              Merchants with visual, lifestyle, or home-and-apparel catalogs, where discovery happens by browsing rather
              than searching.
            </span>
            <span className="mt-auto text-[13px] text-faint">OAuth</span>
          </Link>
          <Link
            className="flex flex-col gap-[8px] p-[22px] pb-[20px] bg-white border border-line rounded-10 text-ink shadow-[0_10px_28px_rgba(24,24,27,.05)]"
            href="/channels/snapchat"
          >
            <span className="flex items-center gap-[10px]">
              <span className="box-content inline-flex items-center justify-center w-[28px] h-[28px] rounded-[7px] bg-paper border border-line flex-none">
                <SnapchatGhost size={18} className="flex-none" />
              </span>
              <strong className="text-[19px] font-bold tracking-[-.02em]">Snapchat</strong>
            </span>
            <span className="text-[14px] leading-[1.5] text-body">
              Merchants running dynamic product ads or Shopping experiences on Snapchat.
            </span>
            <span className="mt-auto text-[13px] text-faint">OAuth + organization and ad-account selection</span>
          </Link>
        </div>
      </section>

      {/* Marketplaces */}
      <section className="bg-paper pt-[40px] pb-[96px] px-gutter max-md:pb-[56px]">
        <p className="m-0 mb-[22px] text-[13px] font-semibold tracking-[.14em] uppercase text-rust">Marketplaces · 3</p>
        <div className="grid grid-cols-3 gap-[16px] max-lg:grid-cols-2 max-md:grid-cols-1">
          <Link
            className="flex flex-col gap-[8px] p-[22px] pb-[20px] bg-white border border-line rounded-10 text-ink shadow-[0_10px_28px_rgba(24,24,27,.05)]"
            href="/channels/amazon"
          >
            <span className="flex items-center gap-[10px]">
              <span className="box-content inline-flex items-center justify-center w-[28px] h-[28px] rounded-[7px] bg-paper border border-line flex-none">
                <span
                  className="inline-flex flex-col items-center justify-center w-[18px] h-[18px] flex-none"
                  aria-hidden="true"
                >
                  <span className="text-[15px] font-bold text-[#18181B] leading-[.8]">a</span>
                  <AmazonSmile width={16} height={5} />
                </span>
              </span>
              <strong className="text-[19px] font-bold tracking-[-.02em]">Amazon</strong>
            </span>
            <span className="text-[14px] leading-[1.5] text-body">
              Merchants listing on Amazon who are tired of rejections that don&#39;t say which of thirty attributes was
              wrong.
            </span>
            <span className="mt-auto text-[13px] text-faint">Seller Central authorization (SP-API)</span>
          </Link>
          <Link
            className="flex flex-col gap-[8px] p-[22px] pb-[20px] bg-white border border-line rounded-10 text-ink shadow-[0_10px_28px_rgba(24,24,27,.05)]"
            href="/channels/walmart"
          >
            <span className="flex items-center gap-[10px]">
              <span className="box-content inline-flex items-center justify-center w-[28px] h-[28px] rounded-[7px] bg-paper border border-line flex-none">
                <WalmartSpark size={18} className="flex-none" />
              </span>
              <strong className="text-[19px] font-bold tracking-[-.02em]">Walmart</strong>
            </span>
            <span className="text-[14px] leading-[1.5] text-body">
              Merchants approved to sell on Walmart Marketplace who want their catalog resolved to Walmart&#39;s item
              spec rather than guessed at.
            </span>
            <span className="mt-auto text-[13px] text-faint">Pasted API credentials</span>
          </Link>
          <Link
            className="flex flex-col gap-[8px] p-[22px] pb-[20px] bg-white border border-line rounded-10 text-ink shadow-[0_10px_28px_rgba(24,24,27,.05)]"
            href="/channels/ebay"
          >
            <span className="flex items-center gap-[10px]">
              <span className="box-content inline-flex items-center justify-center w-[28px] h-[28px] rounded-[7px] bg-paper border border-line flex-none">
                <span
                  className="inline-flex items-baseline text-[14px] font-bold tracking-[-.03em] flex-none h-[18px] items-center"
                  aria-hidden="true"
                >
                  <span className="text-[#E53238]">e</span>
                  <span className="text-[#0064D2]">b</span>
                  <span className="text-[#F5AF02]">a</span>
                  <span className="text-[#86B817]">y</span>
                </span>
              </span>
              <strong className="text-[19px] font-bold tracking-[-.02em]">eBay</strong>
            </span>
            <span className="text-[14px] leading-[1.5] text-body">
              Merchants listing on eBay who want categories and aspects resolved live and the two eBay-only
              prerequisites checked before submission.
            </span>
            <span className="mt-auto text-[13px] text-faint">OAuth + marketplace selection</span>
          </Link>
        </div>
        <div className="mt-[40px] px-[26px] py-[22px] border border-line-strong rounded-10 grid grid-cols-[1fr_1fr_1fr] gap-[24px] text-[14.5px] leading-[1.55] text-body max-lg:grid-cols-1">
          <span>
            <strong className="text-ink font-semibold">Starter</strong> includes any three of the ten.{" "}
            <strong className="text-ink font-semibold">Growth</strong> and above include all ten.{" "}
            <Link href="/pricing">Pricing →</Link>
          </span>
          <span>
            Every channel is preflighted before a submission is spent, on its own schedule.{" "}
            <Link href="/platform/feed-management">Feed Management →</Link>
          </span>
          <span>These ten are the integrations Scout has. There is no eleventh behind a contact form.</span>
        </div>
      </section>

      <PreFooterCta />

      <SiteFooter current="Channels" />
    </>
  );
}
