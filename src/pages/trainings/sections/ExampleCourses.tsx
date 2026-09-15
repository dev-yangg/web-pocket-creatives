import { useState } from "react";
import { exampleCourses } from "../data";
import { cn } from "../../../lib/utils";

export default function ExampleCourses() {
  const { headline, courses, ctaLabel, ctaIcon: Icon } = exampleCourses;
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const handleClick = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <section className="py-14 lg:py-24">
      <div className="content-boundary flex flex-col gap-y-8">
        <h2 className="text-heading-1 capitalize font-extrabold text-center leading-none">
          {headline}
        </h2>
        <ul className="flex gap-x-16 overflow-hidden">
          {courses.map((course, index) => {
            const target = openIndex === index;

            return (
              <li
                key={course.title}
                className={cn(
                  " transition-[flex-grow_flex-shrink] duration-500 ease-in-out grid  min-w-0",
                  target ? "flex-7 grid-cols-[300px_1fr]" : "flex-1",
                )}>
                <h3
                  className="bg-yellow text-heading-3 leading-none py-6 px-10 row-start-1 col-start-1 col-end-2"
                  onClick={() => handleClick(index)}>
                  {course.title}
                </h3>
                <div
                  className={cn(
                    "bg-blue text-white py-6 px-10 row-start-1 col-start-1 col-end-2 -z-10",
                    "col-start-2 col-end-3",
                  )}>
                  <ul className="flex flex-col gap-y-2">
                    {course.items.map((item) => (
                      <li
                        key={item}
                        className="grid grid-cols-[auto_1fr] gap-x-2 items-baseline">
                        <span>•</span>
                        <span className="leading-tight">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            );
          })}
        </ul>
        <button className=" flex flex-wrap items-center justify-center bg-yellow gap-x-3 p-4 w-[min(300px,100%)] md:w-auto font-bold self-center md:self-end pr-8 shadow-below">
          <span className="block w-[clamp(1.75em,3vw,2em)] aspect-square rounded-full bg-blue text-white -rotate-15 shrink-0">
            <Icon className="w-full h-full stroke-current" />
          </span>
          <span className="capitalize text-nowrap shrink-0">{ctaLabel}</span>
        </button>
      </div>
    </section>
  );
}
