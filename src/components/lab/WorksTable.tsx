'use client'

import { useMemo, useState } from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight, Search } from "lucide-react";
import { StatusDot } from "@/components/lab/publish";

export type WorkRow = {
  slug: string;
  title: string;
  client: string;
  category: string;
  type: string;
  year: string;
  stack: string[];
};

const PAGE_SIZE = 25;

const filters = [
  { value: "all", label: "All" },
  { value: "corporate", label: "Corporate" },
  { value: "freelance", label: "Freelance" },
  { value: "personal", label: "Personal" },
];

const WorksTable = ({ rows }: { rows: WorkRow[] }) => {
  const [filter, setFilter] = useState("all");
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);

  const searched = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return rows;
    return rows.filter(
      (row) =>
        row.title.toLowerCase().includes(q) ||
        row.client.toLowerCase().includes(q) ||
        row.category.toLowerCase().includes(q)
    );
  }, [rows, query]);

  const filtered =
    filter === "all" ? searched : searched.filter((row) => row.type === filter);

  const pageCount = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const currentPage = Math.min(page, pageCount);
  const start = (currentPage - 1) * PAGE_SIZE;
  const visible = filtered.slice(start, start + PAGE_SIZE);

  const countFor = (value: string) =>
    value === "all"
      ? searched.length
      : searched.filter((row) => row.type === value).length;

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div role="group" aria-label="Filter by type" className="flex flex-wrap gap-1.5">
          {filters.map((item) => (
            <button
              key={item.value}
              type="button"
              aria-pressed={filter === item.value}
              onClick={() => {
                setFilter(item.value);
                setPage(1);
              }}
              className={`rounded-lg px-3 py-1.5 text-[13px] font-medium transition-colors ${
                filter === item.value
                  ? "bg-cp-active text-cp-ink"
                  : "text-cp-mute hover:bg-cp-hover hover:text-cp-ink"
              }`}
            >
              {item.label}
              <span className="ml-1.5 text-xs text-cp-faint">
                {countFor(item.value)}
              </span>
            </button>
          ))}
        </div>

        <div className="flex w-full items-center gap-2 sm:w-64">
          <label htmlFor="works-search" className="sr-only">
            Search websites
          </label>
          <div className="cp-input flex items-center gap-2 !py-0">
            <Search className="size-4 shrink-0 text-cp-faint" strokeWidth={1.75} />
            <input
              id="works-search"
              type="search"
              value={query}
              onChange={(event) => {
                setQuery(event.target.value);
                setPage(1);
              }}
              placeholder="Search…"
              autoComplete="off"
              className="w-full bg-transparent py-2 text-sm focus:outline-none"
            />
          </div>
        </div>
      </div>

      <div className="cp-card overflow-hidden">
        <div className="overflow-x-auto">
          <table className="cp-table">
            <thead>
              <tr>
                <th>Title</th>
                <th>Client</th>
                <th>Category</th>
                <th>Type</th>
                <th>Year</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {visible.length === 0 && (
                <tr>
                  <td colSpan={6} className="!py-8 text-center text-cp-faint">
                    No entries match “{query}”.
                  </td>
                </tr>
              )}
              {visible.map((row) => (
                <tr key={row.slug}>
                  <td className="max-w-64">
                    <Link
                      href={`/lab/websites/${row.slug}`}
                      className="font-medium text-cp-link hover:underline"
                    >
                      {row.title}
                    </Link>
                  </td>
                  <td className="whitespace-nowrap">{row.client}</td>
                  <td>{row.category}</td>
                  <td className="capitalize">{row.type}</td>
                  <td>{row.year}</td>
                  <td>
                    <span className="flex items-center gap-1.5 whitespace-nowrap">
                      <StatusDot />
                      Completed
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="flex items-center justify-between border-t border-cp-line px-4 py-2.5 text-xs text-cp-mute">
          <span>
            Showing {filtered.length === 0 ? 0 : start + 1}–
            {Math.min(start + PAGE_SIZE, filtered.length)} of {filtered.length}
          </span>
          <div className="flex items-center gap-1">
            <button
              type="button"
              aria-label="Previous page"
              disabled={currentPage <= 1}
              onClick={() => setPage(currentPage - 1)}
              className="rounded-md p-1.5 hover:bg-cp-hover disabled:pointer-events-none disabled:opacity-40"
            >
              <ChevronLeft className="size-4" strokeWidth={1.75} />
            </button>
            <span>
              {currentPage} / {pageCount}
            </span>
            <button
              type="button"
              aria-label="Next page"
              disabled={currentPage >= pageCount}
              onClick={() => setPage(currentPage + 1)}
              className="rounded-md p-1.5 hover:bg-cp-hover disabled:pointer-events-none disabled:opacity-40"
            >
              <ChevronRight className="size-4" strokeWidth={1.75} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorksTable;
