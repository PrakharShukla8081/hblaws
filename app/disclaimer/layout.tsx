import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Disclaimer',
  description:
    'Bar Council of India disclaimer and terms of use for the H&B Legal and Consultant website. The information on this site is general and is not legal advice.',
};

export default function DisclaimerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
