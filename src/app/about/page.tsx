import type { Metadata } from "next";
import { Download } from "lucide-react";
import Navigation from "@/components/Navigation";
import PageHero from "@/components/PageHero";
import AboutStory from "@/components/about/AboutStory";
import AboutStrengths from "@/components/about/AboutStrengths";
import AboutExperience from "@/components/about/AboutExperience";
import TechMarquee from "@/components/TechMarquee";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "About me | Harrie Kevin Gallo",
  description:
    "Web designer and developer based in Cebu, Philippines. I've shipped production work for teams in Japan, France, and New Zealand, and every client project gets the benefit of that experience.",
  alternates: {
    canonical: "/about",
  },
};

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <PageHero
          label="About me"
          title="The partner behind the projects"
          intro="I'm Harrie Kevin Gallo, a web designer and developer in Cebu, Philippines. I've shipped production work for teams in Japan, France, and New Zealand, and every client project gets the benefit of that experience."
        >
          <a
            href="/Harrie Kevin Gallo - Resume.pdf"
            download
            className="btn btn-white"
          >
            Download my resume
            <Download className="size-4" />
          </a>
        </PageHero>
        <AboutStory />
        <AboutStrengths />
        <AboutExperience />
        <TechMarquee />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
