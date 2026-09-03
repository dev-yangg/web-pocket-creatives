import { useState } from "react";
import CategoryOverview from "./sections/CategoryOverview";
import WorksCategory from "./sections/WorksCategory";
import { works } from "./data";
import Videography from "./sections/Videography";
import Photography from "./sections/Photography";

export default function WorksPage() {
  const [category, setCategory] = useState(works[1].category ?? "");
  const activeCategory = works.find((work) => work.category === category);
  const {
    featured = [],
    videography = [],
    photography = [],
  } = activeCategory ?? {};
  return (
    <>
      <WorksCategory
        category={category}
        featured={featured}
        setCategory={setCategory}
      />
      <CategoryOverview
        category={category}
        videography={videography}
        photography={photography}
      />
      <Videography category={category} items={videography} />
      <Photography category={category} items={photography} />
    </>
  );
}
