'use client';

import { Card, CardContent } from '@/components/ui/card';
import type { Associate } from '@/lib/data';
import { StaggerItem } from '@/components/shared/Animations';

export function AssociateCard({ associate }: { associate: Associate }) {
  return (
    <StaggerItem>
      <Card className="group h-full overflow-hidden rounded-xl border-border shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-md">
        <div className="relative flex h-44 items-center justify-center rounded-t-xl bg-primary/10">
          <span className="font-display text-5xl font-bold text-primary/80">
            <span className="transition-transform duration-200 group-hover:scale-105">{associate.initials}</span>
          </span>
        </div>
        <CardContent className="p-5">
          <h3 className="font-display text-lg font-bold text-primary">{associate.name}</h3>
          <p className="text-xs font-bold uppercase tracking-wider text-primary">{associate.title}</p>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            {associate.bio}
          </p>
        </CardContent>
      </Card>
    </StaggerItem>
  );
}
