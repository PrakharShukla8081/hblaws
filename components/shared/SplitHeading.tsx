'use client';

import { useGSAP } from '@gsap/react';
import { useRef } from 'react';
import { gsap } from '@/lib/gsap';

export function SplitHeading({ children, className, highlight }: { children: string; className?: string; highlight?: string }) {
  const ref = useRef<HTMLHeadingElement>(null);
  const words = children.split(' ');

  useGSAP(() => {
    const media = gsap.matchMedia();
    const lines = ref.current?.querySelectorAll('[data-split-word]') ?? [];
    media.add('(prefers-reduced-motion: reduce)', () => gsap.set(lines, { opacity: 1, y: 0 }));
    media.add('not all and (prefers-reduced-motion: reduce)', () => {
      gsap.fromTo(lines, { opacity: 0, yPercent: 110 }, {
        opacity: 1,
        yPercent: 0,
        duration: 0.55,
        ease: 'power3.out',
        stagger: 0.04,
        scrollTrigger: { trigger: ref.current, start: 'top 85%', once: true },
      });
    });
    return () => media.revert();
  }, { scope: ref });

  return (
    <h1 ref={ref} className={className}>
      {words.map((word, index) => (
        <span key={`${word}-${index}`} className="inline-block overflow-hidden align-bottom">
          <span data-split-word className="inline-block">
            <span className={word === highlight ? 'text-accent' : undefined}>{word}</span>
          </span>
          {index < words.length - 1 ? '\u00a0' : ''}
        </span>
      ))}
    </h1>
  );
}