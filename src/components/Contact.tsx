const Contact = () => {
  return (
    <section id="contact" className="px-space py-space bg-primary scroll-mt-24 text-black">
      <div className="mx-container grid gap-8 lg:grid-cols-12 lg:gap-5">
        <div className="space-y-1 lg:col-span-6 lg:col-start-2 lg:space-y-3">
          <h2 className="h5">Contact</h2>
          <p className="h1">
            Have a project in mind? Let&apos;s talk about what you&apos;re
            building and how I can help you ship it.
          </p>
        </div>

        <div className="space-y-5 lg:col-span-4 lg:col-start-8 lg:space-y-7 lg:pt-5 lg:text-right">
          <p className="body-3">
            Tell me where things are at: an idea, a half-built repo, or a live
            site that needs a rescue. I&apos;ll tell you how I&apos;d take it
            from here.
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
