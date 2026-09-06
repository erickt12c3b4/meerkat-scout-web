import Image from "next/image";
import Link from "next/link";
import { Scaled } from "@/components/site/scaled";
import { ArrowRight, Check, ChevronDown, Rss } from "lucide-react";
import {
  AmazonSmile,
  BellGlyph,
  ChartLineGlyph,
  ChevronRightGlyph,
  CircleCheckGlyph2,
  CircleCheckGlyph3,
  CirclePlusGlyph,
  EyeGlyph,
  Glyph2,
  GoogleAnalyticsBars,
  GoogleG,
  GoogleG2,
  GridGlyph,
  InfoGlyph,
  MetaLogo,
  MicrosoftLogo,
  PinterestP,
  SearchGlyph,
  ShieldGlyph2,
  ShopifyBag,
  ShopifyBag2,
  SnapchatGhost,
  SparkleGlyph,
  TargetGlyph,
  TriangleAlertGlyph,
  WalmartSpark,
  WindowGlyph,
} from "@/components/brand-icons";
import { SiteHeader } from "@/components/site/site-header";
import { SiteFooter } from "@/components/site/site-footer";
import { PreFooterCta } from "@/components/site/pre-footer-cta";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: { absolute: "Meerkat Scout — Make every product ready for every channel" },
  description:
    "Clean, enrich, validate, and publish your catalog everywhere — then see exactly what to fix and where to grow. Product feed management and commerce intelligence for Shopify.",
};

