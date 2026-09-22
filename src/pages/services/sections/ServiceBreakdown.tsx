import { servicesBreakdown1 } from "../data";
import { useModal } from "../../../hooks/useModal";
import CarouselControls from "../../../components/CarouselControls";
import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import type { SwiperRef, SwiperClass } from "swiper/react";

export default function ServiceBreakdown() {
  const { srHeading, items } = servicesBreakdown1;
  const { openModal } = useModal();
  const swiperRef = useRef<SwiperRef>(null);
  const [canGoNext, setCanGoNext] = useState(true);
  const [canGoPrev, setCanGoPrev] = useState(false);

  const updateEdges = (swiper: SwiperClass) => {
    setCanGoNext(swiper.isBeginning);
    setCanGoPrev(swiper.isEnd);
  };

  return (
    <section className="bg-white py-24">
      <div className="content-boundary flex flex-col gap-y-14">
        <h2 className="text-heading-2 font-extrabold">{srHeading}</h2>
        <Swiper
          ref={swiperRef}
          className="w-full h-full"
          autoHeight
          slidesPerView="auto"
          grabCursor
          resistanceRatio={0}
          spaceBetween={72}
          onSwiper={updateEdges}
          onSlideChange={updateEdges}
          onResize={updateEdges}>
          {items.map((item) => (
            <SwiperSlide
              key={item.title}
              className="w-[min(320px,100%)] min-[600px]:w-[min(700px,100%)]">
              <figure className="grid grid-cols-1 gap-x-8 min-[600px]:grid-cols-2">
                <figcaption className="max-[600px]:order-2 flex flex-col gap-y-4">
                  <h3 className="mt-4 text-heading-4">{item.title}</h3>
                  <ul>
                    {item.bullets.map((text, index) => (
                      <li key={`${index}-${item.title}`}>{text}</li>
                    ))}
                  </ul>
                  <p>{item.description}</p>
                </figcaption>
                <img
                  src={item.image.src}
                  alt={item.image.alt}
                  className="w-full h-full object-cover aspect-7/5 object-center"
                />
              </figure>
            </SwiperSlide>
          ))}

          <SwiperSlide className="w-[min(320px,100%)] min-[600px]:w-[min(500px,100%)] grid justify-center items-center bg-red-500 h-full @container">
            <button
              onClick={() => openModal("contact")}
              className="text-[clamp(1.5rem,2rem+1cqi,2rem)] sm:text-[clamp(2rem,6rem+4cqi,5rem)] min-[600px]:text-[clamp(2rem,12rem+2cqi,8rem)] leading-none font-extrabold underline w-full mx-auto inline-block hover:text-yellow transition-colors duration-150 ease-in-out text-left min-[600px]:text-center">
              Get in touch
            </button>
          </SwiperSlide>
        </Swiper>
        <div className="grid justify-center min-[600px]:justify-start">
          <CarouselControls
            className="bg-blue text-white w-10 p-3"
            onNext={() => swiperRef.current?.swiper.slideNext()}
            onPrevious={() => swiperRef.current?.swiper.slidePrev()}
            disableNext={canGoPrev}
            disablePrevious={canGoNext}
          />
        </div>
      </div>
    </section>
  );
}
