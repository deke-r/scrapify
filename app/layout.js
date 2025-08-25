"use client";

import 'bootstrap/dist/css/bootstrap.min.css';
import './globals.css';
import Bootstrap from '../libs/Bootstrap';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import TopNav from '@/components/TopNav';
import TawkToWidget from '@/components/TawkToWidget';
import WhatsAppButton from '@/components/WhatsAppButton';

import Script from 'next/script';
import { usePathname } from 'next/navigation';

export default function RootLayout({ children }) {
  const pathname = usePathname();


  const hideNavFooter = pathname === "/ad" || pathname === "/thank-you";

  return (
    <html lang="en">
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-SYLRFVRWPE"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-SYLRFVRWPE');
          `}
        </Script>
      </head>

      <body className="d-flex flex-column min-vh-100">
        <Bootstrap />
        <TawkToWidget />
        <WhatsAppButton />

        {!hideNavFooter && <TopNav />}
        {!hideNavFooter && <Navbar />}

        <main className="flex-grow-1">{children}</main>

        {!hideNavFooter && <Footer />}
      </body>
    </html>
  );
}
