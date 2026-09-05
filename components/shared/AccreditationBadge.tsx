'use client';

import * as Icons from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import type { Accreditation } from '@/lib/data';
import { StaggerItem } from '@/components/shared/Animations';

type IconName = keyof typeof Icons;

export function AccreditationBadge({ accreditation }: { accreditation: Accreditation }) {
  const Icon = (Icons[accreditation.icon as IconName] ?? Icons.Award) as Icons.LucideIcon;

  return (
    <StaggerItem>
      <Card className="group flex h-full flex-col items-center justify-center rounded-xl border-border p-6 text-center shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-md">
        <CardContent className="flex flex-col items-center p-0">
          <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
            <Icon className="h-8 w-8 transition-transform duration-200 group-hover:scale-105" />
          </div>
          <p className="text-sm font-medium leading-snug text-foreground">
            {accreditation.label}
          </p>
        </CardContent>
      </Card>
    </StaggerItem>
  );
}
