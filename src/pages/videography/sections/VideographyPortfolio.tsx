import {
  Swiper,
  SwiperSlide,
  type SwiperClass,
  type SwiperRef,
} from "swiper/react";
import VideoClip from "../../../components/VideoClip";
import WorkCategorySelection from "../../../components/WorkCategorySelection";
import { videoProdPortfolio } from "../data";
import { workCategories, type WorkCategoryId } from "../../../data/globals";
import { useRef, useState } from "react";
import CarouselControls from "../../../components/CarouselControls";
import { useBreakpoint } from "../../../hooks/useBreakpoint";
import { useScreen } from "../../../hooks/useScreen";
import { cn } from "../../../lib/utils";

type SlideWithProgress = HTMLElement & { progress: number };

export default function VideographyPortfolio() {
  const swiperRef = useRef<SwiperRef>(null);

  const { headline, featured, items } = videoProdPortfolio;
  const [category, setCategory] = useState<WorkCategoryId>(
    workCategories[0].id,
  );
  const [activeIndex, setActiveIndex] = useState(0);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);
  const { md } = useBreakpoint();
  const isMd = useScreen(md);

  const filteredItems = items.filter((item) => item.categoryId === category);

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

  const handleCategoryChange = (id: WorkCategoryId) => {
    setCategory(id);
    setActiveIndex(0);
  };

  const syncTransition = (swiper: SwiperClass, duration: number) => {
    swiper.slides.forEach((el) => {
      el.style.transitionDuration = `${duration}ms`;
    });
  };

  return (
    <section className="bg-blue py-14 md:py-24">
      <div className="content-boundary">
        <header className="flex flex-col gap-y-4">
          <h2 className="text-heading-2 md:text-center leading-none font-extrabold text-white">
            {headline}
          </h2>
          {!isMd && (
            <div className="flex justify-center">
              <WorkCategorySelection
                options={workCategories}
                value={category}
                onChange={handleCategoryChange}
              />
            </div>
          )}
          {isMd && (
            <div role="group" className="flex gap-x-6 justify-center py-4">
              {featured.map((feat) => (
                <button
                  key={feat}
                  onClick={() => handleCategoryChange(feat)}
                  className={cn(
                    "capitalize text-white px-4 py-1 font-bold rounded-2xl hover:bg-yellow hover:text-black transition-colors duration-180 ease-swap",
                    {
                      "bg-yellow text-black": feat === category,
                    },
                  )}>
                  {feat}
                </button>
              ))}
            </div>
          )}
        </header>
        <section className="flex flex-col gap-y-8">
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
              const isActive = index === activeIndex;
              return (
                <SwiperSlide
                  key={`${index}-${slide.client}`}
                  style={{
                    transform:
                      "translateY(calc(var(--swipe-progress, 0) * 12.5rem))",
                  }}
                  className="transition-transform duration-0 ease-[ease] md:border-4 md:border-white">
                  <figure className="grid grid-cols-1 gap-y-4 md:gap-y-0">
                    <div className="mt-8 md:mt-0 md:p-14">
                      <VideoClip
                        src={slide.src}
                        isActive={isActive}
                        toggleMuteCaption={!isMd}
                        captionAtTop
                        captionClassName="mb-0"
                        captionTextClassName="text-white/75"
                        className="w-full h-full object-cover scale-[1.05] mt-2"
                      />
                    </div>

                    <figcaption className="grid grid-cols-1 md:grid-cols-[auto_1fr] gap-y-3 md:gap-x-4 md:border-white md:border-t-4">
                      <h3 className="text-heading-3 font-extrabold bg-yellow md:bg-white text-black text-center py-3 px-8 md:flex md:items-center">
                        {slide.client}
                      </h3>
                      <div className="flex flex-col gap-y-2 text-white md:p-8">
                        <h4 className="font-bold">{slide.category}</h4>
                        <p>{slide.description}</p>
                      </div>
                    </figcaption>
                  </figure>
                </SwiperSlide>
              );
            })}
          </Swiper>
          <div className="flex md:hidden justify-center">
            <CarouselControls
              onNext={() => swiperRef.current?.swiper.slideNext()}
              onPrevious={() => swiperRef.current?.swiper.slidePrev()}
              disableNext={atEnd}
              disablePrevious={atStart}
              className="bg-yellow shadow-below w-7"
            />
          </div>
        </section>
      </div>
    </section>
  );
}
