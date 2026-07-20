import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, Plus } from "lucide-react";
import Navigation from "@/components/Navigation";
import PageHero from "@/components/PageHero";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { services, getService, getOtherServices } from "@/data/services";

type ServicePageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);

  if (!service) {
    return { title: "Service not found | Harrie Kevin Gallo" };
  }

  return {
    title: `${service.name} | Harrie Kevin Gallo`,
    description: service.summary,
    alternates: {
      canonical: `/services/${service.slug}`,
    },
  };
}

/* card number matches the service's position on the listing page */
const serviceNumber = (slug: string) =>
  String(services.findIndex((service) => service.slug === slug) + 1).padStart(
    2,
    "0"
  );

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = getService(slug);

  if (!service) {
    notFound();
  }

  const otherServices = getOtherServices(slug);

  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <PageHero
          label="Service"
          title={service.name}
          intro={service.tagline}
        />

        <section className="px-space py-space bg-white">
          <div className="mx-container space-y-12 lg:space-y-16">
            <Link
              href="/services"
              className="body-3 group inline-flex items-center gap-2 focus-visible:ring-1 focus-visible:ring-black focus-visible:outline-none"
            >
              <ArrowLeft className="size-4 transition-transform duration-300 group-hover:-translate-x-1" />
              <span className="underline-link">All services</span>
            </Link>

            <div className="grid-layout gap-y-12">
              <div className="space-y-3 lg:col-span-7">
                <h2 className="h5">Overview</h2>
                <div className="space-y-5">
                  {service.description.map((paragraph, index) => (
                    <p
                      key={paragraph}
                      className={index === 0 ? "body-1" : "body-3 text-grey-500"}
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>

              <div className="space-y-3 lg:col-span-4 lg:col-start-9">
                <h2 className="h5">What&apos;s included</h2>
                <ul>
                  {service.includes.map((item) => (
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
        </section>

        <section className="px-space py-space">
          <div className="mx-container space-y-16 lg:space-y-24">
            <div className="grid-layout">
              <div className="space-y-3 lg:col-span-7">
                <div>
                  <h2 className="h5">Other services</h2>
                  <p className="display-2">
                    More ways I can help your business
                  </p>
                </div>
              </div>
            </div>

            <ul className="grid gap-5 md:grid-cols-3">
              {otherServices.map((other) => (
                <li key={other.slug}>
                  <Link
                    href={`/services/${other.slug}`}
                    className="border-grey-300 group block h-full border p-6 transition-colors duration-300 hover:border-black"
                  >
                    <p className="h5 text-grey-500">
                      {serviceNumber(other.slug)}
                    </p>
                    <h3 className="h3 mt-8 flex items-start gap-2">
                      {other.name}
                      <ArrowUpRight className="mt-1 size-4 shrink-0 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </h3>
                    <p className="body-3 text-grey-500 mt-2">{other.tagline}</p>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <Contact />
      </main>
      <Footer />
    </div>
  );
}
