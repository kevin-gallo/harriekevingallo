export type Role = {
  slug: string;
  role: string;
  company: string;
  /* short context shown next to the company name */
  note: string;
  /* e.g. "Jan 2026 - Present" */
  period: string;
  kind: "role" | "education";
  current?: boolean;
  description: string;
  highlights: string[];
};

export const experience: Role[] = [
  {
    slug: "plato-creative",
    role: "Full Stack Developer (AI Tooling & Automation)",
    company: "Plato Creative",
    note: "New Zealand",
    period: "Jan 2026 - Present",
    kind: "role",
    current: true,
    description:
      "I build and ship client websites for a New Zealand creative agency, working AI-native in Claude Code and Cursor. I built the web team's library of Claude Code agent skills, which automate Craft CMS and SilverStripe maintenance passes, DDEV setup, and conversions of HTML prototypes into Astro and Storyblok components, and I connect AI agents to client CMS platforms through the Model Context Protocol (MCP), with human-in-the-loop guardrails on every workflow. Day to day I ship front-end and e-commerce features across Craft CMS, SilverStripe, WordPress, Statamic, and Storyblok, run maintenance and security updates on SiteHost, train clients on their CMS, and work with client services, marketing, SEO, and design teams.",
    highlights: [
      "Claude Code agent skills",
      "MCP integrations",
      "AI-powered workflows",
      "Craft CMS",
      "Storyblok",
    ],
  },
  {
    slug: "forty-degrees-celsius",
    role: "Software Developer",
    company: "Forty Degrees Celsius Inc.",
    note: "Japanese e-learning platform",
    period: "Feb 2024 - Jan 2026",
    kind: "role",
    description:
      "New features and critical fixes for NativeCamp, one of Asia's largest online English learning platforms, built with PHP (CakePHP), SQL, Angular, and Vue.js. As part of the dedicated bug team, I identified and resolved critical issues across the whole system, used AI coding assistants (GitHub Copilot, ChatGPT, and Gemini) daily to debug, generate code, and work through a large production codebase, and coordinated with Japanese senior engineers through daily stand-ups and progress reports.",
    highlights: [
      "PHP",
      "Vue.js",
      "Angular",
      "AI-assisted development",
      "Dedicated bug team",
    ],
  },
  {
    slug: "freelance",
    role: "Freelance Full-Stack Developer",
    company: "Self-employed",
    note: "US small businesses",
    period: "2024 - 2025",
    kind: "role",
    description:
      "More than 50 websites for US small businesses, mostly home-service companies, built on WordPress, Elementor, Bricks Builder, and Duda and hosted on WP Engine and Kinsta behind Cloudflare. I also rebuilt the Chitchat Confessions community platform on Next.js, React, TypeScript, and Tailwind CSS and migrated it with no downtime. AI-assisted development with GitHub Copilot, ChatGPT, and Gemini kept turnarounds short across a high volume of client sites.",
    highlights: [
      "50+ websites",
      "WordPress",
      "Next.js",
      "AI-assisted development",
    ],
  },
  {
    slug: "korlanda",
    role: "Software Engineer",
    company: "Korlanda Corp.",
    note: "French e-commerce brands",
    period: "Dec 2020 - May 2023",
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
    period: "Feb 2023 - Apr 2023",
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
    period: "2019 - 2023",
    kind: "education",
    description:
      "Bachelor of Science in Information Technology, the foundation for everything above: programming fundamentals, databases, and the habit of shipping working software.",
    highlights: ["Education"],
  },
];

export const getRole = (slug: string) =>
  experience.find((item) => item.slug === slug);
