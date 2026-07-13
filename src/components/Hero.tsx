import Image from "next/image";
import { ArrowDown } from "lucide-react";

const Hero = () => {
  return (
    <section id="top" className="banner-hero-section darken-overlay-35">
      <Image
        src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2400&auto=format&fit=crop"
        alt="Code editor on a dark screen"
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
                Freelance web developer &amp; designer
              </p>
              <h1 className="display-2">
                The one-man team that designs, builds, and ships websites for
                ambitious businesses
              </h1>
            </div>

            <div className="flex lg:col-span-5 lg:justify-self-end">
              <a href="#solutions" className="btn btn-white">
                <ArrowDown className="size-4" />
                See what I can do
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
