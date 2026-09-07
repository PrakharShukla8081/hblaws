import './globals.css';
import type { Metadata } from 'next';
import { Inter, Sora } from 'next/font/google';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { CookieBanner } from '@/components/layout/CookieBanner';
import { DisclaimerModal } from '@/components/layout/DisclaimerModal';
import { ThemeProvider } from '@/components/shared/ThemeProvider';
import { ThemeSwitcher } from '@/components/shared/ThemeSwitcher';
import { MotionProvider } from '@/components/shared/MotionProvider';
import { PageTransition } from '@/components/shared/PageTransition';
import { SmoothScrollProvider } from '@/components/shared/SmoothScrollProvider';
import { ScrollProgress } from '@/components/shared/ScrollProgress';

const inter = Inter({ subsets: ['latin'], variable: '--font-body', display: 'swap' });
const sora = Sora({
  subsets: ['latin'],
  variable: '--font-display',
  weight: ['600', '700', '800'],
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://hblaws.com'),
  title: {
    default: 'H&B Legal and Consultant — Attorneys Fighting For Your Justice',
    template: '%s | H&B Legal and Consultant',
  },
  description:
    'A full-service boutique law firm helping clients nationwide secure relief from wrongful denials, with representation before District Courts, Tribunals, High Courts, and the Supreme Court of India.',
  keywords: [
    'law firm India',
    'Supreme Court lawyer',
    'criminal litigation',
    'corporate law',
    'arbitration India',
    'H&B Legal',
  ],
  openGraph: {
    title: 'H&B Legal and Consultant — Attorneys Fighting For Your Justice',
    description:
      'A full-service boutique law firm with representation before District Courts, Tribunals, High Courts, and the Supreme Court of India.',
    type: 'website',
    locale: 'en_IN',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${sora.variable}`}
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html:
              "(function(){try{var value=localStorage.getItem('hb-theme')||'sage:light';var parts=value.split(':');var palette=['navy','sage','mono','maroon'].indexOf(parts[0])>-1?parts[0]:'sage';var mode=parts[1]==='dark'?'dark':'light';var root=document.documentElement;root.dataset.palette=palette;root.classList.toggle('dark',palette!=='sage'&&mode==='dark')}catch(error){document.documentElement.dataset.palette='sage';document.documentElement.classList.remove('dark')}})()",
          }}
        />
      </head>
      <body className="font-body antialiased">
        <MotionProvider>
          <SmoothScrollProvider>
            <ThemeProvider>
              <ScrollProgress />
            <Header />
            <main>
              <PageTransition>{children}</PageTransition>
            </main>
            <Footer />
            <ThemeSwitcher />
            <CookieBanner />
            <DisclaimerModal />
            </ThemeProvider>
          </SmoothScrollProvider>
        </MotionProvider>
      </body>
    </html>
  );
}
