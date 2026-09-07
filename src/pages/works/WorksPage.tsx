import { useState } from "react";
import CategoryOverview from "./sections/CategoryOverview";
import WorksCategory from "./sections/WorksCategory";
import Videography from "./sections/Videography";
import Photography from "./sections/Photography";
import { getWorks } from "../../lib/services/works";

export default function WorksPage() {
  const localWorks = getWorks();
  const [category, setCategory] = useState(localWorks[0].category ?? "");
  const activeCategory = localWorks.find((work) => work.category === category);
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
