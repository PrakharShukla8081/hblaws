'use client';

import { useState, useEffect } from 'react';
import { useGSAP } from '@gsap/react';
import { useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from '@/components/ui/sheet';
import { navLinks } from '@/lib/data';
import { gsap } from '@/lib/gsap';
import { MagneticButton } from '@/components/shared/MagneticButton';

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === '/';
  const isTransparent = isHome && !scrolled;
  const navRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    const links = navRef.current?.querySelectorAll<HTMLAnchorElement>('[data-nav-link]') ?? [];
    links.forEach((link) => {
      const underline = link.querySelector<HTMLElement>('[data-nav-underline]');
      if (!underline) return;
      const enter = () => gsap.to(underline, { scaleX: 1, duration: 0.25, ease: 'power2.out' });
      const leave = () => {
        if (link.getAttribute('aria-current') !== 'page') gsap.to(underline, { scaleX: 0, duration: 0.25, ease: 'power2.out' });
      };
      link.addEventListener('mouseenter', enter);
      link.addEventListener('mouseleave', leave);
      return () => {
        link.removeEventListener('mouseenter', enter);
        link.removeEventListener('mouseleave', leave);
      };
    });
  }, { dependencies: [pathname, isTransparent], scope: navRef });

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
        <nav ref={navRef} className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={active ? 'page' : undefined}
                data-nav-link
                className={cn(
                  'relative px-4 py-2 text-sm font-medium transition-colors duration-150',
                  active
                    ? 'text-primary-foreground'
                    : isTransparent
                      ? 'text-primary-foreground/85 hover:text-primary-foreground'
                      : 'text-primary-foreground/85 hover:text-primary-foreground'
                )}
              >
                {link.label}
                <span data-nav-underline aria-hidden="true" className={cn('absolute bottom-1 left-4 right-4 h-px origin-left scale-x-0 bg-current', active && 'scale-x-100')} />
              </Link>
            );
          })}
        </nav>

        <div className="hidden lg:block">
          <MagneticButton asChild size="sm" className="bg-accent text-accent-foreground hover:bg-accent/90">
            <Link href="/contact">Free Consultation</Link>
          </MagneticButton>
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
                        ? 'bg-primary-foreground/10 text-primary-foreground'
                        : 'text-primary-foreground/85 hover:bg-primary-foreground/10 hover:text-primary-foreground'
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
