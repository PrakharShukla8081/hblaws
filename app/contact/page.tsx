'use client';

import { MapPin, Phone, Mail, Clock, Building } from 'lucide-react';
import { PageHero } from '@/components/shared/PageHero';
import { ContactForm } from '@/components/shared/ContactForm';
import { FadeIn, StaggerGroup, StaggerItem } from '@/components/shared/Animations';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion';
import { offices, contactEmail, businessHours, faqs } from '@/lib/data';
import { SectionLabel } from '@/components/shared/SectionLabel';

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Contact Us"
        subtitle="Reach out to discuss your legal matter. Our team is ready to provide the guidance and representation you need."
      />

      {/* Contact info + form */}
      <section className="section-pad">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Left: form */}
            <FadeIn>
              <SectionLabel number="01" label="CONTACT" />
              <h2 className="font-display text-3xl font-bold text-primary">
                Send a Message
              </h2>
              <p className="mt-2 text-muted-foreground">
                Fill out the form below and we&apos;ll get back to you within 24 hours.
              </p>
              <div className="mt-6">
                <ContactForm />
              </div>
            </FadeIn>

            {/* Right: quick contact + hours */}
            <FadeIn delay={0.1}>
              <div className="space-y-6">
                {/* Quick contact */}
                <Card className="border-border/60">
                  <CardHeader>
                    <CardTitle className="font-display text-xl text-primary">
                      Get in Touch
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <a
                      href="tel:+919555549457"
                      className="flex items-center gap-3 transition-colors hover:text-accent"
                    >
                      <span className="flex h-10 w-10 items-center justify-center border border-border bg-muted">
                        <Phone className="h-5 w-5 text-primary" />
                      </span>
                      <div>
                        <p className="text-xs text-muted-foreground">Call us</p>
                        <p className="text-sm font-medium text-foreground">+91 9555549457</p>
                      </div>
                    </a>
                    <a
                      href={`mailto:${contactEmail}`}
                      className="flex items-center gap-3 transition-colors hover:text-accent"
                    >
                      <span className="flex h-10 w-10 items-center justify-center border border-border bg-muted">
                        <Mail className="h-5 w-5 text-primary" />
                      </span>
                      <div>
                        <p className="text-xs text-muted-foreground">Email us</p>
                        <p className="text-sm font-medium text-foreground">{contactEmail}</p>
                      </div>
                    </a>
                  </CardContent>
                </Card>

                {/* Business hours */}
                <Card className="border-border/60">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 font-display text-xl text-primary">
                      <Clock className="h-5 w-5 text-accent" />
                      Business Hours
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    {businessHours.map((item) => (
                      <div
                        key={item.day}
                        className="flex items-center justify-between border-b border-border/40 pb-2 text-sm last:border-0 last:pb-0"
                      >
                        <span className="font-medium text-foreground">{item.day}</span>
                        <span className="text-muted-foreground">{item.hours}</span>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Office cards */}
      <section className="bg-secondary/50 section-pad">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <FadeIn className="mx-auto max-w-2xl text-center">
            <SectionLabel number="02" label="OFFICES" />
            <h2 className="font-display text-3xl font-bold text-primary md:text-4xl">
              Our Offices
            </h2>
            <p className="mt-3 text-muted-foreground">
              Three offices across India to serve you better.
            </p>
          </FadeIn>

          <StaggerGroup className="mt-12 grid gap-6 md:grid-cols-3">
            {offices.map((office) => (
              <StaggerItem key={office.city}>
                <Card className="h-full overflow-hidden border-border transition-colors hover:border-primary">
                  {/* Map embed */}
                  <div className="relative h-48 overflow-hidden bg-muted">
                    <iframe
                      title={`${office.city} office map`}
                      src={`https://maps.google.com/maps?q=${encodeURIComponent(
                        office.mapQuery
                      )}&output=embed`}
                      className="h-full w-full"
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    />
                  </div>
                  <CardContent className="p-5">
                    <div className="mb-3 flex items-center gap-2">
                      <Building className="h-5 w-5 text-accent" />
                      <h3 className="font-display text-lg font-bold text-primary">
                        {office.label}
                      </h3>
                    </div>
                    <div className="space-y-3 text-sm">
                      <p className="flex items-start gap-2 text-muted-foreground">
                        <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                        {office.address}
                      </p>
                      {office.phones.map((phone) => (
                        <a
                          key={phone}
                          href={`tel:${phone.replace(/\s/g, '')}`}
                          className="flex items-center gap-2 text-muted-foreground transition-colors hover:text-accent"
                        >
                          <Phone className="h-4 w-4 shrink-0 text-accent" />
                          {phone}
                        </a>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </StaggerItem>
            ))}
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
              General information about common legal matters. This is not legal advice.
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
