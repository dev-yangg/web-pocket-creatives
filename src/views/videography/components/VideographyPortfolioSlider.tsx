import {
  Swiper,
  SwiperSlide,
  type SwiperClass,
  type SwiperRef,
} from "swiper/react";
import VideoClip from "../../../components/VideoClip";
import CarouselControls from "../../../components/CarouselControls";
import { videoProdPortfolio } from "../data";
import { type WorkCategoryId } from "../../../data/globals";
import { useRef, useState } from "react";
import PlayIcon from "../../works/components/PlayIcon";
import VolumeIcon from "../../../components/VolumeIcon";
import { CgPlayTrackNext, CgPlayTrackPrev } from "react-icons/cg";
import PauseIcon from "../../works/components/PauseIcon";

type SlideWithProgress = HTMLElement & { progress: number };

type PortfolioItem = (typeof videoProdPortfolio)["items"][number];

interface Props {
  category: WorkCategoryId;
  filteredItems: PortfolioItem[];
  activeIndex: number;
  setActiveIndex: (index: number) => void;
  isMd: boolean;
}

export default function VideographyPortfolioSlider({
  category,
  filteredItems,
  activeIndex,
  setActiveIndex,
  isMd,
}: Props) {
  const swiperRef = useRef<SwiperRef>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  // Derived from props, not stored in state. Undefined if the index is out of range.
  const activeSlide = filteredItems[activeIndex];
  const togglePlay = () => setIsPlaying((prev) => !prev);

  const updateEdges = (swiper: SwiperClass) => {
    setAtStart(swiper.isBeginning || swiper.isLocked);
    setAtEnd(swiper.isEnd || swiper.isLocked);
  };

  const applySwipeProgress = (swiper: SwiperClass) => {
    swiper.slides.forEach((el) => {
      const raw = Math.abs((el as SlideWithProgress).progress);
      const p = Number.isFinite(raw) ? Math.min(raw, 1) : 0;
      el.style.setProperty("--swipe-progress", String(p));
    });
  };

  const syncSwiper = (swiper: SwiperClass) => {
    applySwipeProgress(swiper);
    updateEdges(swiper);
  };

  const handleSlideChange = (swiper: SwiperClass) => {
    setActiveIndex(swiper.activeIndex);
    updateEdges(swiper);
  };

  const syncTransition = (swiper: SwiperClass, duration: number) => {
    swiper.slides.forEach((el) => {
      el.style.transitionDuration = `${duration}ms`;
    });
  };

  const handleNextSlide = () => swiperRef.current?.swiper.slideNext();
  const handlePrevSlide = () => swiperRef.current?.swiper.slidePrev();
  const toggleActiveVideoSound = () => {
    swiperRef.current?.swiper.slides[activeIndex]
      ?.querySelector("video")
      ?.click();
  };

  return (
    <section className="flex flex-col gap-y-8 md:gap-y-4 md:border-4 md:border-white">
      <Swiper
        ref={swiperRef}
        key={category}
        spaceBetween={24}
        watchSlidesProgress
        onSwiper={syncSwiper}
        onInit={syncSwiper}
        onUpdate={syncSwiper}
        onResize={syncSwiper}
        onProgress={syncSwiper}
        onSetTransition={syncTransition}
        onSlideChange={handleSlideChange}
        className="w-full">
        {filteredItems.map((slide, index) => {
          const isActive = index === activeIndex && (!isMd || isPlaying);
          return (
            <SwiperSlide
              key={`${index}-${slide.client}`}
              className="transition-transform duration-0 ease-[ease] translate-y-[calc(var(--swipe-progress,0)*12.5rem)] md:translate-y-0">
              <figure className="grid grid-cols-1 gap-y-4 md:gap-y-0">
                <div className="mt-8 md:mt-0 md:px-14 md:pt-10">
                  <VideoClip
                    src={slide.src}
                    isActive={isActive}
                    toggleMuteCaption={!isMd}
                    captionAtTop
                    captionClassName="mb-0"
                    captionTextClassName="text-white/75"
                    className="w-full h-full object-cover scale-[1.05] mt-2 md:pointer-events-none"
                  />
                </div>

                {!isMd && (
                  <figcaption className="grid grid-cols-1 gap-y-3 ">
                    <h3 className="text-heading-3 font-extrabold bg-yellow  text-black text-center py-3 px-8 leading-none">
                      {slide.client}
                    </h3>
                    <div className="flex flex-col gap-y-2 text-white">
                      <h4 className="font-bold">{slide.category}</h4>
                      <p>{slide.description}</p>
                    </div>
                  </figcaption>
                )}
              </figure>
            </SwiperSlide>
          );
        })}
      </Swiper>

      {isMd && activeSlide && (
        <div className="grid grid-cols-3 text-white gap-y-4">
          {/* ------- Media Controls ------------ */}
          <div className="col-start-2 flex justify-center items-center gap-x-2">
            <button
              type="button"
              aria-label="Play Previous"
              className="media-control-button"
              onClick={handlePrevSlide}>
              <CgPlayTrackPrev className="w-full h-full" />
            </button>
            <button
              type="button"
              aria-label="Play video"
              className="media-control-button outline-3 rounded-full grid items-center p-2.5"
              onClick={togglePlay}>
              {!isPlaying && (
                <PlayIcon className="w-full h-full ml-0.5 fill-current" />
              )}
              {isPlaying && (
                <PauseIcon className="w-full h-full fill-current" />
              )}
            </button>
            <button
              type="button"
              aria-label="Play Next"
              className="media-control-button"
              onClick={handleNextSlide}>
              <CgPlayTrackNext className="w-full h-full" />
            </button>
          </div>
          {/* ------- Volume Control ------------ */}
          <div className="pr-7 col-start-3 flex items-center justify-end">
            <button
              className="media-control-button p-2"
              onClick={toggleActiveVideoSound}>
              <VolumeIcon />
            </button>
          </div>

          <div
            aria-live="polite"
            className="col-span-3 grid grid-cols-[1fr_2fr] gap-x-4 border-white border-t-4 @container">
            <h3 className="text-[clamp(1.5rem,1rem+1.5cqi,2rem)] font-extrabold bg-white text-black text-center py-3 px-4 flex items-center justify-center leading-none">
              {activeSlide.client}
            </h3>
            <div className="flex flex-col gap-y-2 text-white p-8">
              <h4 className="font-bold">{activeSlide.category}</h4>
              <p>{activeSlide.description}</p>
            </div>
          </div>
        </div>
      )}

      {!isMd && (
        <div className="flex justify-center">
          <CarouselControls
            onNext={handleNextSlide}
            onPrevious={handlePrevSlide}
            disableNext={atEnd}
            disablePrevious={atStart}
            className="bg-yellow shadow-below w-7"
          />
        </div>
      )}
    </section>
  );
}
