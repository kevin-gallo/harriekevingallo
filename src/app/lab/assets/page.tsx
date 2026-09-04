import type { Metadata } from "next";
import AssetsGrid, { type Asset } from "@/components/lab/AssetsGrid";
import { works } from "@/data/works";

export const metadata: Metadata = {
  title: "Assets",
  description:
    "Screenshots and imagery from every project in Harrie Kevin Gallo's portfolio.",
};

/* Every work's featured image, presented as an asset container. */
const assets: Asset[] = works.map((work) => {
  const src = typeof work.image === "string" ? work.image : work.image.src;
  const file = src.split("/").pop() ?? src;
  return {
    src,
    /* static imports resolve to hashed bundle paths; strip the content hash */
    name: file.replace(/\.[0-9a-f]{8}\.(\w+)$/i, ".$1"),
    workTitle: work.title,
    href: `/lab/websites/${work.slug}`,
  };
});

export default function AssetsPage() {
  return (
    <div className="mx-auto max-w-5xl space-y-5">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <h1 className="text-xl font-semibold text-cp-ink">Assets</h1>
        <span className="cp-pill">Container: websites</span>
      </div>
      <AssetsGrid assets={assets} />
    </div>
  );
}
