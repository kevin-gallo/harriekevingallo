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
                A partner who treats your business like their own
              </p>
            </div>
            <p className="body-3 text-grey-500">
              I&apos;m Harrie Kevin Gallo, a web designer and developer based
              in Cebu, Philippines. For the past 3+ years I&apos;ve helped
              businesses across Europe, Asia, and New Zealand launch websites
              and online stores that bring in leads, customers, and sales.
              When you partner with me, you get one dedicated point of contact
              who takes your project from first idea to launch day, then
              sticks around to help you grow.
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
