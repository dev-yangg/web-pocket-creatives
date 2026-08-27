import { Swiper, SwiperSlide } from "swiper/react";
import { useBreakpoint } from "../../../hooks/useBreakpoint";
import { useScreen } from "../../../hooks/useScreen";
import type { HighlightText } from "../../../types";
import { HighlightedText } from "../../../components/HighlightedText";

interface ServicesProps extends HighlightText {
  type: string;
  headline: string;
  highlight: string;
  highlightClassName: string;
  description: string[];
  display: string;
  className?: string;
}

const services: ServicesProps[] = [
  {
    type: "Video production",
    headline: "We're a video production company",
    highlight: "video production",
    highlightClassName: "text-lightblue",
    description: [
      "As a video production company, we deliver high quality and engaging content for commercial, corporate, and promotional use. We create TV adverts, brand films, promotional videos, crowdfunding campaign videos, and video content for social media. Our professional video team knows how to craft the right elements together to convey your messages and tell your story.",
      "What are you looking for in a video production company? If it’s a creative team who are trustworthy, knowledgeable, enjoyable to work with and well-priced, then we might just be the right fit for you.",
    ],
    display: "/images/about/video-prod-display.webp",
  },
  {
    type: "Photography",
    headline: "and a photography company too…",
    highlight: "photography company",
    highlightClassName: "text-yellow",
    description: [
      "As a photography company, we're able to squeeze every pixel to deliver images that perform. A photographer must know how to communicate, and view a project from different perspectives, knowing how to create images that jump out and catch attention. We strive to do just that. We offer product photography, people photography and lifestyle photography across a wide range of sectors.",
      "As a content creation company, we know how to give you the best of both worlds: through the use of video production to tell a story across multiple shots, or where a single photograph has to say it all.",
    ],
    display: "/images/about/photo-prod-display.webp",
  },
];

export default function Services() {
  const { md, lg } = useBreakpoint();
  const isLg = useScreen(lg);
  return (
    <section className="py-18">
      {!isLg ? (
        <div className="content-boundary">
          <Swiper
            slidesPerView={1.16}
            spaceBetween={32}
            breakpoints={{ [md]: { slidesPerView: 1.5 } }}>
            {services.map((service) => (
              <SwiperSlide
                key={service.type}
                className="[&:nth-child(2)_section_img]:row-start-1 [&:nth-child(2)_section_img]:mb-8">
                <ServiceContent
                  type={service.type}
                  headline={service.headline}
                  highlight={service.highlight}
                  highlightClassName={service.highlightClassName}
                  description={service.description}
                  display={service.display}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      ) : (
        <div className="grid grid-cols-[minmax(0,1fr)_minmax(min(1440px,100%),1fr)_minmax(0,1fr)] lg:gap-y-18">
          {services.map((service) => (
            <ServiceContent
              type={service.type}
              headline={service.headline}
              highlight={service.highlight}
              highlightClassName={service.highlightClassName}
              description={service.description}
              display={service.display}
            />
          ))}
        </div>
      )}
    </section>
  );
}

function ServiceContent({
  headline,
  description,
  highlight,
  highlightClassName,
  type,
  display,
}: ServicesProps) {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-[minmax(0,2fr)_minmax(0,1.5fr)] lg:nth-[2]:grid-cols-[minmax(0,1.5fr)_minmax(0,2fr)] gap-4 lg:gap-x-8 lg:col-start-2 lg:[&:nth-child(2)_img]:col-start-1 lg:[&:nth-child(2)_div]:col-start-2 lg:[&:nth-child(2)_*]:row-start-1">
      <div className="flex flex-col lg:py-4 lg:px-8">
        <h3 className="font-bold leading-none mb-4 lg:mb-8">
          <HighlightedText
            text={headline}
            highlight={highlight}
            highlightClassName={highlightClassName}
          />
        </h3>
        <div className="flex flex-col gap-y-4">
          {description.map((descrip) => (
            <p key={type}>{descrip}</p>
          ))}
        </div>
      </div>
      <img src={display} alt={`${type} display`} />
    </section>
  );
}
