'use client'

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll } from "framer-motion";
import { Plus } from "lucide-react";

const solutions = [
  {
    title: "Websites that win customers",
    body: "A fast, professional website that looks great on every phone, tablet, and desktop. Visitors stay longer, trust you more, and take action, whether that's calling, booking, or buying.",
    image:
      "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=1600&auto=format&fit=crop",
    imageAlt: "Two colleagues reviewing a website design together",
    links: [
      "Fast-loading pages",
      "Mobile-friendly design",
      "A look that matches your brand",
      "Clear calls to action",
      "Easy for every visitor to use",
      "Built to be found on Google",
    ],
  },
  {
    title: "Systems that run your business",
    body: "Everything behind the scenes just works: orders, payments, bookings, and customer details flow to the right place automatically, so you spend your time selling instead of troubleshooting.",
    image:
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1600&auto=format&fit=crop",
    imageAlt: "Colleagues discussing business systems in a meeting",
    links: [
      "Secure online payments",
      "Bookings & orders",
      "Customer accounts & logins",
      "Connects with your existing tools",
      "Automated day-to-day admin",
      "Safe, reliable customer data",
    ],
  },
  {
    title: "Online stores & easy-to-edit websites",
    body: "Sell more online and update your own site without waiting on a developer. I build stores and websites your team can run themselves: change prices, add products, and publish news in minutes.",
    image:
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=1600&auto=format&fit=crop",
    imageAlt: "Two colleagues managing an online store on a laptop",
    links: [
      "Online stores built to sell",
      "Update content yourself",
      "Products, pricing & inventory",
      "Promotions & discount codes",
      "Smooth, simple checkout",
      "Training & handover included",
    ],
  },
  {
    title: "Planning, care & smart automation",
    body: "From the first planning call to long after launch: a clear roadmap, a website that stays online and up to date, and smart automation that saves you hours and protects your profits.",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1600&auto=format&fit=crop",
    imageAlt: "Team planning a project together on a whiteboard wall",
    links: [
      "Project planning & honest advice",
      "Reliable hosting & smooth launches",
      "Ongoing care & updates",
      "Smart AI-powered automation",
      "Performance & uptime monitoring",
      "Long-term support",
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
                Everything your business needs to attract customers and grow
                online
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
