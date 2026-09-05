import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Informations — About H&B Legal and Consultant',
  description:
    'A full-service boutique law firm providing high-quality, multi-faceted legal services across complex legal issues, with expertise across disciplines and industries.',
};

export default function InformationsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
