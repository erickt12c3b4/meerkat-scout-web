"use client";

import { useState, useSyncExternalStore, type FormEvent } from "react";
import Link from "next/link";
import { ArrowRight, LifeBuoy } from "lucide-react";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { FileTextGlyph, MessageCircleGlyph } from "@/components/brand-icons";
import { EMAIL_RE, HUMAN_CHECK, useRecaptcha } from "@/lib/recaptcha";

type Topic = "question" | "demo" | "support" | "billing";

// Every topic routes to support@ (DEV-HANDOFF, Contact page rebuild).
const ROUTES: Record<Topic, [string, string]> = {
  question: ["support@meerkatscout.com", "Question"],
  demo: ["support@meerkatscout.com", "Demo request"],
  support: ["support@meerkatscout.com", "Support"],
  billing: ["support@meerkatscout.com", "Billing"],
};

const TILES: { value: Topic; label: string; icon: React.ReactNode }[] = [
  { value: "question", label: "Ask a question", icon: <MessageCircleGlyph size={28} stroke="currentColor" strokeWidth="1.5" className="size-[28px]" /> },
  {
    value: "demo",
    label: "Request a demo",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="size-[28px]">
        <path d="M8 2v4"></path>
        <path d="M16 2v4"></path>
        <rect width="18" height="18" x="3" y="4" rx="2"></rect>
        <path d="M3 10h18"></path>
      </svg>
    ),
  },
  { value: "support", label: "Get support", icon: <LifeBuoy size={28} strokeWidth={1.5} aria-hidden="true" className="size-[28px]" /> },
  { value: "billing", label: "Billing", icon: <FileTextGlyph size={28} stroke="currentColor" className="size-[28px]" /> },
];

const inputClass =
  "h-[46px] w-full rounded-8 border border-line-input bg-white px-[14px] py-0 text-[15.5px] text-ink placeholder:text-placeholder focus-visible:border-line-input focus-visible:ring-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rust-button md:text-[15.5px]";
const labelClass = "flex flex-col items-stretch gap-[8px] text-[15px] leading-[normal] font-semibold text-ink";

/**
 * Contact form (client). State and handlers follow the Contact.dc.html logic class:
 * topic tiles (hash preselect), validation messages, reCAPTCHA v2 checkbox, mailto: delivery + status box.
 */
const subscribeHash = (cb: () => void) => {
  window.addEventListener("hashchange", cb);
  return () => window.removeEventListener("hashchange", cb);
};
const readHash = () => window.location.hash.replace("#", "");
const serverHash = () => "";

