import { blogs, type Blog } from "../data";
import { Link } from "react-router";

type Props = Pick<Blog, "relatedIds">;

export default function RelatedNews({ relatedIds }: Props) {
  const relatedBlogs = (relatedIds ?? [])
    .map((id) => blogs.find((blog) => blog.id === id))
    .filter((blog): blog is Blog => Boolean(blog));

  return (
    <section className="flex flex-col gap-y-6 pb-20">
      <h2 className="text-regular font-bold">Related News</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {relatedBlogs?.map((blog) => (
          <Card
            key={blog.id}
            image={blog.image}
            title={blog.title}
            slug={blog.slug}
          />
        ))}
      </div>
    </section>
  );
}

function Card({ image, title, slug }: Pick<Blog, "image" | "title" | "slug">) {
  return (
    <Link to={`/blogs/${slug}`}>
      <figure className="grid grid-cols-[.5fr_1fr] md:grid-cols-1 gap-4 items-center">
        <div className="aspect-3/2 overflow-hidden">
          <img src={image} alt={title} className="w-full h-full object-cover" />
        </div>
        <figcaption className="max-md:grid max-md:items-center max-md:h-full max-md:custom-underline">
          <p className="leading-none font-bold">{title}</p>
        </figcaption>
      </figure>
    </Link>
  );
}
