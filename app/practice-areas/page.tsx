'use client';

import * as Icons from 'lucide-react';
import { PageHero } from '@/components/shared/PageHero';
import { FadeIn, StaggerGroup, StaggerItem } from '@/components/shared/Animations';
import { SectionLabel } from '@/components/shared/SectionLabel';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '@/components/ui/accordion';
import { practiceAreas, whySelectUs, faqs } from '@/lib/data';

type IconName = keyof typeof Icons;

export default function PracticeAreasPage() {
  return (
    <>
      <PageHero
        title="Practice Areas"
        subtitle="Comprehensive legal services across civil, corporate, criminal and alternate dispute resolution matters, delivered with expertise and dedication."
      />

      {/* Core practice areas */}
      <section className="section-pad">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <FadeIn className="mx-auto max-w-2xl text-center">
            <SectionLabel number="01" label="CORE PRACTICE" />
            <h2 className="font-display text-3xl font-bold text-primary md:text-4xl">
              What We Do
            </h2>
            <p className="mt-3 text-muted-foreground">
              The firm handles matters before District Courts, Judicial and Quasi-Judicial
              Forums, Tribunals, Commissions, High Courts and the Supreme Court of India.
            </p>
          </FadeIn>

          <StaggerGroup className="mt-12 grid gap-6 md:grid-cols-3">
            {whySelectUs.map((item) => {
              const Icon = (Icons[item.icon as IconName] ?? Icons.Briefcase) as Icons.LucideIcon;
              return (
                <StaggerItem key={item.title}>
                  <Card className="group h-full border-border transition-colors hover:border-primary">
                    <CardHeader>
                      <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                        <Icon className="h-7 w-7" />
                      </div>
                      <CardTitle className="font-display text-lg text-primary">
                        {item.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm leading-relaxed text-muted-foreground">
                        {item.description}
                      </p>
                    </CardContent>
                  </Card>
                </StaggerItem>
              );
            })}
          </StaggerGroup>
        </div>
      </section>

      {/* Areas of expertise */}
      <section className="bg-secondary/50 section-pad">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <FadeIn className="mx-auto max-w-2xl text-center">
            <SectionLabel number="02" label="AREAS OF EXPERTISE" />
            <h2 className="font-display text-3xl font-bold text-primary md:text-4xl">
              Areas of Expertise
            </h2>
            <p className="mt-3 text-muted-foreground">
              Our advocates are experienced in a comprehensive range of practice areas,
              from family and criminal law to intellectual property and insolvency.
            </p>
          </FadeIn>

          <StaggerGroup className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {practiceAreas.map((area) => {
              const Icon = (Icons[area.icon as IconName] ?? Icons.Briefcase) as Icons.LucideIcon;
              return (
                <StaggerItem
                  key={area.title}
                  className="group flex items-center gap-3 border border-border bg-card p-4 transition-colors hover:border-primary"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center border border-border bg-background text-primary">
                    <Icon className="h-5 w-5" />
                  </span>
                  <span className="font-medium text-foreground transition-colors group-hover:text-primary">
                    {area.title}
                  </span>
                </StaggerItem>
              );
            })}
          </StaggerGroup>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-pad">
        <div className="mx-auto max-w-3xl px-4 md:px-8">
          <FadeIn className="text-center">
            <SectionLabel number="03" label="FREQUENTLY ASKED QUESTIONS" />
            <h2 className="font-display text-3xl font-bold text-primary md:text-4xl">
              Frequently Asked Questions
            </h2>
            <p className="mt-3 text-muted-foreground">
              General information about common legal matters in India. This is not legal
              advice.
            </p>
          </FadeIn>

          <FadeIn delay={0.1} className="mt-10">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, i) => (
                <AccordionItem
                  key={faq.question}
                  value={`item-${i}`}
                  className="border-border/60"
                >
                  <AccordionTrigger className="text-left font-display text-base font-medium text-primary hover:text-accent md:text-lg">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm leading-relaxed text-muted-foreground md:text-base">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
