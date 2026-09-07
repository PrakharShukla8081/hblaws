'use client';

import { useGSAP } from '@gsap/react';
import { ReactNode, useRef } from 'react';
import { gsap } from '@/lib/gsap';
import { SplitHeading } from '@/components/shared/SplitHeading';

export function PageHero({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle?: string;
  children?: ReactNode;
}) {
  const ref = useRef<HTMLDivElement>(null);
  useGSAP(() => {
    const media = gsap.matchMedia();
    const items = ref.current?.querySelectorAll('[data-hero-item]') ?? [];
    media.add('(prefers-reduced-motion: reduce)', () => gsap.set(items, { opacity: 1, y: 0 }));
    media.add('not all and (prefers-reduced-motion: reduce)', () => {
      gsap.fromTo(items, { opacity: 0, y: 20 }, {
        opacity: 1, y: 0, duration: 0.5, ease: 'power2.out', stagger: 0.08,
      });
    });
    return () => media.revert();
  }, { scope: ref });

  return (
    <section className="relative flex items-center overflow-hidden bg-primary pt-28 pb-14 text-primary-foreground sm:pt-32 sm:pb-16 md:pt-40 md:pb-20 dark:bg-background">
      <div className="relative mx-auto max-w-7xl px-4 md:px-8">
        <div ref={ref}>
          <div data-hero-item className="mb-5 text-xs font-bold uppercase tracking-[0.14em] text-primary">H&B LEGAL AND CONSULTANT</div>
          <SplitHeading className="font-display text-3xl font-bold sm:text-4xl md:text-5xl lg:text-6xl">
            {title}
          </SplitHeading>
          {subtitle && (
            <p data-hero-item className="mt-4 max-w-2xl text-base leading-relaxed text-primary-foreground/75 sm:text-lg">
              {subtitle}
            </p>
          )}
          {children}
        </div>
      </div>
    </section>
  );
}
