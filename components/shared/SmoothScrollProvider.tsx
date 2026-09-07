'use client';

import Lenis from 'lenis';
import { useEffect } from 'react';
import { gsap, ScrollTrigger } from '@/lib/gsap';

export function SmoothScrollProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const lenis = new Lenis({ autoRaf: false, lerp: 0.1, smoothWheel: true });
    const update = (time: number) => lenis.raf(time * 1000);
    const handleScroll = () => ScrollTrigger.update();

    lenis.on('scroll', handleScroll);
    gsap.ticker.add(update);
    gsap.ticker.lagSmoothing(1000, 16);

    return () => {
      lenis.off('scroll', handleScroll);
      gsap.ticker.remove(update);
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}