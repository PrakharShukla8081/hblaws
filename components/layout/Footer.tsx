'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  Scale,
  Mail,
  Phone,
  Clock,
  MapPin,
  Linkedin,
  Twitter,
  Facebook,
  Instagram,
  ArrowRight,
} from 'lucide-react';
import { offices, practiceAreas, contactEmail, businessHours, navLinks } from '@/lib/data';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { toast } from '@/hooks/use-toast';

export function Footer() {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setEmail('');
    toast({
      title: 'Subscribed',
      description: 'Thank you for subscribing to our newsletter.',
    });
  };

  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Newsletter strip */}
      <div className="border-b border-primary-foreground/20">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-4 py-10 md:flex-row md:justify-between md:px-8">
          <div className="text-center md:text-left">
            <h3 className="font-display text-xl font-bold text-primary-foreground">
              Stay informed on legal developments
            </h3>
            <p className="mt-1 text-sm text-primary-foreground/70">
              Subscribe to our newsletter for insights and updates.
            </p>
          </div>
          <form onSubmit={handleSubscribe} className="flex w-full max-w-md gap-2">
            <Input
              type="email"
              placeholder="Your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border-primary-foreground/20 bg-primary-foreground/10 text-primary-foreground placeholder:text-primary-foreground/50 focus-visible:ring-accent"
            />
            <Button
              type="submit"
              className="bg-accent text-accent-foreground hover:bg-accent/90"
            >
              Subscribe
              <ArrowRight className="ml-1 h-4 w-4" />
            </Button>
          </form>
        </div>
      </div>

      {/* Main footer */}
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 md:grid-cols-2 lg:grid-cols-4 md:px-8">
        {/* Brand */}
        <div className="lg:col-span-1">
          <Link href="/" className="flex items-center gap-2.5">
            <span className="flex flex-col leading-none">
              <span className="font-display text-2xl font-bold text-primary-foreground">H&B</span>
              <span className="text-[10px] uppercase tracking-[0.18em] text-primary-foreground/60">
                and Consultant
              </span>
            </span>
          </Link>
          <p className="mt-4 text-sm leading-relaxed text-primary-foreground/70">
            A full-service boutique law firm providing high-quality, multi-faceted legal
            services across a spectrum of complex legal issues.
          </p>
          <div className="mt-5 flex gap-3">
            {[Linkedin, Twitter, Facebook, Instagram].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="flex h-11 w-11 items-center justify-center border border-primary-foreground/20 text-primary-foreground/70 transition-colors hover:border-accent hover:text-accent"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        {/* Practice areas */}
        <div>
          <h4 className="text-xs font-bold uppercase tracking-wider text-accent">
            Practice Areas
          </h4>
          <ul className="mt-4 space-y-2">
            {practiceAreas.slice(0, 8).map((area) => (
              <li key={area.title}>
                <Link
                  href="/services"
                  className="text-sm text-primary-foreground/70 transition-colors hover:text-accent"
                >
                  {area.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Quick links */}
        <div>
          <h4 className="text-xs font-bold uppercase tracking-wider text-accent">
            Quick Links
          </h4>
          <ul className="mt-4 space-y-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-primary-foreground/70 transition-colors hover:text-accent"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Offices */}
        <div>
          <h4 className="text-xs font-bold uppercase tracking-wider text-accent">
            Our Offices
          </h4>
          <div className="mt-4 space-y-4">
            {offices.map((office) => (
              <div key={office.city}>
                <p className="flex items-start gap-2 text-sm text-primary-foreground/80">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                      <span>{office.address}</span>
                </p>
                {office.phones.map((phone) => (
                  <p key={phone} className="mt-1 flex items-center gap-2 text-sm text-primary-foreground/70">
                    <Phone className="h-3.5 w-3.5 text-accent" />
                    {phone}
                  </p>
                ))}
              </div>
            ))}
            <p className="flex items-center gap-2 text-sm text-primary-foreground/70">
              <Mail className="h-4 w-4 text-accent" />
              {contactEmail}
            </p>
          </div>
        </div>
      </div>

      {/* Business hours bar */}
      <div className="border-t border-primary-foreground/20">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-6 px-4 py-5 text-sm text-primary-foreground/60 md:px-8">
          {businessHours.map((item) => (
            <span key={item.day} className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-accent" />
              <span className="text-primary-foreground/80">{item.day}:</span> {item.hours}
            </span>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-primary-foreground/20">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-5 text-xs text-primary-foreground/50 md:flex-row md:px-8">
          <p>&copy; {new Date().getFullYear()} H&B Legal and Consultant. All rights reserved.</p>
          <p className="text-center md:text-right">
            The Bar Council of India does not permit advertisement or solicitation by advocates in any form.
          </p>
        </div>
      </div>
    </footer>
  );
}
