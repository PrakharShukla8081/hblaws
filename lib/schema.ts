import { siteName, siteUrl } from '@/lib/site';
import { contactEmail, offices, weeklySchedule } from '@/lib/data';
import type { Associate } from '@/lib/data';

const DAY_NAMES = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

const pad = (hour: number) => `${String(hour).padStart(2, '0')}:00`;

function openingHours() {
  return Object.entries(weeklySchedule)
    .filter(([, slot]) => slot !== null)
    .map(([day, slot]) => ({
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: DAY_NAMES[Number(day)],
      opens: pad(slot![0]),
      closes: pad(slot![1]),
    }));
}

function postalAddress(city: string, address: string) {
  return {
    '@type': 'PostalAddress',
    streetAddress: address,
    addressLocality: city,
    addressCountry: 'IN',
  };
}

/** Site-wide business data. Only facts that are already shown on the website. */
export function organizationSchema() {
  const [main] = offices;
  return {
    '@context': 'https://schema.org',
    '@type': 'LegalService',
    '@id': `${siteUrl}/#organization`,
    name: siteName,
    url: siteUrl,
    image: `${siteUrl}/images/hero.jpg`,
    email: contactEmail,
    telephone: main.phones[0],
    address: postalAddress(main.city, main.address),
    areaServed: { '@type': 'Country', name: 'India' },
    openingHoursSpecification: openingHours(),
    location: offices.map((office) => ({
      '@type': 'Place',
      name: office.label,
      address: postalAddress(office.city, office.address),
      telephone: office.phones[0],
    })),
  };
}

export function personSchema(attorney: Associate) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: attorney.name,
    jobTitle: attorney.title,
    description: attorney.bio,
    url: `${siteUrl}/attorneys/${attorney.slug}`,
    worksFor: { '@type': 'LegalService', name: siteName, url: siteUrl },
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: `${siteUrl}${item.path}`,
    })),
  };
}
