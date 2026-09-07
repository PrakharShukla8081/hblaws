'use client';

import { Building2, Target, Gavel, CheckCircle2, Scale } from 'lucide-react';
import { PageHero } from '@/components/shared/PageHero';
import { FadeIn } from '@/components/shared/Animations';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent } from '@/components/ui/card';
import { SectionLabel } from '@/components/shared/SectionLabel';

export default function InformationsPage() {
  return (
    <>
      <PageHero
        title="Informations"
        subtitle="A full-service boutique law firm comprising a team of experienced and energetic legal professionals providing high-quality, multi-faceted legal services."
      />

      {/* Firm narrative */}
      <section className="section-pad">
        <div className="mx-auto max-w-4xl px-4 md:px-8">
          <FadeIn>
            <SectionLabel number="01" label="THE FIRM" />
            <h2 className="font-display text-3xl font-bold text-primary md:text-4xl">
              About H&B Legal and Consultant
            </h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-foreground/80">
              <p>
                H&B Legal and Consultant is a full-service boutique law firm comprising a
                team of experienced and energetic legal professionals providing
                high-quality, multi-faceted legal services across a spectrum of complex
                legal issues. With substantive legal expertise across disciplines,
                sectors, and industries, and an in-depth understanding of administrative,
                regulatory, and legislative processes, we offer clients a single-point
                solution.
              </p>
              <p>
                The firm&apos;s expertise, coupled with effective, timely, and practical
                solutions, is what predominantly draws clients to us. Our vision is to
                provide continued excellent solutions as a full-service law firm, keeping
                clients regularly informed about legal developments.
              </p>
              <p>
                We handle matters before District Courts, Judicial and Quasi-Judicial
                Forums, Tribunals, Commissions, High Courts, and the Supreme Court of
                India.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Tabs section */}
      <section className="bg-secondary/50 section-pad">
        <div className="mx-auto max-w-4xl px-4 md:px-8">
          <Tabs defaultValue="firm" className="w-full">
            <TabsList className="grid w-full grid-cols-3 h-auto">
              <TabsTrigger value="firm" className="py-3 text-xs md:text-sm">
                <Building2 className="mr-1.5 h-4 w-4" />
                <span className="hidden sm:inline">The Firm</span>
              </TabsTrigger>
              <TabsTrigger value="approach" className="py-3 text-xs md:text-sm">
                <Target className="mr-1.5 h-4 w-4" />
                <span className="hidden sm:inline">Approach & Goals</span>
              </TabsTrigger>
              <TabsTrigger value="litigation" className="py-3 text-xs md:text-sm">
                <Gavel className="mr-1.5 h-4 w-4" />
                <span className="hidden sm:inline">Litigation & Dispute</span>
              </TabsTrigger>
            </TabsList>

            {/* The Firm */}
            <TabsContent value="firm" className="mt-8">
              <FadeIn>
                <Card className="border-border/60">
                  <CardContent className="p-5 md:p-8">
                    <h3 className="font-display text-2xl font-bold text-primary">
                      The Firm
                    </h3>
                    <div className="mt-4 space-y-3 text-sm leading-relaxed text-foreground/80 md:text-base">
                      <p>
                        H&B Legal and Consultant was established with the vision of
                        providing comprehensive, practical, and result-oriented legal
                        services. As a full-service boutique firm, we combine deep sector
                        knowledge with a personalized approach to each client engagement.
                      </p>
                      <p>
                        Our team brings together decades of combined experience across
                        civil, criminal, corporate, and commercial practice areas. We
                        represent individuals, corporations, government bodies, and
                        non-profit organizations before courts and tribunals at every
                        level of the Indian judicial system.
                      </p>
                      <p>
                        What sets us apart is our commitment to understanding each
                        client&apos;s unique circumstances and crafting tailored legal
                        strategies that align with their objectives.
                      </p>
                    </div>
                    <div className="mt-6 grid gap-3 sm:grid-cols-2">
                      {[
                        'Single-point legal solution',
                        'Multi-disciplinary expertise',
                        'Personalized client approach',
                        'Result-oriented strategies',
                      ].map((item) => (
                        <div
                          key={item}
                          className="flex items-center gap-2 text-sm text-foreground/80"
                        >
                          <CheckCircle2 className="h-4 w-4 shrink-0 text-accent" />
                          {item}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </FadeIn>
            </TabsContent>

            {/* Approach & Goals */}
            <TabsContent value="approach" className="mt-8">
              <FadeIn>
                <Card className="border-border/60">
                  <CardContent className="p-5 md:p-8">
                    <h3 className="font-display text-2xl font-bold text-primary">
                      Approach & Goals
                    </h3>
                    <div className="mt-4 space-y-3 text-sm leading-relaxed text-foreground/80 md:text-base">
                      <p>
                        Our approach is rooted in a thorough understanding of each
                        client&apos;s business, industry, and specific legal challenge. We
                        believe that effective legal representation requires more than
                        just knowledge of the law — it demands strategic thinking,
                        commercial awareness, and a commitment to achieving the best
                        possible outcome.
                      </p>
                      <p>
                        We prioritize proactive communication, keeping clients informed at
                        every stage of their matter. Our goal is to resolve disputes
                        efficiently while protecting our clients&apos; interests and
                        minimizing risk.
                      </p>
                      <p>
                        Our vision is to provide continued excellent solutions as a
                        full-service law firm, keeping clients regularly informed about
                        legal developments that may impact their interests.
                      </p>
                    </div>
                    <div className="mt-6 grid gap-3 sm:grid-cols-2">
                      {[
                        'Strategic legal thinking',
                        'Commercial awareness',
                        'Proactive client communication',
                        'Risk-minimizing solutions',
                      ].map((item) => (
                        <div
                          key={item}
                          className="flex items-center gap-2 text-sm text-foreground/80"
                        >
                          <Target className="h-4 w-4 shrink-0 text-accent" />
                          {item}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </FadeIn>
            </TabsContent>

            {/* Litigation & Dispute */}
            <TabsContent value="litigation" className="mt-8">
              <FadeIn>
                <Card className="border-border/60">
                  <CardContent className="p-5 md:p-8">
                    <h3 className="font-display text-2xl font-bold text-primary">
                      Litigation & Dispute Resolution
                    </h3>
                    <div className="mt-4 space-y-3 text-sm leading-relaxed text-foreground/80 md:text-base">
                      <p>
                        We handle matters before District Courts, Judicial and
                        Quasi-Judicial Forums, Tribunals, Commissions, High Courts, and
                        the Supreme Court of India. Our litigation practice encompasses
                        civil, criminal, corporate, and commercial disputes.
                      </p>
                      <p>
                        Beyond traditional litigation, we emphasize alternate dispute
                        resolution methods — including arbitration, mediation, and
                        conciliation — to achieve efficient and cost-effective outcomes
                        for our clients. We pre-empt disputes through meticulous
                        documentation and strategic ADR recourse.
                      </p>
                      <p>
                        Our advocates have appeared in over 2000 cases before the Supreme
                        Court and regularly represent clients before the Delhi High
                        Court, Allahabad High Court, and various specialized tribunals
                        including NCLT, NCLAT, DRT, and consumer forums.
                      </p>
                    </div>
                    <div className="mt-6 grid gap-3 sm:grid-cols-2">
                      {[
                        'Supreme Court of India',
                        'High Courts (Delhi, Allahabad, others)',
                        'NCLT & NCLAT',
                        'Debt Recovery Tribunals',
                        'Consumer Forums & Commissions',
                        'Arbitration & Mediation',
                      ].map((item) => (
                        <div
                          key={item}
                          className="flex items-center gap-2 text-sm text-foreground/80"
                        >
                          <Scale className="h-4 w-4 shrink-0 text-accent" />
                          {item}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </FadeIn>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </>
  );
}
