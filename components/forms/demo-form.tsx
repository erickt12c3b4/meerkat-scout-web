"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { EMAIL_RE, HUMAN_CHECK, useRecaptcha } from "@/lib/recaptcha";

const SCHEDULER_URL = (process.env.NEXT_PUBLIC_SCHEDULER_URL || "").trim();
const LEAD_API = "/api/lead";
const ASK_CHANNELS = true;
const SHOW_NOTES = true;

const BANDS: [string, string][] = [
  ["lt500", "Under 500"],
  ["500-5k", "500–5k"],
  ["5k-50k", "5k–50k"],
  ["50k+", "50k+"],
];
const CHANNEL_LIST = ["Google Shopping", "Meta", "TikTok", "Pinterest", "Amazon", "Walmart", "eBay", "Bing", "Not on channels yet"];
const UTM_KEYS = ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term"] as const;

type Lead = {
  kind: "demo";
  name: string;
  email: string;
  shop: string;
  monthlyOrders: string;
  channels: string[];
  notes: string;
  page: string;
  submittedAt: string;
  recaptchaToken?: string;
  [k: `utm_${string}`]: string | undefined;
};

const inputClass =
  "h-[46px] w-full rounded-8 border border-line-input bg-white px-[14px] py-0 text-[15.5px] text-ink placeholder:text-placeholder focus-visible:border-line-input focus-visible:ring-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rust-button md:text-[15.5px]";
const labelClass = "flex flex-col items-stretch gap-[8px] text-[15px] leading-[normal] font-semibold text-ink";
const choiceBase =
  "min-w-0 cursor-pointer border border-solid border-line-input bg-white text-ink shadow-none hover:bg-white hover:text-ink focus-visible:ring-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rust-button aria-pressed:border-rust-button aria-pressed:bg-rust-tint aria-pressed:text-rust data-[pressed]:border-rust-button data-[pressed]:bg-rust-tint data-[pressed]:text-rust";

/** Builds the scheduler URL per provider rules (Cal.com / Calendly / Google Calendar); never duplicates a param. */
function schedulerFor(s: { name: string; email: string; shop: string; orders: string; channels: string[]; notes: string }) {
  let url = SCHEDULER_URL;
  if (!url) return "";
  const add = (k: string, v: string) => {
    if (v && !new RegExp("[?&]" + k + "=").test(url)) url += (url.includes("?") ? "&" : "?") + k + "=" + encodeURIComponent(v);
  };
  const summary = [
    "Shop: " + (s.shop.trim() || "—"),
    "Monthly orders: " + (s.orders || "—"),
    "Channels: " + (s.channels.join(", ") || "—"),
    s.notes.trim(),
  ]
    .filter(Boolean)
    .join("\n");
  if (/calendar\.google\.com/.test(url)) add("gv", "true");
  else if (/cal\.com/.test(url)) {
    add("name", s.name.trim());
    add("email", s.email.trim());
    add("notes", summary);
    add("theme", "light");
    add("layout", "month_view");
  } else if (/calendly\.com/.test(url)) {
    add("name", s.name.trim());
    add("email", s.email.trim());
    add("a1", summary);
    add("hide_gdpr_banner", "1");
    add("embed_type", "Inline");
    add("embed_domain", (typeof window !== "undefined" && window.location.hostname) || "localhost");
  }
  return url;
}

/**
 * Book a Demo lead form (client). State and handlers follow the Book-a-Demo.dc.html logic class:
 * bands (single, re-click clears), chips (multi), honeypot, reCAPTCHA v2 invisible with 60s timeout,
 * UTM capture, JSON POST to /api/lead, mailto fallback when no lead endpoint is configured,
 * success state with the scheduler embed.
 */
