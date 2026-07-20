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
  {
    slug: "junk-movers",
    title: "Junk Movers website",
    category: "Junk removal website",
    type: "freelance",
    client: "Junk Movers",
    year: "2025",
    techStack: ["WordPress", "PHP", "JavaScript", "CSS"],
    services: ["WordPress development", "Web development"],
    summary:
      "Website for a Salt Lake Valley junk removal company that donates or recycles up to 60% of what it hauls.",
    description: [
      "Junk Movers runs same-day junk removal across the Salt Lake Valley, from house cleanouts to construction debris and light demolition. The site leads with their recycling story, donating or recycling up to 60% of every load, and makes booking or calling a one-tap action.",
      "I built the site on WordPress with dedicated service and service-area pages, hosted on Kinsta with a staging environment for safe releases.",
    ],
    image: "/works/junkmovers.jpg",
    liveUrl: "https://junkmovers.com/",
  },
  {
    slug: "savannah-river-junk-removal",
    title: "Savannah River Junk Removal website",
    category: "Junk removal website",
    type: "freelance",
    client: "Savannah River Junk Removal",
    year: "2025",
    techStack: ["WordPress", "PHP", "JavaScript", "CSS"],
    services: ["WordPress development", "Web development"],
    summary:
      "Website for a family-owned junk removal company serving Augusta, Georgia and the CSRA.",
    description: [
      "Savannah River Junk Removal is a family-owned, licensed and insured hauler covering Augusta and the Central Savannah River Area, backed by hundreds of five-star Google reviews and a donation and recycling program.",
      "I developed the WordPress site around that social proof: service pages for cleanouts, debris removal, and commercial work, with quote requests kept one click away throughout.",
    ],
    image: "/works/savannahriverjunkremoval.jpg",
    liveUrl: "https://savannahriverjunkremoval.com/",
  },
  {
    slug: "jaxle-junk-removal",
    title: "Jaxle Junk Removal website",
    category: "Junk removal website",
    type: "freelance",
    client: "Jaxle Junk Removal",
    year: "2025",
    techStack: ["WordPress", "Elementor", "PHP", "CSS"],
    services: ["WordPress development", "Web development"],
    summary:
      "Website for a Cleveland junk removal company with same-day service and upfront pricing.",
    description: [
      "Jaxle Junk Removal serves the greater Cleveland area with same-day and next-day pickups, transparent upfront pricing, and a donation-first approach to whatever can be reused.",
      "I built the site on WordPress with Elementor, covering residential and commercial services, basement and attic cleanouts, and free quote requests.",
    ],
    image: "/works/jaxlejunkremoval.jpg",
    liveUrl: "https://www.jaxlejunkremoval.com/",
  },
  {
    slug: "junk-catchers",
    title: "Junk Catchers website",
    category: "Junk removal website",
    type: "freelance",
    client: "Junk Catchers",
    year: "2025",
    techStack: ["WordPress", "PHP", "JavaScript", "CSS"],
    services: ["WordPress development", "Web development"],
    summary:
      "Website for a junk removal team serving Lake Forest and Chicago's North Shore suburbs.",
    description: [
      "Junk Catchers handles furniture, appliances, estate cleanouts, and commercial junk across Lake Forest, Illinois and the North Shore, donating usable items to local non-profits and recycling to keep waste out of landfill.",
      "I developed the WordPress site with clear service pages and same-day booking prompts that suit how customers actually find a hauler: quickly, on their phone.",
    ],
    image: "/works/junkcatchers.jpg",
    liveUrl: "https://junkcatchers.com/",
  },
  {
    slug: "junk-police",
    title: "Junk Police website",
    category: "Junk removal website",
    type: "freelance",
    client: "Junk Police",
    year: "2025",
    techStack: ["WordPress", "PHP", "JavaScript", "CSS"],
    services: ["WordPress development", "Web development"],
    summary:
      "Website for a family-run junk removal and demolition business in South Jersey.",
    description: [
      "Junk Police is a South Jersey family business offering same-day and next-day junk removal, cleanouts, and demolition, with a policy of donating and recycling everything it can.",
      "I built the WordPress site with service and cleanout pages and fast calls to action, hosted on WP Engine with WP Rocket caching for quick loads.",
    ],
    image: "/works/junk-police.jpg",
    liveUrl: "https://junk-police.com/",
  },
  {
    slug: "assured-junk-removal",
    title: "Assured Junk Removal website",
    category: "Junk removal website",
    type: "freelance",
    client: "Assured Junk Removal",
    year: "2025",
    techStack: ["WordPress", "PHP", "JavaScript", "CSS"],
    services: ["WordPress development", "Web development"],
    summary:
      "Website for a full-service junk removal company covering Las Vegas, Henderson, and North Las Vegas.",
    description: [
      "Assured Junk Removal offers same-day, full-service hauling across the Las Vegas valley, from furniture and appliances to construction debris, estate cleanouts, and light demolition, with an eco-friendly donation and recycling angle.",
      "I developed the WordPress site with service pages for each job type and prominent licensed-and-insured trust signals.",
    ],
    image: "/works/assuredjunkremoval.jpg",
    liveUrl: "https://assuredjunkremoval.com/",
  },
  {
    slug: "dumpster-duo",
    title: "Dumpster Duo website",
    category: "Junk removal website",
    type: "freelance",
    client: "Dumpster Duo",
    year: "2025",
    techStack: ["WordPress", "PHP", "JavaScript", "CSS"],
    services: ["WordPress development", "Web development"],
    summary:
      "Website for a St. Louis company pairing dumpster rentals with full-service junk removal.",
    description: [
      "Dumpster Duo covers both sides of the cleanup job in St. Louis and nearby Illinois communities: rent a dumpster and fill it yourself, or have the team haul everything away, with donations routed through local charities.",
      "I built the WordPress site to present both offers cleanly, with same-day availability and licensed-and-insured messaging throughout.",
    ],
    image: "/works/dumpsterduo.jpg",
    liveUrl: "https://dumpsterduo.com/",
  },
  {
    slug: "altitude-hauling",
    title: "Altitude Hauling website",
    category: "Junk removal website",
    type: "freelance",
    client: "Altitude Hauling",
    year: "2025",
    techStack: ["WordPress", "PHP", "JavaScript", "CSS"],
    services: ["WordPress development", "Web development"],
    summary:
      "Website for a locally owned Denver junk removal company with same-day service.",
    description: [
      "Altitude Hauling handles furniture, appliances, estate cleanouts, construction debris, and hot tub removal across Denver, donating usable items to local charities along the way.",
      "I developed the WordPress site with a service-first structure and booking prompts designed to convert local search traffic into scheduled pickups.",
    ],
    image: "/works/altitudehauling.jpg",
    liveUrl: "https://altitudehauling.com/",
  },
  {
    slug: "junk-hammers",
    title: "Junk Hammers website",
    category: "Junk removal website",
    type: "freelance",
    client: "Junk Hammers",
    year: "2025",
    techStack: ["WordPress", "PHP", "JavaScript", "CSS"],
    services: ["WordPress development", "Web development"],
    summary:
      "Website for a Greater Philadelphia junk removal company with online booking discounts.",
    description: [
      "Junk Hammers serves the Greater Philadelphia and Delaware Valley area with same-day hauling, from furniture and hoarding cleanouts to concrete and deck removal, with an eco-friendly donation and recycling focus.",
      "I built the WordPress site with service pages for every job type and a $20 online booking discount to nudge visitors from browsing to booking.",
    ],
    image: "/works/junkhammers.jpg",
    liveUrl: "https://junkhammers.com/",
  },
  {
    slug: "junk-rascals",
    title: "Junk Rascals website",
    category: "Junk removal website",
    type: "freelance",
    client: "Junk Rascals",
    year: "2025",
    techStack: ["WordPress", "PHP", "JavaScript", "CSS"],
    services: ["WordPress development", "Web development"],
    summary:
      "Website for a Utah junk removal crew serving Utah County and Salt Lake City.",
    description: [
      "Junk Rascals runs same-day junk removal across Utah County and Salt Lake City under the playful tagline \"Sneaking In & Removing Junk\", with donations and recycling keeping loads out of landfill.",
      "I developed the WordPress site to carry that personality while staying conversion-focused: clear services, service areas, and instant quote paths.",
    ],
    image: "/works/junkrascalsusa.jpg",
    liveUrl: "https://junkrascalsusa.com/",
  },
  {
    slug: "junk-boss",
    title: "Junk Boss website",
    category: "Junk removal website",
    type: "freelance",
    client: "Junk Boss",
    year: "2025",
    techStack: ["WordPress", "PHP", "JavaScript", "CSS"],
    services: ["WordPress development", "Web development"],
    summary:
      "Website for a veteran-owned junk removal company on the New Hampshire Seacoast.",
    description: [
      "Junk Boss is a veteran-owned and operated hauler covering the NH Seacoast and towns like Dover, Concord, Manchester, and Salem, offering same-day service, full cleanouts, and light demolition.",
      "I built the WordPress site with the veteran-owned story up front and a straightforward path from any page to a booking.",
    ],
    image: "/works/junkboss.jpg",
    liveUrl: "https://junkboss.net/",
  },
  {
    slug: "power-junk-removal",
    title: "Power Junk Removal website",
    category: "Junk removal website",
    type: "freelance",
    client: "Power Junk Removal",
    year: "2025",
    techStack: ["WordPress", "PHP", "JavaScript", "CSS"],
    services: ["WordPress development", "Web development"],
    summary:
      "Website for a West Palm Beach junk removal company with same-day and next-day service.",
    description: [
      "Power Junk Removal serves West Palm Beach and South Florida with furniture removal, property cleanouts, yard debris, and even boat and RV removal, all with free upfront estimates and eco-friendly disposal.",
      "I developed the WordPress site with per-service pages and a quick estimate form so customers can book without a phone call.",
    ],
    image: "/works/powerjunkremoval.jpg",
    liveUrl: "https://www.powerjunkremoval.us/",
  },
  {
    slug: "junk-doctors",
    title: "Junk Doctors website",
    category: "Junk removal website",
    type: "freelance",
    client: "Junk Doctors",
    year: "2025",
    techStack: ["Astro", "JavaScript", "CSS"],
    services: ["Web development"],
    summary:
      "Fast Astro-built website for a North Carolina junk removal company with 4,000+ five-star reviews.",
    description: [
      "Junk Doctors covers Raleigh, Charlotte, and Greensboro with a bold promise: same-day junk removal or it's free. With over 4,000 five-star Google reviews, the site's job is to get that credibility in front of visitors fast.",
      "The site is built on Astro, which ships almost no JavaScript, so pages load quickly even on mobile connections where most junk removal searches happen.",
    ],
    image: "/works/junkdrs.jpg",
    liveUrl: "https://junkdrs.com/",
  },
  {
    slug: "johnson-junk-removal",
    title: "Johnson Junk Removal website",
    category: "Junk removal website",
    type: "freelance",
    client: "Johnson Junk Removal",
    year: "2025",
    techStack: ["WordPress", "PHP", "JavaScript", "CSS"],
    services: ["WordPress development", "Web development"],
    summary:
      "Website for a Twin Cities junk removal company with same-day availability.",
    description: [
      "Johnson Junk Removal is a locally owned Minnesota business serving St. Paul and the Twin Cities, handling everything from furniture and appliances to decks, boats, and full property cleanouts.",
      "I built the WordPress site with service and area pages, hosted on WP Engine behind Cloudflare with WP Rocket caching to keep it fast.",
    ],
    image: "/works/johnsonjunkremoval.jpg",
    liveUrl: "https://johnsonjunkremoval.com/",
  },
  {
    slug: "vango-junk-removal",
    title: "VanGo Junk Removal website",
    category: "Junk removal website",
    type: "freelance",
    client: "VanGo Junk Removal",
    year: "2025",
    techStack: ["WordPress", "PHP", "JavaScript", "CSS"],
    services: ["WordPress development", "Web development"],
    summary:
      "Website for a Long Island junk removal company with town-by-town service area pages.",
    description: [
      "VanGo Junk Removal covers Long Island with residential and commercial junk removal, apartment and estate cleanouts, and donation pickups, routing reusable items to local non-profits.",
      "I developed the WordPress site with an extensive town-by-town service area structure, giving every Long Island community its own landing page for local search.",
    ],
    image: "/works/vangonewyork.jpg",
    liveUrl: "https://vangonewyork.com/",
  },
  {
    slug: "junk-out-abq",
    title: "Junk Out ABQ website",
    category: "Junk removal website",
    type: "freelance",
    client: "Junk Out ABQ",
    year: "2025",
    techStack: ["WordPress", "PHP", "JavaScript", "CSS"],
    services: ["WordPress development", "Web development"],
    summary:
      "Website for a veteran-owned Albuquerque junk removal company.",
    description: [
      "Junk Out ABQ is a veteran-owned hauler in Albuquerque with \"We Haul It All\" messaging, same-day service, a veteran discount, and a recycling-first approach to disposal.",
      "I built the WordPress site with service pages for furniture, appliances, construction debris, and cleanouts, keeping quotes and phone contact one tap away.",
    ],
    image: "/works/junkoutabq.jpg",
    liveUrl: "https://junkoutabq.com/",
  },
  {
    slug: "junk-knight",
    title: "Junk Knight website",
    category: "Junk removal website",
    type: "freelance",
    client: "Junk Knight",
    year: "2025",
    techStack: ["WordPress", "PHP", "JavaScript", "CSS"],
    services: ["WordPress development", "Web development"],
    summary:
      "Website for a veteran-owned junk removal company in Northern Virginia.",
    description: [
      "Junk Knight serves Prince William County and nearby Fairfax, Manassas, Fredericksburg, and Stafford with same-day junk removal, estate and hoarding cleanouts, and shed demolition, all with a donation and recycling angle.",
      "I developed the WordPress site with per-service and per-county pages so the business ranks where its customers actually search.",
    ],
    image: "/works/junk-knight.jpg",
    liveUrl: "https://junk-knight.com/",
  },
  {
    slug: "maui-dump-run",
    title: "Maui Dump Run website",
    category: "Junk removal website",
    type: "freelance",
    client: "Maui Dump Run",
    year: "2025",
    techStack: ["WordPress", "PHP", "JavaScript", "CSS"],
    services: ["WordPress development", "Web development"],
    summary:
      "Website for Maui's locally owned junk removal service.",
    description: [
      "Maui Dump Run is a locally owned, non-franchise hauler offering same and next-day junk removal across Kahului, Kihei, Lahaina, and greater Maui.",
      "I built the WordPress site, hosted on WP Engine, with service pages from appliance removal to estate cleanouts and a booking flow suited to island-wide coverage.",
    ],
    image: "/works/mauidumprun.jpg",
    liveUrl: "https://mauidumprun.com/",
  },
  {
    slug: "kingdoms-army-moving-hauling",
    title: "The Kingdoms Army booking site",
    category: "Junk removal website",
    type: "freelance",
    client: "The Kingdoms Army Moving & Hauling",
    year: "2025",
    techStack: ["Square Online", "CSS"],
    services: ["Web development"],
    summary:
      "Booking-first web presence for a Seattle–Tacoma moving and hauling company.",
    description: [
      "The Kingdoms Army Moving & Hauling covers the Seattle–Tacoma area with junk removal, dumpster rentals, moving, and cleanouts, promising same-day service tailored to each project.",
      "The site runs on Square Online with booking built in, so customers go straight from finding the business to reserving a time slot.",
    ],
    image: "/works/thekingdomsarmy.jpg",
    liveUrl: "https://thekingdomsarmy.com/",
  },
  {
    slug: "comax-junk-removal",
    title: "Comax Junk Removal website",
    category: "Junk removal website",
    type: "freelance",
    client: "Comax Junk Removal",
    year: "2025",
    techStack: ["WordPress", "PHP", "JavaScript", "CSS"],
    services: ["WordPress development", "Web development"],
    summary:
      "Website for a family-owned Austin junk removal company.",
    description: [
      "Comax Junk Removal is a family-owned, licensed and insured business in Austin, Texas offering same-day service with free estimates and an eco-friendly donation and recycling approach.",
      "I developed the WordPress site with focused pages for appliance, furniture, and hot tub removal plus residential and commercial work.",
    ],
    image: "/works/comaxjunkremoval.jpg",
    liveUrl: "https://comaxjunkremoval.com/",
  },
  {
    slug: "fire-dawgs-junk-removal",
    title: "Fire Dawgs Junk Removal website",
    category: "Junk removal website",
    type: "freelance",
    client: "Fire Dawgs Junk Removal",
    year: "2025",
    techStack: ["WordPress", "PHP", "JavaScript", "CSS"],
    services: ["WordPress development", "Web development"],
    summary:
      "Website for an award-winning, veteran-founded junk removal company operating across three states.",
    description: [
      "Fire Dawgs is a veteran-founded, BBB A+ rated company serving Indianapolis, Fort Wayne, Bloomington, and Lafayette in Indiana plus Columbus, Ohio and Houston, Texas, diverting over 60% of hauled items through donation and recycling.",
      "I worked on the WordPress site that supports this multi-city operation, with thousands of reviews surfaced as social proof and location-specific landing pages.",
    ],
    image: "/works/firedawgsjunkremoval.jpg",
    liveUrl: "https://firedawgsjunkremoval.com/",
  },
  {
    slug: "haul911-junk-removal",
    title: "Haul911 Rapid Junk Removal website",
    category: "Junk removal website",
    type: "freelance",
    client: "Haul911 Rapid Junk Removal",
    year: "2025",
    techStack: ["Duda", "JavaScript", "CSS"],
    services: ["Web development"],
    summary:
      "Website for a junk removal service in Apollo Beach, Florida.",
    description: [
      "Haul911 offers same-day junk removal in Apollo Beach and surrounding Florida communities, from furniture and appliances to estate cleanouts and yard debris, donating and recycling what it can.",
      "The site is built on the Duda platform with a lightweight page structure that keeps quotes and calls front and centre.",
    ],
    image: "/works/haul911junk.jpg",
    liveUrl: "https://haul911junk.com/",
  },
  {
    slug: "kitsap-junk-removal",
    title: "Kitsap Junk Removal website",
    category: "Junk removal website",
    type: "freelance",
    client: "Kitsap Junk Removal",
    year: "2025",
    techStack: ["WordPress", "PHP", "JavaScript", "CSS"],
    services: ["WordPress development", "Web development"],
    summary:
      "Website for a family-owned junk removal company voted best in Central Kitsap.",
    description: [
      "Kitsap Junk Removal serves Bremerton, Silverdale, Port Orchard, Poulsbo, and Bainbridge Island in Washington, donating usable items to local non-profits like Bremerton Foodline and the Kitsap Humane Society.",
      "I built the WordPress site with the \"Voted Best in Central Kitsap\" endorsement front and centre and same or next-day pickup as the core call to action.",
    ],
    image: "/works/kitsapjunk.jpg",
    liveUrl: "https://kitsapjunk.com/",
  },
  {
    slug: "hsdo-junk-removal",
    title: "HSDO Junk Removal website",
    category: "Junk removal website",
    type: "freelance",
    client: "HSDO Junk Removal",
    year: "2025",
    techStack: ["Duda", "JavaScript", "CSS"],
    services: ["Web development"],
    summary:
      "Website for a Miami junk removal and demolition service.",
    description: [
      "HSDO Junk Removal covers Miami and Orlando with fast, affordable hauling, from furniture and appliances to hot tubs and demolition jobs, with same-day service and free quotes.",
      "The site is built on the Duda platform with an eco-friendly donation and recycling message woven through every service page.",
    ],
    image: "/works/hsdoprosjunkremoval.jpg",
    liveUrl: "https://hsdoprosjunkremoval.com/",
  },
  {
    slug: "american-junk-removal",
    title: "American Junk Removal website",
    category: "Junk removal website",
    type: "freelance",
    client: "American Junk Removal",
    year: "2025",
    techStack: ["WordPress", "PHP", "JavaScript", "CSS"],
    services: ["WordPress development", "Web development"],
    summary:
      "Website for a locally owned junk removal team in East Longmeadow, Massachusetts.",
    description: [
      "American Junk Removal offers same-day hauling across western Massachusetts, from appliance and construction debris removal to full estate and house cleanouts, donating and recycling as much as possible.",
      "I developed the WordPress site, hosted on WP Engine, with structured service pages and search-friendly metadata.",
    ],
    image: "/works/american-junk.jpg",
    liveUrl: "https://american-junk.com/",
  },
  {
    slug: "lug-away",
    title: "Lug Away website",
    category: "Junk removal website",
    type: "freelance",
    client: "Lug Away",
    year: "2025",
    techStack: ["WordPress", "PHP", "JavaScript", "CSS"],
    services: ["WordPress development", "Web development"],
    summary:
      "Website for a family-owned Boston junk removal and demolition company.",
    description: [
      "Lug Away serves the Greater Boston Area with junk removal, basement cleanouts, interior demolition, and 24/7 emergency service, running 15-yard dump trucks with a donation and recycling focus.",
      "I built the WordPress site to handle a broad service catalogue while keeping same-day booking the clear next step on every page.",
    ],
    image: "/works/lugaway.jpg",
    liveUrl: "https://lugaway.com/",
  },
  {
    slug: "junk-rescue-dumpsters",
    title: "Junk Rescue dumpster rentals website",
    category: "Dumpster rental website",
    type: "freelance",
    client: "Junk Rescue",
    year: "2025",
    techStack: ["WordPress", "Elementor", "PHP", "CSS"],
    services: ["WordPress development", "Web development"],
    summary:
      "Dumpster rental website for Junk Rescue, serving New Jersey and Pennsylvania.",
    description: [
      "Junk Rescue rents 10 to 40-yard roll-off dumpsters across New Jersey and Pennsylvania, with same-day delivery, unlimited rental days, and eco-friendly disposal.",
      "I built this dedicated dumpster subdomain site on WordPress with Elementor, structured around a simple three-step booking process and per-size dumpster pages.",
    ],
    image: "/works/dumpster-junk-rescue.jpg",
    liveUrl: "https://dumpster.junk-rescue.com/",
  },
  {
    slug: "ca-junk-masters",
    title: "CA Junk Masters website",
    category: "Junk removal website",
    type: "freelance",
    client: "CA Junk Masters",
    year: "2025",
    techStack: ["WordPress", "PHP", "JavaScript", "CSS"],
    services: ["WordPress development", "Web development"],
    summary:
      "Website for a top-rated junk removal company in Riverside and the Inland Empire.",
    description: [
      "CA Junk Masters positions itself as the number one rated junk removal service in Riverside and California's Inland Empire, with same-day service, demolition work, and eco-friendly disposal.",
      "I developed the WordPress site, hosted on WP Engine behind Cloudflare, with service pages and trust signals matched to that top-rated positioning.",
    ],
    image: "/works/cajunkmasters.jpg",
    liveUrl: "https://cajunkmasters.com/",
  },
  {
    slug: "veteran-junk-removal",
    title: "Veteran Junk Removal website",
    category: "Junk removal website",
    type: "freelance",
    client: "Veteran Junk Removal",
    year: "2025",
    techStack: ["WordPress", "PHP", "JavaScript", "CSS"],
    services: ["WordPress development", "Web development"],
    summary:
      "Website for a veteran-branded junk removal company in Metro Detroit.",
    description: [
      "Veteran Junk Removal serves Metro Detroit with full-service hauling under a simple promise: dispose, donate, and recycle. Customers can schedule by call, text, or email.",
      "I built the WordPress site, hosted on WP Engine behind Cloudflare, with the dispose-donate-recycle story leading and every service one click from a booking.",
    ],
    image: "/works/veteranjunkremoval.jpg",
    liveUrl: "https://veteranjunkremoval.com/",
  },
  {
    slug: "capital-city-junk-haulers",
    title: "Capital City Junk Haulers website",
    category: "Junk removal website",
    type: "freelance",
    client: "Capital City Junk Haulers",
    year: "2025",
    techStack: ["WordPress", "PHP", "JavaScript", "CSS"],
    services: ["WordPress development", "Web development"],
    summary:
      "Website for a Tallahassee junk removal and dumpster rental company.",
    description: [
      "Capital City Junk Haulers combines junk removal, dumpster rental, cleanouts, and demolition across greater Tallahassee and towns like Crawfordville, Havana, Monticello, and Quincy.",
      "I developed the WordPress site to present both the hauling and dumpster sides of the business, with same-day service and donation messaging throughout.",
    ],
    image: "/works/capitalcityjunkhaulers.jpg",
    liveUrl: "https://capitalcityjunkhaulers.com/",
  },
  {
    slug: "overland-hauling",
    title: "Overland Hauling website",
    category: "Junk removal website",
    type: "freelance",
    client: "Overland Hauling & Junk Removal",
    year: "2025",
    techStack: ["WordPress", "PHP", "JavaScript", "CSS"],
    services: ["WordPress development", "Web development"],
    summary:
      "Website for a veteran-owned junk removal company in Sonoma County, California.",
    description: [
      "Overland Hauling & Junk Removal is veteran-owned and operated, covering Sonoma County with junk removal, construction debris, estate cleanouts, and hot tub and yard waste removal.",
      "I built the WordPress site with a clean service structure and review-driven social proof to convert local searches.",
    ],
    image: "/works/overlandhauling.jpg",
    liveUrl: "https://overlandhauling.com/",
  },
  {
    slug: "alabama-junk",
    title: "Alabama Junk website",
    category: "Junk removal website",
    type: "freelance",
    client: "Alabama Junk",
    year: "2025",
    techStack: ["WordPress", "PHP", "JavaScript", "CSS"],
    services: ["WordPress development", "Web development"],
    summary:
      "Website for a Birmingham junk removal company with a perfect 5.0 Google rating.",
    description: [
      "Alabama Junk offers full-service junk removal and dumpster rental in Birmingham, with same-day and 24/7 emergency service and a 5.0 Google rating across hundreds of reviews.",
      "I developed the site on WordPress with a custom theme, hosted on WP Engine, structured around services, service areas, and that standout review score.",
    ],
    image: "/works/alabamajunk.jpg",
    liveUrl: "https://alabamajunk.com/",
  },
  {
    slug: "legend-junk-removal",
    title: "Legend Junk Removal website",
    category: "Junk removal website",
    type: "freelance",
    client: "Legend Junk Removal",
    year: "2025",
    techStack: ["WordPress", "PHP", "JavaScript", "CSS"],
    services: ["WordPress development", "Web development"],
    summary:
      "Website for a locally owned Spokane junk removal and demolition company.",
    description: [
      "Legend Junk Removal covers Spokane, Washington with furniture and appliance removal, estate cleanouts, construction debris, and demolition, offering same-day service with a donation and recycling focus.",
      "I built the WordPress site with per-service landing pages and clear licensed-and-insured trust signals.",
    ],
    image: "/works/legendjunkremoval.jpg",
    liveUrl: "https://legendjunkremoval.com/",
  },
  {
    slug: "toss-out-junk-removal",
    title: "Toss Out Junk Removal website",
    category: "Junk removal website",
    type: "freelance",
    client: "Toss Out Junk Removal",
    year: "2025",
    techStack: ["WordPress", "PHP", "JavaScript", "CSS"],
    services: ["WordPress development", "Web development"],
    summary:
      "Website for a family-owned junk removal and dumpster company in Modesto, California.",
    description: [
      "Toss Out Junk Removal is family-owned and operated in the Modesto area, open seven days a week with same-day service, dumpster rentals, and estate cleanouts alongside standard hauling.",
      "I developed the WordPress site, hosted on WP Engine, with free quotes and the seven-day availability made obvious from the first screen.",
    ],
    image: "/works/tossoutjunkremoval.jpg",
    liveUrl: "https://tossoutjunkremoval.com/",
  },
  {
    slug: "970-junk-removal",
    title: "970 Junk Removal website",
    category: "Junk removal website",
    type: "freelance",
    client: "970 Junk Removal",
    year: "2025",
    techStack: ["WordPress", "PHP", "JavaScript", "CSS"],
    services: ["WordPress development", "Web development"],
    summary:
      "Website for a Northern Colorado junk removal company named after its area code.",
    description: [
      "970 Junk Removal serves Windsor, Fort Collins, Loveland, Greeley, and surrounding Northern Colorado towns with same-day junk removal, cleanouts, and light demolition, priced transparently.",
      "I built the WordPress site with town-level service pages so each community the company serves can find it in local search.",
    ],
    image: "/works/970junk.jpg",
    liveUrl: "https://970junk.com/",
  },
  {
    slug: "burger-consulting-group",
    title: "Burger Consulting Group website",
    category: "Consulting firm website",
    type: "freelance",
    client: "Burger Consulting Group",
    year: "2025",
    techStack: ["WordPress", "Elementor", "PHP", "CSS"],
    services: ["WordPress development", "Web development"],
    summary:
      "Website for a Chicago-based IT consultancy specialising in the construction industry.",
    description: [
      "Burger Consulting Group has advised construction companies on technology since 1997, offering software selection, technology assessments, fractional CIO services, and implementation project management across North America.",
      "I worked on the WordPress site, built with Elementor, presenting a deep service catalogue and thought-leadership content to an enterprise audience.",
    ],
    image: "/works/burgerconsulting.jpg",
    liveUrl: "https://burgerconsulting.com/",
  },
  {
    slug: "easy-day-junk-removal",
    title: "Easy Day Junk Removal website",
    category: "Junk removal website",
    type: "freelance",
    client: "Easy Day Junk Removal",
    year: "2025",
    techStack: ["WordPress", "PHP", "JavaScript", "CSS"],
    services: ["WordPress development", "Web development"],
    summary:
      "Website for a veteran-owned junk removal company on Florida's Space Coast.",
    description: [
      "Easy Day Junk Removal is a veteran-owned business serving Melbourne, Palm Bay, Cocoa Beach, Titusville, and the rest of Brevard County with same-day and next-day full-service junk removal.",
      "I developed the site on a custom WordPress theme with online scheduling so customers can book a pickup without picking up the phone.",
    ],
    image: "/works/easydayjunkremoval.jpg",
    liveUrl: "https://easydayjunkremoval.com/",
  },
  {
    slug: "joe-junks-it",
    title: "Joe Junks It website",
    category: "Junk removal website",
    type: "freelance",
    client: "Joe Junks It",
    year: "2025",
    techStack: ["WordPress", "PHP", "JavaScript", "CSS"],
    services: ["WordPress development", "Web development"],
    summary:
      "Website for a family-owned junk removal business in Worcester County, Massachusetts.",
    description: [
      "Joe Junks It is a family-owned hauler serving Worcester County, donating reusable items to people in need and recycling whatever can't be donated.",
      "I built the site on a custom WordPress theme with straightforward service pages for furniture, appliances, yard waste, and construction debris.",
    ],
    image: "/works/joejunksit.jpg",
    liveUrl: "https://joejunksit.com/",
  },
  {
    slug: "captain-g-junk-removal",
    title: "Captain G Junk Removal website",
    category: "Junk removal website",
    type: "freelance",
    client: "Captain G Junk Removal",
    year: "2025",
    techStack: ["WordPress", "PHP", "JavaScript", "CSS"],
    services: ["WordPress development", "Web development"],
    summary:
      "Website for a Cleveland junk removal and demolition company.",
    description: [
      "Captain G Junk Removal serves Cleveland and suburbs like Euclid, Avon Lake, and Garfield Heights with same-day junk removal, hoarding and estate cleanouts, and demolition of decks, hot tubs, and concrete.",
      "I developed the WordPress site with service and suburb pages plus recycling and donation messaging to match how the company operates.",
    ],
    image: "/works/captaingjunk.jpg",
    liveUrl: "https://captaingjunk.com/",
  },
  {
    slug: "haulaway-junk-removal",
    title: "Haulaway Junk Removal website",
    category: "Junk removal website",
    type: "freelance",
    client: "Haulaway Junk Removal",
    year: "2025",
    techStack: ["WordPress", "PHP", "JavaScript", "CSS"],
    services: ["WordPress development", "Web development"],
    summary:
      "Website for a veteran-owned junk removal company in Louisville, Kentucky.",
    description: [
      "Haulaway Junk Removal is veteran-owned and locally operated in Louisville, offering same-day service, veteran discounts, and donation and recycling of hauled items from furniture to full hoarding cleanouts.",
      "I built the WordPress site, hosted on WP Engine with WP Rocket caching, around fast quotes and the company's veteran-owned identity.",
    ],
    image: "/works/haulawayjr.jpg",
    liveUrl: "https://haulawayjr.com/",
  },
  {
    slug: "express-hauling",
    title: "Express Hauling website",
    category: "Junk removal website",
    type: "freelance",
    client: "Express Hauling",
    year: "2025",
    techStack: ["WordPress", "PHP", "JavaScript", "CSS"],
    services: ["WordPress development", "Web development"],
    summary:
      "Website for a five-star junk removal company in Pasco County, Florida.",
    description: [
      "Express Hauling covers Pasco County with residential and commercial junk removal, furniture and appliance pickup, shed demolition, and hot tub removal, backed by five-star reviews.",
      "I developed the WordPress site with same-day service messaging and a donation and recycling approach woven through the service pages.",
    ],
    image: "/works/expresshaulingjunkremoval.jpg",
    liveUrl: "https://expresshaulingjunkremoval.com/",
  },
  {
    slug: "junk-daddy",
    title: "Junk Daddy website",
    category: "Junk removal website",
    type: "freelance",
    client: "Junk Daddy",
    year: "2025",
    techStack: ["WordPress", "PHP", "JavaScript", "CSS"],
    services: ["WordPress development", "Web development"],
    summary:
      "Website for a family-owned junk removal and donation pickup service in Northern Virginia.",
    description: [
      "Junk Daddy serves Alexandria, Arlington, Fairfax, and Burke with junk removal built around donation: usable items get picked up and passed on rather than dumped.",
      "I built the WordPress site, hosted on WP Engine, with the donation-first story leading and free same-day estimates as the primary call to action.",
    ],
    image: "/works/junkdaddyllc.jpg",
    liveUrl: "https://junkdaddyllc.com/",
  },
  {
    slug: "junk-masters",
    title: "Junk Masters website",
    category: "Junk removal website",
    type: "freelance",
    client: "Junk Masters",
    year: "2025",
    techStack: ["WordPress", "PHP", "JavaScript", "CSS"],
    services: ["WordPress development", "Web development"],
    summary:
      "Website for a Twin Cities junk removal company with niche cleanout services.",
    description: [
      "Junk Masters is a locally owned Minneapolis hauler covering the Twin Cities with same-day junk removal, estate and apartment cleanouts, and unusual jobs most companies skip, like bed bug, boat, and car removal.",
      "I developed the WordPress site to organise that wide service range into a clear structure with donation and recycling messaging throughout.",
    ],
    image: "/works/junkmastersmn.jpg",
    liveUrl: "https://junkmastersmn.com/",
  },
  {
    slug: "junk-tank",
    title: "Junk Tank website",
    category: "Junk removal website",
    type: "freelance",
    client: "Junk Tank",
    year: "2025",
    techStack: ["Duda", "JavaScript", "CSS"],
    services: ["Web development"],
    summary:
      "Website for a Central Pennsylvania junk removal and dumpster rental company.",
    description: [
      "Junk Tank serves Harrisburg, Hershey, and Central PA with junk removal and dumpster rentals, offering same-day options, a veteran discount, and donations to local non-profits.",
      "The site runs on the Duda platform with both sides of the business, hauling and dumpsters, given equal weight in the navigation and calls to action.",
    ],
    image: "/works/junktank.jpg",
    liveUrl: "https://junktank.com/",
  },
  {
    slug: "kj-haul-away",
    title: "KJ Haul Away website",
    category: "Junk removal website",
    type: "freelance",
    client: "KJ Haul Away",
    year: "2025",
    techStack: ["WordPress", "Elementor", "PHP", "CSS"],
    services: ["WordPress development", "Web development"],
    summary:
      "Website for a veteran-owned junk removal service in Cedar Rapids, Iowa.",
    description: [
      "KJ Haul Away is veteran-owned and operated in Cedar Rapids and Hiawatha, Iowa, with same-day and next-day pickup and donations to local charities where items can be reused.",
      "I built the WordPress site with Elementor, covering furniture, appliance, yard waste, hot tub, and construction debris removal.",
    ],
    image: "/works/kjhaulaway.jpg",
    liveUrl: "https://kjhaulaway.com/",
  },
  {
    slug: "valley-dumpster-rentals",
    title: "Valley Dumpster Rentals website",
    category: "Dumpster rental website",
    type: "freelance",
    client: "Valley Dumpster Rentals",
    year: "2025",
    techStack: ["WordPress", "PHP", "JavaScript", "CSS"],
    services: ["WordPress development", "Web development"],
    summary:
      "Website for a veteran-owned dumpster rental company in Huntsville, Alabama.",
    description: [
      "Valley Dumpster Rentals is veteran-owned with over 500 five-star Google reviews, renting 15 and 20 cubic yard dumpsters across Huntsville with transparent flat pricing and same-day service.",
      "I developed the WordPress site around simple size selection and flat pricing so customers can choose a dumpster without a phone call.",
    ],
    image: "/works/valleydumpsters.jpg",
    liveUrl: "https://valleydumpsters.net/",
  },
  {
    slug: "venture-junk-removal",
    title: "Venture Junk Removal website",
    category: "Junk removal website",
    type: "freelance",
    client: "Venture Junk Removal & Hauling",
    year: "2025",
    techStack: ["WordPress", "PHP", "JavaScript", "CSS"],
    services: ["WordPress development", "Web development"],
    summary:
      "Website for a junk removal and light demolition company in Montgomery County, Pennsylvania.",
    description: [
      "Venture Junk Removal & Hauling offers same-day and next-day service across Montgomery County, PA, from property and estate cleanouts to light and interior demolition.",
      "I built the WordPress site with residential and commercial paths and a donation and recycling angle to reduce landfill waste.",
    ],
    image: "/works/venturejunkremoval.jpg",
    liveUrl: "https://venturejunkremoval.com/",
  },
  {
    slug: "oahu-dump-run-services",
    title: "Oahu Dump Run Services website",
    category: "Junk removal website",
    type: "freelance",
    client: "Oahu Dump Run Services",
    year: "2025",
    techStack: ["WordPress", "PHP", "JavaScript", "CSS"],
    services: ["WordPress development", "Web development"],
    summary:
      "Website for an island-wide junk removal service on Oahu, Hawaii.",
    description: [
      "Oahu Dump Run Services offers same-day junk removal island-wide, with dumpster rental, cleanouts, and light demolition alongside, and cites over 800 five-star reviews.",
      "I developed the WordPress site with service pages tuned for island-wide coverage and the review count doing the persuading.",
    ],
    image: "/works/oahudumprunservices.jpg",
    liveUrl: "https://oahudumprunservices.com/",
  },
  {
    slug: "tjs-cleanouts",
    title: "TJ's Cleanouts website",
    category: "Junk removal website",
    type: "freelance",
    client: "TJ's Cleanouts",
    year: "2025",
    techStack: ["WordPress", "PHP", "JavaScript", "CSS"],
    services: ["WordPress development", "Web development"],
    summary:
      "Website for a family-owned cleanout and demolition company in Hartford County, Connecticut.",
    description: [
      "TJ's Cleanouts handles junk removal, residential and commercial cleanouts, and demolition across Hartford County, family-owned and licensed with same-day service.",
      "I built the WordPress site with a service structure covering everything from single-item pickups to full property cleanouts.",
    ],
    image: "/works/tjscleanoutservices.jpg",
    liveUrl: "https://tjscleanoutservices.com/",
  },
  {
    slug: "valley-junk-removal",
    title: "Valley Junk Removal website",
    category: "Junk removal website",
    type: "freelance",
    client: "Valley Junk Removal",
    year: "2025",
    techStack: ["WordPress", "PHP", "JavaScript", "CSS"],
    services: ["WordPress development", "Web development"],
    summary:
      "Website for a Huntsville junk removal company with 540+ five-star reviews.",
    description: [
      "Valley Junk Removal serves Huntsville, Madison, and Decatur, Alabama with same-day pickup, volume-based transparent pricing, and discounts for veterans and first responders.",
      "I developed the WordPress site with clear pricing explanations and review-led social proof, plus pages for light demolition and property management work.",
    ],
    image: "/works/valleyjunkremoval.jpg",
    liveUrl: "https://valleyjunkremoval.net/",
  },
  {
    slug: "johnsons-junk-removal",
    title: "Johnson's Junk Removal website",
    category: "Junk removal website",
    type: "freelance",
    client: "Johnson's Junk Removal",
    year: "2025",
    techStack: ["WordPress", "PHP", "JavaScript", "CSS"],
    services: ["WordPress development", "Web development"],
    summary:
      "Website for a Washington junk removal company that recycles about 90% of every load.",
    description: [
      "Johnson's Junk Removal, owned by Jack Johnson, serves Snohomish and King County with same-day pickup, recycles around 90% of what it hauls, and holds a 5.0 Google rating across roughly 1,200 reviews.",
      "I built the WordPress site to put those numbers front and centre, with service and county pages supporting local search.",
    ],
    image: "/works/johnsonsjunk.jpg",
    liveUrl: "https://johnsonsjunk.com/",
  },
  {
    slug: "genie-junk-removal",
    title: "Genie Junk Removal website",
    category: "Junk removal website",
    type: "freelance",
    client: "Genie Junk Removal",
    year: "2025",
    techStack: ["WordPress", "PHP", "JavaScript", "CSS"],
    services: ["WordPress development", "Web development"],
    summary:
      "Website for a junk removal company serving Frisco and the DFW metro area.",
    description: [
      "Genie Junk Removal covers Frisco and the wider Dallas-Fort Worth metro with same-day service, donating gently used furniture and appliances to local charities and recycling responsibly.",
      "I developed the WordPress site with a $20-off promotion, free estimates, and service pages from residential pickups to hoarding cleanup.",
    ],
    image: "/works/geniejunkremoval.jpg",
    liveUrl: "https://geniejunkremoval.com/",
  },
  {
    slug: "flow-lending",
    title: "Flow Lending website",
    category: "Finance broker website",
    type: "freelance",
    client: "Flow Lending",
    year: "2025",
    techStack: ["WordPress", "Bricks Builder", "PHP", "CSS"],
    services: ["WordPress development", "Web development"],
    summary:
      "Website for an Australian business finance broker offering next-day funding.",
    description: [
      "Flow Lending is a founder-led Australian finance broker with access to more than 30 lenders, arranging unsecured business loans, equipment and vehicle finance, and lines of credit, with funding often landing the next day. The positioning is personal: meet your broker, not a call centre.",
      "I built the site on WordPress with the Bricks builder, pairing product pages for each finance type with fast application calls to action.",
    ],
    image: "/works/postclick.jpg",
    liveUrl: "https://postclick.dev/",
  },
  {
    slug: "leo-electrical",
    title: "Leo Electrical website",
    category: "Electrician website",
    type: "freelance",
    client: "Leo Electrical",
    year: "2025",
    techStack: ["WordPress", "Bricks Builder", "PHP", "CSS"],
    services: ["WordPress development", "Web development"],
    summary:
      "Website for a licensed Perth electrical contractor with a 5-year workmanship warranty.",
    description: [
      "Leo Electrical serves Perth north of the river with residential and commercial electrical work, switchboard upgrades, EV charger installation, and lighting design, backed by a 5-year workmanship warranty and five-star reviews.",
      "I built the WordPress site with the Bricks builder, structured around service pages and same-day response messaging for emergency work.",
    ],
    image: "/works/leoelectrical.jpg",
    liveUrl: "https://leoelectrical.com.au/",
  },
  {
    slug: "ernesto-buono-fine-jewellery",
    title: "Ernesto Buono Fine Jewellery website",
    category: "Online store",
    type: "freelance",
    client: "Ernesto Buono Fine Jewellery",
    year: "2025",
    techStack: ["WordPress", "Elementor", "PHP", "CSS"],
    services: ["E-commerce development", "WordPress development"],
    summary:
      "Online store for a Sydney atelier crafting engagement rings and fine jewellery.",
    description: [
      "Ernesto Buono is a Sydney jewellery atelier led by its namesake master jeweller, selling engagement rings, wedding rings, and custom pieces in both natural and lab-grown diamonds.",
      "I worked on the WordPress store, built with Elementor and tuned with WP Rocket caching, where a video-led homepage and clean product browsing carry the brand's craftsmanship online.",
    ],
    image: "/works/ernestobuono.jpg",
    liveUrl: "https://www.ernestobuono.com.au/",
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
