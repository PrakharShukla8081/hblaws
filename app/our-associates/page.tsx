'use client';

import { PageHero } from '@/components/shared/PageHero';
import { AssociateCard } from '@/components/shared/AssociateCard';
import { StaggerGroup, FadeIn } from '@/components/shared/Animations';
import { associates } from '@/lib/data';
import { SectionLabel } from '@/components/shared/SectionLabel';

export default function OurAssociatesPage() {
  return (
    <>
      <PageHero
        title="Our Associates"
        subtitle="A team of experienced and energetic legal professionals dedicated to providing high-quality, multi-faceted legal services."
      />

      <section className="section-pad">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <FadeIn className="mx-auto max-w-2xl text-center">
            <SectionLabel number="01" label="THE TEAM" />
            <h2 className="font-display text-3xl font-bold text-primary md:text-4xl">
              Meet Our Legal Team
            </h2>
            <p className="mt-3 text-muted-foreground">
              Our associates bring decades of combined experience across civil, criminal,
              corporate, and commercial practice areas, with appearances before the
              Supreme Court, High Courts, and various tribunals.
            </p>
          </FadeIn>

          <StaggerGroup className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {associates.map((associate) => (
              <AssociateCard key={associate.name} associate={associate} />
            ))}
          </StaggerGroup>
        </div>
      </section>
    </>
  );
}
