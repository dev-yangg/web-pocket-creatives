import { useRef, useState, useCallback } from "react";

export function useCarouselControls<T extends HTMLElement = HTMLLIElement>(
  itemCount: number,
) {
  const [activeIndex, setActiveIndex] = useState(0);
  const itemRefs = useRef<(T | null)[]>([]);

  const setItemRef = useCallback(
    (index: number) => (el: T | null) => {
      itemRefs.current[index] = el;
    },
    [],
  );

  const goToIndex = useCallback(
    (index: number) => {
      const clamped = Math.max(0, Math.min(index, itemCount - 1));
      setActiveIndex(clamped);
      itemRefs.current[clamped]?.scrollIntoView({
        behavior: "smooth",
        inline: "start",
        block: "nearest",
      });
    },
    [itemCount],
  );

  const handlePrevious = useCallback(
    () => goToIndex(activeIndex - 1),
    [activeIndex, goToIndex],
  );
  const handleNext = useCallback(
    () => goToIndex(activeIndex + 1),
    [activeIndex, goToIndex],
  );

  return {
    activeIndex,
    setActiveIndex,
    setItemRef,
    goToIndex,
    handlePrevious,
    handleNext,
  };
}
