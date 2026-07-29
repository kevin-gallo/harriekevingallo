'use client'

import { useState } from "react";
import { Search } from "lucide-react";
import { works, workTypeFilters, type WorkType } from "@/data/works";
import WorkCard from "@/components/WorkCard";

const INITIAL_VISIBLE = 16;

type FilterValue = WorkType | "all";

const WorkListing = () => {
  const [activeFilter, setActiveFilter] = useState<FilterValue>("all");
  const [visibleCount, setVisibleCount] = useState(INITIAL_VISIBLE);
  const [searchQuery, setSearchQuery] = useState("");

  const query = searchQuery.trim().toLowerCase();

  const searchedWorks = query
    ? works.filter(
        (work) =>
          work.title.toLowerCase().includes(query) ||
          (work.liveUrl ?? "").toLowerCase().includes(query)
      )
    : works;

  const filteredWorks =
    activeFilter === "all"
      ? searchedWorks
      : searchedWorks.filter((work) => work.type === activeFilter);

  const visibleWorks = filteredWorks.slice(0, visibleCount);
  const hasMore = filteredWorks.length > visibleCount;

  const countFor = (value: FilterValue) =>
    value === "all"
      ? searchedWorks.length
      : searchedWorks.filter((work) => work.type === value).length;

  const handleFilter = (value: FilterValue) => {
    setActiveFilter(value);
    setVisibleCount(INITIAL_VISIBLE);
  };

  const handleSearch = (value: string) => {
    setSearchQuery(value);
    setVisibleCount(INITIAL_VISIBLE);
  };

  return (
    <div className="space-y-12 lg:space-y-16">
      <h2 className="sr-only">All projects</h2>
      <div className="flex flex-wrap items-center justify-between gap-x-8 gap-y-6">
        <div
          role="group"
          aria-label="Filter projects by type"
          className="flex flex-wrap gap-x-8 gap-y-3"
        >
          {workTypeFilters.map((filter) => {
            const isActive = activeFilter === filter.value;
            return (
              <button
                key={filter.value}
                type="button"
                aria-pressed={isActive}
                onClick={() => handleFilter(filter.value)}
                className={`body-2 transition-colors duration-300 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-black ${
                  isActive
                    ? "text-black underline decoration-primary decoration-2 underline-offset-8"
                    : "text-grey-400 hover:text-black"
                }`}
              >
                {filter.label}
                <sup className="ml-0.5 text-xs">{countFor(filter.value)}</sup>
              </button>
            );
          })}
        </div>
        <div className="border-grey-300 focus-within:border-black flex w-full items-center gap-3 border-b pb-2 transition-colors duration-300 sm:w-72">
          <Search
            className="text-grey-500 size-5 shrink-0"
            strokeWidth={1.5}
            aria-hidden="true"
          />
          <label htmlFor="work-search" className="sr-only">
            Search projects by name or website
          </label>
          <input
            id="work-search"
            type="search"
            value={searchQuery}
            onChange={(event) => handleSearch(event.target.value)}
            placeholder="Search projects"
            autoComplete="off"
            className="placeholder:text-grey-400 w-full bg-transparent py-1 focus:outline-none"
          />
        </div>
      </div>

      {visibleWorks.length > 0 ? (
        <div className="grid gap-x-5 gap-y-12 md:grid-cols-2 xl:grid-cols-3">
          {visibleWorks.map((work) => (
            <WorkCard key={work.slug} work={work} />
          ))}
        </div>
      ) : (
        <p className="body-3 text-grey-500">
          {query
            ? "No projects match your search. Try a different name or website."
            : "No projects in this category yet. Try another filter."}
        </p>
      )}

      {hasMore && (
        <div className="flex justify-center">
          <button
            type="button"
            className="btn btn-black"
            onClick={() => setVisibleCount((count) => count + INITIAL_VISIBLE)}
          >
            Load more projects
          </button>
        </div>
      )}
    </div>
  );
};

export default WorkListing;
