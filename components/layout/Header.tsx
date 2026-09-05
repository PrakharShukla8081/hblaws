'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from '@/components/ui/sheet';
import { navLinks } from '@/lib/data';

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === '/';

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isTransparent = isHome && !scrolled;

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isTransparent ? 'nav-dark' : 'nav-blur border-b border-border/40'
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3.5 md:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 group" onClick={() => setMobileOpen(false)}>
          <span className="flex flex-col leading-none">
            <span
              className={cn(
                'font-display text-xl font-bold tracking-tight transition-colors sm:text-2xl',
                isTransparent ? 'text-primary-foreground' : 'text-primary'
              )}
            >
              H&B
            </span>
            <span
              className={cn(
                'text-[10px] uppercase tracking-[0.18em] transition-colors',
                isTransparent ? 'text-primary-foreground/70' : 'text-muted-foreground'
              )}
            >
              LEGAL AND CONSULTANT
            </span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  'relative px-4 py-2 text-sm font-medium transition-colors duration-150 after:absolute after:bottom-1 after:left-4 after:right-4 after:h-px after:bg-current after:transition-all after:duration-200',
                  active
                    ? isTransparent
                      ? 'text-primary after:scale-x-100'
                      : 'text-primary after:scale-x-100'
                    : isTransparent
                      ? 'text-primary-foreground/85 hover:text-primary-foreground after:scale-x-0 hover:after:scale-x-100'
                      : 'text-foreground/80 hover:text-primary after:scale-x-0 hover:after:scale-x-100'
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden lg:block">
          <Button asChild size="sm" className="bg-accent text-accent-foreground hover:bg-accent/90">
            <Link href="/contact">Free Consultation</Link>
          </Button>
        </div>

        {/* Mobile menu */}
        <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className={cn(
                'h-11 w-11 lg:hidden',
                isTransparent ? 'text-primary-foreground hover:bg-primary-foreground/10' : 'text-primary hover:bg-primary/10'
              )}
            >
              <Menu className="h-6 w-6" />
              <span className="sr-only">Open menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="max-w-[calc(100vw-2rem)] overflow-y-auto sm:w-[350px]">
            <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
            <div className="flex items-center justify-between border-b border-border pb-4">
              <Link href="/" className="flex items-center gap-2" onClick={() => setMobileOpen(false)}>
                <span className="font-display text-lg font-bold text-primary">H&B</span>
                <span className="text-[10px] font-bold uppercase tracking-[0.14em] text-muted-foreground">Legal and Consultant</span>
              </Link>
              <Button variant="ghost" size="icon" className="h-11 w-11" onClick={() => setMobileOpen(false)}>
                <X className="h-5 w-5" />
              </Button>
            </div>
            <nav className="mt-6 flex flex-col gap-1">
              {navLinks.map((link) => {
                const active = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className={cn(
                      'min-h-12 px-4 py-3.5 text-sm font-medium transition-colors',
                      active
                        ? 'bg-primary/10 text-primary'
                        : 'text-foreground/80 hover:bg-muted hover:text-primary'
                    )}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>
            <div className="mt-6 border-t border-border pt-6">
              <Button asChild className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
                <Link href="/contact" onClick={() => setMobileOpen(false)}>
                  Free Consultation
                </Link>
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
