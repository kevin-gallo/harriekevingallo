import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, FlaskConical } from "lucide-react";
import avatar from "@/assets/avatar.jpg";
import ThemeToggle from "@/components/ThemeToggle";
import { profile } from "@/data/profile";
import { services } from "@/data/services";
import { tools } from "@/data/tools";
import { experience } from "@/data/experience";
import { works } from "@/data/works";

export const metadata: Metadata = {
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "/",
    siteName: "Harrie Kevin Gallo",
    title: "Harrie Kevin Gallo | Web Design & Development Partner",
    description:
      "Websites and online stores that turn visitors into leads, customers, and sales. One dedicated partner from first idea to launch and beyond.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Harrie Kevin Gallo | Web Design & Development Partner",
    description:
      "Websites and online stores that turn visitors into leads, customers, and sales. One dedicated partner from first idea to launch and beyond.",
  },
};

/* Tool categories folded into reference-style stack rows */
const stackGroups: { label: string; categories: string[] }[] = [
  { label: "Languages", categories: ["Language"] },
  { label: "Frameworks", categories: ["Framework", "Runtime"] },
  { label: "Libraries", categories: ["Library"] },
  { label: "Styling", categories: ["Styling"] },
  { label: "CMS", categories: ["CMS"] },
  { label: "E-commerce", categories: ["E-commerce platform"] },
  { label: "Data & APIs", categories: ["Database", "API"] },
  { label: "AI & automation", categories: ["AI"] },
  {
    label: "DevOps & hosting",
    categories: ["DevOps", "Hosting", "Infrastructure"],
  },
  {
    label: "Workflow",
    categories: ["Version control", "Design", "Testing"],
  },
];

/* Hand-picked spread across corporate, agency, freelance, and personal work */
const featuredSlugs = [
  "nativecamp-online-english-platform",
  "nature-bijoux-e-commerce",
  "franck-herval-e-commerce",
  "lindisfarne-college-website",
  "christs-college-website",
  "christchurchnz-website",
  "mckenzie-and-willis-store",
  "russells-curtains-website",
  "chitchat-platform-migration",
  "trackfunds-investment-tracker",
];

const featuredWorks = featuredSlugs
  .map((slug) => works.find((work) => work.slug === slug))
  .filter((work) => work !== undefined);

const roles = experience.filter((item) => item.kind === "role");
const education = experience.filter((item) => item.kind === "education");

const Section = ({
  id,
  title,
  lead,
  children,
}: {
  id: string;
  title: string;
  lead?: string;
  children: React.ReactNode;
}) => (
  <section id={id} className="mt-24 scroll-mt-10 sm:mt-32">
    <h2 className="font-medium">{title}</h2>
    {lead && <p className="mt-3 text-mute">{lead}</p>}
    <div className="mt-7">{children}</div>
  </section>
);

const StackRow = ({
  label,
  children,
}: {
  label: React.ReactNode;
  children: React.ReactNode;
}) => (
  <div className="grid gap-x-5 gap-y-1 sm:grid-cols-[150px_1fr]">
    <dt className="text-sm leading-relaxed">{label}</dt>
    <dd className="text-sm leading-relaxed text-faint">{children}</dd>
  </div>
);

