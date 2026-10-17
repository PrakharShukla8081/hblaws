import { NextResponse } from 'next/server';
import { escapeHtml, oneLine, sendEmail } from '@/lib/email';
import { getClientIp, rateLimit } from '@/lib/rate-limit';

export const dynamic = 'force-dynamic';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_RE = /^[\d\s+\-()]{10,15}$/;

export async function POST(req: Request) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: 'Invalid request.' }, { status: 400 });
  }

  // Honeypot: real visitors never see or fill this field. Pretend success for bots.
  if (typeof body.website === 'string' && body.website.trim() !== '') {
    return NextResponse.json({ ok: true });
  }

  const ip = getClientIp(req);
  const limit = rateLimit(`contact:${ip}`, 5, 10 * 60 * 1000);
  if (!limit.ok) {
    return NextResponse.json(
      { ok: false, error: 'Too many requests. Please try again later.' },
      { status: 429, headers: { 'Retry-After': String(limit.retryAfter) } }
    );
  }

  const name = String(body.name ?? '').trim();
  const email = String(body.email ?? '').trim();
  const phone = String(body.phone ?? '').trim();
  const subject = String(body.subject ?? '').trim();
  const message = String(body.message ?? '').trim();

  const errors: Record<string, string> = {};
  if (name.length < 2 || name.length > 100) errors.name = 'Please enter your name';
  if (!EMAIL_RE.test(email) || email.length > 254) errors.email = 'Please enter a valid email';
  if (phone && !PHONE_RE.test(phone)) errors.phone = 'Please enter a valid phone number';
  if (subject.length < 3 || subject.length > 150) errors.subject = 'Please enter a subject';
  if (message.length < 10 || message.length > 5000) {
    errors.message = 'Message must be between 10 and 5000 characters';
  }

  if (Object.keys(errors).length > 0) {
    return NextResponse.json({ ok: false, errors }, { status: 400 });
  }

  const text = [
    `Name: ${name}`,
    `Email: ${email}`,
    `Phone: ${phone || '-'}`,
    `Subject: ${subject}`,
    '',
    message,
  ].join('\n');

  const html = `
    <div style="font-family:Arial,sans-serif;font-size:15px;line-height:1.6;color:#111">
      <h2 style="margin:0 0 12px">New website enquiry</h2>
      <table cellpadding="6" style="border-collapse:collapse">
        <tr><td><strong>Name</strong></td><td>${escapeHtml(name)}</td></tr>
        <tr><td><strong>Email</strong></td><td>${escapeHtml(email)}</td></tr>
        <tr><td><strong>Phone</strong></td><td>${escapeHtml(phone || '-')}</td></tr>
        <tr><td><strong>Subject</strong></td><td>${escapeHtml(subject)}</td></tr>
      </table>
      <p style="margin:16px 0 4px"><strong>Message</strong></p>
      <p style="white-space:pre-wrap;margin:0">${escapeHtml(message)}</p>
    </div>
  `;

  try {
    await sendEmail({
      subject: `Website enquiry: ${oneLine(subject)}`,
      html,
      text,
      replyTo: email,
    });
  } catch (err) {
    console.error('[contact] send failed:', err);
    return NextResponse.json(
      { ok: false, error: 'Could not send your message right now. Please call or email us directly.' },
      { status: 500 }
    );
  }

  return NextResponse.json({ ok: true });
}