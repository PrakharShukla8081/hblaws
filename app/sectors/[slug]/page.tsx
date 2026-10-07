import type { Metadata } from 'next';
import Link from 'next/link';
import * as Icons from 'lucide-react';
import { notFound } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';
import { PageHero } from '@/components/shared/PageHero';
import { ServiceCard } from '@/components/shared/ServiceCard';
import { FadeIn, StaggerGroup } from '@/components/shared/Animations';
import { SectionLabel } from '@/components/shared/SectionLabel';
import { Button } from '@/components/ui/button';
import { services } from '@/lib/data';

type Props = { params: { slug: string } };
type IconName = keyof typeof Icons;

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const s = services.find((x) => x.slug === params.slug);
  if (!s) return { title: 'Sector not found' };
  return {
    title: `${s.title} \u2014 Sectors`,
    description: s.description,
  };
}

export default function SectorPage({ params }: Props) {
  const sector = services.find((x) => x.slug === params.slug);
  if (!sector) notFound();

  const Icon = (Icons[sector.icon as IconName] ?? Icons.Briefcase) as Icons.LucideIcon;
  const others = services.filter((x) => x.slug !== sector.slug).slice(0, 3);

  return (
    <>
      <PageHero title={sector.title} subtitle="Sectors" />

      <section className="section-pad">
        <div className="mx-auto max-w-4xl px-4 md:px-8">
          <Link
            href="/sectors"
            className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-accent"
          >
            <ArrowLeft className="h-4 w-4" />
            All Sectors
          </Link>

          <FadeIn>
            <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-primary text-primary-foreground">
              <Icon className="h-8 w-8" />
            </div>
            <SectionLabel number="01" label="OVERVIEW" />
            <h2 className="font-display text-3xl font-bold text-primary md:text-4xl">
              {sector.title}
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground md:text-lg">
              {sector.description}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Button
                asChild
                className="bg-primary text-primary-foreground hover:bg-primary/90"
              >
                <Link href="/contact">Book a Consultation</Link>
              </Button>
              <Button asChild variant="outline" className="border-primary text-primary">
                <Link href="/attorneys">Meet Our Attorneys</Link>
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="bg-secondary/50 section-pad">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <FadeIn className="mx-auto max-w-2xl text-center">
            <SectionLabel number="02" label="MORE SECTORS" />
            <h2 className="font-display text-3xl font-bold text-primary md:text-4xl">
              Other Sectors
            </h2>
          </FadeIn>
          <StaggerGroup className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {others.map((s) => (
              <ServiceCard key={s.slug} service={s} href={`/sectors/${s.slug}`} />
            ))}
          </StaggerGroup>
        </div>
      </section>
    </>
  );
}
