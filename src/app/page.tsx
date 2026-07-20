import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import TechMarquee from "@/components/TechMarquee";
import About from "@/components/About";
import Solutions from "@/components/Solutions";
import Works from "@/components/Works";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "/",
    siteName: "Harrie Kevin Gallo",
    title: "Harrie Kevin Gallo | Web Design & Development Partner",
    description:
      "Websites and online stores that turn visitors into leads, customers, and sales. One dedicated partner from first idea to launch and beyond.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Harrie Kevin Gallo | Web Design & Development Partner",
    description:
      "Websites and online stores that turn visitors into leads, customers, and sales. One dedicated partner from first idea to launch and beyond.",
  },
};

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <TechMarquee />
        <About />
        <Solutions />
        <Works />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
