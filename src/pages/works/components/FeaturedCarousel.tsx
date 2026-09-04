import { cn } from "../../../lib/utils";
import type { FeaturedWorksSample } from "../data";
import AutoplayToggle from "./AutoplayToggle";
import Skeleton from "./Skeleton";

interface Props {
  category: string;
  featured: FeaturedWorksSample[];
}
export default function FeaturedCarousel({ category, featured }: Props) {
  return (
    <section className="pb-14">
      {featured.length === 0 && (
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 py-8 px-4">
          {Array.from({ length: 3 }).map((_, index) => (
            <Skeleton
              key={index}
              className={cn({ "hidden sm:flex": index === 1 })}
            />
          ))}
        </div>
      )}
      <div className="content-boundary flex justify-between items-center">
        <h2 className="uppercase text-blue font-extrabold">{category}</h2>
        <AutoplayToggle />
      </div>
    </section>
  );
}
