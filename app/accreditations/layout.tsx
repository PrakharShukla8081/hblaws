import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Accreditations — Professional Recognition',
  description:
    'H&B Legal and Consultant is recognized for professionalism, ethics, and client satisfaction. Our attorneys hold memberships before India\'s most prestigious legal bodies.',
};

export default function AccreditationsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
