import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ExternalLink } from "lucide-react";
import {
  ListField,
  PageHeader,
  RelatedField,
  RteField,
  SideCard,
  TextareaField,
  TextField,
} from "@/components/lab/publish";
import { getTool, tools } from "@/data/tools";

type Params = Promise<{ slug: string }>;

export function generateStaticParams() {
  return tools.map((tool) => ({ slug: tool.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const { slug } = await params;
  const tool = getTool(slug);

  if (!tool) {
    return { title: "Entry not found" };
  }

  return {
    title: tool.name,
    description: tool.summary,
    alternates: {
      canonical: `/lab/tools/${tool.slug}`,
    },
  };
}

export default async function ToolEntryPage({ params }: { params: Params }) {
  const { slug } = await params;
  const tool = getTool(slug);

  if (!tool) {
    notFound();
  }

  const related = tools
    .filter((item) => item.category === tool.category && item.slug !== tool.slug)
    .slice(0, 3)
    .map((item) => ({ title: item.name, href: `/lab/tools/${item.slug}` }));

  return (
    <div className="mx-auto max-w-5xl space-y-5">
      <PageHeader
        title={tool.name}
        backHref="/lab/tools"
        backLabel="Tools"
        actions={
          tool.website && (
            <a
              href={tool.website}
              target="_blank"
              rel="noopener noreferrer"
              className="cp-btn"
            >
              <ExternalLink className="size-4" strokeWidth={1.75} />
              Visit website
            </a>
          )
        }
      />

      <div className="grid items-start gap-5 lg:grid-cols-[1fr_320px]">
        <div className="cp-card space-y-5 p-5">
          <h2 className="flex items-center gap-2.5 text-sm font-semibold text-cp-ink">
            {tool.icon && (
              <svg
                role="img"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-4 shrink-0"
              >
                <title>{tool.icon.title}</title>
                <path d={tool.icon.path} />
              </svg>
            )}
            Main Content
          </h2>
          <TextField label="Name" value={tool.name} required />
          <TextField label="Category" value={tool.category} />
          <TextareaField label="Summary" value={tool.summary} />
          <RteField label="Description" paragraphs={tool.description} />
        </div>

        <div className="space-y-5">
          <SideCard>
            <ListField label="What I use it for" items={tool.usedFor} />
          </SideCard>

          {related.length > 0 && (
            <SideCard>
              <RelatedField label={`More ${tool.category.toLowerCase()} entries`} items={related} />
            </SideCard>
          )}
        </div>
      </div>
    </div>
  );
}
