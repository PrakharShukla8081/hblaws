import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Practice Areas — Civil, Criminal & ADR',
  description:
    'Civil, corporate and commercial disputes, criminal and white collar matters, and alternate dispute resolution, plus areas from family law to insolvency and arbitration.',
};

export default function PracticeAreasLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
