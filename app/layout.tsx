import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin', 'cyrillic'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'Ставрополь.Гид — всё, что происходит в городе',
  description:
    'Локальный городской гид-агрегатор: афиша, услуги, доставка и события Ставрополя в одном месте.',
  keywords: [
    'Ставрополь',
    'афиша',
    'события',
    'гид',
    'доставка',
    'услуги',
    'концерты',
    'выставки',
  ],
  authors: [{ name: 'Ставрополь.Гид' }],
  openGraph: {
    title: 'Ставрополь.Гид',
    description:
      'Всё, что происходит в Ставрополе — в одном месте. Афиша, услуги, доставка.',
    type: 'website',
    locale: 'ru_RU',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: '#0B0F19',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru" className={inter.variable}>
      <body className="font-sans bg-background text-slate-50 antialiased">
        {children}
      </body>
    </html>
  );
}
