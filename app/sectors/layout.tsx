import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sectors — Industries We Serve',
  description:
    'Legal services across banking, construction and real estate, insurance, investment, education, power, IT, media, healthcare, NGOs, logistics and hospitality.',
};

export default function SectorsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
