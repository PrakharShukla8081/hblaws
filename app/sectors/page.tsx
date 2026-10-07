'use client';

import { PageHero } from '@/components/shared/PageHero';
import { ServiceCard } from '@/components/shared/ServiceCard';
import { FadeIn, StaggerGroup } from '@/components/shared/Animations';
import { SectionLabel } from '@/components/shared/SectionLabel';
import { services } from '@/lib/data';

export default function SectorsPage() {
  return (
    <>
      <PageHero
        title="Sectors"
        subtitle="Specialized legal services across the industries we serve, tailored to the needs of each client."
      />

      <section className="section-pad">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <FadeIn className="mx-auto max-w-2xl text-center">
            <SectionLabel number="01" label="SECTORS" />
            <h2 className="font-display text-3xl font-bold text-primary md:text-4xl">
              Industries We Serve
            </h2>
            <p className="mt-3 text-muted-foreground">
              We provide specialized legal services across a wide range of industries and
              sectors, tailored to meet the unique needs of each client.
            </p>
          </FadeIn>

          <StaggerGroup className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </StaggerGroup>
        </div>
      </section>
    </>
  );
}
