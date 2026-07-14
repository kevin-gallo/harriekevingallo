'use client'

import Image, { type StaticImageData } from "next/image";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Keyboard, Navigation } from "swiper/modules";
import "swiper/css";
import ncLogo from "../../public/nc-logo.jpg";
import natureLogo from "../../public/nature-logo.jpg";
import fhLogo from "../../public/fh-logo.jpg";
import lesLogo from "../../public/lesch-logo.jpg";
import chitChatImg from "../../public/chitchat-img.jpg";
import trackFunds from "../../public/trackfunds-img.jpg";

type Work = {
  title: string;
  category: string;
  image: StaticImageData;
  url?: string;
  /* logo images render contained on a light backdrop instead of cropped */
  isLogo?: boolean;
};

const works: Work[] = [
  {
    title: "NativeCamp online English platform",
    category: "Online learning platform",
    image: ncLogo,
    url: "https://nativecamp.net/",
    isLogo: true,
  },
  {
    title: "Nature Bijoux e-commerce",
    category: "Online store",
    image: natureLogo,
    url: "https://www.nature.fr/en/",
    isLogo: true,
  },
  {
    title: "Franck Herval e-commerce",
    category: "Online store",
    image: fhLogo,
    url: "https://www.franckherval.com/",
    isLogo: true,
  },
  {
    title: "Les Chamanes website",
    category: "Brand website",
    image: lesLogo,
    url: "https://www.leschamanes.com/en/",
    isLogo: true,
  },
  {
    title: "Chitchat platform migration",
    category: "Platform rebuild",
    image: chitChatImg,
    url: "https://www.chitchatconfessions.com/",
  },
  {
    title: "Trackfunds investment tracker",
    category: "Design & build",
    image: trackFunds,
  },
];

const WorkTile = ({ work }: { work: Work }) => {
  const content = (
    <>
      <div className="bg-grey-200 relative aspect-[4/3] overflow-hidden">
        <Image
          src={work.image}
          alt={work.title}
          fill
          sizes="(min-width: 1024px) 45vw, 90vw"
          className={`transition-transform duration-700 ease-out group-hover:scale-105 ${
            work.isLogo ? "object-contain p-[15%]" : "object-cover"
          }`}
        />
      </div>
      <div className="space-y-1 pt-4">
        <p className="h5 text-grey-500">{work.category}</p>
        <h3 className="display-3 flex items-start gap-2">
          {work.title}
          {work.url && (
            <ArrowUpRight className="mt-2 size-5 shrink-0 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
          )}
        </h3>
      </div>
    </>
  );

  if (work.url) {
    return (
      <a
        href={work.url}
        target="_blank"
        rel="noopener noreferrer"
        className="group block"
      >
        {content}
      </a>
    );
  }
  return <div className="group block">{content}</div>;
};

const Works = () => {
  return (
    <section id="works" className="px-space py-space scroll-mt-24 bg-white">
      <div className="mx-container space-y-16 lg:space-y-24">
        <div className="grid-layout items-end">
          <div className="space-y-3 lg:col-span-7">
            <div>
              <h2 className="h5">Works</h2>
              <p className="display-2">
                Projects and Businesses that I help sell, grow, and stand out
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3 lg:col-span-5 lg:justify-end">
            <div className="flex items-center gap-2">
              <button
                type="button"
                aria-label="Previous project"
                className="works-prev border-grey-300 hover:bg-primary flex size-11 items-center justify-center rounded-full border transition-colors duration-300 disabled:pointer-events-none disabled:opacity-30"
              >
                <ChevronLeft className="size-5" />
              </button>
              <button
                type="button"
                aria-label="Next project"
                className="works-next border-grey-300 hover:bg-primary flex size-11 items-center justify-center rounded-full border transition-colors duration-300 disabled:pointer-events-none disabled:opacity-30"
              >
                <ChevronRight className="size-5" />
              </button>
            </div>
          </div>
        </div>

        <Swiper
          modules={[Navigation, A11y, Keyboard]}
          navigation={{ prevEl: ".works-prev", nextEl: ".works-next" }}
          keyboard={{ enabled: true }}
          spaceBetween={20}
          slidesPerView={1.1}
          breakpoints={{
            768: { slidesPerView: 2, spaceBetween: 20 },
            1280: { slidesPerView: 2.5, spaceBetween: 24 },
          }}
        >
          {works.map((work) => (
            <SwiperSlide key={work.title}>
              <WorkTile work={work} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Works;
