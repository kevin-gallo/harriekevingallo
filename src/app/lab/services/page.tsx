import type { Metadata } from "next";
import Link from "next/link";
import { StatusDot } from "@/components/lab/publish";
import { services } from "@/data/services";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Everything Harrie Kevin Gallo offers clients, from page speed optimization to full e-commerce builds.",
};

export default function ServicesPage() {
  return (
    <div className="mx-auto max-w-5xl space-y-5">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <h1 className="text-xl font-semibold text-cp-ink">Services</h1>
        <span className="cp-pill">{services.length} entries</span>
      </div>

      <div className="cp-card overflow-hidden">
        <div className="overflow-x-auto">
          <table className="cp-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Tagline</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {services.map((service) => (
                <tr key={service.slug}>
                  <td className="whitespace-nowrap">
                    <Link
                      href={`/lab/services/${service.slug}`}
                      className="font-medium text-cp-link hover:underline"
                    >
                      {service.name}
                    </Link>
                  </td>
                  <td>{service.tagline}</td>
                  <td>
                    <span className="flex items-center gap-1.5 whitespace-nowrap">
                      <StatusDot status="open" />
                      Open
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
