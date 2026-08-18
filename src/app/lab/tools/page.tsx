import type { Metadata } from "next";
import Link from "next/link";
import { tools } from "@/data/tools";

export const metadata: Metadata = {
  title: "Tools",
  description:
    "The platforms, languages, and infrastructure behind every project Harrie Kevin Gallo ships.",
};

export default function ToolsPage() {
  return (
    <div className="mx-auto max-w-5xl space-y-5">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <h1 className="text-xl font-semibold text-cp-ink">Tools</h1>
        <span className="cp-pill">{tools.length} entries</span>
      </div>

      <div className="cp-card overflow-hidden">
        <div className="overflow-x-auto">
          <table className="cp-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Category</th>
                <th>Website</th>
              </tr>
            </thead>
            <tbody>
              {tools.map((tool) => (
                <tr key={tool.slug}>
                  <td className="whitespace-nowrap">
                    <Link
                      href={`/lab/tools/${tool.slug}`}
                      className="flex items-center gap-2.5 font-medium text-cp-link hover:underline"
                    >
                      {tool.icon ? (
                        <svg
                          role="img"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="size-4 shrink-0 text-cp-mute"
                        >
                          <title>{tool.icon.title}</title>
                          <path d={tool.icon.path} />
                        </svg>
                      ) : (
                        <span className="size-4 shrink-0" />
                      )}
                      {tool.name}
                    </Link>
                  </td>
                  <td>{tool.category}</td>
                  <td>
                    {tool.website && (
                      <a
                        href={tool.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-cp-link hover:underline"
                      >
                        {tool.website.replace(/^https?:\/\/(www\.)?/, "")}
                      </a>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
