import { useEffect, useRef, useState } from "react";
import { cn } from "../../../lib/utils";
import CarouselControls from "../../../components/CarouselControls";

export type Feature = {
  label: string;
  description: string;
};

export type FeatureCarouselProps = {
  featureList: Feature[];
};
export default function FeatureCarousel({
  featureList,
  className,
}: FeatureCarouselProps & { className?: string }) {
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
            key={feat.label}
            ref={(element) => {
              itemRefs.current[index] = element;
            }}
            className="lg:shrink-0 lg:w-[calc((100%-var(--col-gap)*2)/var(--visible-cols))]">
            <article className="flex flex-col gap-1.5">
              <h3>{feat.label}</h3>
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
