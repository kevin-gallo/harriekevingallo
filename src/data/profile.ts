export type Social = {
  label: string;
  href: string;
};

export const profile = {
  name: "Harrie Kevin Gallo",
  title: "Web designer & developer",
  jobTitle: "Web Design & Development Partner",
  location: "Cebu City, Philippines",
  email: "gallo.harriekevin.official@gmail.com",
  phone: "+63 994 583 3976",
  phoneHref: "tel:+639945833976",
  resume: "/Harrie-Kevin-Gallo-CV.pdf",
  availability:
    "Available for new projects, retainers, and white-label agency work.",
  socials: [
    { label: "GitHub", href: "https://github.com/kevin-gallo" },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/harrie-kevin-gallo-b2491325a/",
    },
    {
      label: "Facebook",
      href: "https://www.facebook.com/kevinjhay.gallo.3/",
    },
  ] satisfies Social[],
  facts: [
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
  ],
};
