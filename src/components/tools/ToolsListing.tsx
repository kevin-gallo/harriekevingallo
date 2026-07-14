'use client'

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Search } from "lucide-react";
import { tools } from "@/data/tools";

const ToolsListing = () => {
  const [query, setQuery] = useState("");

  const filtered = tools.filter((tool) =>
    tool.name.toLowerCase().includes(query.trim().toLowerCase()),
  );

  return (
    <div className="space-y-10 lg:space-y-14">
      <h2 className="sr-only">All tools</h2>
      <div className="space-y-4">
        <label htmlFor="tools-search" className="sr-only">
          Search tools
        </label>
        <div className="border-grey-300 focus-within:border-black flex items-center gap-3 border-b pb-4 transition-colors duration-300">
          <Search
            className="text-grey-500 size-5 shrink-0"
            strokeWidth={1.5}
            aria-hidden="true"
          />
          <input
            id="tools-search"
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search tools"
            autoComplete="off"
            className="placeholder:text-grey-400 w-full bg-transparent py-1 focus:outline-none"
          />
        </div>
        <p className="body-3 text-grey-500" role="status">
          {filtered.length} {filtered.length === 1 ? "tool" : "tools"}
        </p>
      </div>

      {filtered.length > 0 ? (
        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {filtered.map((tool) => (
            <Link
              key={tool.slug}
              href={`/tools/${tool.slug}`}
              className="group block border border-grey-300 p-6 transition-colors duration-300 hover:border-black"
            >
              {tool.icon && (
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-8"
                >
                  <path d={tool.icon.path} />
                </svg>
              )}
              <div className="space-y-1 pt-5">
                <p className="h5 text-grey-500">{tool.category}</p>
                <h3 className="h3 flex items-start gap-2">
                  {tool.name}
                  <ArrowUpRight className="mt-0.5 size-4 shrink-0 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </h3>
                <p className="body-3 text-grey-500">{tool.summary}</p>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <p className="body-3 text-grey-500">
          No tools match your search. Try a different name.
        </p>
      )}
    </div>
  );
};

export default ToolsListing;
