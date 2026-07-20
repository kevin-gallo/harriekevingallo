'use client'

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Search } from "lucide-react";
import { services } from "@/data/services";

const ServicesListing = () => {
  const [query, setQuery] = useState("");

  const filtered = services
    .map((service, index) => ({ service, index }))
    .filter(({ service }) =>
      service.name.toLowerCase().includes(query.trim().toLowerCase())
    );

  return (
    <section className="px-space py-space bg-white">
      <div className="mx-container space-y-10 lg:space-y-14">
        <h2 className="sr-only">All services</h2>
        <div className="space-y-4">
          <div className="border-grey-300 focus-within:border-black flex items-center gap-3 border-b pb-4 transition-colors duration-300">
            <Search
              className="text-grey-500 size-5 shrink-0"
              strokeWidth={1.5}
              aria-hidden="true"
            />
            <label htmlFor="services-search" className="sr-only">
              Search services
            </label>
            <input
              id="services-search"
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search services"
              autoComplete="off"
              className="placeholder:text-grey-400 w-full bg-transparent py-1 focus:outline-none"
            />
          </div>
          <p className="body-3 text-grey-500" role="status">
            {filtered.length} {filtered.length === 1 ? "service" : "services"}
          </p>
        </div>

        {filtered.length > 0 ? (
          <ul className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {filtered.map(({ service, index }) => (
              <li key={service.slug}>
                <Link
                  href={`/services/${service.slug}`}
                  className="border-grey-300 group block h-full border p-6 transition-colors duration-300 hover:border-black"
                >
                  <p className="h5 text-grey-500">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <h3 className="h3 mt-8 flex items-start gap-2">
                    {service.name}
                    <ArrowUpRight className="mt-1 size-4 shrink-0 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </h3>
                  <p className="body-3 text-grey-500 mt-2">{service.tagline}</p>
                </Link>
              </li>
            ))}
          </ul>
        ) : (
          <p className="body-3 text-grey-500">
            No services match your search. Try a different term, like
            &quot;design&quot; or &quot;maintenance&quot;.
          </p>
        )}
      </div>
    </section>
  );
};

export default ServicesListing;