// Source: Meerkat-Scout-Homepage.html -> /
export default function HomePage() {
  return (
    <>
      <SiteHeader />

      <section className="leading-normal font-home relative h-[634px] overflow-hidden">
        <div className="relative mx-auto w-full max-w-[1440px]">
          <div className="absolute -top-[83px] left-[153px] w-[1287px] h-[725px]">
            <Image
              src="/assets/img-04.png"
              width={1300}
              height={732}
              alt="Drop the meerkat + jungle composite"
              sizes="(max-width: 768px) 50vw, 240px"
              className="block w-full h-full object-cover max-w-none"
            />
          </div>
          <div className="absolute -top-[83px] left-0 w-[1440px] h-[725px] pointer-events-none [background:linear-gradient(to_right,#F7F6F4_0%,rgba(247,246,244,.92)_21%,rgba(247,246,244,.35)_39%,rgba(247,246,244,0)_53%)]"></div>
          <div className="absolute left-0 right-0 bottom-0 h-[70px] pointer-events-none bg-[linear-gradient(to_bottom,rgba(247,246,244,0),rgba(247,246,244,.55))]"></div>
          <div className="relative z-10 pt-[100px] pb-0 pr-0 pl-[calc(var(--gutter)+10px)] max-w-[820px]">
            <p className="m-0 mb-[26px] text-[13px] font-semibold tracking-[.13em] uppercase text-rust-button">
              Product feed management + commerce intelligence
            </p>
            <h1 className="m-0 text-[57px] leading-[1.08] font-extrabold tracking-[-.035em] max-w-[660px] max-xl:text-[length:clamp(36px,4.45vw,57px)]">
              Make every product
              <br />
              ready for every channel.
            </h1>
            <p className="m-0 mt-[28px] text-[17.5px] leading-[1.55] text-body max-w-[505px] max-md:text-[16px]">
              Clean, enrich, validate, and publish your catalog
              <br />
              everywhere—then see exactly what to fix and where to grow.
            </p>
            <div className="flex items-center gap-[16px] mt-[38px] max-md:flex-wrap max-xs:flex-col max-xs:items-stretch">
              <button className="hover:bg-[#a84613] active:bg-[#943c0c] [font-family:inherit] text-[15.5px] font-semibold text-white bg-rust-button border-0 rounded-[7px] px-[28px] py-[15px] cursor-pointer shadow-hairline">
                Book a demo
              </button>
              <button className="hover:bg-[#c2571e0f] hover:border-[#c2571e] active:bg-[#c2571e1f] [font-family:inherit] text-[15.5px] font-semibold text-rust-button bg-transparent border border-[#E3B394] rounded-[7px] px-[26px] py-[15px] cursor-pointer">
                See how it works
              </button>
            </div>
            <p className="m-0 mt-[44px] text-[15px] font-medium text-[#71717A]">One catalog. Every destination.</p>
          </div>
          <div className="absolute inset-0 z-[12] pointer-events-none">
            <svg width="1440" height="634" viewBox="0 0 1440 634" fill="none" className="absolute left-0 top-0">
              <defs>
                <mask id="heroScoutMask" maskUnits="userSpaceOnUse" x="0" y="0" width="1440" height="634">
                  <rect x="0" y="0" width="1440" height="634" fill="#fff"></rect>
                  <path
                    d="M1076.7 10.1L1101.4 16.0L1118.3 25.9L1131.1 39.8L1134.1 60.6L1130.1 80.3L1121.2 97.2L1114.3 105.1L1128.2 115.0L1139.0 126.9L1145.0 149.7L1148.9 176.4L1147.0 204.1L1146.0 231.8L1142.0 255.6L1144.0 281.3L1143.0 308.1L1143.0 327.9L1162.8 334.8L1190.5 348.6L1212.3 357.6L1227.2 359.5L1218.2 374.4L1184.6 378.3L1152.9 368.4L1139.0 354.6L1138.0 367.4L1135.1 382.3L1143.0 412.0L1158.8 439.7L1154.9 456.5L1108.3 459.5L1098.5 431.8L1093.5 407.1L1073.7 402.1L1068.8 431.8L1065.8 459.5L1004.4 459.5L992.5 441.7L996.5 416.9L1010.3 392.2L1018.3 367.4L1020.2 342.7L1017.3 317.9L1022.2 288.3L1028.2 263.5L1022.2 243.7L1017.3 214.0L1019.3 184.3L1024.2 154.6L1032.1 129.8L1042.0 113.0L1055.9 107.1L1044.0 95.2L1032.1 80.3L1026.2 60.6L1024.2 40.8L1039.0 21.0L1058.8 12.0Z"
                    fill="#000"
                  ></path>
                </mask>
              </defs>
              <defs>
                <radialGradient id="heroDotG">
                  <stop offset="0" stopColor="#F6A05C" stopOpacity=".7"></stop>
                  <stop offset="1" stopColor="#F6A05C" stopOpacity="0"></stop>
                </radialGradient>
              </defs>
              <g
                mask="url(#heroScoutMask)"
                stroke="#D86B2A"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeDasharray="3 6"
                opacity=".95"
              >
                <path id="msP1" d="M928 103 C972 103 1002 121 1034 153"></path>
                <path id="msP2" d="M932 208 C982 208 1012 212 1048 226"></path>
                <path id="msP3" d="M944 330 C990 322 1022 300 1054 277"></path>
                <path id="msP4" d="M1090 250 C1132 198 1162 167 1226 166"></path>
                <path id="msP5" d="M1090 250 C1138 221 1174 217 1226 220"></path>
                <path id="msP6" d="M1090 250 C1142 250 1182 272 1226 277"></path>
                <path id="msP7" d="M1090 250 C1138 287 1174 323 1226 333"></path>
                <path id="msP8" d="M1090 250 C1132 301 1162 381 1226 389"></path>
              </g>
              <g mask="url(#heroScoutMask)" fill="none" strokeLinecap="round">
                <g stroke="#F6A05C" strokeWidth="18" opacity="0.10">
                  <path
                    style={{ animationDuration: "3.4s", animationDelay: "-0.88s" }}
                    d="M928 103 C972 103 1002 121 1034 153"
                    pathLength="100"
                    strokeDasharray="30 70"
                  ></path>
                  <path
                    style={{ animationDuration: "3.4s", animationDelay: "-1.98s" }}
                    d="M932 208 C982 208 1012 212 1048 226"
                    pathLength="100"
                    strokeDasharray="30 70"
                  ></path>
                  <path
                    style={{ animationDuration: "3.4s", animationDelay: "-3.08s" }}
                    d="M944 330 C990 322 1022 300 1054 277"
                    pathLength="100"
                    strokeDasharray="30 70"
                  ></path>
                  <path
                    style={{ animationDuration: "3s", animationDelay: "-1.08s" }}
                    d="M1090 250 C1132 198 1162 167 1226 166"
                    pathLength="100"
                    strokeDasharray="30 70"
                  ></path>
                  <path
                    style={{ animationDuration: "3s", animationDelay: "-1.68s" }}
                    d="M1090 250 C1138 221 1174 217 1226 220"
                    pathLength="100"
                    strokeDasharray="30 70"
                  ></path>
                  <path
                    style={{ animationDuration: "3s", animationDelay: "-2.28s" }}
                    d="M1090 250 C1142 250 1182 272 1226 277"
                    pathLength="100"
                    strokeDasharray="30 70"
                  ></path>
                  <path
                    style={{ animationDuration: "3s", animationDelay: "-2.88s" }}
                    d="M1090 250 C1138 287 1174 323 1226 333"
                    pathLength="100"
                    strokeDasharray="30 70"
                  ></path>
                  <path
                    style={{ animationDuration: "3s", animationDelay: "-3.48s" }}
                    d="M1090 250 C1132 301 1162 381 1226 389"
                    pathLength="100"
                    strokeDasharray="30 70"
                  ></path>
                </g>
                <g stroke="#F6A05C" strokeWidth="12" opacity="0.2">
                  <path
                    style={{ animationDuration: "3.4s", animationDelay: "-0.61s" }}
                    d="M928 103 C972 103 1002 121 1034 153"
                    pathLength="100"
                    strokeDasharray="22 78"
                  ></path>
                  <path
                    style={{ animationDuration: "3.4s", animationDelay: "-1.71s" }}
                    d="M932 208 C982 208 1012 212 1048 226"
                    pathLength="100"
                    strokeDasharray="22 78"
                  ></path>
                  <path
                    style={{ animationDuration: "3.4s", animationDelay: "-2.81s" }}
                    d="M944 330 C990 322 1022 300 1054 277"
                    pathLength="100"
                    strokeDasharray="22 78"
                  ></path>
                  <path
                    style={{ animationDuration: "3s", animationDelay: "-0.84s" }}
                    d="M1090 250 C1132 198 1162 167 1226 166"
                    pathLength="100"
                    strokeDasharray="22 78"
                  ></path>
                  <path
                    style={{ animationDuration: "3s", animationDelay: "-1.44s" }}
                    d="M1090 250 C1138 221 1174 217 1226 220"
                    pathLength="100"
                    strokeDasharray="22 78"
                  ></path>
                  <path
                    style={{ animationDuration: "3s", animationDelay: "-2.04s" }}
                    d="M1090 250 C1142 250 1182 272 1226 277"
                    pathLength="100"
                    strokeDasharray="22 78"
                  ></path>
                  <path
                    style={{ animationDuration: "3s", animationDelay: "-2.64s" }}
                    d="M1090 250 C1138 287 1174 323 1226 333"
                    pathLength="100"
                    strokeDasharray="22 78"
                  ></path>
                  <path
                    style={{ animationDuration: "3s", animationDelay: "-3.24s" }}
                    d="M1090 250 C1132 301 1162 381 1226 389"
                    pathLength="100"
                    strokeDasharray="22 78"
                  ></path>
                </g>
                <g stroke="#E8823A" strokeWidth="6.5" opacity="0.42">
                  <path
                    style={{ animationDuration: "3.4s", animationDelay: "-0.31s" }}
                    d="M928 103 C972 103 1002 121 1034 153"
                    pathLength="100"
                    strokeDasharray="13 87"
                  ></path>
                  <path
                    style={{ animationDuration: "3.4s", animationDelay: "-1.41s" }}
                    d="M932 208 C982 208 1012 212 1048 226"
                    pathLength="100"
                    strokeDasharray="13 87"
                  ></path>
                  <path
                    style={{ animationDuration: "3.4s", animationDelay: "-2.51s" }}
                    d="M944 330 C990 322 1022 300 1054 277"
                    pathLength="100"
                    strokeDasharray="13 87"
                  ></path>
                  <path
                    style={{ animationDuration: "3s", animationDelay: "-0.57s" }}
                    d="M1090 250 C1132 198 1162 167 1226 166"
                    pathLength="100"
                    strokeDasharray="13 87"
                  ></path>
                  <path
                    style={{ animationDuration: "3s", animationDelay: "-1.17s" }}
                    d="M1090 250 C1138 221 1174 217 1226 220"
                    pathLength="100"
                    strokeDasharray="13 87"
                  ></path>
                  <path
                    style={{ animationDuration: "3s", animationDelay: "-1.77s" }}
                    d="M1090 250 C1142 250 1182 272 1226 277"
                    pathLength="100"
                    strokeDasharray="13 87"
                  ></path>
                  <path
                    style={{ animationDuration: "3s", animationDelay: "-2.37s" }}
                    d="M1090 250 C1138 287 1174 323 1226 333"
                    pathLength="100"
                    strokeDasharray="13 87"
                  ></path>
                  <path
                    style={{ animationDuration: "3s", animationDelay: "-2.97s" }}
                    d="M1090 250 C1132 301 1162 381 1226 389"
                    pathLength="100"
                    strokeDasharray="13 87"
                  ></path>
                </g>
                <g stroke="#FFEAD6" strokeWidth="2.6" opacity="1">
                  <path
                    style={{ animationDuration: "3.4s", animationDelay: "0.00s" }}
                    d="M928 103 C972 103 1002 121 1034 153"
                    pathLength="100"
                    strokeDasharray="4 96"
                  ></path>
                  <path
                    style={{ animationDuration: "3.4s", animationDelay: "-1.10s" }}
                    d="M932 208 C982 208 1012 212 1048 226"
                    pathLength="100"
                    strokeDasharray="4 96"
                  ></path>
                  <path
                    style={{ animationDuration: "3.4s", animationDelay: "-2.20s" }}
                    d="M944 330 C990 322 1022 300 1054 277"
                    pathLength="100"
                    strokeDasharray="4 96"
                  ></path>
                  <path
                    style={{ animationDuration: "3s", animationDelay: "-0.30s" }}
                    d="M1090 250 C1132 198 1162 167 1226 166"
                    pathLength="100"
                    strokeDasharray="4 96"
                  ></path>
                  <path
                    style={{ animationDuration: "3s", animationDelay: "-0.90s" }}
                    d="M1090 250 C1138 221 1174 217 1226 220"
                    pathLength="100"
                    strokeDasharray="4 96"
                  ></path>
                  <path
                    style={{ animationDuration: "3s", animationDelay: "-1.50s" }}
                    d="M1090 250 C1142 250 1182 272 1226 277"
                    pathLength="100"
                    strokeDasharray="4 96"
                  ></path>
                  <path
                    style={{ animationDuration: "3s", animationDelay: "-2.10s" }}
                    d="M1090 250 C1138 287 1174 323 1226 333"
                    pathLength="100"
                    strokeDasharray="4 96"
                  ></path>
                  <path
                    style={{ animationDuration: "3s", animationDelay: "-2.70s" }}
                    d="M1090 250 C1132 301 1162 381 1226 389"
                    pathLength="100"
                    strokeDasharray="4 96"
                  ></path>
                </g>
              </g>
              <g mask="url(#heroScoutMask)" fill="#fff" stroke="#D86B2A" strokeWidth="2.2">
                <circle cx="928" cy="103" r="4.5"></circle>
                <circle cx="932" cy="208" r="4.5"></circle>
                <circle cx="944" cy="330" r="4.5"></circle>
                <circle cx="1090" cy="250" r="4.5"></circle>
                <circle cx="1231" cy="166" r="4.5"></circle>
                <circle cx="1231" cy="222" r="4.5"></circle>
                <circle cx="1231" cy="278" r="4.5"></circle>
                <circle cx="1231" cy="334" r="4.5"></circle>
                <circle cx="1231" cy="390" r="4.5"></circle>
              </g>
              <g>
                <circle
                  style={{ animationDuration: "3s", animationDelay: "-0.3s" }}
                  cx="1231"
                  cy="166"
                  r="10"
                  fill="url(#heroDotG)"
                ></circle>
                <circle
                  style={{ animationDuration: "3s", animationDelay: "-0.3s" }}
                  cx="1231"
                  cy="166"
                  r="2.4"
                  fill="#FFF6E8"
                ></circle>
                <circle
                  style={{ animationDuration: "3s", animationDelay: "-0.9s" }}
                  cx="1231"
                  cy="220"
                  r="10"
                  fill="url(#heroDotG)"
                ></circle>
                <circle
                  style={{ animationDuration: "3s", animationDelay: "-0.9s" }}
                  cx="1231"
                  cy="220"
                  r="2.4"
                  fill="#FFF6E8"
                ></circle>
                <circle
                  style={{ animationDuration: "3s", animationDelay: "-1.5s" }}
                  cx="1231"
                  cy="277"
                  r="10"
                  fill="url(#heroDotG)"
                ></circle>
                <circle
                  style={{ animationDuration: "3s", animationDelay: "-1.5s" }}
                  cx="1231"
                  cy="277"
                  r="2.4"
                  fill="#FFF6E8"
                ></circle>
                <circle
                  style={{ animationDuration: "3s", animationDelay: "-2.1s" }}
                  cx="1231"
                  cy="333"
                  r="10"
                  fill="url(#heroDotG)"
                ></circle>
                <circle
                  style={{ animationDuration: "3s", animationDelay: "-2.1s" }}
                  cx="1231"
                  cy="333"
                  r="2.4"
                  fill="#FFF6E8"
                ></circle>
                <circle
                  style={{ animationDuration: "3s", animationDelay: "-2.7s" }}
                  cx="1231"
                  cy="389"
                  r="10"
                  fill="url(#heroDotG)"
                ></circle>
                <circle
                  style={{ animationDuration: "3s", animationDelay: "-2.7s" }}
                  cx="1231"
                  cy="389"
                  r="2.4"
                  fill="#FFF6E8"
                ></circle>
              </g>
            </svg>
            <div className="absolute left-[748px] top-[75px] w-[178px] flex items-center gap-[11px] px-[14px] py-[13px] bg-white border border-line rounded-10 shadow-[0_10px_28px_rgba(24,24,27,.10)]">
              <span className="flex items-center justify-center w-[28px] h-[28px] rounded-full bg-[#FDF1E3] flex-none">
                <TriangleAlertGlyph size={16} />
              </span>
              <span>
                <span className="block text-[13.5px] font-semibold text-[#18181B]">Missing GTIN</span>
                <span className="block text-[11.5px] text-[#8E8E94] mt-[2px]">SKU-88421</span>
              </span>
            </div>
            <div className="absolute left-[752px] top-[180px] w-[178px] flex items-center gap-[11px] px-[14px] py-[13px] bg-white border border-line rounded-10 shadow-[0_10px_28px_rgba(24,24,27,.10)]">
              <span className="flex items-center justify-center w-[28px] h-[28px] rounded-full bg-[#2E9B63] flex-none">
                <Check size={15} strokeWidth={2.4} className="text-white" />
              </span>
              <span>
                <span className="block text-[13.5px] font-semibold text-[#18181B]">Approved</span>
                <span className="block text-[11.5px] text-[#8E8E94] mt-[2px]">SKU-88421</span>
              </span>
            </div>
            <div className="absolute left-[690px] top-[288px] w-[252px] pt-[16px] pb-[14px] px-[18px] bg-white border border-line rounded-10 shadow-[0_14px_34px_rgba(24,24,27,.12)]">
              <p className="m-0 mb-[12px] text-[14px] font-semibold text-[#18181B]">Feed health</p>
              <div className="flex items-center gap-[16px]">
                {/* COMPOSITION 88 x 88 */}
                <div className="relative w-[88px] h-[88px] flex-none rounded-full bg-[conic-gradient(from_0deg,#E1712A_0_24%,#EAE8E4_24%_30.5%,#2E9B63_30.5%_100%)]">
                  <div className="absolute inset-[11px] rounded-full bg-white flex flex-col items-center justify-center leading-none">
                    <span className="text-[23px] font-bold tracking-[-.02em]">86</span>
                    <span className="text-[10px] text-[#9A9AA0] mt-[3px]">/100</span>
                  </div>
                </div>
                <div className="flex-1 flex flex-col gap-[9px] text-[11.5px]">
                  <span className="flex justify-between">
                    <span className="text-[#71717A]">Products</span>
                    <span className="font-semibold text-nav">12,847</span>
                  </span>
                  <span className="flex justify-between">
                    <span className="text-[#71717A]">Errors</span>
                    <span className="font-semibold text-[#DC2626]">126</span>
                  </span>
                  <span className="flex justify-between">
                    <span className="text-[#71717A]">Warnings</span>
                    <span className="font-semibold text-[#E1712A]">384</span>
                  </span>
                </div>
              </div>
              <div className="mt-[14px] pt-[11px] border-t border-t-[#F1EFEC] flex items-center justify-between text-[11px] text-[#8E8E94]">
                <span>View full report</span>
                <ArrowRight size={13} strokeWidth={1.8} className="text-[#8E8E94]" />
              </div>
            </div>
          </div>
          <div className="absolute left-[1236px] top-[143px] z-[13] flex flex-col gap-[10px]">
            <div className="flex items-center gap-[9px] w-[116px] h-[46px] px-[11px] py-0 bg-white border border-line rounded-8 shadow-[0_8px_22px_rgba(24,24,27,.10)]">
              <GoogleG size={22} className="flex-none" />
              <span className="text-[13px] font-medium text-[#27272A]">Google</span>
            </div>
            <div className="flex items-center gap-[9px] w-[116px] h-[46px] px-[11px] py-0 bg-white border border-line rounded-8 shadow-[0_8px_22px_rgba(24,24,27,.10)]">
              <MetaLogo size={22} className="flex-none" />
              <span className="text-[13px] font-medium text-[#27272A]">Meta</span>
            </div>
            <div className="flex items-center gap-[9px] w-[116px] h-[46px] px-[11px] py-0 bg-white border border-line rounded-8 shadow-[0_8px_22px_rgba(24,24,27,.10)]">
              <span className="inline-flex flex-col items-center justify-center w-[22px] flex-none">
                <span className="text-[19px] font-bold text-[#18181B] leading-[.8]">a</span>
                <AmazonSmile width={21} height={7} />
              </span>
              <span className="text-[13px] font-medium text-[#27272A]">Amazon</span>
            </div>
            <div className="flex items-center gap-[9px] w-[116px] h-[46px] px-[11px] py-0 bg-white border border-line rounded-8 shadow-[0_8px_22px_rgba(24,24,27,.10)]">
              <WalmartSpark size={22} className="flex-none" />
              <span className="text-[13px] font-medium text-[#27272A]">Walmart</span>
            </div>
            <div className="flex items-center gap-[9px] w-[116px] h-[46px] px-[11px] py-0 bg-white border border-line rounded-8 shadow-[0_8px_22px_rgba(24,24,27,.10)]">
              <Glyph2 size={21} className="flex-none" />
              <span className="text-[13px] font-medium text-[#27272A]">TikTok</span>
            </div>
          </div>
          <div className="absolute left-[640px] top-[486px] z-[24] w-[780px] h-[330px] flex overflow-hidden bg-white border border-line rounded-12 shadow-[0_24px_60px_rgba(24,24,27,.16)] [transform:rotate(-1.6deg)]">
            <div className="w-[172px] flex-none bg-[#1B1A19] px-[12px] py-[16px] flex flex-col gap-[14px]">
              <div className="flex items-center px-[4px] py-0">
                <Image
                  src="/assets/img-03-light.png"
                  width={126}
                  height={31}
                  alt="Meerkat Scout"
                  className="block w-[126px] h-[31px] object-contain max-w-none"
                />
              </div>
              <div className="flex flex-col gap-[3px]">
                <span className="flex items-center gap-[8px] px-[8px] py-[7px] rounded-[5px] bg-[#2B2A28] text-[11.5px] font-medium text-white">
                  <GridGlyph size={12} />
                  Dashboard
                  <svg
                    width="11"
                    height="11"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#D2662A"
                    strokeWidth="2"
                    className="ml-auto"
                  >
                    <path d="M3 21h18"></path>
                    <path d="M7 21V11"></path>
                    <path d="M12 21V7"></path>
                    <path d="M17 21v-6"></path>
                  </svg>
                </span>
                <span className="flex items-center gap-[8px] px-[8px] py-[7px] text-[11.5px] text-placeholder">
                  <WindowGlyph size={12} />
                  Catalog
                </span>
                <span className="flex items-center gap-[8px] px-[8px] py-[7px] text-[11.5px] text-placeholder">
                  <Rss size={12} strokeWidth={1.6} className="text-placeholder" />
                  Feeds
                </span>
                <span className="flex items-center gap-[8px] px-[8px] py-[7px] text-[11.5px] text-placeholder">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#A9A7A2" strokeWidth="1.6">
                    <circle cx="12" cy="12" r="9"></circle>
                    <path d="M3 12h18"></path>
                  </svg>
                  Channels
                </span>
                <span className="flex items-center gap-[8px] px-[8px] py-[7px] text-[11.5px] text-placeholder">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#A9A7A2" strokeWidth="1.6">
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                  </svg>
                  Diagnostics
                </span>
                <span className="flex items-center gap-[8px] px-[8px] py-[7px] text-[11.5px] text-placeholder">
                  <SparkleGlyph size={12} />
                  Recommendations
                </span>
                <span className="flex items-center gap-[8px] px-[8px] py-[7px] text-[11.5px] text-placeholder">
                  <ChartLineGlyph size={12} />
                  Analytics
                </span>
                <span className="flex items-center gap-[8px] px-[8px] py-[7px] text-[11.5px] text-placeholder">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#A9A7A2" strokeWidth="1.6">
                    <circle cx="12" cy="12" r="3"></circle>
                    <path d="M12 2v3M12 19v3M2 12h3M19 12h3"></path>
                  </svg>
                  Channel Settings
                </span>
              </div>
            </div>
            <div className="flex-1 px-[18px] py-[16px] flex flex-col gap-[13px] min-w-0">
              <div className="flex items-start justify-between gap-[12px]">
                <span>
                  <span className="block text-[15px] font-bold tracking-[-.01em]">Dashboard</span>
                  <span className="block text-[10.5px] text-[#9A9AA0] mt-[3px]">Snapshot as of 2h ago</span>
                </span>
                <span className="flex items-center gap-[8px]">
                  <span className="flex items-center gap-[7px] h-[26px] px-[9px] py-0 border border-[#E6E3DF] rounded-[5px] text-[10.5px] text-nav">
                    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#71717A" strokeWidth="1.6">
                      <path d="M3 21h18V8l-9-5-9 5z"></path>
                    </svg>
                    Northstar Outfitters
                    <ChevronDown size={10} className="text-[#71717A]" />
                  </span>
                  <BellGlyph size={14} />
                  <span className="flex items-center gap-[6px] h-[26px] px-[10px] py-0 border border-[#E6E3DF] rounded-[5px] text-[10.5px] text-nav">
                    <span className="w-[6px] h-[6px] rounded-full bg-[#2E9B63]"></span>All systems operational
                  </span>
                </span>
              </div>
              <div className="grid grid-cols-6 gap-[8px]">
                <span className="border border-[#EDEAE6] rounded-6 px-[10px] py-[9px]">
                  <span className="block text-[9px] text-[#9A9AA0] leading-[1.3]">Connected channels</span>
                  <span className="block text-[15px] font-bold mt-[5px]">7 / 10</span>
                </span>
                <span className="border border-[#EDEAE6] rounded-6 px-[10px] py-[9px]">
                  <span className="block text-[9px] text-[#9A9AA0] leading-[1.3]">Total SKUs</span>
                  <span className="block text-[15px] font-bold mt-[5px]">12,847</span>
                </span>
                <span className="border border-[#EDEAE6] rounded-6 px-[10px] py-[9px]">
                  <span className="block text-[9px] text-[#9A9AA0] leading-[1.3]">Open errors</span>
                  <span className="block text-[15px] font-bold mt-[5px] text-[#DC2626]">342</span>
                </span>
                <span className="border border-[#EDEAE6] rounded-6 px-[10px] py-[9px]">
                  <span className="block text-[9px] text-[#9A9AA0] leading-[1.3]">Open warnings</span>
                  <span className="block text-[15px] font-bold mt-[5px] text-[#E1712A]">1,108</span>
                </span>
                <span className="border border-[#EDEAE6] rounded-6 px-[10px] py-[9px]">
                  <span className="block text-[9px] text-[#9A9AA0] leading-[1.3]">Products pending review</span>
                  <span className="block text-[15px] font-bold mt-[5px]">287</span>
                </span>
                <span className="border border-[#EDEAE6] rounded-6 px-[10px] py-[9px]">
                  <span className="block text-[9px] text-[#9A9AA0] leading-[1.3]">Feeds with sync issues</span>
                  <span className="block text-[15px] font-bold mt-[5px]">3</span>
                </span>
              </div>
              <div className="flex flex-col gap-0">
                <span className="text-[12px] font-semibold pb-[9px]">Channel health</span>
                <span className="grid grid-cols-[1.5fr_1fr_.8fr_.8fr_.8fr_1fr] gap-[8px] px-0 py-[7px] border-t border-t-[#EDEAE6] border-b border-b-[#EDEAE6] text-[9.5px] text-[#9A9AA0]">
                  <span>Channel</span>
                  <span>Status</span>
                  <span>Products</span>
                  <span>Errors</span>
                  <span>Warnings</span>
                  <span>Last sync</span>
                </span>
                <span className="grid grid-cols-[1.5fr_1fr_.8fr_.8fr_.8fr_1fr] gap-[8px] items-center px-0 py-[9px] border-b border-b-[#F3F1EE] text-[10.5px] text-nav">
                  <span className="flex items-center gap-[7px]">
                    <GoogleG size={14} className="flex-none" />
                    Google Shopping
                  </span>
                  <span>
                    <span className="inline-flex items-center gap-[5px] px-[7px] py-[2px] border border-[#CDE9D9] rounded-[4px] bg-[#F1FAF5] text-[9.5px] text-ok-text">
                      <span className="w-[5px] h-[5px] rounded-full bg-[#2E9B63]"></span>Connected
                    </span>
                  </span>
                  <span>12,847</span>
                  <span className="text-[#DC2626]">126</span>
                  <span className="text-[#E1712A]">384</span>
                  <span className="text-[#9A9AA0]">8m ago</span>
                </span>
                <span className="grid grid-cols-[1.5fr_1fr_.8fr_.8fr_.8fr_1fr] gap-[8px] items-center px-0 py-[9px] border-b border-b-[#F3F1EE] text-[10.5px] text-nav">
                  <span className="flex items-center gap-[7px]">
                    <MetaLogo size={15} className="flex-none" />
                    Meta
                  </span>
                  <span>
                    <span className="inline-flex items-center gap-[5px] px-[7px] py-[2px] border border-[#CDE9D9] rounded-[4px] bg-[#F1FAF5] text-[9.5px] text-ok-text">
                      <span className="w-[5px] h-[5px] rounded-full bg-[#2E9B63]"></span>Connected
                    </span>
                  </span>
                  <span>12,615</span>
                  <span className="text-[#DC2626]">42</span>
                  <span className="text-[#E1712A]">219</span>
                  <span className="text-[#9A9AA0]">12m ago</span>
                </span>
                <span className="grid grid-cols-[1.5fr_1fr_.8fr_.8fr_.8fr_1fr] gap-[8px] items-center px-0 py-[9px] text-[10.5px] text-nav">
                  <span className="flex items-center gap-[7px]">
                    <span className="inline-flex flex-col items-center justify-center w-[14px] flex-none">
                      <span className="text-[12px] font-bold text-[#18181B] leading-[.8]">a</span>
                      <AmazonSmile width={13} height={4} />
                    </span>
                    Amazon
                  </span>
                  <span>
                    <span className="inline-flex items-center gap-[5px] px-[7px] py-[2px] border border-[#F6DEC2] rounded-[4px] bg-[#FEF7EF] text-[9.5px] text-[#A85A0E]">
                      <span className="w-[5px] h-[5px] rounded-full bg-[#E1712A]"></span>Attention
                    </span>
                  </span>
                  <span>8,940</span>
                  <span className="text-[#DC2626]">103</span>
                  <span className="text-[#E1712A]">267</span>
                  <span className="text-[#9A9AA0]">18m ago</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="leading-normal font-home relative z-0 pt-[60px] pb-[76px] px-0 bg-paper-warm max-md:pt-[48px] max-md:pb-[48px]">
        <div className="relative mx-auto w-full max-w-[1440px]">
          <h2 className="w-[620px] mx-auto my-0 text-center text-[34px] font-bold tracking-[-.025em] max-w-full">
            One catalog. Every destination.
          </h2>
          <div className="w-[620px] flex items-center justify-center gap-0 mt-[28px] mb-0 mx-auto max-md:w-full max-w-full max-md:flex-wrap max-md:gap-[10px]">
            <span className="flex items-center gap-[8px] px-[15px] py-0 text-[14.5px] font-medium text-[#27272A]">
              <GoogleG size={24} className="flex-none" />
              Google
            </span>
            <span className="w-px h-[24px] bg-[#E6E3DE]"></span>
            <span className="flex items-center gap-[8px] px-[15px] py-0 text-[14.5px] font-medium text-[#27272A]">
              <MetaLogo size={24} className="flex-none" />
              Meta
            </span>
            <span className="w-px h-[24px] bg-[#E6E3DE]"></span>
            <span className="flex items-center gap-[8px] px-[15px] py-0 text-[14.5px] font-medium text-[#27272A]">
              <span className="inline-flex flex-col items-center justify-center w-[24px] flex-none">
                <span className="text-[20px] font-bold text-[#18181B] leading-[.8]">a</span>
                <AmazonSmile width={23} height={8} />
              </span>
              Amazon
            </span>
            <span className="w-px h-[24px] bg-[#E6E3DE]"></span>
            <span className="flex items-center gap-[8px] px-[15px] py-0 text-[14.5px] font-medium text-[#27272A]">
              <WalmartSpark size={24} className="flex-none" />
              Walmart
            </span>
            <span className="w-px h-[24px] bg-[#E6E3DE]"></span>
            <span className="flex items-center gap-[8px] px-[15px] py-0 text-[14.5px] font-medium text-[#27272A]">
              <Glyph2 size={23} className="flex-none" />
              TikTok
            </span>
          </div>
          <div className="w-[1180px] mt-[40px] mb-0 mx-auto px-[24px] py-[20px] flex items-center justify-between gap-[20px] bg-white border border-line rounded-12 shadow-[0_14px_36px_rgba(24,24,27,.07)] max-md:w-full max-w-full">
            <span>
              <span className="block text-[16.5px] font-bold tracking-[-.01em]">Catalog overview</span>
              <span className="block text-[12.5px] text-[#8E8E94] mt-[4px]">All products across all channels</span>
            </span>
            <span className="flex items-center gap-[14px] max-md:flex-wrap max-md:justify-center max-md:gap-[10px]">
              <span className="flex items-center gap-[6px] text-[13.5px] font-medium text-nav">
                Filters
                <ChevronDown size={13} strokeWidth={1.8} className="text-[#71717A]" />
              </span>
              <span className="flex items-center gap-[9px] w-[240px] h-[38px] px-[12px] py-0 border border-[#E6E3DE] rounded-[7px] bg-white">
                <SearchGlyph size={14} />
                <span className="text-[13.5px] text-[#A1A1AA]">Search products</span>
              </span>
              <button className="hover:bg-[#a84613] active:bg-[#943c0c] [font-family:inherit] text-[13.5px] font-semibold text-white bg-rust-button border-0 rounded-[7px] px-[18px] py-[11px] cursor-pointer">
                Add product
              </button>
            </span>
          </div>
        </div>
      </section>

      {/* Diagnostics */}
      <section
        className="leading-normal font-home relative z-[1] bg-night pt-[92px] pb-[96px] px-0 min-h-[944px] overflow-hidden scroll-mt-[88px] max-md:pt-[56px] max-md:pb-[56px]"
        id="diagnostics"
      >
        <div className="relative mx-auto w-full max-w-[1440px]">
          <Image
            src="/assets/img-06.png"
            width={1100}
            height={619}
            alt=""
            className="absolute -left-[320px] -bottom-[180px] w-[1100px] opacity-10 [filter:saturate(.45)_brightness(.65)] [mask-image:radial-gradient(58%_58%_at_62%_45%,#000_12%,transparent_76%)] pointer-events-none max-md:hidden max-w-none"
            loading="lazy"
          />
          <div className="absolute right-[60px] -top-[140px] w-[820px] h-[820px] pointer-events-none [background:radial-gradient(closest-side,rgba(210,96,31,.14),rgba(10,10,10,0)_72%)]"></div>
          <div className="relative z-[2] w-[432px] ml-[80px] max-md:w-full max-w-full">
            <p className="m-0 mb-[26px] text-[13px] font-semibold tracking-[.13em] uppercase text-rust-bright">
              Diagnostics &amp; quality control
            </p>
            <h2 className="m-0 text-[52px] leading-[1.08] font-extrabold tracking-[-.035em] text-white max-xl:text-[length:clamp(30px,4.06vw,52px)]">
              Every rejection, translated into one clear fix.
            </h2>
            <p className="mt-[26px] mb-[34px] mx-0 text-[16.5px] leading-[1.6] text-[#A29C95]">
              Google calls it one thing. Amazon calls it another. Scout groups matching channel errors into one
              understandable issue—and shows you the exact field that needs attention.
            </p>
            <div className="flex items-center gap-[18px] px-0 py-[18px] border-b border-b-[#211F1D]">
              <span className="flex items-center justify-center w-[46px] h-[46px] border border-[#4A2B18] rounded-[9px] bg-[#150F0B] flex-none">
                <svg
                  width="21"
                  height="21"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#E2703A"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="flex-none"
                >
                  <rect x="9" y="2.5" width="6" height="5.5" rx="1"></rect>
                  <rect x="2.5" y="16" width="5" height="5.5" rx="1"></rect>
                  <rect x="9.5" y="16" width="5" height="5.5" rx="1"></rect>
                  <rect x="16.5" y="16" width="5" height="5.5" rx="1"></rect>
                  <path d="M12 8v3.5M5 16v-2.5h14V16M12 11.5V16"></path>
                </svg>
              </span>
              <span className="text-[17px] font-medium text-[#F2EFEC] leading-[1.35]">
                Normalize errors across every channel
              </span>
            </div>
            <div className="flex items-center gap-[18px] px-0 py-[18px] border-b border-b-[#211F1D]">
              <span className="flex items-center justify-center w-[46px] h-[46px] border border-[#4A2B18] rounded-[9px] bg-[#150F0B] flex-none">
                <TargetGlyph size={21} className="flex-none" />
              </span>
              <span className="text-[17px] font-medium text-[#F2EFEC] leading-[1.35]">
                See the exact field causing the rejection
              </span>
            </div>
            <div className="flex items-center gap-[18px] px-0 py-[18px] border-b border-b-[#211F1D]">
              <span className="flex items-center justify-center w-[46px] h-[46px] border border-[#4A2B18] rounded-[9px] bg-[#150F0B] flex-none">
                <svg
                  width="21"
                  height="21"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#E2703A"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="flex-none"
                >
                  <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
                </svg>
              </span>
              <span className="text-[17px] font-medium text-[#F2EFEC] leading-[1.35]">
                Create a correction rule without touching Shopify
              </span>
            </div>
            <Link
              className="hover:text-[#f08a4b] inline-flex items-center gap-[10px] mt-[34px] text-[17px] font-semibold text-rust-bright"
              href="/platform/diagnostics"
            >
              Explore diagnostics
              <ArrowRight size={18} strokeWidth={1.6} className="flex-none" />
            </Link>
          </div>
          <div className="absolute left-[560px] top-[80px] w-[930px] h-[836px] z-[2] [transform:scale(.878)] origin-[0_0]">
            <div className="w-full h-full flex flex-col bg-[#131211] border border-[#2B2724] rounded-[20px] p-[13px] shadow-[0_60px_120px_rgba(0,0,0,.65),0_0_0_1px_rgba(255,255,255,.03)]">
              <div className="flex-1 flex min-h-0 bg-[#FAF8F5] rounded-12 overflow-hidden">
                <div className="w-[182px] flex-none bg-[#151412] px-[12px] py-[18px] flex flex-col gap-[18px]">
                  <span className="flex items-center gap-[9px] px-[6px] py-0">
                    <svg width="26" height="26" viewBox="0 0 34 34" fill="none" aria-hidden="true">
                      <circle cx="17" cy="17" r="15.5" stroke="#fff" strokeWidth="2"></circle>
                      <path
                        d="M11 21c-.6-3.2.2-6.4 2.6-8.2 2.2-1.7 5.3-1.6 7.4.2 1.6 1.4 2.3 3.4 2.1 5.4"
                        stroke="#fff"
                        strokeWidth="1.7"
                        strokeLinecap="round"
                      ></path>
                      <circle cx="14.6" cy="16.4" r="1.6" fill="#fff"></circle>
                      <circle cx="20.4" cy="16.4" r="1.6" fill="#fff"></circle>
                    </svg>
                    <span className="text-[15px] font-bold text-white tracking-[-.01em]">Meerkat Scout</span>
                  </span>
                  <span className="flex flex-col gap-[2px]">
                    <span className="flex items-center gap-[11px] h-[36px] px-[12px] py-0 rounded-[7px] text-[13.5px] text-[#918B84]">
                      <GridGlyph
                        size={16}
                        stroke="#918B84"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="flex-none"
                      />
                      Dashboard
                    </span>
                    <span className="flex items-center gap-[11px] h-[36px] px-[12px] py-0 rounded-[7px] text-[13.5px] text-[#918B84]">
                      <WindowGlyph
                        size={16}
                        stroke="#918B84"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="flex-none"
                      />
                      Catalog
                    </span>
                    <span className="flex items-center gap-[11px] h-[36px] px-[12px] py-0 rounded-[7px] text-[13.5px] text-[#918B84]">
                      <Rss size={16} strokeWidth={1.6} className="flex-none text-[#918B84]" />
                      Feeds
                    </span>
                    <span className="flex items-center gap-[11px] h-[36px] px-[12px] py-0 rounded-[7px] text-[13.5px] text-[#918B84]">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#918B84"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="flex-none"
                      >
                        <circle cx="12" cy="12" r="9"></circle>
                        <path d="M3 12h18"></path>
                        <path d="M12 3a15 15 0 0 1 0 18a15 15 0 0 1 0-18"></path>
                      </svg>
                      Channels
                    </span>
                    <span className="relative flex items-center gap-[11px] h-[36px] px-[12px] py-0 rounded-[7px] bg-[#221F1D] text-[13.5px] font-semibold text-white">
                      <span className="absolute -left-[8px] top-[8px] w-[3px] h-[20px] rounded-[2px] bg-[#D2601F]"></span>
                      <TriangleAlertGlyph size={16} stroke="#fff" strokeWidth="1.6" className="flex-none" />
                      Diagnostics
                    </span>
                    <span className="flex items-center gap-[11px] h-[36px] px-[12px] py-0 rounded-[7px] text-[13.5px] text-[#918B84]">
                      <SparkleGlyph
                        size={16}
                        stroke="#918B84"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="flex-none"
                      />
                      Recommendations
                    </span>
                    <span className="flex items-center gap-[11px] h-[36px] px-[12px] py-0 rounded-[7px] text-[13.5px] text-[#918B84]">
                      <ChartLineGlyph
                        size={16}
                        stroke="#918B84"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="flex-none"
                      />
                      Analytics
                    </span>
                    <span className="flex items-center gap-[11px] h-[36px] px-[12px] py-0 rounded-[7px] text-[13.5px] text-[#918B84]">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#918B84"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="flex-none"
                      >
                        <circle cx="12" cy="12" r="3"></circle>
                        <path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.9 4.9l2.1 2.1M17 17l2.1 2.1M19.1 4.9 17 7M7 17l-2.1 2.1"></path>
                      </svg>
                      Channel Settings
                    </span>
                  </span>
                </div>
                <div className="flex-1 min-w-0 px-[22px] py-[20px] flex flex-col gap-[16px]">
                  <div className="flex items-start justify-between gap-[16px]">
                    <span>
                      <span className="block text-[26px] font-bold tracking-[-.025em] text-[#1A1917]">Diagnostics</span>
                      <span className="block text-[12.5px] text-[#7A756F] mt-[5px]">
                        <span className="text-[#D2601F] font-semibold">342</span> open errors · 1,108 warnings
                      </span>
                    </span>
                    <span className="flex items-center gap-[8px] flex-none">
                      <span className="flex items-center justify-between gap-[10px] h-[34px] px-[11px] py-0 bg-white border border-[#E4DED6] rounded-[7px] text-[12.5px] text-[#3B3835]">
                        All channels
                        <ChevronDown size={13} strokeWidth={1.6} className="flex-none text-faint" />
                      </span>
                      <span className="flex items-center justify-between gap-[10px] h-[34px] px-[11px] py-0 bg-white border border-[#E4DED6] rounded-[7px] text-[12.5px] text-[#3B3835]">
                        Open
                        <ChevronDown size={13} strokeWidth={1.6} className="flex-none text-faint" />
                      </span>
                      <span className="flex items-center justify-between gap-[10px] h-[34px] px-[11px] py-0 bg-white border border-[#E4DED6] rounded-[7px] text-[12.5px] text-[#3B3835]">
                        Error code
                        <ChevronDown size={13} strokeWidth={1.6} className="flex-none text-faint" />
                      </span>
                      <span className="flex items-center justify-between gap-[10px] h-[34px] px-[11px] py-0 bg-white border border-[#E4DED6] rounded-[7px] text-[12.5px] text-[#3B3835]">
                        Auto-fixable
                        <ChevronDown size={13} strokeWidth={1.6} className="flex-none text-faint" />
                      </span>
                    </span>
                  </div>
                  <div className="flex-1 flex gap-[14px] min-h-0">
                    <div className="w-[196px] flex-none flex flex-col gap-[9px]">
                      <span className="text-[12px] font-semibold text-[#7A756F]">Error groups</span>
                      <div className="p-[12px] border-[1.5px] border-[#D2601F] rounded-[9px] bg-[#FDF3EB] flex flex-col gap-[9px]">
                        <span className="flex items-start gap-[9px]">
                          <span className="flex items-center justify-center w-[19px] h-[19px] rounded-full bg-[#D93B30] text-white text-[12px] font-bold flex-none leading-none">
                            !
                          </span>
                          <span>
                            <span className="block text-[13px] font-semibold text-[#1A1917] leading-[1.25]">
                              Missing GTIN
                            </span>
                            <span className="block text-[11.5px] text-faint mt-[3px]">126 affected products</span>
                          </span>
                        </span>
                        <span className="flex items-center gap-[9px]">
                          <GoogleG size={15} className="flex-none" />
                          <span className="inline-flex flex-col items-center justify-center w-[15px] flex-none">
                            <span className="text-[13px] font-bold text-[#18181B] leading-[.8]">a</span>
                            <AmazonSmile width={14} height={5} />
                          </span>
                          <span className="inline-flex items-baseline text-[14px] font-extrabold tracking-[-.03em] leading-none flex-none">
                            <span className="text-[#E53238]">e</span>
                            <span className="text-[#0064D2]">b</span>
                            <span className="text-[#F5AF02]">a</span>
                            <span className="text-[#86B817]">y</span>
                          </span>
                        </span>
                        <span className="flex items-center gap-[6px] text-[11px] text-[#6B6763]">
                          <span className="w-[6px] h-[6px] rounded-full bg-[#D93B30]"></span>Error
                        </span>
                      </div>
                      <div className="p-[12px] border border-line-strong rounded-[9px] bg-white flex flex-col gap-[9px]">
                        <span className="flex items-start gap-[9px]">
                          <span className="flex items-center justify-center w-[19px] h-[19px] rounded-full bg-[#D93B30] text-white text-[12px] font-bold flex-none leading-none">
                            !
                          </span>
                          <span>
                            <span className="block text-[13px] font-semibold text-[#1A1917] leading-[1.25]">
                              Invalid product category
                            </span>
                            <span className="block text-[11.5px] text-faint mt-[3px]">84 products</span>
                          </span>
                        </span>
                        <span className="flex items-center gap-[9px]">
                          <GoogleG size={15} className="flex-none" />
                          <span className="inline-flex flex-col items-center justify-center w-[15px] flex-none">
                            <span className="text-[13px] font-bold text-[#18181B] leading-[.8]">a</span>
                            <AmazonSmile width={14} height={5} />
                          </span>
                          <span className="inline-flex items-baseline text-[14px] font-extrabold tracking-[-.03em] leading-none flex-none">
                            <span className="text-[#E53238]">e</span>
                            <span className="text-[#0064D2]">b</span>
                            <span className="text-[#F5AF02]">a</span>
                            <span className="text-[#86B817]">y</span>
                          </span>
                        </span>
                        <span className="flex items-center gap-[6px] text-[11px] text-[#6B6763]">
                          <span className="w-[6px] h-[6px] rounded-full bg-[#D93B30]"></span>Error
                        </span>
                      </div>
                      <div className="p-[12px] border border-line-strong rounded-[9px] bg-white flex flex-col gap-[9px]">
                        <span className="flex items-start gap-[9px]">
                          <span className="flex items-center justify-center w-[19px] h-[19px] rounded-full bg-[#D93B30] text-white text-[12px] font-bold flex-none leading-none">
                            !
                          </span>
                          <span>
                            <span className="block text-[13px] font-semibold text-[#1A1917] leading-[1.25]">
                              Title exceeds channel limit
                            </span>
                            <span className="block text-[11.5px] text-faint mt-[3px]">61 products</span>
                          </span>
                        </span>
                        <span className="flex items-center gap-[9px]">
                          <GoogleG size={15} className="flex-none" />
                          <span className="inline-flex flex-col items-center justify-center w-[15px] flex-none">
                            <span className="text-[13px] font-bold text-[#18181B] leading-[.8]">a</span>
                            <AmazonSmile width={14} height={5} />
                          </span>
                          <span className="inline-flex items-baseline text-[14px] font-extrabold tracking-[-.03em] leading-none flex-none">
                            <span className="text-[#E53238]">e</span>
                            <span className="text-[#0064D2]">b</span>
                            <span className="text-[#F5AF02]">a</span>
                            <span className="text-[#86B817]">y</span>
                          </span>
                        </span>
                        <span className="flex items-center gap-[6px] text-[11px] text-[#6B6763]">
                          <span className="w-[6px] h-[6px] rounded-full bg-[#D93B30]"></span>Error
                        </span>
                      </div>
                      <div className="p-[12px] border border-line-strong rounded-[9px] bg-white flex flex-col gap-[9px]">
                        <span className="flex items-start gap-[9px]">
                          <span className="flex items-center justify-center w-[19px] h-[19px] rounded-full bg-[#E8A317] text-white text-[12px] font-bold flex-none leading-none">
                            !
                          </span>
                          <span>
                            <span className="block text-[13px] font-semibold text-[#1A1917] leading-[1.25]">
                              Missing image link
                            </span>
                            <span className="block text-[11.5px] text-faint mt-[3px]">43 products</span>
                          </span>
                        </span>
                        <span className="flex items-center gap-[9px]">
                          <GoogleG size={15} className="flex-none" />
                          <span className="inline-flex flex-col items-center justify-center w-[15px] flex-none">
                            <span className="text-[13px] font-bold text-[#18181B] leading-[.8]">a</span>
                            <AmazonSmile width={14} height={5} />
                          </span>
                          <span className="inline-flex items-baseline text-[14px] font-extrabold tracking-[-.03em] leading-none flex-none">
                            <span className="text-[#E53238]">e</span>
                            <span className="text-[#0064D2]">b</span>
                            <span className="text-[#F5AF02]">a</span>
                            <span className="text-[#86B817]">y</span>
                          </span>
                        </span>
                        <span className="flex items-center gap-[6px] text-[11px] text-[#6B6763]">
                          <span className="w-[6px] h-[6px] rounded-full bg-[#E8A317]"></span>Warning
                        </span>
                      </div>
                    </div>
                    <div className="flex-1 min-w-0 flex flex-col gap-[12px] p-[16px] bg-white border border-[#EAE4DC] rounded-10">
                      <span>
                        <span className="flex items-center gap-[10px]">
                          <span className="flex items-center justify-center w-[26px] h-[26px] rounded-full bg-[#D93B30] text-white text-[16px] font-bold flex-none leading-none">
                            !
                          </span>
                          <span className="text-[19px] font-bold tracking-[-.02em] text-[#1A1917]">Missing GTIN</span>
                        </span>
                        <span className="block text-[12.5px] text-[#7A756F] mt-[8px]">
                          A product identifier is required by Google, Amazon, and eBay.
                        </span>
                      </span>
                      <span className="flex items-center justify-between gap-[12px] px-[14px] py-[11px] border border-line-strong rounded-8 bg-[#FCFBF9]">
                        <span>
                          <span className="block text-[11px] text-faint">Field to fix</span>
                          <span className="block text-[17px] font-semibold text-[#1A1917] mt-[3px]">gtin</span>
                        </span>
                        <svg
                          width="17"
                          height="17"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="#8A857F"
                          strokeWidth="1.6"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="flex-none"
                        >
                          <rect x="9" y="9" width="11" height="11" rx="2"></rect>
                          <path d="M5 15V5a2 2 0 0 1 2-2h10"></path>
                        </svg>
                      </span>
                      <div className="border border-line-strong rounded-8 overflow-hidden">
                        <span className="block px-[12px] py-[10px] text-[12.5px] font-semibold text-[#26241F]">
                          Affected products (126)
                        </span>
                        <span className="grid grid-cols-[1fr_96px_72px] gap-[10px] px-[12px] py-[6px] border-t border-t-tint bg-[#FBF9F6] text-[10.5px] text-faint">
                          <span>Product</span>
                          <span>SKU</span>
                          <span>Channels</span>
                        </span>
                        <div className="grid grid-cols-[1fr_96px_72px] gap-[10px] items-center px-[12px] py-[8px] border-t border-t-tint">
                          <span className="flex items-center gap-[9px] min-w-0">
                            <span className="w-[20px] h-[20px] border border-line-strong rounded-[4px] bg-[#F4F1EC] flex-none"></span>
                            <span className="text-[11.5px] text-[#2B2926] overflow-hidden text-ellipsis whitespace-nowrap">
                              Stainless Steel Water Bottle 24oz
                            </span>
                          </span>
                          <span className="text-[11px] text-[#6B6763]">WB-24SS-BLK</span>
                          <span className="flex items-center gap-[7px]">
                            <GoogleG size={13} className="flex-none" />
                            <span className="inline-flex flex-col items-center justify-center w-[13px] flex-none">
                              <span className="text-[11px] font-bold text-[#18181B] leading-[.8]">a</span>
                              <AmazonSmile width={12} height={4} />
                            </span>
                            <span className="inline-flex items-baseline text-[12px] font-extrabold tracking-[-.03em] leading-none flex-none">
                              <span className="text-[#E53238]">e</span>
                              <span className="text-[#0064D2]">b</span>
                              <span className="text-[#F5AF02]">a</span>
                              <span className="text-[#86B817]">y</span>
                            </span>
                          </span>
                        </div>
                        <div className="grid grid-cols-[1fr_96px_72px] gap-[10px] items-center px-[12px] py-[8px] border-t border-t-tint">
                          <span className="flex items-center gap-[9px] min-w-0">
                            <span className="w-[20px] h-[20px] border border-line-strong rounded-[4px] bg-[#F4F1EC] flex-none"></span>
                            <span className="text-[11.5px] text-[#2B2926] overflow-hidden text-ellipsis whitespace-nowrap">
                              Organic Cotton Crewneck Tee – Black
                            </span>
                          </span>
                          <span className="text-[11px] text-[#6B6763]">Tee-BLK-M</span>
                          <span className="flex items-center gap-[7px]">
                            <GoogleG size={13} className="flex-none" />
                            <span className="inline-flex flex-col items-center justify-center w-[13px] flex-none">
                              <span className="text-[11px] font-bold text-[#18181B] leading-[.8]">a</span>
                              <AmazonSmile width={12} height={4} />
                            </span>
                            <span className="inline-flex items-baseline text-[12px] font-extrabold tracking-[-.03em] leading-none flex-none">
                              <span className="text-[#E53238]">e</span>
                              <span className="text-[#0064D2]">b</span>
                              <span className="text-[#F5AF02]">a</span>
                              <span className="text-[#86B817]">y</span>
                            </span>
                          </span>
                        </div>
                        <div className="grid grid-cols-[1fr_96px_72px] gap-[10px] items-center px-[12px] py-[8px] border-t border-t-tint">
                          <span className="flex items-center gap-[9px] min-w-0">
                            <span className="w-[20px] h-[20px] border border-line-strong rounded-[4px] bg-[#F4F1EC] flex-none"></span>
                            <span className="text-[11.5px] text-[#2B2926] overflow-hidden text-ellipsis whitespace-nowrap">
                              Leather Travel Wallet – Brown
                            </span>
                          </span>
                          <span className="text-[11px] text-[#6B6763]">WLT-BRN-LTH</span>
                          <span className="flex items-center gap-[7px]">
                            <GoogleG size={13} className="flex-none" />
                            <span className="inline-flex flex-col items-center justify-center w-[13px] flex-none">
                              <span className="text-[11px] font-bold text-[#18181B] leading-[.8]">a</span>
                              <AmazonSmile width={12} height={4} />
                            </span>
                            <span className="inline-flex items-baseline text-[12px] font-extrabold tracking-[-.03em] leading-none flex-none">
                              <span className="text-[#E53238]">e</span>
                              <span className="text-[#0064D2]">b</span>
                              <span className="text-[#F5AF02]">a</span>
                              <span className="text-[#86B817]">y</span>
                            </span>
                          </span>
                        </div>
                        <div className="grid grid-cols-[1fr_96px_72px] gap-[10px] items-center px-[12px] py-[8px] border-t border-t-tint">
                          <span className="flex items-center gap-[9px] min-w-0">
                            <span className="w-[20px] h-[20px] border border-line-strong rounded-[4px] bg-[#F4F1EC] flex-none"></span>
                            <span className="text-[11.5px] text-[#2B2926] overflow-hidden text-ellipsis whitespace-nowrap">
                              Ceramic Coffee Mug 12oz
                            </span>
                          </span>
                          <span className="text-[11px] text-[#6B6763]">MUG-12-WHT</span>
                          <span className="flex items-center gap-[7px]">
                            <GoogleG size={13} className="flex-none" />
                            <span className="inline-flex flex-col items-center justify-center w-[13px] flex-none">
                              <span className="text-[11px] font-bold text-[#18181B] leading-[.8]">a</span>
                              <AmazonSmile width={12} height={4} />
                            </span>
                            <span className="inline-flex items-baseline text-[12px] font-extrabold tracking-[-.03em] leading-none flex-none">
                              <span className="text-[#E53238]">e</span>
                              <span className="text-[#0064D2]">b</span>
                              <span className="text-[#F5AF02]">a</span>
                              <span className="text-[#86B817]">y</span>
                            </span>
                          </span>
                        </div>
                        <div className="grid grid-cols-[1fr_96px_72px] gap-[10px] items-center px-[12px] py-[8px] border-t border-t-tint">
                          <span className="flex items-center gap-[9px] min-w-0">
                            <span className="w-[20px] h-[20px] border border-line-strong rounded-[4px] bg-[#F4F1EC] flex-none"></span>
                            <span className="text-[11.5px] text-[#2B2926] overflow-hidden text-ellipsis whitespace-nowrap">
                              Wireless Noise Cancelling Headphones
                            </span>
                          </span>
                          <span className="text-[11px] text-[#6B6763]">HP-NC-700</span>
                          <span className="flex items-center gap-[7px]">
                            <GoogleG size={13} className="flex-none" />
                            <span className="inline-flex flex-col items-center justify-center w-[13px] flex-none">
                              <span className="text-[11px] font-bold text-[#18181B] leading-[.8]">a</span>
                              <AmazonSmile width={12} height={4} />
                            </span>
                            <span className="inline-flex items-baseline text-[12px] font-extrabold tracking-[-.03em] leading-none flex-none">
                              <span className="text-[#E53238]">e</span>
                              <span className="text-[#0064D2]">b</span>
                              <span className="text-[#F5AF02]">a</span>
                              <span className="text-[#86B817]">y</span>
                            </span>
                          </span>
                        </div>
                      </div>
                      <span className="flex items-center gap-[10px] max-md:flex-wrap max-xs:flex-col max-xs:items-stretch">
                        <button className="hover:bg-[#a84613] active:bg-[#943c0c] [font-family:inherit] text-[13px] font-semibold text-white bg-rust-button border-0 rounded-[7px] px-[20px] py-[11px] cursor-pointer">
                          Create correction rule
                        </button>
                        <button className="hover:bg-[#f6f3ef] active:bg-[#efeae3] [font-family:inherit] text-[13px] font-semibold text-[#26241F] bg-white border border-[#DDD6CD] rounded-[7px] px-[18px] py-[11px] cursor-pointer">
                          View affected products
                        </button>
                      </span>
                      <span className="flex items-start gap-[11px] p-[12px] bg-[#FAF7F2] border border-[#EFE7DC] rounded-8">
                        <svg
                          width="26"
                          height="26"
                          viewBox="0 0 34 34"
                          fill="none"
                          aria-hidden="true"
                          className="flex-none"
                        >
                          <circle cx="17" cy="17" r="15.5" stroke="#18181B" strokeWidth="2"></circle>
                          <path
                            d="M11 21c-.6-3.2.2-6.4 2.6-8.2 2.2-1.7 5.3-1.6 7.4.2 1.6 1.4 2.3 3.4 2.1 5.4"
                            stroke="#18181B"
                            strokeWidth="1.7"
                            strokeLinecap="round"
                          ></path>
                          <circle cx="14.6" cy="16.4" r="1.5" fill="#18181B"></circle>
                          <circle cx="20.4" cy="16.4" r="1.5" fill="#18181B"></circle>
                          <path
                            d="M14 22.4c1.9 1.4 4.1 1.4 6 0"
                            stroke="#18181B"
                            strokeWidth="1.7"
                            strokeLinecap="round"
                          ></path>
                        </svg>
                        <span>
                          <span className="block text-[12.5px] font-semibold text-[#26241F]">
                            Scout identified the shared cause
                          </span>
                          <span className="block text-[11.5px] text-[#7A756F] mt-[3px]">
                            126 products are missing the gtin field across Google, Amazon, and eBay.
                          </span>
                        </span>
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between gap-[8px] pt-[14px] border-t border-t-[#EAE4DC]">
                    <span className="flex items-center gap-[9px]">
                      <span className="flex items-center justify-center w-[28px] h-[28px] border border-[#E4DED6] rounded-[7px] bg-white flex-none">
                        <TriangleAlertGlyph size={15} stroke="#5C5853" strokeWidth="1.6" className="flex-none" />
                      </span>
                      <span>
                        <span className="block text-[11.5px] font-semibold text-[#26241F]">Detected</span>
                        <span className="block text-[10px] text-faint mt-[2px]">Errors collected</span>
                      </span>
                    </span>
                    <span className="flex items-center text-[#CFC8BF]">
                      <ArrowRight size={15} strokeWidth={1.6} className="flex-none text-[#CFC8BF]" />
                    </span>
                    <span className="flex items-center gap-[9px]">
                      <span className="flex items-center justify-center w-[28px] h-[28px] border border-[#E4DED6] rounded-[7px] bg-white flex-none">
                        <svg
                          width="15"
                          height="15"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="#5C5853"
                          strokeWidth="1.6"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="flex-none"
                        >
                          <rect x="3" y="3" width="7" height="7" rx="1"></rect>
                          <rect x="14" y="3" width="7" height="7" rx="1"></rect>
                          <rect x="3" y="14" width="7" height="7" rx="1"></rect>
                          <rect x="14" y="14" width="7" height="7" rx="1"></rect>
                        </svg>
                      </span>
                      <span>
                        <span className="block text-[11.5px] font-semibold text-[#26241F]">Grouped</span>
                        <span className="block text-[10px] text-faint mt-[2px]">By shared cause</span>
                      </span>
                    </span>
                    <span className="flex items-center text-[#CFC8BF]">
                      <ArrowRight size={15} strokeWidth={1.6} className="flex-none text-[#CFC8BF]" />
                    </span>
                    <span className="flex items-center gap-[9px]">
                      <span className="flex items-center justify-center w-[28px] h-[28px] border border-[#E4DED6] rounded-[7px] bg-white flex-none">
                        <TargetGlyph size={15} stroke="#5C5853" className="flex-none" />
                      </span>
                      <span>
                        <span className="block text-[11.5px] font-semibold text-[#26241F]">Fix field</span>
                        <span className="block text-[10px] text-faint mt-[2px]">Root cause identified</span>
                      </span>
                    </span>
                    <span className="flex items-center text-[#CFC8BF]">
                      <ArrowRight size={15} strokeWidth={1.6} className="flex-none text-[#CFC8BF]" />
                    </span>
                    <span className="flex items-center gap-[9px]">
                      <span className="flex items-center justify-center w-[28px] h-[28px] border border-[#E4DED6] rounded-[7px] bg-white flex-none">
                        <CircleCheckGlyph3 size={15} className="flex-none" />
                      </span>
                      <span>
                        <span className="block text-[11.5px] font-semibold text-[#26241F]">Validate</span>
                        <span className="block text-[10px] text-faint mt-[2px]">Rule tested</span>
                      </span>
                    </span>
                    <span className="flex items-center text-[#CFC8BF]">
                      <ArrowRight size={15} strokeWidth={1.6} className="flex-none text-[#CFC8BF]" />
                    </span>
                    <span className="flex items-center gap-[9px]">
                      <span className="flex items-center justify-center w-[28px] h-[28px] border border-[#E4DED6] rounded-[7px] bg-white flex-none">
                        <svg
                          width="15"
                          height="15"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="#5C5853"
                          strokeWidth="1.6"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="flex-none"
                        >
                          <path d="M22 2 11 13"></path>
                          <path d="M22 2 15 22l-4-9-9-4 20-7z"></path>
                        </svg>
                      </span>
                      <span>
                        <span className="block text-[11.5px] font-semibold text-[#26241F]">Republish</span>
                        <span className="block text-[10px] text-faint mt-[2px]">Updates sent</span>
                      </span>
                    </span>
                  </div>
                </div>
              </div>
              <div className="h-[44px] flex-none flex items-center justify-center gap-[9px] text-[13px] text-[#B8B2AB]">
                <ShieldGlyph2 size={15} className="flex-none" />
                Scout never edits your Shopify catalog.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Price intelligence */}
      <section
        className="leading-normal font-home relative z-[1] bg-paper pt-[92px] pb-[96px] px-0 min-h-[1084px] overflow-hidden scroll-mt-[88px] max-md:pt-[56px] max-md:pb-[56px]"
        id="price-intelligence"
      >
        <div className="relative mx-auto w-full max-w-[1440px]">
          <Image
            src="/assets/img-06.png"
            width={900}
            height={507}
            alt=""
            className="absolute -right-[180px] -top-[60px] w-[900px] opacity-6 [filter:grayscale(1)_brightness(1.15)_contrast(.75)] [mask-image:radial-gradient(60%_60%_at_60%_50%,#000_10%,transparent_78%)] pointer-events-none max-md:hidden max-w-none"
            aria-hidden="true"
            loading="lazy"
          />
          <svg
            width="1440"
            height="1000"
            viewBox="0 0 1440 1000"
            fill="none"
            aria-hidden="true"
            className="absolute left-0 top-0 opacity-50 pointer-events-none"
          >
            <g stroke="#E4DED4" strokeWidth="1" fill="none">
              <path d="M-60 720C180 640 300 760 520 700 740 640 900 780 1180 690 1320 645 1420 660 1500 640"></path>
              <path d="M-60 780C180 700 300 820 520 760 740 700 900 840 1180 750 1320 705 1420 720 1500 700"></path>
              <path d="M-60 200C120 150 260 250 430 190 600 130 720 230 900 180 1080 130 1300 200 1500 150"></path>
              <path d="M-60 140C120 90 260 190 430 130 600 70 720 170 900 120 1080 70 1300 140 1500 90"></path>
            </g>
          </svg>
          <div className="absolute left-[928px] top-[196px] w-[452px] z-[2]">
            <p className="m-0 mb-[22px] text-[13px] font-semibold tracking-[.14em] uppercase text-rust">
              Price intelligence
            </p>
            <h2 className="m-0 text-[52px] leading-[1.06] font-extrabold tracking-[-.035em] text-ink max-xl:text-[length:clamp(30px,4.06vw,52px)]">
              Know when your price has drifted from the market.
            </h2>
            <p className="mt-[26px] mb-[30px] mx-0 text-[17px] leading-[1.6] text-[#5B554E]">
              Scout monitors live market signals, compares each product with the market median, and explains unusual
              pricing—so you can make the decision with context.
            </p>
            <div className="flex flex-col gap-[18px]">
              <div className="flex items-center gap-[14px]">
                <span>
                  <span className="flex items-center justify-center w-[23px] h-[23px] rounded-full bg-check flex-none">
                    <Check size={14} strokeWidth={2.6} className="flex-none text-white" />
                  </span>
                </span>
                <span className="text-[16px] text-night-line leading-[1.4]">
                  Compare your price with the market median
                </span>
              </div>
              <div className="flex items-center gap-[14px]">
                <span>
                  <span className="flex items-center justify-center w-[23px] h-[23px] rounded-full bg-check flex-none">
                    <Check size={14} strokeWidth={2.6} className="flex-none text-white" />
                  </span>
                </span>
                <span className="text-[16px] text-night-line leading-[1.4]">
                  Understand every recommendation and its evidence
                </span>
              </div>
              <div className="flex items-center gap-[14px]">
                <span>
                  <span className="flex items-center justify-center w-[23px] h-[23px] rounded-full bg-check flex-none">
                    <Check size={14} strokeWidth={2.6} className="flex-none text-white" />
                  </span>
                </span>
                <span className="text-[16px] text-night-line leading-[1.4]">Measure what changed after you acted</span>
              </div>
            </div>
            <Link
              className="hover:text-[#c2571e] inline-flex items-center gap-[10px] mt-[32px] text-[17px] font-semibold text-rust"
              href="/platform/price-intelligence"
            >
              Explore price intelligence
              <ArrowRight size={18} strokeWidth={1.6} className="flex-none" />
            </Link>
          </div>
          <div className="absolute left-[58px] top-[84px] w-[822px] z-[2] [transform:perspective(2800px)_rotateY(2.6deg)] origin-[100%_50%]">
            <div className="flex bg-white border border-[#E6E1D9] rounded-14 overflow-hidden shadow-[0_40px_90px_rgba(30,24,16,.13),0_4px_14px_rgba(30,24,16,.05)]">
              <div className="w-[80px] flex-none bg-[#111010] flex flex-col items-stretch pt-[18px] pb-[14px] px-0">
                <span className="flex justify-center pb-[16px]">
                  <svg width="32" height="32" viewBox="0 0 34 34" fill="none" aria-hidden="true" className="flex-none">
                    <circle cx="17" cy="17" r="15.5" stroke="#fff" strokeWidth="2"></circle>
                    <path
                      d="M11 21c-.6-3.2.2-6.4 2.6-8.2 2.2-1.7 5.3-1.6 7.4.2 1.6 1.4 2.3 3.4 2.1 5.4"
                      stroke="#fff"
                      strokeWidth="1.7"
                      strokeLinecap="round"
                    ></path>
                    <circle cx="14.6" cy="16.4" r="1.6" fill="#fff"></circle>
                    <circle cx="20.4" cy="16.4" r="1.6" fill="#fff"></circle>
                    <path d="M14 22.4c1.9 1.4 4.1 1.4 6 0" stroke="#fff" strokeWidth="1.7" strokeLinecap="round"></path>
                  </svg>
                </span>
                <span className="relative flex flex-col items-center gap-[6px] px-0 py-[11px] bg-transparent">
                  <svg
                    width="19"
                    height="19"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#8C8781"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="flex-none"
                  >
                    <path d="M3 10.5 12 3l9 7.5"></path>
                    <path d="M5 9.5V21h14V9.5"></path>
                  </svg>
                  <span className="text-[10.5px] text-[#8C8781]">Overview</span>
                </span>
                <span className="relative flex flex-col items-center gap-[6px] px-0 py-[11px] bg-transparent">
                  <svg
                    width="19"
                    height="19"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#8C8781"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="flex-none"
                  >
                    <rect x="3" y="4" width="18" height="16" rx="2"></rect>
                    <path d="M3 9h18"></path>
                  </svg>
                  <span className="text-[10.5px] text-[#8C8781]">Catalog</span>
                </span>
                <span className="relative flex flex-col items-center gap-[6px] px-0 py-[11px] bg-[#1D1C1B]">
                  <span className="absolute left-0 top-0 bottom-0 w-[3px] bg-rust"></span>
                  <svg
                    width="19"
                    height="19"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#fff"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="flex-none"
                  >
                    <path d="M20.6 13.4 12 22l-9-9V4h9l8.6 8.6a1.4 1.4 0 0 1 0 2z"></path>
                    <circle cx="8" cy="8" r="1.4"></circle>
                  </svg>
                  <span className="text-[10.5px] text-white">Price</span>
                </span>
                <span className="relative flex flex-col items-center gap-[6px] px-0 py-[11px] bg-transparent">
                  <BellGlyph
                    size={19}
                    stroke="#8C8781"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="flex-none"
                  />
                  <span className="text-[10.5px] text-[#8C8781]">Alerts</span>
                </span>
                <span className="relative flex flex-col items-center gap-[6px] px-0 py-[11px] bg-transparent">
                  <svg
                    width="19"
                    height="19"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#8C8781"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="flex-none"
                  >
                    <path d="M4 3h11l5 5v13H4z"></path>
                    <path d="M8 13v5M12 10v8M16 15v3"></path>
                  </svg>
                  <span className="text-[10.5px] text-[#8C8781]">Reports</span>
                </span>
                <span className="relative flex flex-col items-center gap-[6px] px-0 py-[11px] bg-transparent">
                  <svg
                    width="19"
                    height="19"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#8C8781"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="flex-none"
                  >
                    <circle cx="12" cy="12" r="3"></circle>
                    <path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.9 4.9 7 7M17 17l2.1 2.1M19.1 4.9 17 7M7 17l-2.1 2.1"></path>
                  </svg>
                  <span className="text-[10.5px] text-[#8C8781]">Settings</span>
                </span>
                <span className="mt-auto">
                  <span className="relative flex flex-col items-center gap-[6px] px-0 py-[11px] bg-transparent">
                    <svg
                      width="19"
                      height="19"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#8C8781"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="flex-none"
                    >
                      <circle cx="12" cy="12" r="9"></circle>
                      <path d="M9.5 9.5a2.6 2.6 0 1 1 3.4 2.5c-.6.2-.9.8-.9 1.4v.6"></path>
                      <path d="M12 17.5h.01"></path>
                    </svg>
                    <span className="text-[10.5px] text-[#8C8781]">Help</span>
                  </span>
                </span>
              </div>
              <div className="flex-1 min-w-0 bg-[#FDFCFA] flex flex-col">
                <div className="pt-[20px] pb-[18px] px-[22px] border-b border-b-[#EDE8E1]">
                  <div className="flex items-start gap-[18px]">
                    <span className="w-[112px] h-[104px] flex-none border border-[#EDE8E1] rounded-8 bg-[#F4F1EC] overflow-hidden block">
                      <Image
                        src="/assets/img-08.png"
                        width={121}
                        height={142}
                        alt="Boot photo"
                        className="block w-full h-full object-cover max-w-none"
                      />
                    </span>
                    <span className="flex-1 min-w-0 pt-[6px]">
                      <span className="block text-[27px] font-bold tracking-[-.03em] text-ink">Alpine Trail Boot</span>
                      <span className="flex items-center gap-[12px] mt-[10px] text-[13.5px] text-dim">
                        <span>SKU</span>
                        <span className="text-[#2B2926] font-medium">ATB-8234</span>
                        <span className="flex items-center gap-[6px]">
                          <span className="w-[7px] h-[7px] rounded-full bg-check"></span>Active
                        </span>
                      </span>
                    </span>
                    <span className="flex items-center gap-[9px] h-[38px] px-[13px] py-0 border border-[#E2DCD3] rounded-8 bg-white text-[13.5px] text-[#2B2926] flex-none">
                      <svg
                        width="15"
                        height="15"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#5B554E"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="flex-none"
                      >
                        <path d="M14 4h6v6"></path>
                        <path d="M20 4 11 13"></path>
                        <path d="M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5"></path>
                      </svg>
                      View on product
                      <ChevronDown size={14} strokeWidth={1.6} className="flex-none text-faint" />
                    </span>
                  </div>
                  <div className="flex mt-[22px]">
                    <span className="flex-1 pr-[18px]">
                      <span className="block text-[12.5px] text-dim">Your price</span>
                      <span className="block text-[25px] font-bold tracking-[-.02em] text-rust mt-[6px]">$129</span>
                    </span>
                    <span className="flex-1 px-[18px] py-0 border-l border-l-[#EDE8E1]">
                      <span className="block text-[12.5px] text-dim">Market median</span>
                      <span className="flex items-baseline gap-[6px] mt-[6px]">
                        <span className="text-[25px] font-bold tracking-[-.02em] text-ink">$118</span>
                      </span>
                    </span>
                    <span className="flex-1 px-[18px] py-0 border-l border-l-[#EDE8E1]">
                      <span className="block text-[12.5px] text-dim">Market range</span>
                      <span className="flex items-baseline gap-[6px] mt-[6px]">
                        <span className="text-[25px] font-bold tracking-[-.02em] text-ink">$109–$124</span>
                      </span>
                    </span>
                    <span className="flex-1 px-[18px] py-0 border-l border-l-[#EDE8E1]">
                      <span className="block text-[12.5px] text-dim">Gap</span>
                      <span className="flex items-baseline gap-[6px] mt-[6px]">
                        <span className="text-[25px] font-bold tracking-[-.02em] text-rust">
                          +932 <span className="text-[15px] font-semibold">bps</span>
                        </span>
                        <InfoGlyph size={16} className="flex-none" />
                      </span>
                    </span>
                  </div>
                </div>
                <div className="pt-[20px] pb-[26px] px-[22px] border-b border-b-[#EDE8E1]">
                  <span className="block text-[14.5px] font-semibold text-ink">
                    Market range <span className="font-normal text-dim">(live)</span>
                  </span>
                  <div className="mt-[64px]">
                    {/* COMPOSITION 692 x 140 */}
                    <div className="relative w-[692px] h-[140px] max-w-full">
                      <span className="absolute left-[92.26666666666667px] top-[19px] w-[346px] h-[34px] bg-[#EFEBE3] rounded-[4px]"></span>
                      <svg width="692" height="52" viewBox="0 0 692 52" fill="none" className="absolute left-0 top-0">
                        <path d="M2 26H690" stroke="#DDD8D0" strokeWidth="2" strokeLinecap="round"></path>
                        <circle cx="2" cy="26" r="3" fill="#D5D0C7"></circle>
                        <circle cx="690" cy="26" r="3" fill="#D5D0C7"></circle>
                        <circle cx="92.3" cy="26.0" r="4.6" fill="#4E7A57" opacity="0.85"></circle>
                        <circle cx="119.9" cy="21.0" r="4.6" fill="#4E7A57" opacity="0.85"></circle>
                        <circle cx="138.4" cy="30.0" r="4.6" fill="#8E958C" opacity="0.55"></circle>
                        <circle cx="154.5" cy="26.0" r="4.6" fill="#4E7A57" opacity="0.85"></circle>
                        <circle cx="173.0" cy="21.0" r="4.6" fill="#4E7A57" opacity="0.85"></circle>
                        <circle cx="191.5" cy="30.0" r="4.6" fill="#4E7A57" opacity="0.85"></circle>
                        <circle cx="209.9" cy="26.0" r="4.6" fill="#8E958C" opacity="0.55"></circle>
                        <circle cx="230.7" cy="21.0" r="4.6" fill="#4E7A57" opacity="0.85"></circle>
                        <circle cx="246.8" cy="30.0" r="4.6" fill="#4E7A57" opacity="0.85"></circle>
                        <circle cx="265.3" cy="26.0" r="4.6" fill="#4E7A57" opacity="0.85"></circle>
                        <circle cx="283.7" cy="21.0" r="4.6" fill="#8E958C" opacity="0.55"></circle>
                        <circle cx="304.5" cy="30.0" r="4.6" fill="#4E7A57" opacity="0.85"></circle>
                        <circle cx="320.6" cy="26.0" r="4.6" fill="#4E7A57" opacity="0.85"></circle>
                        <circle cx="336.8" cy="21.0" r="4.6" fill="#4E7A57" opacity="0.85"></circle>
                        <circle cx="355.2" cy="30.0" r="4.6" fill="#8E958C" opacity="0.55"></circle>
                        <circle cx="373.7" cy="26.0" r="4.6" fill="#4E7A57" opacity="0.85"></circle>
                        <circle cx="401.4" cy="21.0" r="4.6" fill="#4E7A57" opacity="0.85"></circle>
                        <circle cx="426.7" cy="30.0" r="4.6" fill="#4E7A57" opacity="0.85"></circle>
                        <circle cx="498.2" cy="26" r="4.4" fill="#A9AEA6"></circle>
                        <path d="M299.9 8V44" stroke="#171514" strokeWidth="1.6"></path>
                        <circle cx="92.3" cy="26" r="5.6" fill="#4E7A57"></circle>
                        <path d="M92.3 12v8" stroke="#4E7A57" strokeWidth="1.6"></path>
                        <circle cx="553.6" cy="26" r="7" fill="#fff" stroke="#A0431A" strokeWidth="2.6"></circle>
                      </svg>
                      <span className="absolute left-0 top-[60px] -translate-x-1/2 text-[11.5px] text-faint whitespace-nowrap">
                        $105
                      </span>
                      <span className="absolute left-[115.33333333333333px] top-[60px] -translate-x-1/2 text-[11.5px] text-faint whitespace-nowrap">
                        $110
                      </span>
                      <span className="absolute left-[230.66666666666666px] top-[60px] -translate-x-1/2 text-[11.5px] text-faint whitespace-nowrap">
                        $115
                      </span>
                      <span className="absolute left-[346px] top-[60px] -translate-x-1/2 text-[11.5px] text-faint whitespace-nowrap">
                        $120
                      </span>
                      <span className="absolute left-[461.3333333333333px] top-[60px] -translate-x-1/2 text-[11.5px] text-faint whitespace-nowrap">
                        $125
                      </span>
                      <span className="absolute left-[576.6666666666667px] top-[60px] -translate-x-1/2 text-[11.5px] text-faint whitespace-nowrap">
                        $130
                      </span>
                      <span className="absolute left-[692px] top-[60px] -translate-x-1/2 text-[11.5px] text-faint whitespace-nowrap">
                        $135
                      </span>
                      <span className="absolute left-[92.26666666666667px] -top-[52px] -translate-x-1/2 text-center whitespace-nowrap">
                        <span className="block text-[11px] font-semibold tracking-[.1em] text-dim">LOWEST</span>
                        <span className="block text-[20px] font-bold text-ink mt-[3px]">$109</span>
                      </span>
                      <span className="absolute left-[299.8666666666667px] -top-[52px] -translate-x-1/2 text-center whitespace-nowrap">
                        <span className="block text-[11px] font-semibold tracking-[.1em] text-dim">MARKET MEDIAN</span>
                        <span className="block text-[20px] font-bold text-ink mt-[3px]">$118</span>
                      </span>
                      <span className="absolute left-[553.6px] -top-[52px] -translate-x-1/2 text-center whitespace-nowrap">
                        <span className="block text-[11px] font-semibold tracking-[.1em] text-rust">YOUR PRICE</span>
                        <span className="block text-[20px] font-bold text-rust mt-[3px]">$129</span>
                      </span>
                      <span className="absolute left-0 right-0 top-[86px] text-center text-[12px] text-dim">
                        Market range: $109–$124
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex border-b border-b-[#EDE8E1]">
                  <div className="flex-1 min-w-0 pt-[18px] pb-[20px] px-[22px] border-r border-r-[#EDE8E1]">
                    <span className="block text-[14.5px] font-semibold text-ink">Price history (30 days)</span>

                    {/* COMPOSITION 268 x 96 */}
                    <div className="relative w-[268px] h-[96px] mt-[14px] mb-[26px] mr-0 ml-[44px]">
                      <span className="absolute right-[276px] top-[3.7px] text-[11px] text-faint">$140</span>
                      <span className="absolute right-[276px] top-[25.0px] text-[11px] text-faint">$130</span>
                      <span className="absolute right-[276px] top-[46.3px] text-[11px] text-faint">$120</span>
                      <span className="absolute right-[276px] top-[67.7px] text-[11px] text-faint">$110</span>
                      <span className="absolute right-[276px] top-[89.0px] text-[11px] text-faint">$100</span>
                      <svg
                        width="268"
                        height="96"
                        viewBox="0 0 268 96"
                        fill="none"
                        className="absolute left-0 top-0 overflow-visible"
                      >
                        <path d="M0 0V96H268" stroke="#E5E0D8" strokeWidth="1"></path>
                        <polyline
                          points="0.0,49.1 9.2,49.1 18.5,50.1 27.7,49.1 37.0,49.1 46.2,49.5 55.4,49.1 64.7,48.0 73.9,49.1 83.2,49.9 92.4,49.1 101.7,49.1 110.9,48.2 120.1,49.1 129.4,49.5 138.6,49.1 147.9,49.1 157.1,48.6 166.3,49.1 175.6,49.1 184.8,43.7 194.1,38.4 203.3,37.3 212.6,36.3 221.8,35.8 231.0,35.0 240.3,34.1 249.5,34.1 258.8,33.7 268.0,33.3"
                          fill="none"
                          stroke="#A0431A"
                          strokeWidth="1.8"
                          strokeLinejoin="round"
                          strokeLinecap="round"
                        ></polyline>
                        <circle cx="268" cy="33.3" r="4" fill="#A0431A"></circle>
                      </svg>
                      <span className="absolute left-0 top-[104px] -translate-x-1/2 text-[11px] text-faint whitespace-nowrap">
                        Apr 18
                      </span>
                      <span className="absolute left-[67px] top-[104px] -translate-x-1/2 text-[11px] text-faint whitespace-nowrap">
                        Apr 25
                      </span>
                      <span className="absolute left-[134px] top-[104px] -translate-x-1/2 text-[11px] text-faint whitespace-nowrap">
                        May 2
                      </span>
                      <span className="absolute left-[201px] top-[104px] -translate-x-1/2 text-[11px] text-faint whitespace-nowrap">
                        May 9
                      </span>
                      <span className="absolute left-[268px] top-[104px] -translate-x-1/2 text-[11px] text-faint whitespace-nowrap">
                        May 16
                      </span>
                    </div>
                  </div>
                  <div className="w-[352px] flex-none pt-[18px] pb-[20px] px-[22px] max-w-full">
                    <span className="block text-[14.5px] font-semibold text-ink">Competitor observations</span>
                    <span className="grid grid-cols-[1fr_90px_90px] gap-[10px] mt-[14px] pb-[9px] text-[12px] text-dim">
                      <span>Merchant (anonymous)</span>
                      <span className="text-right">Price</span>
                      <span className="text-right">Observed</span>
                    </span>
                    <span className="grid grid-cols-[1fr_90px_90px] gap-[10px] items-center px-0 py-[11px] border-t border-t-[#EFEAE2] text-[13.5px] text-[#2B2926]">
                      <span className="flex items-center gap-[9px]">
                        <span className="w-[8px] h-[8px] rounded-full bg-check"></span>Merchant A
                      </span>
                      <span className="text-right">$109.00</span>
                      <span className="text-right text-dim">18 min ago</span>
                    </span>
                    <span className="grid grid-cols-[1fr_90px_90px] gap-[10px] items-center px-0 py-[11px] border-t border-t-[#EFEAE2] text-[13.5px] text-[#2B2926]">
                      <span className="flex items-center gap-[9px]">
                        <span className="w-[8px] h-[8px] rounded-full bg-check"></span>Merchant B
                      </span>
                      <span className="text-right">$115.49</span>
                      <span className="text-right text-dim">22 min ago</span>
                    </span>
                    <span className="grid grid-cols-[1fr_90px_90px] gap-[10px] items-center px-0 py-[11px] border-t border-t-[#EFEAE2] text-[13.5px] text-[#2B2926]">
                      <span className="flex items-center gap-[9px]">
                        <span className="w-[8px] h-[8px] rounded-full bg-check"></span>Merchant C
                      </span>
                      <span className="text-right">$123.99</span>
                      <span className="text-right text-dim">31 min ago</span>
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-[20px] px-[22px] py-[20px]">
                  <span className="w-[92px] h-[92px] flex-none rounded-full overflow-hidden bg-[#F1EDE7] block">
                    <Image
                      src="/assets/img-09.png"
                      width={112}
                      height={137}
                      alt="Scout portrait"
                      className="block w-full h-full object-cover rounded-full max-w-none"
                    />
                  </span>
                  <span className="flex-1 min-w-0">
                    <span className="block text-[17px] leading-[1.45] text-ink font-medium">
                      Similar listings are clustered below your current price. Review pricing before your next feed
                      publication.
                    </span>
                    <span className="flex items-center gap-[9px] mt-[12px] text-[13px] text-dim">
                      <ShieldGlyph2 size={15} className="flex-none" />
                      High confidence<span className="text-[#C9C3BA]">·</span>Checked 18 min ago
                    </span>
                  </span>
                  <span className="flex flex-col gap-[10px] flex-none w-[190px]">
                    <button className="hover:bg-[#8a3814] active:bg-[#74300f] [font-family:inherit] text-[14px] font-semibold text-white bg-rust border-0 rounded-8 px-[18px] py-[13px] cursor-pointer">
                      Review recommendation
                    </button>
                    <button className="hover:bg-[#f4f1ec] [font-family:inherit] text-[14px] font-semibold text-[#2B2926] bg-white border border-[#DDD6CD] rounded-8 px-[18px] py-[13px] cursor-pointer">
                      Dismiss
                    </button>
                  </span>
                </div>
                <div className="flex items-center gap-[11px] px-[22px] py-[16px] bg-paper border-t border-t-[#EDE8E1] text-[14px] text-[#3B3833]">
                  <svg
                    width="17"
                    height="17"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#5B554E"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="flex-none"
                  >
                    <rect x="4" y="10" width="16" height="11" rx="2"></rect>
                    <path d="M8 10V7a4 4 0 0 1 8 0v3"></path>
                  </svg>
                  <span>
                    <strong className="font-bold">Scout recommends. You decide.</strong> Your storefront price is never
                    changed automatically.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Conversion intelligence */}
      <section
        className="leading-normal font-home relative z-[1] bg-[#161616] pt-[92px] pb-[96px] px-0 overflow-hidden scroll-mt-[88px] max-md:pt-[56px] max-md:pb-[56px]"
        id="conversion-intelligence"
      >
        <div className="relative mx-auto w-full max-w-[1440px]">
          <div
            className="absolute right-0 top-[60px] w-[1000px] h-[820px] pointer-events-none [background:radial-gradient(closest-side,rgba(194,87,30,.20),rgba(22,22,22,0)_72%)]"
            aria-hidden="true"
          ></div>
          <Image
            src="/assets/img-06.png"
            width={820}
            height={462}
            alt=""
            className="absolute -left-[300px] -top-[40px] w-[820px] opacity-11 [filter:grayscale(1)_brightness(.45)] [mask-image:radial-gradient(56%_56%_at_60%_45%,#000_10%,transparent_76%)] pointer-events-none max-md:hidden max-w-none"
            aria-hidden="true"
            loading="lazy"
          />
          <svg
            width="1440"
            height="900"
            viewBox="0 0 1440 900"
            fill="none"
            aria-hidden="true"
            className="absolute left-0 top-0 opacity-50 pointer-events-none"
          >
            <g stroke="#242220" strokeWidth="1">
              <path d="M-40 640C160 570 300 690 520 630 740 570 900 700 1180 620 1320 580 1420 600 1500 580"></path>
              <path d="M-40 700C160 630 300 750 520 690 740 630 900 760 1180 680 1320 640 1420 660 1500 640"></path>
            </g>
          </svg>
          <div className="relative z-[2] flex items-start gap-[56px] px-[max(20px,calc(var(--gutter)-10px))] py-0">
            <div className="w-[430px] flex-none pt-[70px] max-md:w-full max-w-full">
              <p className="m-0 mb-[22px] text-[13px] font-semibold tracking-[.14em] uppercase text-rust-button">
                Conversion intelligence
              </p>
              <h2 className="m-0 text-[52px] leading-[1.07] font-extrabold tracking-[-.035em] text-white max-xl:text-[length:clamp(30px,4.06vw,52px)]">
                See which feed problems deserve attention first.
              </h2>
              <p className="mt-[26px] mb-[30px] mx-0 text-[17px] leading-[1.6] text-night-muted-2">
                Scout connects feed quality with Shopify orders and GA4 activity—so you can prioritize products by
                commercial impact without relying on numbers it can&#39;t explain.
              </p>
              <div className="flex flex-col gap-[17px]">
                <span className="flex items-center gap-[14px]">
                  <span className="flex items-center justify-center w-[22px] h-[22px] rounded-full bg-check flex-none">
                    <Check size={13} strokeWidth={2.6} className="flex-none text-white" />
                  </span>
                  <span className="text-[16px] text-[#EDEAE6]">Connect feed status to product performance</span>
                </span>
                <span className="flex items-center gap-[14px]">
                  <span className="flex items-center justify-center w-[22px] h-[22px] rounded-full bg-check flex-none">
                    <Check size={13} strokeWidth={2.6} className="flex-none text-white" />
                  </span>
                  <span className="text-[16px] text-[#EDEAE6]">Prioritize the clearest opportunities</span>
                </span>
                <span className="flex items-center gap-[14px]">
                  <span className="flex items-center justify-center w-[22px] h-[22px] rounded-full bg-check flex-none">
                    <Check size={13} strokeWidth={2.6} className="flex-none text-white" />
                  </span>
                  <span className="text-[16px] text-[#EDEAE6]">Exclude unmatched data instead of guessing</span>
                </span>
              </div>
              <Link
                className="hover:text-[#e2703a] inline-flex items-center gap-[10px] mt-[30px] text-[17px] font-semibold text-rust-button"
                href="/platform/conversion-intelligence"
              >
                Explore conversion intelligence
                <ArrowRight size={18} strokeWidth={1.6} className="flex-none" />
              </Link>
              <span className="flex items-center gap-[14px] mt-[34px] px-0 py-[22px] border-t border-t-[#262422] border-b border-b-[#262422]">
                <ShieldGlyph2 size={22} stroke="#C2571E" className="flex-none" />
                <span className="text-[16.5px] text-[#EDEAE6]">Every number links back to its source.</span>
              </span>
            </div>
            <div className="w-[864px] p-[24px] bg-[#FAF7F2] border border-[#E4DDD3] rounded-14 shadow-[0_50px_110px_rgba(0,0,0,.55)] max-md:w-full max-w-full">
              <div className="flex items-start justify-between gap-[20px]">
                <span>
                  <span className="block text-[29px] font-bold tracking-[-.03em] text-ink">Opportunity queue</span>
                  <span className="flex items-center gap-[14px] mt-[9px]">
                    <span className="text-[13.5px] text-dim">
                      Prioritized using feed status, Shopify orders, and GA4 activity
                    </span>
                    <span className="inline-flex items-center h-[28px] px-[11px] py-0 border border-[#E3B7A0] rounded-6 text-[12.5px] text-rust">
                      Sample workspace
                    </span>
                  </span>
                </span>
                <span className="flex gap-[10px] flex-none">
                  <span className="flex items-center gap-[9px] h-[40px] px-[14px] py-0 border border-[#E4DED5] rounded-8 bg-white text-[13.5px] text-[#2B2926]">
                    <ShopifyBag2 size={19} className="flex-none" />
                    Shopify connected
                  </span>
                  <span className="flex items-center gap-[9px] h-[40px] px-[14px] py-0 border border-[#E4DED5] rounded-8 bg-white text-[13.5px] text-[#2B2926]">
                    <GoogleAnalyticsBars size={19} className="flex-none" />
                    GA4 connected
                  </span>
                </span>
              </div>
              <div className="flex gap-[26px] mt-[22px] border-b border-b-[#E7E1D8]">
                <span
                  className="hover:text-[#171514] pt-0 pb-[12px] px-[4px] text-[14.5px] font-semibold text-ink border-b-[2px] border-b-ink cursor-pointer"
                  tabIndex={0}
                >
                  Opportunities
                </span>
                <span
                  className="hover:text-[#171514] pt-0 pb-[12px] px-[4px] text-[14.5px] font-medium text-dim border-b-[2px] border-b-transparent cursor-pointer"
                  tabIndex={0}
                >
                  Data coverage
                </span>
                <span
                  className="hover:text-[#171514] pt-0 pb-[12px] px-[4px] text-[14.5px] font-medium text-dim border-b-[2px] border-b-transparent cursor-pointer"
                  tabIndex={0}
                >
                  Resolved
                </span>
              </div>
              <div className="flex gap-[16px] mt-[18px]">
                <div className="w-[430px] flex-none flex flex-col gap-[12px] max-w-full">
                  <div
                    className="hover:bg-[#fdfbf8] hover:border-[#d8cfc3] p-[16px] border-[1.5px] border-rust rounded-[11px] bg-[#FDF6F0] flex gap-[15px] cursor-pointer outline-offset-[3px]"
                    tabIndex={0}
                  >
                    <span className="w-[96px] h-[96px] flex-none border border-[#EDE8E1] rounded-8 bg-[#F4F1EC] overflow-hidden block">
                      <Image
                        src="/assets/img-11.png"
                        width={1254}
                        height={1254}
                        alt="Premium tennis court shoe"
                        sizes="(max-width: 768px) 50vw, 240px"
                        className="block w-full h-full object-cover max-w-none"
                      />
                    </span>
                    <span className="flex-1 min-w-0">
                      <span className="flex items-center justify-between gap-[10px]">
                        <span className="text-[18.5px] font-bold tracking-[-.02em] text-ink">
                          Baseline Pro Court Shoe
                        </span>
                        <ChevronRightGlyph size={18} className="flex-none" />
                      </span>
                      <span className="flex items-center gap-[12px] mt-[10px]">
                        <span className="inline-flex items-center h-[26px] px-[10px] py-0 border border-[#E3B7A0] rounded-6 bg-[#FBF1EB] text-[12.5px] font-semibold text-rust">
                          High priority
                        </span>
                        <span className="text-[13.5px] text-[#4B4741]">Blocked + proven demand</span>
                      </span>
                      <span className="block mt-[10px] text-[13.5px] text-dim">Missing GTIN · Google Shopping</span>
                      <span className="flex items-center gap-[14px] mt-[12px] text-[13px] text-[#4B4741]">
                        <span className="flex items-center gap-[7px]">
                          <svg
                            width="15"
                            height="15"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="#6B655E"
                            strokeWidth="1.6"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="flex-none"
                          >
                            <circle cx="9" cy="20" r="1.4"></circle>
                            <circle cx="18" cy="20" r="1.4"></circle>
                            <path d="M2 3h3l2.6 12.4a1.5 1.5 0 0 0 1.5 1.2h8.3a1.5 1.5 0 0 0 1.5-1.2L21 7H6"></path>
                          </svg>
                          38 matched orders
                        </span>
                        <span className="w-px h-[14px] bg-[#E4DED5]"></span>
                        <span className="flex items-center gap-[7px]">
                          <EyeGlyph size={15} className="flex-none" />
                          1,420 product views
                        </span>
                      </span>
                      <span className="flex justify-end mt-[12px]">
                        <span className="inline-flex items-center gap-[8px] text-[13.5px] font-semibold text-rust">
                          Fix product field
                          <ArrowRight size={15} strokeWidth={1.6} className="flex-none" />
                        </span>
                      </span>
                    </span>
                  </div>
                  <div
                    className="hover:bg-[#fdfbf8] hover:border-[#d8cfc3] p-[16px] border border-[#E9E3DA] rounded-[11px] bg-white flex gap-[15px] cursor-pointer outline-offset-[3px]"
                    tabIndex={0}
                  >
                    <span className="w-[96px] h-[96px] flex-none border border-[#EDE8E1] rounded-8 bg-[#F4F1EC] overflow-hidden block">
                      <Image
                        src="/assets/img-12.png"
                        width={1254}
                        height={1254}
                        alt="Can of three tennis balls"
                        sizes="(max-width: 768px) 50vw, 240px"
                        className="block w-full h-full object-cover max-w-none"
                      />
                    </span>
                    <span className="flex-1 min-w-0">
                      <span className="flex items-center justify-between gap-[10px]">
                        <span className="text-[18.5px] font-bold tracking-[-.02em] text-ink">
                          Championship Tennis Balls
                        </span>
                        <ChevronRightGlyph size={18} className="flex-none" />
                      </span>
                      <span className="flex items-center gap-[12px] mt-[10px]">
                        <span className="inline-flex items-center h-[26px] px-[10px] py-0 border border-[#EBCF9A] rounded-6 bg-[#FDF7EA] text-[12.5px] font-semibold text-[#8A5A12]">
                          Review
                        </span>
                        <span className="text-[13.5px] text-[#4B4741]">High traffic · No matched orders</span>
                      </span>
                      <span className="flex items-center gap-[14px] mt-[12px] text-[13px] text-[#4B4741]">
                        <span className="flex items-center gap-[7px]">
                          <EyeGlyph size={15} className="flex-none" />
                          2,184 product views
                        </span>
                        <span className="w-px h-[14px] bg-[#E4DED5]"></span>
                        <span className="flex items-center gap-[7px]">
                          <CircleCheckGlyph3 size={15} stroke="#4E7A57" className="flex-none" />
                          Feed approved
                        </span>
                      </span>
                      <span className="flex justify-end mt-[12px]">
                        <span className="inline-flex items-center gap-[8px] text-[13.5px] font-semibold text-rust">
                          Review listing
                          <ArrowRight size={15} strokeWidth={1.6} className="flex-none" />
                        </span>
                      </span>
                    </span>
                  </div>
                  <div
                    className="hover:bg-[#fdfbf8] hover:border-[#d8cfc3] p-[16px] border border-[#E9E3DA] rounded-[11px] bg-white flex gap-[15px] cursor-pointer outline-offset-[3px]"
                    tabIndex={0}
                  >
                    <span className="w-[96px] h-[96px] flex-none border border-[#EDE8E1] rounded-8 bg-[#F4F1EC] overflow-hidden block">
                      <Image
                        src="/assets/img-13.png"
                        width={1254}
                        height={1254}
                        alt="Wireless noise-cancelling headphones"
                        sizes="(max-width: 768px) 50vw, 240px"
                        className="block w-full h-full object-cover max-w-none"
                      />
                    </span>
                    <span className="flex-1 min-w-0">
                      <span className="flex items-center justify-between gap-[10px]">
                        <span className="text-[18.5px] font-bold tracking-[-.02em] text-ink">
                          Studio Wireless Headphones
                        </span>
                        <ChevronRightGlyph size={18} className="flex-none" />
                      </span>
                      <span className="flex items-center gap-[12px] mt-[10px]">
                        <span className="inline-flex items-center h-[26px] px-[10px] py-0 border border-[#DCD7CE] rounded-6 bg-[#F3F0EA] text-[12.5px] font-semibold text-[#4B4741]">
                          Watch
                        </span>
                        <span className="text-[13.5px] text-[#4B4741]">Approved · No recent traffic</span>
                      </span>
                      <span className="flex items-center gap-[14px] mt-[12px] text-[13px] text-[#4B4741]">
                        <span className="flex items-center gap-[7px]">
                          <svg
                            width="15"
                            height="15"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="#6B655E"
                            strokeWidth="1.6"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="flex-none"
                          >
                            <circle cx="12" cy="12" r="3"></circle>
                            <path d="M12 2v7M12 15v7M2 12h7M15 12h7"></path>
                          </svg>
                          4 channels active
                        </span>
                        <span className="w-px h-[14px] bg-[#E4DED5]"></span>
                        <span className="flex items-center gap-[7px]">
                          <svg
                            width="15"
                            height="15"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="#A8A29A"
                            strokeWidth="1.6"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="flex-none"
                          >
                            <circle cx="12" cy="12" r="9"></circle>
                            <path d="m9 9 6 6M15 9l-6 6"></path>
                          </svg>
                          No GA4 activity
                        </span>
                      </span>
                      <span className="flex justify-end mt-[12px]">
                        <span className="inline-flex items-center gap-[8px] text-[13.5px] font-semibold text-rust">
                          Inspect distribution
                          <ArrowRight size={15} strokeWidth={1.6} className="flex-none" />
                        </span>
                      </span>
                    </span>
                  </div>
                </div>
                <div className="w-[386px] flex-none flex flex-col gap-[14px] p-[18px] border border-[#E9E3DA] rounded-[11px] bg-[#FAF7F2] max-w-full">
                  <span className="text-[17px] font-bold tracking-[-.02em] text-ink">Why this is prioritized</span>
                  <span className="flex gap-[10px]">
                    <span className="flex-1 min-w-0 px-[14px] py-[13px] border border-[#E7E1D8] rounded-[9px] bg-white">
                      <span className="flex items-center gap-[8px] text-[12.5px] text-dim">
                        <svg
                          width="15"
                          height="15"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="#C7453A"
                          strokeWidth="1.6"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="flex-none"
                        >
                          <circle cx="12" cy="12" r="9"></circle>
                          <path d="M12 8v5"></path>
                          <path d="M12 16h.01"></path>
                        </svg>
                        Feed status
                      </span>
                      <span className="block text-[14px] font-semibold mt-[7px] text-[#C7453A]">Rejected</span>
                    </span>
                    <span className="flex-1 min-w-0 px-[14px] py-[13px] border border-[#E7E1D8] rounded-[9px] bg-white">
                      <span className="flex items-center gap-[8px] text-[12.5px] text-dim">
                        <ShopifyBag2 size={15} className="flex-none" />
                        Shopify
                      </span>
                      <span className="block text-[14px] font-semibold mt-[7px] text-ink">38 matched orders</span>
                    </span>
                    <span className="flex-1 min-w-0 px-[14px] py-[13px] border border-[#E7E1D8] rounded-[9px] bg-white">
                      <span className="flex items-center gap-[8px] text-[12.5px] text-dim">
                        <GoogleAnalyticsBars size={15} className="flex-none" />
                        GA4
                      </span>
                      <span className="block text-[14px] font-semibold mt-[7px] text-ink">1,420 product views</span>
                    </span>
                  </span>
                  <span className="flex items-start gap-[8px] px-[14px] py-[16px] border border-[#E7E1D8] rounded-[9px] bg-white">
                    <span className="flex flex-col items-center gap-[8px] flex-1">
                      <span>
                        <GoogleG size={22} className="flex-none" />
                      </span>
                      <span className="text-[12px] text-dim whitespace-nowrap">Google Shopping</span>
                    </span>
                    <span className="flex items-center pb-[20px] text-[#B9B2A8]">
                      <ArrowRight size={17} strokeWidth={1.6} className="flex-none text-[#B9B2A8]" />
                    </span>
                    <span className="flex flex-col items-center gap-[8px] flex-1">
                      <span>
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="#8A857F"
                          strokeWidth="1.6"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="flex-none"
                        >
                          <path d="M10 13a5 5 0 0 0 7.5.5l2-2a5 5 0 0 0-7-7l-1 1"></path>
                          <path d="M14 11a5 5 0 0 0-7.5-.5l-2 2a5 5 0 0 0 7 7l1-1"></path>
                        </svg>
                      </span>
                      <span className="text-[12px] text-dim whitespace-nowrap">Product match</span>
                    </span>
                    <span className="flex items-center pb-[20px] text-[#B9B2A8]">
                      <ArrowRight size={17} strokeWidth={1.6} className="flex-none text-[#B9B2A8]" />
                    </span>
                    <span className="flex flex-col items-center gap-[8px] flex-1">
                      <span>
                        <span className="flex gap-[6px]">
                          <ShopifyBag2 size={20} className="flex-none" />
                          <GoogleAnalyticsBars size={20} className="flex-none" />
                        </span>
                      </span>
                      <span className="text-[12px] text-dim whitespace-nowrap">Shopify + GA4</span>
                    </span>
                  </span>
                  <span className="block px-[15px] py-[13px] border border-[#E7E1D8] rounded-[9px] bg-white">
                    <span className="block text-[12.5px] text-dim">Exact field to fix</span>
                    <span className="block text-[19px] font-semibold text-ink mt-[5px]">gtin</span>
                  </span>
                  <span className="flex gap-[10px] max-md:flex-wrap max-xs:flex-col max-xs:items-stretch">
                    <button className="hover:bg-[#8a3814] active:bg-[#74300f] flex-1 [font-family:inherit] text-[14px] font-semibold text-white bg-rust border-0 rounded-8 px-[16px] py-[13px] cursor-pointer">
                      Fix product field
                    </button>
                    <button className="hover:bg-[#f7f2ec] flex-1 [font-family:inherit] text-[14px] font-semibold text-rust bg-white border border-[#E0D8CD] rounded-8 px-[16px] py-[13px] cursor-pointer">
                      View evidence
                    </button>
                  </span>
                  <span className="flex items-start gap-[11px] p-[14px] border border-[#EDE7DE] rounded-[9px] bg-[#F4F0E9]">
                    <InfoGlyph size={18} stroke="#8A857F" className="flex-none" />
                    <span className="text-[13.5px] leading-[1.5] text-[#3B3833]">
                      This product has verified historical demand but is currently blocked from Google Shopping by a
                      missing GTIN.
                    </span>
                  </span>
                </div>
              </div>
              <span className="flex items-center gap-[10px] mt-[16px] text-[13px] text-dim">
                <ShieldGlyph2 size={16} stroke="#A8A29A" className="flex-none" />
                Unmatched records are excluded from prioritization.
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* How Scout works */}
      <section
        className="leading-normal font-home relative z-[1] bg-[radial-gradient(circle_at_52%_42%,#fff_0,#FDFBF8_56%,#FAF6EF_100%)] pt-[50px] pb-[40px] px-0 min-h-[850px] overflow-hidden scroll-mt-[88px]"
        id="platform"
      >
        <div className="relative mx-auto w-full max-w-[1440px]">
          <svg
            width="1440"
            height="850"
            viewBox="0 0 1440 850"
            fill="none"
            aria-hidden="true"
            className="absolute left-0 top-0 opacity-62 pointer-events-none"
          >
            <g stroke="#EDE6DC" strokeWidth="1" fill="none">
              <path d="M-50 36C80 -8 144 90 248 60 362 26 401 -12 528 25 647 60 703 7 824 32 952 59 1012 16 1137 39 1262 62 1354 10 1490 34"></path>
              <path d="M-42 82C74 42 160 124 276 87 394 49 450 30 555 63 662 97 748 47 862 72 972 96 1054 58 1172 81 1287 104 1375 58 1488 73"></path>
              <path d="M-50 789C76 744 160 823 286 785 411 747 480 727 598 762 716 797 802 747 922 771 1043 796 1122 756 1244 780 1358 802 1410 777 1492 756"></path>
              <path d="M-52 835C77 791 161 870 291 832 418 795 489 774 610 809 731 843 818 793 940 818 1064 843 1144 803 1268 827 1377 848 1420 834 1495 808"></path>
              <path d="M88 6C48 48 55 105 96 130 136 155 185 136 199 95 214 53 190 12 148 4"></path>
              <path d="M1244 10C1204 56 1217 113 1261 135 1304 156 1350 130 1357 85 1365 41 1334 8 1292 2"></path>
            </g>
          </svg>
          <svg
            width="1440"
            height="850"
            viewBox="0 0 1440 850"
            fill="none"
            aria-hidden="true"
            className="absolute inset-0 opacity-36 pointer-events-none"
          >
            <g stroke="#D9D0C3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M14 755C28 684 31 598 25 527M25 641l-20-34M26 615l24-39M24 579L8 551M27 548l18-29M88 801c-9-71-2-139 18-203M100 664l-31-28M105 639l28-39M92 710l-30-19M113 612l14-32"></path>
              <path d="M1428 742c-18-72-20-146-9-220M1418 628l-24-31M1419 597l21-34M1357 803c7-82 0-151-24-217M1341 648l29-32M1337 622l-24-38M1348 688l31-20M1328 600l-13-35"></path>
            </g>
          </svg>
          <div className="relative z-[2] flex flex-col items-center px-[max(20px,calc(var(--gutter)-10px))] py-0">
            <p className="m-0 mb-[13px] text-[12px] font-bold tracking-[.14em] uppercase text-rust">How Scout works</p>
            <h2 className="m-0 max-w-[650px] text-center text-[46px] leading-[1.01] font-extrabold tracking-[-.038em] text-ink text-pretty max-xl:text-[length:clamp(30px,3.59vw,46px)]">
              From connected store to current feeds.
            </h2>
            <p className="m-0 mt-[16px] max-w-[640px] text-center text-[16px] leading-[1.5] text-[#5B554E] text-pretty">
              Four steps run on a loop. You stay in control of every catalog change, and every recommendation shows its
              evidence.
            </p>
          </div>

          {/* COMPOSITION 1440 x 500 */}
          <Scaled width={1440} height={500} className="z-[2] mt-[14px]">
            <svg
              width="1440"
              height="500"
              viewBox="0 0 1440 500"
              fill="none"
              aria-hidden="true"
              className="absolute left-0 top-0 z-[1] overflow-visible pointer-events-none"
            >
              <defs>
                <filter id="trail-roughness" x="-10%" y="-10%" width="120%" height="120%">
                  <feTurbulence
                    type="fractalNoise"
                    baseFrequency=".018"
                    numOctaves="2"
                    seed="8"
                    result="noise"
                  ></feTurbulence>
                  <feDisplacementMap in="SourceGraphic" in2="noise" scale="1.7"></feDisplacementMap>
                </filter>
              </defs>
              <g
                stroke="#C2571E"
                strokeWidth="5.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
                filter="url(#trail-roughness)"
              >
                <path d="M800 118 H860"></path>
                <path d="M1215 118 H1258 Q1288 118 1288 148 V300 Q1288 330 1258 330 H1230"></path>
                <path d="M869 330 H815"></path>
                <path d="M454 330 H448 Q430 330 430 312 V140 Q430 118 448 118"></path>
              </g>
              <g fill="#C2571E">
                <path d="M875 118 L860 109 L860 127 Z"></path>
                <path d="M1215 330 L1230 321 L1230 339 Z"></path>
                <path d="M800 330 L815 321 L815 339 Z"></path>
                <path d="M455 118 L440 109 L440 127 Z"></path>
              </g>
            </svg>
            <Image
              src="/assets/scout-map.png"
              width={370}
              height={534}
              alt="Meerkat Scout holding a field map"
              className="absolute -left-[6px] -top-[40px] w-[370px] h-[534px] z-[3] pointer-events-none max-md:hidden max-w-none"
            />
            <div className="hover:border-[#dfd4c6] hover:[box-shadow:0 22px 48px #1e18101f] absolute left-[460px] top-[16px] w-[380px] h-[232px] z-[2] px-[22px] py-[20px] bg-white border border-[#EDE7DE] rounded-14 shadow-[0_14px_34px_rgba(30,24,16,.07),0_1px_2px_rgba(30,24,16,.04)] flex flex-col [transition:box-shadow_.18s,border-color_.18s] [transform:scale(.88)] origin-top-left">
              <div className="flex items-center gap-[12px]">
                <span className="flex items-center justify-center w-[32px] h-[32px] rounded-full bg-rust-button text-[15px] font-bold text-white flex-none">
                  1
                </span>
                <span className="text-[13px] font-bold tracking-[.14em] uppercase text-rust-button">Connect</span>
              </div>
              <h3 className="m-0 mt-[15px] text-[18.5px] leading-[1.34] font-bold tracking-[-.02em] text-ink text-pretty">
                Connect your Shopify store;
                <br />
                Sync the catalog
              </h3>
              <div className="mt-auto">
                <div className="flex items-center gap-[10px] px-[12px] py-[11px] bg-[#FBF9F6] border border-[#EFEAE3] rounded-10">
                  <span className="flex items-center justify-center w-[28px] h-[28px] rounded-8 bg-white border border-[#EDE7DE] flex-none">
                    <ShopifyBag size={18} />
                  </span>
                  <span className="flex-1 min-w-0">
                    <span className="block text-[14px] font-semibold text-ink">Shopify store</span>
                    <span className="block mt-[2px] text-[12px] text-faint whitespace-nowrap">
                      meerkatscout.myshopify.com
                    </span>
                  </span>
                  <span
                    className="inline-flex items-center justify-center w-[24px] h-[24px] rounded-full border border-[#CDE9D9] bg-[#F1FAF5] text-ok-text flex-none"
                    title="Connected"
                  >
                    <Check size={13} strokeWidth={2.8} aria-hidden="true" />
                  </span>
                </div>
              </div>
            </div>
            <div className="hover:border-[#dfd4c6] hover:[box-shadow:0 22px 48px #1e18101f] absolute left-[875px] top-[16px] w-[380px] h-[232px] z-[2] px-[22px] py-[20px] bg-white border border-[#EDE7DE] rounded-14 shadow-[0_14px_34px_rgba(30,24,16,.07),0_1px_2px_rgba(30,24,16,.04)] flex flex-col [transition:box-shadow_.18s,border-color_.18s] [transform:scale(.88)] origin-top-left">
              <div className="flex items-center gap-[12px]">
                <span className="flex items-center justify-center w-[32px] h-[32px] rounded-full bg-rust-button text-[15px] font-bold text-white flex-none">
                  2
                </span>
                <span className="text-[13px] font-bold tracking-[.14em] uppercase text-rust-button">Prepare</span>
              </div>
              <h3 className="m-0 mt-[15px] text-[18.5px] leading-[1.34] font-bold tracking-[-.02em] text-ink text-pretty">
                Prepare and validate feeds;
                <br />
                Preflight channel requirements
              </h3>
              <div className="mt-auto">
                <div className="flex items-center gap-[13px] px-[13px] py-[11px] bg-[#FBF9F6] border border-[#EFEAE3] rounded-10">
                  <span className="flex items-center justify-center w-[32px] h-[32px] rounded-full border-[2px] border-check flex-none">
                    <Check size={16} strokeWidth={2.8} aria-hidden="true" className="text-check" />
                  </span>
                  <span className="flex-1 min-w-0">
                    <span className="block text-[12.5px] text-faint">Validation result</span>
                    <span className="block mt-[2px] text-[14.5px] font-semibold text-ink">No blocking issues</span>
                  </span>
                  <ChevronRightGlyph size={17} strokeWidth="1.8" className="flex-none" />
                </div>
              </div>
            </div>
            <div className="hover:border-[#dfd4c6] hover:[box-shadow:0 22px 48px #1e18101f] absolute left-[875px] top-[228px] w-[380px] h-[232px] z-[2] px-[22px] py-[20px] bg-white border border-[#EDE7DE] rounded-14 shadow-[0_14px_34px_rgba(30,24,16,.07),0_1px_2px_rgba(30,24,16,.04)] flex flex-col [transition:box-shadow_.18s,border-color_.18s] [transform:scale(.88)] origin-top-left">
              <div className="flex items-center gap-[12px]">
                <span className="flex items-center justify-center w-[32px] h-[32px] rounded-full bg-rust-button text-[15px] font-bold text-white flex-none">
                  3
                </span>
                <span className="text-[13px] font-bold tracking-[.14em] uppercase text-rust-button">Publish</span>
              </div>
              <h3 className="m-0 mt-[15px] text-[18.5px] leading-[1.34] font-bold tracking-[-.02em] text-ink text-pretty">
                Publish to destinations;
                <br />
                Collect and normalize diagnostics
              </h3>
              <div className="mt-auto">
                <div className="pt-[11px] pb-[10px] px-[13px] bg-[#FBF9F6] border border-[#EFEAE3] rounded-10">
                  <div className="flex items-center gap-[8px]">
                    <span className="flex items-center justify-center w-[34px] h-[34px] rounded-8 bg-white border border-[#EDE7DE] flex-none">
                      <GoogleG size={20} />
                    </span>
                    <span className="flex items-center justify-center w-[34px] h-[34px] rounded-8 bg-white border border-[#EDE7DE] flex-none">
                      <MetaLogo size={20} />
                    </span>
                    <span className="flex items-center justify-center w-[34px] h-[34px] rounded-8 bg-white border border-[#EDE7DE] flex-none">
                      <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true">
                        <circle cx="12" cy="12" r="10" fill="#E60023"></circle>
                        <path
                          fill="#fff"
                          d="M12.6 5.8c-3.5 0-5.4 2.3-5.4 4.8 0 1.2.6 2.6 1.7 3 .2.1.3 0 .3-.2l.2-.8c.1-.2 0-.3-.1-.4-.4-.5-.6-1.1-.6-1.8 0-2 1.5-3.8 3.9-3.8 2.1 0 3.5 1.3 3.5 3.2 0 2.1-1 3.7-2.4 3.7-.8 0-1.4-.7-1.2-1.5.2-1 .7-2 .7-2.7 0-.6-.3-1.1-1-1.1-.9 0-1.6.9-1.6 2.1 0 .8.3 1.3.3 1.3l-1.1 4.6c-.2.8 0 2.1 0 2.2 0 .1.1.1.2.1s.7-.9.9-1.7l.4-1.5c.3.5 1 .9 1.8.9 2.4 0 4.1-2.2 4.1-5.1 0-2.8-2.3-4.8-5.3-4.8z"
                        ></path>
                      </svg>
                    </span>
                    <span className="flex items-center justify-center w-[34px] h-[34px] rounded-8 bg-white border border-[#EDE7DE] flex-none">
                      <MicrosoftLogo size={19} />
                    </span>
                    <span className="flex items-center justify-center w-[34px] h-[34px] ml-auto rounded-8 bg-white border border-dashed border-[#DDD4C8] text-[17px] text-night-muted-2 flex-none">
                      +
                    </span>
                  </div>
                  <div className="flex items-center justify-between gap-[10px] mt-[10px] pt-[9px] border-t border-t-[#EFEAE3] text-[12.5px] text-dim">
                    <span className="flex items-center gap-[7px]">
                      <span className="w-[7px] h-[7px] rounded-full bg-check flex-none"></span>4 destinations
                    </span>
                    <span>On schedule</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="hover:border-[#dfd4c6] hover:[box-shadow:0 22px 48px #1e18101f] absolute left-[460px] top-[228px] w-[380px] h-[232px] z-[2] px-[22px] py-[20px] bg-white border border-[#EDE7DE] rounded-14 shadow-[0_14px_34px_rgba(30,24,16,.07),0_1px_2px_rgba(30,24,16,.04)] flex flex-col [transition:box-shadow_.18s,border-color_.18s] [transform:scale(.88)] origin-top-left">
              <div className="flex items-center gap-[12px]">
                <span className="flex items-center justify-center w-[32px] h-[32px] rounded-full bg-rust-button text-[15px] font-bold text-white flex-none">
                  4
                </span>
                <span className="text-[13px] font-bold tracking-[.14em] uppercase text-rust-button">Improve</span>
              </div>
              <h3 className="m-0 mt-[15px] text-[18.5px] leading-[1.34] font-bold tracking-[-.02em] text-ink text-pretty">
                Review recommendations;
                <br />
                Keep feeds current
              </h3>
              <div className="mt-auto">
                <div className="pt-[11px] pb-[10px] px-[13px] bg-[#FBF9F6] border border-[#EFEAE3] rounded-10">
                  <div className="flex items-center gap-[12px]">
                    <span className="flex items-center justify-center w-[32px] h-[32px] rounded-full bg-[#FBEEE2] flex-none">
                      <svg
                        width="17"
                        height="17"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#A0431A"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        <path d="M12 3l1.9 5.1L19 10l-5.1 1.9L12 17l-1.9-5.1L5 10l5.1-1.9z"></path>
                        <path d="M18.5 16.5l.7 1.8 1.8.7-1.8.7-.7 1.8-.7-1.8-1.8-.7 1.8-.7z"></path>
                      </svg>
                    </span>
                    <span className="flex-1 min-w-0 text-[14.5px] font-semibold text-ink">Add missing GTIN</span>
                    <span className="inline-flex items-center gap-[6px] h-[26px] px-[10px] py-0 border border-[#CDE9D9] rounded-6 bg-[#F1FAF5] text-[12.5px] font-medium text-ok-text flex-none">
                      High impact
                    </span>
                  </div>
                  <div className="flex items-center justify-between gap-[10px] mt-[10px] pt-[9px] border-t border-t-[#EFEAE3] text-[12.5px] text-dim">
                    <span>Products affected</span>
                    <span className="flex items-center gap-[8px]">
                      <strong className="font-semibold text-ink text-[13.5px]">1,284</strong>
                      <ChevronRightGlyph size={17} strokeWidth="1.8" className="flex-none" />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </Scaled>
          <div className="relative z-[2] flex justify-center px-[max(20px,calc(var(--gutter)-10px))] py-0">
            <div className="flex items-center gap-[12px] px-[20px] py-[14px] bg-white border border-[#EDE7DE] rounded-10 shadow-[0_10px_26px_rgba(30,24,16,.06)]">
              <svg
                width="21"
                height="21"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#A0431A"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
                className="flex-none"
              >
                <path d="M12 3l7.5 3v5.5c0 4.4-3.1 8.2-7.5 9.5-4.4-1.3-7.5-5.1-7.5-9.5V6z"></path>
                <path d="M9.4 12.2l2 2 3.4-3.6"></path>
              </svg>
              <span className="text-[14.5px] text-night-line">
                Scout mirrors your catalog. Publishing and pricing changes always start with you.
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Connectivity and trust */}
      <section className="leading-normal font-home relative z-[1] bg-paper min-h-[872px] overflow-hidden scroll-mt-[88px]" id="channels">
        <div className="relative mx-auto w-full max-w-[1440px]">
          <div className="absolute left-0 top-0 w-[720px] h-[872px]">
            <Image
              src="/assets/img-15.png"
              width={1023}
              height={1537}
              alt="Drop the approved binocular Scout jungle-overlook artwork"
              sizes="(max-width: 768px) 50vw, 240px"
              className="block w-full h-full object-cover max-w-none"
            />
          </div>
          <div
            className="absolute left-[500px] top-0 w-[300px] h-[872px] pointer-events-none [background:linear-gradient(to_right,rgba(247,244,239,0)_0%,rgba(247,244,239,.58)_48%,rgba(247,244,239,.96)_82%,#F7F4EF_100%)]"
            aria-hidden="true"
          ></div>
          <svg
            width="1440"
            height="872"
            viewBox="0 0 1440 872"
            fill="none"
            aria-hidden="true"
            className="absolute left-0 top-0 z-[1] pointer-events-none"
          >
            <defs>
              <linearGradient id="beamG" x1="315" y1="0" x2="1060" y2="0" gradientUnits="userSpaceOnUse">
                <stop offset="0" stopColor="#FFE0B4"></stop>
                <stop offset=".16" stopColor="#FBAE63"></stop>
                <stop offset=".62" stopColor="#EE8C3C"></stop>
                <stop offset="1" stopColor="#E07C2C"></stop>
              </linearGradient>
              <radialGradient id="flareG">
                <stop offset="0" stopColor="#FFF6E6" stopOpacity=".95"></stop>
                <stop offset=".35" stopColor="#FFC183" stopOpacity=".55"></stop>
                <stop offset="1" stopColor="#F08A3A" stopOpacity="0"></stop>
              </radialGradient>
              <filter id="beamBloom" x="-8%" y="-8%" width="116%" height="116%">
                <feGaussianBlur stdDeviation="3.4"></feGaussianBlur>
              </filter>
            </defs>
            <g stroke="url(#beamG)" fill="none" strokeLinecap="round">
              <g strokeWidth="3.6" opacity=".3" filter="url(#beamBloom)">
                <path d="M315 136 C441.9 152.3 594.2 373 738 432.3"></path>
                <path d="M385 139 C490.9 157.3 618 404.5 738 470.9"></path>
                <path d="M315 136 C441.9 156.5 594.2 434.8 738 509.5"></path>
                <path d="M385 139 C490.9 161.5 618 466.4 738 548.2"></path>
                <path d="M315 136 C441.9 160.8 594.2 496.6 738 586.8"></path>
                <path d="M385 139 C586.5 155.1 828.2 373.6 1056.5 432.3"></path>
                <path d="M315 136 C537.5 154.4 804.4 403.9 1056.5 470.9"></path>
                <path d="M385 139 C586.5 159.4 828.2 435.4 1056.5 509.5"></path>
                <path d="M315 136 C537.5 158.7 804.4 465.8 1056.5 548.2"></path>
                <path d="M385 139 C586.5 163.6 828.2 497.2 1056.5 586.8"></path>
              </g>
              <g strokeWidth="1.05" opacity=".9">
                <path d="M315 136 C441.9 152.3 594.2 373 738 432.3"></path>
                <path d="M385 139 C490.9 157.3 618 404.5 738 470.9"></path>
                <path d="M315 136 C441.9 156.5 594.2 434.8 738 509.5"></path>
                <path d="M385 139 C490.9 161.5 618 466.4 738 548.2"></path>
                <path d="M315 136 C441.9 160.8 594.2 496.6 738 586.8"></path>
                <path d="M385 139 C586.5 155.1 828.2 373.6 1056.5 432.3"></path>
                <path d="M315 136 C537.5 154.4 804.4 403.9 1056.5 470.9"></path>
                <path d="M385 139 C586.5 159.4 828.2 435.4 1056.5 509.5"></path>
                <path d="M315 136 C537.5 158.7 804.4 465.8 1056.5 548.2"></path>
                <path d="M385 139 C586.5 163.6 828.2 497.2 1056.5 586.8"></path>
              </g>
            </g>
            <g fill="none" strokeLinecap="round">
              <g stroke="#F6A05C" strokeWidth="8" opacity="0.11">
                <path
                  style={{ animationDuration: "3.6s", animationDelay: "-1.03s" }}
                  d="M315 136 C441.9 152.3 594.2 373 738 432.3"
                  pathLength="100"
                  strokeDasharray="28 72"
                ></path>
                <path
                  style={{ animationDuration: "3.2s", animationDelay: "-2.14s" }}
                  d="M385 139 C490.9 157.3 618 404.5 738 470.9"
                  pathLength="100"
                  strokeDasharray="28 72"
                ></path>
                <path
                  style={{ animationDuration: "3.9s", animationDelay: "-3.50s" }}
                  d="M315 136 C441.9 156.5 594.2 434.8 738 509.5"
                  pathLength="100"
                  strokeDasharray="28 72"
                ></path>
                <path
                  style={{ animationDuration: "3.4s", animationDelay: "-1.58s" }}
                  d="M385 139 C490.9 161.5 618 466.4 738 548.2"
                  pathLength="100"
                  strokeDasharray="28 72"
                ></path>
                <path
                  style={{ animationDuration: "3.7s", animationDelay: "-2.85s" }}
                  d="M315 136 C441.9 160.8 594.2 496.6 738 586.8"
                  pathLength="100"
                  strokeDasharray="28 72"
                ></path>
                <path
                  style={{ animationDuration: "4.4s", animationDelay: "-4.11s" }}
                  d="M385 139 C586.5 155.1 828.2 373.6 1056.5 432.3"
                  pathLength="100"
                  strokeDasharray="28 72"
                ></path>
                <path
                  style={{ animationDuration: "4.1s", animationDelay: "-2.04s" }}
                  d="M315 136 C537.5 154.4 804.4 403.9 1056.5 470.9"
                  pathLength="100"
                  strokeDasharray="28 72"
                ></path>
                <path
                  style={{ animationDuration: "4.6s", animationDelay: "-3.36s" }}
                  d="M385 139 C586.5 159.4 828.2 435.4 1056.5 509.5"
                  pathLength="100"
                  strokeDasharray="28 72"
                ></path>
                <path
                  style={{ animationDuration: "4.2s", animationDelay: "-4.47s" }}
                  d="M315 136 C537.5 158.7 804.4 465.8 1056.5 548.2"
                  pathLength="100"
                  strokeDasharray="28 72"
                ></path>
                <path
                  style={{ animationDuration: "4.8s", animationDelay: "-1.60s" }}
                  d="M385 139 C586.5 163.6 828.2 497.2 1056.5 586.8"
                  pathLength="100"
                  strokeDasharray="28 72"
                ></path>
              </g>
              <g stroke="#FBAE63" strokeWidth="4.2" opacity="0.3">
                <path
                  style={{ animationDuration: "3.6s", animationDelay: "-0.56s" }}
                  d="M315 136 C441.9 152.3 594.2 373 738 432.3"
                  pathLength="100"
                  strokeDasharray="15 85"
                ></path>
                <path
                  style={{ animationDuration: "3.2s", animationDelay: "-1.72s" }}
                  d="M385 139 C490.9 157.3 618 404.5 738 470.9"
                  pathLength="100"
                  strokeDasharray="15 85"
                ></path>
                <path
                  style={{ animationDuration: "3.9s", animationDelay: "-2.99s" }}
                  d="M315 136 C441.9 156.5 594.2 434.8 738 509.5"
                  pathLength="100"
                  strokeDasharray="15 85"
                ></path>
                <path
                  style={{ animationDuration: "3.4s", animationDelay: "-1.14s" }}
                  d="M385 139 C490.9 161.5 618 466.4 738 548.2"
                  pathLength="100"
                  strokeDasharray="15 85"
                ></path>
                <path
                  style={{ animationDuration: "3.7s", animationDelay: "-2.37s" }}
                  d="M315 136 C441.9 160.8 594.2 496.6 738 586.8"
                  pathLength="100"
                  strokeDasharray="15 85"
                ></path>
                <path
                  style={{ animationDuration: "4.4s", animationDelay: "-3.54s" }}
                  d="M385 139 C586.5 155.1 828.2 373.6 1056.5 432.3"
                  pathLength="100"
                  strokeDasharray="15 85"
                ></path>
                <path
                  style={{ animationDuration: "4.1s", animationDelay: "-1.51s" }}
                  d="M315 136 C537.5 154.4 804.4 403.9 1056.5 470.9"
                  pathLength="100"
                  strokeDasharray="15 85"
                ></path>
                <path
                  style={{ animationDuration: "4.6s", animationDelay: "-2.76s" }}
                  d="M385 139 C586.5 159.4 828.2 435.4 1056.5 509.5"
                  pathLength="100"
                  strokeDasharray="15 85"
                ></path>
                <path
                  style={{ animationDuration: "4.2s", animationDelay: "-3.92s" }}
                  d="M315 136 C537.5 158.7 804.4 465.8 1056.5 548.2"
                  pathLength="100"
                  strokeDasharray="15 85"
                ></path>
                <path
                  style={{ animationDuration: "4.8s", animationDelay: "-0.98s" }}
                  d="M385 139 C586.5 163.6 828.2 497.2 1056.5 586.8"
                  pathLength="100"
                  strokeDasharray="15 85"
                ></path>
              </g>
              <g stroke="#FFF3E2" strokeWidth="1.7" opacity="0.95">
                <path
                  style={{ animationDuration: "3.6s", animationDelay: "-0.20s" }}
                  d="M315 136 C441.9 152.3 594.2 373 738 432.3"
                  pathLength="100"
                  strokeDasharray="5 95"
                ></path>
                <path
                  style={{ animationDuration: "3.2s", animationDelay: "-1.40s" }}
                  d="M385 139 C490.9 157.3 618 404.5 738 470.9"
                  pathLength="100"
                  strokeDasharray="5 95"
                ></path>
                <path
                  style={{ animationDuration: "3.9s", animationDelay: "-2.60s" }}
                  d="M315 136 C441.9 156.5 594.2 434.8 738 509.5"
                  pathLength="100"
                  strokeDasharray="5 95"
                ></path>
                <path
                  style={{ animationDuration: "3.4s", animationDelay: "-0.80s" }}
                  d="M385 139 C490.9 161.5 618 466.4 738 548.2"
                  pathLength="100"
                  strokeDasharray="5 95"
                ></path>
                <path
                  style={{ animationDuration: "3.7s", animationDelay: "-2.00s" }}
                  d="M315 136 C441.9 160.8 594.2 496.6 738 586.8"
                  pathLength="100"
                  strokeDasharray="5 95"
                ></path>
                <path
                  style={{ animationDuration: "4.4s", animationDelay: "-3.10s" }}
                  d="M385 139 C586.5 155.1 828.2 373.6 1056.5 432.3"
                  pathLength="100"
                  strokeDasharray="5 95"
                ></path>
                <path
                  style={{ animationDuration: "4.1s", animationDelay: "-1.10s" }}
                  d="M315 136 C537.5 154.4 804.4 403.9 1056.5 470.9"
                  pathLength="100"
                  strokeDasharray="5 95"
                ></path>
                <path
                  style={{ animationDuration: "4.6s", animationDelay: "-2.30s" }}
                  d="M385 139 C586.5 159.4 828.2 435.4 1056.5 509.5"
                  pathLength="100"
                  strokeDasharray="5 95"
                ></path>
                <path
                  style={{ animationDuration: "4.2s", animationDelay: "-3.50s" }}
                  d="M315 136 C537.5 158.7 804.4 465.8 1056.5 548.2"
                  pathLength="100"
                  strokeDasharray="5 95"
                ></path>
                <path
                  style={{ animationDuration: "4.8s", animationDelay: "-0.50s" }}
                  d="M385 139 C586.5 163.6 828.2 497.2 1056.5 586.8"
                  pathLength="100"
                  strokeDasharray="5 95"
                ></path>
              </g>
            </g>
            <g>
              <circle cx="315" cy="136" r="19" fill="url(#flareG)" opacity=".85"></circle>
              <circle cx="385" cy="139" r="19" fill="url(#flareG)" opacity=".85"></circle>
              <circle cx="315" cy="136" r="3.1" fill="#FFF3DF"></circle>
              <circle cx="385" cy="139" r="3.1" fill="#FFF3DF"></circle>
            </g>
          </svg>
          <svg
            width="1440"
            height="872"
            viewBox="0 0 1440 872"
            fill="none"
            aria-hidden="true"
            className="absolute left-0 top-0 z-[3] pointer-events-none"
          >
            <defs>
              <linearGradient id="stubG" x1="700" y1="0" x2="1062" y2="0" gradientUnits="userSpaceOnUse">
                <stop offset="0" stopColor="#EE8C3C" stopOpacity=".15"></stop>
                <stop offset="1" stopColor="#E5813A" stopOpacity=".95"></stop>
              </linearGradient>
              <radialGradient id="dotG">
                <stop offset="0" stopColor="#FFB271" stopOpacity=".55"></stop>
                <stop offset="1" stopColor="#FFB271" stopOpacity="0"></stop>
              </radialGradient>
            </defs>
            <g stroke="url(#stubG)" strokeWidth="1.05" fill="none" strokeLinecap="round">
              <path d="M716.4 421.8 Q735.7 431.3 733 432.3"></path>
              <path d="M717.9 457.8 Q735.9 469.7 733 470.9"></path>
              <path d="M717.5 497 Q735.8 508.3 733 509.5"></path>
              <path d="M719.3 533.2 Q736 546.8 733 548.2"></path>
              <path d="M718.7 572.6 Q735.9 585.5 733 586.8"></path>
              <path d="M1043.6 428.4 Q1055.1 431.9 1051.5 432.3"></path>
              <path d="M1043.6 466.9 Q1055.1 470.5 1051.5 470.9"></path>
              <path d="M1043.9 504.7 Q1055.2 509 1051.5 509.5"></path>
              <path d="M1043.9 543.4 Q1055.2 547.7 1051.5 548.2"></path>
              <path d="M1044.2 581.1 Q1055.2 586.3 1051.5 586.8"></path>
            </g>
            <g>
              <circle cx="738" cy="432.3" r="8.4" fill="url(#dotG)"></circle>
              <circle cx="738" cy="432.3" r="4.4" fill="#FFFDF9" stroke="#E5813A" strokeWidth="1.5"></circle>
              <circle cx="738" cy="432.3" r="1.5" fill="#E5813A"></circle>
              <circle cx="738" cy="470.9" r="8.4" fill="url(#dotG)"></circle>
              <circle cx="738" cy="470.9" r="4.4" fill="#FFFDF9" stroke="#E5813A" strokeWidth="1.5"></circle>
              <circle cx="738" cy="470.9" r="1.5" fill="#E5813A"></circle>
              <circle cx="738" cy="509.5" r="8.4" fill="url(#dotG)"></circle>
              <circle cx="738" cy="509.5" r="4.4" fill="#FFFDF9" stroke="#E5813A" strokeWidth="1.5"></circle>
              <circle cx="738" cy="509.5" r="1.5" fill="#E5813A"></circle>
              <circle cx="738" cy="548.2" r="8.4" fill="url(#dotG)"></circle>
              <circle cx="738" cy="548.2" r="4.4" fill="#FFFDF9" stroke="#E5813A" strokeWidth="1.5"></circle>
              <circle cx="738" cy="548.2" r="1.5" fill="#E5813A"></circle>
              <circle cx="738" cy="586.8" r="8.4" fill="url(#dotG)"></circle>
              <circle cx="738" cy="586.8" r="4.4" fill="#FFFDF9" stroke="#E5813A" strokeWidth="1.5"></circle>
              <circle cx="738" cy="586.8" r="1.5" fill="#E5813A"></circle>
              <circle cx="1056.5" cy="432.3" r="8.4" fill="url(#dotG)"></circle>
              <circle cx="1056.5" cy="432.3" r="4.4" fill="#FFFDF9" stroke="#E5813A" strokeWidth="1.5"></circle>
              <circle cx="1056.5" cy="432.3" r="1.5" fill="#E5813A"></circle>
              <circle cx="1056.5" cy="470.9" r="8.4" fill="url(#dotG)"></circle>
              <circle cx="1056.5" cy="470.9" r="4.4" fill="#FFFDF9" stroke="#E5813A" strokeWidth="1.5"></circle>
              <circle cx="1056.5" cy="470.9" r="1.5" fill="#E5813A"></circle>
              <circle cx="1056.5" cy="509.5" r="8.4" fill="url(#dotG)"></circle>
              <circle cx="1056.5" cy="509.5" r="4.4" fill="#FFFDF9" stroke="#E5813A" strokeWidth="1.5"></circle>
              <circle cx="1056.5" cy="509.5" r="1.5" fill="#E5813A"></circle>
              <circle cx="1056.5" cy="548.2" r="8.4" fill="url(#dotG)"></circle>
              <circle cx="1056.5" cy="548.2" r="4.4" fill="#FFFDF9" stroke="#E5813A" strokeWidth="1.5"></circle>
              <circle cx="1056.5" cy="548.2" r="1.5" fill="#E5813A"></circle>
              <circle cx="1056.5" cy="586.8" r="8.4" fill="url(#dotG)"></circle>
              <circle cx="1056.5" cy="586.8" r="4.4" fill="#FFFDF9" stroke="#E5813A" strokeWidth="1.5"></circle>
              <circle cx="1056.5" cy="586.8" r="1.5" fill="#E5813A"></circle>
              <circle
                style={{ animationDuration: "3.6s", animationDelay: "-0.2s" }}
                cx="738"
                cy="432.3"
                r="9.5"
                fill="url(#dotG)"
              ></circle>
              <circle
                style={{ animationDuration: "3.6s", animationDelay: "-0.2s" }}
                cx="738"
                cy="432.3"
                r="2.4"
                fill="#FFF6E8"
              ></circle>
              <circle
                style={{ animationDuration: "3.2s", animationDelay: "-1.4s" }}
                cx="738"
                cy="470.9"
                r="9.5"
                fill="url(#dotG)"
              ></circle>
              <circle
                style={{ animationDuration: "3.2s", animationDelay: "-1.4s" }}
                cx="738"
                cy="470.9"
                r="2.4"
                fill="#FFF6E8"
              ></circle>
              <circle
                style={{ animationDuration: "3.9s", animationDelay: "-2.6s" }}
                cx="738"
                cy="509.5"
                r="9.5"
                fill="url(#dotG)"
              ></circle>
              <circle
                style={{ animationDuration: "3.9s", animationDelay: "-2.6s" }}
                cx="738"
                cy="509.5"
                r="2.4"
                fill="#FFF6E8"
              ></circle>
              <circle
                style={{ animationDuration: "3.4s", animationDelay: "-0.8s" }}
                cx="738"
                cy="548.2"
                r="9.5"
                fill="url(#dotG)"
              ></circle>
              <circle
                style={{ animationDuration: "3.4s", animationDelay: "-0.8s" }}
                cx="738"
                cy="548.2"
                r="2.4"
                fill="#FFF6E8"
              ></circle>
              <circle
                style={{ animationDuration: "3.7s", animationDelay: "-2s" }}
                cx="738"
                cy="586.8"
                r="9.5"
                fill="url(#dotG)"
              ></circle>
              <circle
                style={{ animationDuration: "3.7s", animationDelay: "-2s" }}
                cx="738"
                cy="586.8"
                r="2.4"
                fill="#FFF6E8"
              ></circle>
              <circle
                style={{ animationDuration: "4.4s", animationDelay: "-3.1s" }}
                cx="1056.5"
                cy="432.3"
                r="9.5"
                fill="url(#dotG)"
              ></circle>
              <circle
                style={{ animationDuration: "4.4s", animationDelay: "-3.1s" }}
                cx="1056.5"
                cy="432.3"
                r="2.4"
                fill="#FFF6E8"
              ></circle>
              <circle
                style={{ animationDuration: "4.1s", animationDelay: "-1.1s" }}
                cx="1056.5"
                cy="470.9"
                r="9.5"
                fill="url(#dotG)"
              ></circle>
              <circle
                style={{ animationDuration: "4.1s", animationDelay: "-1.1s" }}
                cx="1056.5"
                cy="470.9"
                r="2.4"
                fill="#FFF6E8"
              ></circle>
              <circle
                style={{ animationDuration: "4.6s", animationDelay: "-2.3s" }}
                cx="1056.5"
                cy="509.5"
                r="9.5"
                fill="url(#dotG)"
              ></circle>
              <circle
                style={{ animationDuration: "4.6s", animationDelay: "-2.3s" }}
                cx="1056.5"
                cy="509.5"
                r="2.4"
                fill="#FFF6E8"
              ></circle>
              <circle
                style={{ animationDuration: "4.2s", animationDelay: "-3.5s" }}
                cx="1056.5"
                cy="548.2"
                r="9.5"
                fill="url(#dotG)"
              ></circle>
              <circle
                style={{ animationDuration: "4.2s", animationDelay: "-3.5s" }}
                cx="1056.5"
                cy="548.2"
                r="2.4"
                fill="#FFF6E8"
              ></circle>
              <circle
                style={{ animationDuration: "4.8s", animationDelay: "-0.5s" }}
                cx="1056.5"
                cy="586.8"
                r="9.5"
                fill="url(#dotG)"
              ></circle>
              <circle
                style={{ animationDuration: "4.8s", animationDelay: "-0.5s" }}
                cx="1056.5"
                cy="586.8"
                r="2.4"
                fill="#FFF6E8"
              ></circle>
            </g>
          </svg>
          <div className="absolute left-[718px] top-[24px] w-[790px] z-[2] [transform:scale(.84)] origin-top-left">
            <p className="m-0 mb-[18px] text-[13px] font-semibold tracking-[.14em] uppercase text-rust-button">
              Connectivity &amp; trust
            </p>
            <h2 className="m-0 text-[48px] leading-[1.05] font-extrabold tracking-[-.035em] text-ink text-pretty max-xl:text-[length:clamp(30px,3.75vw,48px)]">
              Ten channels.
              <br />
              One watchful command center.
            </h2>
            <p className="m-0 mt-[22px] max-w-[560px] text-[17.5px] leading-[1.55] text-[#5B554E] text-pretty max-md:text-[16px]">
              Connect Shopify to every major destination, monitor the health of every integration, and keep control of
              every catalog change.
            </p>
            <Link
              className="hover:text-[#a0431a] inline-flex items-center gap-[10px] mt-[22px] text-[17px] font-semibold text-rust-button"
              href="/channels"
            >
              Explore channels
              <ArrowRight size={18} strokeWidth={1.7} aria-hidden="true" className="flex-none" />
            </Link>
            <div className="mt-[30px] p-[22px] pb-[20px] bg-[#FBF9F6] border border-[#E6E1D9] rounded-14 shadow-[0_24px_60px_rgba(30,24,16,.09),0_2px_6px_rgba(30,24,16,.04)]">
              <div className="flex items-start justify-between gap-[18px]">
                <div>
                  <h3 className="m-0 text-[25px] font-bold tracking-[-.028em] text-ink">Channel command center</h3>
                  <p className="m-0 mt-[6px] text-[14.5px] text-dim">Connection health across every destination</p>
                </div>
                <span className="inline-flex items-center h-[32px] px-[13px] py-0 border border-[#E2DCD3] rounded-[7px] bg-white text-[13px] text-[#5B554E] flex-none">
                  Sample workspace
                </span>
              </div>
              <div className="flex items-center justify-between gap-[16px] mt-[18px] px-[16px] py-[13px] border border-[#E9E3DA] rounded-10 bg-white">
                <span className="flex items-center gap-[10px] text-[14.5px] text-[#4B4741]">
                  <CircleCheckGlyph2 size={19} className="flex-none" />
                  <span>
                    <strong className="font-semibold text-ink">7 / 10</strong> connected
                  </span>
                </span>
                <span className="flex items-center gap-[9px] text-[14.5px] text-[#4B4741]">
                  <span className="w-[8px] h-[8px] rounded-full bg-check flex-none"></span>All connected channels
                  healthy
                </span>
                <span className="flex items-center gap-[9px] text-[14.5px] text-dim">
                  <svg
                    width="17"
                    height="17"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#8A857F"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                    className="flex-none"
                  >
                    <circle cx="12" cy="12" r="9"></circle>
                    <path d="M12 7.5V12l3 1.8"></path>
                  </svg>
                  Last checked 4 min ago
                </span>
              </div>
              <div className="grid grid-cols-[1fr_1fr] gap-[14px] mt-[14px]">
                <div className="border border-[#E9E3DA] rounded-10 bg-white overflow-hidden">
                  <button
                    className="hover:bg-[#f7f4ef] flex items-center gap-[12px] w-full min-h-[46px] px-[13px] py-0 [font-family:inherit] text-left border-0 border-b border-b-[#F1EDE6] cursor-pointer bg-[#FBF6F1] outline-offset-[-2px]"
                    type="button"
                  >
                    <GoogleG size={19} className="flex-none" />
                    <span className="w-[14px] text-[13px] text-[#A19A90] flex-none">1</span>
                    <span className="flex-1 min-w-0 text-[14.5px] text-night-line">Google Shopping</span>
                    <span className="inline-flex items-center gap-[6px] h-[24px] px-[9px] py-0 border border-[#CDE9D9] rounded-[5px] bg-[#F1FAF5] text-[12.5px] text-ok-text flex-none">
                      <Check size={12} strokeWidth={2.6} aria-hidden="true" />
                      Connected
                    </span>
                  </button>
                  <button
                    className="hover:bg-[#f7f4ef] flex items-center gap-[12px] w-full min-h-[46px] px-[13px] py-0 [font-family:inherit] text-left border-0 border-b border-b-[#F1EDE6] cursor-pointer bg-white outline-offset-[-2px]"
                    type="button"
                  >
                    <GoogleG2 size={19} className="flex-none" />
                    <span className="w-[14px] text-[13px] text-[#A19A90] flex-none">2</span>
                    <span className="flex-1 min-w-0 text-[14.5px] text-night-line">Google Ads</span>
                    <span className="inline-flex items-center gap-[6px] h-[24px] px-[9px] py-0 border border-[#CDE9D9] rounded-[5px] bg-[#F1FAF5] text-[12.5px] text-ok-text flex-none">
                      <Check size={12} strokeWidth={2.6} aria-hidden="true" />
                      Connected
                    </span>
                  </button>
                  <button
                    className="hover:bg-[#f7f4ef] flex items-center gap-[12px] w-full min-h-[46px] px-[13px] py-0 [font-family:inherit] text-left border-0 border-b border-b-[#F1EDE6] cursor-pointer bg-white outline-offset-[-2px]"
                    type="button"
                  >
                    <MicrosoftLogo size={18} className="flex-none" />
                    <span className="w-[14px] text-[13px] text-[#A19A90] flex-none">3</span>
                    <span className="flex-1 min-w-0 text-[14.5px] text-night-line">Microsoft Bing</span>
                    <span className="inline-flex items-center gap-[6px] h-[24px] px-[9px] py-0 border border-[#E2DCD3] rounded-[5px] bg-[#F4F2EF] text-[12.5px] text-dim flex-none">
                      <CirclePlusGlyph size={12} />
                      Ready to connect
                    </span>
                  </button>
                  <button
                    className="hover:bg-[#f7f4ef] flex items-center gap-[12px] w-full min-h-[46px] px-[13px] py-0 [font-family:inherit] text-left border-0 border-b border-b-[#F1EDE6] cursor-pointer bg-white outline-offset-[-2px]"
                    type="button"
                  >
                    <MetaLogo size={19} className="flex-none" />
                    <span className="w-[14px] text-[13px] text-[#A19A90] flex-none">4</span>
                    <span className="flex-1 min-w-0 text-[14.5px] text-night-line">Meta</span>
                    <span className="inline-flex items-center gap-[6px] h-[24px] px-[9px] py-0 border border-[#CDE9D9] rounded-[5px] bg-[#F1FAF5] text-[12.5px] text-ok-text flex-none">
                      <Check size={12} strokeWidth={2.6} aria-hidden="true" />
                      Connected
                    </span>
                  </button>
                  <button
                    className="hover:bg-[#f7f4ef] flex items-center gap-[12px] w-full min-h-[46px] px-[13px] py-0 [font-family:inherit] text-left border-0 cursor-pointer bg-white outline-offset-[-2px]"
                    type="button"
                  >
                    <Glyph2 size={18} className="flex-none" />
                    <span className="w-[14px] text-[13px] text-[#A19A90] flex-none">5</span>
                    <span className="flex-1 min-w-0 text-[14.5px] text-night-line">TikTok</span>
                    <span className="inline-flex items-center gap-[6px] h-[24px] px-[9px] py-0 border border-[#CDE9D9] rounded-[5px] bg-[#F1FAF5] text-[12.5px] text-ok-text flex-none">
                      <Check size={12} strokeWidth={2.6} aria-hidden="true" />
                      Connected
                    </span>
                  </button>
                </div>
                <div className="border border-[#E9E3DA] rounded-10 bg-white overflow-hidden">
                  <button
                    className="hover:bg-[#f7f4ef] flex items-center gap-[12px] w-full min-h-[46px] px-[13px] py-0 [font-family:inherit] text-left border-0 border-b border-b-[#F1EDE6] cursor-pointer bg-white outline-offset-[-2px]"
                    type="button"
                  >
                    <PinterestP size={19} className="flex-none" />
                    <span className="w-[14px] text-[13px] text-[#A19A90] flex-none">6</span>
                    <span className="flex-1 min-w-0 text-[14.5px] text-night-line">Pinterest</span>
                    <span className="inline-flex items-center gap-[6px] h-[24px] px-[9px] py-0 border border-[#CDE9D9] rounded-[5px] bg-[#F1FAF5] text-[12.5px] text-ok-text flex-none">
                      <Check size={12} strokeWidth={2.6} aria-hidden="true" />
                      Connected
                    </span>
                  </button>
                  <button
                    className="hover:bg-[#f7f4ef] flex items-center gap-[12px] w-full min-h-[46px] px-[13px] py-0 [font-family:inherit] text-left border-0 border-b border-b-[#F1EDE6] cursor-pointer bg-white outline-offset-[-2px]"
                    type="button"
                  >
                    <SnapchatGhost size={19} className="flex-none" />
                    <span className="w-[14px] text-[13px] text-[#A19A90] flex-none">7</span>
                    <span className="flex-1 min-w-0 text-[14.5px] text-night-line">Snapchat</span>
                    <span className="inline-flex items-center gap-[6px] h-[24px] px-[9px] py-0 border border-[#E2DCD3] rounded-[5px] bg-[#F4F2EF] text-[12.5px] text-dim flex-none">
                      <CirclePlusGlyph size={12} />
                      Ready to connect
                    </span>
                  </button>
                  <button
                    className="hover:bg-[#f7f4ef] flex items-center gap-[12px] w-full min-h-[46px] px-[13px] py-0 [font-family:inherit] text-left border-0 border-b border-b-[#F1EDE6] cursor-pointer bg-white outline-offset-[-2px]"
                    type="button"
                  >
                    <span
                      className="inline-flex flex-col items-center justify-center w-[19px] flex-none"
                      aria-hidden="true"
                    >
                      <span className="text-[16px] font-bold text-[#18181B] leading-[.8]">a</span>
                      <AmazonSmile width={18} height={6} />
                    </span>
                    <span className="w-[14px] text-[13px] text-[#A19A90] flex-none">8</span>
                    <span className="flex-1 min-w-0 text-[14.5px] text-night-line">Amazon</span>
                    <span className="inline-flex items-center gap-[6px] h-[24px] px-[9px] py-0 border border-[#EBD9BC] rounded-[5px] bg-[#FDF6EC] text-[12.5px] text-[#8A5A1B] flex-none">
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.9"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        <circle cx="9" cy="12" r="3.4"></circle>
                        <path d="M12.4 12H21"></path>
                        <path d="M17.5 12v3"></path>
                      </svg>
                      Credentials required
                    </span>
                  </button>
                  <button
                    className="hover:bg-[#f7f4ef] flex items-center gap-[12px] w-full min-h-[46px] px-[13px] py-0 [font-family:inherit] text-left border-0 border-b border-b-[#F1EDE6] cursor-pointer bg-white outline-offset-[-2px]"
                    type="button"
                  >
                    <WalmartSpark size={19} className="flex-none" />
                    <span className="w-[14px] text-[13px] text-[#A19A90] flex-none">9</span>
                    <span className="flex-1 min-w-0 text-[14.5px] text-night-line">Walmart</span>
                    <span className="inline-flex items-center gap-[6px] h-[24px] px-[9px] py-0 border border-[#CDE9D9] rounded-[5px] bg-[#F1FAF5] text-[12.5px] text-ok-text flex-none">
                      <Check size={12} strokeWidth={2.6} aria-hidden="true" />
                      Connected
                    </span>
                  </button>
                  <button
                    className="hover:bg-[#f7f4ef] flex items-center gap-[12px] w-full min-h-[46px] px-[13px] py-0 [font-family:inherit] text-left border-0 cursor-pointer bg-white outline-offset-[-2px]"
                    type="button"
                  >
                    <span
                      className="inline-flex items-baseline text-[15px] font-bold tracking-[-.03em] flex-none"
                      aria-hidden="true"
                    >
                      <span className="text-[#E53238]">e</span>
                      <span className="text-[#0064D2]">b</span>
                      <span className="text-[#F5AF02]">a</span>
                      <span className="text-[#86B817]">y</span>
                    </span>
                    <span className="w-[14px] text-[13px] text-[#A19A90] flex-none">10</span>
                    <span className="flex-1 min-w-0 text-[14.5px] text-night-line">eBay</span>
                    <span className="inline-flex items-center gap-[6px] h-[24px] px-[9px] py-0 border border-[#CDE9D9] rounded-[5px] bg-[#F1FAF5] text-[12.5px] text-ok-text flex-none">
                      <Check size={12} strokeWidth={2.6} aria-hidden="true" />
                      Connected
                    </span>
                  </button>
                </div>
              </div>
              <div
                className="flex items-center gap-[16px] mt-[14px] px-[16px] py-[15px] border border-[#E9E3DA] rounded-10 bg-white"
                aria-live="polite"
              >
                <span className="w-[30px] h-[30px] flex-none flex items-center justify-center">
                  <GoogleG size={26} />
                </span>
                <span className="flex-1 min-w-0">
                  <span className="block text-[17px] font-bold tracking-[-.02em] text-ink">Google Shopping</span>
                  <span className="block mt-[4px] text-[13.5px] text-dim">
                    OAuth connected · Feed publishing active · Last sync 4 min ago
                  </span>
                </span>
                <span className="flex items-center gap-[9px] text-[14.5px] font-medium text-night-line flex-none">
                  <span className="w-[8px] h-[8px] rounded-full flex-none bg-check"></span>Healthy
                </span>
                <button
                  className="hover:border-[#171514] active:bg-[#f2eee8] [font-family:inherit] text-[14px] font-semibold text-ink bg-white border border-[#D8D0C5] rounded-8 px-[15px] py-[11px] cursor-pointer flex-none min-h-[44px]"
                  type="button"
                >
                  Manage connection
                </button>
              </div>
            </div>
            <div className="mt-[16px] pt-[22px] pb-[20px] px-[24px] bg-night-card rounded-12">
              <div className="grid grid-cols-4 items-center">
                <span className="flex items-center gap-[12px] pr-[16px]">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#fff"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                    className="flex-none"
                  >
                    <path d="M12 3l7.5 3v5.5c0 4.4-3.1 8.2-7.5 9.5-4.4-1.3-7.5-5.1-7.5-9.5V6z"></path>
                    <rect x="9.4" y="10.6" width="5.2" height="4.4" rx="1"></rect>
                    <path d="M10.6 10.6V9.6a1.4 1.4 0 0 1 2.8 0v1"></path>
                  </svg>
                  <span className="text-[14.5px] leading-[1.3] text-white">
                    Read-only
                    <br />
                    Shopify access
                  </span>
                </span>
                <span className="flex items-center gap-[12px] px-[16px] py-0 border-l border-l-[#2E2B28]">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#fff"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                    className="flex-none"
                  >
                    <rect x="4.5" y="10.5" width="15" height="10" rx="2"></rect>
                    <path d="M8 10.5V7.8a4 4 0 0 1 8 0v2.7"></path>
                  </svg>
                  <span className="text-[14.5px] leading-[1.3] text-white">
                    OAuth
                    <br />
                    where supported
                  </span>
                </span>
                <span className="flex items-center gap-[12px] px-[16px] py-0 border-l border-l-[#2E2B28]">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#fff"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                    className="flex-none"
                  >
                    <path d="M14 3H7a1.6 1.6 0 0 0-1.6 1.6v14.8A1.6 1.6 0 0 0 7 21h10a1.6 1.6 0 0 0 1.6-1.6V7.6z"></path>
                    <path d="M13.8 3v4.6h4.8"></path>
                    <path d="M9.4 15.4l1.8 1.8 3.4-3.6"></path>
                  </svg>
                  <span className="text-[14.5px] leading-[1.3] text-white">
                    GDPR export
                    <br />
                    and erasure
                  </span>
                </span>
                <span className="flex items-center gap-[12px] pl-[16px] border-l border-l-[#2E2B28]">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#fff"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                    className="flex-none"
                  >
                    <path d="M3 12.5h3.4L9 6.5l3 11 2.6-7 1.6 2h4.8"></path>
                  </svg>
                  <span className="text-[14.5px] leading-[1.3] text-white">
                    Continuous
                    <br />
                    integration health
                  </span>
                </span>
              </div>
              <div className="h-px mt-[20px] mb-[18px] mx-0 bg-[#2E2B28]"></div>
              <p className="m-0 text-center text-[31px] font-extrabold tracking-[-.03em] text-white">
                Your catalog stays yours.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section
        className="leading-normal font-home relative z-[1] bg-paper p-0 pt-[88px] overflow-hidden scroll-mt-[88px] max-md:pt-[56px]"
        id="pricing"
      >
        <div className="relative mx-auto w-full max-w-[1440px]">
          <svg
            width="1440"
            height="620"
            viewBox="0 0 1440 620"
            fill="none"
            aria-hidden="true"
            className="absolute left-0 top-0 opacity-45 pointer-events-none"
          >
            <g stroke="#E7E1D7" strokeWidth="1" fill="none">
              <path d="M-60 120C160 60 300 170 520 110 740 50 900 160 1180 80 1320 40 1420 60 1500 40"></path>
              <path d="M-60 180C160 120 300 230 520 170 740 110 900 220 1180 140 1320 100 1420 120 1500 100"></path>
              <path d="M-60 540C160 480 300 590 520 530 740 470 900 580 1180 500 1320 460 1420 480 1500 460"></path>
            </g>
          </svg>
          <div className="relative z-[2] flex flex-col items-center px-[max(20px,calc(var(--gutter)-10px))] py-0">
            <p className="m-0 mb-[18px] text-[13px] font-semibold tracking-[.14em] uppercase text-rust-button">
              Simple, transparent pricing
            </p>
            <h2 className="m-0 max-w-[820px] text-center text-[52px] leading-[1.05] font-extrabold tracking-[-.035em] text-ink text-pretty max-xl:text-[length:clamp(30px,4.06vw,52px)]">
              Choose the plan that fits your catalog.
            </h2>
            <p className="m-0 mt-[22px] max-w-[700px] text-center text-[17.5px] leading-[1.55] text-[#5B554E] text-pretty max-md:text-[16px]">
              Start with a 14-day free trial. Choose your catalog tier, then scale as your SKU count grows.
            </p>
            <p className="m-0 mt-[12px] text-[15px] text-faint">Billed monthly through Shopify · No card required</p>
            <div className="flex items-stretch justify-center gap-[22px] mt-[44px] w-full max-w-[1020px]">
              <div className="flex-1 min-w-0 flex flex-col items-center mt-[14px] p-[26px] pt-[32px] bg-[#FBF9F6] border border-[#E6E1D9] rounded-12 shadow-[0_1px_2px_rgba(30,24,16,.04)]">
                <h3 className="m-0 text-[29px] font-bold tracking-[-.025em] text-ink">Starter</h3>
                <div className="flex items-baseline justify-center gap-[2px] mt-[10px]">
                  <span className="text-[27px] font-semibold text-ink self-start pt-[8px]">$</span>
                  <span className="text-[56px] leading-none font-extrabold tracking-[-.04em] text-ink max-xl:text-[length:clamp(30px,4.38vw,56px)]">
                    49
                  </span>
                  <span className="ml-[7px] text-[16px] text-dim">/ month</span>
                </div>
                <p className="m-0 mt-[14px] text-center text-[15.5px] leading-[1.45] text-[#5B554E] text-pretty">
                  For growing catalogs
                </p>
                <div className="w-full h-px m-0 mt-[20px] bg-[#E9E3DA]"></div>
                <p className="m-0 mt-[16px] text-center text-[14px] text-faint">SKU-based catalog allowance</p>
                <a
                  className="hover:border-[#171514] active:bg-[#f2eee8] flex items-center justify-center w-full min-h-[48px] mt-[18px] px-[18px] py-0 rounded-8 text-[16px] font-semibold border border-[#C8C1B6] bg-white text-ink"
                  href="#start-free-trial"
                >
                  Start free trial
                </a>
              </div>
              <div className="flex-1 min-w-0 flex flex-col items-center pt-[36px] pb-[30px] px-[26px] bg-[#FDFBF8] border-[1.5px] border-rust-button rounded-12 shadow-[0_18px_40px_rgba(30,24,16,.10),0_2px_6px_rgba(30,24,16,.05)]">
                <h3 className="m-0 text-[29px] font-bold tracking-[-.025em] text-ink">Growth</h3>
                <div className="flex items-baseline justify-center gap-[2px] mt-[10px]">
                  <span className="text-[27px] font-semibold text-ink self-start pt-[8px]">$</span>
                  <span className="text-[56px] leading-none font-extrabold tracking-[-.04em] text-ink max-xl:text-[length:clamp(30px,4.38vw,56px)]">
                    149
                  </span>
                  <span className="ml-[7px] text-[16px] text-dim">/ month</span>
                </div>
                <p className="m-0 mt-[14px] text-center text-[15.5px] leading-[1.45] text-[#5B554E] text-pretty">
                  For established multi-channel operations
                </p>
                <div className="w-full h-px m-0 mt-[20px] bg-[#EDE4DA]"></div>
                <p className="m-0 mt-[16px] text-center text-[14px] text-faint">Expanded SKU allowance</p>
                <a
                  className="hover:bg-[#a84613] active:bg-[#943c0c] flex items-center justify-center w-full min-h-[48px] mt-[18px] px-[18px] py-0 rounded-8 text-[16px] font-semibold border border-rust-button bg-rust-button text-white"
                  href="#start-free-trial"
                >
                  Start free trial
                </a>
              </div>
              <div className="flex-1 min-w-0 flex flex-col items-center mt-[14px] p-[26px] pt-[32px] bg-[#FBF9F6] border border-[#E6E1D9] rounded-12 shadow-[0_1px_2px_rgba(30,24,16,.04)]">
                <h3 className="m-0 text-[29px] font-bold tracking-[-.025em] text-ink">Scale</h3>
                <div className="flex items-baseline justify-center gap-[2px] mt-[10px]">
                  <span className="text-[27px] font-semibold text-ink self-start pt-[8px]">$</span>
                  <span className="text-[56px] leading-none font-extrabold tracking-[-.04em] text-ink max-xl:text-[length:clamp(30px,4.38vw,56px)]">
                    399
                  </span>
                  <span className="ml-[7px] text-[16px] text-dim">/ month</span>
                </div>
                <p className="m-0 mt-[14px] text-center text-[15.5px] leading-[1.45] text-[#5B554E] text-pretty">
                  For high-volume catalogs
                </p>
                <div className="w-full h-px m-0 mt-[20px] bg-[#E9E3DA]"></div>
                <p className="m-0 mt-[16px] text-center text-[14px] text-faint">Scale-level SKU allowance</p>
                <Link
                  className="hover:border-[#171514] active:bg-[#f2eee8] flex items-center justify-center w-full min-h-[48px] mt-[18px] px-[18px] py-0 rounded-8 text-[16px] font-semibold border border-[#C8C1B6] bg-white text-ink"
                  href="/contact"
                >
                  Talk to sales
                </Link>
              </div>
            </div>
            <div className="flex items-center justify-center gap-0 mt-[34px]">
              <span className="flex items-center gap-[11px] px-[26px] py-0">
                <CircleCheckGlyph2 size={21} strokeWidth="1.9" className="flex-none" />
                <span className="text-[16px] text-night-line">14-day free trial</span>
              </span>
              <span className="flex items-center gap-[11px] px-[26px] py-0 border-l border-l-[#E2DCD3]">
                <CircleCheckGlyph2 size={21} strokeWidth="1.9" className="flex-none" />
                <span className="text-[16px] text-night-line">No card required</span>
              </span>
              <span className="flex items-center gap-[11px] px-[26px] py-0 border-l border-l-[#E2DCD3]">
                <CircleCheckGlyph2 size={21} strokeWidth="1.9" className="flex-none" />
                <span className="text-[16px] text-night-line">Shopify billing</span>
              </span>
              <span className="flex items-center gap-[11px] px-[26px] py-0 border-l border-l-[#E2DCD3]">
                <CircleCheckGlyph2 size={21} strokeWidth="1.9" className="flex-none" />
                <span className="text-[16px] text-night-line">Metered by SKU count</span>
              </span>
            </div>
            <Link
              className="hover:text-[#a0431a] inline-flex items-center gap-[9px] mt-[26px] mb-[66px] mx-0 text-[16px] font-semibold text-rust-button"
              href="/pricing"
            >
              Compare plan details
              <ArrowRight size={17} strokeWidth={1.7} aria-hidden="true" className="flex-none" />
            </Link>
          </div>

        </div>
      </section>

      <PreFooterCta trialHref="#start-free-trial" />
      <SiteFooter id="resources" />
    </>
  );
}
