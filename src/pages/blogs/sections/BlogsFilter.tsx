import { useMemo, useRef } from "react";
import FilterTabs from "../components/FilterTabs";
import { blogs, blogsPagination } from "../data";
import BlogsGrid from "../components/BlogsGrid";
import Pagination from "../components/Pagination";
import { useSearchParams } from "react-router";

const PAGE_SIZE = 9;

export default function BlogsFilter() {
  const { headline, filters } = blogsPagination;
  const [searchParams, setSearchParams] = useSearchParams();
  const sectionRef = useRef<HTMLElement | null>(null);

  const category = searchParams.get("category") ?? filters[0];
  const rawPage = Number(searchParams.get("page")) || 1;

  const handleSelectCategory = (nextCategory: string) => {
    setSearchParams(
      { category: nextCategory, page: "1" },
      { preventScrollReset: true },
    );
  };

  const handlePageChange = (nextPage: number) => {
    setSearchParams(
      { category, page: String(nextPage) },
      { preventScrollReset: true },
    );
    sectionRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const filteredBlogs = useMemo(() => {
    return blogs.filter((blog) =>
      blog.tags.some((tag) => tag.toLowerCase() === category.toLowerCase()),
    );
  }, [category]);

  const totalPages = Math.max(1, Math.ceil(filteredBlogs.length / PAGE_SIZE));
  const page = Math.min(rawPage, totalPages);

  const paginatedBlogs = useMemo(() => {
    const start = (page - 1) * PAGE_SIZE;
    return filteredBlogs.slice(start, start + PAGE_SIZE);
  }, [filteredBlogs, page]);

  return (
    <section ref={sectionRef} className="py-16 md:pt-4 md:pb-24">
      <div className="content-boundary flex flex-col gap-y-10">
        <header className="flex flex-col items-center gap-y-3">
          <h1 className="text-heading-1 font-extrabold">{headline}</h1>
          <FilterTabs
            filters={filters}
            selectedCategory={category}
            onClick={handleSelectCategory}
          />
        </header>
        <BlogsGrid blogs={paginatedBlogs} />
        <Pagination
          currentPage={page}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </div>
    </section>
  );
}
