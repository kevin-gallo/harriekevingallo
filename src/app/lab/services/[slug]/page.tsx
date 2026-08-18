import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  ListField,
  PageHeader,
  RelatedField,
  RteField,
  SideCard,
  StatusCard,
  TextareaField,
  TextField,
} from "@/components/lab/publish";
import { getOtherServices, getService, services } from "@/data/services";

type Params = Promise<{ slug: string }>;

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);

  if (!service) {
    return { title: "Entry not found" };
  }

  return {
    title: service.name,
    description: service.summary,
    alternates: {
      canonical: `/lab/services/${service.slug}`,
    },
  };
}

export default async function ServiceEntryPage({
  params,
}: {
  params: Params;
}) {
  const { slug } = await params;
  const service = getService(slug);

  if (!service) {
    notFound();
  }

  const related = getOtherServices(service.slug).map((item) => ({
    title: item.name,
    href: `/lab/services/${item.slug}`,
    status: "open" as const,
  }));

  return (
    <div className="mx-auto max-w-5xl space-y-5">
      <PageHeader
        title={service.name}
        status="open"
        backHref="/lab/services"
        backLabel="Services"
      />

      <div className="grid items-start gap-5 lg:grid-cols-[1fr_320px]">
        <div className="cp-card space-y-5 p-5">
          <h2 className="text-sm font-semibold text-cp-ink">Main Content</h2>
          <TextField label="Name" value={service.name} required />
          <TextField label="Tagline" value={service.tagline} />
          <TextareaField label="Summary" value={service.summary} />
          <RteField label="Description" paragraphs={service.description} />
        </div>

        <div className="space-y-5">
          <StatusCard status="open" />

          <SideCard>
            <ListField label="What's included" items={service.includes} />
          </SideCard>

          <SideCard>
            <RelatedField label="Other services" items={related} />
          </SideCard>
        </div>
      </div>
    </div>
  );
}
