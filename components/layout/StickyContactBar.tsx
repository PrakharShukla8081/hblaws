import Link from 'next/link';
import { CalendarCheck, MessageCircle, Phone } from 'lucide-react';
import { offices, whatsappNumber } from '@/lib/data';

/**
 * Mobile-only bar fixed to the bottom of the screen: Call, WhatsApp, Book Consultation.
 * Hidden from the md breakpoint upwards.
 */
export function StickyContactBar() {
  const phone = offices[0].phones[0];
  const tel = `tel:${phone.replace(/[^\d+]/g, '')}`;
  const wa = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    'Hello, I would like to book a consultation.'
  )}`;

  const base =
    'flex flex-1 items-center justify-center gap-2 py-3 text-sm font-semibold transition-colors';

  return (
    <nav
      aria-label="Quick contact"
      className="fixed inset-x-0 bottom-0 z-40 flex border-t border-primary-foreground/15 bg-primary pb-[env(safe-area-inset-bottom)] text-primary-foreground md:hidden"
    >
      <a href={tel} className={`${base} hover:bg-primary-foreground/10`}>
        <Phone className="h-4 w-4" />
        Call
      </a>
      <a
        href={wa}
        target="_blank"
        rel="noopener noreferrer"
        className={`${base} border-x border-primary-foreground/15 hover:bg-primary-foreground/10`}
      >
        <MessageCircle className="h-4 w-4" />
        WhatsApp
      </a>
      <Link href="/contact" className={`${base} bg-accent text-accent-foreground hover:bg-accent/90`}>
        <CalendarCheck className="h-4 w-4" />
        Book
      </Link>
    </nav>
  );
}
