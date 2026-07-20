type Role = {
  role: string;
  company: string;
  note: string;
  current?: boolean;
  description: string;
  highlights: string[];
};

const roles: Role[] = [
  {
    role: "Web Developer",
    company: "Plato Creative",
    note: "New Zealand",
    current: true,
    description:
      "I build and look after websites for a New Zealand creative agency and its clients. Agency work means real deadlines, design handoffs from Figma, and sites that have to hold up to a client's scrutiny: CMS builds, performance work, and ongoing care across a portfolio of brands.",
    highlights: [
      "Craft CMS",
      "Statamic",
      "Storyblok",
      "Next.js",
      "Ongoing maintenance",
    ],
  },
  {
    role: "Software Developer",
    company: "Forty Degrees Celsius Inc.",
    note: "Japanese e-learning platform",
    description:
      "New features and critical fixes for NativeCamp, one of Asia's largest online English learning platforms. As part of the dedicated bug team, I identified and resolved critical issues across the whole system, coordinating with Japanese senior engineers through daily stand-ups and progress reports.",
    highlights: [
      "PHP",
      "Vue.js",
      "Angular",
      "SQL",
      "Dedicated bug team",
    ],
  },
  {
    role: "Software Engineer",
    company: "Korlanda Corp.",
    note: "French e-commerce brands",
    description:
      "Full-stack development on e-commerce WordPress sites for French jewellery brands, including Nature Bijoux and Franck Herval. I turned client and internal support tickets into shipped fixes, refactored front-end code for performance and maintainability, and worked directly with senior developers based in France.",
    highlights: ["WordPress", "PHP", "jQuery", "Bootstrap", "E-commerce"],
  },
  {
    role: "Software Engineer Intern",
    company: "DNA Micro",
    note: "First production codebase",
    description:
      "Real client projects from day one, built with React, XState, MongoDB, and Tailwind CSS. This is where I picked up the habits I still keep: code reviews, knowledge sharing, and learning new tools quickly.",
    highlights: ["React", "MongoDB", "Tailwind CSS"],
  },
];

const AboutExperience = () => {
  return (
    <section className="px-space py-space bg-white">
      <div className="mx-container space-y-10 lg:space-y-14">
        <div className="grid-layout">
          <div className="space-y-3 lg:col-span-7">
            <div>
              <h2 className="h5">Experience</h2>
              <p className="display-2">Where the experience comes from</p>
            </div>
          </div>
        </div>

        <div>
          {roles.map((item, index) => (
            <div key={item.company}>
              {index !== 0 && (
                <hr className="border-grey-300 my-space-0-5" />
              )}

              <div className="grid-layout gap-y-6">
                <div className="space-y-2 lg:col-span-4">
                  <h3 className="h3">{item.role}</h3>
                  <p className="body-3 text-grey-500">
                    {item.company} &middot; {item.note}
                  </p>
                  {item.current && (
                    <span className="bg-primary body-3 inline-flex rounded-full px-3 py-1 text-black">
                      Current role
                    </span>
                  )}
                </div>

                <div className="space-y-5 lg:col-span-7 lg:col-start-6">
                  <p className="body-3 text-grey-500">{item.description}</p>
                  <ul className="flex flex-wrap gap-2">
                    {item.highlights.map((highlight) => (
                      <li
                        key={highlight}
                        className="border-grey-300 body-3 rounded-full border px-3 py-1"
                      >
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}

          <hr className="border-grey-300 my-space-0-5" />

          <div className="grid-layout gap-y-6">
            <div className="space-y-2 lg:col-span-4">
              <h3 className="h3">Education</h3>
            </div>
            <div className="lg:col-span-7 lg:col-start-6">
              <p className="body-3 text-grey-500">
                Bachelor of Science in Information Technology, Southwestern
                University PHINMA, Cebu City.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutExperience;