export function DemoForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [shop, setShop] = useState("");
  const [orders, setOrders] = useState("");
  const [channels, setChannels] = useState<string[]>([]);
  const [notes, setNotes] = useState("");
  const [hp, setHp] = useState("");
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);
  const [done, setDone] = useState(false);
  const [via, setVia] = useState<"" | "endpoint" | "mailto">("");
  const utm = useRef<Record<string, string>>({});
  const pending = useRef<Lead | null>(null);
  const verifyTimer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);
  const human = HUMAN_CHECK;

  useEffect(() => {
    const q = new URLSearchParams(window.location.search);
    for (const k of UTM_KEYS) {
      const v = q.get(k);
      if (v) utm.current[k] = v;
    }
    return () => clearTimeout(verifyTimer.current);
  }, []);

  const { containerRef: captchaRef, reset: resetCaptcha, execute: executeCaptcha, hasWidget: hasCaptchaWidget } = useRecaptcha({
    enabled: human && !done,
    size: "invisible",
    onToken: (token) => {
      clearTimeout(verifyTimer.current);
      const lead = pending.current;
      pending.current = null;
      resetCaptcha();
      if (lead) void send(lead, token);
    },
    onError: () => abortVerify("Verification failed. Please try again."),
  });

  function abortVerify(msg: string) {
    clearTimeout(verifyTimer.current);
    pending.current = null;
    resetCaptcha();
    setBusy(false);
    setError(msg);
  }

  const field = (set: (v: string) => void) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    set(e.target.value);
    setError("");
  };

  async function send(lead: Lead, token: string) {
    if (token) lead.recaptchaToken = token;
    setBusy(true);
    let delivered = false;
    try {
      const r = await fetch(LEAD_API, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(lead) });
      if (!r.ok) throw new Error("HTTP " + r.status);
      const j = (await r.json()) as { ok: boolean; delivered?: boolean };
      delivered = !!j.delivered;
    } catch {
      setBusy(false);
      setError("We couldn’t send that. Email support@meerkatscout.com and we’ll book you in.");
      return;
    }
    if (delivered) {
      setBusy(false);
      setDone(true);
      setVia("endpoint");
      return;
    }
    // No lead endpoint configured: fall back to a prefilled mailto: draft (same shape as Contact).
    const subject = "Demo request — " + (lead.shop || lead.name);
    const body =
      "Name: " + lead.name + "\nEmail: " + lead.email + "\nShop: " + (lead.shop || "—") + "\nMonthly orders: " + (lead.monthlyOrders || "—") + "\nChannels: " + (lead.channels.join(", ") || "—") + "\n\n" + (lead.notes || "");
    window.location.href = "mailto:support@meerkatscout.com?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);
    setBusy(false);
    setDone(true);
    setVia("mailto");
  }

  const submit = (e: FormEvent) => {
    e.preventDefault();
    let err = "";
    if (!name.trim()) err = "Please add your name.";
    else if (!EMAIL_RE.test(email.trim())) err = "Please enter a valid work email so we can send you times.";
    if (err) {
      setError(err);
      return;
    }
    const lead: Lead = {
      kind: "demo",
      name: name.trim(),
      email: email.trim(),
      shop: shop.trim(),
      monthlyOrders: orders,
      channels,
      notes: notes.trim(),
      page: window.location.href,
      submittedAt: new Date().toISOString(),
      ...utm.current,
    };
    if (hp.trim()) {
      // Honeypot filled: look successful, send nothing.
      setDone(true);
      setVia("endpoint");
      return;
    }
    if (human && hasCaptchaWidget()) {
      pending.current = lead;
      setBusy(true);
      setError("");
      verifyTimer.current = setTimeout(() => abortVerify("Verification timed out. Please try again."), 60000);
      executeCaptcha();
      return;
    }
    // reCAPTCHA never loaded (blocked/offline): proceed without a token — leads over friction.
    void send(lead, "");
  };

  const first = name.trim().split(/\s+/)[0] || "there";
  const scheduler = done ? schedulerFor({ name, email, shop, orders, channels, notes }) : "";
  const doneTitle = scheduler ? `Thanks, ${first}. Pick a time.` : `Thanks, ${first}. You’re on the list.`;
  const doneMessage = scheduler
    ? "Choose a slot below. The invite lands in your inbox with a Google Meet link." +
      (via === "mailto" ? " Your email app may also have opened with your details — send that too." : "")
    : via === "mailto"
      ? `Your email app should have opened with the request ready to send to support@meerkatscout.com. Send it, and we’ll reply to ${email.trim()} within one business day with times.`
      : `We’ll email ${email.trim()} within one business day with times that work.`;

  return (
    <form
      id="form"
      noValidate
      onSubmit={submit}
      className="relative mb-[44px] flex scroll-mt-[100px] flex-col rounded-14 border border-line bg-white px-[36px] pt-[34px] pb-[30px] shadow-hero-soft max-md:mb-[32px] max-md:px-[20px] max-md:pt-[26px] max-md:pb-[24px]"
    >
      {!done ? (
        <>
          <h2 className="m-0 text-[34px] leading-[1.1] font-extrabold tracking-[-.035em] max-xl:text-[length:clamp(28px,2.66vw,34px)]">
            Book your demo
          </h2>
          <p className="m-0 mt-[8px] text-[15.5px] leading-[1.5] text-dim">
            A few details so we can tailor the walkthrough. We’ll email you times within one business day.
          </p>
          <div className="mt-[26px] grid grid-cols-[1fr_1fr] gap-[14px] max-xs:grid-cols-1">
            <Label className={labelClass}>
              <span>Full name</span>
              <Input type="text" name="name" autoComplete="name" value={name} onChange={field(setName)} placeholder="Alex Rivera" className={inputClass} />
            </Label>
            <Label className={labelClass}>
              <span>Work email</span>
              <Input type="email" name="email" autoComplete="email" value={email} onChange={field(setEmail)} placeholder="alex@yourstore.com" className={inputClass} />
            </Label>
          </div>
          <Label className={labelClass + " mt-[20px]"}>
            <span>
              Shop domain <span className="font-normal text-faint">(optional — helps us pick examples)</span>
            </span>
            <Input type="text" name="shop" autoComplete="url" value={shop} onChange={field(setShop)} placeholder="yourstore.myshopify.com" className={inputClass} />
          </Label>
          <div className="mt-[20px] flex flex-col gap-[8px]" role="group" aria-label="Monthly orders">
            <span className="text-[15px] font-semibold">
              Monthly orders <span className="font-normal text-faint">(roughly)</span>
            </span>
            <ToggleGroup
              value={orders ? [orders] : []}
              onValueChange={(v) => {
                setOrders(((v as string[])[0] as string) || "");
                setError("");
              }}
              className="grid w-full grid-cols-4 gap-[8px] rounded-none max-xs:grid-cols-2"
            >
              {BANDS.map(([value, label]) => (
                <ToggleGroupItem
                  key={value}
                  value={value}
                  className={choiceBase + " h-[44px] w-full rounded-8 px-[8px] text-[14.5px] font-semibold whitespace-nowrap"}
                >
                  {label}
                </ToggleGroupItem>
              ))}
            </ToggleGroup>
          </div>
          {ASK_CHANNELS && (
            <div className="mt-[20px] flex flex-col gap-[10px]" role="group" aria-label="Channels you sell on">
              <span className="text-[15px] font-semibold">
                Channels you sell on <span className="font-normal text-faint">(pick any)</span>
              </span>
              <ToggleGroup
                multiple
                value={channels}
                onValueChange={(v) => {
                  setChannels(v as string[]);
                  setError("");
                }}
                className="flex w-full flex-wrap gap-[8px] rounded-none"
              >
                {CHANNEL_LIST.map((label) => (
                  <ToggleGroupItem
                    key={label}
                    value={label}
                    className={choiceBase + " h-[36px] min-w-0 rounded-full px-[14px] text-[14px] font-medium whitespace-nowrap"}
                  >
                    {label}
                  </ToggleGroupItem>
                ))}
              </ToggleGroup>
            </div>
          )}
          {SHOW_NOTES && (
            <Label className={labelClass + " mt-[20px]"}>
              <span>
                Anything you want to see? <span className="font-normal text-faint">(optional)</span>
              </span>
              <Textarea
                name="notes"
                rows={2}
                value={notes}
                onChange={field(setNotes)}
                placeholder="A channel you’re weighing, an error you keep hitting…"
                className="field-sizing-fixed min-h-[76px] w-full resize-y rounded-8 border border-line-input bg-white px-[14px] py-[12px] text-[15.5px] leading-[1.5] text-ink placeholder:text-placeholder focus-visible:border-line-input focus-visible:ring-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rust-button md:text-[15.5px]"
              />
            </Label>
          )}
          {/* Honeypot: off-screen, not focusable, ignored by autofill. */}
          <div className="absolute -left-[9999px] h-px w-px overflow-hidden" aria-hidden="true">
            <label>
              Website <input type="text" name="website" tabIndex={-1} autoComplete="off" value={hp} onChange={(e) => setHp(e.target.value)} />
            </label>
          </div>
          {human && <div ref={captchaRef}></div>}
          {error && (
            <p className="m-0 mt-[16px] rounded-8 bg-danger-tint px-[14px] py-[12px] text-[14.5px] text-danger" role="alert">
              {error}
            </p>
          )}
          <Button
            type="submit"
            disabled={busy}
            className="mt-[22px] flex h-auto w-full min-h-[54px] cursor-pointer items-center justify-center gap-[10px] rounded-8 border-0 bg-rust-button px-[28px] py-0 text-[17px] font-semibold whitespace-normal text-white shadow-hairline transition-[filter] duration-150 ease-[ease] hover:bg-rust-button hover:brightness-[.94] focus-visible:ring-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rust-button active:translate-y-0 disabled:pointer-events-auto disabled:cursor-default disabled:opacity-60"
          >
            {busy ? "Sending…" : "Book my demo"}
            <ArrowRight size={18} aria-hidden="true" className="size-[18px] flex-none text-white" />
          </Button>
          <p className="m-0 mt-[14px] text-center text-[13.5px] leading-[1.5] text-faint">
            No card, no commitment. By submitting, you agree to our{" "}
            <Link className="text-rust-button underline underline-offset-[2px]" href="/legal/privacy">
              Privacy Policy
            </Link>
            .
          </p>
          {human && (
            // Required: the invisible badge is hidden, so Google's attribution must be shown.
            <p className="m-0 mt-[6px] text-center text-[12px] leading-[1.5] text-placeholder">
              Protected by reCAPTCHA. Google’s{" "}
              <a className="text-faint underline underline-offset-[2px]" href="https://policies.google.com/privacy">
                Privacy Policy
              </a>{" "}
              and{" "}
              <a className="text-faint underline underline-offset-[2px]" href="https://policies.google.com/terms">
                Terms
              </a>{" "}
              apply.
            </p>
          )}
        </>
      ) : (
        <div className="flex flex-col items-start gap-[18px] px-0 pt-[12px] pb-[8px]" role="status">
          <span className="box-content inline-flex h-[56px] w-[56px] items-center justify-center rounded-full border border-tint-line bg-rust-tint">
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#C2571E" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M8 2v4"></path>
              <path d="M16 2v4"></path>
              <rect width="18" height="18" x="3" y="4" rx="2"></rect>
              <path d="M3 10h18"></path>
              <path d="m9 16 2 2 4-4"></path>
            </svg>
          </span>
          <h2 className="m-0 text-[34px] leading-[1.1] font-extrabold tracking-[-.035em] max-xl:text-[length:clamp(28px,2.66vw,34px)]">{doneTitle}</h2>
          <p className="m-0 text-[16.5px] leading-[1.55] text-pretty text-body">{doneMessage}</p>
          {scheduler ? (
            <>
              <div className="w-full overflow-hidden rounded-10 border border-line bg-white">
                <iframe className="block h-[660px] w-full border-0" title="Pick a time for your demo" src={scheduler} allow="payment *"></iframe>
              </div>
              <p className="m-0 text-[13.5px] leading-[1.5] text-faint">
                Calendar not loading?{" "}
                <a className="text-rust-button underline underline-offset-[2px]" href={scheduler} target="_blank" rel="noopener">
                  Open the booking page in a new tab
                </a>
                .
              </p>
            </>
          ) : (
            <div className="flex w-full flex-col gap-[10px] rounded-10 bg-paper px-[20px] py-[18px]">
              <p className="m-0 text-[13px] font-bold tracking-[.12em] text-faint uppercase">While you wait</p>
              <p className="m-0 text-[15.5px] leading-[1.5] text-ink">
                Jot down the questions you want answered — a channel you’re weighing, an error you keep seeing. We’ll
                build the walkthrough around them.
              </p>
            </div>
          )}
          <Link
            className="box-content inline-flex min-h-[48px] items-center gap-[8px] rounded-8 border border-line-button bg-white px-[22px] py-0 text-[15.5px] font-semibold text-ink"
            href="/pricing"
          >
            Or start a 14-day free trial now
            <ArrowRight size={16} aria-hidden="true" className="flex-none text-ink" />
          </Link>
        </div>
      )}
    </form>
  );
}
