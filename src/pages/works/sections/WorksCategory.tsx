import { works, type FeaturedWorksSample } from "../data";
import { cn } from "../../../lib/utils";
import FeaturedCarousel from "../components/FeaturedCarousel";

interface Props {
  category: string;
  featured: FeaturedWorksSample[];
  setCategory: (category: string) => void;
}

export default function WorksCategory({
  category,
  featured,
  setCategory,
}: Props) {
  return (
    <section>
      <header className="content-boundary flex flex-col justify-center items-center text-center gap-y-6">
        <h3 className="capitalize font-extrabold">View by Category</h3>
        <div
          role="tablist"
          aria-label="Work Categories"
          className="flex gap-x-6 flex-wrap justify-center">
          {works.map((work) => (
            <button
              key={work.category}
              onClick={() => setCategory(work.category)}
              className={cn(
                "capitalize hover:text-yellow transition-colors duration-150 ease-in-out",
                {
                  "text-yellow": work.category === category,
                },
              )}>
              {work.category}
            </button>
          ))}
        </div>
      </header>
      <FeaturedCarousel category={category} featured={featured} />
    </section>
  );
}
