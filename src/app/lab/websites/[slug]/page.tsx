import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ExternalLink } from "lucide-react";
import {
  DateField,
  ListField,
  PageHeader,
  RelatedField,
  RteField,
  SideCard,
  StatusCard,
  TextareaField,
  TextField,
} from "@/components/lab/publish";
import { getRelatedWorks, getWork, works } from "@/data/works";

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
    return { title: "Entry not found" };
  }

  return {
    title: work.title,
    description: work.summary,
    alternates: {
      canonical: `/lab/websites/${work.slug}`,
    },
  };
}

export default async function WorkEntryPage({ params }: { params: Params }) {
  const { slug } = await params;
  const work = getWork(slug);

  if (!work) {
    notFound();
  }

  const related = getRelatedWorks(work.slug).map((item) => ({
    title: item.title,
    href: `/lab/websites/${item.slug}`,
  }));

  return (
    <div className="mx-auto max-w-5xl space-y-5">
      <PageHeader
        title={work.title}
        status="completed"
        backHref="/lab/websites"
        backLabel="Websites"
        actions={
          work.liveUrl && (
            <a
              href={work.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="cp-btn-primary"
            >
              <ExternalLink className="size-4" strokeWidth={1.75} />
              Visit live site
            </a>
          )
        }
      />

      <div className="grid items-start gap-5 lg:grid-cols-[1fr_320px]">
        {/* Main content */}
        <div className="cp-card space-y-5 p-5">
          <h2 className="text-sm font-semibold text-cp-ink">Main Content</h2>
          <TextField label="Title" value={work.title} required />
          <TextareaField label="Summary" value={work.summary} />
          <RteField label="Content" paragraphs={work.description} />

          <div className="space-y-1.5">
            <span className="cp-label">Featured image</span>
            <div className="overflow-hidden rounded-lg border border-cp-line">
              <div
                className={`relative aspect-video ${
                  work.isLogo ? "bg-white" : "bg-cp-hover"
                }`}
              >
                <Image
                  src={work.image}
                  alt={work.title}
                  fill
                  sizes="(min-width: 1024px) 640px, 100vw"
                  className={work.isLogo ? "object-contain p-[12%]" : "object-cover"}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-5">
          <StatusCard status="completed" />

          <SideCard>
            <DateField label="Year" value={work.year} />
            <TextField label="Client" value={work.client} />
            {work.agency && <TextField label="Agency" value={work.agency} />}
            <TextField
              label="Type"
              value={work.type.charAt(0).toUpperCase() + work.type.slice(1)}
            />
          </SideCard>

          <SideCard>
            <ListField label="Services" items={work.services} />
            <ListField label="Tech stack" items={work.techStack} />
          </SideCard>

          {related.length > 0 && (
            <SideCard>
              <RelatedField label="Related websites" items={related} />
            </SideCard>
          )}
        </div>
      </div>
    </div>
  );
}
