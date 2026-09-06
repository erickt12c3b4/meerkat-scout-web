"use client";

import { useCallback, useEffect, useRef, useState } from "react";

/** Google's public TEST key (always passes, shows a "for testing purposes only" banner). Replace before launch. */
export const RECAPTCHA_TEST_SITE_KEY = "6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI";
export const RECAPTCHA_SITE_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || RECAPTCHA_TEST_SITE_KEY;
export const HUMAN_CHECK = process.env.NEXT_PUBLIC_HUMAN_CHECK !== "false";
export const RECAPTCHA_SCRIPT = "https://www.google.com/recaptcha/api.js?render=explicit";

type Grecaptcha = {
  render: (
    el: HTMLElement,
    opts: {
      sitekey: string;
      size?: "normal" | "compact" | "invisible";
      badge?: "bottomright" | "bottomleft" | "inline";
      callback?: (token: string) => void;
      "expired-callback"?: () => void;
      "error-callback"?: () => void;
    },
  ) => number;
  reset: (id?: number) => void;
  execute: (id?: number) => void;
};

declare global {
  interface Window {
    grecaptcha?: Grecaptcha;
  }
}

let scriptRequested = false;
function ensureScript() {
  if (typeof document === "undefined" || scriptRequested) return;
  scriptRequested = true;
  if (document.querySelector(`script[src^="https://www.google.com/recaptcha/api.js"]`)) return;
  const s = document.createElement("script");
  s.src = RECAPTCHA_SCRIPT;
  s.async = true;
  s.defer = true;
  document.head.appendChild(s);
}

/**
 * Mirrors the design's mountCaptcha(): poll for window.grecaptcha every 250ms (up to 60 tries),
 * render explicitly into a container, keep the widget id for reset/execute.
 */
export function useRecaptcha(opts: {
  enabled: boolean;
  size: "normal" | "invisible";
  onToken: (token: string) => void;
  onExpired?: () => void;
  onError?: () => void;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const widgetId = useRef<number | null>(null);
  const [failed, setFailed] = useState(false);
  const [ready, setReady] = useState(false);
  const cb = useRef(opts);
  useEffect(() => {
    cb.current = opts;
  });

  useEffect(() => {
    if (!opts.enabled) return;
    ensureScript();
    let tries = 0;
    let timer: ReturnType<typeof setTimeout> | undefined;
    let cancelled = false;
    const mount = () => {
      if (cancelled) return;
      const g = window.grecaptcha;
      const el = containerRef.current;
      if (g && typeof g.render === "function" && el) {
        if (widgetId.current !== null) return;
        el.textContent = "";
        try {
          widgetId.current = g.render(el, {
            sitekey: RECAPTCHA_SITE_KEY,
            size: cb.current.size,
            badge: cb.current.size === "invisible" ? "bottomright" : undefined,
            callback: (token) => cb.current.onToken(token),
            "expired-callback": () => cb.current.onExpired?.(),
            "error-callback": () => cb.current.onError?.(),
          });
          setReady(true);
        } catch {
          setFailed(true);
        }
        return;
      }
      if (tries++ > 60) {
        setFailed(true);
        return;
      }
      timer = setTimeout(mount, 250);
    };
    mount();
    return () => {
      cancelled = true;
      clearTimeout(timer);
    };
  }, [opts.enabled]);

  const reset = useCallback(() => {
    if (window.grecaptcha && widgetId.current !== null) window.grecaptcha.reset(widgetId.current);
  }, []);
  const execute = useCallback(() => {
    if (window.grecaptcha && widgetId.current !== null) {
      window.grecaptcha.execute(widgetId.current);
      return true;
    }
    return false;
  }, []);

  return { containerRef, ready, failed, reset, execute, hasWidget: () => widgetId.current !== null };
}

export const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
