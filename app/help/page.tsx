import Link from "next/link";
import { SiteHeader } from "@/components/site/site-header";
import { PreFooterCta } from "@/components/site/pre-footer-cta";
import { SiteFooter } from "@/components/site/site-footer";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Help Center — Getting started with Scout",
  description: "What actually happens from install to your first live listing, and how to reach a person when something isn't covered.",
};

// Source: Help-Center.dc.html -> /help
export default function HelpCenterPage() {
  return (
    <>
      <SiteHeader active="resources" />

      {/* Help hero */}
      <section className="bg-paper pt-[84px] pb-[56px] px-gutter grid grid-cols-[1fr_1fr] gap-[60px] items-end max-md:pt-[56px] max-lg:grid-cols-1">
        <div>
          <p className="m-0 mb-[22px] text-[13px] font-semibold tracking-[.14em] uppercase text-rust">
            Resources · Help center
          </p>
          <h1 className="m-0 text-[57px] leading-[1.08] font-extrabold tracking-[-.035em] text-pretty max-xl:text-[length:clamp(36px,4.45vw,57px)]">
            Getting started with Scout, start to first feed.
          </h1>
        </div>
        <div className="pb-[6px]">
          <p className="m-0 text-[16.5px] leading-[1.65] text-body">
            Scout is new and has no support archive yet, so this page doesn&#39;t pretend to be a knowledge base. It
            walks through what actually happens from install to your first live listing, and how to reach a person when
            something isn&#39;t covered. Articles will be added here as real questions come in.
          </p>
        </div>
      </section>

      {/* Help body */}
      <section className="bg-paper pt-[24px] pb-[40px] px-gutter grid grid-cols-[260px_minmax(0,820px)] gap-[96px] items-start max-xl:grid-cols-[260px_minmax(0,1fr)] max-xl:gap-[48px] max-lg:grid-cols-1">
        <nav className="sticky top-[104px] flex flex-col gap-[2px]" aria-label="On this page">
          <p className="m-0 mb-[14px] text-[12px] font-bold tracking-[.14em] uppercase text-faint">Getting started</p>
          <a
            className="text-[14.5px] leading-[1.4] text-nav px-0 py-[7px] border-t border-t-line-strong"
            href="#install"
          >
            1 Installing Scout
          </a>
          <a
            className="text-[14.5px] leading-[1.4] text-nav px-0 py-[7px] border-t border-t-line-strong"
            href="#first-channel"
          >
            2 Connecting your first channel
          </a>
          <a
            className="text-[14.5px] leading-[1.4] text-nav px-0 py-[7px] border-t border-t-line-strong"
            href="#first-sync"
          >
            3 What happens on first sync
          </a>
          <a
            className="text-[14.5px] leading-[1.4] text-nav px-0 py-[7px] border-t border-t-line-strong"
            href="#first-feed"
          >
            4 Your first feed, step by step
          </a>
          <a className="text-[14.5px] leading-[1.4] text-nav px-0 py-[7px] border-t border-t-line-strong" href="#trial">
            5 What the trial includes
          </a>
          <a
            className="text-[14.5px] leading-[1.4] text-nav px-0 py-[7px] border-t border-t-line-strong border-b border-b-line-strong"
            href="#human"
          >
            6 Reaching a human
          </a>
          <div className="mt-[28px] flex flex-col gap-[8px]">
            <p className="m-0 mb-[6px] text-[12px] font-bold tracking-[.14em] uppercase text-faint">Articles</p>
            <p className="m-0 text-[14px] leading-[1.5] text-faint">
              None yet. This column fills in as real questions arrive.
            </p>
          </div>
        </nav>
        <article className="flex flex-col">
          <section
            className="grid grid-cols-[120px_1fr] gap-[30px] px-0 py-[36px] border-t border-t-line-strong scroll-mt-[104px] max-lg:grid-cols-1"
            id="install"
          >
            <span className="text-[13px] font-bold tracking-[.14em] uppercase text-rust pt-[6px]">01</span>
            <div className="flex flex-col gap-[14px]">
              <h2 className="m-0 text-[32px] leading-[1.15] font-bold tracking-[-.025em] text-ink">Installing Scout</h2>
              <p className="m-0 text-[16.5px] leading-[1.65] text-nav">
                Install from the Shopify App Store. Shopify will show the permissions Scout asks for: read access to
                products, variants, inventory, and basic store details. Every permission is read-only — Scout cannot
                create, edit, or delete anything in your store. Order access is not requested at install; you&#39;ll
                only be asked for it if you later turn on Conversion Intelligence.
              </p>
              <p className="m-0 text-[16.5px] leading-[1.65] text-nav">
                After you approve, Scout opens inside your Shopify admin. There is no separate login.
              </p>
            </div>
          </section>
          <section
            className="grid grid-cols-[120px_1fr] gap-[30px] px-0 py-[36px] border-t border-t-line-strong scroll-mt-[104px] max-lg:grid-cols-1"
            id="first-channel"
          >
            <span className="text-[13px] font-bold tracking-[.14em] uppercase text-rust pt-[6px]">02</span>
            <div className="flex flex-col gap-[14px]">
              <h2 className="m-0 text-[32px] leading-[1.15] font-bold tracking-[-.025em] text-ink">
                Connecting your first channel
              </h2>
              <p className="m-0 text-[16.5px] leading-[1.65] text-nav">
                From the Channels screen, pick a destination. Most connect with a single OAuth sign-in; Meta, TikTok,
                and Snapchat add a step where you choose the business, advertiser, or ad account that should own the
                catalog; Walmart asks you to paste API keys generated in Seller Center. Each channel page explains its
                own steps.
              </p>
              <div className="grid grid-cols-5 gap-[10px] max-lg:grid-cols-2 max-md:grid-cols-1">
                <Link
                  className="block px-[14px] py-[12px] bg-white border border-line rounded-8 text-[14px] font-semibold text-ink text-center"
                  href="/channels/google-shopping"
                >
                  Google Shopping
                </Link>
                <Link
                  className="block px-[14px] py-[12px] bg-white border border-line rounded-8 text-[14px] font-semibold text-ink text-center"
                  href="/channels/meta"
                >
                  Meta
                </Link>
                <Link
                  className="block px-[14px] py-[12px] bg-white border border-line rounded-8 text-[14px] font-semibold text-ink text-center"
                  href="/channels/amazon"
                >
                  Amazon
                </Link>
                <Link
                  className="block px-[14px] py-[12px] bg-white border border-line rounded-8 text-[14px] font-semibold text-ink text-center"
                  href="/channels/walmart"
                >
                  Walmart
                </Link>
                <Link
                  className="block px-[14px] py-[12px] bg-white border border-line rounded-8 text-[14px] font-semibold text-ink text-center"
                  href="/channels"
                >
                  All ten →
                </Link>
              </div>
              <p className="m-0 text-[16.5px] leading-[1.65] text-nav">
                Starter plans include three channels of your choice; Growth and Scale include all ten. You can connect
                one now and add more later.
              </p>
            </div>
          </section>
          <section
            className="grid grid-cols-[120px_1fr] gap-[30px] px-0 py-[36px] border-t border-t-line-strong scroll-mt-[104px] max-lg:grid-cols-1"
            id="first-sync"
          >
            <span className="text-[13px] font-bold tracking-[.14em] uppercase text-rust pt-[6px]">03</span>
            <div className="flex flex-col gap-[14px]">
              <h2 className="m-0 text-[32px] leading-[1.15] font-bold tracking-[-.025em] text-ink">
                What happens on first sync
              </h2>
              <p className="m-0 text-[16.5px] leading-[1.65] text-nav">
                Scout mirrors your catalog: every product, variant, image, price, and inventory level your store
                returns, including drafts and archived items. The mirror is then kept current by Shopify webhooks, so
                later changes arrive within minutes rather than on a schedule.
              </p>
              <div className="bg-white border border-line rounded-10 overflow-hidden">
                <div className="grid grid-cols-[1fr_1fr_1fr] gap-[16px] px-[20px] py-[11px] bg-paper-warm border-b border-b-line text-[11.5px] font-bold tracking-[.12em] uppercase text-faint max-lg:grid-cols-1">
                  <span>You&#39;ll see</span>
                  <span>Means</span>
                  <span>Then</span>
                </div>
                <div className="grid grid-cols-[1fr_1fr_1fr] gap-[16px] px-[20px] py-[14px] border-b border-b-tint text-[14.5px] leading-[1.5] text-nav max-lg:grid-cols-1">
                  <span className="font-semibold text-ink">Syncing catalog…</span>
                  <span>The first full read is running. Larger catalogs take longer; you can leave the screen.</span>
                  <span>Wait for “Current”.</span>
                </div>
                <div className="grid grid-cols-[1fr_1fr_1fr] gap-[16px] px-[20px] py-[14px] border-b border-b-tint text-[14.5px] leading-[1.5] text-nav max-lg:grid-cols-1">
                  <span className="font-semibold text-ink">Current · 1,284 products</span>
                  <span>The mirror matches your store as of the last webhook.</span>
                  <span>Build your first feed.</span>
                </div>
                <div className="grid grid-cols-[1fr_1fr_1fr] gap-[16px] px-[20px] py-[14px] border-b border-b-tint text-[14.5px] leading-[1.5] text-nav max-lg:grid-cols-1">
                  <span className="font-semibold text-ink">Webhook events listed</span>
                  <span>products/update, inventory_levels/update, products/delete keep the mirror fresh.</span>
                  <span>Nothing — this is automatic.</span>
                </div>
              </div>
              <p className="m-0 text-[16.5px] leading-[1.65] text-nav">
                Nothing is published during first sync. Scout reads; it does not send anything anywhere until you
                generate and publish a feed.
              </p>
            </div>
          </section>
          <section
            className="grid grid-cols-[120px_1fr] gap-[30px] px-0 py-[36px] border-t border-t-line-strong scroll-mt-[104px] max-lg:grid-cols-1"
            id="first-feed"
          >
            <span className="text-[13px] font-bold tracking-[.14em] uppercase text-rust pt-[6px]">04</span>
            <div className="flex flex-col gap-[14px]">
              <h2 className="m-0 text-[32px] leading-[1.15] font-bold tracking-[-.025em] text-ink">
                Your first feed, step by step
              </h2>
              <ol className="m-0 p-0 list-none flex flex-col gap-[12px]">
                <li className="grid grid-cols-[34px_1fr] gap-[14px] px-[16px] py-[14px] bg-white border border-line rounded-8 max-lg:grid-cols-1">
                  <span className="flex items-center justify-center w-[30px] h-[30px] rounded-8 bg-ink text-[13px] font-bold text-white">
                    1
                  </span>
                  <span className="flex flex-col gap-[3px]">
                    <strong className="text-[15.5px] font-semibold">
                      Create a feed for the channel you connected.
                    </strong>
                    <span className="text-[14.5px] leading-[1.5] text-body">
                      Scout applies that channel&#39;s starter template — the required fields, pre-mapped from Shopify.
                    </span>
                  </span>
                </li>
                <li className="grid grid-cols-[34px_1fr] gap-[14px] px-[16px] py-[14px] bg-white border border-line rounded-8 max-lg:grid-cols-1">
                  <span className="flex items-center justify-center w-[30px] h-[30px] rounded-8 bg-ink text-[13px] font-bold text-white">
                    2
                  </span>
                  <span className="flex flex-col gap-[3px]">
                    <strong className="text-[15.5px] font-semibold">Preview.</strong>
                    <span className="text-[14.5px] leading-[1.5] text-body">
                      See the real resulting items without writing anything. Free, repeatable.
                    </span>
                  </span>
                </li>
                <li className="grid grid-cols-[34px_1fr] gap-[14px] px-[16px] py-[14px] bg-white border border-line rounded-8 max-lg:grid-cols-1">
                  <span className="flex items-center justify-center w-[30px] h-[30px] rounded-8 bg-ink text-[13px] font-bold text-white">
                    3
                  </span>
                  <span className="flex flex-col gap-[3px]">
                    <strong className="text-[15.5px] font-semibold">Validate.</strong>
                    <span className="text-[14.5px] leading-[1.5] text-body">
                      Runs the rules and checks against the channel&#39;s field requirements. Warnings name the field.
                    </span>
                  </span>
                </li>
                <li className="grid grid-cols-[34px_1fr] gap-[14px] px-[16px] py-[14px] bg-white border border-line rounded-8 max-lg:grid-cols-1">
                  <span className="flex items-center justify-center w-[30px] h-[30px] rounded-8 bg-ink text-[13px] font-bold text-white">
                    4
                  </span>
                  <span className="flex flex-col gap-[3px]">
                    <strong className="text-[15.5px] font-semibold">Fix what&#39;s flagged in the Rules Engine.</strong>
                    <span className="text-[14.5px] leading-[1.5] text-body">
                      Set, prepend, append, replace, or exclude. Your Shopify products are never edited.
                    </span>
                  </span>
                </li>
                <li className="grid grid-cols-[34px_1fr] gap-[14px] px-[16px] py-[14px] bg-white border border-line rounded-8 max-lg:grid-cols-1">
                  <span className="flex items-center justify-center w-[30px] h-[30px] rounded-8 bg-ink text-[13px] font-bold text-white">
                    5
                  </span>
                  <span className="flex flex-col gap-[3px]">
                    <strong className="text-[15.5px] font-semibold">Preflight.</strong>
                    <span className="text-[14.5px] leading-[1.5] text-body">
                      Scout asks the channel what it would reject — before spending a submission.
                    </span>
                  </span>
                </li>
                <li className="grid grid-cols-[34px_1fr] gap-[14px] px-[16px] py-[14px] bg-white border border-line rounded-8 max-lg:grid-cols-1">
                  <span className="flex items-center justify-center w-[30px] h-[30px] rounded-8 bg-rust text-[13px] font-bold text-white">
                    6
                  </span>
                  <span className="flex flex-col gap-[3px]">
                    <strong className="text-[15.5px] font-semibold">Publish.</strong>
                    <span className="text-[14.5px] leading-[1.5] text-body">
                      The one step that can&#39;t be undone. Then set a schedule, and Scout repeats the loop for you.
                    </span>
                  </span>
                </li>
              </ol>
              <p className="m-0 text-[14.5px] text-dim">
                The full explanation of each action is on <Link href="/platform/feed-management">Feed Management</Link>.
              </p>
            </div>
          </section>
          <section
            className="grid grid-cols-[120px_1fr] gap-[30px] px-0 py-[36px] border-t border-t-line-strong scroll-mt-[104px] max-lg:grid-cols-1"
            id="trial"
          >
            <span className="text-[13px] font-bold tracking-[.14em] uppercase text-rust pt-[6px]">05</span>
            <div className="flex flex-col gap-[14px]">
              <h2 className="m-0 text-[32px] leading-[1.15] font-bold tracking-[-.025em] text-ink">
                What the trial includes
              </h2>
              <p className="m-0 text-[16.5px] leading-[1.65] text-nav">
                Fourteen days on whichever plan you choose, with no payment method required to start. Everything in that
                plan is live during the trial — real feeds, real diagnostics, real publishing. At day fourteen, nothing
                is charged unless you&#39;ve chosen to continue.
              </p>
              <p className="m-0 text-[16.5px] leading-[1.65] text-nav">
                Billing, when it starts, runs through Shopify and appears on your Shopify invoice. Scout never sees a
                card. <Link href="/pricing">Plans and what each includes →</Link>
              </p>
            </div>
          </section>
          <section
            className="grid grid-cols-[120px_1fr] gap-[30px] px-0 py-[36px] border-t border-t-line-strong scroll-mt-[104px] max-lg:grid-cols-1"
            id="human"
          >
            <span className="text-[13px] font-bold tracking-[.14em] uppercase text-rust pt-[6px]">06</span>
            <div className="flex flex-col gap-[14px]">
              <h2 className="m-0 text-[32px] leading-[1.15] font-bold tracking-[-.025em] text-ink">Reaching a human</h2>
              <p className="m-0 text-[16.5px] leading-[1.65] text-nav">
                Email <a href="mailto:support@meerkatscout.com">support@meerkatscout.com</a> with your shop domain and,
                if it helps, the feed or diagnostic you&#39;re looking at. Support runs Monday through Friday, excluding
                US holidays, and aims to respond within one business day. There is no SLA, and there is no chatbot in
                front of the inbox.
              </p>
              <p className="m-0 text-[16.5px] leading-[1.65] text-nav">
                Privacy, legal, and security questions have their own addresses on the{" "}
                <Link href="/contact">Contact</Link> page.
              </p>
            </div>
          </section>
        </article>
      </section>

      <PreFooterCta />

      <SiteFooter current="Help-Center" />
    </>
  );
}
