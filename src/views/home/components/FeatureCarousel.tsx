import { useEffect, useRef, useState } from "react";
import { cn } from "../../../lib/utils";
import CarouselControls from "../../../components/CarouselControls";

const featureList = [
  {
    title: "Proactive",
    description:
      "We pride ourselves on our quality of service above everything else. We've taken the time to build a cracking little team at Pocket, and we make sure that you feel the benefits of working with a dedicated video production company who are there for you, and dedicated to the success of your project.",
  },
  {
    title: "Nerds for Visuals",
    description:
      "Lorem ipsum dolor sit amet consectetur. Fermentum ut laoreet nunc at amet. Pretium sed tristique eu erat dui elementum eu duis. Sem posuere congue pellentesque duis in. Nunc id ridiculus mattis ullamcorper in id accumsan eu habitant. Mollis duis eu tellus aliquam viverra. Amet feugiat id habitasse mauris mauris iaculis. Id at.",
  },
  {
    title: "Valuable",
    description:
      "Lorem ipsum dolor sit amet consectetur. Varius tempor id nulla aliquet gravida. Quis at auctor quis lectus velit id parturient bibendum. Amet a erat faucibus enim orci. Praesent magna facilisi erat eget dictumst nulla nunc. Scelerisque cras viverra ipsum at accumsan a. Sed sollicitudin lacinia amet arcu volutpat. Id.",
  },
  {
    title: "Flexible",
    description:
      "Lorem ipsum dolor sit amet consectetur. Sollicitudin nibh sed nullam commodo volutpat urna mus. Tristique arcu non sed erat amet facilisi aliquet massa feugiat. Ipsum placerat accumsan sagittis egestas sagittis id volutpat. Mauris est lectus libero at sem. Amet magna euismod tristique interdum pretium. Massa venenatis.",
  },
  {
    title: "Normal People",
    description:
      "Lorem ipsum dolor sit amet consectetur. Quis eu aliquam molestie arcu maecenas. Integer volutpat quisque orci facilisis. Et volutpat mauris lacus feugiat tempor. Facilisi risus id egestas eget sit adipiscing nec lectus. Consequat pretium sit in id phasellus vitae mi. Libero tempus ut leo egestas elit. Ut consectetur lacus amet porta.",
  },
  {
    title: "Conscious",
    description:
      "Lorem ipsum dolor sit amet consectetur. Gravida eget sem non feugiat iaculis faucibus. Ut enim semper in commodo neque tortor leo eu. Convallis est in leo porttitor tempor vitae etiam urna. Aliquet fusce dolor aliquet sed dictum. Dolor auctor vitae ultricies nisi ridiculus. Est elementum massa ullamcorper et malesuada et tristique.",
  },
];

export default function FeatureCarousel({ className }: { className?: string }) {
  const listRef = useRef<HTMLUListElement | null>(null);
  const itemRefs = useRef<(HTMLLIElement | null)[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(1);

  useEffect(() => {
    const container = listRef.current;
    const firstItem = itemRefs.current[0];
    if (!container || !firstItem) return;

    const calculateVisibleCount = () => {
      const containerWidth = container.clientWidth;
      const itemWidth = firstItem.getBoundingClientRect().width;

      // read the actual root font-size
      const rootFontSize = parseFloat(
        getComputedStyle(document.documentElement).fontSize,
      );

      // read --col-gap value from the inline style css
      const gapValue =
        getComputedStyle(container).getPropertyValue("--col-gap");
      const gap = parseFloat(gapValue) * rootFontSize;

      if (itemWidth === 0) return;

      // how many (item + gap) pairs fit in the container width
      const count = Math.round((containerWidth + gap) / (itemWidth + gap));
      setVisibleCount(Math.max(1, count));
    };

    calculateVisibleCount();

    const observer = new ResizeObserver(calculateVisibleCount);
    observer.observe(container);

    return () => observer.disconnect();
  }, []);

  const maxIndex = Math.max(0, featureList.length - visibleCount);

  const scrollToIndex = (index: number) => {
    const clamped = Math.max(0, Math.min(index, maxIndex));
    itemRefs.current[clamped]?.scrollIntoView({
      behavior: "smooth",
      inline: "start",
      block: "nearest",
    });
    setActiveIndex(clamped);
  };
  const canGoPrev = activeIndex > 0;
  const canGoNext = activeIndex < maxIndex;
  const handlePrev = () => scrollToIndex(activeIndex - 1);
  const handleNext = () => scrollToIndex(activeIndex + 1);

  return (
    <section className={cn("lg:flex lg:flex-col lg:gap-4", className)}>
      <ul
        ref={listRef}
        style={
          {
            "--col-gap": "2.5rem",
            "--visible-cols": "3",
          } as React.CSSProperties
        }
        className="grid grid-cols-1 md:grid-cols-2 lg:flex gap-(--col-gap) overflow-x-auto snap-x snap-mandatory scroll-smooth scrollbar-none">
        {featureList.map((feat, index) => (
          <li
            key={feat.title}
            ref={(element) => {
              itemRefs.current[index] = element;
            }}
            className="lg:shrink-0 lg:w-[calc((100%-var(--col-gap)*2)/var(--visible-cols))]">
            <article className="flex flex-col gap-1.5">
              <h3>{feat.title}</h3>
              <p>{feat.description}</p>
            </article>
          </li>
        ))}
      </ul>
      <div className="hidden lg:block">
        <CarouselControls
          className="bg-white"
          onPrevious={handlePrev}
          onNext={handleNext}
          disableNext={!canGoNext}
          disablePrevious={!canGoPrev}
        />
      </div>
    </section>
  );
}
