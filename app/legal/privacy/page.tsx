import Link from "next/link";
import { SiteHeader } from "@/components/site/site-header";
import { SiteFooter } from "@/components/site/site-footer";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Exactly what Meerkat Scout reads from your store, what it sends to the channels you connect, how long it is kept, and how to get it deleted.",
};

// Source: Privacy-Policy.dc.html -> /legal/privacy
export default function PrivacyPolicyPage() {
  return (
    <>
      <SiteHeader />

      {/* Privacy hero */}
      <section className="bg-paper pt-[76px] pb-[60px] px-gutter border-b border-b-line-strong max-md:pt-[48px] max-md:pb-[48px]">
        <p className="m-0 mb-[22px] text-[13px] font-semibold tracking-[.14em] uppercase text-rust">
          Legal · Privacy policy
        </p>
        <h1 className="m-0 text-[57px] leading-[1.08] font-extrabold tracking-[-.035em] max-w-[760px] text-pretty max-xl:text-[length:clamp(36px,4.45vw,57px)]">
          What Scout accesses, what it never touches, and where your data goes.
        </h1>
        <p className="m-0 mt-[28px] text-[17.5px] leading-[1.55] text-body max-w-[640px] text-pretty max-md:text-[16px]">
          Meerkat Scout is an embedded Shopify app. This policy explains, in plain language, exactly what we read from
          your store, what we send to the channels you connect, how long we keep it, and how to get it deleted.
        </p>
        <div className="flex gap-[36px] mt-[36px] text-[14px] text-dim max-md:flex-wrap max-md:gap-[20px]">
          <div className="flex flex-col gap-[4px]">
            <span className="text-[12px] font-bold tracking-[.12em] uppercase text-faint">Effective</span>
            <span className="text-ink font-medium">September 2, 2026</span>
          </div>
          <div className="flex flex-col gap-[4px]">
            <span className="text-[12px] font-bold tracking-[.12em] uppercase text-faint">Operated by</span>
            <span className="text-ink font-medium">Meerkat Scout, a sole proprietorship owned by Nana A. Smith</span>
          </div>
          <div className="flex flex-col gap-[4px]">
            <span className="text-[12px] font-bold tracking-[.12em] uppercase text-faint">Applies to</span>
            <span className="text-ink font-medium">The Meerkat Scout Shopify app and this website</span>
          </div>
        </div>
        <div className="grid grid-cols-4 gap-[18px] mt-[52px] max-lg:grid-cols-2 max-md:grid-cols-1">
          <a
            className="flex flex-col gap-[10px] p-[22px] pb-[20px] bg-white border border-line rounded-10 shadow-card text-ink"
            href="#access"
          >
            <span className="text-[12px] font-bold tracking-[.14em] uppercase text-rust">We read</span>
            <span className="text-[19px] font-bold tracking-[-.02em] leading-[1.25]">
              Your product catalog, read-only. Orders only if you opt in.
            </span>
          </a>
          <a
            className="flex flex-col gap-[10px] p-[22px] pb-[20px] bg-white border border-line rounded-10 shadow-card text-ink"
            href="#never"
          >
            <span className="text-[12px] font-bold tracking-[.14em] uppercase text-rust">We never collect</span>
            <span className="text-[19px] font-bold tracking-[-.02em] leading-[1.25]">
              Shopper names, emails, addresses, phones, or IPs.
            </span>
          </a>
          <a
            className="flex flex-col gap-[10px] p-[22px] pb-[20px] bg-white border border-line rounded-10 shadow-card text-ink"
            href="#outward"
          >
            <span className="text-[12px] font-bold tracking-[.14em] uppercase text-rust">We send</span>
            <span className="text-[19px] font-bold tracking-[-.02em] leading-[1.25]">
              Product data to the channels you connect, and nothing to anyone you didn&#39;t.
            </span>
          </a>
          <a
            className="flex flex-col gap-[10px] p-[22px] pb-[20px] bg-white border border-line rounded-10 shadow-card text-ink"
            href="#retention"
          >
            <span className="text-[12px] font-bold tracking-[.14em] uppercase text-rust">We delete</span>
            <span className="text-[19px] font-bold tracking-[-.02em] leading-[1.25]">
              Everything operational when Shopify confirms your uninstall.
            </span>
          </a>
        </div>
      </section>

      {/* Privacy body */}
      <section className="bg-paper pt-[64px] pb-[40px] px-gutter grid grid-cols-[260px_minmax(0,780px)] gap-[96px] items-start max-md:pt-[48px] max-xl:grid-cols-2 max-lg:grid-cols-1">
        <nav className="sticky top-[104px] flex flex-col gap-[2px]" aria-label="On this page">
          <p className="m-0 mb-[14px] text-[12px] font-bold tracking-[.14em] uppercase text-faint">On this page</p>
          <a className="text-[14.5px] leading-[1.4] text-nav px-0 py-[7px] border-t border-t-line-strong" href="#scope">
            1 Who this policy covers
          </a>
          <a
            className="text-[14.5px] leading-[1.4] text-nav px-0 py-[7px] border-t border-t-line-strong"
            href="#access"
          >
            2 What we access from Shopify
          </a>
          <a className="text-[14.5px] leading-[1.4] text-nav px-0 py-[7px] border-t border-t-line-strong" href="#never">
            3 What we deliberately don&#39;t collect
          </a>
          <a className="text-[14.5px] leading-[1.4] text-nav px-0 py-[7px] border-t border-t-line-strong" href="#use">
            4 How we use your data
          </a>
          <a
            className="text-[14.5px] leading-[1.4] text-nav px-0 py-[7px] border-t border-t-line-strong"
            href="#outward"
          >
            5 Where data goes
          </a>
          <a
            className="text-[14.5px] leading-[1.4] text-nav px-0 py-[7px] border-t border-t-line-strong"
            href="#retention"
          >
            6 What we store, and for how long
          </a>
          <a
            className="text-[14.5px] leading-[1.4] text-nav px-0 py-[7px] border-t border-t-line-strong"
            href="#security"
          >
            7 How we protect it
          </a>
          <a
            className="text-[14.5px] leading-[1.4] text-nav px-0 py-[7px] border-t border-t-line-strong"
            href="#billing"
          >
            8 Billing
          </a>
          <a
            className="text-[14.5px] leading-[1.4] text-nav px-0 py-[7px] border-t border-t-line-strong"
            href="#rights"
          >
            9 Your rights and deletion
          </a>
          <a className="text-[14.5px] leading-[1.4] text-nav px-0 py-[7px] border-t border-t-line-strong" href="#site">
            10 Visitors to this website
          </a>
          <a
            className="text-[14.5px] leading-[1.4] text-nav px-0 py-[7px] border-t border-t-line-strong"
            href="#changes"
          >
            11 Changes to this policy
          </a>
          <a
            className="text-[14.5px] leading-[1.4] text-nav px-0 py-[7px] border-t border-t-line-strong border-b border-b-line-strong"
            href="#contact"
          >
            12 Contact
          </a>
          <div className="mt-[28px] flex flex-col gap-[8px]">
            <p className="m-0 mb-[6px] text-[12px] font-bold tracking-[.14em] uppercase text-faint">Related</p>
            <Link className="text-[14.5px] text-rust" href="/legal/terms">
              Terms of Service →
            </Link>
            <Link className="text-[14.5px] text-rust" href="/legal/gdpr">
              GDPR &amp; Data Rights →
            </Link>
            <Link className="text-[14.5px] text-rust" href="/legal/cookies">
              Cookie Preferences →
            </Link>
          </div>
        </nav>
        <article className="flex flex-col gap-0">
          <section className="p-0 pb-[52px] mb-[52px] border-b border-b-line-strong scroll-mt-[104px]" id="scope">
            <p className="m-0 mb-[14px] text-[13px] font-bold tracking-[.14em] uppercase text-rust">01 · Scope</p>
            <h2 className="m-0 mb-[20px] text-[32px] leading-[1.15] font-bold tracking-[-.025em]">
              Who this policy covers
            </h2>
            <p className="m-0 mb-[16px] text-[16.5px] leading-[1.65] text-nav">
              This policy covers two groups of people.
            </p>
            <ul className="m-0 mb-[16px] p-0 list-none flex flex-col gap-[12px]">
              <li className="grid grid-cols-[150px_1fr] gap-[18px] text-[16.5px] leading-[1.6] text-nav max-lg:grid-cols-1">
                <strong className="text-ink font-semibold">Merchants</strong>
                <span>
                  Shopify store owners and staff who install Meerkat Scout. We hold your shop domain, the name and email
                  attached to your Shopify account, and the catalog data described below.
                </span>
              </li>
              <li className="grid grid-cols-[150px_1fr] gap-[18px] text-[16.5px] leading-[1.6] text-nav max-lg:grid-cols-1">
                <strong className="text-ink font-semibold">Website visitors</strong>
                <span>
                  Anyone reading this site. We collect very little from you; see <a href="#site">section 10</a>.
                </span>
              </li>
            </ul>
            <p className="m-0 text-[16.5px] leading-[1.65] text-nav">
              It does <strong className="text-ink font-semibold">not</strong> cover your shoppers, because Scout does
              not collect personal data about them. Section 3 explains how that is enforced.
            </p>
          </section>
          <section className="p-0 pb-[52px] mb-[52px] border-b border-b-line-strong scroll-mt-[104px]" id="access">
            <p className="m-0 mb-[14px] text-[13px] font-bold tracking-[.14em] uppercase text-rust">02 · Access</p>
            <h2 className="m-0 mb-[20px] text-[32px] leading-[1.15] font-bold tracking-[-.025em]">
              What we access from your Shopify store
            </h2>
            <p className="m-0 mb-[22px] text-[16.5px] leading-[1.65] text-nav">
              When you install Scout, Shopify asks you to approve a set of permissions. Every one of them is read-only.
              Scout never writes to, edits, or deletes anything in your Shopify catalog.
            </p>
            <div className="bg-white border border-line rounded-10 overflow-hidden">
              <div className="grid grid-cols-[200px_1fr_130px] gap-[20px] px-[22px] py-[12px] bg-paper-warm border-b border-b-line text-[12px] font-bold tracking-[.12em] uppercase text-faint max-lg:grid-cols-1">
                <span>Data</span>
                <span>What&#39;s included</span>
                <span>Requested</span>
              </div>
              <div className="grid grid-cols-[200px_1fr_130px] gap-[20px] px-[22px] py-[18px] border-b border-b-line text-[15.5px] leading-[1.55] text-nav max-lg:grid-cols-1">
                <strong className="text-ink font-semibold">Products and variants</strong>
                <span>
                  Titles, descriptions, prices, images, SKUs, barcodes, inventory levels, and product options.
                </span>
                <span className="text-ink font-medium">At install</span>
              </div>
              <div className="grid grid-cols-[200px_1fr_130px] gap-[20px] px-[22px] py-[18px] border-b border-b-line text-[15.5px] leading-[1.55] text-nav max-lg:grid-cols-1">
                <strong className="text-ink font-semibold">Store metadata</strong>
                <span>
                  Shop domain, store currency, and locale — needed to format feeds correctly for each channel.
                </span>
                <span className="text-ink font-medium">At install</span>
              </div>
              <div className="grid grid-cols-[200px_1fr_130px] gap-[20px] px-[22px] py-[18px] text-[15.5px] leading-[1.55] text-nav max-lg:grid-cols-1">
                <strong className="text-ink font-semibold">Orders</strong>
                <span>
                  Order lines, quantities, and totals — used only by Conversion Intelligence to connect feed quality to
                  sales. Personal fields are stripped before storage (section 3).
                </span>
                <span className="text-rust font-semibold">Optional, later</span>
              </div>
            </div>
            <p className="m-0 mt-[22px] text-[16.5px] leading-[1.65] text-nav">
              Order access is <strong className="text-ink font-semibold">not requested at install</strong>. If you later
              turn on Conversion Intelligence, Shopify will prompt you to grant the{" "}
              <code className="font-mono text-[14.5px] bg-[#EDE8E1] px-[6px] py-[2px] rounded-[4px]">read_orders</code>{" "}
              scope. You can decline, and every other part of Scout keeps working.
            </p>
          </section>
          <section className="p-0 pb-[52px] mb-[52px] border-b border-b-line-strong scroll-mt-[104px]" id="never">
            <p className="m-0 mb-[14px] text-[13px] font-bold tracking-[.14em] uppercase text-rust">03 · Exclusions</p>
            <h2 className="m-0 mb-[20px] text-[32px] leading-[1.15] font-bold tracking-[-.025em]">
              What we deliberately don&#39;t collect
            </h2>
            <p className="m-0 mb-[16px] text-[16.5px] leading-[1.65] text-nav">
              Scout does not collect personal data about your customers. Specifically, we do not store customer names,
              email addresses, shipping or billing addresses, phone numbers, or IP addresses.
            </p>
            <p className="m-0 mb-[16px] text-[16.5px] leading-[1.65] text-nav">
              When order data is ingested for Conversion Intelligence, personal fields are removed{" "}
              <strong className="text-ink font-semibold">before</strong> the record is written to storage — not scrubbed
              afterwards. This is enforced by an automated schema test in our build pipeline: if a personal field ever
              appears in the order schema, the build fails and the change cannot ship.
            </p>
            <p className="m-0 text-[16.5px] leading-[1.65] text-nav">
              Scout also does not collect payment card details (see <a href="#billing">Billing</a>) and never modifies
              your Shopify products.
            </p>
          </section>
          <section className="p-0 pb-[52px] mb-[52px] border-b border-b-line-strong scroll-mt-[104px]" id="use">
            <p className="m-0 mb-[14px] text-[13px] font-bold tracking-[.14em] uppercase text-rust">04 · Purpose</p>
            <h2 className="m-0 mb-[20px] text-[32px] leading-[1.15] font-bold tracking-[-.025em]">
              How we use your data
            </h2>
            <p className="m-0 mb-[16px] text-[16.5px] leading-[1.65] text-nav">
              We use catalog and store data only to provide the service you installed:
            </p>
            <ul className="list-disc m-0 mb-[16px] p-0 pl-[22px] flex flex-col gap-[9px] text-[16.5px] leading-[1.6] text-nav">
              <li>Mirroring your catalog and keeping the mirror current.</li>
              <li>Transforming it through your rules and generating a feed per channel.</li>
              <li>Publishing feeds to the channels you connect and collecting each channel&#39;s diagnostics.</li>
              <li>Resolving marketplace categories and monitoring competitive prices for your products.</li>
              <li>Generating pricing and content recommendations.</li>
              <li>Connecting feed quality to sales, if you enable Conversion Intelligence.</li>
              <li>Operating, securing, and supporting the app, and billing through Shopify.</li>
            </ul>
            <p className="m-0 text-[16.5px] leading-[1.65] text-nav">
              We do not sell your data, use it to advertise to anyone, or use one merchant&#39;s catalog to benefit
              another.
            </p>
          </section>
          <section className="p-0 pb-[52px] mb-[52px] border-b border-b-line-strong scroll-mt-[104px]" id="outward">
            <p className="m-0 mb-[14px] text-[13px] font-bold tracking-[.14em] uppercase text-rust">05 · Recipients</p>
            <h2 className="m-0 mb-[20px] text-[32px] leading-[1.15] font-bold tracking-[-.025em]">Where data goes</h2>
            <p className="m-0 mb-[22px] text-[16.5px] leading-[1.65] text-nav">
              Scout sends product data to outside services in four situations. Only product and store data leaves Scout;
              shopper personal data cannot, because we never hold it.
            </p>
            <div className="bg-white border border-line rounded-10 overflow-hidden">
              <div className="grid grid-cols-[210px_1fr_1fr] gap-[20px] px-[22px] py-[12px] bg-paper-warm border-b border-b-line text-[12px] font-bold tracking-[.12em] uppercase text-faint max-lg:grid-cols-1">
                <span>Recipient</span>
                <span>What is sent</span>
                <span>Why</span>
              </div>
              <div className="grid grid-cols-[210px_1fr_1fr] gap-[20px] px-[22px] py-[18px] border-b border-b-line text-[15.5px] leading-[1.55] text-nav max-lg:grid-cols-1">
                <strong className="text-ink font-semibold">Sales channels you connect</strong>
                <span>Your product feed — the fields each channel requires.</span>
                <span>
                  Google Shopping, Google Ads, Microsoft Bing, Meta, TikTok, Pinterest, Snapchat, Amazon, Walmart, eBay.
                  Only the ones you connect.
                </span>
              </div>
              <div className="grid grid-cols-[210px_1fr_1fr] gap-[20px] px-[22px] py-[18px] border-b border-b-line text-[15.5px] leading-[1.55] text-nav max-lg:grid-cols-1">
                <strong className="text-ink font-semibold">Marketplace taxonomy APIs</strong>
                <span>Product identifiers (titles, SKUs, barcodes).</span>
                <span>Amazon, Walmart, and eBay category resolution.</span>
              </div>
              <div className="grid grid-cols-[210px_1fr_1fr] gap-[20px] px-[22px] py-[18px] border-b border-b-line text-[15.5px] leading-[1.55] text-nav max-lg:grid-cols-1">
                <strong className="text-ink font-semibold">Search API provider</strong>
                <span>
                  Product titles and, where present, GTIN or MPN identifiers. No customer, order or payment data.
                </span>
                <span>
                  Looks up public shopping listings for competitive price monitoring (Price Intelligence). Raw responses
                  are deleted within 30 days.
                </span>
              </div>
              <div className="grid grid-cols-[210px_1fr_1fr] gap-[20px] px-[22px] py-[18px] border-b border-b-line text-[15.5px] leading-[1.55] text-nav max-lg:grid-cols-1">
                <strong className="text-ink font-semibold">AI model provider</strong>
                <span>
                  Product context only: titles, descriptions, attributes and price signals. No customer, order or
                  payment data.
                </span>
                <span>
                  Generates the pricing and content recommendations shown in Scout. Used under terms that exclude
                  training on submitted data.
                </span>
              </div>
              <div className="grid grid-cols-[210px_1fr_1fr] gap-[20px] px-[22px] py-[18px] text-[15.5px] leading-[1.55] text-nav max-lg:grid-cols-1">
                <strong className="text-ink font-semibold">
                  Infrastructure — Google Cloud Platform, Google Cloud Key Management Service (Cloud KMS)
                </strong>
                <span>All stored data, encrypted.</span>
                <span>Hosting the service and holding encryption keys.</span>
              </div>
            </div>
            <p className="m-0 mt-[22px] text-[16.5px] leading-[1.65] text-nav">
              Each channel processes the feed it receives under its own privacy policy and merchant terms. Scout does
              not share data with advertisers, data brokers, or any other third party.
            </p>
          </section>
          <section className="p-0 pb-[52px] mb-[52px] border-b border-b-line-strong scroll-mt-[104px]" id="retention">
            <p className="m-0 mb-[14px] text-[13px] font-bold tracking-[.14em] uppercase text-rust">06 · Retention</p>
            <h2 className="m-0 mb-[20px] text-[32px] leading-[1.15] font-bold tracking-[-.025em]">
              What we store, and for how long
            </h2>
            <div className="bg-white border border-line rounded-10 overflow-hidden">
              <div className="grid grid-cols-[1fr_300px] gap-[20px] px-[22px] py-[12px] bg-paper-warm border-b border-b-line text-[12px] font-bold tracking-[.12em] uppercase text-faint max-lg:grid-cols-1">
                <span>Stored</span>
                <span>Kept until</span>
              </div>
              <div className="grid grid-cols-[1fr_300px] gap-[20px] px-[22px] py-[18px] border-b border-b-line text-[15.5px] leading-[1.55] text-nav max-lg:grid-cols-1">
                <span>
                  <strong className="text-ink font-semibold">Catalog mirror</strong> — a current copy of your product
                  data.
                </span>
                <span>You uninstall and Shopify confirms erasure</span>
              </div>
              <div className="grid grid-cols-[1fr_300px] gap-[20px] px-[22px] py-[18px] border-b border-b-line text-[15.5px] leading-[1.55] text-nav max-lg:grid-cols-1">
                <span>
                  <strong className="text-ink font-semibold">Feed generation and publication history</strong>
                </span>
                <span>You uninstall and Shopify confirms erasure</span>
              </div>
              <div className="grid grid-cols-[1fr_300px] gap-[20px] px-[22px] py-[18px] border-b border-b-line text-[15.5px] leading-[1.55] text-nav max-lg:grid-cols-1">
                <span>
                  <strong className="text-ink font-semibold">Channel diagnostics</strong> — rejections and warnings,
                  normalized.
                </span>
                <span>You uninstall and Shopify confirms erasure</span>
              </div>
              <div className="grid grid-cols-[1fr_300px] gap-[20px] px-[22px] py-[18px] border-b border-b-line text-[15.5px] leading-[1.55] text-nav max-lg:grid-cols-1">
                <span>
                  <strong className="text-ink font-semibold">Raw third-party API responses</strong> — unprocessed
                  replies from channels and APIs.
                </span>
                <span className="text-ink font-medium">30 days maximum, then deleted automatically</span>
              </div>
              <div className="grid grid-cols-[1fr_300px] gap-[20px] px-[22px] py-[18px] border-b border-b-line text-[15.5px] leading-[1.55] text-nav max-lg:grid-cols-1">
                <span>
                  <strong className="text-ink font-semibold">Channel credentials</strong> — tokens for the channels you
                  connect, encrypted at rest with keys held in a key management service.
                </span>
                <span>You disconnect the channel or uninstall</span>
              </div>
              <div className="grid grid-cols-[1fr_300px] gap-[20px] px-[22px] py-[18px] text-[15.5px] leading-[1.55] text-nav max-lg:grid-cols-1">
                <span>
                  <strong className="text-ink font-semibold">Billing records</strong> — plan and charge history from
                  Shopify Billing.
                </span>
                <span>7 years, with identifying linkage severed</span>
              </div>
            </div>
            <p className="m-0 mt-[22px] text-[16.5px] leading-[1.65] text-nav">
              The uninstall timeline is described step by step on the{" "}
              <Link href="/legal/gdpr#uninstall">GDPR &amp; Data Rights</Link> page.
            </p>
          </section>
          <section className="p-0 pb-[52px] mb-[52px] border-b border-b-line-strong scroll-mt-[104px]" id="security">
            <p className="m-0 mb-[14px] text-[13px] font-bold tracking-[.14em] uppercase text-rust">07 · Security</p>
            <h2 className="m-0 mb-[20px] text-[32px] leading-[1.15] font-bold tracking-[-.025em]">How we protect it</h2>
            <ul className="m-0 mb-[16px] p-0 list-none flex flex-col gap-[14px]">
              <li className="grid grid-cols-[190px_1fr] gap-[18px] text-[16.5px] leading-[1.6] text-nav max-lg:grid-cols-1">
                <strong className="text-ink font-semibold">Single-store scoping</strong>
                <span>
                  Every record is tied to exactly one store, and that boundary is enforced at the database level. One
                  merchant&#39;s data is never reachable from another merchant&#39;s session.
                </span>
              </li>
              <li className="grid grid-cols-[190px_1fr] gap-[18px] text-[16.5px] leading-[1.6] text-nav max-lg:grid-cols-1">
                <strong className="text-ink font-semibold">Encrypted credentials</strong>
                <span>
                  Channel credentials are encrypted at rest; keys live in a key management service, not in application
                  code or configuration.
                </span>
              </li>
              <li className="grid grid-cols-[190px_1fr] gap-[18px] text-[16.5px] leading-[1.6] text-nav max-lg:grid-cols-1">
                <strong className="text-ink font-semibold">Read-only by design</strong>
                <span>
                  Scout holds no permission to change your Shopify catalog, so a fault in Scout cannot alter your store.
                </span>
              </li>
              <li className="grid grid-cols-[190px_1fr] gap-[18px] text-[16.5px] leading-[1.6] text-nav max-lg:grid-cols-1">
                <strong className="text-ink font-semibold">Tested exclusions</strong>
                <span>
                  The automated schema test described in section 3 blocks any release that would store shopper personal
                  data.
                </span>
              </li>
            </ul>
            <p className="m-0 text-[16.5px] leading-[1.65] text-nav">
              Scout does not currently hold third-party security certifications. We will update this page if that
              changes. If you find a security issue, contact us at security@meerkatscout.com.
            </p>
          </section>
          <section className="p-0 pb-[52px] mb-[52px] border-b border-b-line-strong scroll-mt-[104px]" id="billing">
            <p className="m-0 mb-[14px] text-[13px] font-bold tracking-[.14em] uppercase text-rust">08 · Payments</p>
            <h2 className="m-0 mb-[20px] text-[32px] leading-[1.15] font-bold tracking-[-.025em]">Billing</h2>
            <p className="m-0 text-[16.5px] leading-[1.65] text-nav">
              All charges are handled through Shopify&#39;s billing system and appear on your Shopify invoice. Scout
              does not process, store, or ever see your payment card details. We receive only the plan you selected and
              confirmation that a charge was approved.
            </p>
          </section>
          <section className="p-0 pb-[52px] mb-[52px] border-b border-b-line-strong scroll-mt-[104px]" id="rights">
            <p className="m-0 mb-[14px] text-[13px] font-bold tracking-[.14em] uppercase text-rust">09 · Rights</p>
            <h2 className="m-0 mb-[20px] text-[32px] leading-[1.15] font-bold tracking-[-.025em]">
              Your rights and deletion
            </h2>
            <p className="m-0 mb-[16px] text-[16.5px] leading-[1.65] text-nav">
              Every merchant can request an export of the data Scout holds for their store, or its erasure, at any time.
              Scout also implements Shopify&#39;s three mandatory privacy webhooks — customer data request, customer
              redact, and shop redact — and acts on each automatically.
            </p>
            <p className="m-0 text-[16.5px] leading-[1.65] text-nav">
              Details of each right, the uninstall and deletion timeline, and how to make a request are on the{" "}
              <Link href="/legal/gdpr">GDPR &amp; Data Rights</Link> page.
            </p>
          </section>
          <section className="p-0 pb-[52px] mb-[52px] border-b border-b-line-strong scroll-mt-[104px]" id="site">
            <p className="m-0 mb-[14px] text-[13px] font-bold tracking-[.14em] uppercase text-rust">
              10 · This website
            </p>
            <h2 className="m-0 mb-[20px] text-[32px] leading-[1.15] font-bold tracking-[-.025em]">
              Visitors to this website
            </h2>
            <p className="m-0 mb-[16px] text-[16.5px] leading-[1.65] text-nav">
              This marketing site sets no advertising or tracking cookies.{" "}
              <mark className="bg-badge text-rust border border-dashed border-amber rounded-[4px] px-[6px] py-px font-semibold">
                [SERVER LOG CLAIM — confirm with chosen host: whether logs exist, what they contain, and how long they
                are retained]
              </mark>
            </p>
            <p className="m-0 text-[16.5px] leading-[1.65] text-nav">
              If you book a demo or contact us, we keep the details you send in order to reply. Cookies used by the site
              and the app are listed on the <Link href="/legal/cookies">Cookie Preferences</Link> page.
            </p>
          </section>
          <section className="p-0 pb-[52px] mb-[52px] border-b border-b-line-strong scroll-mt-[104px]" id="changes">
            <p className="m-0 mb-[14px] text-[13px] font-bold tracking-[.14em] uppercase text-rust">11 · Updates</p>
            <h2 className="m-0 mb-[20px] text-[32px] leading-[1.15] font-bold tracking-[-.025em]">
              Changes to this policy
            </h2>
            <p className="m-0 text-[16.5px] leading-[1.65] text-nav">
              If we change what we collect, where it goes, or how long we keep it, we will update this page, change the
              effective date at the top, and notify installed merchants inside the app before the change takes effect.
            </p>
          </section>
          <section className="p-0 pb-[24px] scroll-mt-[104px]" id="contact">
            <p className="m-0 mb-[14px] text-[13px] font-bold tracking-[.14em] uppercase text-rust">12 · Contact</p>
            <h2 className="m-0 mb-[20px] text-[32px] leading-[1.15] font-bold tracking-[-.025em]">Contact</h2>
            <p className="m-0 mb-[16px] text-[16.5px] leading-[1.65] text-nav">
              The data controller for merchant account data, and the processor for your catalog data, is:
            </p>
            <address className="box-content not-italic flex flex-col gap-[8px] px-[24px] py-[22px] bg-white border border-line rounded-10 text-[16px] leading-[1.5] text-nav max-w-[480px]">
              <span className="text-ink font-semibold">
                Meerkat Scout, a sole proprietorship owned by Nana A. Smith
              </span>
              <span>255 Park Avenue, Worcester, MA 01605, United States</span>
              <span>Privacy: privacy@meerkatscout.com</span>
            </address>
          </section>
        </article>
      </section>

      {/* Privacy contact band */}
      <section className="relative bg-night pt-[84px] pb-[88px] px-gutter overflow-hidden max-md:pt-[56px] max-md:pb-[56px]">
        <div className="grid grid-cols-[1fr_1fr] gap-[60px] items-center max-lg:grid-cols-1">
          <div>
            <p className="m-0 mb-[22px] text-[13px] font-semibold tracking-[.13em] uppercase text-rust-bright">
              Questions about this policy
            </p>
            <h2 className="m-0 text-[46px] leading-[1.06] font-extrabold tracking-[-.035em] text-white text-pretty max-xl:text-[length:clamp(30px,3.59vw,46px)]">
              Ask us anything about how your catalog is handled.
            </h2>
          </div>
          <div className="flex flex-col gap-[18px]">
            <p className="m-0 text-[17px] leading-[1.6] text-night-muted-2">
              Channel reviewers, merchants, and anyone else with a question about this policy can reach the team
              directly. We answer privacy requests within the time required by law.
            </p>
            <div className="flex gap-[14px] items-center">
              <Link
                className="text-[14.5px] font-semibold text-white bg-rust-button rounded-6 px-[22px] py-[12px]"
                href="/legal/gdpr#requests"
              >
                Make a data request
              </Link>
              <span className="text-[14.5px] text-night-text">privacy@meerkatscout.com</span>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter current="Privacy-Policy" />
    </>
  );
}
