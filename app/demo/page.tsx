import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Check, ShieldCheck } from "lucide-react";
import { ClockGlyph } from "@/components/brand-icons";
import { SiteHeader } from "@/components/site/site-header";
import { PreFooterCta } from "@/components/site/pre-footer-cta";
import { SiteFooter } from "@/components/site/site-footer";
import { DemoForm } from "@/components/forms/demo-form";

export const metadata: Metadata = {
  title: "Book a demo — See Scout on watch, live",
  description:
    "A 30-minute walkthrough, presented live by the team behind Scout. We take a real catalog through Diagnostics, Feed Management and Price Intelligence. You bring the questions.",
};

const check =
  "box-content mt-px inline-flex h-[24px] w-[24px] flex-none items-center justify-center rounded-full border border-tint-line bg-rust-tint";
const stepCard = "flex flex-col gap-[14px] rounded-12 border border-line bg-white p-[28px] pb-[30px]";
const qCard = "flex flex-col gap-[18px] rounded-12 border border-night-line bg-night-card p-[28px] pb-[30px]";

// Source: Book-a-Demo.dc.html -> /demo
export default function BookADemoPage() {
  return (
    <>
      <SiteHeader demoHref="#form" />

      {/* Demo hero */}
      <section className="relative bg-paper px-[70px] pt-[44px] pb-0 max-lg:px-[40px] max-xs:px-[20px]">
        <div className="grid grid-cols-[minmax(0,1fr)_600px] items-start gap-[70px] max-xl:grid-cols-[minmax(0,1fr)_minmax(0,560px)] max-xl:gap-[40px] max-lg:grid-cols-1">
          <div className="pt-[22px] pb-[20px]">
            <p className="m-0 mb-[20px] text-[13px] font-semibold tracking-[.14em] text-rust uppercase">Book a demo</p>
            <h1 className="m-0 text-[58px] leading-[1.04] font-extrabold tracking-[-.038em] text-pretty max-xl:text-[length:clamp(36px,4.53vw,58px)]">
              See Scout on watch, live.
            </h1>
            <p className="m-0 mt-[22px] max-w-[540px] text-[18px] leading-[1.55] text-pretty text-body max-md:text-[16px]">
              A 30-minute walkthrough, presented live by the team behind Scout. We take a real catalog through
              Diagnostics, Feed Management and Price Intelligence. You bring the questions.
            </p>
            <p className="m-0 mt-[30px] text-[13px] font-bold tracking-[.12em] text-faint uppercase">In the demo you’ll see</p>
            <ul className="m-0 mt-[14px] flex max-w-[540px] list-none flex-col gap-[12px] p-0">
              {[
                "Feed errors caught, explained and ranked by the revenue at stake",
                "One catalog published to Google, Meta, TikTok and more",
                "Price and conversion signals side by side with each product",
              ].map((t) => (
                <li key={t} className="flex items-start gap-[12px] text-[16.5px] leading-[1.45] text-ink">
                  <span className={check}>
                    <Check size={13} strokeWidth={2.5} aria-hidden="true" className="text-rust-button" />
                  </span>
                  {t}
                </li>
              ))}
            </ul>
            <div className="mt-[28px] flex items-center gap-[22px] text-[14.5px] text-dim max-md:flex-wrap max-md:gap-[12px]">
              <span className="inline-flex items-center gap-[8px]">
                <ClockGlyph size={17} />
                30 minutes
              </span>
              <span className="inline-flex items-center gap-[8px]">
                <ShieldCheck size={17} strokeWidth={1.8} aria-hidden="true" className="text-faint" />
                Presented by us — nothing to install or connect
              </span>
              <span className="inline-flex items-center gap-[8px]">
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#8A857F" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"></path>
                  <path d="m9 12 2 2 4-4"></path>
                </svg>
                No card
              </span>
            </div>
            {/* In-flow mascot; overlaps 50px into the section below on desktop. Shorter on tablets, hidden on phones. */}
            <Image
              src="/assets/scout-clipboard.png"
              width={320}
              height={400}
              alt="Meerkat Scout with a clipboard, presenting the booking form"
              className="pointer-events-none mt-[24px] mr-0 -mb-[50px] -ml-[26px] block h-[400px] w-auto max-w-none max-lg:mb-0 max-lg:h-[300px] max-md:hidden"
            />
          </div>
          <DemoForm />
        </div>
      </section>

      {/* How it works */}
      <section className="bg-paper px-[70px] pt-[80px] pb-0 max-lg:px-[40px] max-md:pt-[56px] max-xs:px-[20px]">
        <div className="flex items-end justify-between gap-[40px] max-md:flex-col max-md:items-start max-md:gap-[16px]">
          <div>
            <p className="m-0 mb-[18px] text-[13px] font-semibold tracking-[.14em] text-rust uppercase">How a demo works</p>
            <h2 className="m-0 text-[44px] leading-[1.06] font-extrabold tracking-[-.035em] max-xl:text-[length:clamp(30px,3.44vw,44px)]">
              Thirty minutes, three steps.
            </h2>
          </div>
          <p className="m-0 mb-[6px] max-w-[420px] text-[16.5px] leading-[1.5] text-pretty text-body">
            A live walkthrough of the product, built around your questions.
          </p>
        </div>
        <div className="mt-[36px] grid grid-cols-3 gap-[18px] max-lg:grid-cols-2 max-md:grid-cols-1">
          <div className={stepCard}>
            <span className="font-mono text-[13px] font-semibold text-rust">01</span>
            <span className="text-[22px] font-bold tracking-[-.02em]">Tell us about your store</span>
            <span className="text-[15.5px] leading-[1.55] text-pretty text-body">
              A few details when you book — your channels, your volume, what you want to see — so the walkthrough fits.
            </span>
          </div>
          <div className={stepCard}>
            <span className="font-mono text-[13px] font-semibold text-rust">02</span>
            <span className="text-[22px] font-bold tracking-[-.02em]">Watch Scout work</span>
            <span className="text-[15.5px] leading-[1.55] text-pretty text-body">
              We take a real catalog through Diagnostics, Feed Management and Price Intelligence, live.
            </span>
          </div>
          <div className={stepCard}>
            <span className="font-mono text-[13px] font-semibold text-rust">03</span>
            <span className="text-[22px] font-bold tracking-[-.02em]">Ask anything</span>
            <span className="text-[15.5px] leading-[1.55] text-pretty text-body">
              Ten minutes for your questions, then a summary by email with a link to start your 14-day trial.
            </span>
          </div>
        </div>
      </section>

      {/* Questions we answer */}
      <section className="relative mt-[88px] overflow-hidden bg-night px-[70px] pt-[88px] pb-[90px] max-lg:px-[40px] max-md:mt-[56px] max-md:pt-[56px] max-md:pb-[56px] max-xs:px-[20px]">
        <div
          className="pointer-events-none absolute top-0 -right-[200px] h-[800px] w-[1000px] bg-[radial-gradient(closest-side,rgba(160,67,26,.12),transparent_70%)]"
          aria-hidden="true"
        ></div>
        <div className="relative z-[2]">
          <p className="m-0 mb-[22px] text-[13px] font-semibold tracking-[.14em] text-rust-bright uppercase">Bring a question</p>
          <h2 className="m-0 max-w-[760px] text-[52px] leading-[1.06] font-extrabold tracking-[-.035em] text-pretty text-white max-xl:text-[length:clamp(30px,4.06vw,52px)]">
            Come with a question. Leave with the answer.
          </h2>
          <p className="m-0 mt-[14px] max-w-[640px] text-[17.5px] leading-[1.5] text-pretty text-night-muted max-md:text-[16px]">
            The three we hear most, and what we’ll show for each.
          </p>
          <div className="mt-[40px] grid grid-cols-3 gap-[18px] max-lg:grid-cols-2 max-md:grid-cols-1">
            {[
              ["“Why do products get disapproved on Google Shopping?”", "Diagnostics on a live catalog: every error, the products it blocks, and how a fix ships back to the feed."],
              ["“How do we add a channel without doubling the work?”", "One catalog mapped to each channel’s requirements and published from one place — and what happens when a rule changes."],
              ["“How do we know if we’re priced above the market?”", "Price Intelligence on a set of products: where each sits against the market median, and what to do about it."],
            ].map(([q, a]) => (
              <div key={q} className={qCard}>
                <span className="text-[22px] leading-[1.25] font-bold tracking-[-.02em] text-pretty text-white">{q}</span>
                <span className="h-px bg-night-line"></span>
                <span className="flex flex-col gap-[6px]">
                  <span className="text-[12px] font-bold tracking-[.12em] text-amber uppercase">On screen</span>
                  <span className="text-[15.5px] leading-[1.55] text-pretty text-night-text">{a}</span>
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-paper px-[70px] pt-[88px] pb-[96px] max-lg:px-[40px] max-md:pt-[56px] max-md:pb-[56px] max-xs:px-[20px]">
        <div className="grid grid-cols-[380px_minmax(0,1fr)] items-start gap-[70px] max-lg:grid-cols-1 max-lg:gap-[36px]">
          <div>
            <p className="m-0 mb-[18px] text-[13px] font-semibold tracking-[.14em] text-rust uppercase">Before you book</p>
            <h2 className="m-0 text-[44px] leading-[1.06] font-extrabold tracking-[-.035em] text-pretty max-xl:text-[length:clamp(30px,3.44vw,44px)]">
              Good to know.
            </h2>
            <p className="m-0 mt-[18px] text-[16.5px] leading-[1.5] text-pretty text-body">
              Anything else?{" "}
              <Link className="text-rust-button underline underline-offset-[3px]" href="/contact">
                Ask us
              </Link>{" "}
              and we’ll answer before the call.
            </p>
          </div>
          <dl className="m-0 grid grid-cols-[1fr_1fr] gap-x-[40px] gap-y-[34px] max-md:grid-cols-1">
            {[
              ["Do I need to connect my store?", "No. The demo runs on our own catalog, presented live by us — nothing to install, nothing to connect. Your store only comes into it when you start a trial."],
              ["Who should join?", "Whoever owns the feed — a founder, a marketer, or the agency running your channels. Bring a developer if your product data is custom."],
              ["How long is it?", "Thirty minutes. We keep the last ten for your questions."],
              ["What happens after?", "You get a short summary by email and a link to start a 14-day trial. No follow-up calls unless you ask for one."],
            ].map(([q, a]) => (
              <div key={q} className="flex flex-col gap-[8px]">
                <dt className="text-[18px] font-bold tracking-[-.015em]">{q}</dt>
                <dd className="m-0 text-[15.5px] leading-[1.55] text-pretty text-body">{a}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <PreFooterCta variant="demo" />
      <SiteFooter />
    </>
  );
}
