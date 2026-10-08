import { BsArrowRight } from "react-icons/bs";
import { testimonialsIntro } from "./data";
import { Link } from "react-router";
import { cn } from "../../lib/utils";
export default function TestimonialsPage() {
  const { headline, subheading, cta } = testimonialsIntro;
  return (
    <main className="pt-38 content-boundary min-h-dvh flex flex-col gap-y-8 pb-14">
      <hgroup className="flex flex-col leading-none gap-y-4">
        <h1 className="text-heading-1 font-extrabold">{headline}</h1>
        <p className="text-heading-3 px-2">{subheading}</p>
      </hgroup>
      <ul className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-4">
        {cta.map(({ icon: Icon, title, subtitle, href }, index) => {
          const isFirst = index === 0;
          return (
            <li
              key={`${index}-${title}`}
              className={cn(
                "rounded-lg",
                { "bg-blue text-white": isFirst },
                { "bg-yellow": !isFirst },
              )}>
              <Link
                to={href}
                className="flex flex-col @container p-8 md:p-12 gap-y-4">
                <span className="block aspect-square w-[clamp(2rem,0.5rem+10cqw,4rem)]">
                  <Icon className="w-full h-full" />
                </span>
                <h2 className="whitespace-pre-line text-heading-2 font-extrabold leading-none group">
                  {title}
                  <BsArrowRight
                    aria-hidden="true"
                    className="ml-[0.25em] inline-block size-[1.2em] align-[-0.236em] transition-transform duration-150 ease-swap group-hover:translate-x-1.25"
                  />
                </h2>
                <p>{subtitle}</p>
              </Link>
            </li>
          );
        })}
      </ul>
    </main>
  );
}
