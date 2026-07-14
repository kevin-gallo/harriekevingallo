import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, Plus } from "lucide-react";
import Navigation from "@/components/Navigation";
import PageHero from "@/components/PageHero";
import WorkCard from "@/components/WorkCard";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { tools, getTool } from "@/data/tools";
import { works } from "@/data/works";

type ToolPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return tools.map((tool) => ({ slug: tool.slug }));
}

export async function generateMetadata({
  params,
}: ToolPageProps): Promise<Metadata> {
  const { slug } = await params;
  const tool = getTool(slug);

  if (!tool) {
    return { title: "Tool not found | Harrie Kevin Gallo" };
  }

  return {
    title: `${tool.name} | Harrie Kevin Gallo`,
    description: tool.summary,
    alternates: {
      canonical: `/tools/${tool.slug}`,
    },
  };
}

export default async function ToolPage({ params }: ToolPageProps) {
  const { slug } = await params;
  const tool = getTool(slug);

  if (!tool) notFound();

  const related = works.filter((work) => work.techStack.includes(tool.name));
  const websiteLabel = tool.website
    ?.replace(/^https?:\/\//, "")
    .replace(/\/$/, "");

  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <PageHero label={tool.category} title={tool.name} intro={tool.summary}>
          {tool.website && (
            <a
              href={tool.website}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-white group focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black"
            >
              Visit website
              <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>
          )}
        </PageHero>

        <section className="px-space py-space bg-white">
          <div className="mx-container space-y-12 lg:space-y-16">
            <Link
              href="/tools"
              className="body-3 group inline-flex items-center gap-2 focus-visible:ring-1 focus-visible:ring-black focus-visible:outline-none"
            >
              <ArrowLeft className="size-4 transition-transform duration-300 group-hover:-translate-x-1" />
              <span className="underline-link">All tools</span>
            </Link>

            <div className="grid-layout gap-y-10">
              <div className="lg:col-span-4">
                <dl className="space-y-6">
                  <div className="space-y-1">
                    <dt className="h5 text-grey-500">Category</dt>
                    <dd>{tool.category}</dd>
                  </div>
                  {tool.website && (
                    <div className="space-y-1">
                      <dt className="h5 text-grey-500">Website</dt>
                      <dd>
                        <a
                          href={tool.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="underline-link break-words"
                        >
                          {websiteLabel}
                        </a>
                      </dd>
                    </div>
                  )}
                </dl>
              </div>

              <div className="space-y-10 lg:col-span-7 lg:col-start-6">
                <div className="space-y-3">
                  <h2 className="h5">Overview</h2>
                  <div className="space-y-5">
                    {tool.description.map((paragraph, index) => (
                      <p
                        key={paragraph}
                        className={
                          index === 0 ? "body-1" : "body-3 text-grey-500"
                        }
                      >
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>

                <div className="space-y-3">
                  <h2 className="h5">What I use it for</h2>
                  <ul className="grid gap-x-10 md:grid-cols-2">
                    {tool.usedFor.map((item) => (
                      <li key={item}>
                        <span className="flex items-center gap-2 py-2">
                          <Plus
                            className="text-primary size-4 shrink-0"
                            strokeWidth={1.5}
                          />
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {related.length > 0 && (
          <section className="px-space py-space">
            <div className="mx-container space-y-16 lg:space-y-24">
              <div className="grid-layout">
                <div className="space-y-3 lg:col-span-7">
                  <div>
                    <h2 className="h5">Related work</h2>
                    <p className="display-2">Projects built with {tool.name}</p>
                  </div>
                </div>
              </div>
              <div className="grid gap-x-5 gap-y-10 md:grid-cols-2 xl:grid-cols-3">
                {related.map((work) => (
                  <WorkCard key={work.slug} work={work} />
                ))}
              </div>
            </div>
          </section>
        )}

        <Contact />
      </main>
      <Footer />
    </div>
  );
}
