import type { Metadata } from "next";
import Image from "next/image";
import { Lock, Shield } from "lucide-react";
import { ClockGlyph, FileTextGlyph } from "@/components/brand-icons";
import { SiteHeader } from "@/components/site/site-header";
import { ContactFooter } from "@/components/site/site-footer";
import { ContactForm } from "@/components/forms/contact-form";

export const metadata: Metadata = {
  title: "Contact — Let’s talk about your store",
  description: "Questions about Scout, your catalog, or your next channel? Tell us what you need.",
};

const iconCircle =
  "box-content inline-flex h-[54px] w-[54px] flex-none items-center justify-center rounded-full border border-tint-line bg-rust-tint";

// Source: Contact.dc.html -> /contact
export default function ContactPage() {
  return (
    <>
      <SiteHeader active="resources" demoHref="/contact#demo" />

      {/* Contact */}
      <section className="relative overflow-hidden bg-paper px-[70px] pt-[36px] pb-[32px] max-lg:px-[40px] max-xs:px-[20px]">
        <div className="grid grid-cols-[minmax(0,1fr)_730px] items-start gap-[80px] max-xl:grid-cols-[minmax(0,1fr)_minmax(0,620px)] max-xl:gap-[40px] max-lg:grid-cols-1">
          <div className="pt-[6px]">
            <p className="m-0 mb-[18px] text-[13px] font-semibold tracking-[.14em] text-rust uppercase">Contact</p>
            <h1 className="m-0 text-[70px] leading-[.98] font-extrabold tracking-[-.04em] text-pretty max-xl:text-[length:clamp(36px,5.47vw,70px)]">
              Let’s talk about your store.
            </h1>
            <p className="m-0 mt-[22px] text-[19px] leading-[1.5] text-pretty text-body max-md:text-[16px]">
              Questions about Scout, your catalog, or your next channel? Tell us what you need.
            </p>
            <div className="mt-[30px] flex flex-col gap-[22px]">
              <div className="flex items-start gap-[18px]">
                <span className={iconCircle}>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#C2571E"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                  </svg>
                </span>
                <span className="flex flex-col gap-[4px] pt-[4px]">
                  <span className="text-[17px] font-bold">Prefer email?</span>
                  <a
                    className="text-[17px] font-semibold text-rust-button underline decoration-[1px] underline-offset-[3px]"
                    href="mailto:support@meerkatscout.com"
                  >
                    support@meerkatscout.com
                  </a>
                </span>
              </div>
              <div className="flex items-start gap-[18px]">
                <span className={iconCircle}>
                  <ClockGlyph size={24} stroke="#C2571E" strokeWidth="1.6" />
                </span>
                <span className="flex flex-col gap-[3px] pt-[4px]">
                  <span className="text-[17px] font-bold">What to expect</span>
                  <span className="text-[16px] text-body">We aim to reply within one business day.</span>
                  <span className="text-[14.5px] text-faint">Monday–Friday, excluding US holidays.</span>
                </span>
              </div>
            </div>
          </div>
          <ContactForm />
        </div>
        {/* Scout as a mail carrier, anchored to the section's bottom edge under the copy column (hidden below 1024: it would sit under the form). */}
        <Image
          src="/assets/scout-mail.png"
          width={426}
          height={371}
          alt="Scout, dressed as a mail carrier, waving with a letter in hand"
          className="pointer-events-none absolute bottom-0 left-[80px] h-[371px] w-[426px] max-w-none max-lg:hidden"
        />
      </section>
      <div className="mx-[70px] my-0 h-px bg-line-strong max-lg:mx-[40px] max-xs:mx-[20px]" aria-hidden="true"></div>

      {/* Specific requests */}
      <section className="bg-paper px-[70px] pt-[30px] pb-[32px] max-lg:px-[40px] max-xs:px-[20px]">
        <h2 className="m-0 text-[26px] leading-[1.15] font-bold tracking-[-.025em]">For specific requests</h2>
        <div className="mt-[18px] grid grid-cols-3 max-lg:grid-cols-1 max-lg:gap-[6px]">
          <div className="flex scroll-mt-[100px] items-center gap-[22px] py-[8px] pr-[24px] pl-0" id="privacy">
            <span className={iconCircle}>
              <Shield size={24} strokeWidth={1.6} aria-hidden="true" className="text-rust-button" />
            </span>
            <span className="flex flex-col gap-[4px]">
              <span className="text-[17px] font-bold">Privacy &amp; data</span>
              <a
                className="text-[16.5px] font-medium text-rust-button underline decoration-[1px] underline-offset-[3px]"
                href="mailto:privacy@meerkatscout.com"
              >
                privacy@meerkatscout.com
              </a>
            </span>
          </div>
          <div
            className="flex scroll-mt-[100px] items-center gap-[22px] border-l border-l-line-strong py-[8px] pr-[24px] pl-[36px] max-lg:border-l-0 max-lg:pl-0"
            id="legal"
          >
            <span className={iconCircle}>
              <FileTextGlyph size={24} stroke="#C2571E" strokeWidth="1.6" />
            </span>
            <span className="flex flex-col gap-[4px]">
              <span className="text-[17px] font-bold">Legal</span>
              <a
                className="text-[16.5px] font-medium text-rust-button underline decoration-[1px] underline-offset-[3px]"
                href="mailto:legal@meerkatscout.com"
              >
                legal@meerkatscout.com
              </a>
            </span>
          </div>
          <div
            className="flex scroll-mt-[100px] items-center gap-[22px] border-l border-l-line-strong py-[8px] pr-0 pl-[36px] max-lg:border-l-0 max-lg:pl-0"
            id="security"
          >
            <span className={iconCircle}>
              <Lock size={24} strokeWidth={1.6} aria-hidden="true" className="text-rust-button" />
            </span>
            <span className="flex flex-col gap-[4px]">
              <span className="text-[17px] font-bold">Security</span>
              <a
                className="text-[16.5px] font-medium text-rust-button underline decoration-[1px] underline-offset-[3px]"
                href="mailto:security@meerkatscout.com"
              >
                security@meerkatscout.com
              </a>
            </span>
          </div>
        </div>
      </section>
      <div className="mx-[70px] my-0 h-px bg-line-strong max-lg:mx-[40px] max-xs:mx-[20px]" aria-hidden="true"></div>

      <ContactFooter />
    </>
  );
}
