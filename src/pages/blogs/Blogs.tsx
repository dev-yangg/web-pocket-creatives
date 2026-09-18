import BlogsFilter from "./sections/BlogsFilter";
import Hero from "./sections/Hero";

export default function Blogs() {
  return (
    <main className="pt-app-padding-top">
      <Hero />
      <BlogsFilter />
    </main>
  );
}
