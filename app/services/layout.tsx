import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Services — Legal Practice Areas & Sectors',
  description:
    'Comprehensive legal services across banking, real estate, insurance, IT, healthcare, and more. Plus practice areas from family law to insolvency and arbitration.',
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
