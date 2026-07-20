import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import type { Work } from "@/data/works";

const WorkCard = ({ work }: { work: Work }) => {
  return (
    <Link href={`/work/${work.slug}`} className="group block">
      <div className="bg-grey-200 relative aspect-[4/3] overflow-hidden">
        <Image
          src={work.image}
          alt={work.title}
          fill
          sizes="(min-width: 1280px) 30vw, (min-width: 768px) 45vw, 90vw"
          className={`transition-transform duration-700 ease-out group-hover:scale-105 ${
            work.isLogo ? "object-contain p-[15%]" : "object-cover"
          }`}
        />
      </div>
      <div className="space-y-1 pt-4">
        <p className="h5 text-grey-500">{work.category}</p>
        <h3 className="display-3 flex items-start gap-2">
          {work.title}
          <ArrowUpRight className="mt-2 size-5 shrink-0 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
        </h3>
      </div>
    </Link>
  );
};

export default WorkCard;
