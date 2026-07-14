import { type StaticImageData } from "next/image";
import ncLogo from "../../public/nc-logo.jpg";
import natureLogo from "../../public/nature-logo.jpg";
import fhLogo from "../../public/fh-logo.jpg";
import lesLogo from "../../public/lesch-logo.jpg";
import chitChatImg from "../../public/chitchat-img.jpg";
import trackFunds from "../../public/trackfunds-img.jpg";

export type WorkType = "freelance" | "personal" | "corporate";

export type WorkImage = {
  src: StaticImageData | string;
  alt: string;
};

export type Work = {
  slug: string;
  title: string;
  /* short display tag shown on cards, e.g. "Online store" */
  category: string;
  /* filter group on the work listing page */
  type: WorkType;
  client: string;
  year: string;
  techStack: string[];
  services: string[];
  /* one-liner used on cards and meta descriptions */
  summary: string;
  /* paragraphs shown on the detail page */
  description: string[];
  /* thumbnail / hero image */
  image: StaticImageData | string;
  /* extra detail-page images; add as projects get documented */
  gallery?: WorkImage[];
  liveUrl?: string;
  /* logo images render contained on a light backdrop instead of cropped */
  isLogo?: boolean;
};

export const workTypeFilters: { value: WorkType | "all"; label: string }[] = [
  { value: "all", label: "All projects" },
  { value: "freelance", label: "Freelance" },
  { value: "personal", label: "Personal" },
  { value: "corporate", label: "Corporate" },
];

/*
 * NOTE: client names, years, tech stacks, and copy below are placeholders
 * migrated from the home page carousel. Edit each entry with the real
 * project details, and add new projects by appending to this array.
 */
export const works: Work[] = [
  {
    slug: "nativecamp-online-english-platform",
    title: "NativeCamp online English platform",
    category: "Online learning platform",
    type: "corporate",
    client: "NativeCamp",
    year: "2023",
    techStack: ["PHP", "Laravel", "jQuery", "MySQL"],
    services: ["Web development", "Feature development", "Maintenance"],
    summary:
      "Feature development and maintenance for one of Asia's largest online English learning platforms.",
    description: [
      "NativeCamp connects students with tutors around the world for one-on-one English lessons, around the clock. Working on a platform at this scale means every change has to be fast, reliable, and easy for thousands of daily users to pick up without instructions.",
      "I worked across the student-facing site and internal tooling: building new features, improving existing flows, and keeping the platform stable while the business kept growing.",
    ],
    image: ncLogo,
    liveUrl: "https://nativecamp.net/",
    isLogo: true,
  },
  {
    slug: "nature-bijoux-e-commerce",
    title: "Nature Bijoux e-commerce",
    category: "Online store",
    type: "corporate",
    client: "Nature Bijoux",
    year: "2022",
    techStack: ["PHP", "JavaScript", "MySQL"],
    services: ["E-commerce development", "Maintenance"],
    summary:
      "Online store development for a French jewellery brand selling handcrafted pieces worldwide.",
    description: [
      "Nature Bijoux crafts jewellery from natural materials and sells to customers across Europe and beyond. Their store needed to present products beautifully while keeping the path from browsing to checkout short and simple.",
      "I helped develop and maintain the storefront: product pages, catalogue browsing, and the day-to-day fixes and improvements that keep an online store selling.",
    ],
    image: natureLogo,
    liveUrl: "https://www.nature.fr/en/",
    isLogo: true,
  },
  {
    slug: "franck-herval-e-commerce",
    title: "Franck Herval e-commerce",
    category: "Online store",
    type: "corporate",
    client: "Franck Herval",
    year: "2022",
    techStack: ["PHP", "JavaScript", "MySQL"],
    services: ["E-commerce development", "Maintenance"],
    summary:
      "Storefront development for a designer jewellery brand with retailers across Europe.",
    description: [
      "Franck Herval designs statement jewellery collections sold through retailers and directly online. The store had to reflect the craft behind the product while staying quick to browse and easy to buy from.",
      "I worked on storefront features and ongoing improvements, keeping the shopping experience polished across collections, seasons, and campaigns.",
    ],
    image: fhLogo,
    liveUrl: "https://www.franckherval.com/",
    isLogo: true,
  },
  {
    slug: "les-chamanes-website",
    title: "Les Chamanes website",
    category: "Brand website",
    type: "corporate",
    client: "Les Chamanes",
    year: "2022",
    techStack: ["PHP", "JavaScript", "CSS"],
    services: ["Web development", "Brand website"],
    summary:
      "Brand website for a French jewellery label, built to showcase collections and tell the brand story.",
    description: [
      "Les Chamanes is a jewellery brand with a strong visual identity. The website's job was to carry that identity online: collections presented like a lookbook, with the story of the brand woven through.",
      "I developed and maintained the site, translating the brand's design direction into fast, responsive pages that work as well on a phone as on a large screen.",
    ],
    image: lesLogo,
    liveUrl: "https://www.leschamanes.com/en/",
    isLogo: true,
  },
  {
    slug: "chitchat-platform-migration",
    title: "Chitchat platform migration",
    category: "Platform rebuild",
    type: "freelance",
    client: "Chitchat Confessions",
    year: "2024",
    techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    services: ["Platform migration", "Web development"],
    summary:
      "Full platform rebuild and migration to a modern stack, without disrupting the existing community.",
    description: [
      "Chitchat had an active community on an aging platform that was getting harder to maintain and slower to load. The goal was a clean rebuild on a modern stack while keeping everything the community relied on.",
      "I handled the migration end to end: rebuilding pages and features, moving content across, and launching with no downtime for users.",
    ],
    image: chitChatImg,
    liveUrl: "https://www.chitchatconfessions.com/",
  },
  {
    slug: "trackfunds-investment-tracker",
    title: "Trackfunds investment tracker",
    category: "Design & build",
    type: "personal",
    client: "Personal project",
    year: "2024",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "PostgreSQL"],
    services: ["Product design", "Web development"],
    summary:
      "A personal project: an investment tracking app designed and built from scratch.",
    description: [
      "Trackfunds started as a personal need: one place to see how investments are performing without spreadsheets. I designed and built it from the first wireframe to a working product.",
      "The project covers the full stack: interface design, data modelling, and the charts and summaries that turn raw numbers into something you can act on.",
    ],
    image: trackFunds,
  },
];

export const getWork = (slug: string) =>
  works.find((work) => work.slug === slug);

/* other projects for the "Related work" section, same type first */
export const getRelatedWorks = (slug: string, limit = 3): Work[] => {
  const current = getWork(slug);
  if (!current) return works.slice(0, limit);

  const others = works.filter((work) => work.slug !== slug);
  const sameType = others.filter((work) => work.type === current.type);
  const rest = others.filter((work) => work.type !== current.type);

  return [...sameType, ...rest].slice(0, limit);
};
