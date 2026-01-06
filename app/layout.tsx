import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'deposit.now - AI Agent Deposits via x402',
  description: 'The first public API for AI agents to autonomously deposit funds using x402 payment protocol. Instant stablecoin payments, no accounts required.',
  openGraph: {
    title: 'deposit.now - AI Agent Deposits via x402',
    description: 'Let AI agents deposit funds autonomously via x402 — no accounts, instant stablecoin payments',
    images: [
      {
        url: 'https://i.imgur.com/8vHqZEy.jpg',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'deposit.now - AI Agent Deposits via x402',
    description: 'The first public API for AI agents to autonomously deposit funds',
    images: [
      {
        url: 'https://i.imgur.com/8vHqZEy.jpg',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <head>
        {/* Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />

        {/* Google tag (gtag.js) - your exact Analytics code */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-HQB6Y3W5ER"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', 'G-HQB6Y3W5ER');
            `,
          }}
        />
      </head>
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  );
}