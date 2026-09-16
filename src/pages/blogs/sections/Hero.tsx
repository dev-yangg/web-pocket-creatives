import { Swiper, SwiperSlide } from "swiper/react";
import { blogs, type Blog } from "../data";
import { Link } from "react-router";
import { BsArrowRight } from "react-icons/bs";
import CarouselControls from "../../../components/CarouselControls";
import { useRef, useState } from "react";
import type { SwiperRef, SwiperClass } from "swiper/react";
import { useBreakpoint } from "../../../hooks/useBreakpoint";

export default function Hero() {
  const { md } = useBreakpoint();
  const swiperRef = useRef<SwiperRef>(null);
  const [canGoNext, setCanGoNext] = useState(true);
  const [canGoPrev, setCanGoPrev] = useState(false);

  const updateEdges = (swiper: SwiperClass) => {
    setCanGoNext(swiper.isBeginning);
    setCanGoPrev(swiper.isEnd);
  };

  return (
    <section className="pb-24">
      <div className="content-boundary">
        <Swiper
          ref={swiperRef}
          slidesPerView={1}
          spaceBetween={54}
          breakpoints={{ [md]: { slidesPerView: 1.15 } }}
          className="w-full"
          onSwiper={updateEdges}
          onSlideChange={updateEdges}
          onResize={updateEdges}>
          {blogs.map((blog) => (
            <SwiperSlide>
              <SlideMedia
                title={blog.title}
                tags={blog.tags}
                image={blog.image}
                slug={blog.slug}
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="grid place-items-center pt-6 pb-4">
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

function SlideMedia({ title, tags, image, slug }: Blog) {
  return (
    <figure className="relative aspect-1/1.5 md:aspect-2/2 lg:aspect-3/2 grid items-end @container">
      <div className="absolute inset-0">
        <img
          src={image}
          alt={title}
          className="object-cover object-top w-full h-full"
        />
      </div>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-linear-to-t from-yellow from-10% via-yellow/50 via-30% to-transparent"
      />
      <figcaption className="px-4 md:px-10 pb-7 md:pb-14 z-10 flex flex-col md:gap-y-2 items-start">
        <h2 className="text-[clamp(1.375rem,1.25rem+1cqw,2rem)] bg-blue w-fit text-white font-bold p-3 leading-none text-balance mb-2 md:mb-0">
          {title}
        </h2>
        <ul className="flex items-center gap-x-[.5ch]">
          {tags.map((tag, index) => {
            const lastItem = index === tags.length - 1;

            return (
              <li key={tag} className="font-extrabold capitalize">
                {tag}
                {!lastItem && ","}
              </li>
            );
          })}
        </ul>
        <Link to={slug} className="flex items-center gap-x-2 group">
          <span className="group-hover:translate-x-0.75 transition-transform duration-300 ease-in-out will-change-transform">
            Read More
          </span>
          <span className="inline-block align-[-0.25em] group-hover:translate-x-1.25 transition-transform duration-300 ease-in-out">
            <BsArrowRight className="w-full h-full stroke-1" />
          </span>
        </Link>
      </figcaption>
    </figure>
  );
}
