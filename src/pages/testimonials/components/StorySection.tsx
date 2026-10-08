import { Swiper, SwiperSlide } from "swiper/react";
import { storySection } from "../data";
import { useBreakpoint } from "../../../hooks/useBreakpoint";

export default function StorySection() {
  const { headline, image, contents } = storySection;
  const { lg } = useBreakpoint();
  return (
    <section>
      <div className="content-boundary pt-14 flex flex-col gap-y-6">
        <h2 className="text-heading-2 font-extrabold leading-none">
          {headline}
        </h2>
        <div>
          <figure className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <img
                src={image.src}
                alt={image.alt}
                className="w-full lg:h-full object-cover aspect-square lg:aspect-auto"
              />
            </div>
            <figcaption className="lg:px-4">
              <Swiper
                grabCursor
                spaceBetween={25}
                slidesPerView={1.3}
                breakpoints={{ [lg]: { slidesPerView: 1.15 } }}
                className="h-full">
                {contents.map(({ headline, content }) => (
                  <SwiperSlide
                    key={headline}
                    className="flex flex-col gap-y-4 lg:px-4">
                    <h3 className="text-heading-3 font-extrabold">
                      {headline}
                    </h3>
                    {content.map((text, index) => (
                      <p key={`${text}-${index}`} className="leading-[1.2]">
                        {text}
                      </p>
                    ))}
                  </SwiperSlide>
                ))}
              </Swiper>
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
