import { Swiper, SwiperSlide } from "swiper/react";
import VideoClip from "../../../components/VideoClip";
import WorkCategorySelection from "../../../components/WorkCategorySelection";
import { videoProdPortfolio } from "../data";

export default function VideographyPortfolio() {
  const { headline, items } = videoProdPortfolio;
  return (
    <section className="bg-blue py-14 md:py-24">
      <div className="content-boundary">
        <header>
          <h2 className="text-heading-2 leading-none font-extrabold text-white">
            {headline}
          </h2>
          <WorkCategorySelection />
          <Swiper className="w-full">
            {items.map((slide) => {
              return (
                <li>
                  <SwiperSlide>
                    <figure className="grid grid-cols-1 gap-y-4">
                      <div className="mt-6">
                        <VideoClip
                          src={slide.src}
                          isActive
                          toggleMuteCaption
                          captionAtTop
                          captionClassName="mb-0"
                          captionTextClassName="text-white/75"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <figcaption className="grid grid-cols-1 gap-y-3">
                        <h3 className="text-heading-3 font-extrabold bg-yellow text-black text-center p-3">
                          {slide.client}
                        </h3>
                        <div className="flex flex-col gap-y-2 text-white">
                          <h4 className="font-bold">{slide.category}</h4>
                          <p>{slide.description}</p>
                        </div>
                      </figcaption>
                    </figure>
                  </SwiperSlide>
                </li>
              );
            })}
          </Swiper>
        </header>
      </div>
    </section>
  );
}
