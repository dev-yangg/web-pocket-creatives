import { cn } from "../../../lib/utils";
import { vacanciesAndPartners } from "../data";

export default function VacanciesAndPartners() {
  const { sections } = vacanciesAndPartners;
  return (
    <section className="py-24 bg-yellow">
      <div className="content-boundary grid grid-cols-1 gap-y-12 md:gap-y-20">
        {sections.map((section, index) => {
          const isReversed = index % 2 === 0;

          return (
            <section key={section.heading}>
              <figure className="grid md:grid-cols-2 items-center gap-y-8 gap-x-12">
                <img
                  src={section.image.src}
                  alt={section.image.alt}
                  className={cn("aspect-video object-cover", {
                    "md:order-2": !isReversed,
                  })}
                />
                <figcaption
                  className={cn(
                    "flex flex-col gap-y-7 md:gap-y-8 md:w-[min(430px,100%)] mx-auto",
                  )}>
                  <h3 className="text-heading-3 font-extrabold text-center md:text-left">
                    {section.heading}
                  </h3>
                  <p className="leading-tight ">{section.body}</p>
                  <a
                    href={`mailto:${section.email}`}
                    className="bg-blue text-white self-center md:self-start px-3 py-0.75">
                    {section.email}
                  </a>
                </figcaption>
              </figure>
            </section>
          );
        })}
      </div>
    </section>
  );
}
