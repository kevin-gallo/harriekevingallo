'use client'

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll } from "framer-motion";
import { Plus } from "lucide-react";

const solutions = [
  {
    title: "Frontend development",
    body: "Interfaces that feel fast, look sharp, and hold up on every device. Built with modern frameworks, styled with intent, and tuned for performance and accessibility.",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1600&auto=format&fit=crop",
    imageAlt: "Laptop with code on screen",
    links: [
      "React & Next.js",
      "Vue & Astro",
      "TypeScript",
      "Tailwind CSS & design systems",
      "Animations & interactions",
      "Performance & accessibility",
    ],
  },
  {
    title: "Backend & custom APIs",
    body: "The engine room: clean data models, reliable integrations, and APIs that keep your product talking to every service it depends on.",
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1600&auto=format&fit=crop",
    imageAlt: "Server racks in a data centre",
    links: [
      "Node.js",
      "PHP & Laravel",
      "REST & GraphQL APIs",
      "MySQL & PostgreSQL",
      "Third-party integrations",
      "Authentication & payments",
    ],
  },
  {
    title: "CMS & e-commerce",
    body: "Content platforms your team can run without a developer on speed dial, and online stores built to sell.",
    image:
      "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?q=80&w=1600&auto=format&fit=crop",
    imageAlt: "Designer workspace with screens",
    links: [
      "WordPress & WooCommerce",
      "Craft CMS",
      "Storyblok",
      "Statamic",
      "Shopify",
      "Custom dashboards",
    ],
  },
  {
    title: "Planning, DevOps & AI",
    body: "From the first scoping call to production monitoring: architecture that scales, deployments that don't break, and AI where it actually earns its keep.",
    image:
      "https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=1600&auto=format&fit=crop",
    imageAlt: "Planning session on a whiteboard",
    links: [
      "System architecture",
      "Project planning & scoping",
      "CI/CD & deployments",
      "Docker & cloud hosting",
      "AI integrations",
      "Support & maintenance",
    ],
  },
];

const Solutions = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 35%", "end 35%"],
  });

  return (
    <section id="solutions" className="px-space py-space scroll-mt-24">
      <div className="mx-container space-y-16 lg:space-y-24">
        <div className="grid-layout">
          <div className="space-y-3 lg:col-span-7">
            <div>
              <h2 className="h5">Solutions</h2>
              <p className="display-2">
                Everything you need to design, build, and run your website
              </p>
            </div>
          </div>
        </div>

        <div className="pl-space relative" ref={containerRef}>
          {solutions.map((item, index) => (
            <div key={item.title}>
              {index !== 0 && (
                <motion.hr
                  className="border-grey-300 my-space-0-5 origin-left"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true, amount: 1 }}
                  transition={{ duration: 1, ease: [0.45, 0, 0.55, 1] }}
                />
              )}

              <div className="flex flex-col gap-5 lg:flex-row-reverse lg:gap-8">
                <div className="relative aspect-[3/2] overflow-hidden lg:basis-1/2">
                  <Image
                    src={item.image}
                    alt={item.imageAlt}
                    fill
                    sizes="(min-width: 1024px) 45vw, 90vw"
                    className="object-cover"
                  />
                </div>

                <div className="space-y-6 lg:basis-1/2 lg:space-y-10">
                  <div className="space-y-3">
                    <h3 className="display-2">{item.title}</h3>
                    <p className="body-3 text-grey-500 lg:max-w-[85%]">
                      {item.body}
                    </p>
                  </div>

                  <ul className="grid gap-x-10 md:grid-cols-2 xl:gap-x-15">
                    {item.links.map((link) => (
                      <li key={link}>
                        <span className="flex items-center gap-2 py-2">
                          <Plus className="text-primary size-4 shrink-0" strokeWidth={1.5} />
                          {link}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}

          {/* Scroll progress bar */}
          <div className="bg-grey-200 absolute top-0 left-0 h-full w-[3px] lg:w-[5px]">
            <motion.div
              className="bg-primary w-full origin-top"
              style={{ scaleY: scrollYProgress, height: "100%" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solutions;
