import { Swiper, SwiperSlide } from "swiper/react";
import { useBreakpoint } from "../../../hooks/useBreakpoint";
import type { HighlightText } from "../../../types";
import { HighlightedText } from "../../../components/HighlightedText";
import { cn } from "../../../lib/utils";

interface MilestoneContent extends Partial<HighlightText> {
  content: string;
  landmarkLabel?: string;
  className?: string;
  highlight?: string;
  highlightClassName?: string;
}

const contents: MilestoneContent[] = [
  {
    content:
      "Pocket Creatives launched in the winter of 2017, formed as a limited company following the team working under the name of Steven Mayatt Creative since 2015. Pocket is the next step in our evolution.",
    landmarkLabel: "2017",
    highlight: "Pocket Creatives",
    highlightClassName: " font-black",
    className: "text-heading-3",
  },
  {
    content:
      "Steven's professional history started in broadcasting, supporting mainstream television programmes such as BBC's Watchdog, Crimewatch and Horizon and leading a 10-person team running 24/7 to make this happen.",
  },
  {
    content:
      "But photography and video production was always the passion, and he burnt all the hours in the day running a small, innovative corporate video production company alongside called Screensaver which could boast clients such as Tower Bridge, the Museum of London and the National Portrait Gallery. This paved the way to progress full time into the production world and merged into Tailwind Media in 2010.",
  },
  {
    content:
      "For 6 years, Steven oversaw the production team, making impressive in-roads into the UK corporate video market, working with some of the country's biggest names. Highlights would include a huge change campaign for Arcadia; helping to update the internal communications video magazine for electronics giant Philips, working with pop star Olly Murs for the Pringles 25th birthday adverts, and overseeing a multitude of projects for Tesco, Currys PC World and Groupon to name just a few.",
  },
  {
    content:
      "2015 saw the creation of SMC, after Steven wanted to take a different direction, by offering both video and photography. Haider Romero Perez and Lauren Hodge were invited to join, bringing a wealth of skill, enthusiasm, and drive and within 2 years have become co-owners of the newly incorporated Pocket Creatives.",
    highlight: "Pocket Creatives",
    highlightClassName: "underline",
  },
  {
    content:
      "\"SMC provided a wonderful opportunity to meet new business owners and establish ourselves in new markets, offering new video and photography services and building a friendly and creative business where we're building long-term working relationships with our clients. Pocket Creatives couldn't have been launched without the faith and trust shown in us by our clients, and we look forward to growing alongside them over the years to come.\"",
  },
  {
    content:
      "Now, embarking on our 6th year in business together, we've reached one milestone after the next. We boast an enviable client list, with impressive client retention numbers and have built a genuinely wonderful team around us.",
    landmarkLabel: "2025",
    className: "text-heading-3",
  },
];
export default function MilestoneCarousel() {
  const { md } = useBreakpoint();
  return (
    <div className="relative w-full">
      {/* milestone line thing in the middle */}
      <div className="pointer-events-none absolute left-1 right-1 top-1/2 h-0.5 -translate-y-1/2 bg-black z-0"></div>

      <Swiper
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 1.25 },
          [md]: { slidesPerView: 2.15 },
        }}
        className="w-full px-1">
        {contents.map((milestone, i) => {
          const isTop = i % 2 === 0;
          const isFirst = i === 0;
          const isLast = i === contents.length - 1;
          return (
            <SwiperSlide key={i} className="h-auto">
              <div className="grid grid-rows-[1fr_auto_1fr] h-full">
                <div className="flex items-end justify-center px-4 pb-4">
                  {/* top content */}
                  {isTop && (
                    <Content
                      content={milestone.content}
                      highlight={milestone.highlight}
                      highlightClassName={milestone.highlightClassName}
                      className={milestone.className}
                    />
                  )}
                </div>
                {/* landmark thing in the middle */}
                <div className="relative flex items-center justify-center">
                  {isFirst && (
                    <div className="pointer-events-none absolute left-0 top-1/2 -translate-y-1/2 w-4 aspect-square rotate-45 bg-black z-10" />
                  )}
                  {isLast && (
                    <div className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 w-4 aspect-square rotate-45 bg-black z-10" />
                  )}
                  <span
                    className={cn(
                      "@container z-10 inline-grid place-content-center aspect-square rounded-full bg-blue text-white  text-center",
                      {
                        "w-8": !milestone.landmarkLabel,
                      },
                      {
                        "w-25 text-[1.15em] md:w-32 md:text-[2.15em]":
                          milestone.landmarkLabel,
                      },
                    )}>
                    {milestone.landmarkLabel && milestone.landmarkLabel}
                  </span>
                </div>

                {/* bottom content */}
                <div className="flex items-start justify-center px-4 pt-4">
                  {!isTop && (
                    <Content
                      content={milestone.content}
                      highlight={milestone.highlight}
                      highlightClassName={milestone.highlightClassName}
                      className={milestone.className}
                    />
                  )}
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}

function Content({
  content,
  highlight,
  highlightClassName,
  className,
}: Pick<
  MilestoneContent,
  "content" | "highlight" | "highlightClassName" | "className"
>) {
  return (
    <p className={cn("text-black leading-tight font-bold", className)}>
      {highlight ? (
        <HighlightedText
          text={content}
          highlight={highlight}
          highlightClassName={highlightClassName}
        />
      ) : (
        content
      )}
    </p>
  );
}
