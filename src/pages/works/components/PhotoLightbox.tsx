import { Swiper, SwiperSlide } from "swiper/react";
import type { SwiperClass } from "swiper/react";
import type { GalleryImage } from "../data";
import { IoClose } from "react-icons/io5";
import { Thumbs, Navigation } from "swiper/modules";
import { useState } from "react";
import { useBreakpoint } from "../../../hooks/useBreakpoint";

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
  const { images, startIndex } = props;
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperClass | null>(null);
  const { md } = useBreakpoint();
  return (
    <div className="fixed inset-0 bg-black/75 z-lightbox flex md:justify-center items-center backdrop-blur-sm">
      <div className="w-full h-dvh md:h-auto md:w-[min(1200px,100%)] flex flex-col items-center py-6 px-4 md:py-0">
        <div className="flex-1 min-h-0 w-auto max-w-full self-center aspect-9/16 md:w-full md:flex-none md:aspect-[2.39] relative isolate">
          <button
            onClick={onClose}
            className="right-4 top-4 absolute w-8 aspect-square rounded-full bg-yellow text-black z-10">
            <IoClose className="w-full h-full" />
          </button>
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
