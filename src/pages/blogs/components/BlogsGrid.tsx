import { Link } from "react-router";
import type { Blog } from "../data";
import { BsArrowRight } from "react-icons/bs";
import { cn } from "../../../lib/utils";
import EmptyStateHandler from "../../../components/EmptyStateHandler";

interface Props {
  blogs: Blog[];
}
export default function BlogsGrid({ blogs }: Props) {
  if (blogs.length === 0) {
    return <EmptyStateHandler className="py-24" />;
  }
  return (
    <ul className="grid grid-cols-1 min-[550px]:grid-cols-2 md:grid-cols-3 gap-8">
      {blogs.map((blog) => (
        <li key={blog.slug}>
          <Card
            image={blog.image}
            title={blog.title}
            tags={blog.tags}
            slug={blog.slug}
            createdAt={blog.createdAt}
            author={blog.author}
          />
        </li>
      ))}
    </ul>
  );
}

function Card({ image, title, tags, slug, createdAt, author }: Blog) {
  return (
    <figure className="outline-3 outline-grayblue p-2 h-full flex flex-col xl:min-h-130">
      <div className="aspect-3/2">
        <img src={image} alt={title} className="w-full h-full object-cover" />
      </div>
      <figcaption className="flex-1 text-grayblue py-4 px-2 flex flex-col justify-between items-start gap-y-8">
        <div className="flex flex-col items-start gap-y-2">
          <h3 className="font-bold text-regular leading-tight">{title}</h3>
          <ul className="flex flex-wrap items-center">
            {tags.map((tag, index) => {
              const lastItem = index === tags.length - 1;

              return (
                <li
                  key={tag}
                  className={cn(
                    "bg-yellow font-extrabold capitalize text-black italic pl-2 pr-1 outline outline-yellow leading-tight",
                    { "pr-2": lastItem },
                  )}>
                  <span className="text-small">
                    {tag}
                    {!lastItem && ","}
                  </span>
                </li>
              );
            })}
          </ul>
          <p className="flex flex-wrap gap-x-3 text-small leading-tight mt-2 lg:mt-0">
            <span className="text-blue uppercase font-bold">{author}</span>
            <span>{createdAt}</span>
          </p>
        </div>
        <Link to={slug} className="flex items-center gap-x-2 group">
          <span className="group-hover:translate-x-0.75 transition-transform duration-300 ease-in-out will-change-transform">
            Read More
          </span>
          <span className="inline-block align-[-0.25em] group-hover:translate-x-1.25 transition-transform duration-300 ease-in-out">
            <BsArrowRight className="w-full h-full stroke-1" />
          </span>
        </Link>
      </figcaption>
    </figure>
  );
}
