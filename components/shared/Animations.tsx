'use client';

import { useGSAP } from '@gsap/react';
import { type ReactNode, useRef } from 'react';
import { gsap } from '@/lib/gsap';

export function FadeIn({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const media = gsap.matchMedia();
    media.add('(prefers-reduced-motion: reduce)', () => {
      gsap.set(ref.current, { opacity: 1, y: 0 });
    });
    media.add('not all and (prefers-reduced-motion: reduce)', () => {
      gsap.fromTo(ref.current, { opacity: 0, y: 24 }, {
        opacity: 1,
        y: 0,
        delay,
        duration: 0.5,
        ease: 'power2.out',
        scrollTrigger: { trigger: ref.current, start: 'top 85%', once: true },
      });
    });
    return () => media.revert();
  }, { dependencies: [delay], scope: ref });

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}

export function StaggerGroup({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const media = gsap.matchMedia();
    const items = ref.current?.querySelectorAll('[data-stagger-item]').length
      ? ref.current.querySelectorAll('[data-stagger-item]')
      : ref.current?.children ?? [];
    media.add('(prefers-reduced-motion: reduce)', () => gsap.set(items, { opacity: 1, y: 0 }));
    media.add('not all and (prefers-reduced-motion: reduce)', () => {
      gsap.fromTo(items, { opacity: 0, y: 24 }, {
        opacity: 1,
        y: 0,
        duration: 0.5,
        ease: 'power2.out',
        stagger: 0.08,
        scrollTrigger: { trigger: ref.current, start: 'top 85%', once: true },
      });
    });
    return () => media.revert();
  }, { scope: ref });

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}

export function StaggerItem({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div data-stagger-item className={className}>
      {children}
    </div>
  );
}