export default function Home() {
  return (
    <main className="mx-auto max-w-[692px] px-6 pt-20 pb-28 sm:pt-24">
      {/* Profile */}
      <header className="flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <Image
            src={avatar}
            alt="Harrie Kevin Gallo"
            width={48}
            height={48}
            priority
            className="size-12 rounded-full border border-line object-cover"
            style={{ objectPosition: "50% 26%" }}
          />
          <div className="flex flex-col gap-0.5 leading-tight">
            <span className="font-medium">{profile.name}</span>
            <span className="text-sm text-mute">{profile.title}</span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <Link
            href="/lab"
            target="_blank"
            rel="noopener noreferrer"
            className="p-btn"
            title="Browse everything I've built, CMS-style"
          >
            <FlaskConical className="size-4 text-accent" strokeWidth={1.75} />
            Gals Lab
          </Link>
          <ThemeToggle className="border border-line text-mute hover:border-accent hover:text-accent" />
        </div>
      </header>

      {/* Intro */}
      <div className="mt-10 space-y-5 text-mute">
        <p>
          I&apos;m a <strong className="font-medium text-ink">web designer and developer</strong>{" "}
          based in Cebu, Philippines, working with clients across Europe, Asia,
          and New Zealand. When you partner with me you get{" "}
          <strong className="font-medium text-ink">one dedicated point of contact</strong>{" "}
          who takes your project from first idea to launch day, then sticks
          around to help you grow.
        </p>
        <p>
          My career has been spent where websites meet real customers: shipping
          features and{" "}
          <strong className="font-medium text-ink">critical fixes</strong> for
          one of Asia&apos;s largest online learning platforms, keeping{" "}
          <strong className="font-medium text-ink">online stores</strong>{" "}
          selling for French jewellery brands, and delivering{" "}
          <strong className="font-medium text-ink">agency-standard work</strong>{" "}
          for New Zealand businesses at{" "}
          <a
            href="https://platocreative.co.nz/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-link"
          >
            Plato Creative
          </a>
          .
        </p>
        <p>
          I&apos;m equally at home in{" "}
          <strong className="font-medium text-ink">
            legacy and modern codebases
          </strong>
          , from PHP, jQuery, and WordPress through to React, Next.js, and
          Astro. Plenty of businesses run on a mix of both, and I enjoy meeting
          a codebase where it is: maintaining it, improving it, or migrating it
          when the time comes. I also work{" "}
          <strong className="font-medium text-ink">AI-first</strong>: agentic
          coding and automation tools are part of my daily stack, so projects
          move faster without cutting corners.
        </p>
      </div>

      {/* Services */}
      <Section
        id="services"
        title="How I can help"
        lead="Design, build, and care for websites and online stores that earn their keep. Every service is scoped around a business outcome."
      >
        <dl className="space-y-4">
          {services.map((service) => (
            <StackRow
              key={service.slug}
              label={
                <Link href={`/lab/services/${service.slug}`} className="hover:text-accent transition-colors">
                  {service.name}
                </Link>
              }
            >
              {service.tagline} {service.summary}
            </StackRow>
          ))}
        </dl>
      </Section>

      {/* Stack */}
      <Section
        id="stack"
        title="Platforms & tools"
        lead="These are the tools I reach for first. I'll use whatever the project needs."
      >
        <dl className="space-y-4">
          {stackGroups.map((group) => {
            const names = tools
              .filter((tool) => group.categories.includes(tool.category))
              .map((tool) => tool.name);
            if (names.length === 0) return null;
            return (
              <StackRow key={group.label} label={group.label}>
                {names.join(" · ")}
              </StackRow>
            );
          })}
        </dl>
      </Section>

      {/* Experience */}
      <Section
        id="experience"
        title="Experience"
        lead="Production work across time zones: Japan, France, and New Zealand."
      >
        <div className="space-y-8">
          {roles.map((item) => (
            <div
              key={item.slug}
              className="grid gap-x-5 gap-y-2 sm:grid-cols-[150px_1fr]"
            >
              <div className="text-sm leading-relaxed">
                <p>{item.company}</p>
                <p className="mt-0.5 text-xs text-faint">{item.period}</p>
                {item.current && (
                  <p className="mt-1 text-xs text-accent">Current role</p>
                )}
              </div>
              <div className="space-y-2">
                <p className="text-sm leading-relaxed">
                  {item.role}
                  <span className="text-faint"> · {item.note}</span>
                </p>
                <p className="text-sm leading-relaxed text-faint">
                  {item.description}
                </p>
                <p className="text-xs leading-relaxed text-faint">
                  {item.highlights.join(" · ")}
                </p>
              </div>
            </div>
          ))}

          {education.map((item) => (
            <div
              key={item.slug}
              className="grid gap-x-5 gap-y-2 border-t border-line pt-8 sm:grid-cols-[150px_1fr]"
            >
              <p className="text-sm leading-relaxed">Education</p>
              <p className="text-sm leading-relaxed text-faint">
                {item.role},{" "}
                <span className="text-mute">{item.company}</span>, {item.note}.
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* Selected work */}
      <Section
        id="work"
        title="Selected work"
        lead="A few projects showing breadth across platforms, e-commerce, and agency builds. The full library lives in the Lab."
      >
        <ul>
          {featuredWorks.map((work, index) => (
            <li
              key={work.slug}
              className={`flex flex-col gap-x-5 gap-y-0.5 py-4 sm:flex-row sm:items-baseline sm:justify-between ${
                index === 0 ? "pt-0" : "border-t border-line"
              }`}
            >
              <Link
                href={`/lab/websites/${work.slug}`}
                className="group inline-flex items-baseline gap-1.5 text-sm"
              >
                {work.title}
                <ArrowUpRight className="size-3.5 self-center text-faint transition-colors group-hover:text-accent" />
              </Link>
              <span className="text-sm text-faint">
                {work.techStack.slice(0, 3).join(" · ")}
              </span>
            </li>
          ))}
        </ul>
        <Link
          href="/lab/websites"
          className="mt-6 inline-flex items-center gap-1.5 text-sm text-mute transition-colors hover:text-accent"
        >
          Browse all {works.length} projects in the Lab
          <ArrowUpRight className="size-3.5" />
        </Link>
      </Section>

      {/* Contact */}
      <footer id="contact" className="mt-20 border-t border-line pt-12">
        <p className="text-mute">
          {profile.availability} I work with clients across time zones and
          reply within a day.
        </p>
        <p className="mt-5 text-mute">
          Email{" "}
          <a href={`mailto:${profile.email}`} className="p-link">
            {profile.email}
          </a>
          , call{" "}
          <a href={profile.phoneHref} className="p-link">
            {profile.phone}
          </a>
          , or{" "}
          <a href={profile.resume} target="_blank" rel="noopener noreferrer" className="p-link">
            download my CV
          </a>
          .
        </p>
        <p className="mt-5 text-sm text-faint">
          {profile.socials.map((social, index) => (
            <span key={social.label}>
              {index > 0 && " · "}
              <a
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-link"
              >
                {social.label}
              </a>
            </span>
          ))}
        </p>
        <p className="mt-12 text-xs text-faint">
          © {new Date().getFullYear()} {profile.name} · {profile.location}
        </p>
      </footer>
    </main>
  );
}
