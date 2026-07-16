import {
  Handshake,
  Globe,
  Bug,
  Layers,
  ShoppingCart,
  GraduationCap,
  type LucideIcon,
} from "lucide-react";

type Strength = {
  icon: LucideIcon;
  title: string;
  body: string;
};

const strengths: Strength[] = [
  {
    icon: Handshake,
    title: "One dedicated point of contact",
    body: "You talk directly to the person doing the work, from first message to launch day and beyond. Questions get answered by the developer who actually built your site.",
  },
  {
    icon: Globe,
    title: "Communication across time zones",
    body: "I've coordinated daily with teams in Japan, France, and New Zealand. You get clear, regular updates and honest timelines, wherever you are in the world.",
  },
  {
    icon: Bug,
    title: "From support ticket to shipped fix",
    body: "Years on a dedicated bug team taught me to find root causes fast. Describe the problem the way your customer saw it, and I'll trace it, fix it, and explain what happened in plain language.",
  },
  {
    icon: Layers,
    title: "Fluent in legacy and modern stacks",
    body: "I work comfortably across PHP, jQuery, and WordPress as well as React, Vue, and Next.js. I can care for the site you have today and build the one you need next.",
  },
  {
    icon: ShoppingCart,
    title: "E-commerce with revenue in mind",
    body: "I've built and maintained online stores for European brands, so I treat page speed and checkout stability as money. Every fix and feature is judged by whether it helps you sell.",
  },
  {
    icon: GraduationCap,
    title: "A website your team can run",
    body: "Every build ends with a CMS your team can edit, plus training and documentation. You stay in control of your own website, and I stay one message away.",
  },
];

const AboutStrengths = () => {
  return (
    <section className="px-space py-space">
      <div className="mx-container space-y-10 lg:space-y-14">
        <div className="grid-layout">
          <div className="space-y-3 lg:col-span-7">
            <div>
              <h2 className="h5">Working with me</h2>
              <p className="display-2">What you get as a client</p>
            </div>
          </div>
        </div>

        <ul className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {strengths.map((strength) => (
            <li
              key={strength.title}
              className="border-grey-300 h-full border bg-white p-6"
            >
              <strength.icon
                className="text-primary size-7"
                strokeWidth={1.5}
                aria-hidden="true"
              />
              <h3 className="h3 mt-8">{strength.title}</h3>
              <p className="body-3 text-grey-500 mt-2">{strength.body}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default AboutStrengths;
