import Image from "next/image";
import { ArrowDown } from "lucide-react";

const Hero = () => {
  return (
    <section id="top" className="banner-hero-section darken-overlay-35">
      <Image
        src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2400&auto=format&fit=crop"
        alt="Team collaborating around a table on a web project"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />

      <div className="px-space absolute bottom-0 left-0 z-10 w-full py-12 text-white">
        <div className="mx-container">
          <div className="grid-layout items-end">
            <div className="flex flex-col gap-2 lg:col-span-7">
              <p className="h5 text-primary">
                Your web design &amp; development partner
              </p>
              <h1 className="display-2">
                Websites that turn visitors into customers and help your
                business grow
              </h1>
            </div>

            <div className="flex lg:col-span-5 lg:justify-self-end">
              <a href="#solutions" className="btn btn-white">
                <ArrowDown className="size-4" />
                See how I can help
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
