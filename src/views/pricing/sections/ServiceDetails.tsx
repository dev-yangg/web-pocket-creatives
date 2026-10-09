import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { MultiHighlightedText } from "../../../components/MultiHighlightedText";
import { cn } from "../../../lib/utils";
import { serviceDetailsSliderData } from "../data";
import { useState } from "react";
import { useSkipCSSTransitionOnResize } from "../../../hooks/useSkipCSSTransitionOnResize";

export default function ServiceDetails() {
  const { slides } = serviceDetailsSliderData;
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useSkipCSSTransitionOnResize<HTMLElement>();

  return (
    <section
      ref={sectionRef}
      className="grid grid-cols-1 xl:grid-rows-1 overflow-hidden">
      {slides.map((slide, index) => {
        const isFirst = index === 0;

        return (
          <div
            key={slide.headline}
            inert={index !== activeIndex}
            className={cn(
              "py-14 xl:col-start-1 xl:row-start-1 transition-transform duration-600 ease-swap",
              { "bg-yellow text-black": isFirst },
              { "bg-blue text-white border-b": !isFirst },
              {
                "xl:translate-x-0": index === activeIndex,
                "xl:translate-x-full": index > activeIndex,
                "xl:-translate-x-full": index < activeIndex,
              },
            )}>
            <div
              className={cn("w-content-boundary-1440-pad mx-auto grid", {
                "grid-cols-[1fr_auto]": isFirst,
                "grid-cols-[auto_1fr]": !isFirst,
              })}>
              <div>
                <h2 className="text-heading-1 font-extrabold leading-none mb-8 md:mb-10">
                  {slide.headline}
                </h2>
                <figure className="grid xl:grid-cols-[3fr_5fr] 2xl:grid-cols-[4fr_8fr_auto] gap-y-8">
                  <img
                    src={slide.image.src}
                    alt=""
                    className="w-full h-full aspect-video xl:aspect-square object-cover"
                  />
                  <figcaption
                    className={cn(
                      "flex flex-col gap-y-4",
                      { "xl:mx-8": isFirst },
                      { "xl:ml-8": !isFirst },
                    )}>
                    {slide.paragraphs.map((content) => (
                      <p key={content.text}>
                        <MultiHighlightedText
                          text={content.text}
                          highlights={content.highlights}
                        />
                      </p>
                    ))}
                  </figcaption>
                </figure>
              </div>
              <button
                onClick={() =>
                  setActiveIndex((prev) => (prev + 1) % slides.length)
                }
                className={cn(
                  "w-36 md:w-44 lg:w-38 aspect-square rounded-full self-center hidden xl:flex flex-col items-center justify-center gap-y-1 shrink-0 @container",
                  { "bg-blue text-white": isFirst },
                  { "bg-yellow text-black xl:mr-8": !isFirst },
                  { "xl:order-first": !isFirst },
                )}>
                <span className="font-bold text-[clamp(1rem,1rem+1cqi,1.5rem)]">
                  {slide.nextLabel}
                </span>
                <span className="w-6 h-6">
                  {isFirst && <BsArrowRight className="w-full h-full" />}
                  {!isFirst && <BsArrowLeft className="w-full h-full" />}
                </span>
              </button>
            </div>
          </div>
        );
      })}
    </section>
  );
}
