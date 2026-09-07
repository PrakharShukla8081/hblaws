'use client';

import { useGSAP } from '@gsap/react';
import { useRef } from 'react';
import { gsap } from '@/lib/gsap';

export function ScrollProgress() {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const media = gsap.matchMedia();
    media.add('(prefers-reduced-motion: reduce)', () => gsap.set(ref.current, { scaleX: 0 }));
    media.add('not all and (prefers-reduced-motion: reduce)', () => {
      gsap.fromTo(ref.current, { scaleX: 0 }, {
        scaleX: 1,
        ease: 'none',
        scrollTrigger: { trigger: document.body, start: 'top top', end: 'bottom bottom', scrub: true },
      });
    });
    return () => media.revert();
  }, { scope: ref });

  return <div ref={ref} aria-hidden="true" className="fixed inset-x-0 top-0 z-[60] h-0.5 origin-left scale-x-0 bg-accent" />;
}