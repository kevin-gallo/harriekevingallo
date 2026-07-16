import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const facts = [
  { label: "Based in", value: "Cebu City, Philippines" },
  {
    label: "Working with",
    value: "Clients across Europe, Asia, and New Zealand",
  },
  { label: "Focus", value: "Websites, online stores, and ongoing care" },
  {
    label: "Available for",
    value: "New projects, retainers, and white-label agency work",
  },
];

const AboutStory = () => {
  return (
    <section className="px-space py-space bg-white">
      <div className="mx-container">
        <div className="grid-layout gap-y-12">
          <dl className="space-y-8 lg:col-span-4">
            {facts.map((fact) => (
              <div key={fact.label} className="space-y-1">
                <dt className="h5 text-grey-500">{fact.label}</dt>
                <dd>{fact.value}</dd>
              </div>
            ))}
          </dl>

          <div className="space-y-6 lg:col-span-7 lg:col-start-6">
            <div className="space-y-3">
              <h2 className="h5">My story</h2>
              <div className="space-y-5">
                <p className="body-1">
                  I&apos;ve spent my career where websites meet real customers:
                  resolving{" "}
                  <strong className="font-medium">critical issues</strong> on a
                  learning platform used by thousands of students a day, and
                  keeping <strong className="font-medium">online stores</strong>{" "}
                  selling for French jewellery brands.
                </p>
                <p className="body-3 text-grey-500">
                  Production work teaches you what matters: fast pages, stable
                  systems, and clear communication. On a{" "}
                  <strong className="font-medium text-black">
                    dedicated bug team
                  </strong>{" "}
                  I learned to find root causes quickly and report plainly
                  while doing it, and that habit carries into every project I
                  take on.
                </p>
                <p className="body-3 text-grey-500">
                  I&apos;ve coordinated daily with{" "}
                  <strong className="font-medium text-black">
                    Japanese senior engineers
                  </strong>
                  , worked alongside{" "}
                  <strong className="font-medium text-black">
                    senior developers in France
                  </strong>
                  , and now build for a{" "}
                  <strong className="font-medium text-black">
                    New Zealand creative agency
                  </strong>{" "}
                  and its clients. Working across languages and time zones made
                  me a better partner: you get updates you can read at a
                  glance, honest estimates, and quick answers.
                </p>
                <p className="body-3 text-grey-500">
                  I&apos;m equally at home in{" "}
                  <strong className="font-medium text-black">
                    legacy and modern codebases
                  </strong>
                  , from PHP, jQuery, and WordPress through to React, Vue, and
                  Next.js. Plenty of businesses run on a mix of both, and I
                  enjoy meeting a codebase where it is: maintaining it,
                  improving it, or migrating it when the time comes.
                </p>
              </div>
            </div>

            <Link href="/work" className="btn btn-black">
              See the projects
              <ArrowUpRight className="size-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutStory;
