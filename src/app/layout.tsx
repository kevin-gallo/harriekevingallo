import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const siteUrl = "https://harriekevingallo.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Harrie Kevin Gallo | Full Stack Developer",
  description:
    "Your full stack development partner. I build websites and online stores that turn visitors into leads, customers, and sales for your business.",
  keywords: [
    "full stack developer",
    "full stack web developer",
    "web development partner",
    "online store development",
    "e-commerce website",
    "business website",
    "Cebu full stack developer",
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

export const viewport: Viewport = {
  /* Kept in sync with the .dark class by themeInit and ThemeToggle */
  themeColor: "#faf7f1",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Harrie Kevin Gallo",
  jobTitle: "Full Stack Developer",
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

/* Applies the saved theme before first paint to avoid a flash. Defaults to light. */
const themeInit = `try{var d=localStorage.getItem("theme")==="dark";document.documentElement.classList.toggle("dark",d);var m=document.querySelector('meta[name="theme-color"]');if(m)m.setAttribute("content",d?"#101010":"#faf7f1")}catch(e){}`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <body className="antialiased">
        <script dangerouslySetInnerHTML={{ __html: themeInit }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
