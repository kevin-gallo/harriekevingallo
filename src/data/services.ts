export type Service = {
  slug: string;
  name: string;
  /* short one-liner shown under the name on cards */
  tagline: string;
  /* one-liner used for meta descriptions */
  summary: string;
  /* first-person paragraphs shown on the detail page */
  description: string[];
  /* "What's included" bullets on the detail page */
  includes: string[];
};

export const services: Service[] = [
  {
    slug: "page-speed-optimization",
    name: "Page speed optimization",
    tagline: "Faster pages, happier visitors, more sales.",
    summary:
      "I find what slows your website down and fix it, so visitors stay instead of leaving.",
    description: [
      "A slow website costs you customers before they even see what you offer. Every extra second of loading gives visitors a reason to hit back and try a competitor instead. I dig into what makes your pages slow and fix it at the source.",
      "I start by measuring how your site performs on real connections and real phones, then work through the biggest wins first: oversized images, render-blocking scripts, slow server responses, and code that ships more than the page needs.",
      "You end up with a site that loads fast, scores well on Google's Core Web Vitals, and keeps visitors moving toward the enquiry or the checkout.",
    ],
    includes: [
      "Full performance audit with clear priorities",
      "Image and asset optimization",
      "Script cleanup and code splitting",
      "Core Web Vitals improvements",
      "Before and after speed reports",
      "Practical advice to keep it fast",
    ],
  },
  {
    slug: "website-maintenance-care",
    name: "Website maintenance & care",
    tagline: "Your site stays healthy while you run the business.",
    summary:
      "Updates, backups, monitoring, and fixes handled for you every month.",
    description: [
      "Websites need looking after. Software goes out of date, security patches land every week, and small issues grow into expensive ones when nobody is watching. I take that whole job off your plate.",
      "Each month I keep your platform and plugins up to date, back everything up, watch uptime, and fix small problems before your customers notice them. When you need a content change or a quick tweak, you message one person and it gets done.",
      "You get the peace of mind of knowing someone who knows your site inside out is keeping an eye on it, every day of the year.",
    ],
    includes: [
      "Software and security updates",
      "Automated offsite backups",
      "Uptime and error monitoring",
      "Small fixes and content changes",
      "Monthly health report",
      "Priority support when something breaks",
    ],
  },
  {
    slug: "cms-development",
    name: "CMS development",
    tagline: "Update your own website in minutes, without tickets.",
    summary:
      "Websites built on a CMS your team can edit confidently without touching code.",
    description: [
      "You should never have to email a developer to change a headline or add a team member. I build websites on content management systems like WordPress, Craft CMS, and Statamic, set up so editing feels obvious.",
      "I structure the CMS around how you actually work: the fields your team needs, organised the way you think about your content. Pages, products, and news posts become things you publish yourself in minutes.",
      "Training and handover are part of every build. By launch day your team knows how to update the site on their own, and if anyone gets stuck later, I am a message away.",
    ],
    includes: [
      "WordPress, Craft CMS, or Statamic builds",
      "Editing screens shaped around your content",
      "Custom fields and flexible page sections",
      "User roles and permissions",
      "Training and handover for your team",
      "Documentation you can come back to",
    ],
  },
  {
    slug: "mobile-friendly-design",
    name: "Mobile-friendly builds",
    tagline: "A site that works beautifully in every hand.",
    summary:
      "Pages that look great and work properly on phones, tablets, and desktops.",
    description: [
      "Most of your visitors are on a phone. If your site is fiddly on a small screen, they leave, and they rarely come back. I build mobile-first, so the phone experience gets the most care.",
      "That means text you can read without zooming, buttons big enough to tap, forms that are quick to fill in, and menus that make sense with a thumb. From there the design scales up gracefully to tablets and desktops.",
      "I test on real devices as well as browser tools, so what ships matches what your customers actually see.",
    ],
    includes: [
      "Mobile-first build",
      "Touch-friendly navigation and forms",
      "Responsive images for every screen",
      "Fast loading on mobile networks",
      "Real device testing",
      "Accessibility checks at every size",
    ],
  },
  {
    slug: "performance-optimization",
    name: "Performance optimization",
    tagline: "Your whole system tuned, from database to browser.",
    summary:
      "Deep optimization across your stack so everything responds quickly, even under load.",
    description: [
      "Page speed gets visitors through the door. Performance keeps the whole system responsive once they are inside: searches that return instantly, checkouts that never hang, and admin screens your team can actually work in.",
      "I profile your application end to end and fix the slow parts: database queries that scan too much, API calls that block each other, and background jobs that pile up. This work matters most for stores and platforms where a slow system directly costs money.",
      "The payoff is a site that stays quick during your busiest hour, which is exactly when speed earns you the most.",
    ],
    includes: [
      "Full-stack performance profiling",
      "Database and query optimization",
      "API and backend tuning",
      "Background job and queue tuning",
      "Load testing before big launches",
      "Clear reports on what changed and why",
    ],
  },
  {
    slug: "caching-infrastructure",
    name: "Caching & infrastructure",
    tagline: "Serve more visitors with less server.",
    summary:
      "Smart caching and solid infrastructure that keep your site fast and stable at any traffic level.",
    description: [
      "The fastest page is one your server barely has to think about. Good caching means most visitors get pages served instantly from memory or a CDN close to them, and your server saves its effort for the requests that truly need it.",
      "I set up caching at every level that makes sense for your site: full-page caching, CDN edge delivery, Redis for the data your application asks for constantly, and careful invalidation so content updates still show up straight away.",
      "On the infrastructure side, I make sure the foundations match your traffic: right-sized servers, monitoring that catches problems early, and room to grow without a rebuild.",
    ],
    includes: [
      "Full-page and fragment caching",
      "CDN setup and edge delivery",
      "Redis and object caching",
      "Cache invalidation that keeps content fresh",
      "Server sizing and configuration",
      "Monitoring and alerting",
    ],
  },
  {
    slug: "e-commerce-development",
    name: "E-commerce development",
    tagline: "A store built to sell, from first visit to checkout.",
    summary:
      "Online stores built to turn browsers into buyers.",
    description: [
      "An online store has one job: make buying easy. I build stores where products are simple to find, pages load fast, and the checkout takes as few taps as possible.",
      "I have built and maintained stores for brands selling across Europe and Asia, on platforms from Shopify to fully custom builds. That experience shows in the details: product pages that answer questions before they are asked, promotions that are simple to run, and inventory that stays accurate.",
      "After launch I can stay on to keep the store selling: seasonal campaigns, new features, and the steady improvements that lift conversion over time.",
    ],
    includes: [
      "Shopify or custom store builds",
      "Product, pricing, and inventory setup",
      "Secure payment integration",
      "Streamlined checkout flows",
      "Discounts and promotion tooling",
      "Order and customer management",
    ],
  },
  {
    slug: "seo-fundamentals",
    name: "SEO fundamentals",
    tagline: "Built to be found on Google from day one.",
    summary:
      "Technical SEO groundwork so search engines can find, read, and rank your site.",
    description: [
      "Great websites still need to be found. I build the technical foundations search engines look for: clean structure, fast pages, and markup that tells Google exactly what each page is about.",
      "That covers the essentials many sites get wrong: page titles and descriptions that earn the click, structured data, sitemaps, and redirects that protect your rankings through a rebuild.",
      "I focus on the groundwork that compounds. Rankings take time, but a technically sound site gives every piece of content you publish its best chance.",
    ],
    includes: [
      "Technical SEO audit",
      "Meta titles, descriptions, and social tags",
      "Structured data and schema markup",
      "XML sitemaps and clean URLs",
      "Redirect mapping for rebuilds",
      "Search Console setup and reporting",
    ],
  },
  {
    slug: "automation-ai-workflows",
    name: "Automation & AI workflows",
    tagline: "Hours of busywork, handled while you sleep.",
    summary:
      "Practical automations and AI-powered internal tools that save your team hours every week.",
    description: [
      "Every business has work that eats hours without needing human judgement: copying data between tools, drafting the same documents, chasing the same reports. That is exactly the work I automate.",
      "I build automations and internal tools powered by AI where it genuinely helps: document drafting, content pipelines, data entry, reporting, and the glue between the systems you already use. At Plato I build AI tooling that speeds up real agency workflows, so I know what holds up in daily use and what is just a demo.",
      "We start small: one workflow, measured time savings, then expand to the next. You always know what was automated and how to switch it off.",
    ],
    includes: [
      "Workflow audit with clear priorities",
      "AI-assisted document and content pipelines",
      "Internal tools your team actually uses",
      "Connections between your existing systems",
      "Human review steps where they matter",
      "Training and simple documentation",
    ],
  },
  {
    slug: "ai-first-development",
    name: "AI-first development",
    tagline: "Agentic coding that ships faster without cutting corners.",
    summary:
      "AI-assisted, agentic development workflows that deliver projects in days instead of weeks.",
    description: [
      "I work AI-first: agentic coding tools like Claude and Cursor are part of my daily stack, planning, writing, and reviewing code alongside me. Used well, they cut delivery time dramatically without touching quality.",
      "Every AI-assisted change still goes through the same gates as hand-written code: review, testing, and QA on real devices. The speed comes from automating the mechanical parts of development, not from skipping the careful ones.",
      "For you this means faster quotes and turnarounds, cheaper prototypes, and a developer who can take on unfamiliar platforms with confidence.",
    ],
    includes: [
      "Agentic coding with Claude and Cursor",
      "Prototypes and MVPs in days",
      "AI-accelerated site builds and migrations",
      "Code review and QA on every change",
      "Legacy codebase exploration and fixes",
      "AI tooling setup for your own team",
    ],
  },
  {
    slug: "api-integration",
    name: "API & third-party integrations",
    tagline: "Your website, talking to every tool you run.",
    summary:
      "Clean integrations with payment, CRM, shipping, booking, and content APIs.",
    description: [
      "A website rarely works alone. Orders flow to fulfilment, enquiries land in a CRM, bookings sync to calendars, and content comes from a headless CMS. I build those connections so data moves by itself, reliably.",
      "I have integrated payment gateways, storefront APIs, headless CMS platforms, and internal systems across REST and GraphQL, with proper error handling, retries, and logging, so a hiccup in one tool never silently loses a customer.",
      "If a tool you rely on has an API, I can connect your website to it, and leave you documentation that makes the integration easy to live with.",
    ],
    includes: [
      "Payment gateway integration",
      "CRM and email marketing connections",
      "Shipping, inventory, and booking APIs",
      "Headless CMS and storefront APIs",
      "Webhooks with retries and logging",
      "Clear documentation and handover",
    ],
  },
  {
    slug: "hosting-deployment",
    name: "Hosting & deployment",
    tagline: "Launches that go smoothly and stay up.",
    summary:
      "Reliable hosting setup and deployment pipelines that ship changes safely.",
    description: [
      "Where your site lives matters. The right hosting keeps pages fast, survives traffic spikes, and costs what it should. I help you choose it, set it up properly, and get your site live without drama.",
      "Deployments get the same care. I set up pipelines that test changes before they ship, deploy with zero downtime, and roll back in one step if anything looks wrong. Publishing an update becomes routine instead of risky.",
      "From your first launch onward, you always know your site is on solid ground and that shipping the next improvement is safe.",
    ],
    includes: [
      "Hosting recommendations and setup",
      "Domain, DNS, and SSL configuration",
      "Zero-downtime deployment pipelines",
      "Staging environments for safe testing",
      "Automated backups and rollbacks",
      "Launch-day support",
    ],
  },
];

export const getService = (slug: string) =>
  services.find((service) => service.slug === slug);

/* other services for the "Other services" section, continuing from the current one */
export const getOtherServices = (slug: string, limit = 3): Service[] => {
  const index = services.findIndex((service) => service.slug === slug);
  if (index === -1) return services.slice(0, limit);

  const others = [...services.slice(index + 1), ...services.slice(0, index)];
  return others.slice(0, limit);
};