export function ContactForm() {
  // URL hash preselects a topic (also on hashchange); #demo is also the form's id (scroll target).
  const hash = useSyncExternalStore(subscribeHash, readHash, serverHash);
  const hashTopic: Topic | null = hash in ROUTES ? (hash as Topic) : null;
  const [picked, setPicked] = useState<{ topic: Topic; hash: string } | null>(null);
  const topic: Topic = picked && picked.hash === hash ? picked.topic : (hashTopic ?? "question");
  const setTopic = (t: Topic) => setPicked({ topic: t, hash });
  const [seenHash, setSeenHash] = useState(hash);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [shop, setShop] = useState("");
  const [message, setMessage] = useState("");
  const [captcha, setCaptcha] = useState("");
  const [error, setError] = useState("");
  const [sent, setSent] = useState(false);
  const human = HUMAN_CHECK;
  if (seenHash !== hash) {
    // a new hash resets the message boxes, like the design's applyHash()
    setSeenHash(hash);
    setError("");
    setSent(false);
  }

  const { containerRef: captchaRef, reset: resetCaptcha, failed: captchaFailed } = useRecaptcha({
    enabled: human,
    size: "normal",
    onToken: (t) => {
      setCaptcha(t);
      setError("");
    },
    onExpired: () => setCaptcha(""),
    onError: () => setCaptcha(""),
  });

  const field = (set: (v: string) => void) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    set(e.target.value);
    setError("");
    setSent(false);
  };

  const submit = (e: FormEvent) => {
    e.preventDefault();
    let err = "";
    if (!name.trim()) err = "Please add your name.";
    else if (!EMAIL_RE.test(email.trim())) err = "Please enter a valid email address so we can reply.";
    else if (!message.trim()) err = "Please write a short message.";
    else if (human && !captcha) err = "Please confirm you’re not a robot.";
    if (err) {
      setError(err);
      setSent(false);
      return;
    }
    const [to, label] = ROUTES[topic];
    const subject = `${label} — ${shop.trim() || name.trim()}`;
    const body =
      `${message.trim()}\n\n—\nName: ${name.trim()}\nEmail: ${email.trim()}\nShop: ${shop.trim() || "—"}\nTopic: ${label}`;
    // No backend for contact yet (DEV-HANDOFF): open the visitor's mail app with the message prefilled.
    window.location.href = `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
    setError("");
    setCaptcha("");
    resetCaptcha();
  };

  const routeAddress = ROUTES[topic][0];

  return (
    <form
      id="demo"
      noValidate
      onSubmit={submit}
      className="flex scroll-mt-[100px] flex-col rounded-14 border border-line bg-white px-[36px] pt-[34px] pb-[32px] shadow-raised-soft max-md:px-[20px] max-md:pt-[26px] max-md:pb-[24px]"
    >
      <h2 className="m-0 text-[38px] leading-[1.1] font-extrabold tracking-[-.035em] max-xl:text-[length:clamp(28px,2.97vw,38px)]">
        Send us a message
      </h2>
      <p className="mx-0 mt-[22px] mb-[10px] text-[15px] font-semibold">What can we help with?</p>
      <ToggleGroup
        value={[topic]}
        onValueChange={(v) => {
          const next = (v as Topic[])[0];
          if (!next) return; // keep a topic selected
          setTopic(next);
          setError("");
          setSent(false);
        }}
        aria-label="Topic"
        className="grid w-full grid-cols-[1fr_1fr] gap-x-[12px] gap-y-[10px] rounded-none max-xs:grid-cols-1"
      >
        {TILES.map((t) => (
          <ToggleGroupItem
            key={t.value}
            value={t.value}
            className="group/tile flex h-[66px] w-full min-w-0 items-center justify-start gap-[16px] rounded-10 border border-solid border-[#E4DED5] bg-white px-[20px] py-0 text-left text-[17px] font-medium whitespace-normal text-ink shadow-none transition-[filter] hover:bg-white hover:text-ink focus-visible:border-[#E4DED5] focus-visible:ring-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rust-button aria-pressed:border-rust-button aria-pressed:bg-rust-tint aria-pressed:text-ink data-[pressed]:border-rust-button data-[pressed]:bg-rust-tint data-[pressed]:text-ink"
          >
            <span className="inline-flex text-ink group-aria-pressed/tile:text-rust-button group-data-[pressed]/tile:text-rust-button">
              {t.icon}
            </span>
            {t.label}
          </ToggleGroupItem>
        ))}
      </ToggleGroup>
      <div className="mt-[24px] grid grid-cols-[1fr_1fr] gap-[14px] max-xs:grid-cols-1">
        <Label className={labelClass}>
          <span>Your name</span>
          <Input type="text" name="name" autoComplete="name" value={name} onChange={field(setName)} placeholder="Alex Rivera" className={inputClass} />
        </Label>
        <Label className={labelClass}>
          <span>Email</span>
          <Input type="email" name="email" autoComplete="email" value={email} onChange={field(setEmail)} placeholder="alex@yourstore.com" className={inputClass} />
        </Label>
      </div>
      <Label className={labelClass + " mt-[22px]"}>
        <span>
          Shop domain <span className="font-normal text-faint">(optional)</span>
        </span>
        <Input type="text" name="shop" autoComplete="url" value={shop} onChange={field(setShop)} placeholder="yourstore.myshopify.com" className={inputClass} />
      </Label>
      <Label className={labelClass + " mt-[22px]"}>
        <span>How can we help?</span>
        <Textarea
          name="message"
          rows={4}
          value={message}
          onChange={field(setMessage)}
          placeholder="Tell us a little about what you need."
          className="field-sizing-fixed min-h-[100px] w-full resize-y rounded-8 border border-line-input bg-white px-[14px] py-[12px] text-[15.5px] leading-[1.5] text-ink placeholder:text-placeholder focus-visible:border-line-input focus-visible:ring-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rust-button md:text-[15.5px]"
        />
      </Label>

      {human && (
        <div className="mt-[18px] flex min-h-[78px] items-center">
          <div
            ref={captchaRef}
            className="flex min-h-[78px] min-w-[304px] max-w-full items-center overflow-hidden text-[13.5px] text-faint max-xs:min-w-0 max-xs:origin-left max-xs:scale-[.85]"
          >
            {captchaFailed ? "Verification could not load. Email us directly instead." : "Loading verification…"}
          </div>
        </div>
      )}

      {error && (
        <p className="m-0 mt-[16px] rounded-8 bg-danger-tint px-[14px] py-[12px] text-[14.5px] text-danger" role="alert">
          {error}
        </p>
      )}

      {sent && (
        <p className="m-0 mt-[16px] rounded-8 bg-success-tint px-[14px] py-[12px] text-[14.5px] leading-[1.5] text-success" role="status">
          Your email app should open with the message ready to send to{" "}
          <strong className="font-semibold">{routeAddress}</strong>. If it didn&#39;t, email that address directly.
        </p>
      )}

      <Button
        type="submit"
        className="mt-[18px] flex h-auto w-full min-h-[54px] cursor-pointer items-center justify-center gap-[10px] rounded-8 border-0 bg-rust-button px-[28px] py-0 text-[17px] font-semibold whitespace-normal text-white shadow-hairline transition-[filter] duration-150 ease-[ease] hover:bg-rust-button hover:brightness-[.94] focus-visible:ring-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rust-button active:translate-y-0"
      >
        Send message
        <ArrowRight size={18} aria-hidden="true" className="size-[18px] flex-none text-white" />
      </Button>
      <p className="m-0 mt-[16px] text-center text-[13.5px] leading-[1.5] text-faint">
        By submitting this form, you agree to our{" "}
        <Link className="text-rust-button underline underline-offset-[2px]" href="/legal/privacy">
          Privacy Policy
        </Link>
        .
      </p>
    </form>
  );
}
