import Link from "next/link";
import { SiteHeader } from "@/components/site/site-header";
import { SiteFooter } from "@/components/site/site-footer";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "The terms governing use of the Meerkat Scout Shopify app: what the service does, what stays in your hands, what each channel controls, and how billing and termination work.",
};

// Source: Terms-of-Service.dc.html -> /legal/terms
export default function TermsofServicePage() {
  return (
    <>
      <SiteHeader />

      {/* Terms hero */}
      <section className="bg-paper pt-[76px] pb-[60px] px-gutter border-b border-b-line-strong max-md:pt-[48px] max-md:pb-[48px]">
        <p className="m-0 mb-[22px] text-[13px] font-semibold tracking-[.14em] uppercase text-rust">
          Legal · Terms of service
        </p>
        <h1 className="m-0 text-[57px] leading-[1.08] font-extrabold tracking-[-.035em] max-w-[760px] text-pretty max-xl:text-[length:clamp(36px,4.45vw,57px)]">
          Scout publishes what you configure. You decide. Channels decide.
        </h1>
        <p className="m-0 mt-[28px] text-[17.5px] leading-[1.55] text-body max-w-[640px] text-pretty max-md:text-[16px]">
          These terms govern your use of the Meerkat Scout Shopify app. They are written to be read: what the service
          does, what stays in your hands, what each channel controls, and how billing and termination work.
        </p>
        <div className="flex gap-[36px] mt-[36px] text-[14px] text-dim max-md:flex-wrap max-md:gap-[20px]">
          <div className="flex flex-col gap-[4px]">
            <span className="text-[12px] font-bold tracking-[.12em] uppercase text-faint">Effective</span>
            <span className="text-ink font-medium">September 2, 2026</span>
          </div>
          <div className="flex flex-col gap-[4px]">
            <span className="text-[12px] font-bold tracking-[.12em] uppercase text-faint">Agreement between</span>
            <span className="text-ink font-medium">
              You (the merchant) and Meerkat Scout, a sole proprietorship owned by Nana A. Smith
            </span>
          </div>
          <div className="flex flex-col gap-[4px]">
            <span className="text-[12px] font-bold tracking-[.12em] uppercase text-faint">Governing law</span>
            <span className="text-ink font-medium">Commonwealth of Massachusetts, United States</span>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-[18px] mt-[52px] max-lg:grid-cols-2 max-md:grid-cols-1">
          <a
            className="flex flex-col gap-[10px] p-[22px] pb-[20px] bg-white border border-line rounded-10 shadow-card text-ink"
            href="#recommendations"
          >
            <span className="text-[12px] font-bold tracking-[.14em] uppercase text-rust">You decide</span>
            <span className="text-[19px] font-bold tracking-[-.02em] leading-[1.25]">
              Recommendations are advisory. Scout never changes a price or a product.
            </span>
          </a>
          <a
            className="flex flex-col gap-[10px] p-[22px] pb-[20px] bg-white border border-line rounded-10 shadow-card text-ink"
            href="#channels"
          >
            <span className="text-[12px] font-bold tracking-[.14em] uppercase text-rust">Channels decide</span>
            <span className="text-[19px] font-bold tracking-[-.02em] leading-[1.25]">
              Approval, rejection, and suspension are each channel&#39;s call, not Scout&#39;s.
            </span>
          </a>
          <a
            className="flex flex-col gap-[10px] p-[22px] pb-[20px] bg-white border border-line rounded-10 shadow-card text-ink"
            href="#fees"
          >
            <span className="text-[12px] font-bold tracking-[.14em] uppercase text-rust">Shopify bills</span>
            <span className="text-[19px] font-bold tracking-[-.02em] leading-[1.25]">
              All charges run through Shopify Billing. Uninstalling ends the subscription.
            </span>
          </a>
        </div>
      </section>

      {/* Terms body */}
      <section className="bg-paper pt-[64px] pb-[40px] px-gutter grid grid-cols-[260px_minmax(0,780px)] gap-[96px] items-start max-md:pt-[48px] max-xl:grid-cols-2 max-lg:grid-cols-1">
        <nav className="sticky top-[104px] flex flex-col gap-[2px]" aria-label="On this page">
          <p className="m-0 mb-[14px] text-[12px] font-bold tracking-[.14em] uppercase text-faint">On this page</p>
          <a
            className="text-[14.5px] leading-[1.4] text-nav px-0 py-[7px] border-t border-t-line-strong"
            href="#agreement"
          >
            1 The agreement
          </a>
          <a
            className="text-[14.5px] leading-[1.4] text-nav px-0 py-[7px] border-t border-t-line-strong"
            href="#service"
          >
            2 The service
          </a>
          <a
            className="text-[14.5px] leading-[1.4] text-nav px-0 py-[7px] border-t border-t-line-strong"
            href="#account"
          >
            3 Your account
          </a>
          <a
            className="text-[14.5px] leading-[1.4] text-nav px-0 py-[7px] border-t border-t-line-strong"
            href="#catalog"
          >
            4 Your catalog and data
          </a>
          <a
            className="text-[14.5px] leading-[1.4] text-nav px-0 py-[7px] border-t border-t-line-strong"
            href="#channels"
          >
            5 Connected channels
          </a>
          <a
            className="text-[14.5px] leading-[1.4] text-nav px-0 py-[7px] border-t border-t-line-strong"
            href="#recommendations"
          >
            6 Recommendations are advisory
          </a>
          <a
            className="text-[14.5px] leading-[1.4] text-nav px-0 py-[7px] border-t border-t-line-strong"
            href="#orders"
          >
            7 Optional order access
          </a>
          <a
            className="text-[14.5px] leading-[1.4] text-nav px-0 py-[7px] border-t border-t-line-strong"
            href="#pricing-data"
          >
            8 Competitive price data
          </a>
          <a
            className="text-[14.5px] leading-[1.4] text-nav px-0 py-[7px] border-t border-t-line-strong"
            href="#acceptable"
          >
            9 Acceptable use
          </a>
          <a className="text-[14.5px] leading-[1.4] text-nav px-0 py-[7px] border-t border-t-line-strong" href="#fees">
            10 Fees and billing
          </a>
          <a
            className="text-[14.5px] leading-[1.4] text-nav px-0 py-[7px] border-t border-t-line-strong"
            href="#availability"
          >
            11 Availability and support
          </a>
          <a className="text-[14.5px] leading-[1.4] text-nav px-0 py-[7px] border-t border-t-line-strong" href="#ip">
            12 Intellectual property
          </a>
          <a
            className="text-[14.5px] leading-[1.4] text-nav px-0 py-[7px] border-t border-t-line-strong"
            href="#disclaimers"
          >
            13 Disclaimers
          </a>
          <a
            className="text-[14.5px] leading-[1.4] text-nav px-0 py-[7px] border-t border-t-line-strong"
            href="#liability"
          >
            14 Limitation of liability
          </a>
          <a
            className="text-[14.5px] leading-[1.4] text-nav px-0 py-[7px] border-t border-t-line-strong"
            href="#termination"
          >
            15 Termination
          </a>
          <a className="text-[14.5px] leading-[1.4] text-nav px-0 py-[7px] border-t border-t-line-strong" href="#law">
            16 Governing law and changes
          </a>
          <a
            className="text-[14.5px] leading-[1.4] text-nav px-0 py-[7px] border-t border-t-line-strong border-b border-b-line-strong"
            href="#contact"
          >
            17 Contact
          </a>
          <div className="mt-[28px] flex flex-col gap-[8px]">
            <p className="m-0 mb-[6px] text-[12px] font-bold tracking-[.14em] uppercase text-faint">Related</p>
            <Link className="text-[14.5px] text-rust" href="/legal/privacy">
              Privacy Policy →
            </Link>
            <Link className="text-[14.5px] text-rust" href="/legal/gdpr">
              GDPR &amp; Data Rights →
            </Link>
            <Link className="text-[14.5px] text-rust" href="/legal/cookies">
              Cookie Preferences →
            </Link>
          </div>
        </nav>
        <article className="flex flex-col">
          <section className="p-0 pb-[52px] mb-[52px] border-b border-b-line-strong scroll-mt-[104px]" id="agreement">
            <p className="m-0 mb-[14px] text-[13px] font-bold tracking-[.14em] uppercase text-rust">01 · Agreement</p>
            <h2 className="m-0 mb-[20px] text-[32px] leading-[1.15] font-bold tracking-[-.025em]">The agreement</h2>
            <p className="m-0 mb-[16px] text-[16.5px] leading-[1.65] text-nav">
              These Terms of Service are a contract between you — the merchant who installs Meerkat Scout, and the
              business you represent — and Meerkat Scout, a sole proprietorship owned by Nana A. Smith
              (&quot;Scout&quot;, &quot;we&quot;). By installing or using the app you agree to them, together with our{" "}
              <Link href="/legal/privacy">Privacy Policy</Link>.
            </p>
            <p className="m-0 text-[16.5px] leading-[1.65] text-nav">
              Scout is distributed through the Shopify App Store. Shopify&#39;s own terms also apply to your store and
              to any app you install; where they conflict with these terms on a matter Shopify controls (such as billing
              or app permissions), Shopify&#39;s terms govern.
            </p>
          </section>
          <section className="p-0 pb-[52px] mb-[52px] border-b border-b-line-strong scroll-mt-[104px]" id="service">
            <p className="m-0 mb-[14px] text-[13px] font-bold tracking-[.14em] uppercase text-rust">02 · Service</p>
            <h2 className="m-0 mb-[20px] text-[32px] leading-[1.15] font-bold tracking-[-.025em]">The service</h2>
            <p className="m-0 mb-[16px] text-[16.5px] leading-[1.65] text-nav">
              Meerkat Scout is an embedded Shopify app that:
            </p>
            <ul className="list-disc m-0 mb-[16px] p-0 pl-[22px] flex flex-col gap-[9px] text-[16.5px] leading-[1.6] text-nav">
              <li>syncs your Shopify product catalog, read-only;</li>
              <li>transforms it through a rules engine you configure;</li>
              <li>generates and publishes product feeds to the sales channels you connect;</li>
              <li>
                collects each channel&#39;s rejections and diagnostics and normalizes them into one vocabulary that
                names the field to fix;
              </li>
              <li>monitors competitive pricing and generates pricing and content recommendations; and</li>
              <li>if you enable it, connects feed quality to sales outcomes.</li>
            </ul>
            <p className="m-0 text-[16.5px] leading-[1.65] text-nav">
              Scout has read-only access to your catalog. It does not create, edit, or delete products, variants,
              prices, or inventory in your Shopify store, and holds no permission that would let it.
            </p>
          </section>
          <section className="p-0 pb-[52px] mb-[52px] border-b border-b-line-strong scroll-mt-[104px]" id="account">
            <p className="m-0 mb-[14px] text-[13px] font-bold tracking-[.14em] uppercase text-rust">03 · Account</p>
            <h2 className="m-0 mb-[20px] text-[32px] leading-[1.15] font-bold tracking-[-.025em]">Your account</h2>
            <p className="m-0 mb-[16px] text-[16.5px] leading-[1.65] text-nav">
              You must be the owner of, or authorized to act for, the Shopify store on which you install Scout. You are
              responsible for the people you give access to the app through your Shopify staff accounts, and for what
              they do with it.
            </p>
            <p className="m-0 text-[16.5px] leading-[1.65] text-nav">
              Scout is a business tool for merchants and is not offered to consumers.
            </p>
          </section>
          <section className="p-0 pb-[52px] mb-[52px] border-b border-b-line-strong scroll-mt-[104px]" id="catalog">
            <p className="m-0 mb-[14px] text-[13px] font-bold tracking-[.14em] uppercase text-rust">04 · Your data</p>
            <h2 className="m-0 mb-[20px] text-[32px] leading-[1.15] font-bold tracking-[-.025em]">
              Your catalog and data
            </h2>
            <p className="m-0 mb-[16px] text-[16.5px] leading-[1.65] text-nav">
              Your catalog, feeds, rules, and store data remain yours. You grant Scout a limited licence to store,
              process, transform, and transmit that data solely to provide the service to you — including sending it to
              the channels and services described in the <Link href="/legal/privacy#outward">Privacy Policy</Link>.
            </p>
            <p className="m-0 mb-[16px] text-[16.5px] leading-[1.65] text-nav">
              You are responsible for the content of your catalog: that it is accurate, that you have the right to sell
              and advertise the products in it, and that it complies with the policies of each channel you publish to.
              Scout&#39;s diagnostics help you find what a channel has flagged; they do not certify that a listing is
              lawful or policy-compliant.
            </p>
            <p className="m-0 text-[16.5px] leading-[1.65] text-nav">
              Every record Scout holds is scoped to your store and isolated from every other merchant at the database
              level.
            </p>
          </section>
          <section className="p-0 pb-[52px] mb-[52px] border-b border-b-line-strong scroll-mt-[104px]" id="channels">
            <p className="m-0 mb-[14px] text-[13px] font-bold tracking-[.14em] uppercase text-rust">05 · Channels</p>
            <h2 className="m-0 mb-[20px] text-[32px] leading-[1.15] font-bold tracking-[-.025em]">
              Connected channels
            </h2>
            <p className="m-0 mb-[16px] text-[16.5px] leading-[1.65] text-nav">
              When you connect a channel — Google Shopping, Google Ads, Microsoft Bing, Meta, TikTok, Pinterest,
              Snapchat, Amazon, Walmart, or eBay — you authorize Scout to publish your feed to your account on that
              channel and to retrieve the channel&#39;s diagnostics. Your relationship with each channel is governed by
              that channel&#39;s own terms, and you are responsible for keeping your channel accounts in good standing.
            </p>
            <div className="px-[24px] py-[22px] bg-white border border-line rounded-10 m-0 mb-[16px]">
              <p className="m-0 mb-[10px] text-[12px] font-bold tracking-[.14em] uppercase text-rust">
                What Scout does and does not control
              </p>
              <p className="m-0 text-[16.5px] leading-[1.65] text-nav">
                <strong className="text-ink font-semibold">Scout publishes what you configure.</strong> Whether a
                channel approves, rejects, limits, or suspends a listing or an account is entirely that channel&#39;s
                determination, made under that channel&#39;s policies. Scout does not make those decisions, cannot
                override them, and is not responsible for them. Scout reports each channel&#39;s decision back to you
                and names the field it relates to; acting on it is your choice.
              </p>
            </div>
            <p className="m-0 text-[16.5px] leading-[1.65] text-nav">
              Channels change their requirements, APIs, and policies on their own schedules. We work to keep Scout
              current, but we cannot guarantee that a channel will remain available through Scout or that a feed that
              passed yesterday will pass tomorrow.
            </p>
          </section>
          <section
            className="p-0 pb-[52px] mb-[52px] border-b border-b-line-strong scroll-mt-[104px]"
            id="recommendations"
          >
            <p className="m-0 mb-[14px] text-[13px] font-bold tracking-[.14em] uppercase text-rust">
              06 · Advisory only
            </p>
            <h2 className="m-0 mb-[20px] text-[32px] leading-[1.15] font-bold tracking-[-.025em]">
              Recommendations are advisory
            </h2>
            <p className="m-0 mb-[16px] text-[16.5px] leading-[1.65] text-nav">
              Scout&#39;s pricing and content recommendations — including anything generated with the help of an AI
              model — are <strong className="text-ink font-semibold">suggestions for you to evaluate</strong>. Scout
              never applies a recommendation. It does not change a price, edit a title or description, or alter any
              product in your Shopify store or in a published feed on its own. You decide whether to act, and you make
              the change yourself in Shopify.
            </p>
            <p className="m-0 mb-[16px] text-[16.5px] leading-[1.65] text-nav">
              This is deliberate. A feed price that differs from the price on your storefront is a common reason for a
              Google Merchant Center suspension. Keeping the decision — and the edit — in your hands keeps your feed and
              your storefront in step.
            </p>
            <p className="m-0 text-[16.5px] leading-[1.65] text-nav">
              Accordingly, you are solely responsible for your pricing and merchandising decisions and their results,
              including margins, compliance with minimum-advertised-price or other agreements, and any channel action
              that follows from a change you make. Recommendations are provided for information; they are not financial,
              legal, or professional advice and carry no guarantee of accuracy or outcome.
            </p>
          </section>
          <section className="p-0 pb-[52px] mb-[52px] border-b border-b-line-strong scroll-mt-[104px]" id="orders">
            <p className="m-0 mb-[14px] text-[13px] font-bold tracking-[.14em] uppercase text-rust">07 · Orders</p>
            <h2 className="m-0 mb-[20px] text-[32px] leading-[1.15] font-bold tracking-[-.025em]">
              Optional order access
            </h2>
            <p className="m-0 text-[16.5px] leading-[1.65] text-nav">
              Conversion Intelligence needs read access to your orders. That permission is not requested at install;
              Shopify asks you for it only if you choose to enable the feature, and you may decline or revoke it at any
              time in your Shopify admin without affecting the rest of Scout. Personal shopper fields are removed before
              any order data is stored, as described in the <Link href="/legal/privacy#never">Privacy Policy</Link>.
            </p>
          </section>
          <section
            className="p-0 pb-[52px] mb-[52px] border-b border-b-line-strong scroll-mt-[104px]"
            id="pricing-data"
          >
            <p className="m-0 mb-[14px] text-[13px] font-bold tracking-[.14em] uppercase text-rust">08 · Market data</p>
            <h2 className="m-0 mb-[20px] text-[32px] leading-[1.15] font-bold tracking-[-.025em]">
              Competitive price data
            </h2>
            <p className="m-0 text-[16.5px] leading-[1.65] text-nav">
              Competitive prices shown in Scout are gathered from publicly available listings through a third-party
              search API and may be incomplete, delayed, or inaccurate. They are indicative, not authoritative. Scout
              does not warrant that a competitor price is current or that a matched product is identical to yours.
            </p>
          </section>
          <section className="p-0 pb-[52px] mb-[52px] border-b border-b-line-strong scroll-mt-[104px]" id="acceptable">
            <p className="m-0 mb-[14px] text-[13px] font-bold tracking-[.14em] uppercase text-rust">09 · Conduct</p>
            <h2 className="m-0 mb-[20px] text-[32px] leading-[1.15] font-bold tracking-[-.025em]">Acceptable use</h2>
            <p className="m-0 mb-[12px] text-[16.5px] leading-[1.65] text-nav">You agree not to:</p>
            <ul className="list-disc m-0 p-0 pl-[22px] flex flex-col gap-[9px] text-[16.5px] leading-[1.6] text-nav">
              <li>
                use Scout to publish listings that are unlawful, infringing, deceptive, or prohibited by a channel;
              </li>
              <li>attempt to access another merchant&#39;s data or to probe, disrupt, or overload the service;</li>
              <li>reverse-engineer, resell, or sublicense the service, or use it to build a competing product; or</li>
              <li>use competitive price data for any purpose other than informing your own store&#39;s decisions.</li>
            </ul>
          </section>
          <section className="p-0 pb-[52px] mb-[52px] border-b border-b-line-strong scroll-mt-[104px]" id="fees">
            <p className="m-0 mb-[14px] text-[13px] font-bold tracking-[.14em] uppercase text-rust">10 · Billing</p>
            <h2 className="m-0 mb-[20px] text-[32px] leading-[1.15] font-bold tracking-[-.025em]">Fees and billing</h2>
            <p className="m-0 mb-[16px] text-[16.5px] leading-[1.65] text-nav">
              Plans and prices are shown on the <Link href="/pricing">pricing page</Link> and in the app. All fees are
              charged through Shopify&#39;s billing system and appear on your Shopify invoice; Scout does not process,
              store, or see your payment card details. Charges recur on Shopify&#39;s billing cycle until you uninstall
              the app or downgrade.
            </p>
            <ul className="m-0 mb-[16px] p-0 list-none flex flex-col gap-[12px]">
              <li className="grid grid-cols-[150px_1fr] gap-[18px] text-[16.5px] leading-[1.6] text-nav max-lg:grid-cols-1">
                <strong className="text-ink font-semibold">Free trial</strong>
                <span>14 days, no payment method required.</span>
              </li>
              <li className="grid grid-cols-[150px_1fr] gap-[18px] text-[16.5px] leading-[1.6] text-nav max-lg:grid-cols-1">
                <strong className="text-ink font-semibold">Refunds</strong>
                <span>
                  Subscriptions are billed through Shopify. Refunds are handled in accordance with Shopify&#39;s billing
                  policies; Scout does not process payments and cannot independently issue refunds.
                </span>
              </li>
              <li className="grid grid-cols-[150px_1fr] gap-[18px] text-[16.5px] leading-[1.6] text-nav max-lg:grid-cols-1">
                <strong className="text-ink font-semibold">Price changes</strong>
                <span>
                  We will give you at least 30 days notice in the app before a change to your plan&#39;s price takes
                  effect.
                </span>
              </li>
            </ul>
            <p className="m-0 text-[16.5px] leading-[1.65] text-nav">
              Taxes are applied by Shopify according to your store&#39;s location.
            </p>
          </section>
          <section
            className="p-0 pb-[52px] mb-[52px] border-b border-b-line-strong scroll-mt-[104px]"
            id="availability"
          >
            <p className="m-0 mb-[14px] text-[13px] font-bold tracking-[.14em] uppercase text-rust">11 · Uptime</p>
            <h2 className="m-0 mb-[20px] text-[32px] leading-[1.15] font-bold tracking-[-.025em]">
              Availability and support
            </h2>
            <p className="m-0 text-[16.5px] leading-[1.65] text-nav">
              We aim to keep Scout available continuously but do not promise uninterrupted service; maintenance, channel
              outages, and Shopify platform changes can all interrupt it. Support is provided by email at
              support@meerkatscout.com Monday through Friday, excluding US holidays. We aim to respond within one
              business day. No service-level agreement applies unless we have signed one with you separately.
            </p>
          </section>
          <section className="p-0 pb-[52px] mb-[52px] border-b border-b-line-strong scroll-mt-[104px]" id="ip">
            <p className="m-0 mb-[14px] text-[13px] font-bold tracking-[.14em] uppercase text-rust">12 · Ownership</p>
            <h2 className="m-0 mb-[20px] text-[32px] leading-[1.15] font-bold tracking-[-.025em]">
              Intellectual property
            </h2>
            <p className="m-0 text-[16.5px] leading-[1.65] text-nav">
              Scout — its software, rules engine, diagnostics vocabulary, design, and the Meerkat Scout name and marks —
              belongs to us. You keep all rights in your catalog and store data. If you send us feedback or suggestions,
              we may use them without obligation to you.
            </p>
          </section>
          <section className="p-0 pb-[52px] mb-[52px] border-b border-b-line-strong scroll-mt-[104px]" id="disclaimers">
            <p className="m-0 mb-[14px] text-[13px] font-bold tracking-[.14em] uppercase text-rust">13 · Warranties</p>
            <h2 className="m-0 mb-[20px] text-[32px] leading-[1.15] font-bold tracking-[-.025em]">Disclaimers</h2>
            <p className="m-0 text-[16.5px] leading-[1.65] text-nav">
              Scout is provided &quot;as is&quot; and &quot;as available&quot;. To the fullest extent the law allows, we
              disclaim all warranties, express or implied, including merchantability, fitness for a particular purpose,
              and non-infringement. In particular, we do not warrant that any feed will be accepted by any channel, that
              any recommendation will improve your results, or that competitive price data is accurate.
            </p>
          </section>
          <section className="p-0 pb-[52px] mb-[52px] border-b border-b-line-strong scroll-mt-[104px]" id="liability">
            <p className="m-0 mb-[14px] text-[13px] font-bold tracking-[.14em] uppercase text-rust">14 · Liability</p>
            <h2 className="m-0 mb-[20px] text-[32px] leading-[1.15] font-bold tracking-[-.025em]">
              Limitation of liability
            </h2>
            <p className="m-0 mb-[16px] text-[16.5px] leading-[1.65] text-nav">
              To the fullest extent the law allows, we are not liable for indirect, incidental, special, consequential,
              or punitive damages, or for lost profits, lost sales, or lost data, arising from your use of Scout. This
              includes losses from a channel&#39;s rejection, limitation, or suspension of your listings or account, and
              from any pricing or merchandising decision you make, whether or not informed by a Scout recommendation.
            </p>
            <p className="m-0 text-[16.5px] leading-[1.65] text-nav">
              Our total liability to you for all claims in any twelve-month period is limited to the fees you paid us in
              the twelve months preceding the claim. Some jurisdictions do not allow certain limitations; in those
              places, our liability is limited to the smallest extent the law permits.
            </p>
          </section>
          <section className="p-0 pb-[52px] mb-[52px] border-b border-b-line-strong scroll-mt-[104px]" id="termination">
            <p className="m-0 mb-[14px] text-[13px] font-bold tracking-[.14em] uppercase text-rust">15 · Ending</p>
            <h2 className="m-0 mb-[20px] text-[32px] leading-[1.15] font-bold tracking-[-.025em]">Termination</h2>
            <p className="m-0 mb-[16px] text-[16.5px] leading-[1.65] text-nav">
              You can end this agreement at any time by uninstalling Scout from your Shopify admin. Your subscription
              stops through Shopify, and your operational data is deleted on the timeline described on the{" "}
              <Link href="/legal/gdpr#uninstall">GDPR &amp; Data Rights</Link> page. Feeds already published to a
              channel remain in that channel&#39;s systems under its terms; disconnect or delete them there if you wish.
            </p>
            <p className="m-0 text-[16.5px] leading-[1.65] text-nav">
              We may suspend or end your access if you materially breach these terms, if Shopify requires it, or if we
              discontinue the service, in which case we will give reasonable notice where we can.
            </p>
          </section>
          <section className="p-0 pb-[52px] mb-[52px] border-b border-b-line-strong scroll-mt-[104px]" id="law">
            <p className="m-0 mb-[14px] text-[13px] font-bold tracking-[.14em] uppercase text-rust">16 · Law</p>
            <h2 className="m-0 mb-[20px] text-[32px] leading-[1.15] font-bold tracking-[-.025em]">
              Governing law and changes
            </h2>
            <p className="m-0 mb-[16px] text-[16.5px] leading-[1.65] text-nav">
              These terms are governed by the laws of the Commonwealth of Massachusetts, United States, and disputes
              will be resolved in the courts of the state and federal courts located in Worcester County, Massachusetts,
              unless applicable law gives you a right to a different forum.
            </p>
            <p className="m-0 text-[16.5px] leading-[1.65] text-nav">
              We may update these terms. If a change is material, we will notify you in the app before it takes effect
              and update the effective date above. Continuing to use Scout after that date means you accept the updated
              terms.
            </p>
          </section>
          <section className="p-0 pb-[24px] scroll-mt-[104px]" id="contact">
            <p className="m-0 mb-[14px] text-[13px] font-bold tracking-[.14em] uppercase text-rust">17 · Contact</p>
            <h2 className="m-0 mb-[20px] text-[32px] leading-[1.15] font-bold tracking-[-.025em]">Contact</h2>
            <address className="box-content not-italic flex flex-col gap-[8px] px-[24px] py-[22px] bg-white border border-line rounded-10 text-[16px] leading-[1.5] text-nav max-w-[480px]">
              <span className="text-ink font-semibold">
                Meerkat Scout, a sole proprietorship owned by Nana A. Smith
              </span>
              <span>255 Park Avenue, Worcester, MA 01605, United States</span>
              <span>Legal: legal@meerkatscout.com</span>
            </address>
          </section>
        </article>
      </section>

      {/* Terms contact band */}
      <section className="relative bg-night pt-[84px] pb-[88px] px-gutter overflow-hidden max-md:pt-[56px] max-md:pb-[56px]">
        <div className="grid grid-cols-[1fr_1fr] gap-[60px] items-center max-lg:grid-cols-1">
          <div>
            <p className="m-0 mb-[22px] text-[13px] font-semibold tracking-[.13em] uppercase text-rust-bright">
              The short version
            </p>
            <h2 className="m-0 text-[46px] leading-[1.06] font-extrabold tracking-[-.035em] text-white text-pretty max-xl:text-[length:clamp(30px,3.59vw,46px)]">
              Scout reads, recommends, and publishes. It never edits your store.
            </h2>
          </div>
          <div className="flex flex-col gap-[18px]">
            <p className="m-0 text-[17px] leading-[1.6] text-night-muted-2">
              Your catalog is yours. Your pricing decisions are yours. Each channel&#39;s approval is that
              channel&#39;s. Questions about these terms go to legal@meerkatscout.com.
            </p>
            <div className="flex gap-[14px] items-center max-md:flex-wrap max-xs:flex-col max-xs:items-stretch">
              <Link
                className="text-[14.5px] font-semibold text-white bg-rust-button rounded-6 px-[22px] py-[12px]"
                href="/legal/privacy"
              >
                Read the Privacy Policy
              </Link>
              <Link
                className="text-[14.5px] font-semibold text-night-text border border-footer-edge rounded-6 px-[22px] py-[11px]"
                href="/legal/gdpr"
              >
                GDPR &amp; Data Rights
              </Link>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter current="Terms-of-Service" />
    </>
  );
}
