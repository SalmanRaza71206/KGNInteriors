import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import SocialSidebar from "./components/SocialSidebar";

export const metadata: Metadata = {
  title: "KGN Interiors | Premium Awnings, Blinds & Interior Solutions",
  description: "Transform your space with KGN Interiors. We offer premium terrace awnings, window awnings, roller & zebra blinds, car parking solutions, and bespoke interior works. 15+ years of excellence.",
  keywords: "interior design, awnings, blinds, roller blinds, zebra blinds, car parking, terrace awning, window awning, interior works, home decor, Mumbai",
  authors: [{ name: "KGN Interiors" }],
  openGraph: {
    title: "KGN Interiors | Premium Interior Solutions",
    description: "Transform your space with our premium awnings, blinds & interior works",
    type: "website",
    locale: "en_IN",
  },
  icons:{
    icon:"KGN.svg"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&family=Inter:wght@300;400;500;600&display=swap" rel="stylesheet" />
      </head>
      <body className="antialiased">
        <Script src="https://www.googletagmanager.com/gtag/js?id=AW-17984735834" strategy="afterInteractive" />
        <Script id="google-ads" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-17984735834');
          `}
        </Script>
        <SocialSidebar />
        {children}
      </body>
    </html>
  );
}
