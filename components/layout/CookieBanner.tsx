'use client';

import { useState, useEffect } from 'react';
import { X, Cookie } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const dismissed = localStorage.getItem('hb-cookie-consent');
    if (!dismissed) {
      const timer = setTimeout(() => setVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleDismiss = () => {
    localStorage.setItem('hb-cookie-consent', 'true');
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 animate-fade-in-up">
      <div className="mx-auto m-4 max-w-7xl rounded-xl border border-border bg-card p-4 shadow-md md:m-6">
        <div className="flex flex-col items-start gap-4 md:flex-row md:items-center md:justify-between">
          <div className="flex items-start gap-3">
            <Cookie className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
            <p className="text-sm text-muted-foreground">
              We use cookies to enhance your browsing experience and analyze site traffic.
              By clicking &quot;Accept&quot;, you consent to our use of cookies.
            </p>
          </div>
          <div className="flex shrink-0 gap-2">
            <Button variant="outline" size="sm" className="min-h-11" onClick={handleDismiss}>
              Decline
            </Button>
            <Button size="sm" className="min-h-11 bg-accent text-accent-foreground hover:bg-accent/90" onClick={handleDismiss}>
              Accept
            </Button>
          </div>
        </div>
        <button
          onClick={handleDismiss}
          className="absolute right-2 top-2 flex h-11 w-11 items-center justify-center text-muted-foreground transition-colors hover:text-foreground"
        >
          <X className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
