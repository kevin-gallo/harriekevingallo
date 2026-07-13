import { Download } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="px-space py-space scroll-mt-24 bg-white">
      <div className="mx-container">
        <div className="grid-layout">
          <div className="space-y-3 lg:col-span-6">
            <div>
              <h2 className="h5">About me</h2>
              <p className="display-2">
                One person. The output of a full web team.
              </p>
            </div>
            <p className="body-3 text-grey-500">
              I&apos;m Harrie Kevin Gallo, a full-stack developer and designer
              based in Cebu, Philippines. For the past 3+ years I&apos;ve been
              designing, building, and shipping e-commerce sites, web apps, and
              custom platforms for clients across Europe, Asia, and New
              Zealand. Working with me is like working with an agency, minus
              the overhead: one point of contact who takes your project from
              first sketch to production.
            </p>
          </div>

          <div className="flex items-end lg:col-span-5 lg:col-start-8 lg:justify-end">
            <a
              href="/Harrie Kevin Gallo - Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-black"
            >
              Download resume
              <Download className="size-3.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
