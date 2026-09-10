import SVG2 from "../components/SVG2";
import { collabFeats } from "../data";

export default function CollaborationSection() {
  return (
    <section className="py-14 relative">
      <div
        aria-hidden="true"
        className="w-content-boundary-1440 mx-auto absolute inset-0 pointer-events-none lg:-z-10">
        <div className="absolute top-1/2 -translate-y-1/2 right-0 w-full h-full lg:w-[60%] lg:h-[85%]">
          <div className="w-full h-full">
            <SVG2 />
          </div>
        </div>
      </div>
      <div className="max-lg:content-boundary grid grid-cols-1 lg:bleed-grid-1440 gap-y-18">
        {collabFeats.map((content) => (
          <figure
            key={content.title}
            className="group col-start-2 grid grid-cols-1 lg:grid-cols-[10fr_.5fr_14fr] lg:nth-2:grid-cols-[13fr_12fr] gap-y-8">
            <div className="lg:group-nth-of-type-2:col-start-2 lg:group-nth-of-type-2:row-start-1">
              <img
                src={content.image}
                alt={content.alt}
                className="w-full h-full object-cover lg:group-nth-of-type-1:-scale-x-100"
              />
            </div>
            <figcaption className="flex flex-col gap-y-4 lg:gap-y-5 lg:group-nth-of-type-1:col-start-3 lg:group-nth-of-type-2:row-start-1 lg:group-nth-of-type-2:px-8 lg:w-[min(700px,100%)] mx-auto">
              <h2 className="font-extrabold leading-none lg:text-heading-3">
                {content.title}
              </h2>
              {content.content.map((text) => (
                <p key={text} className="leading-snug">
                  {text}
                </p>
              ))}
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
