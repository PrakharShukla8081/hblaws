'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import type { Associate } from '@/lib/data';
import { StaggerItem } from '@/components/shared/Animations';
import { AttorneyPhoto } from '@/components/shared/AttorneyPhoto';

export function AssociateCard({ associate }: { associate: Associate }) {
  return (
    <StaggerItem>
      <Link href={`/attorneys/${associate.slug}`} className="block h-full">
        <Card className="group h-full overflow-hidden rounded-xl border-border shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-md">
          <AttorneyPhoto
            slug={associate.slug}
            name={associate.name}
            initials={associate.initials}
            className="h-64 rounded-t-xl"
          />
          <CardContent className="p-5">
            <h3 className="font-display text-lg font-bold text-primary">{associate.name}</h3>
            <p className="text-xs font-bold uppercase tracking-wider text-primary">{associate.title}</p>
            <p className="mt-3 line-clamp-4 text-sm leading-relaxed text-muted-foreground">
              {associate.bio}
            </p>
            <div className="mt-4 flex items-center gap-1 text-sm font-medium text-primary">
              View profile
              <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
            </div>
          </CardContent>
        </Card>
      </Link>
    </StaggerItem>
  );
}
