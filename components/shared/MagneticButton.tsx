'use client';

import { useGSAP } from '@gsap/react';
import { useRef } from 'react';
import { gsap } from '@/lib/gsap';
import { Button, type ButtonProps } from '@/components/ui/button';

export function MagneticButton({ children, ...props }: ButtonProps) {
  const ref = useRef<HTMLButtonElement>(null);

  useGSAP(() => {
    const media = gsap.matchMedia();
    media.add('(prefers-reduced-motion: reduce)', () => undefined);
    media.add('(pointer: fine) and (prefers-reduced-motion: no-preference)', () => {
      const element = ref.current;
      if (!element) return;
      const move = (event: MouseEvent) => {
        const bounds = element.getBoundingClientRect();
        const x = Math.max(-7, Math.min(7, (event.clientX - (bounds.left + bounds.width / 2)) * 0.12));
        const y = Math.max(-7, Math.min(7, (event.clientY - (bounds.top + bounds.height / 2)) * 0.12));
        gsap.to(element, { x, y, duration: 0.2, ease: 'power2.out', overwrite: true });
      };
      const leave = () => gsap.to(element, { x: 0, y: 0, duration: 0.35, ease: 'power3.out', overwrite: true });
      element.addEventListener('mousemove', move);
      element.addEventListener('mouseleave', leave);
      return () => {
        element.removeEventListener('mousemove', move);
        element.removeEventListener('mouseleave', leave);
      };
    });
    return () => media.revert();
  }, { scope: ref });

  return <Button ref={ref} {...props}>{children}</Button>;
}