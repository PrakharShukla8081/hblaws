import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact — Get in Touch',
  description:
    'Contact H&B Legal and Consultant. Offices in Delhi, Noida, and Mumbai. Call, email, or send us a message for a free consultation.',
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
