import Image from "next/image";
import Link from "next/link";
import { Scaled } from "@/components/site/scaled";
import { ChevronRight, Database, Eye, Info, MoreVertical, Send, ShieldCheck, TriangleAlert } from "lucide-react";
import {
  AmazonSmile,
  ArrowRightGlyph,
  CircleCheckGlyph4,
  FileTextGlyph,
  GoogleG,
  MetaLogo,
  PauseGlyph,
  SearchGlyph2,
  ShopifyBag,
} from "@/components/brand-icons";
import { SiteHeader } from "@/components/site/site-header";
import { PreFooterCta } from "@/components/site/pre-footer-cta";
import { SiteFooter } from "@/components/site/site-footer";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Feed Management — One catalog, kept current",
  description: "Keep your Shopify catalog current. Preview, check and publish each feed, with a clear record of every run.",
};

// Source: Feed-Management.dc.html -> /platform/feed-management
export default function FeedManagementPage() {
  return (
    <>
      <SiteHeader active="platform" />

      {/* Feed hero */}
      <section className="relative bg-paper min-h-[600px] px-gutter py-0 grid grid-cols-[minmax(0,1fr)_600px] gap-[24px] items-center overflow-hidden max-xl:grid-cols-2 max-lg:grid-cols-1">
        <div className="relative z-[2] px-0 py-[70px]">
          <p className="m-0 mb-[22px] text-[13px] font-semibold tracking-[.14em] uppercase text-rust">
            Platform · Feed management
          </p>
          <h1 className="m-0 text-[47px] leading-[1.08] font-extrabold tracking-[-.035em] max-xl:text-[length:clamp(36px,3.67vw,47px)]">
            One catalog, kept current.
            <br />
            Every feed, under control.
          </h1>
          <p className="m-0 mt-[24px] text-[17.5px] leading-[1.55] text-body max-w-[520px] text-pretty max-md:text-[16px]">
            Keep your Shopify catalog current. Preview, check and publish each feed, with a clear record of every run.
          </p>
          <div className="flex items-center gap-[26px] mt-[32px] max-md:flex-wrap max-md:gap-[16px]">
            <Link
              className="inline-flex items-center justify-center min-h-[52px] px-[28px] py-0 rounded-8 bg-rust-button text-white text-[16.5px] font-semibold shadow-hairline"
              href="/pricing"
            >
              Start free trial
            </Link>
            <a
              className="text-[16px] font-semibold text-rust underline decoration-[1.5px] underline-offset-[5px]"
              href="#ladder"
            >
              See the five actions →
            </a>
          </div>
          <div className="flex items-center gap-[14px] mt-[30px]">
            <span className="inline-flex items-center gap-[9px] text-[14px] font-semibold">
              <ShopifyBag size={22} className="flex-none" />
              Works with Shopify
            </span>
            <span className="w-px h-[18px] bg-line-button" aria-hidden="true"></span>
            <span className="text-[13.5px] text-dim">Keep selling. We&#39;ll handle the feeds.</span>
          </div>
        </div>

        {/* COMPOSITION 600 x 600 */}
        <Scaled width={600} height={600} flow>
          <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[400px] p-[20px] pb-[16px] bg-white border border-line rounded-14 shadow-hero z-[2] max-lg:static max-lg:w-full max-lg:max-w-[440px] max-lg:translate-y-0">
            <div className="flex items-center justify-between">
              <span className="text-[20px] font-bold tracking-[-.02em]">Feed overview</span>
              <span className="inline-flex items-center gap-[6px] text-[12.5px] font-semibold text-ok-text">
                <span className="w-[7px] h-[7px] rounded-full bg-ok-text flex-none"></span>Catalog current
              </span>
            </div>
            <div className="flex items-baseline justify-between mt-[10px]">
              <span className="text-[26px] font-extrabold tracking-[-.03em] leading-none">
                1,284 <span className="text-[13.5px] font-medium text-dim tracking-normal">products</span>
              </span>
              <span className="text-[12px] text-faint">Inventory updated · 6 min ago</span>
            </div>
            <div className="grid grid-cols-3 gap-[10px] mt-[16px]">
              <div className="aspect-square rounded-8 bg-[#F1EFEB] overflow-hidden">
                <Image
                  src="/assets/fm-cleat.png"
                  width={1254}
                  height={1254}
                  alt="Black football cleat, sample product"
                  sizes="(max-width: 768px) 50vw, 240px"
                  className="block w-full h-full object-cover mix-blend-multiply max-w-none"
                />
              </div>
              <div className="aspect-square rounded-8 bg-[#F1EFEB] overflow-hidden">
                <Image
                  src="/assets/fm-football.png"
                  width={1254}
                  height={1254}
                  alt="Leather football, sample product"
                  sizes="(max-width: 768px) 50vw, 240px"
                  className="block w-full h-full object-cover mix-blend-multiply max-w-none"
                />
              </div>
              <div className="aspect-square rounded-8 bg-[#F1EFEB] overflow-hidden">
                <Image
                  src="/assets/fm-jersey.png"
                  width={1254}
                  height={1254}
                  alt="Navy number 24 jersey, sample product"
                  sizes="(max-width: 768px) 50vw, 240px"
                  className="block w-full h-full object-cover mix-blend-multiply max-w-none"
                />
              </div>
            </div>
            <div className="grid grid-cols-[1.3fr_.7fr_1.2fr] gap-[10px] mt-[18px] pb-[8px] border-b border-b-line text-[11px] font-bold tracking-[.1em] uppercase text-faint">
              <span>Channel</span>
              <span>Status</span>
              <span>Schedule</span>
            </div>
            <div className="grid grid-cols-[1.3fr_.7fr_1.2fr] gap-[10px] items-center px-0 py-[10px] border-b border-b-line text-[13.5px]">
              <span className="flex items-center gap-[9px] font-semibold">
                <GoogleG size={18} className="flex-none" />
                Google Shopping
              </span>
              <span className="inline-flex items-center gap-[6px] font-semibold text-ok-text">
                <span className="w-[7px] h-[7px] rounded-full bg-ok-text flex-none"></span>Live
              </span>
              <span className="text-body">Daily 03:00</span>
            </div>
            <div className="grid grid-cols-[1.3fr_.7fr_1.2fr] gap-[10px] items-center px-0 py-[10px] border-b border-b-line text-[13.5px]">
              <span className="flex items-center gap-[9px] font-semibold">
                <MetaLogo size={18} className="flex-none" />
                Meta
              </span>
              <span className="inline-flex items-center gap-[6px] font-semibold text-ok-text">
                <span className="w-[7px] h-[7px] rounded-full bg-ok-text flex-none"></span>Live
              </span>
              <span className="text-body">Every 6h</span>
            </div>
            <div className="grid grid-cols-[1.3fr_.7fr_1.2fr] gap-[10px] items-center px-0 py-[10px] border-b border-b-line text-[13.5px]">
              <span className="flex items-center gap-[9px] font-semibold">
                <span
                  className="inline-flex flex-col items-center justify-center w-[18px] h-[18px] flex-none"
                  aria-hidden="true"
                >
                  <span className="text-[15px] font-bold text-[#18181B] leading-[.8]">a</span>
                  <AmazonSmile width={16} height={5} />
                </span>
                Amazon
              </span>
              <span className="inline-flex items-center gap-[6px] font-semibold text-faint">
                <span className="w-[7px] h-[7px] rounded-full bg-faint flex-none"></span>Paused
              </span>
              <span className="text-body whitespace-nowrap">Schedule paused</span>
            </div>
            <div className="flex items-center gap-[6px] mt-[12px] text-[12px] text-faint">
              <Info size={14} strokeWidth={1.8} aria-hidden="true" className="flex-none text-faint" />
              Illustrative workspace
            </div>
          </div>
          <Image
            src="/assets/scout-clipboard.png"
            width={392}
            height={490}
            alt="Meerkat Scout with a clipboard, presenting the feed overview"
            className="absolute -right-[70px] bottom-0 h-[490px] w-auto z-[3] pointer-events-none max-md:hidden max-w-none"
          />
        </Scaled>
      </section>

      {/* Five actions */}
      <section
        className="bg-paper pt-[88px] pb-[80px] px-gutter border-t border-t-line-strong scroll-mt-[80px] max-md:pt-[56px] max-md:pb-[56px]"
        id="ladder"
      >
        <p className="m-0 mb-[20px] text-[13px] font-semibold tracking-[.14em] uppercase text-rust">Five actions</p>
        <h2 className="m-0 text-[46px] leading-[1.04] font-extrabold tracking-[-.038em] text-pretty max-xl:text-[length:clamp(30px,3.59vw,46px)]">
          From catalog to channel, with checks built in.
        </h2>
        <p className="m-0 mt-[14px] text-[17.5px] leading-[1.5] text-body max-md:text-[16px]">
          Inspect the result, resolve issues, then publish.
        </p>
        <div className="grid grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr_auto_1fr] gap-[12px] items-stretch mt-[44px] max-lg:grid-cols-1 max-lg:justify-items-stretch">
          <div className="relative flex flex-col p-[20px] pt-[22px] min-h-[250px] rounded-12 bg-white border border-line">
            <div className="flex items-center gap-[20px]">
              <span className="inline-flex items-center justify-center w-[38px] h-[38px] rounded-full text-[12.5px] font-bold flex-none bg-[#F3F0EB] text-ink">
                01
              </span>
              <Eye size={30} strokeWidth={1.5} aria-hidden="true" className="flex-none text-ink" />
            </div>
            <span className="m-0 mt-[20px] text-[22px] font-bold tracking-[-.02em]">Preview</span>
            <span className="m-0 mt-[8px] text-[15px] leading-[1.5] text-pretty text-body">
              See the resulting items.
            </span>
            <span className="m-0 mt-auto pt-[18px] text-[13.5px] font-semibold text-dim">Preview only</span>
          </div>
          <ArrowRightGlyph size={22} className="flex-none" />
          <div className="relative flex flex-col p-[20px] pt-[22px] min-h-[250px] rounded-12 bg-white border border-line">
            <div className="flex items-center gap-[20px]">
              <span className="inline-flex items-center justify-center w-[38px] h-[38px] rounded-full text-[12.5px] font-bold flex-none bg-[#F3F0EB] text-ink">
                02
              </span>
              <svg
                width="30"
                height="30"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#171514"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
                className="flex-none"
              >
                <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path>
                <path d="M14 2v4a2 2 0 0 0 2 2h4"></path>
                <path d="m9 15 2 2 4-4"></path>
              </svg>
            </div>
            <span className="m-0 mt-[20px] text-[22px] font-bold tracking-[-.02em]">Validate</span>
            <span className="m-0 mt-[8px] text-[15px] leading-[1.5] text-pretty text-body">
              Check rules and required fields.
            </span>
            <span className="m-0 mt-auto pt-[18px] text-[13.5px] font-semibold text-dim">Find issues</span>
          </div>
          <ArrowRightGlyph size={22} className="flex-none" />
          <div className="relative flex flex-col p-[20px] pt-[22px] min-h-[250px] rounded-12 bg-white border border-line">
            <div className="flex items-center gap-[20px]">
              <span className="inline-flex items-center justify-center w-[38px] h-[38px] rounded-full text-[12.5px] font-bold flex-none bg-[#F3F0EB] text-ink">
                03
              </span>
              <FileTextGlyph size={30} className="flex-none" />
            </div>
            <span className="m-0 mt-[20px] text-[22px] font-bold tracking-[-.02em]">Generate</span>
            <span className="m-0 mt-[8px] text-[15px] leading-[1.5] text-pretty text-body">
              Create a feed you can inspect.
            </span>
            <span className="m-0 mt-auto pt-[18px] text-[13.5px] font-semibold text-dim">Saved to history</span>
          </div>
          <ArrowRightGlyph size={22} className="flex-none" />
          <div className="relative flex flex-col p-[20px] pt-[22px] min-h-[250px] rounded-12 bg-white border-[1.5px] border-rust-button shadow-[0_14px_34px_rgba(194,87,30,.12)]">
            <span className="absolute -top-[13px] left-[16px] px-[10px] py-[5px] rounded-6 bg-rust-button text-white text-[10.5px] font-bold tracking-[.1em] uppercase whitespace-nowrap">
              Check before publishing
            </span>
            <div className="flex items-center gap-[20px]">
              <span className="inline-flex items-center justify-center w-[38px] h-[38px] rounded-full text-[12.5px] font-bold flex-none bg-[#F3F0EB] text-ink">
                04
              </span>
              <ShieldCheck size={30} strokeWidth={1.5} aria-hidden="true" className="flex-none text-rust-button" />
            </div>
            <span className="m-0 mt-[20px] text-[22px] font-bold tracking-[-.02em]">Preflight</span>
            <span className="m-0 mt-[8px] text-[15px] leading-[1.5] text-pretty text-body">
              Check for channel issues before publishing.
            </span>
            <span className="m-0 mt-auto pt-[18px] text-[13.5px] font-semibold text-rust">No submission</span>
          </div>
          <ArrowRightGlyph size={22} className="flex-none" />
          <div className="relative flex flex-col p-[20px] pt-[22px] min-h-[250px] rounded-12 bg-ink border border-ink text-white">
            <div className="flex items-center gap-[20px]">
              <span className="inline-flex items-center justify-center w-[38px] h-[38px] rounded-full text-[12.5px] font-bold flex-none bg-[#2A2725] text-white">
                05
              </span>
              <Send size={30} strokeWidth={1.5} aria-hidden="true" className="flex-none text-white" />
            </div>
            <span className="m-0 mt-[20px] text-[22px] font-bold tracking-[-.02em]">Publish</span>
            <span className="m-0 mt-[8px] text-[15px] leading-[1.5] text-pretty text-night-muted">
              Send the checked feed to the channel.
            </span>
            <span className="m-0 mt-auto pt-[18px] text-[13.5px] font-semibold text-[#F3EFE9]">
              Submission recorded
            </span>
          </div>
        </div>
        <div className="flex items-center gap-[12px] mt-[20px] px-[18px] py-[14px] bg-[#FBFAF8] border border-line-strong rounded-10 text-[14.5px] text-body">
          <Info size={20} strokeWidth={1.7} aria-hidden="true" className="flex-none text-rust-button" />
          Preview through preflight: no channel submission.
        </div>
      </section>

      {/* Generation history */}
      <section className="relative bg-night pt-[88px] pb-[90px] px-gutter overflow-hidden max-md:pt-[56px] max-md:pb-[56px]">
        <div
          className="absolute left-1/2 top-[80px] w-[1000px] h-[700px] -translate-x-1/2 pointer-events-none bg-[radial-gradient(closest-side,rgba(229,129,58,.10),transparent_70%)]"
          aria-hidden="true"
        ></div>
        <div className="relative z-[2]">
          <p className="m-0 mb-[22px] text-[13px] font-semibold tracking-[.14em] uppercase text-rust-bright">
            Generation history
          </p>
          <h2 className="m-0 mb-[40px] text-[50px] leading-[1.06] font-extrabold tracking-[-.035em] text-white text-pretty max-xl:text-[length:clamp(30px,3.91vw,50px)]">
            Every run. Every result. On the record.
          </h2>
          <div className="bg-night-card border border-night-line rounded-12 p-[24px] pt-[22px]">
            <div className="flex items-center gap-[14px]">
              <span className="inline-flex items-center justify-center w-[34px] h-[34px] rounded-full bg-white flex-none">
                <GoogleG size={20} className="flex-none" />
              </span>
              <span className="text-[18px] font-bold text-white">Google Shopping · US</span>
              <span className="text-[13px] text-faint">Illustrative run</span>
            </div>
            <div className="grid grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr] gap-[14px] items-center mt-[20px] max-lg:grid-cols-1 max-lg:justify-items-stretch">
              <div className="flex items-center gap-[14px] px-[16px] py-[14px] bg-[#1C1A18] border border-night-line rounded-10">
                <span className="inline-flex items-center justify-center w-[38px] h-[38px] rounded-full bg-[#2A2623] flex-none">
                  <TriangleAlert size={18} strokeWidth={1.8} aria-hidden="true" className="flex-none text-warn" />
                </span>
                <span className="flex flex-col gap-[3px] min-w-0">
                  <span className="text-[15px] font-semibold text-white">Issues found</span>
                  <span className="text-[13px] text-night-muted-2">214 preflight issues</span>
                </span>
              </div>
              <ArrowRightGlyph size={20} stroke="#8A857F" className="flex-none" />
              <div className="flex items-center gap-[14px] px-[16px] py-[14px] bg-[#1C1A18] border border-night-line rounded-10">
                <span className="inline-flex items-center justify-center w-[38px] h-[38px] rounded-full bg-[#2A2623] flex-none">
                  <FileTextGlyph size={18} stroke="#F3EFE9" strokeWidth="1.8" className="flex-none" />
                </span>
                <span className="flex flex-col gap-[3px] min-w-0">
                  <span className="text-[15px] font-semibold text-white">Rules corrected</span>
                  <span className="text-[13px] text-night-muted-2">Feed regenerated</span>
                </span>
              </div>
              <ArrowRightGlyph size={20} stroke="#8A857F" className="flex-none" />
              <div className="flex items-center gap-[14px] px-[16px] py-[14px] bg-[#1C1A18] border border-night-line rounded-10">
                <span className="inline-flex items-center justify-center w-[38px] h-[38px] rounded-full bg-[#2A2623] flex-none">
                  <CircleCheckGlyph4 size={18} className="flex-none" />
                </span>
                <span className="flex flex-col gap-[3px] min-w-0">
                  <span className="text-[15px] font-semibold text-white">Recheck passed</span>
                  <span className="text-[13px] text-night-muted-2">0 blocking issues</span>
                </span>
              </div>
              <ArrowRightGlyph size={20} stroke="#8A857F" className="flex-none" />
              <div className="flex items-center gap-[14px] px-[16px] py-[14px] bg-[#1C1A18] border border-night-line rounded-10">
                <span className="inline-flex items-center justify-center w-[38px] h-[38px] rounded-full bg-[#2A2623] flex-none">
                  <CircleCheckGlyph4 size={18} className="flex-none" />
                </span>
                <span className="flex flex-col gap-[3px] min-w-0">
                  <span className="text-[15px] font-semibold text-white">Published</span>
                  <span className="text-[13px] text-night-muted-2">1,261 items submitted</span>
                </span>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-[minmax(0,1fr)_360px] gap-[20px] mt-[20px] items-stretch max-lg:grid-cols-1">
            <div className="bg-night-card border border-night-line rounded-12 overflow-hidden stack-table" style={{ "--c2": "\"Action\"", "--c3": "\"Outcome\"", "--c4": "\"When\"" } as React.CSSProperties}>
              <div className="pt-[16px] pb-[12px] px-[20px] text-[11.5px] font-bold tracking-[.12em] uppercase text-faint">
                Recent runs
              </div>
              <div className="stack-head max-md:hidden grid grid-cols-[1.5fr_1fr_1.1fr_1.1fr_20px] gap-[14px] pt-[8px] pb-[10px] px-[20px] border-b border-b-night-line text-[11px] font-bold tracking-[.1em] uppercase text-faint max-md:grid-cols-1">
                <span>Feed</span>
                <span>Action</span>
                <span>Outcome</span>
                <span>When</span>
                <span></span>
              </div>
              <div className="stack-row grid grid-cols-[1.5fr_1fr_1.1fr_1.1fr_20px] gap-[14px] items-center px-[20px] py-[14px] border-b border-b-night-line-2 text-[14px] text-night-text max-md:grid-cols-1">
                <span className="flex items-center gap-[10px] font-semibold text-white">
                  <GoogleG size={18} className="flex-none" />
                  Google Shopping · US
                </span>
                <span className="text-amber font-semibold">Publish</span>
                <span className="inline-flex items-center gap-[8px] text-ok-bright font-semibold">
                  <span className="w-[7px] h-[7px] rounded-full bg-ok-bright flex-none"></span>Sent
                </span>
                <span className="text-faint">Today 03:00</span>
                <ChevronRight size={16} strokeWidth={1.8} aria-hidden="true" className="flex-none text-dim max-md:hidden" />
              </div>
              <div className="stack-row grid grid-cols-[1.5fr_1fr_1.1fr_1.1fr_20px] gap-[14px] items-center px-[20px] py-[14px] border-b border-b-night-line-2 text-[14px] text-night-text max-md:grid-cols-1">
                <span className="flex items-center gap-[10px] font-semibold text-white">
                  <GoogleG size={18} className="flex-none" />
                  Google Shopping · US
                </span>
                <span className="text-night-text font-semibold">Preflight</span>
                <span className="inline-flex items-center gap-[8px] text-ok-bright font-semibold">
                  <span className="w-[7px] h-[7px] rounded-full bg-ok-bright flex-none"></span>Passed
                </span>
                <span className="text-faint">Yesterday 17:12</span>
                <ChevronRight size={16} strokeWidth={1.8} aria-hidden="true" className="flex-none text-dim max-md:hidden" />
              </div>
              <div className="stack-row grid grid-cols-[1.5fr_1fr_1.1fr_1.1fr_20px] gap-[14px] items-center px-[20px] py-[14px] border-b border-b-night-line-2 text-[14px] text-night-text max-md:grid-cols-1">
                <span className="flex items-center gap-[10px] font-semibold text-white">
                  <GoogleG size={18} className="flex-none" />
                  Google Shopping · US
                </span>
                <span className="text-night-text font-semibold">Generate</span>
                <span className="inline-flex items-center gap-[8px] text-warn font-semibold">
                  <span className="w-[7px] h-[7px] rounded-full bg-warn flex-none"></span>23 warnings
                </span>
                <span className="text-faint">Yesterday 16:50</span>
                <ChevronRight size={16} strokeWidth={1.8} aria-hidden="true" className="flex-none text-dim max-md:hidden" />
              </div>
              <div className="stack-row grid grid-cols-[1.5fr_1fr_1.1fr_1.1fr_20px] gap-[14px] items-center px-[20px] py-[14px] text-[14px] text-night-text max-md:grid-cols-1">
                <span className="flex items-center gap-[10px] font-semibold text-white">
                  <MetaLogo size={18} className="flex-none" />
                  Meta · Catalog
                </span>
                <span className="text-night-text font-semibold">Publish</span>
                <span className="inline-flex items-center gap-[8px] text-ok-bright font-semibold">
                  <span className="w-[7px] h-[7px] rounded-full bg-ok-bright flex-none"></span>Sent
                </span>
                <span className="text-faint">Yesterday 12:00</span>
                <ChevronRight size={16} strokeWidth={1.8} aria-hidden="true" className="flex-none text-dim max-md:hidden" />
              </div>
            </div>
            <div className="bg-night-card border border-night-line rounded-12 p-[22px] pt-[20px] flex flex-col">
              <p className="m-0 mb-[6px] text-[18px] font-bold text-white">Feed schedules</p>
              <ul className="m-0 p-0 list-none">
                <li className="flex justify-between items-center gap-[12px] px-0 py-[11px] border-b border-b-night-line-2 text-[14.5px]">
                  <span className="flex items-center gap-[10px] font-semibold text-white">
                    <GoogleG size={18} className="flex-none" />
                    Google Shopping
                  </span>
                  <span className="inline-flex items-center gap-[7px] text-night-muted-2">Daily 03:00</span>
                </li>
                <li className="flex justify-between items-center gap-[12px] px-0 py-[11px] border-b border-b-night-line-2 text-[14.5px]">
                  <span className="flex items-center gap-[10px] font-semibold text-white">
                    <MetaLogo size={18} className="flex-none" />
                    Meta
                  </span>
                  <span className="inline-flex items-center gap-[7px] text-night-muted-2">Every 6h</span>
                </li>
                <li className="flex justify-between items-center gap-[12px] px-0 py-[11px] text-[14.5px]">
                  <span className="flex items-center gap-[10px] font-semibold text-white">
                    <span
                      className="inline-flex flex-col items-center justify-center w-[18px] h-[18px] flex-none"
                      aria-hidden="true"
                    >
                      <span className="text-[15px] font-bold text-white leading-[.8]">a</span>
                      <AmazonSmile width={16} height={5} />
                    </span>
                    Amazon
                  </span>
                  <span className="inline-flex items-center gap-[7px] text-night-muted-2">
                    <PauseGlyph size={14} className="flex-none" />
                    Paused
                  </span>
                </li>
              </ul>
              <p className="m-0 mt-auto pt-[16px] border-t border-t-night-line-2 text-[13.5px] leading-[1.55] text-night-muted-2 text-pretty">
                Scheduled publishing proceeds when preflight passes. If blocked, Scout records the issues and keeps the
                last good feed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pause and resume */}
      <section className="bg-paper pt-[88px] pb-0 px-gutter max-md:pt-[56px]">
        <div className="grid grid-cols-[minmax(0,1fr)_560px] gap-[60px] items-center max-xl:grid-cols-2 max-lg:grid-cols-1">
          <div>
            <p className="m-0 mb-[20px] text-[13px] font-semibold tracking-[.14em] uppercase text-rust">
              Pause and resume
            </p>
            <h2 className="m-0 text-[46px] leading-[1.04] font-extrabold tracking-[-.038em] text-pretty max-xl:text-[length:clamp(30px,3.59vw,46px)]">
              Pause a feed. Keep what&#39;s live.
            </h2>
            <p className="m-0 mt-[22px] text-[17.5px] leading-[1.55] text-body max-w-[520px] text-pretty max-md:text-[16px]">
              Pause scheduled updates while existing listings stay as they were. Resume with your rules and history
              intact.
            </p>
            <p className="m-0 mt-[18px] text-[15px] text-dim">Scout has read-only access to your Shopify catalog.</p>
          </div>
          <div className="px-[26px] py-[24px] bg-white border border-line rounded-14 shadow-raised">
            <div className="flex items-center justify-between gap-[16px]">
              <span className="flex items-center gap-[12px] text-[22px] font-bold tracking-[-.02em]">
                <span
                  className="inline-flex flex-col items-center justify-center w-[28px] h-[28px] flex-none"
                  aria-hidden="true"
                >
                  <span className="text-[24px] font-bold text-[#18181B] leading-[.8]">a</span>
                  <AmazonSmile width={25} height={8} />
                </span>
                Amazon · Listings
              </span>
              <span className="flex items-center gap-[12px]">
                <span className="inline-flex items-center gap-[7px] px-[12px] py-[6px] rounded-full bg-[#F1EEE9] text-[13px] font-semibold text-body">
                  <PauseGlyph size={14} stroke="#52525B" className="flex-none" />
                  Paused
                </span>
                <MoreVertical size={20} strokeWidth={1.8} aria-hidden="true" className="flex-none text-faint" />
              </span>
            </div>
            <div className="m-0 mt-[18px] h-px bg-line"></div>
            <div className="grid grid-cols-[1fr_1fr] mt-[18px] max-lg:grid-cols-1">
              <div className="flex flex-col gap-[8px] pr-[24px]">
                <span className="text-[11.5px] font-bold tracking-[.12em] uppercase text-faint">Scheduled updates</span>
                <span className="inline-flex items-center gap-[8px] text-[15.5px] font-bold">
                  <span className="inline-flex items-center justify-center w-[22px] h-[22px] rounded-full bg-[#F1EEE9] flex-none">
                    <PauseGlyph size={12} stroke="#52525B" strokeWidth="2.2" className="flex-none" />
                  </span>
                  Paused
                </span>
                <span className="text-[14px] leading-[1.45] text-body">Last successful feed retained</span>
                <span className="text-[14px] font-semibold text-ink">Mon 09:31</span>
              </div>
              <div className="flex flex-col gap-[8px] pl-[24px] border-l border-l-line">
                <span className="text-[11.5px] font-bold tracking-[.12em] uppercase text-faint">Existing listings</span>
                <span className="inline-flex items-center gap-[8px] text-[15.5px] font-bold text-ok-text">
                  <span className="w-[8px] h-[8px] rounded-full bg-ok-text flex-none"></span>1,284 unchanged
                </span>
                <span className="text-[14px] leading-[1.45] text-body">Rules and history intact</span>
              </div>
            </div>
            <div className="flex items-center justify-between gap-[16px] mt-[22px]">
              <span className="inline-flex items-center justify-center min-h-[44px] px-[22px] py-0 rounded-8 bg-rust-button text-[15px] font-semibold text-white">
                Resume feed
              </span>
              <span className="inline-flex items-center gap-[6px] text-[13px] text-faint">
                <Info size={14} strokeWidth={1.8} aria-hidden="true" className="flex-none text-faint" />
                Illustrative preview
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Related features */}
      <section className="bg-paper pt-[64px] pb-[96px] px-gutter max-md:pt-[48px] max-md:pb-[56px]">
        <p className="m-0 mb-[16px] text-[13px] font-semibold tracking-[.14em] uppercase text-rust">Related features</p>
        <div className="grid grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr] gap-[12px] items-center max-lg:grid-cols-1 max-lg:justify-items-stretch">
          <Link
            className="flex items-center gap-[14px] px-[18px] py-[16px] rounded-10 bg-white border border-line text-ink"
            href="/platform/diagnostics"
          >
            <SearchGlyph2 size={24} className="flex-none" />
            <span className="flex flex-col gap-[3px]">
              <span className="text-[15.5px] font-bold">Diagnostics</span>
              <span className="text-[13.5px] text-dim">Names the field</span>
            </span>
          </Link>
          <ArrowRightGlyph size={22} className="flex-none" />
          <Link
            className="flex items-center gap-[14px] px-[18px] py-[16px] rounded-10 bg-white border border-line text-ink"
            href="/platform/rules-engine"
          >
            <FileTextGlyph size={24} strokeWidth="1.6" className="flex-none" />
            <span className="flex flex-col gap-[3px]">
              <span className="text-[15.5px] font-bold">Rules Engine</span>
              <span className="text-[13.5px] text-dim">Fixes it</span>
            </span>
          </Link>
          <ArrowRightGlyph size={22} className="flex-none" />
          <span className="flex items-center gap-[14px] px-[18px] py-[16px] rounded-10 bg-ink border border-ink text-white">
            <Database size={24} strokeWidth={1.6} aria-hidden="true" className="flex-none text-white" />
            <span className="flex flex-col gap-[3px]">
              <span className="text-[15.5px] font-bold">Feed Management</span>
              <span className="text-[13.5px] text-night-muted">Republishes it</span>
            </span>
          </span>
          <ArrowRightGlyph size={22} className="flex-none" />
          <Link
            className="flex items-center gap-[14px] px-[18px] py-[16px] rounded-10 bg-white border border-line text-ink"
            href="/platform/conversion-intelligence"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#171514"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
              className="flex-none"
            >
              <path d="M3 3v18h18"></path>
              <path d="M18 17V9"></path>
              <path d="M13 17V5"></path>
              <path d="M8 17v-3"></path>
            </svg>
            <span className="flex flex-col gap-[3px]">
              <span className="text-[15.5px] font-bold">Conversion Intelligence</span>
              <span className="text-[13.5px] text-dim">Says whether it mattered</span>
            </span>
          </Link>
        </div>
      </section>

      <PreFooterCta />

      <SiteFooter current="Feed-Management" />
    </>
  );
}
