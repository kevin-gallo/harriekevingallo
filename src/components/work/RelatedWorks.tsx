import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { getRelatedWorks } from "@/data/works";
import WorkCard from "@/components/WorkCard";

const RelatedWorks = ({ currentSlug }: { currentSlug: string }) => {
  const related = getRelatedWorks(currentSlug);

  if (related.length === 0) return null;

  return (
    <section className="px-space py-space bg-white">
      <div className="mx-container space-y-16 lg:space-y-24">
        <div className="grid-layout items-end">
          <div className="space-y-3 lg:col-span-7">
            <div>
              <h2 className="h5">Related work</h2>
              <p className="display-2">
                More projects I&apos;ve helped build and grow
              </p>
            </div>
          </div>
          <div className="flex items-center lg:col-span-5 lg:justify-end">
            <Link href="/work" className="btn btn-black">
              See all projects
              <ArrowUpRight className="size-3.5" />
            </Link>
          </div>
        </div>

        <div className="grid gap-x-5 gap-y-12 md:grid-cols-2 xl:grid-cols-3">
          {related.map((work) => (
            <WorkCard key={work.slug} work={work} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RelatedWorks;
