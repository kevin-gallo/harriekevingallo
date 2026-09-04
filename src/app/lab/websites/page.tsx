import type { Metadata } from "next";
import WorksTable, { type WorkRow } from "@/components/lab/WorksTable";
import { works } from "@/data/works";

export const metadata: Metadata = {
  title: "Websites",
  description:
    "Every website and platform Harrie Kevin Gallo has shipped: corporate platforms, agency builds, freelance sites, and personal products.",
};

const rows: WorkRow[] = works.map((work) => ({
  slug: work.slug,
  title: work.title,
  client: work.client,
  category: work.category,
  type: work.type,
  year: work.year,
  stack: work.techStack,
}));

export default function WebsitesPage() {
  return (
    <div className="mx-auto max-w-5xl space-y-5">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <h1 className="text-xl font-semibold text-cp-ink">Websites</h1>
        <span className="cp-pill">{works.length} entries</span>
      </div>
      <WorksTable rows={rows} />
    </div>
  );
}
