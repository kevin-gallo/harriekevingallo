import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import PageHero from "@/components/PageHero";
import WorkListing from "@/components/work/WorkListing";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Work | Harrie Kevin Gallo",
  description:
    "Selected projects across freelance, personal, and corporate work: websites, online stores, and platforms built to bring in customers and sales.",
  alternates: {
    canonical: "/work",
  },
};

export default function WorkPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <PageHero
          label="Work"
          title="Projects and businesses I've helped sell, grow, and stand out"
          intro="A selection of work across freelance, personal, and corporate projects. Every one built to do a job for the business behind it."
        />
        <section className="px-space py-space bg-white">
          <div className="mx-container">
            <WorkListing />
          </div>
        </section>
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
