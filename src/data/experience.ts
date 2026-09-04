export type Role = {
  slug: string;
  role: string;
  company: string;
  /* short context shown next to the company name */
  note: string;
  /* e.g. "Jan 2026 – Present" */
  period: string;
  kind: "role" | "education";
  current?: boolean;
  description: string;
  highlights: string[];
};

export const experience: Role[] = [
  {
    slug: "plato-creative",
    role: "Full Stack Developer",
    company: "Plato Creative",
    note: "New Zealand",
    period: "Jan 2026 – Present",
    kind: "role",
    current: true,
    description:
      "I build and maintain client websites for a New Zealand creative agency across Craft CMS, SilverStripe, WordPress, Statamic, and Storyblok. Front-end features and e-commerce with Vue.js, React, and Tailwind CSS; maintenance and security updates across sites hosted on SiteHost; AI tooling and automation for agency workflows using Claude and Cursor; and CMS training for clients, working daily with client services, marketing, SEO, and design teams.",
    highlights: [
      "Craft CMS",
      "Statamic",
      "Storyblok",
      "SilverStripe",
      "AI tooling & automation",
    ],
  },
  {
    slug: "forty-degrees-celsius",
    role: "Software Developer",
    company: "Forty Degrees Celsius Inc.",
    note: "Japanese e-learning platform",
    period: "Feb 2024 – Jan 2026",
    kind: "role",
    description:
      "New features and critical fixes for NativeCamp, one of Asia's largest online English learning platforms. As part of the dedicated bug team, I identified and resolved critical issues across the whole system, coordinating with Japanese senior engineers through daily stand-ups and progress reports.",
    highlights: ["PHP", "Vue.js", "Angular", "SQL", "Dedicated bug team"],
  },
  {
    slug: "korlanda",
    role: "Software Engineer",
    company: "Korlanda Corp.",
    note: "French e-commerce brands",
    period: "Dec 2020 – May 2023",
    kind: "role",
    description:
      "Full-stack development on e-commerce WordPress sites for French jewellery brands, including Nature Bijoux and Franck Herval. I turned client and internal support tickets into shipped fixes, refactored front-end code for performance and maintainability, and worked directly with senior developers based in France.",
    highlights: ["WordPress", "PHP", "jQuery", "Bootstrap", "E-commerce"],
  },
  {
    slug: "dna-micro",
    role: "Software Engineer Intern",
    company: "DNA Micro",
    note: "First production codebase",
    period: "Feb 2023 – Apr 2023",
    kind: "role",
    description:
      "Real client projects from day one, built with React, XState, MongoDB, and Tailwind CSS. This is where I picked up the habits I still keep: code reviews, knowledge sharing, and learning new tools quickly.",
    highlights: ["React", "MongoDB", "Tailwind CSS"],
  },
  {
    slug: "southwestern-university",
    role: "BS in Information Technology",
    company: "Southwestern University PHINMA",
    note: "Cebu City",
    period: "2019 – 2023",
    kind: "education",
    description:
      "Bachelor of Science in Information Technology, the foundation for everything above: programming fundamentals, databases, and the habit of shipping working software.",
    highlights: ["Education"],
  },
];

export const getRole = (slug: string) =>
  experience.find((item) => item.slug === slug);
