'use client';

import { useGSAP } from '@gsap/react';
import { type ReactNode, useRef } from 'react';
import { gsap } from '@/lib/gsap';

export function ImageReveal({ children, className }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const media = gsap.matchMedia();
    media.add('(prefers-reduced-motion: reduce)', () => gsap.set(ref.current, { clipPath: 'inset(0 0 0% 0)' }));
    media.add('not all and (prefers-reduced-motion: reduce)', () => {
      gsap.fromTo(ref.current, { clipPath: 'inset(0 0 100% 0)' }, {
        clipPath: 'inset(0 0 0% 0)',
        duration: 0.9,
        ease: 'power3.out',
        scrollTrigger: { trigger: ref.current, start: 'top 85%', once: true },
      });
    });
    return () => media.revert();
  }, { scope: ref });

  return <div ref={ref} className={className}>{children}</div>;
}