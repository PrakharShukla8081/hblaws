'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Phone,
  Mail,
  Scale,
  Gavel,
  ShieldCheck,
  Briefcase,
  ShieldAlert,
  Handshake,
  CheckCircle2,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ServiceCard } from '@/components/shared/ServiceCard';
import { ContactForm } from '@/components/shared/ContactForm';
import { FadeIn, StaggerGroup, StaggerItem } from '@/components/shared/Animations';
import { services, stats, whySelectUs, contactEmail } from '@/lib/data';
import { SectionLabel } from '@/components/shared/SectionLabel';
import { AnimatedCounter } from '@/components/shared/AnimatedCounter';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Briefcase,
  ShieldAlert,
  Handshake,
};

export default function Home() {
  return (
    <>
      {/* ===== HERO ===== */}
      <section className="relative flex min-h-[100svh] items-center overflow-hidden bg-primary text-primary-foreground dark:bg-background">
        <img
          src="https://images.pexels.com/photos/6077296/pexels-photo-6077296.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="Scales of justice in a law library"
          className="absolute inset-0 h-full w-full object-cover opacity-45"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/95 to-primary/40 dark:from-background dark:via-background/95 dark:to-background/40" />
        <div className="relative mx-auto w-full max-w-7xl px-4 pt-32 pb-16 md:px-8">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.05, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="mb-6 text-xs font-bold uppercase tracking-[0.14em] text-primary"
            >
              Welcome to H&B Legal and Consultant
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="font-display text-3xl font-bold leading-[1.08] text-balance sm:text-4xl md:text-6xl lg:text-[clamp(2.5rem,5vw,4rem)]"
            >
              Attorneys Fighting For Your <span className="text-primary">Justice</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.25, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="mt-6 max-w-2xl text-base leading-relaxed text-primary-foreground/75 sm:text-lg md:text-xl"
            >
              A full-service boutique law firm helping clients nationwide secure relief
              from wrongful denials, with representation before District Courts,
              Tribunals, High Courts, and the Supreme Court of India.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="mt-8 flex flex-col gap-3 sm:flex-row"
            >
              <Button asChild size="lg" className="w-full bg-primary text-primary-foreground hover:bg-primary/90 sm:w-auto">
                <Link href="/contact">
                  Free Consultation
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                  className="w-full border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground sm:w-auto"
              >
                <Link href="/services">Our Services</Link>
              </Button>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <div className="flex h-10 w-6 items-start justify-center rounded-full border border-primary-foreground/30 p-1.5">
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="h-1.5 w-1 rounded-full bg-primary"
            />
          </div>
        </motion.div>
      </section>

      {/* ===== TRUST STATS ===== */}
      <section className="border-b border-primary-foreground/20 bg-primary text-primary-foreground">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <StaggerGroup className="grid grid-cols-2 divide-x divide-primary-foreground/20 lg:grid-cols-3">
            {stats.slice(0, 3).map((stat) => (
              <StaggerItem key={stat.label} className="px-4 py-8 text-center md:py-10">
                <p className="font-display text-3xl font-bold text-accent md:text-4xl">
                  <AnimatedCounter
                    value={parseInt(stat.value, 10)}
                    suffix={stat.value.replace(/[0-9]/g, '')}
                  />
                </p>
                <p className="mt-1 text-xs uppercase tracking-wider text-primary-foreground/70 md:text-sm">
                  {stat.label}
                </p>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* ===== WHY SELECT US ===== */}
      <section className="section-pad">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <FadeIn className="mx-auto max-w-2xl text-center">
            <SectionLabel number="01" label="WHY H&B" />
            <h2 className="font-display text-3xl font-bold text-primary md:text-4xl">
              Why Select Us
            </h2>
            <p className="mt-3 text-muted-foreground">
              With substantive legal expertise across disciplines, sectors, and industries,
              we offer clients a single-point solution.
            </p>
          </FadeIn>

          <StaggerGroup className="mt-12 grid gap-6 md:grid-cols-3">
            {whySelectUs.map((item) => {
              const Icon = iconMap[item.icon] ?? Briefcase;
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

      {/* ===== SERVICES PREVIEW ===== */}
      <section className="section-pad bg-secondary/50">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <FadeIn className="flex flex-col items-center justify-between gap-4 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <SectionLabel number="02" label="PRACTICE AREAS" />
              <h2 className="font-display text-3xl font-bold text-primary md:text-4xl">
                Our Practice Sectors
              </h2>
              <p className="mt-3 text-muted-foreground">
                Providing comprehensive legal services across diverse industries and
                practice areas.
              </p>
            </div>
            <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
              <Link href="/services">
                View All Services
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </FadeIn>

          <StaggerGroup className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.slice(0, 6).map((service) => (
              <ServiceCard key={service.slug} service={service} href="/services" />
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* ===== EDITORIAL IMAGES ===== */}
      <section className="section-pad border-t border-border">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <SectionLabel number="03" label="THE PRACTICE" />
          <div className="grid items-end gap-8 md:grid-cols-[1.35fr_0.8fr]">
            <figure>
              <div className="flex aspect-[4/3] items-center justify-center rounded-xl border border-dashed border-muted-foreground bg-muted p-6 text-center text-xs uppercase tracking-wider text-muted-foreground shadow-sm">
                Add home-1.jpg to public/images/
              </div>
              <figcaption className="mt-3 text-xs font-bold uppercase tracking-[0.14em] text-primary">
                Delhi · Principal office
              </figcaption>
            </figure>
            <figure className="md:mb-12">
              <div className="flex aspect-[4/3] items-center justify-center rounded-xl border border-dashed border-muted-foreground bg-muted p-6 text-center text-xs uppercase tracking-wider text-muted-foreground shadow-sm">
                Add home-2.jpg to public/images/
              </div>
              <figcaption className="mt-3 text-xs font-bold uppercase tracking-[0.14em] text-primary">
                Counsel · At work
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* ===== CTA BANNER ===== */}
      <section className="relative overflow-hidden bg-primary py-20 text-primary-foreground dark:bg-background md:py-28">
        <div className="relative mx-auto max-w-7xl px-4 md:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Left: text + contact info */}
            <FadeIn>
              <SectionLabel number="03" label="CONTACT" />
              <h2 className="font-display text-3xl font-bold md:text-4xl text-balance">
                Have Questions? Reach out via the form, call, or email us.
              </h2>
              <p className="mt-4 text-lg text-primary-foreground/75">
                Our team is ready to help you navigate your legal challenges with
                expertise and dedication.
              </p>
              <div className="mt-8 space-y-4">
                <a
                  href="tel:+919555549457"
                  className="flex items-center gap-3 text-primary-foreground transition-colors hover:text-accent"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-primary-foreground/20 bg-primary-foreground/10">
                    <Phone className="h-5 w-5 text-accent" />
                  </span>
                  <span className="text-lg">+91 9555549457</span>
                </a>
                <a
                  href={`mailto:${contactEmail}`}
                  className="flex items-center gap-3 text-primary-foreground transition-colors hover:text-accent"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-primary-foreground/20 bg-primary-foreground/10">
                    <Mail className="h-5 w-5 text-accent" />
                  </span>
                  <span className="text-lg">{contactEmail}</span>
                </a>
              </div>
              <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2">
                {['District Courts', 'High Courts', 'Tribunals', 'Supreme Court'].map(
                  (court) => (
                    <span
                      key={court}
                      className="flex items-center gap-1.5 text-sm text-primary-foreground/60"
                    >
                      <CheckCircle2 className="h-4 w-4 text-accent" />
                      {court}
                    </span>
                  )
                )}
              </div>
            </FadeIn>

            {/* Right: mini contact form */}
            <FadeIn delay={0.15}>
                <Card className="border-border">
                <CardContent className="p-5 md:p-8">
                  <h3 className="mb-5 font-display text-xl font-bold text-primary">
                    Send us a message
                  </h3>
                  <ContactForm />
                </CardContent>
              </Card>
            </FadeIn>
          </div>
        </div>
      </section>
    </>
  );
}
