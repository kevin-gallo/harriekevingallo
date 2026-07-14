type PageHeroProps = {
  label: string;
  title: string;
  intro?: string;
  children?: React.ReactNode;
};

/* Dark page header for subpages; sits under the transparent fixed nav */
const PageHero = ({ label, title, intro, children }: PageHeroProps) => {
  return (
    <section className="px-space bg-black pt-36 pb-14 text-white lg:pt-44 lg:pb-20">
      <div className="mx-container">
        <div className="grid-layout items-end">
          <div className="space-y-3 lg:col-span-7">
            <div>
              <p className="h5 text-primary">{label}</p>
              <h1 className="display-1">{title}</h1>
            </div>
            {intro && <p className="body-3 text-grey-400">{intro}</p>}
          </div>
          {children && (
            <div className="flex lg:col-span-5 lg:justify-end lg:self-end">
              {children}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default PageHero;
