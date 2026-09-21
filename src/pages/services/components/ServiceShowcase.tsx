import { cn } from "../../../lib/utils";
import type { ServicesProcess } from "../data";

type Props = ServicesProcess;

export default function ServiceShowcase({
  headline,
  headlineHighlight,
  steps,
}: Props) {
  return (
    <section className="bg-white flex flex-col gap-y-14 py-24">
      <header className="bleed-grid-1440">
        <h2 className=" text-heading-2 font-extrabold col-start-2 col-span-2">
          {headline}
          {headlineHighlight}
        </h2>
      </header>
      <div className="bleed-grid-1440 gap-y-24">
        {steps.map((step, index) => {
          const isFlipped = index % 2 !== 0;
          return (
            <section key={`${step.title} ${index}`} className="col-start-2">
              <figure
                className={cn(
                  "grid grid-cols-1 gap-8 lg:grid-cols-[1.25fr_.75fr]",
                  { "lg:grid-cols-[.75fr_1.25fr]": !isFlipped },
                )}>
                <figcaption
                  className={cn("flex flex-col gap-y-6 lg:row-start-1", {
                    "lg:col-start-1": !isFlipped,
                    "lg:col-start-2": isFlipped,
                  })}>
                  <h3 className="text-heading-3 font-extrabold">
                    {step.title}
                  </h3>
                  <h4 className="text-heading-4">{step.subtitle}</h4>
                  <p>{step.description}</p>
                </figcaption>
                <div
                  className={cn(
                    "col-start-1 col-span-2 lg:col-span-1 lg:row-start-1",
                    {
                      "lg:col-start-2": !isFlipped,
                      "lg:col-start-1": isFlipped,
                    },
                  )}>
                  <img
                    className="w-full aspect-video object-cover"
                    src={step.image.src}
                    alt={step.image.alt}
                  />
                </div>
              </figure>
            </section>
          );
        })}
      </div>
    </section>
  );
}
