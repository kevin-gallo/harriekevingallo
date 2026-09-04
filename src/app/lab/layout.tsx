import type { Metadata } from "next";
import LabShell from "@/components/lab/LabShell";
import type { SearchEntry } from "@/components/lab/SearchPalette";
import { works } from "@/data/works";
import { services } from "@/data/services";
import { tools } from "@/data/tools";
import { experience } from "@/data/experience";

export const metadata: Metadata = {
  title: {
    template: "%s ‹ Gals Lab | Harrie Kevin Gallo",
    default: "Gals Lab | Harrie Kevin Gallo",
  },
  description:
    "A Statamic-style control panel showcasing every project, service, and tool behind Harrie Kevin Gallo's work.",
};

/* Slim search index built on the server so the client bundle stays light. */
const searchIndex: SearchEntry[] = [
  ...works.map((work) => ({
    group: "Websites",
    title: work.title,
    sub: work.client,
    href: `/lab/websites/${work.slug}`,
  })),
  ...services.map((service) => ({
    group: "Services",
    title: service.name,
    sub: "Service",
    href: `/lab/services/${service.slug}`,
  })),
  ...tools.map((tool) => ({
    group: "Tools",
    title: tool.name,
    sub: tool.category,
    href: `/lab/tools/${tool.slug}`,
  })),
  ...experience.map((item) => ({
    group: "Experience",
    title: `${item.role} · ${item.company}`,
    sub: item.note,
    href: `/lab/experience/${item.slug}`,
  })),
];

export default function LabLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <LabShell searchIndex={searchIndex}>{children}</LabShell>;
}
