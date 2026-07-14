'use client'

import Link from "next/link";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Keyboard, Navigation } from "swiper/modules";
import "swiper/css";
import { works } from "@/data/works";
import WorkCard from "@/components/WorkCard";

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
            <SwiperSlide key={work.slug}>
              <WorkCard work={work} />
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="flex justify-center">
          <Link href="/work" className="btn btn-black">
            See all projects
            <ArrowUpRight className="size-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Works;
