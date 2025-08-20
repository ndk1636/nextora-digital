import './globals.css';
import Script from 'next/script';

export const metadata = {
  title: 'Nextora Digital',
  description: 'Future-Ready Digital Solutions',
  robots: 'noindex, nofollow',
};

export default function RootLayout({ children }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Nextora Digital',
    url: 'https://yourdomain.com',
  };

  return (
    <html lang="en">
      <head>
        <meta name="robots" content="noindex, nofollow" />
        <link rel="canonical" href="https://yourdomain.com" />
      </head>
      <body>
        {children}
        <Script id="schema-org" type="application/ld+json" strategy="afterInteractive">
          {JSON.stringify(jsonLd)}
        </Script>
        <Script src="https://www.googletagmanager.com/gtag/js?id=YOUR-ID" strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'YOUR-ID');`}
        </Script>
      </body>
    </html>
  );
}