'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import * as Icons from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import type { ServiceItem } from '@/lib/data';
import { StaggerItem } from '@/components/shared/Animations';

type IconName = keyof typeof Icons;

export function ServiceCard({ service, href }: { service: ServiceItem; href?: string }) {
  const Icon = (Icons[service.icon as IconName] ?? Icons.Briefcase) as Icons.LucideIcon;

  const content = (
    <Card className="group h-full rounded-xl border-border shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-md">
      <CardHeader>
        <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
          <Icon className="h-6 w-6 transition-transform duration-200 group-hover:scale-105" />
        </div>
        <CardTitle className="font-display text-lg text-primary">
          {service.title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm leading-relaxed text-muted-foreground">
          {service.description}
        </p>
        {href && (
          <div className="mt-4 flex items-center gap-1 text-sm font-medium text-primary">
            Learn more
            <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
          </div>
        )}
      </CardContent>
    </Card>
  );

  if (href) {
    return (
      <StaggerItem>
        <Link href={href}>{content}</Link>
      </StaggerItem>
    );
  }

  return <StaggerItem>{content}</StaggerItem>;
}
