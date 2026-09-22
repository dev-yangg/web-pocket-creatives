import { Swiper, SwiperSlide } from "swiper/react";
import { useBreakpoint } from "../../../hooks/useBreakpoint";
import { useScreen } from "../../../hooks/useScreen";
import type { ServicesProcess } from "../data";
import ServiceShowcaseSlide from "./ServiceShowcaseSlide";

type Props = ServicesProcess;

export default function ServiceShowcase({
  headline,
  headlineHighlight,
  steps,
}: Props) {
  const { lg } = useBreakpoint();
  const isLg = useScreen(lg);

  return (
    <section className="bg-white flex flex-col gap-y-14 py-24 px-4 lg:px-0">
      <header className="bleed-grid-1440">
        <h2 className=" text-heading-2 font-extrabold col-start-2 col-span-2 leading-none">
          {headline} {headlineHighlight}
        </h2>
      </header>
      {!isLg ? (
        <div>
          <Swiper className="w-full" slidesPerView={1.2} spaceBetween={42}>
            {steps.map((step, index) => {
              const isFlipped = index % 2 !== 0;
              return (
                <SwiperSlide key={`${step.title} ${index}`}>
                  <ServiceShowcaseSlide step={step} isFlipped={isFlipped} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      ) : (
        <div className="bleed-grid-1440 gap-y-24">
          {steps.map((step, index) => {
            const isFlipped = index % 2 !== 0;
            return (
              <ServiceShowcaseSlide
                key={`${step.title} ${index}`}
                step={step}
                isFlipped={isFlipped}
              />
            );
          })}
        </div>
      )}
    </section>
  );
}
