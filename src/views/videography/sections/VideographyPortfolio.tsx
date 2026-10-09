import WorkCategorySelection from "../../../components/WorkCategorySelection";
import { videoProdPortfolio } from "../data";
import {
  workCategories,
  type WorkCategory,
  type WorkCategoryId,
} from "../../../data/globals";
import { useState } from "react";
import { useBreakpoint } from "../../../hooks/useBreakpoint";
import { useScreen } from "../../../hooks/useScreen";
import { cn } from "../../../lib/utils";
import VideographyPortfolioSlider from "../components/VideographyPortfolioSlider";

export default function VideographyPortfolio() {
  const { headline, featured, items } = videoProdPortfolio;
  const [category, setCategory] = useState<WorkCategoryId>(
    workCategories[0].id,
  );
  const [activeIndex, setActiveIndex] = useState(0);
  const { md } = useBreakpoint();
  const isMd = useScreen(md);

  const filteredItems = items.filter((item) => item.categoryId === category);
  const featuredCategories = featured
    .map((id) => workCategories.find((c) => c.id === id))
    .filter((c): c is WorkCategory => c !== undefined);

  const handleCategoryChange = (id: WorkCategoryId) => {
    setCategory(id);
    setActiveIndex(0);
  };

  const MD_LABELS: Partial<Record<WorkCategoryId, string>> = {
    beauty: "Beauty & Cosmetics",
    food: "Food & Drinks",
  };

  return (
    <section className="bg-blue py-14 md:py-24">
      <div className="content-boundary">
        <header className="flex flex-col gap-y-4">
          <h2 className="text-heading-2 md:text-center leading-none font-extrabold text-white">
            {headline}
          </h2>
          {!isMd && (
            <div className="flex justify-center">
              <WorkCategorySelection
                options={featuredCategories}
                value={category}
                onChange={handleCategoryChange}
              />
            </div>
          )}
          {isMd && (
            <div
              role="group"
              className="flex gap-x-6 py-4 overflow-x-auto [&>*:first-child]:ml-auto [&>*:last-child]:mr-auto scrollbar-none">
              {featuredCategories.map((feat) => (
                <button
                  key={feat.id}
                  onClick={() => handleCategoryChange(feat.id)}
                  className={cn(
                    "capitalize text-white px-4 py-1 font-bold rounded-2xl hover:bg-yellow hover:text-black transition-colors duration-180 ease-swap text-nowrap",
                    {
                      "bg-yellow text-black": feat.id === category,
                    },
                  )}>
                  {MD_LABELS[feat.id] ?? feat.label}
                </button>
              ))}
            </div>
          )}
        </header>
        <VideographyPortfolioSlider
          category={category}
          filteredItems={filteredItems}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
          isMd={isMd}
        />
      </div>
    </section>
  );
}
