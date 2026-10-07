import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, Mail, Phone } from 'lucide-react';
import { PageHero } from '@/components/shared/PageHero';
import { AttorneyPhoto } from '@/components/shared/AttorneyPhoto';
import { AssociateCard } from '@/components/shared/AssociateCard';
import { FadeIn, StaggerGroup } from '@/components/shared/Animations';
import { SectionLabel } from '@/components/shared/SectionLabel';
import { Button } from '@/components/ui/button';
import { associates, contactEmail, offices } from '@/lib/data';

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return associates.map((a) => ({ slug: a.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const a = associates.find((x) => x.slug === params.slug);
  if (!a) return { title: 'Attorney not found' };
  return {
    title: `${a.name} \u2014 ${a.title}`,
    description: a.bio,
  };
}

export default function AttorneyPage({ params }: Props) {
  const attorney = associates.find((x) => x.slug === params.slug);
  if (!attorney) notFound();

  const others = associates.filter((x) => x.slug !== attorney.slug).slice(0, 3);
  const phone = offices[0]?.phones?.[0];

  return (
    <>
      <PageHero title={attorney.name} subtitle={attorney.title} />

      <section className="section-pad">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <Link
            href="/attorneys"
            className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-accent"
          >
            <ArrowLeft className="h-4 w-4" />
            All Attorneys
          </Link>

          <div className="grid gap-10 md:grid-cols-[320px_1fr] lg:grid-cols-[380px_1fr]">
            <FadeIn>
              <AttorneyPhoto
                slug={attorney.slug}
                name={attorney.name}
                initials={attorney.initials}
                className="aspect-[4/5] w-full rounded-xl"
                initialsClassName="text-7xl"
              />
            </FadeIn>

            <FadeIn delay={0.1}>
              <SectionLabel number="01" label="PROFILE" />
              <h2 className="font-display text-3xl font-bold text-primary md:text-4xl">
                {attorney.name}
              </h2>
              <p className="mt-1 text-sm font-bold uppercase tracking-wider text-accent">
                {attorney.title}
              </p>
              <p className="mt-6 text-base leading-relaxed text-muted-foreground md:text-lg">
                {attorney.bio}
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Button
                  asChild
                  className="bg-primary text-primary-foreground hover:bg-primary/90"
                >
                  <Link href="/contact">Book a Consultation</Link>
                </Button>
                <Button asChild variant="outline" className="border-primary text-primary">
                  <a href={`mailto:${contactEmail}`}>
                    <Mail className="mr-2 h-4 w-4" />
                    {contactEmail}
                  </a>
                </Button>
                {phone && (
                  <Button asChild variant="outline" className="border-primary text-primary">
                    <a href={`tel:${phone.replace(/[^\d+]/g, '')}`}>
                      <Phone className="mr-2 h-4 w-4" />
                      {phone}
                    </a>
                  </Button>
                )}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="bg-secondary/50 section-pad">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <FadeIn className="mx-auto max-w-2xl text-center">
            <SectionLabel number="02" label="THE TEAM" />
            <h2 className="font-display text-3xl font-bold text-primary md:text-4xl">
              More Attorneys
            </h2>
          </FadeIn>
          <StaggerGroup className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {others.map((a) => (
              <AssociateCard key={a.slug} associate={a} />
            ))}
          </StaggerGroup>
        </div>
      </section>
    </>
  );
}
