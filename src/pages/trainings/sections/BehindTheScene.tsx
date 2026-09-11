import { Swiper, SwiperSlide } from "swiper/react";
import { HighlightedText } from "../../../components/HighlightedText";
import { btsShowcase } from "../data";
import VideoClip from "../../../components/VideoClip";

export default function BehindTheScene() {
  const { headline, content, highlightedText } = btsShowcase;
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
        <div className="overflow-hidden w-[min(900px,100%)] mt-8 flex flex-col">
          <Swiper slidesPerView={1} spaceBetween={1} className="w-full">
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
          <p>
            <span className="text-small text-grayblue ">
              *<span className="inline lg:hidden">Tap</span>
              <span className="hidden lg:inline">Click on</span> Video to toggle
              sound
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}
