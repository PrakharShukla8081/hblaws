'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

export function PageHero({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle?: string;
  children?: ReactNode;
}) {
  return (
    <section className="relative flex items-center overflow-hidden bg-primary pt-28 pb-14 text-primary-foreground sm:pt-32 sm:pb-16 md:pt-40 md:pb-20 dark:bg-background">
      <div className="relative mx-auto max-w-7xl px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <div className="mb-5 text-xs font-bold uppercase tracking-[0.14em] text-primary">H&B LEGAL AND CONSULTANT</div>
          <h1 className="font-display text-3xl font-bold sm:text-4xl md:text-5xl lg:text-6xl">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-primary-foreground/75 sm:text-lg">
              {subtitle}
            </p>
          )}
          {children}
        </motion.div>
      </div>
    </section>
  );
}
