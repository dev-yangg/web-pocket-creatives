import { useMemo, useState } from "react";
import FilterTabs from "../components/FilterTabs";
import { blogs, blogsPagination } from "../data";
import BlogsGrid from "../components/BlogsGrid";

export default function BlogsPagination() {
  const { headline, filters } = blogsPagination;
  const [category, setCategory] = useState(filters[0]);

  const handleSelectCategory = (category: string) => {
    setCategory(category);
  };

  const filteredBlogs = useMemo(() => {
    return blogs.filter((blog) =>
      blog.tags.some((tag) => tag.toLowerCase() === category.toLowerCase()),
    );
  }, [category]);

  return (
    <section className="py-16 md:pt-4 md:pb-24">
      <div className="content-boundary flex flex-col gap-y-10">
        <header className="flex flex-col items-center gap-y-3">
          <h1 className="text-heading-1 font-extrabold">{headline}</h1>
          <FilterTabs
            filters={filters}
            selectedCategory={category}
            onClick={handleSelectCategory}
          />
        </header>
        <BlogsGrid blogs={filteredBlogs} />
      </div>
    </section>
  );
}
