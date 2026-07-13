import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import TechMarquee from "@/components/TechMarquee";
import About from "@/components/About";
import Solutions from "@/components/Solutions";
import Works from "@/components/Works";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

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
