const Contact = () => {
  return (
    <section id="contact" className="px-space py-space bg-primary scroll-mt-24 text-black">
      <div className="mx-container grid gap-8 lg:grid-cols-12 lg:gap-5">
        <div className="space-y-1 lg:col-span-6 lg:col-start-2 lg:space-y-3">
          <h2 className="h5">Contact</h2>
          <p className="h1">
            Have a project in mind? Let&apos;s talk about how your website can
            bring in more customers.
          </p>
        </div>

        <div className="space-y-5 lg:col-span-4 lg:col-start-8 lg:space-y-7 lg:pt-5 lg:text-right">
          <p className="body-3">
            Tell me where things are at: a new idea, a site that isn&apos;t
            bringing in enough leads, or a store that could sell more.
            I&apos;ll show you the clearest path forward.
          </p>
          <a
            href="mailto:gallo.harriekevin.official@gmail.com"
            className="btn btn-black"
          >
            Message me
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
