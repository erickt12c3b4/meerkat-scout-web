import Link from "next/link";
import { SiteHeader } from "@/components/site/site-header";
import { PreFooterCta } from "@/components/site/pre-footer-cta";
import { SiteFooter } from "@/components/site/site-footer";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Security & Trust — What Scout can touch and how it is enforced",
  description: "Written for the people who have to check it: specific, verifiable controls on what Scout accesses, what it never touches, and how each is enforced.",
};

// Source: Security.dc.html -> /security
export default function SecurityPage() {
  return (
    <>
      <SiteHeader active="resources" />

      {/* Security hero */}
      <section className="bg-paper pt-[84px] pb-[56px] px-gutter grid grid-cols-[1fr_1fr] gap-[60px] items-end max-md:pt-[56px] max-lg:grid-cols-1">
        <div>
          <p className="m-0 mb-[22px] text-[13px] font-semibold tracking-[.14em] uppercase text-rust">
            Resources · Security &amp; trust
          </p>
          <h1 className="m-0 text-[57px] leading-[1.08] font-extrabold tracking-[-.035em] text-pretty max-xl:text-[length:clamp(36px,4.45vw,57px)]">
            What Scout can touch, what it can&#39;t, and how each is enforced.
          </h1>
        </div>
        <div className="pb-[6px]">
          <p className="m-0 text-[16.5px] leading-[1.65] text-body">
            This page is written for the people who have to check it — channel reviewers, marketplace application teams,
            and merchants deciding whether to install. It lists specific, verifiable controls. It does not list
            certifications, because Scout holds none, and it does not describe a security team, because Scout is a sole
            proprietorship.
          </p>
        </div>
      </section>

      {/* Posture */}
      <section className="bg-paper pt-[20px] pb-[40px] px-gutter">
        <div className="grid grid-cols-4 gap-[16px] max-lg:grid-cols-2 max-md:grid-cols-1">
          <div className="flex flex-col gap-[6px] px-[22px] py-[20px] bg-white border border-line rounded-10">
            <span className="text-[11.5px] font-bold tracking-[.12em] uppercase text-faint">Shopify access</span>
            <strong className="text-[20px] font-bold tracking-[-.02em]">Read-only</strong>
            <span className="text-[13.5px] leading-[1.5] text-body">No write scope is requested or held.</span>
          </div>
          <div className="flex flex-col gap-[6px] px-[22px] py-[20px] bg-white border border-line rounded-10">
            <span className="text-[11.5px] font-bold tracking-[.12em] uppercase text-faint">Shopper personal data</span>
            <strong className="text-[20px] font-bold tracking-[-.02em]">None stored</strong>
            <span className="text-[13.5px] leading-[1.5] text-body">
              Stripped before storage; build fails otherwise.
            </span>
          </div>
          <div className="flex flex-col gap-[6px] px-[22px] py-[20px] bg-white border border-line rounded-10">
            <span className="text-[11.5px] font-bold tracking-[.12em] uppercase text-faint">Tenant isolation</span>
            <strong className="text-[20px] font-bold tracking-[-.02em]">Per store, at the database</strong>
            <span className="text-[13.5px] leading-[1.5] text-body">
              Verified by automated tooling on every change.
            </span>
          </div>
          <div className="flex flex-col gap-[6px] px-[22px] py-[20px] bg-white border border-line rounded-10">
            <span className="text-[11.5px] font-bold tracking-[.12em] uppercase text-faint">Payment card data</span>
            <strong className="text-[20px] font-bold tracking-[-.02em]">Never seen</strong>
            <span className="text-[13.5px] leading-[1.5] text-body">All billing runs through Shopify.</span>
          </div>
        </div>
      </section>

      {/* Controls */}
      <section className="bg-paper pt-[40px] pb-[80px] px-gutter max-md:pb-[56px]">
        <p className="m-0 mb-[22px] text-[13px] font-semibold tracking-[.14em] uppercase text-rust">
          The controls, one by one
        </p>
        <div className="flex flex-col border-b border-b-line-strong">
          <div className="grid grid-cols-[260px_1fr_320px] gap-[30px] px-0 py-[30px] border-t border-t-line-strong max-lg:grid-cols-1">
            <div className="flex flex-col gap-[6px]">
              <span className="text-[12px] font-bold tracking-[.14em] uppercase text-rust">01 · Access scope</span>
              <strong className="text-[22px] font-bold tracking-[-.02em] leading-[1.2]">
                Read-only access to your Shopify catalog.
              </strong>
            </div>
            <p className="m-0 text-[16px] leading-[1.6] text-nav">
              Scout requests read scopes for products, variants, inventory, and basic store details. It requests no
              write scope of any kind, so it cannot create, edit, or delete products — and a fault in Scout cannot alter
              your store. Order access is optional, requested only when you enable Conversion Intelligence, and
              revocable in your Shopify admin.
            </p>
            <div className="px-[16px] py-[14px] bg-white border border-line rounded-8 text-[13.5px] leading-[1.5] text-body">
              <span className="block text-[11px] font-bold tracking-[.12em] uppercase text-faint mb-[6px]">
                How it&#39;s enforced
              </span>
              Shopify enforces the scope list at the API. The scopes Scout requests are visible on the install screen
              and in your admin under Apps.
            </div>
          </div>
          <div className="grid grid-cols-[260px_1fr_320px] gap-[30px] px-0 py-[30px] border-t border-t-line-strong max-lg:grid-cols-1">
            <div className="flex flex-col gap-[6px]">
              <span className="text-[12px] font-bold tracking-[.14em] uppercase text-rust">02 · Personal data</span>
              <strong className="text-[22px] font-bold tracking-[-.02em] leading-[1.2]">
                No shopper personal data is collected.
              </strong>
            </div>
            <p className="m-0 text-[16px] leading-[1.6] text-nav">
              Scout stores no customer names, emails, addresses, phone numbers, or IP addresses. When order data is
              ingested, personal fields are removed before the record is written — not scrubbed afterwards. The join
              between orders and analytics uses product identifiers only.
            </p>
            <div className="px-[16px] py-[14px] bg-white border border-line rounded-8 text-[13.5px] leading-[1.5] text-body">
              <span className="block text-[11px] font-bold tracking-[.12em] uppercase text-faint mb-[6px]">
                How it&#39;s enforced
              </span>
              An automated schema test runs in the build pipeline. If a personal field appears in the order schema, the
              build fails and the change cannot be deployed.
            </div>
          </div>
          <div className="grid grid-cols-[260px_1fr_320px] gap-[30px] px-0 py-[30px] border-t border-t-line-strong max-lg:grid-cols-1">
            <div className="flex flex-col gap-[6px]">
              <span className="text-[12px] font-bold tracking-[.14em] uppercase text-rust">03 · Tenant isolation</span>
              <strong className="text-[22px] font-bold tracking-[-.02em] leading-[1.2]">
                Every record belongs to exactly one store.
              </strong>
            </div>
            <p className="m-0 text-[16px] leading-[1.6] text-nav">
              Every table carries a store scope, and every query is constrained by it at the database level. One
              merchant&#39;s data is not reachable from another merchant&#39;s session, by design rather than by
              convention.
            </p>
            <div className="px-[16px] py-[14px] bg-white border border-line rounded-8 text-[13.5px] leading-[1.5] text-body">
              <span className="block text-[11px] font-bold tracking-[.12em] uppercase text-faint mb-[6px]">
                How it&#39;s enforced
              </span>
              Automated tooling verifies the scope constraint on every change to the data layer; a query path that could
              cross stores fails the check.
            </div>
          </div>
          <div className="grid grid-cols-[260px_1fr_320px] gap-[30px] px-0 py-[30px] border-t border-t-line-strong max-lg:grid-cols-1">
            <div className="flex flex-col gap-[6px]">
              <span className="text-[12px] font-bold tracking-[.14em] uppercase text-rust">04 · Credentials</span>
              <strong className="text-[22px] font-bold tracking-[-.02em] leading-[1.2]">
                Channel credentials are encrypted at rest.
              </strong>
            </div>
            <p className="m-0 text-[16px] leading-[1.6] text-nav">
              OAuth tokens and, for Walmart, pasted API keys are encrypted before storage. Encryption keys are held in
              Google Cloud Key Management Service, not in application code or configuration. Disconnecting a channel
              deletes its credential.
            </p>
            <div className="px-[16px] py-[14px] bg-white border border-line rounded-8 text-[13.5px] leading-[1.5] text-body">
              <span className="block text-[11px] font-bold tracking-[.12em] uppercase text-faint mb-[6px]">
                How it&#39;s enforced
              </span>
              Keys never leave Cloud KMS; the application requests decryption at use time and holds plaintext only in
              memory for the duration of the call.
            </div>
          </div>
          <div className="grid grid-cols-[260px_1fr_320px] gap-[30px] px-0 py-[30px] border-t border-t-line-strong max-lg:grid-cols-1">
            <div className="flex flex-col gap-[6px]">
              <span className="text-[12px] font-bold tracking-[.14em] uppercase text-rust">05 · Data rights</span>
              <strong className="text-[22px] font-bold tracking-[-.02em] leading-[1.2]">
                Shopify&#39;s three privacy webhooks, with real export and erasure.
              </strong>
            </div>
            <p className="m-0 text-[16px] leading-[1.6] text-nav">
              customers/data_request, customers/redact, and shop/redact are implemented and handled automatically. On
              uninstall, all operational data for the store is deleted when Shopify&#39;s erasure request arrives (~48
              hours later). Any merchant can request an export or erasure by email.
            </p>
            <div className="px-[16px] py-[14px] bg-white border border-line rounded-8 text-[13.5px] leading-[1.5] text-body">
              <span className="block text-[11px] font-bold tracking-[.12em] uppercase text-faint mb-[6px]">
                How it&#39;s enforced
              </span>
              Webhook handling is part of the app&#39;s Shopify review. The uninstall timeline is documented step by
              step on <Link href="/legal/gdpr#uninstall">GDPR &amp; Data Rights</Link>.
            </div>
          </div>
          <div className="grid grid-cols-[260px_1fr_320px] gap-[30px] px-0 py-[30px] border-t border-t-line-strong max-lg:grid-cols-1">
            <div className="flex flex-col gap-[6px]">
              <span className="text-[12px] font-bold tracking-[.14em] uppercase text-rust">06 · Payments</span>
              <strong className="text-[22px] font-bold tracking-[-.02em] leading-[1.2]">
                Scout never sees payment card details.
              </strong>
            </div>
            <p className="m-0 text-[16px] leading-[1.6] text-nav">
              All charges are made through Shopify&#39;s billing system and appear on your Shopify invoice. Scout
              receives the plan selected and a charge confirmation, nothing more. There is no card form anywhere in
              Scout.
            </p>
            <div className="px-[16px] py-[14px] bg-white border border-line rounded-8 text-[13.5px] leading-[1.5] text-body">
              <span className="block text-[11px] font-bold tracking-[.12em] uppercase text-faint mb-[6px]">
                How it&#39;s enforced
              </span>
              There is no payment code path to secure: Scout has no integration with a card processor.
            </div>
          </div>
          <div className="grid grid-cols-[260px_1fr_320px] gap-[30px] px-0 py-[30px] border-t border-t-line-strong max-lg:grid-cols-1">
            <div className="flex flex-col gap-[6px]">
              <span className="text-[12px] font-bold tracking-[.14em] uppercase text-rust">07 · Retention</span>
              <strong className="text-[22px] font-bold tracking-[-.02em] leading-[1.2]">
                Raw third-party API responses are kept 30 days at most.
              </strong>
            </div>
            <p className="m-0 text-[16px] leading-[1.6] text-nav">
              Unprocessed replies from channels and other APIs are retained for debugging for a maximum of 30 days, then
              deleted automatically. Catalog mirror, feed history, and diagnostics are kept while you&#39;re installed
              and deleted on erasure.
            </p>
            <div className="px-[16px] py-[14px] bg-white border border-line rounded-8 text-[13.5px] leading-[1.5] text-body">
              <span className="block text-[11px] font-bold tracking-[.12em] uppercase text-faint mb-[6px]">
                How it&#39;s enforced
              </span>
              A scheduled job deletes raw responses older than 30 days. Retention for every other record type is listed
              in the <Link href="/legal/privacy#retention">Privacy Policy</Link>.
            </div>
          </div>
        </div>
      </section>

      {/* Infrastructure */}
      <section className="relative bg-night pt-[84px] pb-[88px] px-gutter overflow-hidden max-md:pt-[56px] max-md:pb-[56px]">
        <div className="grid grid-cols-[1fr_1fr] gap-[60px] items-start max-lg:grid-cols-1">
          <div>
            <p className="m-0 mb-[22px] text-[13px] font-semibold tracking-[.14em] uppercase text-rust-bright">
              Infrastructure and sub-processors
            </p>
            <h2 className="m-0 text-[40px] leading-[1.08] font-extrabold tracking-[-.035em] text-white text-pretty max-xl:text-[length:clamp(30px,3.13vw,40px)]">
              Where it runs, and who else touches product data.
            </h2>
            <p className="m-0 mt-[22px] text-[16px] leading-[1.6] text-night-muted-2">
              Only product and store data leaves Scout; shopper personal data cannot, because Scout never holds it. Each
              recipient processes what it receives under its own terms.
            </p>
          </div>
          <div className="bg-night-card border border-night-line rounded-12 overflow-hidden">
            <div className="grid grid-cols-[220px_1fr] gap-[16px] px-[20px] py-[14px] border-b border-b-night-line-3 text-[14.5px] max-lg:grid-cols-1">
              <span className="text-faint">Hosting</span>
              <span className="text-white">Google Cloud Platform · us-east1 (South Carolina, US)</span>
            </div>
            <div className="grid grid-cols-[220px_1fr] gap-[16px] px-[20px] py-[14px] border-b border-b-night-line-3 text-[14.5px] max-lg:grid-cols-1">
              <span className="text-faint">Key management</span>
              <span className="text-white">Google Cloud Key Management Service</span>
            </div>
            <div className="grid grid-cols-[220px_1fr] gap-[16px] px-[20px] py-[14px] border-b border-b-night-line-3 text-[14.5px] max-lg:grid-cols-1">
              <span className="text-faint">Sales channels</span>
              <span className="text-white">Only the ones you connect · your feed data</span>
            </div>
            <div className="grid grid-cols-[220px_1fr] gap-[16px] px-[20px] py-[14px] border-b border-b-night-line-3 text-[14.5px] max-lg:grid-cols-1">
              <span className="text-faint">Marketplace taxonomy APIs</span>
              <span className="text-white">Amazon, Walmart, eBay · product identifiers</span>
            </div>
            <div className="grid grid-cols-[220px_1fr] gap-[16px] px-[20px] py-[14px] border-b border-b-night-line-3 text-[14.5px] max-lg:grid-cols-1">
              <span className="text-faint">Competitive price data</span>
              <span className="text-white">
                Search API provider · public shopping listings looked up by product title and GTIN · no customer data ·
                raw responses deleted within 30 days
              </span>
            </div>
            <div className="grid grid-cols-[220px_1fr] gap-[16px] px-[20px] py-[14px] border-b border-b-night-line-3 text-[14.5px] max-lg:grid-cols-1">
              <span className="text-faint">Recommendations</span>
              <span className="text-white">
                AI model provider · product titles, descriptions, attributes and price signals · no customer or order
                data · not used to train models
              </span>
            </div>
            <div className="grid grid-cols-[220px_1fr] gap-[16px] px-[20px] py-[14px] text-[14.5px] max-lg:grid-cols-1">
              <span className="text-faint">Billing</span>
              <span className="text-white">Shopify · plan and charge status only</span>
            </div>
          </div>
        </div>
      </section>

      {/* Not claimed */}
      <section className="bg-paper pt-[88px] pb-[96px] px-gutter max-md:pt-[56px] max-md:pb-[56px]">
        <div className="grid grid-cols-[1fr_1fr] gap-[60px] items-start max-lg:grid-cols-1">
          <div>
            <p className="m-0 mb-[22px] text-[13px] font-semibold tracking-[.14em] uppercase text-rust">
              What this page does not claim
            </p>
            <h2 className="m-0 text-[40px] leading-[1.08] font-extrabold tracking-[-.035em] text-pretty max-xl:text-[length:clamp(30px,3.13vw,40px)]">
              No certifications. No audit badges. Said plainly.
            </h2>
          </div>
          <div className="flex flex-col gap-[14px]">
            <p className="m-0 text-[16.5px] leading-[1.65] text-nav">
              Scout holds no SOC 2, ISO 27001, HIPAA, or PCI certification, has not commissioned a third-party
              penetration test, and runs no bug bounty. It is operated by one person. If any of that changes, this page
              will say so — with the report, not a badge.
            </p>
            <p className="m-0 text-[16.5px] leading-[1.65] text-nav">
              If you find a security issue, email{" "}
              <a href="mailto:security@meerkatscout.com">security@meerkatscout.com</a> with steps to reproduce. It
              reaches the person who can fix it.
            </p>
            <div className="flex gap-[18px] mt-[6px]">
              <Link className="text-[14.5px] font-semibold" href="/legal/privacy">
                Privacy Policy →
              </Link>
              <Link className="text-[14.5px] font-semibold" href="/legal/gdpr">
                GDPR &amp; Data Rights →
              </Link>
              <Link className="text-[14.5px] font-semibold" href="/legal/terms">
                Terms of Service →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <PreFooterCta />

      <SiteFooter current="Security" />
    </>
  );
}
