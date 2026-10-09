import { MultiHighlightedText } from "../../../components/MultiHighlightedText";
import { videographyFaq } from "../data";

export default function FAQ() {
  const { headline, description, media } = videographyFaq;
  return (
    <section className="py-14 md:py-24">
      <div className="content-boundary">
        <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-y-6  gap-x-14">
          <div className="grid max-md:place-items-center md:order-2">
            <img
              src={media.src}
              alt={media.alt}
              className="w-[min(250px,100%)] md:w-[min(350px,100%)] max-h-full lg:h-full aspect-square translate-x-2 md:translate-x-0"
            />
          </div>
          <div className="flex flex-col gap-y-10 w-[min(500px,100%)] max-md:mx-auto md:w-full">
            <h2 className="font-extrabold text-center text-balance leading-tight md:text-wrap md:text-left  md:text-[clamp(1.65rem,1.2rem+1vw,2.5rem)]">
              <MultiHighlightedText
                text={headline.text}
                highlights={headline.highlights}
              />
            </h2>
            <p>{description}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
