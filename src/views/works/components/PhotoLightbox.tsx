import { Swiper, SwiperSlide } from "swiper/react";
import type { SwiperClass } from "swiper/react";
import type { GalleryImage } from "../data";
import { Thumbs, Navigation } from "swiper/modules";
import { useState } from "react";
import { useBreakpoint } from "../../../hooks/useBreakpoint";
import LightboxCloseButton from "../../../components/LightboxCloseButton";
import { useLockBodyScroll } from "../../../hooks/useLockBodyScroll";

export interface PhotoLightboxProps {
  images: GalleryImage[];
  startIndex: number;
}

export default function PhotoLightbox({
  props,
  onClose,
}: {
  props: PhotoLightboxProps;
  onClose: () => void;
}) {
  useLockBodyScroll();
  const { images, startIndex } = props;
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperClass | null>(null);
  const { md } = useBreakpoint();
  return (
    <div
      className="overlay flex md:justify-center items-center"
      onClick={onClose}>
      <div
        className="w-full h-dvh md:h-auto md:w-[min(1200px,100%)] flex flex-col items-center py-6 px-4 md:py-0"
        onClick={(e) => e.stopPropagation()}>
        <div className="flex-1 min-h-0 w-auto max-w-full self-center aspect-9/16 md:w-full md:flex-none md:aspect-[2.39] relative isolate">
          <LightboxCloseButton onClose={onClose} />
          <Swiper
            initialSlide={startIndex}
            modules={[Thumbs, Navigation]}
            thumbs={{ swiper: thumbsSwiper }}
            navigation
            className="w-full h-full">
            {images.map((img) => (
              <SwiperSlide key={img.id} className="w-full h-full">
                <img
                  src={img.path}
                  alt={img.alt}
                  className="w-full h-full object-cover object-center md:object-contain"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Thumbnail strip */}
        <Swiper
          onSwiper={setThumbsSwiper}
          slidesPerView={4}
          spaceBetween={24}
          watchSlidesProgress
          breakpoints={{ [md]: { slidesPerView: 7 } }}
          className="shrink-0 w-full mt-4 h-20">
          {images.map((img) => (
            <SwiperSlide
              key={img.id}
              className="cursor-pointer opacity-65 brightness-55 [&.swiper-slide-thumb-active]:opacity-100 [&.swiper-slide-thumb-active]:brightness-100">
              <img
                src={img.path}
                alt={img.alt}
                className="w-full h-full object-cover"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
