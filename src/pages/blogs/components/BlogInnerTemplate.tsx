import { SlArrowLeft } from "react-icons/sl";
import { Link, useParams } from "react-router";
import { blogs, type BlogBlock } from "../data";
import EmptyStateHandler from "../../../components/EmptyStateHandler";

interface ContentProps {
  block: BlogBlock;
}

export default function BlogInnerTemplate() {
  const { slug } = useParams();
  const blog = blogs.find((blog) => blog.slug === slug);

  if (!blog) return <EmptyStateHandler />;

  return (
    <article>
      <div className="content-boundary">
        <Link
          to={"/blogs"}
          className="text-small text-blue/75 hover:text-blue transition-colors duration-175 ease-swap inline-flex items-center gap-x-2 group">
          <span className="inline-block h-[.7em] group-hover:-translate-x-0.5 transition-transform duration-175 ease-in-out">
            <SlArrowLeft className="w-full h-full" />
          </span>
          <span className="group-hover:-translate-x-1 transition-transform duration-175 ease-in-out">
            Go back to blogs
          </span>
        </Link>
        <header className="flex flex-col gap-y-4 pt-3 pb-6">
          <h1 className="text-grayblue font-extrabold text-heading-2 leading-tight">
            {blog.title}
          </h1>
          <p className="flex items-center flex-wrap gap-x-4 text-blue">
            <span>{blog.author}</span>
            <span aria-hidden="true">•</span>
            <span>{blog.createdAt}</span>
            <ul className="ml-3 flex flex-wrap items-center rounded-lg overflow-clip bg-yellow font-extrabold capitalize text-black px-4 gap-x-3 leading-none py-2">
              {blog.tags.map((tag, index) => {
                const lastItem = index === blog.tags.length - 1;

                return (
                  <li key={tag}>
                    <span>
                      {tag}
                      {!lastItem && ","}
                    </span>
                  </li>
                );
              })}
            </ul>
          </p>
        </header>
        <div className="py-10">
          <img
            src={blog.image}
            alt={blog.title}
            className="w-full h-full object-cover aspect-5/2.5 object-center"
          />
        </div>
        {blog.content && blog.content.length > 0 ? (
          <div className="grid grid-cols-1">
            {blog.content.map((content, index) => (
              <Content key={index} block={content} />
            ))}
          </div>
        ) : (
          <EmptyStateHandler
            message="Content not available"
            className="text-heading-4 py-14"
          />
        )}
      </div>
    </article>
  );
}

function Content({ block }: ContentProps) {
  switch (block.type) {
    case "heading":
      return (
        <h2 className="text-heading-4 font-bold mt-10 mb-4">{block.text}</h2>
      );

    case "paragraph":
      return <p className="leading-relaxed mb-4">{block.text}</p>;

    case "list":
      return (
        <ul className="list-disc list-inside space-y-2 mb-4 text-slate-600">
          {block.items.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      );

    default:
      return null;
  }
}
