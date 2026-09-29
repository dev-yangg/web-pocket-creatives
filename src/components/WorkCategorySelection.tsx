// import { workCategories } from "../data/globals";

import { useState } from "react";
import { workCategories } from "../data/globals";

interface Props {
  ariaLabel?: string;
}

export default function WorkCategorySelection({ ariaLabel }: Props) {
  const [selectedCategory, setSelectedCategory] = useState(workCategories[0]);

  return (
    <div role="group" aria-label={ariaLabel ?? "Filter work by category"}>
      <button>
        <span>{selectedCategory.label}</span>
      </button>
    </div>
  );
}
