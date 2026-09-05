import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Associates — Legal Team',
  description:
    'Meet the experienced legal professionals of H&B Legal and Consultant — partners and associates with decades of combined experience before the Supreme Court, High Courts, and tribunals.',
};

export default function OurAssociatesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
