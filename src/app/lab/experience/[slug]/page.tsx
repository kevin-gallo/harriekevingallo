import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  DateField,
  ListField,
  PageHeader,
  RelatedField,
  RteField,
  SideCard,
  StatusCard,
  TextField,
} from "@/components/lab/publish";
import { experience, getRole } from "@/data/experience";

type Params = Promise<{ slug: string }>;

export function generateStaticParams() {
  return experience.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const { slug } = await params;
  const role = getRole(slug);

  if (!role) {
    return { title: "Entry not found" };
  }

  return {
    title: `${role.role} · ${role.company}`,
    description: role.description,
    alternates: {
      canonical: `/lab/experience/${role.slug}`,
    },
  };
}

export default async function ExperienceEntryPage({
  params,
}: {
  params: Params;
}) {
  const { slug } = await params;
  const role = getRole(slug);

  if (!role) {
    notFound();
  }

  const related = experience
    .filter((item) => item.slug !== role.slug)
    .slice(0, 3)
    .map((item) => ({
      title: `${item.role} · ${item.company}`,
      href: `/lab/experience/${item.slug}`,
      status: item.current ? ("ongoing" as const) : ("completed" as const),
    }));

  const status = role.current ? "ongoing" : "completed";

  return (
    <div className="mx-auto max-w-5xl space-y-5">
      <PageHeader
        title={`${role.role} · ${role.company}`}
        status={status}
        backHref="/lab/experience"
        backLabel="Experience"
      />

      <div className="grid items-start gap-5 lg:grid-cols-[1fr_320px]">
        <div className="cp-card space-y-5 p-5">
          <h2 className="text-sm font-semibold text-cp-ink">Main Content</h2>
          <TextField label="Role" value={role.role} required />
          <TextField label="Company" value={role.company} required />
          <TextField label="Context" value={role.note} />
          <RteField label="Description" paragraphs={[role.description]} />
        </div>

        <div className="space-y-5">
          <StatusCard status={status} />

          <SideCard>
            <DateField label="Period" value={role.period} />
            <TextField
              label="Kind"
              value={role.kind === "education" ? "Education" : "Role"}
            />
            <ListField label="Highlights" items={role.highlights} />
          </SideCard>

          <SideCard>
            <RelatedField label="Other entries" items={related} />
          </SideCard>
        </div>
      </div>
    </div>
  );
}
