const RESEND_URL = 'https://api.resend.com/emails';

export function escapeHtml(value: string) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

/** Removes line breaks so user input can never inject extra email headers. */
export function oneLine(value: string) {
  return value.replace(/[\r\n]+/g, ' ').trim();
}

export function inboxEmail() {
  return process.env.CONTACT_TO_EMAIL || 'admin@hblaws.com';
}

type SendEmailInput = {
  subject: string;
  html: string;
  text: string;
  replyTo?: string;
};

export async function sendEmail({ subject, html, text, replyTo }: SendEmailInput) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    throw new Error('RESEND_API_KEY is not set');
  }

  const from = process.env.CONTACT_FROM_EMAIL || 'H&B Website <onboarding@resend.dev>';

  const res = await fetch(RESEND_URL, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from,
      to: [inboxEmail()],
      subject: oneLine(subject),
      html,
      text,
      ...(replyTo ? { reply_to: replyTo } : {}),
    }),
  });

  if (!res.ok) {
    const body = await res.text();
    throw new Error(`Resend error ${res.status}: ${body}`);
  }
}