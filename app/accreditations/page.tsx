'use client';

import { PageHero } from '@/components/shared/PageHero';
import { AccreditationBadge } from '@/components/shared/AccreditationBadge';
import { StaggerGroup, FadeIn } from '@/components/shared/Animations';
import { accreditations } from '@/lib/data';
import { Award, ShieldCheck } from 'lucide-react';
import { SectionLabel } from '@/components/shared/SectionLabel';

export default function AccreditationsPage() {
  return (
    <>
      <PageHero
        title="Accreditations"
        subtitle="Recognized for our commitment to professionalism, ethics, and client satisfaction across a diverse range of practice areas."
      />

      <section className="section-pad">
        <div className="mx-auto max-w-5xl px-4 md:px-8">
          <FadeIn className="mx-auto max-w-3xl text-center">
            <SectionLabel number="01" label="PROFESSIONAL RECOGNITION" />
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center border border-border bg-muted">
              <Award className="h-8 w-8 text-accent" />
            </div>
            <h2 className="font-display text-3xl font-bold text-primary md:text-4xl">
              Professional Recognition
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
              H&B Legal and Consultant is recognized for its commitment to
              professionalism, ethics, and client satisfaction across a diverse range of
              practice areas. Our attorneys hold memberships and standing before
              India&apos;s most prestigious legal bodies.
            </p>
          </FadeIn>

          <StaggerGroup className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {accreditations.map((accreditation) => (
              <AccreditationBadge
                key={accreditation.label}
                accreditation={accreditation}
              />
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* Trust banner */}
      <section className="bg-primary py-16 text-primary-foreground dark:bg-background md:py-20">
        <div className="mx-auto max-w-4xl px-4 text-center md:px-8">
          <FadeIn>
            <ShieldCheck className="mx-auto h-12 w-12 text-accent" />
            <h3 className="mt-4 font-display text-2xl font-bold md:text-3xl">
              Committed to Excellence and Integrity
            </h3>
            <p className="mt-3 text-primary-foreground/75">
              Every member of our team upholds the highest standards of professional
              conduct and ethical practice, ensuring our clients receive trustworthy and
              dedicated legal representation.
            </p>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
