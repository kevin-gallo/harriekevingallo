'use client'

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Search } from "lucide-react";

export type Asset = {
  src: string;
  name: string;
  workTitle: string;
  href: string;
};

const PAGE_SIZE = 24;

const AssetsGrid = ({ assets }: { assets: Asset[] }) => {
  const [query, setQuery] = useState("");
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return assets;
    return assets.filter(
      (asset) =>
        asset.name.toLowerCase().includes(q) ||
        asset.workTitle.toLowerCase().includes(q)
    );
  }, [assets, query]);

  const visible = filtered.slice(0, visibleCount);

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <p className="text-[13px] text-cp-mute">
          {filtered.length} of {assets.length} assets
        </p>
        <div className="flex w-full items-center gap-2 sm:w-64">
          <label htmlFor="assets-search" className="sr-only">
            Search assets
          </label>
          <div className="cp-input flex items-center gap-2 !py-0">
            <Search className="size-4 shrink-0 text-cp-faint" strokeWidth={1.75} />
            <input
              id="assets-search"
              type="search"
              value={query}
              onChange={(event) => {
                setQuery(event.target.value);
                setVisibleCount(PAGE_SIZE);
              }}
              placeholder="Search assets…"
              autoComplete="off"
              className="w-full bg-transparent py-2 text-sm focus:outline-none"
            />
          </div>
        </div>
      </div>

      {visible.length === 0 ? (
        <div className="cp-card p-8 text-center text-sm text-cp-faint">
          No assets match “{query}”.
        </div>
      ) : (
        <ul className="grid grid-cols-2 gap-4 sm:grid-cols-3 xl:grid-cols-4">
          {visible.map((asset) => (
            <li key={asset.src}>
              <Link href={asset.href} className="cp-card group block overflow-hidden">
                <div className="relative aspect-[4/3] bg-cp-hover">
                  <Image
                    src={asset.src}
                    alt={asset.workTitle}
                    fill
                    sizes="(min-width: 1280px) 20vw, (min-width: 640px) 30vw, 45vw"
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </div>
                <div className="border-t border-cp-line p-2.5">
                  <p className="truncate text-xs font-medium text-cp-ink">
                    {asset.name}
                  </p>
                  <p className="mt-0.5 truncate text-[11px] text-cp-faint">
                    {asset.workTitle}
                  </p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      )}

      {filtered.length > visibleCount && (
        <div className="flex justify-center pt-2">
          <button
            type="button"
            onClick={() => setVisibleCount((count) => count + PAGE_SIZE)}
            className="cp-btn"
          >
            Load more assets
          </button>
        </div>
      )}
    </div>
  );
};

export default AssetsGrid;
