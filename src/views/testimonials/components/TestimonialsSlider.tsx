import { Swiper, SwiperSlide } from "swiper/react";
import { slidesContent } from "../data";
import { cn } from "../../../lib/utils";
import { useBreakpoint } from "../../../hooks/useBreakpoint";
import QuoteMark from "../../../components/QuoteMark";

export default function TestimonialsSlider() {
  const { lg } = useBreakpoint();

  return (
    <div className="mx-auto px-2 lg:w-content-boundary-1440 mt-4 lg:mt-14">
      <Swiper
        loop
        grabCursor
        slidesPerView={1.2}
        spaceBetween={24}
        breakpoints={{
          [580]: {
            slidesPerView: 1.4,
          },
          [lg]: {
            centeredSlides: true,
            slidesPerView: 2.5,
            spaceBetween: 38,
          },
        }}
        className="w-full h-full pt-7 pb-14 lg:pb-21 lg:w-[160%] lg:ml-[-30%] ">
        {slidesContent.map((slide) => (
          <SwiperSlide
            key={slide.clientName}
            className="h-auto px-2 pb-8 lg:pt-14">
            {({ isActive }) => (
              <figure
                className={cn(
                  "h-full drop-shadow-[0_4px_4px] drop-shadow-black/55 px-6 lg:px-16 lg:py-12 transition-[transform_background-color_color] duration-300 ease-swap",
                  {
                    "bg-white lg:bg-blue lg:-translate-y-24": isActive,
                  },
                  {
                    "bg-white": !isActive,
                  },
                )}>
                <div className="w-[min(700px,100%)] mx-auto flex flex-col gap-y-4 lg:gap-y-12 pt-0 pb-16 lg:py-18 relative">
                  <QuoteMark
                    className="hidden lg:block"
                    quoteIconClassName="w-10 lg:w-20"
                  />
                  <blockquote
                    className={cn("pt-7", { "lg:text-white": isActive })}>
                    {slide.content.map((text) => (
                      <p key={text}>{text}</p>
                    ))}
                  </blockquote>
                  <figcaption>
                    <p className="inline-block px-3 py-1 bg-yellow font-extrabold text-heading-3">
                      {slide.clientName}
                    </p>
                  </figcaption>
                </div>
                <div className="w-24 lg:w-44 aspect-square outline-5 outline-gray rounded-full absolute left-1/2 -translate-x-1/2 bottom-0 translate-y-1/2 bg-white overflow-clip grid place-items-center -z-10">
                  <img
                    src={slide.logo.src}
                    alt={slide.logo.alt}
                    className="w-full h-full object-contain mix-blend-multiply bg-center"
                  />
                </div>
              </figure>
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
