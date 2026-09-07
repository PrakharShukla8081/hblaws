'use client';

import { useGSAP } from '@gsap/react';
import { useRef } from 'react';
import { gsap } from '@/lib/gsap';

export function AnimatedCounter({
  value,
  suffix = '',
}: {
  value: number;
  suffix?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  useGSAP(() => {
    const media = gsap.matchMedia();
    const updateText = (count: number) => {
      if (ref.current) ref.current.textContent = `${Math.round(count)}${suffix}`;
    };
    media.add('(prefers-reduced-motion: reduce)', () => updateText(value));
    media.add('not all and (prefers-reduced-motion: reduce)', () => {
      const counter = { value: 0 };
      gsap.to(counter, {
        value,
        duration: 1.2,
        ease: 'power2.out',
        onUpdate: () => updateText(counter.value),
        scrollTrigger: { trigger: ref.current, start: 'top 85%', once: true },
      });
    });
    return () => media.revert();
  }, { dependencies: [suffix, value], scope: ref });

  return <span ref={ref}>0{suffix}</span>;
}