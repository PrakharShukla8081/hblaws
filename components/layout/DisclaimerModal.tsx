'use client';

import { useState, useEffect } from 'react';
import { Scale, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';

export function DisclaimerModal() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const acknowledged = localStorage.getItem('hb-disclaimer-ack');
    if (!acknowledged) {
      const timer = setTimeout(() => setOpen(true), 500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAgree = () => {
    localStorage.setItem('hb-disclaimer-ack', 'true');
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="max-w-lg border-primary/20">
        <DialogHeader>
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
            <Scale className="h-7 w-7 text-primary" />
          </div>
          <DialogTitle className="text-center font-display text-xl text-primary">
            Bar Council of India — Disclaimer
          </DialogTitle>
          <DialogDescription className="text-center text-sm leading-relaxed text-muted-foreground">
            <span className="flex items-start gap-2">
              <AlertCircle className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
              The Bar Council of India does not permit advertisement or solicitation by
              advocates in any form or manner. By accessing this website you acknowledge
              that you are seeking information relating to H&B Legal and Consultant of your
              own accord, with no solicitation or advertisement by the firm or its members.
              Content on this site is for informational purposes only and does not
              constitute legal advice.
            </span>
          </DialogDescription>
        </DialogHeader>
        <div className="mt-4 flex justify-center">
          <Button
            onClick={handleAgree}
            className="min-h-11 bg-primary text-primary-foreground hover:bg-primary/90"
          >
            I Agree
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
