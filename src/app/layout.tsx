import type { Metadata } from 'next';
import { Inter, Poppins } from 'next/font/google';
import './globals.scss';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  display: 'swap',
  variable: '--font-poppins',
});

export const metadata: Metadata = {
  title: 'SocialCents - Your First Social Currency Card',
  description:
    'Turn your social influence into real rewards. SocialCents INfLUX card - shop at partner brands, share on social media, and earn instant cashback. Powered by Visa.',
  keywords: [
    'social currency',
    'influencer card',
    'cashback',
    'social media rewards',
    'INfLUX card',
    'SocialCents',
    'creator economy',
  ],
  authors: [{ name: 'SocialCents' }],
  openGraph: {
    title: 'SocialCents - Your First Social Currency Card',
    description:
      'Turn your social influence into real rewards with the INfLUX card. Shop, share, and earn!',
    type: 'website',
    locale: 'en_CA',
    siteName: 'SocialCents',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SocialCents - Your First Social Currency Card',
    description:
      'Turn your social influence into real rewards with the INfLUX card. Shop, share, and earn!',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body>{children}</body>
    </html>
  );
}
