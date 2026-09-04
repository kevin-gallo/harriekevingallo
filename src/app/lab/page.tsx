import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  ExternalLink,
  FileDown,
  Image as ImageIcon,
  Mail,
} from "lucide-react";
import { StatusDot } from "@/components/lab/publish";
import { works } from "@/data/works";
import { services } from "@/data/services";
import { tools } from "@/data/tools";
import { experience } from "@/data/experience";
import { profile } from "@/data/profile";

export const metadata: Metadata = {
  title: "Dashboard",
};

const stats = [
  { label: "Websites", count: works.length, href: "/lab/websites" },
  { label: "Services", count: services.length, href: "/lab/services" },
  { label: "Tools", count: tools.length, href: "/lab/tools" },
  { label: "Experience", count: experience.length, href: "/lab/experience" },
];

const quickLinks = [
  { label: "View the live site", href: "/", icon: ExternalLink },
  { label: `Email ${profile.name.split(" ")[0]}`, href: `mailto:${profile.email}`, icon: Mail },
  { label: "Download the CV", href: profile.resume, icon: FileDown },
  { label: "Browse the asset library", href: "/lab/assets", icon: ImageIcon },
];

const recentWorks = [...works]
  .sort((a, b) => Number(b.year) - Number(a.year))
  .slice(0, 6);

export default function LabDashboard() {
  return (
    <div className="mx-auto max-w-5xl space-y-6">
      <div>
        <h1 className="text-xl font-semibold text-cp-ink">Dashboard</h1>
        <p className="mt-1 text-sm text-cp-mute">
          Welcome to Gals Lab — a control-panel tour of everything behind my
          portfolio. Browse around; every entry is real shipped work.
        </p>
      </div>

      {/* Collection stats */}
      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        {stats.map((stat) => (
          <Link key={stat.href} href={stat.href} className="cp-card group p-4">
            <p className="text-sm font-medium text-cp-mute">{stat.label}</p>
            <p className="mt-1 text-2xl font-semibold text-cp-ink">
              {stat.count}
            </p>
            <p className="mt-2 flex items-center gap-1 text-xs text-cp-faint transition-colors group-hover:text-cp-link">
              View entries
              <ArrowRight className="size-3" strokeWidth={1.75} />
            </p>
          </Link>
        ))}
      </div>

      <div className="grid gap-6 lg:grid-cols-[1fr_300px]">
        {/* Recent works */}
        <div className="cp-card overflow-hidden">
          <div className="flex items-center justify-between border-b border-cp-line px-4 py-3">
            <h2 className="text-sm font-semibold text-cp-ink">
              Recent websites
            </h2>
            <Link
              href="/lab/websites"
              className="text-xs text-cp-link hover:underline"
            >
              View all
            </Link>
          </div>
          <div className="overflow-x-auto">
            <table className="cp-table">
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Client</th>
                  <th>Year</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {recentWorks.map((work) => (
                  <tr key={work.slug}>
                    <td>
                      <Link
                        href={`/lab/websites/${work.slug}`}
                        className="font-medium text-cp-link hover:underline"
                      >
                        {work.title}
                      </Link>
                    </td>
                    <td>{work.client}</td>
                    <td>{work.year}</td>
                    <td>
                      <span className="flex items-center gap-1.5">
                        <StatusDot />
                        Completed
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Quick actions */}
        <div className="space-y-6">
          <div className="cp-card p-4">
            <h2 className="text-sm font-semibold text-cp-ink">Quick actions</h2>
            <ul className="mt-3 space-y-1">
              {quickLinks.map((link) =>
                link.href.startsWith("/lab") ? (
                  <li key={link.label}>
                    <Link href={link.href} className="cp-side-item">
                      <link.icon className="size-4 shrink-0" strokeWidth={1.75} />
                      {link.label}
                    </Link>
                  </li>
                ) : link.href === "/" ? (
                  <li key={link.label}>
                    <Link
                      href="/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cp-side-item"
                    >
                      <link.icon className="size-4 shrink-0" strokeWidth={1.75} />
                      {link.label}
                    </Link>
                  </li>
                ) : (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cp-side-item"
                    >
                      <link.icon className="size-4 shrink-0" strokeWidth={1.75} />
                      {link.label}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          <div className="cp-card p-4">
            <h2 className="text-sm font-semibold text-cp-ink">
              About this Lab
            </h2>
            <p className="mt-2 text-[13px] leading-relaxed text-cp-mute">
              I build a lot of CMS-driven sites, so I presented my portfolio
              the way I hand sites to clients: as a clean, structured control
              panel. It&apos;s modelled on Statamic, one of my favourite CMSs
              to work with.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
