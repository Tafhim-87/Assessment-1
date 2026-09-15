import type { Metadata, Viewport } from 'next';
import { Hanken_Grotesk, Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';

/**
 * Load fonts via next/font — these get self-hosted, preloaded,
 * and served from the edge CDN (best-in-class caching & CLS).
 */
const hankenGrotesk = Hanken_Grotesk({
  subsets: ['latin'],
  weight: ['600', '700'],
  variable: '--font-display',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-body',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'FixFlow — Mobile Service ERP',
  description:
    'Run your mobile service business from one place. Repairs, customers, technicians, inventory, sales & billing.',
  keywords: ['ERP', 'mobile repair', 'service management', 'technician'],
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${hankenGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable}`}
    >
      <head>
        {/* Material Symbols — preconnect for faster load */}
        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
        />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap"
        />
      </head>
      <body className="bg-surface font-body-md text-body-md text-on-surface antialiased">
        {children}
      </body>
    </html>
  );
}