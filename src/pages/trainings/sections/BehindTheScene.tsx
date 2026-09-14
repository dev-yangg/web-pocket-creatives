import { Swiper, SwiperSlide } from "swiper/react";
import type { SwiperRef } from "swiper/react";
import { HighlightedText } from "../../../components/HighlightedText";
import { btsShowcase } from "../data";
import VideoClip from "../../../components/VideoClip";
import CarouselControls from "../../../components/CarouselControls";
import { useRef } from "react";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";

export default function BehindTheScene() {
  const { headline, content, highlightedText } = btsShowcase;
  const swiperRef = useRef<SwiperRef | null>(null);
  const handleNext = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slideNext();
    }
  };
  const handlePrevious = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slidePrev();
    }
  };
  return (
    <section className="bg-yellow py-14 md:py-24">
      <div className="content-boundary flex flex-col gap-y-4 items-center">
        <h2 className="font-extrabold text-heading-1 leading-tight">
          {headline}
        </h2>
        <div className="flex flex-col gap-y-2">
          {content.map((text) => (
            <p key={text} className="leading-tight">
              <HighlightedText
                text={text}
                highlight={highlightedText}
                highlightClassName="font-extrabold"
              />
            </p>
          ))}
        </div>
        <div className="mt-8 flex flex-col w-[min(1200px,100%)] mx-auto">
          <div className="flex items-center justify-center gap-x-24">
            <button
              onClick={handlePrevious}
              className="hidden md:block shrink-0 w-14 text-black">
              <SlArrowLeft className="w-full h-full stroke-3" />
            </button>
            <div className="flex flex-col flex-1 min-w-0">
              <div className="overflow-hidden">
                <Swiper
                  className="w-full"
                  ref={swiperRef}
                  slidesPerView={1}
                  spaceBetween={1}>
                  {btsShowcase.videos.map((video) => (
                    <SwiperSlide key={video}>
                      {({ isActive }) => (
                        <VideoClip
                          src={video}
                          isActive={isActive}
                          className="w-full h-full object-cover"
                        />
                      )}
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
              <p>
                <span className="text-small text-grayblue ">
                  *<span className="inline lg:hidden">Tap</span>
                  <span className="hidden lg:inline">Click on</span> Video to
                  toggle sound
                </span>
              </p>
            </div>
            <button
              onClick={handleNext}
              className="hidden md:block shrink-0 w-14 text-black">
              <SlArrowRight className="w-full h-full stroke-3" />
            </button>
          </div>
        </div>
        <div className="block md:hidden">
          <CarouselControls
            onNext={handleNext}
            onPrevious={handlePrevious}
            className="bg-blue text-white shadow-below"
          />
        </div>
      </div>
    </section>
  );
}
