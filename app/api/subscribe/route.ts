import { NextResponse } from 'next/server';
import { escapeHtml, sendEmail } from '@/lib/email';
import { getClientIp, rateLimit } from '@/lib/rate-limit';

export const dynamic = 'force-dynamic';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(req: Request) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: 'Invalid request.' }, { status: 400 });
  }

  // Honeypot
  if (typeof body.website === 'string' && body.website.trim() !== '') {
    return NextResponse.json({ ok: true });
  }

  const ip = getClientIp(req);
  const limit = rateLimit(`subscribe:${ip}`, 5, 10 * 60 * 1000);
  if (!limit.ok) {
    return NextResponse.json(
      { ok: false, error: 'Too many requests. Please try again later.' },
      { status: 429, headers: { 'Retry-After': String(limit.retryAfter) } }
    );
  }

  const email = String(body.email ?? '').trim();
  if (!EMAIL_RE.test(email) || email.length > 254) {
    return NextResponse.json({ ok: false, error: 'Please enter a valid email.' }, { status: 400 });
  }

  try {
    await sendEmail({
      subject: 'New newsletter subscriber',
      html: `<p style="font-family:Arial,sans-serif;font-size:15px">New newsletter subscriber: <strong>${escapeHtml(
        email
      )}</strong></p>`,
      text: `New newsletter subscriber: ${email}`,
      replyTo: email,
    });
  } catch (err) {
    console.error('[subscribe] send failed:', err);
    return NextResponse.json(
      { ok: false, error: 'Could not subscribe right now. Please try again later.' },
      { status: 500 }
    );
  }

  return NextResponse.json({ ok: true });
}