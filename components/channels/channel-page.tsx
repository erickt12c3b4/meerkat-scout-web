import Link from "next/link";
import type { ReactNode } from "react";
import { SiteHeader } from "@/components/site/site-header";
import { PreFooterCta } from "@/components/site/pre-footer-cta";
import { SiteFooter } from "@/components/site/site-footer";

export type ChannelData = {
  slug: string;
  name: string;
  title: string;
  description: string;
  /** Bespoke illustrated hero (the whole <section>). */
  hero: ReactNode;
  /** Light heroes carry a 1px #E7E1D9 rule above the Connect section; dark heroes do not. */
  connectBorderTop: boolean;
  /** Dark heroes (Amazon, Walmart, eBay) put a 1px rule above the dark behavior section. */
  behaviorBorderTop: boolean;
  steps: { title: string; body: string }[];
  /** Everything inside the dark "Distinguishing behavior" section: eyebrow, h2 and the bespoke diagram. */
  behavior: ReactNode;
  does: ReactNode[];
  requires: ReactNode[];
  requiresNote: ReactNode;
  depends: { label: string; title: string; href: string }[];
};

const eyebrow = "m-0 mb-[22px] text-[13px] font-semibold tracking-[.14em] text-rust uppercase";

/**
 * Shared template for the ten channel pages:
 * Hero → Connect → Distinguishing behavior → Does and requires → Depends on → CTA → Footer.
 */
export function ChannelPage({ channel: c }: { channel: ChannelData }) {
  return (
    <>
      <SiteHeader active="channels" />
      {c.hero}

      {/* Connect */}
      <section
        className={
          "bg-paper px-[70px] pt-[88px] pb-[80px] max-lg:px-[40px] max-md:pt-[56px] max-md:pb-[56px] max-xs:px-[20px]" +
          (c.connectBorderTop ? " border-t border-t-line-strong" : "")
        }
      >
        <div className="grid grid-cols-[420px_1fr] items-start gap-[60px] max-lg:gap-[40px] max-md:grid-cols-1">
          <div>
            <p className={eyebrow}>How Scout connects</p>
            <h2 className="m-0 text-[40px] leading-[1.08] font-extrabold tracking-[-.035em] text-pretty max-xl:text-[length:clamp(30px,3.13vw,40px)]">
              3 steps, in the app.
            </h2>
            <p className="m-0 mt-[20px] text-[16px] leading-[1.55] text-body">
              Scout holds only the credential the channel issues for this connection, encrypted at rest. Disconnecting
              the channel deletes it.
            </p>
          </div>
          <ol className={"m-0 grid list-none gap-[16px] p-0 max-lg:grid-cols-1 " + (c.steps.length === 2 ? "grid-cols-2" : "grid-cols-3")}>
            {c.steps.map((s, i) => (
              <li
                key={s.title}
                className="flex flex-col gap-[10px] rounded-10 border border-line bg-white p-[22px] pb-[20px]"
              >
                <span className="text-[12px] font-bold tracking-[.12em] text-rust">0{i + 1}</span>
                <strong className="text-[18px] leading-[1.2] font-bold tracking-[-.02em]">{s.title}</strong>
                <span className="text-[14.5px] leading-[1.55] text-body">{s.body}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Distinguishing behavior */}
      <section
        className={
          "relative overflow-hidden bg-night px-[70px] pt-[92px] pb-[96px] max-lg:px-[40px] max-md:pt-[56px] max-md:pb-[56px] max-xs:px-[20px]" +
          (c.behaviorBorderTop ? " border-t border-t-night-line" : "")
        }
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute top-0 -right-[200px] h-[800px] w-[1000px] bg-[radial-gradient(closest-side,rgba(160,67,26,.12),transparent_70%)]"
        ></div>
        <div className="relative">{c.behavior}</div>
      </section>

      {/* Does and requires */}
      <section className="bg-paper px-[70px] pt-[96px] pb-[90px] max-lg:px-[40px] max-md:pt-[56px] max-md:pb-[56px] max-xs:px-[20px]">
        <div className="grid grid-cols-[1fr_1fr] items-start gap-[60px] max-lg:gap-[40px] max-md:grid-cols-1">
          <div>
            <p className={eyebrow}>What Scout does for {c.name}</p>
            <div className="flex flex-col gap-[14px]">
              {c.does.map((d, i) => (
                <div
                  key={i}
                  className="flex flex-col gap-[10px] rounded-10 border border-line bg-white px-[26px] pt-[24px] pb-[22px]"
                >
                  <span className="text-[12px] font-bold tracking-[.14em] text-rust uppercase">0{i + 1}</span>
                  <p className="m-0 text-[16.5px] leading-[1.55] text-ink">{d}</p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <p className={eyebrow}>What {c.name} requires that others don&#39;t</p>
            <div className="rounded-10 border border-line bg-white px-[28px] py-[26px]">
              <ul className="m-0 flex list-none flex-col gap-[14px] p-0">
                {c.requires.map((r, i) => (
                  <li key={i} className="flex items-start gap-[12px] text-[15.5px] leading-[1.55] text-nav">
                    <span className="mt-[9px] h-[6px] w-[6px] flex-none rounded-full bg-rust"></span>
                    <span>{r}</span>
                  </li>
                ))}
              </ul>
            </div>
            <p className="m-0 mt-[18px] text-[14.5px] leading-[1.55] text-dim">{c.requiresNote}</p>
          </div>
        </div>
      </section>

      {/* Depends on */}
      <section className="bg-paper px-[70px] pt-0 pb-[96px] max-lg:px-[40px] max-md:pb-[56px] max-xs:px-[20px]">
        <p className={eyebrow}>{c.name} depends on</p>
        <div
          className={
            "grid gap-[14px] max-lg:grid-cols-2 max-md:grid-cols-1 " +
            (c.depends.length === 4 ? "grid-cols-4" : "grid-cols-3")
          }
        >
          {c.depends.map((d) => (
            <Link
              key={d.label}
              href={d.href}
              className="flex flex-col gap-[6px] rounded-10 border border-line bg-white px-[20px] py-[18px] text-ink"
            >
              <span className="text-[12px] font-bold tracking-[.12em] text-faint uppercase">{d.label}</span>
              <span className="text-[15.5px] font-semibold">{d.title}</span>
            </Link>
          ))}
        </div>
        <p className="m-0 mt-[18px] text-[14px] text-faint">
          <Link href="/channels">All ten channels →</Link>
        </p>
      </section>

      <PreFooterCta />
      <SiteFooter current={`/channels/${c.slug}`} />
    </>
  );
}
