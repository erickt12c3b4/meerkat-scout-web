import Link from "next/link";
import { SiteHeader } from "@/components/site/site-header";
import { SiteFooter } from "@/components/site/site-footer";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "GDPR & Data Rights",
  description: "Where Scout is a controller and where it is a processor, the rights you can exercise, and the uninstall-to-deletion timeline step by step.",
};

// Source: GDPR-Data-Rights.dc.html -> /legal/gdpr
export default function GDPRDataRightsPage() {
  return (
    <>
      <SiteHeader />

      {/* GDPR hero */}
      <section className="bg-paper pt-[76px] pb-[60px] px-gutter border-b border-b-line-strong max-md:pt-[48px] max-md:pb-[48px]">
        <p className="m-0 mb-[22px] text-[13px] font-semibold tracking-[.14em] uppercase text-rust">
          Legal · GDPR &amp; data rights
        </p>
        <h1 className="m-0 text-[57px] leading-[1.08] font-extrabold tracking-[-.035em] max-w-[760px] text-pretty max-xl:text-[length:clamp(36px,4.45vw,57px)]">
          Your rights, our role, and exactly what happens when you leave.
        </h1>
        <p className="m-0 mt-[28px] text-[17.5px] leading-[1.55] text-body max-w-[640px] text-pretty max-md:text-[16px]">
          This page states plainly where Scout is a controller and where it is a processor, lists the rights you can
          exercise, and walks through the uninstall-to-deletion timeline step by step.
        </p>
        <div className="flex gap-[36px] mt-[36px] text-[14px] text-dim max-md:flex-wrap max-md:gap-[20px]">
          <div className="flex flex-col gap-[4px]">
            <span className="text-[12px] font-bold tracking-[.12em] uppercase text-faint">Effective</span>
            <span className="text-ink font-medium">September 2, 2026</span>
          </div>
          <div className="flex flex-col gap-[4px]">
            <span className="text-[12px] font-bold tracking-[.12em] uppercase text-faint">Privacy contact</span>
            <span className="text-ink font-medium">privacy@meerkatscout.com</span>
          </div>
          <div className="flex flex-col gap-[4px]">
            <span className="text-[12px] font-bold tracking-[.12em] uppercase text-faint">Read with</span>
            <span className="text-ink font-medium">
              <Link href="/legal/privacy">Privacy Policy</Link>
            </span>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-[18px] mt-[52px] max-md:grid-cols-1">
          <div className="flex flex-col gap-[12px] p-[26px] pb-[24px] bg-white border border-line rounded-10 shadow-card">
            <span className="text-[12px] font-bold tracking-[.14em] uppercase text-rust">Scout is the controller</span>
            <span className="text-[22px] font-bold tracking-[-.02em] leading-[1.25]">Your merchant account data</span>
            <span className="text-[15.5px] leading-[1.55] text-body">
              Shop domain, the name and email on your Shopify account, plan and billing history, support correspondence.
              We decide why and how this is processed, so we answer for it.
            </span>
          </div>
          <div className="flex flex-col gap-[12px] p-[26px] pb-[24px] bg-white border border-line rounded-10 shadow-card">
            <span className="text-[12px] font-bold tracking-[.14em] uppercase text-rust">
              You are the controller · Scout is the processor
            </span>
            <span className="text-[22px] font-bold tracking-[-.02em] leading-[1.25]">Your catalog and order data</span>
            <span className="text-[15.5px] leading-[1.55] text-body">
              Products, variants, feeds, diagnostics, and any order data you choose to share. It flows through Scout on
              your instructions and for your purposes. You decide; we process.
            </span>
          </div>
        </div>
      </section>

      {/* GDPR body */}
      <section className="bg-paper pt-[64px] pb-[40px] px-gutter grid grid-cols-[260px_minmax(0,780px)] gap-[96px] items-start max-md:pt-[48px] max-xl:grid-cols-2 max-lg:grid-cols-1">
        <nav className="sticky top-[104px] flex flex-col gap-[2px]" aria-label="On this page">
          <p className="m-0 mb-[14px] text-[12px] font-bold tracking-[.14em] uppercase text-faint">On this page</p>
          <a className="text-[14.5px] leading-[1.4] text-nav px-0 py-[7px] border-t border-t-line-strong" href="#roles">
            1 Controller or processor
          </a>
          <a
            className="text-[14.5px] leading-[1.4] text-nav px-0 py-[7px] border-t border-t-line-strong"
            href="#shoppers"
          >
            2 Your shoppers
          </a>
          <a
            className="text-[14.5px] leading-[1.4] text-nav px-0 py-[7px] border-t border-t-line-strong"
            href="#rights"
          >
            3 Your rights
          </a>
          <a
            className="text-[14.5px] leading-[1.4] text-nav px-0 py-[7px] border-t border-t-line-strong"
            href="#requests"
          >
            4 Making a request
          </a>
          <a
            className="text-[14.5px] leading-[1.4] text-nav px-0 py-[7px] border-t border-t-line-strong"
            href="#webhooks"
          >
            5 Shopify privacy webhooks
          </a>
          <a
            className="text-[14.5px] leading-[1.4] text-nav px-0 py-[7px] border-t border-t-line-strong"
            href="#uninstall"
          >
            6 Uninstall and deletion timeline
          </a>
          <a
            className="text-[14.5px] leading-[1.4] text-nav px-0 py-[7px] border-t border-t-line-strong"
            href="#legal-basis"
          >
            7 Legal basis
          </a>
          <a
            className="text-[14.5px] leading-[1.4] text-nav px-0 py-[7px] border-t border-t-line-strong"
            href="#transfers"
          >
            8 Where data is held
          </a>
          <a
            className="text-[14.5px] leading-[1.4] text-nav px-0 py-[7px] border-t border-t-line-strong"
            href="#subprocessors"
          >
            9 Sub-processors
          </a>
          <a className="text-[14.5px] leading-[1.4] text-nav px-0 py-[7px] border-t border-t-line-strong" href="#dpa">
            10 Data processing agreement
          </a>
          <a
            className="text-[14.5px] leading-[1.4] text-nav px-0 py-[7px] border-t border-t-line-strong border-b border-b-line-strong"
            href="#complaints"
          >
            11 Complaints and contact
          </a>
          <div className="mt-[28px] flex flex-col gap-[8px]">
            <p className="m-0 mb-[6px] text-[12px] font-bold tracking-[.14em] uppercase text-faint">Related</p>
            <Link className="text-[14.5px] text-rust" href="/legal/privacy">
              Privacy Policy →
            </Link>
            <Link className="text-[14.5px] text-rust" href="/legal/terms">
              Terms of Service →
            </Link>
            <Link className="text-[14.5px] text-rust" href="/legal/cookies">
              Cookie Preferences →
            </Link>
          </div>
        </nav>
        <article className="flex flex-col">
          <section className="p-0 pb-[52px] mb-[52px] border-b border-b-line-strong scroll-mt-[104px]" id="roles">
            <p className="m-0 mb-[14px] text-[13px] font-bold tracking-[.14em] uppercase text-rust">01 · Roles</p>
            <h2 className="m-0 mb-[20px] text-[32px] leading-[1.15] font-bold tracking-[-.025em]">
              Controller or processor
            </h2>
            <p className="m-0 mb-[16px] text-[16.5px] leading-[1.65] text-nav">
              GDPR asks one question first: who decides why and how personal data is used? That party is the{" "}
              <strong className="text-ink font-semibold">controller</strong>. A party that handles data on the
              controller&#39;s instructions is a <strong className="text-ink font-semibold">processor</strong>. Scout is
              each of these for different data, and the distinction is not blurred here because your rights and our
              duties depend on it.
            </p>
            <div className="bg-white border border-line rounded-10 overflow-hidden">
              <div className="grid grid-cols-[1fr_1fr] gap-[20px] px-[22px] py-[12px] bg-paper-warm border-b border-b-line text-[12px] font-bold tracking-[.12em] uppercase text-faint max-lg:grid-cols-1">
                <span>Merchant account data — Scout is controller</span>
                <span>Catalog and order data — you are controller, Scout is processor</span>
              </div>
              <div className="grid grid-cols-[1fr_1fr] gap-[20px] px-[22px] py-[18px] border-b border-b-line text-[15.5px] leading-[1.55] text-nav max-lg:grid-cols-1">
                <span>
                  <strong className="text-ink font-semibold">What it is.</strong> Your shop domain; the name and email
                  address on your Shopify account; your plan, charge history and support correspondence.
                </span>
                <span>
                  <strong className="text-ink font-semibold">What it is.</strong> Products and variants, store metadata,
                  generated feeds, channel diagnostics, channel credentials, and — only if you enable it — order data
                  with personal fields already stripped.
                </span>
              </div>
              <div className="grid grid-cols-[1fr_1fr] gap-[20px] px-[22px] py-[18px] border-b border-b-line text-[15.5px] leading-[1.55] text-nav max-lg:grid-cols-1">
                <span>
                  <strong className="text-ink font-semibold">Why we hold it.</strong> To run your account, bill you
                  through Shopify, support you, and meet our own legal obligations. We set those purposes.
                </span>
                <span>
                  <strong className="text-ink font-semibold">Why we hold it.</strong> Because you installed Scout and
                  configured it to sync, transform and publish your catalog. You set the purpose; we carry out your
                  instructions.
                </span>
              </div>
              <div className="grid grid-cols-[1fr_1fr] gap-[20px] px-[22px] py-[18px] text-[15.5px] leading-[1.55] text-nav max-lg:grid-cols-1">
                <span>
                  <strong className="text-ink font-semibold">What that means for you.</strong> Exercise your rights
                  directly with us (section 3). We answer for how it is used.
                </span>
                <span>
                  <strong className="text-ink font-semibold">What that means for you.</strong> We process it only on
                  your instructions, keep it isolated to your store, delete it when you leave, and help you meet your
                  own GDPR obligations — including through the Shopify webhooks in section 5.
                </span>
              </div>
            </div>
            <p className="m-0 mt-[22px] text-[16.5px] leading-[1.65] text-nav">
              Where Scout uses third-party services to carry out your instructions — the channels you connect, taxonomy
              APIs, a search API, an AI model provider, and our hosting — those services act as our sub-processors for
              that data (section 9).
            </p>
          </section>
          <section className="p-0 pb-[52px] mb-[52px] border-b border-b-line-strong scroll-mt-[104px]" id="shoppers">
            <p className="m-0 mb-[14px] text-[13px] font-bold tracking-[.14em] uppercase text-rust">02 · Shoppers</p>
            <h2 className="m-0 mb-[20px] text-[32px] leading-[1.15] font-bold tracking-[-.025em]">Your shoppers</h2>
            <p className="m-0 mb-[16px] text-[16.5px] leading-[1.65] text-nav">
              Scout does not collect personal data about your customers. We store no customer names, email addresses,
              postal addresses, phone numbers, or IP addresses. When order data is ingested for Conversion Intelligence,
              those fields are removed before the record is stored, and an automated schema test fails our build if any
              personal field is ever introduced.
            </p>
            <p className="m-0 text-[16.5px] leading-[1.65] text-nav">
              If one of your shoppers exercises a right with you, Scout will have nothing about that person to return or
              erase — and we confirm that automatically through the Shopify webhooks below.
            </p>
          </section>
          <section className="p-0 pb-[52px] mb-[52px] border-b border-b-line-strong scroll-mt-[104px]" id="rights">
            <p className="m-0 mb-[14px] text-[13px] font-bold tracking-[.14em] uppercase text-rust">03 · Rights</p>
            <h2 className="m-0 mb-[20px] text-[32px] leading-[1.15] font-bold tracking-[-.025em]">Your rights</h2>
            <p className="m-0 mb-[20px] text-[16.5px] leading-[1.65] text-nav">
              For your merchant account data, and for the catalog data we hold on your behalf, every merchant can:
            </p>
            <ul className="m-0 p-0 list-none grid grid-cols-[1fr_1fr] gap-[14px] max-lg:grid-cols-1">
              <li className="flex flex-col gap-[6px] px-[20px] py-[18px] bg-white border border-line rounded-10">
                <strong className="text-[16px] text-ink font-semibold">Access and export</strong>
                <span className="text-[15px] leading-[1.55] text-body">
                  Receive a copy of the data Scout holds for your store, in a machine-readable format.
                </span>
              </li>
              <li className="flex flex-col gap-[6px] px-[20px] py-[18px] bg-white border border-line rounded-10">
                <strong className="text-[16px] text-ink font-semibold">Erasure</strong>
                <span className="text-[15px] leading-[1.55] text-body">
                  Have all operational data for your store deleted — on request, or automatically when you uninstall.
                </span>
              </li>
              <li className="flex flex-col gap-[6px] px-[20px] py-[18px] bg-white border border-line rounded-10">
                <strong className="text-[16px] text-ink font-semibold">Rectification</strong>
                <span className="text-[15px] leading-[1.55] text-body">
                  Catalog data is mirrored from Shopify: correct it there and Scout follows. Account details we hold
                  directly, we will correct on request.
                </span>
              </li>
              <li className="flex flex-col gap-[6px] px-[20px] py-[18px] bg-white border border-line rounded-10">
                <strong className="text-[16px] text-ink font-semibold">Restriction and objection</strong>
                <span className="text-[15px] leading-[1.55] text-body">
                  Ask us to pause processing of your account data, or object to a particular use, while a question is
                  resolved.
                </span>
              </li>
              <li className="flex flex-col gap-[6px] px-[20px] py-[18px] bg-white border border-line rounded-10">
                <strong className="text-[16px] text-ink font-semibold">Withdraw optional access</strong>
                <span className="text-[15px] leading-[1.55] text-body">
                  Revoke the optional order permission in your Shopify admin at any time; the rest of Scout keeps
                  working.
                </span>
              </li>
              <li className="flex flex-col gap-[6px] px-[20px] py-[18px] bg-white border border-line rounded-10">
                <strong className="text-[16px] text-ink font-semibold">Complain</strong>
                <span className="text-[15px] leading-[1.55] text-body">
                  Raise a concern with us first, or with your supervisory authority at any time (section 11).
                </span>
              </li>
            </ul>
          </section>
          <section className="p-0 pb-[52px] mb-[52px] border-b border-b-line-strong scroll-mt-[104px]" id="requests">
            <p className="m-0 mb-[14px] text-[13px] font-bold tracking-[.14em] uppercase text-rust">04 · Requests</p>
            <h2 className="m-0 mb-[20px] text-[32px] leading-[1.15] font-bold tracking-[-.025em]">Making a request</h2>
            <p className="m-0 mb-[16px] text-[16.5px] leading-[1.65] text-nav">
              Email privacy@meerkatscout.com from the email address on your Shopify account and include your shop
              domain. We will confirm receipt and respond within one month, as GDPR requires; if a request is unusually
              complex we may extend that by up to two further months and will tell you why.
            </p>
            <p className="m-0 text-[16.5px] leading-[1.65] text-nav">
              We verify that a request comes from the store owner or an authorized staff account before acting on it.
              Requests are free unless they are manifestly unfounded or repetitive.
            </p>
          </section>
          <section className="p-0 pb-[52px] mb-[52px] border-b border-b-line-strong scroll-mt-[104px]" id="webhooks">
            <p className="m-0 mb-[14px] text-[13px] font-bold tracking-[.14em] uppercase text-rust">05 · Webhooks</p>
            <h2 className="m-0 mb-[20px] text-[32px] leading-[1.15] font-bold tracking-[-.025em]">
              Shopify privacy webhooks
            </h2>
            <p className="m-0 mb-[22px] text-[16.5px] leading-[1.65] text-nav">
              Shopify requires every app to implement three privacy webhooks. Scout implements all three and handles
              each automatically.
            </p>
            <div className="bg-white border border-line rounded-10 overflow-hidden">
              <div className="grid grid-cols-[230px_1fr] gap-[20px] px-[22px] py-[12px] bg-paper-warm border-b border-b-line text-[12px] font-bold tracking-[.12em] uppercase text-faint max-lg:grid-cols-1">
                <span>Webhook</span>
                <span>What Scout does</span>
              </div>
              <div className="grid grid-cols-[230px_1fr] gap-[20px] px-[22px] py-[18px] border-b border-b-line text-[15.5px] leading-[1.55] text-nav max-lg:grid-cols-1">
                <code className="font-mono text-[14px] text-ink">customers/data_request</code>
                <span>
                  A shopper has asked you for their data. Scout searches its records for the customer and returns a
                  confirmation that no personal data is held — because none is stored.
                </span>
              </div>
              <div className="grid grid-cols-[230px_1fr] gap-[20px] px-[22px] py-[18px] border-b border-b-line text-[15.5px] leading-[1.55] text-nav max-lg:grid-cols-1">
                <code className="font-mono text-[14px] text-ink">customers/redact</code>
                <span>
                  A shopper has asked you to erase their data. Scout checks for any record tied to that customer and
                  deletes it if found; in normal operation there is nothing to delete.
                </span>
              </div>
              <div className="grid grid-cols-[230px_1fr] gap-[20px] px-[22px] py-[18px] text-[15.5px] leading-[1.55] text-nav max-lg:grid-cols-1">
                <code className="font-mono text-[14px] text-ink">shop/redact</code>
                <span>
                  Sent by Shopify about 48 hours after you uninstall. Scout deletes every operational record for the
                  store: catalog mirror, feeds, history, diagnostics, credentials, and any order data. Financial records
                  are kept as described in section 6.
                </span>
              </div>
            </div>
          </section>
          <section className="p-0 pb-[52px] mb-[52px] border-b border-b-line-strong scroll-mt-[104px]" id="uninstall">
            <p className="m-0 mb-[14px] text-[13px] font-bold tracking-[.14em] uppercase text-rust">06 · Leaving</p>
            <h2 className="m-0 mb-[20px] text-[32px] leading-[1.15] font-bold tracking-[-.025em]">
              Uninstall and deletion timeline
            </h2>
            <ol className="m-0 mb-[22px] p-0 list-none flex flex-col gap-0">
              <li className="grid grid-cols-[44px_1fr] gap-[20px] px-0 py-[18px] border-t border-t-line-strong max-lg:grid-cols-1">
                <span className="text-[13px] font-bold tracking-[.1em] text-rust pt-[3px]">01</span>
                <span className="text-[16.5px] leading-[1.6] text-nav">
                  <strong className="text-ink font-semibold">You uninstall Scout</strong> from your Shopify admin. Your
                  subscription ends through Shopify Billing. Scout&#39;s access tokens for your store are revoked by
                  Shopify immediately, so Scout can no longer read your catalog or publish feeds.
                </span>
              </li>
              <li className="grid grid-cols-[44px_1fr] gap-[20px] px-0 py-[18px] border-t border-t-line-strong max-lg:grid-cols-1">
                <span className="text-[13px] font-bold tracking-[.1em] text-rust pt-[3px]">02</span>
                <span className="text-[16.5px] leading-[1.6] text-nav">
                  <strong className="text-ink font-semibold">A brief holding period.</strong> Scout retains the store
                  record because Shopify sends the formal erasure request (
                  <code className="font-mono text-[14px] text-ink">shop/redact</code>) approximately 48 hours after
                  uninstall. Nothing is processed or published during this period. If you reinstall within it, your
                  configuration is still there.
                </span>
              </li>
              <li className="grid grid-cols-[44px_1fr] gap-[20px] px-0 py-[18px] border-t border-t-line-strong max-lg:grid-cols-1">
                <span className="text-[13px] font-bold tracking-[.1em] text-rust pt-[3px]">03</span>
                <span className="text-[16.5px] leading-[1.6] text-nav">
                  <strong className="text-ink font-semibold">The erasure request arrives</strong> and Scout deletes all
                  operational data for the store: catalog mirror, rules, generated feeds, publication history, channel
                  diagnostics, encrypted channel credentials, and any order data. Raw third-party API responses were
                  already on a 30-day automatic deletion cycle.
                </span>
              </li>
              <li className="grid grid-cols-[44px_1fr] gap-[20px] px-0 py-[18px] border-t border-t-line-strong border-b border-b-line-strong max-lg:grid-cols-1">
                <span className="text-[13px] font-bold tracking-[.1em] text-rust pt-[3px]">04</span>
                <span className="text-[16.5px] leading-[1.6] text-nav">
                  <strong className="text-ink font-semibold">Financial records remain, unlinked.</strong> Billing and
                  charge records are retained for 7 years under accounting law, with the linkage to your shop identity
                  severed so they can no longer be tied back to your store.
                </span>
              </li>
            </ol>
            <p className="m-0 text-[16.5px] leading-[1.65] text-nav">
              Feeds you already published live in each channel&#39;s systems under that channel&#39;s terms. Scout
              cannot delete them after uninstall; remove them in the channel if you wish.
            </p>
          </section>
          <section className="p-0 pb-[52px] mb-[52px] border-b border-b-line-strong scroll-mt-[104px]" id="legal-basis">
            <p className="m-0 mb-[14px] text-[13px] font-bold tracking-[.14em] uppercase text-rust">07 · Basis</p>
            <h2 className="m-0 mb-[20px] text-[32px] leading-[1.15] font-bold tracking-[-.025em]">Legal basis</h2>
            <ul className="m-0 p-0 list-none flex flex-col gap-[12px]">
              <li className="grid grid-cols-[190px_1fr] gap-[18px] text-[16.5px] leading-[1.6] text-nav max-lg:grid-cols-1">
                <strong className="text-ink font-semibold">Contract</strong>
                <span>
                  Merchant account data is processed to perform our agreement with you — running your account, billing,
                  support.
                </span>
              </li>
              <li className="grid grid-cols-[190px_1fr] gap-[18px] text-[16.5px] leading-[1.6] text-nav max-lg:grid-cols-1">
                <strong className="text-ink font-semibold">Legal obligation</strong>
                <span>Financial records are retained because accounting law requires it.</span>
              </li>
              <li className="grid grid-cols-[190px_1fr] gap-[18px] text-[16.5px] leading-[1.6] text-nav max-lg:grid-cols-1">
                <strong className="text-ink font-semibold">Your instructions</strong>
                <span>
                  Catalog and order data is processed as your processor, on your instructions, under the terms and this
                  page; the legal basis for that processing is yours to hold as controller.
                </span>
              </li>
            </ul>
          </section>
          <section className="p-0 pb-[52px] mb-[52px] border-b border-b-line-strong scroll-mt-[104px]" id="transfers">
            <p className="m-0 mb-[14px] text-[13px] font-bold tracking-[.14em] uppercase text-rust">08 · Location</p>
            <h2 className="m-0 mb-[20px] text-[32px] leading-[1.15] font-bold tracking-[-.025em]">
              Where data is held
            </h2>
            <p className="m-0 mb-[16px] text-[16.5px] leading-[1.65] text-nav">
              Scout is hosted by Google Cloud Platform in us-east1 (South Carolina, United States). Where data about EU
              or UK merchants leaves the EEA or UK — including to the channels you connect — the transfer relies on
              Standard Contractual Clauses, with the UK Addendum where applicable.
            </p>
            <p className="m-0 text-[16.5px] leading-[1.65] text-nav">
              Channel credentials are encrypted at rest with keys held in Google Cloud Key Management Service (Cloud
              KMS), and every record is scoped to a single store at the database level.
            </p>
          </section>
          <section
            className="p-0 pb-[52px] mb-[52px] border-b border-b-line-strong scroll-mt-[104px]"
            id="subprocessors"
          >
            <p className="m-0 mb-[14px] text-[13px] font-bold tracking-[.14em] uppercase text-rust">
              09 · Sub-processors
            </p>
            <h2 className="m-0 mb-[20px] text-[32px] leading-[1.15] font-bold tracking-[-.025em]">Sub-processors</h2>
            <p className="m-0 mb-[16px] text-[16.5px] leading-[1.65] text-nav">
              When acting as your processor, Scout uses these categories of sub-processor. The current named list is in
              the <Link href="/legal/privacy#outward">Privacy Policy</Link>.
            </p>
            <ul className="list-disc m-0 mb-[16px] p-0 pl-[22px] flex flex-col gap-[9px] text-[16.5px] leading-[1.6] text-nav">
              <li>The sales channels you choose to connect (feed data).</li>
              <li>Marketplace taxonomy APIs — Amazon, Walmart, eBay (product identifiers).</li>
              <li>
                A search API provider that returns public shopping listings for competitive price monitoring. Receives
                product titles and identifiers only; raw responses are deleted within 30 days.
              </li>
              <li>
                An AI model provider that generates pricing and content recommendations. Receives product context only
                (titles, descriptions, attributes, price signals) — never customer or order data — under terms that
                exclude training on submitted data.
              </li>
              <li>
                Hosting and key management — Google Cloud Platform, Google Cloud Key Management Service (Cloud KMS).
              </li>
            </ul>
            <p className="m-0 text-[16.5px] leading-[1.65] text-nav">
              We will update that list and notify installed merchants in the app at least 30 days before adding a new
              sub-processor.
            </p>
          </section>
          <section className="p-0 pb-[52px] mb-[52px] border-b border-b-line-strong scroll-mt-[104px]" id="dpa">
            <p className="m-0 mb-[14px] text-[13px] font-bold tracking-[.14em] uppercase text-rust">10 · DPA</p>
            <h2 className="m-0 mb-[20px] text-[32px] leading-[1.15] font-bold tracking-[-.025em]">
              Data processing agreement
            </h2>
            <p className="m-0 text-[16.5px] leading-[1.65] text-nav">
              As your processor, Scout&#39;s obligations to you under Article 28 GDPR are set out in our data processing
              agreement: incorporated into the <Link href="/legal/terms">Terms of Service</Link>.
            </p>
          </section>
          <section className="p-0 pb-[24px] scroll-mt-[104px]" id="complaints">
            <p className="m-0 mb-[14px] text-[13px] font-bold tracking-[.14em] uppercase text-rust">11 · Contact</p>
            <h2 className="m-0 mb-[20px] text-[32px] leading-[1.15] font-bold tracking-[-.025em]">
              Complaints and contact
            </h2>
            <p className="m-0 mb-[16px] text-[16.5px] leading-[1.65] text-nav">
              You have the right to lodge a complaint with the supervisory authority in your country. We would ask that
              you raise it with us first so we can try to resolve it.
            </p>
            <address className="box-content not-italic flex flex-col gap-[8px] px-[24px] py-[22px] bg-white border border-line rounded-10 text-[16px] leading-[1.5] text-nav max-w-[520px]">
              <span className="text-ink font-semibold">
                Meerkat Scout, a sole proprietorship owned by Nana A. Smith
              </span>
              <span>255 Park Avenue, Worcester, MA 01605, United States</span>
              <span>Privacy: privacy@meerkatscout.com</span>
              <span>
                Data protection officer: Not required — none appointed. A sole proprietor processing no shopper personal
                data does not meet the Article 37 threshold.
              </span>
              <span>
                EU / UK representative: Not currently appointed. If the service is offered to EU or UK data subjects, an
                Article 27 representative may be required; this will be revisited.
              </span>
            </address>
          </section>
        </article>
      </section>

      {/* GDPR request band */}
      <section className="relative bg-night pt-[84px] pb-[88px] px-gutter overflow-hidden max-md:pt-[56px] max-md:pb-[56px]">
        <div className="grid grid-cols-[1fr_1fr] gap-[60px] items-center max-lg:grid-cols-1">
          <div>
            <p className="m-0 mb-[22px] text-[13px] font-semibold tracking-[.13em] uppercase text-rust-bright">
              Export or erase
            </p>
            <h2 className="m-0 text-[46px] leading-[1.06] font-extrabold tracking-[-.035em] text-white text-pretty max-xl:text-[length:clamp(30px,3.59vw,46px)]">
              One email. Your data, or its deletion, within a month.
            </h2>
          </div>
          <div className="flex flex-col gap-[18px]">
            <p className="m-0 text-[17px] leading-[1.6] text-night-muted-2">
              Write from the email on your Shopify account, include your shop domain, and say whether you want an export
              or an erasure. We confirm receipt and act within the statutory period.
            </p>
            <div className="flex gap-[14px] items-center">
              <a
                className="text-[14.5px] font-semibold text-white bg-rust-button rounded-6 px-[22px] py-[12px]"
                href="#requests"
              >
                How to make a request
              </a>
              <span className="text-[14.5px] text-night-text">privacy@meerkatscout.com</span>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter current="GDPR-Data-Rights" />
    </>
  );
}
