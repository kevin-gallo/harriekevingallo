import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import PageHero from "@/components/PageHero";
import ServicesListing from "@/components/services/ServicesListing";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Services | Harrie Kevin Gallo",
  description:
    "Web design and development services: fast websites, online stores, easy-to-edit CMS builds, and the ongoing care that keeps them running.",
  alternates: {
    canonical: "/services",
  },
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <PageHero
          label="Services"
          title="Everything I can take off your plate"
          intro="From the first build to the day-to-day care that follows, these are the ways I help your website bring in customers while you focus on the business."
        />
        <ServicesListing />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
