import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import Navigation from "@/components/Navigation";
import PageHero from "@/components/PageHero";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import RelatedWorks from "@/components/work/RelatedWorks";
import { getWork, works } from "@/data/works";

type Params = Promise<{ slug: string }>;

export function generateStaticParams() {
  return works.map((work) => ({ slug: work.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const { slug } = await params;
  const work = getWork(slug);

  if (!work) {
    return { title: "Project not found | Harrie Kevin Gallo" };
  }

  return {
    title: `${work.title} | Harrie Kevin Gallo`,
    description: work.summary,
    alternates: {
      canonical: `/work/${work.slug}`,
    },
  };
}

export default async function WorkDetailPage({ params }: { params: Params }) {
  const { slug } = await params;
  const work = getWork(slug);

  if (!work) {
    notFound();
  }

  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <PageHero label={work.category} title={work.title}>
          {work.liveUrl && (
            <a
              href={work.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-white group focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black"
            >
              Visit live site
              <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>
          )}
        </PageHero>

        {/* Project meta + overview */}
        <section className="px-space py-space bg-white">
          <div className="mx-container space-y-12 lg:space-y-16">
            <Link
              href="/work"
              className="body-3 group inline-flex items-center gap-2 focus-visible:ring-1 focus-visible:ring-black focus-visible:outline-none"
            >
              <ArrowLeft className="size-4 transition-transform duration-300 group-hover:-translate-x-1" />
              <span className="underline-link">All projects</span>
            </Link>

            <div className="grid-layout gap-y-12">
              <dl className="space-y-8 lg:col-span-4">
                <div className="space-y-1">
                  <dt className="h5 text-grey-500">Client</dt>
                  <dd>{work.client}</dd>
                </div>
                {work.agency && (
                  <div className="space-y-1">
                    <dt className="h5 text-grey-500">Agency</dt>
                    <dd>{work.agency}</dd>
                  </div>
                )}
                <div className="space-y-1">
                  <dt className="h5 text-grey-500">Project type</dt>
                  <dd className="capitalize">{work.type}</dd>
                </div>
                <div className="space-y-1">
                  <dt className="h5 text-grey-500">Services</dt>
                  <dd>
                    <ul className="space-y-1">
                      {work.services.map((service) => (
                        <li key={service}>{service}</li>
                      ))}
                    </ul>
                  </dd>
                </div>
                <div className="space-y-1">
                  <dt className="h5 text-grey-500">Year</dt>
                  <dd>{work.year}</dd>
                </div>
                <div className="space-y-2">
                  <dt className="h5 text-grey-500">Tech stack</dt>
                  <dd className="flex flex-wrap gap-2">
                    {work.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="border-grey-300 body-3 rounded-full border px-3 py-1"
                      >
                        {tech}
                      </span>
                    ))}
                  </dd>
                </div>
              </dl>

              <div className="space-y-3 lg:col-span-7 lg:col-start-6">
                <h2 className="h5">Overview</h2>
                <div className="space-y-5">
                  {work.description.map((paragraph, index) => (
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
            </div>
          </div>
        </section>

        {/* Project imagery */}
        <section className="px-space py-space">
          <div className="mx-container space-y-5">
            <div
              className={`relative aspect-video overflow-hidden ${
                work.isLogo ? "bg-grey-200" : ""
              }`}
            >
              <Image
                src={work.image}
                alt={work.title}
                fill
                sizes="(min-width: 1920px) 1792px, 100vw"
                className={
                  work.isLogo ? "object-contain p-[15%]" : "object-cover"
                }
              />
            </div>

            {work.gallery && work.gallery.length > 0 && (
              <div className="grid gap-5 md:grid-cols-2">
                {work.gallery.map((item) => (
                  <div
                    key={item.alt}
                    className="bg-grey-200 relative aspect-[4/3] overflow-hidden"
                  >
                    <Image
                      src={item.src}
                      alt={item.alt}
                      fill
                      sizes="(min-width: 768px) 50vw, 100vw"
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>

        <RelatedWorks currentSlug={work.slug} />

        <Contact />
      </main>
      <Footer />
    </div>
  );
}
