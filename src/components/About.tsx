import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="px-space py-space scroll-mt-24 bg-white">
      <div className="mx-container">
        <div className="grid-layout">
          <div className="space-y-3 lg:col-span-6">
            <div>
              <h2 className="h5">About me</h2>
              <p className="display-2">
                A partner who treats your business like their own
              </p>
            </div>
            <p className="body-3 text-grey-500">
              I&apos;m Harrie Kevin Gallo, a{" "}
              <strong className="font-medium text-black">
                web designer and developer
              </strong>{" "}
              based in Cebu, Philippines. I&apos;ve built{" "}
              <strong className="font-medium text-black">online stores</strong>{" "}
              for French jewellery brands, shipped features and{" "}
              <strong className="font-medium text-black">
                critical fixes
              </strong>{" "}
              for one of Asia&apos;s largest online learning platforms, and
              deliver{" "}
              <strong className="font-medium text-black">
                agency-standard work
              </strong>{" "}
              for New Zealand businesses. When you partner with me, you get{" "}
              <strong className="font-medium text-black">
                one dedicated point of contact
              </strong>{" "}
              who takes your project from first idea to launch day, then sticks
              around to help you grow.
            </p>
          </div>

          <div className="flex flex-wrap items-end gap-3 lg:col-span-5 lg:col-start-8 lg:justify-end">
            <Link href="/about" className="btn btn-black">
              More about me
              <ArrowUpRight className="size-3.5" />
            </Link>
            <Link href="/work" className="btn btn-outline">
              See all projects
              <ArrowUpRight className="size-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
