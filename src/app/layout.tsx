import type { Metadata } from "next";
import { Libre_Franklin, Source_Serif_4 } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";

const libreFranklin = Libre_Franklin({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-libre-franklin",
  display: "swap",
});

const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  weight: ["500"],
  variable: "--font-source-serif",
  display: "swap",
});

const siteUrl = "https://harriekevingallo.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Harrie Kevin Gallo | Web Design & Development Partner",
  description:
    "Your web design and development partner. I design and build websites and online stores that turn visitors into leads, customers, and sales for your business.",
  keywords: [
    "web design partner",
    "web development partner",
    "website designer",
    "website developer",
    "online store development",
    "e-commerce website",
    "business website",
    "Cebu web developer",
    "Harrie Kevin Gallo",
  ],
  authors: [{ name: "Harrie Kevin Gallo" }],
  creator: "Harrie Kevin Gallo",
  openGraph: {
    type: "website",
    siteName: "Harrie Kevin Gallo",
  },
  twitter: {
    card: "summary_large_image",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Harrie Kevin Gallo",
  jobTitle: "Web Design & Development Partner",
  url: siteUrl,
  email: "mailto:gallo.harriekevin.official@gmail.com",
  telephone: "+63 994 583 3976",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Cebu City",
    addressCountry: "PH",
  },
  sameAs: [
    "https://github.com/kevin-gallo",
    "https://www.linkedin.com/in/harrie-kevin-gallo-b2491325a/",
    "https://www.facebook.com/kevinjhay.gallo.3/",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${libreFranklin.variable} ${sourceSerif.variable}`}>
      <body className="antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
