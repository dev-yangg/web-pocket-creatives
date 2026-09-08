import type { FeaturedWorksSample } from "../data";
import AutoplayToggle from "../components/AutoplayToggle";
import FeaturedCarousel from "../components/FeaturedCarousel";
import { useState } from "react";
import Skeleton from "../components/Skeleton";

interface Props {
  category: string;
  featured: FeaturedWorksSample[];
}
export default function FeaturedWorks({ category, featured }: Props) {
  const [isCarouselPaused, setIsCarouselPaused] = useState(false);
  return (
    <section className="pb-14 flex flex-col">
      <div className="w-[min(1440px,100%)] mx-auto">
        {featured.length < 1 && (
          <div className="grid grid-cols-3 gap-x-8 px-8">
            {Array.from({ length: 3 }).map((_, index) => (
              <Skeleton key={index} />
            ))}
          </div>
        )}
        {featured.length > 0 && (
          <FeaturedCarousel
            featured={featured}
            isCarouselPaused={isCarouselPaused}
          />
        )}
      </div>
      <div className="content-boundary flex justify-between items-center mt-4">
        <h2 className="uppercase text-blue font-extrabold">{category}</h2>
        <AutoplayToggle
          isCarouselPaused={isCarouselPaused}
          onClick={() => setIsCarouselPaused((prev) => !prev)}
        />
      </div>
    </section>
  );
}
