import { Swiper, SwiperSlide, type SwiperRef } from "swiper/react";
import VideoClip from "../../../components/VideoClip";
import { useBreakpoint } from "../../../hooks/useBreakpoint";
import { useRef } from "react";

interface Work {
  id: string;
  type: "image" | "video";
  src: string;
  tag: string;
  title: string;
  description: string;
}
const ourWorks: Work[] = [
  {
    id: "soap-and-glory",
    type: "image",
    src: "/our-works/soapglory.png",
    tag: "Soap And Glory",
    title: "People & Portrait Photography",
    description:
      "Expertly delivered product photography and product videos. From simple pack shots to creative product photography and engaging product video, high quality imagery is designed to entice the viewer and convert to a customer.",
  },
  {
    id: "hairo-brand-advert",
    type: "video",
    src: "/our-works/hairO-brand-advert.mp4",
    tag: "HairO Brand Advert",
    title: "Beauty Video Production",
    description:
      "Expertly crafted cosmetics, personal care and beauty video and beauty photography. Creating both usage and creative product content, high quality photography shows your beauty brand in its best light.",
  },
  {
    id: "smiles-alliance",
    type: "image",
    src: "/our-works/smiles-alliance.png",
    tag: "Smiles Alliance",
    title: "People & Portrait Photography",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras gravida metus eget orci iaculis, eu ornare augue auctor. Donec at sagittis magna.",
  },
  {
    id: "the-box-bakery",
    type: "video",
    src: "/our-works/the-box-bakery.mp4",
    tag: "The Box Bakery",
    title: "Food Video Production",
    description:
      "Expertly delivered food photography and drinks photography. Focusing on product, packshot, recipe or usage, high quality photography treats your viewer to the optimal view of your brand.",
  },
];

export default function WorksCarousel() {
  const { md, lg } = useBreakpoint();
  const swiperRef = useRef<SwiperRef>(null);

  return (
    <Swiper
      ref={swiperRef}
      slidesPerView={1.15}
      spaceBetween={28}
      loop
      slideToClickedSlide
      breakpoints={{
        [md]: { slidesPerView: 2, centeredSlides: false },
        [lg]: { slidesPerView: 3, centeredSlides: true },
      }}
      className="w-full h-full works-swiper">
      {[...ourWorks, ...ourWorks].map((work, index) => (
        <SwiperSlide key={`${work.id}-${index}`} className="">
          <WorkCard work={work} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

function WorkCard({ work, onClick }: { work: Work; onClick?: () => void }) {
  return (
    <figure
      onClick={onClick}
      className="aspect-2/4 min-[670px]:aspect-2/3.5  flex flex-col justify-end h-full relative ">
      <div className="absolute inset-0 -z-10">
        {work.type === "image" && (
          <img
            src={work.src}
            alt={work.title}
            className="w-full h-full object-cover"
          />
        )}
        {work.type === "video" && (
          <VideoClip
            src={work.src}
            isActive
            className="w-full h-full object-cover"
          />
        )}
      </div>
      <div className="absolute inset-0 bg-linear-to-t from-yellow from-30% via-yellow/40 via-50% to-transparent" />
      <figcaption className="z-10 flex flex-col gap-y-2 py-8 px-4 md:p-8">
        <span className="bg-blue text-white px-1.5 py-0.5 self-start">
          {work.tag}
        </span>
        <div className="flex flex-col gap-y-3">
          <strong className="font-bold">{work.title}</strong>
          <p className="leading-none">{work.description}</p>
        </div>
      </figcaption>
    </figure>
  );
}
