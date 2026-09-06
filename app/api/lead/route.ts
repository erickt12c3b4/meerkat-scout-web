import { NextResponse } from "next/server";

/**
 * Lead / contact intake.
 * 1. Verifies the reCAPTCHA token with Google siteverify (RECAPTCHA_SECRET).
 * 2. Forwards the payload as JSON to LEAD_ENDPOINT (CRM / webhook) when configured — the CRM itself is a stub.
 * Returns { ok, delivered, verified }. When nothing is configured to deliver to, the client falls back to mailto:.
 *
 * Untokened leads (reCAPTCHA script blocked) are accepted and forwarded with verified:false —
 * DEV-HANDOFF leaves accept-vs-quarantine to the backend owner; change `ACCEPT_UNTOKENED` to quarantine.
 */
const ACCEPT_UNTOKENED = true;
const SITEVERIFY = "https://www.google.com/recaptcha/api/siteverify";
const TEST_SECRET = "6LeIxAcTAAAAAGG-vFI1TnRWxMZNFuojJ4WifJWe"; // Google's public test secret (pairs with the test site key)

type LeadPayload = {
  kind?: "demo" | "contact";
  name?: string;
  email?: string;
  shop?: string;
  monthlyOrders?: string;
  channels?: string[];
  notes?: string;
  topic?: string;
  message?: string;
  page?: string;
  submittedAt?: string;
  recaptchaToken?: string;
  [utm: `utm_${string}`]: string | undefined;
};

async function verifyToken(token: string, ip: string | null) {
  const secret = process.env.RECAPTCHA_SECRET || TEST_SECRET;
  const body = new URLSearchParams({ secret, response: token });
  if (ip) body.set("remoteip", ip);
  try {
    const r = await fetch(SITEVERIFY, { method: "POST", body, cache: "no-store" });
    const j = (await r.json()) as { success?: boolean; "error-codes"?: string[] };
    return { success: !!j.success, errors: j["error-codes"] ?? [] };
  } catch (e) {
    return { success: false, errors: [String(e)] };
  }
}

export async function POST(req: Request) {
  let payload: LeadPayload;
  try {
    payload = (await req.json()) as LeadPayload;
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid JSON" }, { status: 400 });
  }
  const name = (payload.name ?? "").toString().trim();
  const email = (payload.email ?? "").toString().trim();
  if (!name || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ ok: false, error: "Name and a valid email are required." }, { status: 422 });
  }

  const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? null;
  let verified = false;
  if (payload.recaptchaToken) {
    const v = await verifyToken(payload.recaptchaToken, ip);
    verified = v.success;
    if (!verified) {
      return NextResponse.json({ ok: false, error: "reCAPTCHA verification failed.", details: v.errors }, { status: 400 });
    }
  } else if (!ACCEPT_UNTOKENED) {
    return NextResponse.json({ ok: false, error: "Missing reCAPTCHA token." }, { status: 400 });
  }

  const { recaptchaToken: _token, ...lead } = payload;
  void _token;
  const record = { ...lead, name, email, verified, receivedAt: new Date().toISOString(), ip };

  const endpoint = (process.env.LEAD_ENDPOINT ?? "").trim();
  if (!endpoint) {
    // CRM stub: nothing configured to deliver to. Log and let the client fall back to mailto:.
    console.info("[lead] no LEAD_ENDPOINT configured; lead not delivered", { kind: record.kind, email: record.email });
    return NextResponse.json({ ok: true, delivered: false, verified });
  }
  try {
    const r = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(record),
      cache: "no-store",
    });
    if (!r.ok) throw new Error(`Upstream HTTP ${r.status}`);
    return NextResponse.json({ ok: true, delivered: true, verified });
  } catch (e) {
    console.error("[lead] forward failed", e);
    return NextResponse.json({ ok: false, error: "Lead endpoint rejected the request." }, { status: 502 });
  }
}
