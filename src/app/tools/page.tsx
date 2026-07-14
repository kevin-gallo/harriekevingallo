import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import PageHero from "@/components/PageHero";
import ToolsListing from "@/components/tools/ToolsListing";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Tools | Harrie Kevin Gallo",
  description:
    "The frameworks, languages, and platforms I use to design, build, and ship websites: from React and Laravel to Shopify and Figma.",
  alternates: {
    canonical: "/tools",
  },
};

export default function ToolsPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <PageHero
          label="Tools"
          title="Every tool I've picked up on my development journey"
          intro="The frameworks, languages, and platforms behind my work, and how each one earns its place on a project."
        />
        <section className="px-space py-space bg-white">
          <div className="mx-container">
            <ToolsListing />
          </div>
        </section>
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
