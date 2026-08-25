import VideoClip from "../../../components/VideoClip";
import CarouselControls from "../../../components/CarouselControls";
import type { Swiper as SwiperType } from "swiper";
import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

const videoProdSamples = [
  { label: "Beauty", src: "/videos/video-prod/beauty-slider.mp4" },
  { label: "Food & Drink", src: "/videos/video-prod/food-drink-slider.mp4" },
  { label: "Product", src: "/videos/video-prod/product-slider.mp4" },
  { label: "Crowdfunding", src: "/videos/video-prod/crowdfunding-slider.mp4" },
  { label: "Education", src: "/videos/video-prod/education-slider.mp4" },
  { label: "Explainers", src: "/videos/video-prod/explainers-slider.mp4" },
  { label: "HR", src: "/videos/video-prod/hr-slider.mp4" },
  { label: "Social-First", src: "/videos/video-prod/social-first-slider.mp4" },
  { label: "TV", src: "/videos/video-prod/tv-slider.mp4" },
];

export default function VideoShowcaseCarousel({
  className,
}: {
  className?: string;
}) {
  const swiperRef = useRef<SwiperType | null>(null);
  const [activeSlide, setActiveSlide] = useState(0);

  return (
    <section className={`${className ?? " "} flex flex-col gap-2.5`}>
      <Swiper
        style={
          {
            paddingRight: "calc(100% - min(450px, 100%))",
          } as React.CSSProperties
        }
        spaceBetween={24}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        onSlideChange={(swiper) => setActiveSlide(swiper.activeIndex)}
        slidesPerView="auto"
        className="w-full">
        {videoProdSamples.map((video, index) => (
          <SwiperSlide
            key={video.label}
            style={{ width: "min(450px, 100%)" }}
            aria-roledescription="slide"
            aria-label={`${index + 1} of ${videoProdSamples.length}: ${video.label}`}
            className="flex flex-col">
            <h3 className="font-extrabold text-grayblue">{video.label}</h3>
            <VideoClip
              className="w-full h-auto object-cover rounded-lg"
              isActive={index === activeSlide}
              src={video.src}
              ariaLabel={`${video.label} video`}
            />
          </SwiperSlide>
        ))}
        <SwiperSlide
          style={{ width: "min(450px, 100%)" }}
          className="flex items-center justify-center">
          <a
            href="/"
            className="inline-flex items-center justify-center h-full leading-none w-fit text-heading-1 font-extrabold ml-4 hover:text-yellow underline">
            View <br /> All.
          </a>
        </SwiperSlide>
      </Swiper>
      <div className="flex justify-between items-center gap-y-2 gap-x-4">
        <CarouselControls
          className="bg-blue"
          onPrevious={() => swiperRef.current?.slidePrev()}
          onNext={() => swiperRef.current?.slideNext()}
        />
        <p className="text-tiny text-grayblue text-pretty leading-tight">
          *Drag to play the next Video, Tap to toggle sound
        </p>
      </div>
    </section>
  );
}
