import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { works } from "@/data/works";
import { services } from "@/data/services";
import { tools } from "@/data/tools";
import { experience } from "@/data/experience";

export const metadata: Metadata = {
  title: "Collections",
};

const collections = [
  {
    title: "Websites",
    href: "/lab/websites",
    count: works.length,
    description:
      "Every project I've shipped: corporate platforms, agency builds, freelance sites, and personal products.",
  },
  {
    title: "Services",
    href: "/lab/services",
    count: services.length,
    description:
      "What I offer clients, from page speed optimization to full e-commerce builds.",
  },
  {
    title: "Tools",
    href: "/lab/tools",
    count: tools.length,
    description:
      "The platforms, languages, and infrastructure behind every project.",
  },
  {
    title: "Experience",
    href: "/lab/experience",
    count: experience.length,
    description:
      "Where the experience comes from: roles across Japan, France, and New Zealand, plus education.",
  },
];

export default function CollectionsPage() {
  return (
    <div className="mx-auto max-w-5xl space-y-6">
      <h1 className="text-xl font-semibold text-cp-ink">Collections</h1>
      <div className="grid gap-4 sm:grid-cols-2">
        {collections.map((collection) => (
          <Link
            key={collection.href}
            href={collection.href}
            className="cp-card group p-5"
          >
            <div className="flex items-center justify-between">
              <h2 className="text-base font-semibold text-cp-ink">
                {collection.title}
              </h2>
              <span className="cp-pill">{collection.count} entries</span>
            </div>
            <p className="mt-2 text-[13px] leading-relaxed text-cp-mute">
              {collection.description}
            </p>
            <p className="mt-3 flex items-center gap-1 text-xs text-cp-faint transition-colors group-hover:text-cp-link">
              View entries
              <ArrowRight className="size-3" strokeWidth={1.75} />
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
