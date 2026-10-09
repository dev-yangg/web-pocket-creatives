import { cn } from "../../../lib/utils";
import { photographyDetails } from "../data";

export default function PhotographyDetails() {
  const { headline, details } = photographyDetails;
  return (
    <section className="py-18 lg:py-24">
      <h2 className="sr-only">{headline}</h2>
      <div className="content-boundary grid grid-cols-1 lg:w-content-boundary-1440 lg:mx-auto lg:bleed-grid-1440 gap-y-12">
        {details.map((det, index) => {
          const isFlipped = index % 2 !== 0;

          return (
            <section key={`${index}-${det.heading}`} className="col-start-2">
              <figure
                className={cn("grid grid-cols-1 lg:gap-x-8 gap-y-6", {
                  "lg:grid-cols-2 xl:grid-cols-[.85fr_1fr]": index === 0,
                  "lg:grid-cols-[.75fr_1fr] xl:grid-cols-[.5fr_1fr]":
                    index === 1,
                  "lg:grid-cols-2 xl:grid-cols-[.75fr_.75fr]": index === 2,
                })}>
                <img
                  src={det.image.src}
                  alt={det.image.alt}
                  className={cn(
                    "aspect-7/5 w-full h-full xl:max-h-110 object-cover",
                    {
                      "lg:order-2": isFlipped,
                    },
                  )}
                />
                <figcaption className="flex flex-col gap-y-6 lg:px-4">
                  <h3 className="text-heading-2 lg:text-heading-3 text-center lg:text-left font-extrabold leading-none">
                    {det.heading}
                  </h3>
                  <div className="flex flex-col gap-y-4">
                    {det.content.map((text) => (
                      <p key={text} className="leading-none">
                        {text}
                      </p>
                    ))}
                  </div>
                </figcaption>
              </figure>
            </section>
          );
        })}
      </div>
    </section>
  );
}
