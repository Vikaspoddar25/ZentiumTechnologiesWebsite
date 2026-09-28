import { NextResponse } from "next/server";
import { Resend } from "resend";
import { contactSchema } from "@/lib/contact-schema";
import { siteConfig } from "@/content/site";

export const runtime = "nodejs";

const WINDOW_MS = 60_000;
const MAX_REQUESTS = 3;
const buckets = new Map<string, { count: number; resetAt: number }>();

function isRateLimited(key: string) {
  const now = Date.now();
  const bucket = buckets.get(key);

  if (!bucket || now > bucket.resetAt) {
    buckets.set(key, { count: 1, resetAt: now + WINDOW_MS });
    return false;
  }

  bucket.count += 1;
  return bucket.count > MAX_REQUESTS;
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export async function POST(request: Request) {
  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
    request.headers.get("x-real-ip") ??
    "unknown";

  if (isRateLimited(ip)) {
    return NextResponse.json(
      { error: "Too many requests. Please try again in a minute." },
      { status: 429 },
    );
  }

  let payload: unknown;
  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const parsed = contactSchema.safeParse(payload);
  if (!parsed.success) {
    return NextResponse.json({ error: "Please check the form and try again." }, { status: 400 });
  }

  const data = parsed.data;

  // Honeypot filled — accept silently so bots do not learn.
  if (data.website) {
    return NextResponse.json({ ok: true });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL ?? siteConfig.email;
  const from = process.env.CONTACT_FROM_EMAIL;

  if (!apiKey || !from) {
    console.error("Contact form is not configured: RESEND_API_KEY or CONTACT_FROM_EMAIL missing.");
    return NextResponse.json(
      { error: `Email delivery is not configured yet. Please write to ${siteConfig.email}.` },
      { status: 503 },
    );
  }

  const rows: [string, string][] = [
    ["Name", data.name],
    ["Email", data.email],
    ["Company", data.company || "—"],
    ["Phone", data.phone || "—"],
    ["Service", data.service || "—"],
    ["Budget", data.budget || "—"],
  ];

  const html = `
    <div style="font-family:ui-sans-serif,system-ui,sans-serif;max-width:640px">
      <h2 style="margin:0 0 16px">New enquiry from zentiumtechnologies.com</h2>
      <table style="border-collapse:collapse;width:100%;font-size:14px">
        ${rows
          .map(
            ([label, value]) =>
              `<tr><td style="padding:6px 12px 6px 0;color:#64748b;white-space:nowrap">${label}</td><td style="padding:6px 0">${escapeHtml(value)}</td></tr>`,
          )
          .join("")}
      </table>
      <h3 style="margin:24px 0 8px;font-size:14px;color:#64748b">Message</h3>
      <p style="white-space:pre-wrap;font-size:14px;line-height:1.6">${escapeHtml(data.message)}</p>
    </div>
  `;

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from,
      to,
      replyTo: data.email,
      subject: `New enquiry — ${data.name}${data.company ? ` (${data.company})` : ""}`,
      html,
    });

    if (error) {
      console.error("Resend rejected the message", error);
      return NextResponse.json(
        { error: `We could not send that. Please email ${siteConfig.email} directly.` },
        { status: 502 },
      );
    }
  } catch (error) {
    console.error("Contact form delivery failed", error);
    return NextResponse.json(
      { error: `We could not send that. Please email ${siteConfig.email} directly.` },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
