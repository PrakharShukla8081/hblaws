// Public URL of the website. Set NEXT_PUBLIC_SITE_URL in the hosting dashboard if it changes.
export const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || 'https://www.hblaws.com').replace(
  /\/$/,
  ''
);

export const siteName = 'H&B Legal and Consultant';
