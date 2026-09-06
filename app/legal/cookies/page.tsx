import Link from "next/link";
import { SiteHeader } from "@/components/site/site-header";
import { SiteFooter } from "@/components/site/site-footer";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cookie Preferences",
  description: "Scout uses strictly necessary cookies and nothing else: no advertising, no cross-site tracking, no analytics. This page shows exactly what is set, and when.",
};

// Source: Cookie-Preferences.dc.html -> /legal/cookies
export default function CookiePreferencesPage() {
  return (
    <>
      <SiteHeader />

      {/* Cookies hero */}
      <section className="bg-paper pt-[76px] pb-[60px] px-gutter border-b border-b-line-strong max-md:pt-[48px] max-md:pb-[48px]">
        <p className="m-0 mb-[22px] text-[13px] font-semibold tracking-[.14em] uppercase text-rust">
          Legal · Cookie preferences
        </p>
        <h1 className="m-0 text-[57px] leading-[1.08] font-extrabold tracking-[-.035em] max-w-[760px] text-pretty max-xl:text-[length:clamp(36px,4.45vw,57px)]">
          Only the cookies that keep you signed in. Nothing that follows you.
        </h1>
        <p className="m-0 mt-[28px] text-[17.5px] leading-[1.55] text-body max-w-[640px] text-pretty max-md:text-[16px]">
          Scout uses strictly necessary cookies and nothing else. There is no advertising, no cross-site tracking, and
          no analytics — so there is no consent banner and nothing here to opt out of. This page shows exactly what is
          set, and where.
        </p>
        <div className="flex gap-[36px] mt-[36px] text-[14px] text-dim max-md:flex-wrap max-md:gap-[20px]">
          <div className="flex flex-col gap-[4px]">
            <span className="text-[12px] font-bold tracking-[.12em] uppercase text-faint">Effective</span>
            <span className="text-ink font-medium">September 2, 2026</span>
          </div>
          <div className="flex flex-col gap-[4px]">
            <span className="text-[12px] font-bold tracking-[.12em] uppercase text-faint">Advertising cookies</span>
            <span className="text-ink font-medium">None</span>
          </div>
          <div className="flex flex-col gap-[4px]">
            <span className="text-[12px] font-bold tracking-[.12em] uppercase text-faint">Analytics cookies</span>
            <span className="text-ink font-medium">None</span>
          </div>
          <div className="flex flex-col gap-[4px]">
            <span className="text-[12px] font-bold tracking-[.12em] uppercase text-faint">Consent required</span>
            <span className="text-ink font-medium">No — strictly necessary only</span>
          </div>
        </div>
      </section>

      {/* Cookies body */}
      <section className="bg-paper pt-[64px] pb-[40px] px-gutter grid grid-cols-[260px_minmax(0,780px)] gap-[96px] items-start max-md:pt-[48px] max-xl:grid-cols-2 max-lg:grid-cols-1">
        <nav className="sticky top-[104px] flex flex-col gap-[2px]" aria-label="On this page">
          <p className="m-0 mb-[14px] text-[12px] font-bold tracking-[.14em] uppercase text-faint">On this page</p>
          <a
            className="text-[14.5px] leading-[1.4] text-nav px-0 py-[7px] border-t border-t-line-strong"
            href="#preferences"
          >
            1 Your preferences
          </a>
          <a
            className="text-[14.5px] leading-[1.4] text-nav px-0 py-[7px] border-t border-t-line-strong"
            href="#profiles"
          >
            2 Two places, two profiles
          </a>
          <a className="text-[14.5px] leading-[1.4] text-nav px-0 py-[7px] border-t border-t-line-strong" href="#app">
            3 Cookies in the app
          </a>
          <a className="text-[14.5px] leading-[1.4] text-nav px-0 py-[7px] border-t border-t-line-strong" href="#site">
            4 Cookies on this website
          </a>
          <a className="text-[14.5px] leading-[1.4] text-nav px-0 py-[7px] border-t border-t-line-strong" href="#third">
            5 Third-party cookies
          </a>
          <a
            className="text-[14.5px] leading-[1.4] text-nav px-0 py-[7px] border-t border-t-line-strong"
            href="#browser"
          >
            6 Blocking cookies in your browser
          </a>
          <a
            className="text-[14.5px] leading-[1.4] text-nav px-0 py-[7px] border-t border-t-line-strong border-b border-b-line-strong"
            href="#future"
          >
            7 If this changes
          </a>
          <div className="mt-[28px] flex flex-col gap-[8px]">
            <p className="m-0 mb-[6px] text-[12px] font-bold tracking-[.14em] uppercase text-faint">Related</p>
            <Link className="text-[14.5px] text-rust" href="/legal/privacy">
              Privacy Policy →
            </Link>
            <Link className="text-[14.5px] text-rust" href="/legal/terms">
              Terms of Service →
            </Link>
            <Link className="text-[14.5px] text-rust" href="/legal/gdpr">
              GDPR &amp; Data Rights →
            </Link>
          </div>
        </nav>
        <article className="flex flex-col">
          <section className="p-0 pb-[52px] mb-[52px] border-b border-b-line-strong scroll-mt-[104px]" id="preferences">
            <p className="m-0 mb-[14px] text-[13px] font-bold tracking-[.14em] uppercase text-rust">01 · Preferences</p>
            <h2 className="m-0 mb-[20px] text-[32px] leading-[1.15] font-bold tracking-[-.025em]">Your preferences</h2>
            <p className="m-0 mb-[22px] text-[16.5px] leading-[1.65] text-nav">
              There is currently one category of cookie, and it cannot be turned off because the app does not work
              without it. Optional categories will appear here as switches if we ever add them.
            </p>
            <div className="bg-white border border-line rounded-10 overflow-hidden">
              <div className="grid grid-cols-[1fr_140px] gap-[20px] items-center px-[22px] py-[20px] border-b border-b-line max-lg:grid-cols-1">
                <div className="flex flex-col gap-[5px]">
                  <strong className="text-[16.5px] text-ink font-semibold">Strictly necessary</strong>
                  <span className="text-[15px] leading-[1.5] text-body">
                    Keeps you signed in to the app inside Shopify and protects forms against forgery. Sets nothing that
                    identifies you across other sites.
                  </span>
                </div>
                <span className="justify-self-end inline-flex items-center gap-[8px] text-[13px] font-semibold text-ok-text bg-[#F1FAF5] border border-[#CDE9D9] rounded-full px-[12px] py-[6px]">
                  <span className="w-[7px] h-[7px] rounded-full bg-ok-text"></span>Always on
                </span>
              </div>
              <div className="grid grid-cols-[1fr_140px] gap-[20px] items-center px-[22px] py-[20px] border-b border-b-line opacity-55 max-lg:grid-cols-1">
                <div className="flex flex-col gap-[5px]">
                  <strong className="text-[16.5px] text-ink font-semibold">Analytics</strong>
                  <span className="text-[15px] leading-[1.5] text-body">
                    Not used. Scout sets no analytics cookies in the app or on this website.
                  </span>
                </div>
                <span className="justify-self-end text-[13px] font-semibold text-faint border border-line-strong rounded-full px-[12px] py-[6px]">
                  Not in use
                </span>
              </div>
              <div className="grid grid-cols-[1fr_140px] gap-[20px] items-center px-[22px] py-[20px] opacity-55 max-lg:grid-cols-1">
                <div className="flex flex-col gap-[5px]">
                  <strong className="text-[16.5px] text-ink font-semibold">Advertising and tracking</strong>
                  <span className="text-[15px] leading-[1.5] text-body">
                    Not used. No pixels, no retargeting, no cross-site identifiers.
                  </span>
                </div>
                <span className="justify-self-end text-[13px] font-semibold text-faint border border-line-strong rounded-full px-[12px] py-[6px]">
                  Not in use
                </span>
              </div>
            </div>
          </section>
          <section className="p-0 pb-[52px] mb-[52px] border-b border-b-line-strong scroll-mt-[104px]" id="profiles">
            <p className="m-0 mb-[14px] text-[13px] font-bold tracking-[.14em] uppercase text-rust">02 · Context</p>
            <h2 className="m-0 mb-[20px] text-[32px] leading-[1.15] font-bold tracking-[-.025em]">
              Two places, two profiles
            </h2>
            <p className="m-0 mb-[22px] text-[16.5px] leading-[1.65] text-nav">
              Meerkat Scout exists in two places with different cookie needs.
            </p>
            <div className="grid grid-cols-[1fr_1fr] gap-[18px] max-lg:grid-cols-1">
              <div className="flex flex-col gap-[10px] px-[24px] py-[22px] bg-white border border-line rounded-10">
                <span className="text-[12px] font-bold tracking-[.14em] uppercase text-rust">The embedded app</span>
                <strong className="text-[19px] font-bold tracking-[-.02em] leading-[1.25]">
                  Runs inside your Shopify admin
                </strong>
                <span className="text-[15.5px] leading-[1.55] text-body">
                  Authentication is handled by Shopify&#39;s session tokens. Scout sets only what is needed to keep that
                  session valid and to protect requests. Details in section 3.
                </span>
              </div>
              <div className="flex flex-col gap-[10px] px-[24px] py-[22px] bg-white border border-line rounded-10">
                <span className="text-[12px] font-bold tracking-[.14em] uppercase text-rust">This website</span>
                <strong className="text-[19px] font-bold tracking-[-.02em] leading-[1.25]">
                  Public marketing pages
                </strong>
                <span className="text-[15.5px] leading-[1.55] text-body">
                  Static pages you can read without an account. Scout sets no cookies here. Details in section 4.
                </span>
              </div>
            </div>
          </section>
          <section className="p-0 pb-[52px] mb-[52px] border-b border-b-line-strong scroll-mt-[104px]" id="app">
            <p className="m-0 mb-[14px] text-[13px] font-bold tracking-[.14em] uppercase text-rust">03 · App</p>
            <h2 className="m-0 mb-[20px] text-[32px] leading-[1.15] font-bold tracking-[-.025em]">
              Cookies in the app
            </h2>
            <p className="m-0 mb-[22px] text-[16.5px] leading-[1.65] text-nav">
              All of these are strictly necessary. None contains catalog data, and none is readable by any site other
              than Scout.
            </p>
            <div className="bg-white border border-line rounded-10 overflow-hidden">
              <div className="grid grid-cols-[220px_1fr_170px] gap-[20px] px-[22px] py-[12px] bg-paper-warm border-b border-b-line text-[12px] font-bold tracking-[.12em] uppercase text-faint max-lg:grid-cols-1">
                <span>Cookie</span>
                <span>Purpose</span>
                <span>Lifetime</span>
              </div>
              <div className="grid grid-cols-[220px_1fr_170px] gap-[20px] px-[22px] py-[18px] border-b border-b-line text-[15.5px] leading-[1.55] text-nav max-lg:grid-cols-1">
                <code className="font-mono text-[14px] text-ink">
                  <mark className="bg-badge text-rust border border-dashed border-amber rounded-[4px] px-[6px] py-px font-semibold font-sans">
                    [SESSION COOKIE NAME]
                  </mark>
                </code>
                <span>
                  Identifies your signed-in session with Scout after Shopify has authenticated you. Without it every
                  request would require a new sign-in.
                </span>
                <span>
                  <mark className="bg-badge text-rust border border-dashed border-amber rounded-[4px] px-[6px] py-px font-semibold">
                    [SESSION LIFETIME]
                  </mark>
                </span>
              </div>
              <div className="grid grid-cols-[220px_1fr_170px] gap-[20px] px-[22px] py-[18px] text-[15.5px] leading-[1.55] text-nav max-lg:grid-cols-1">
                <code className="font-mono text-[14px] text-ink">
                  <mark className="bg-badge text-rust border border-dashed border-amber rounded-[4px] px-[6px] py-px font-semibold font-sans">
                    [CSRF COOKIE NAME]
                  </mark>
                </code>
                <span>
                  Holds a one-time token that proves a form submission or action came from you and not from another
                  site.
                </span>
                <span>Session</span>
              </div>
            </div>
            <p className="m-0 mt-[22px] text-[16.5px] leading-[1.65] text-nav">
              Because Scout is embedded in your Shopify admin, Shopify itself also sets cookies on its own domain to run
              the admin. Those belong to Shopify and are described in Shopify&#39;s cookie policy, not this one.
            </p>
          </section>
          <section className="p-0 pb-[52px] mb-[52px] border-b border-b-line-strong scroll-mt-[104px]" id="site">
            <p className="m-0 mb-[14px] text-[13px] font-bold tracking-[.14em] uppercase text-rust">04 · Website</p>
            <h2 className="m-0 mb-[20px] text-[32px] leading-[1.15] font-bold tracking-[-.025em]">
              Cookies on this website
            </h2>
            <p className="m-0 text-[16.5px] leading-[1.65] text-nav">
              None. The marketing site is a set of static pages; reading them sets no cookies from Scout.{" "}
              <mark className="bg-badge text-rust border border-dashed border-amber rounded-[4px] px-[6px] py-px font-semibold">
                [SERVER LOG CLAIM — confirm with chosen host]
              </mark>{" "}
              See the <Link href="/legal/privacy#site">Privacy Policy</Link>.
            </p>
          </section>
          <section className="p-0 pb-[52px] mb-[52px] border-b border-b-line-strong scroll-mt-[104px]" id="third">
            <p className="m-0 mb-[14px] text-[13px] font-bold tracking-[.14em] uppercase text-rust">
              05 · Third parties
            </p>
            <h2 className="m-0 mb-[20px] text-[32px] leading-[1.15] font-bold tracking-[-.025em]">
              Third-party cookies
            </h2>
            <p className="m-0 mb-[16px] text-[16.5px] leading-[1.65] text-nav">
              Scout embeds no third-party scripts that set cookies — no analytics, no advertising pixels, no chat
              widgets, no social buttons.
            </p>
            <p className="m-0 text-[16.5px] leading-[1.65] text-nav">
              The sales channels you connect (Google, Meta, TikTok, and the rest) may set cookies when you sign in to{" "}
              <em>their</em> sites to authorize the connection. That happens on their domains, under their policies, and
              is outside Scout&#39;s control.
            </p>
          </section>
          <section className="p-0 pb-[52px] mb-[52px] border-b border-b-line-strong scroll-mt-[104px]" id="browser">
            <p className="m-0 mb-[14px] text-[13px] font-bold tracking-[.14em] uppercase text-rust">
              06 · Your browser
            </p>
            <h2 className="m-0 mb-[20px] text-[32px] leading-[1.15] font-bold tracking-[-.025em]">
              Blocking cookies in your browser
            </h2>
            <p className="m-0 text-[16.5px] leading-[1.65] text-nav">
              You can block or delete cookies in your browser&#39;s settings. If you block the strictly necessary
              cookies above, the Scout app will not be able to keep you signed in inside Shopify and will not function.
              Reading this website is unaffected.
            </p>
          </section>
          <section className="p-0 pb-[24px] scroll-mt-[104px]" id="future">
            <p className="m-0 mb-[14px] text-[13px] font-bold tracking-[.14em] uppercase text-rust">07 · Changes</p>
            <h2 className="m-0 mb-[20px] text-[32px] leading-[1.15] font-bold tracking-[-.025em]">If this changes</h2>
            <p className="m-0 mb-[16px] text-[16.5px] leading-[1.65] text-nav">
              If we add analytics or any other optional cookie, we will list it here first, add a switch for it in
              section 1 that defaults to off, ask for consent where the law requires, and update the effective date
              above.
            </p>
            <p className="m-0 text-[16.5px] leading-[1.65] text-nav">Questions: privacy@meerkatscout.com.</p>
          </section>
        </article>
      </section>

      {/* Cookies band */}
      <section className="relative bg-night pt-[84px] pb-[88px] px-gutter overflow-hidden max-md:pt-[56px] max-md:pb-[56px]">
        <div className="grid grid-cols-[1fr_1fr] gap-[60px] items-center max-lg:grid-cols-1">
          <div>
            <p className="m-0 mb-[22px] text-[13px] font-semibold tracking-[.13em] uppercase text-rust-bright">
              Nothing to opt out of
            </p>
            <h2 className="m-0 text-[46px] leading-[1.06] font-extrabold tracking-[-.035em] text-white text-pretty max-xl:text-[length:clamp(30px,3.59vw,46px)]">
              No banner, because there&#39;s nothing to consent to.
            </h2>
          </div>
          <div className="flex flex-col gap-[18px]">
            <p className="m-0 text-[17px] leading-[1.6] text-night-muted-2">
              Scout watches your feeds, not you. The full account of what we collect and where it goes is in the Privacy
              Policy.
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
                Your data rights
              </Link>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter current="Cookie-Preferences" />
    </>
  );
}
