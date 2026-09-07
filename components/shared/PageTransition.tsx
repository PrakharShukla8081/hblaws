'use client';

import { useGSAP } from '@gsap/react';
import { usePathname } from 'next/navigation';
import { useRef } from 'react';
import { gsap } from '@/lib/gsap';

export function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const media = gsap.matchMedia();
    media.add('(prefers-reduced-motion: reduce)', () => gsap.set(ref.current, { opacity: 1, y: 0 }));
    media.add('not all and (prefers-reduced-motion: reduce)', () => {
      gsap.fromTo(ref.current, { opacity: 0, y: 8 }, { opacity: 1, y: 0, duration: 0.3, ease: 'power2.out' });
    });
    return () => media.revert();
  }, { dependencies: [pathname], revertOnUpdate: true, scope: ref });

  return <div ref={ref}>{children}</div>;
}