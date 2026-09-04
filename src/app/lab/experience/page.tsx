import type { Metadata } from "next";
import Link from "next/link";
import { StatusDot } from "@/components/lab/publish";
import { experience } from "@/data/experience";

export const metadata: Metadata = {
  title: "Experience",
  description:
    "Harrie Kevin Gallo's work history: production roles across Japan, France, and New Zealand, plus education.",
};

export default function ExperiencePage() {
  return (
    <div className="mx-auto max-w-5xl space-y-5">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <h1 className="text-xl font-semibold text-cp-ink">Experience</h1>
        <span className="cp-pill">{experience.length} entries</span>
      </div>

      <div className="cp-card overflow-hidden">
        <div className="overflow-x-auto">
          <table className="cp-table">
            <thead>
              <tr>
                <th>Role</th>
                <th>Company</th>
                <th>Period</th>
                <th>Context</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {experience.map((item) => (
                <tr key={item.slug}>
                  <td className="whitespace-nowrap">
                    <Link
                      href={`/lab/experience/${item.slug}`}
                      className="font-medium text-cp-link hover:underline"
                    >
                      {item.role}
                    </Link>
                  </td>
                  <td className="whitespace-nowrap">{item.company}</td>
                  <td className="whitespace-nowrap">{item.period}</td>
                  <td>{item.note}</td>
                  <td>
                    <span className="flex items-center gap-1.5 whitespace-nowrap">
                      <StatusDot status={item.current ? "ongoing" : "completed"} />
                      {item.current ? "Ongoing" : "Completed"}
                    </span>
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
