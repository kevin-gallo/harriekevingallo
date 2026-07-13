import {
  siReact,
  siNextdotjs,
  siTypescript,
  siJavascript,
  siTailwindcss,
  siNodedotjs,
  siPhp,
  siLaravel,
  siLivewire,
  siWordpress,
  siCraftcms,
  siStatamic,
  siStoryblok,
  siShopify,
  siMysql,
  siPostgresql,
  siGraphql,
  siRedis,
  siDocker,
  siGit,
  siGithub,
  siFigma,
  siVercel,
  siNetlify,
  siAstro,
  siJquery,
  siBootstrap,
} from "simple-icons";

const technologies = [
  { icon: siReact, label: "React" },
  { icon: siNextdotjs, label: "Next.js" },
  { icon: siTypescript, label: "TypeScript" },
  { icon: siJavascript, label: "JavaScript" },
  { icon: siTailwindcss, label: "Tailwind CSS" },
  { icon: siNodedotjs, label: "Node.js" },
  { icon: siPhp, label: "PHP" },
  { icon: siLaravel, label: "Laravel" },
  { icon: siLivewire, label: "Livewire" },
  { icon: siWordpress, label: "WordPress" },
  { icon: siCraftcms, label: "Craft CMS" },
  { icon: siStatamic, label: "Statamic" },
  { icon: siStoryblok, label: "Storyblok" },
  { icon: siShopify, label: "Shopify" },
  { icon: siMysql, label: "MySQL" },
  { icon: siPostgresql, label: "PostgreSQL" },
  { icon: siGraphql, label: "GraphQL" },
  { icon: siRedis, label: "Redis" },
  { icon: siDocker, label: "Docker" },
  { icon: siGit, label: "Git" },
  { icon: siGithub, label: "GitHub" },
  { icon: siFigma, label: "Figma" },
  { icon: siVercel, label: "Vercel" },
  { icon: siNetlify, label: "Netlify" },
  { icon: siAstro, label: "Astro" },
  { icon: siJquery, label: "jQuery" },
  { icon: siBootstrap, label: "Bootstrap" },
];

const MarqueeItems = ({ hidden = false }: { hidden?: boolean }) => (
  <>
    {technologies.map((tech) => (
      <div
        key={`${tech.label}${hidden ? "-clone" : ""}`}
        aria-hidden={hidden || undefined}
        className="flex shrink-0 items-center"
      >
        <div className="border-grey-300 mx-2.5 flex items-center gap-3 border-y px-5 py-4">
          <svg
            role="img"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="size-7 shrink-0 lg:size-8"
          >
            <title>{tech.icon.title}</title>
            <path d={tech.icon.path} />
          </svg>
          <span className="body-3 whitespace-nowrap">{tech.label}</span>
        </div>
      </div>
    ))}
  </>
);

const TechMarquee = () => {
  return (
    <section className="py-space space-y-10 bg-transparent">
      <div className="px-space">
        <div className="grid-layout mx-container">
          <div className="space-y-3 lg:col-span-6">
            <h2 className="display-2">The tech behind the work</h2>
          </div>
        </div>
      </div>

      <div className="marquee-wrapper">
        <div className="marquee-track">
          <MarqueeItems />
          <MarqueeItems hidden />
        </div>
      </div>
    </section>
  );
};

export default TechMarquee;
