'use client';

import { useEffect, useRef, useState } from 'react';
import { useInView, useReducedMotion } from 'framer-motion';

export function AnimatedCounter({
  value,
  suffix = '',
}: {
  value: number;
  suffix?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const reducedMotion = useReducedMotion();
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (reducedMotion) {
      setCount(value);
      return;
    }

    if (!isInView) return;

    let frame = 0;
    const start = performance.now();
    const duration = 1200;

    const update = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const easedProgress = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(value * easedProgress));

      if (progress < 1) frame = requestAnimationFrame(update);
    };

    frame = requestAnimationFrame(update);
    return () => cancelAnimationFrame(frame);
  }, [isInView, reducedMotion, value]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}