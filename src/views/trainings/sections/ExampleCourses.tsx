import { useState } from "react";
import { exampleCourses } from "../data";
import { cn } from "../../../lib/utils";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

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
        <ul className="grid grid-cols-1 md:grid-cols-3 gap-8 @container">
          {courses.map((course, index) => {
            const target = openIndex === index;

            return (
              <li
                key={course.title}
                className="grid grid-cols-1 grid-rows-1 overflow-hidden">
                <h3
                  className={cn(
                    "bg-yellow text-[clamp(1.75rem,3cqi,2rem)] leading-none py-16 md:py-0 px-6 lg:px-8 col-start-1 row-start-1 font-bold grid place-items-center transition-transform duration-300 ease-in-out text-balance",
                    target ? "-translate-x-full" : "translate-x-0 z-10",
                  )}>
                  <span>
                    {course.title}{" "}
                    <button
                      className="inline-block w-[1em] aspect-square align-[-0.25em] ml-8"
                      onClick={() => handleClick(index)}>
                      <BsArrowRight className="w-full h-full fill-current stroke-1 " />
                    </button>
                  </span>
                </h3>
                <div
                  className={cn(
                    "bg-blue text-white py-6 px-8 col-start-1 row-start-1 transition-transform duration-300 ease-in-out grid place-items-center",
                    target
                      ? "translate-x-0 z-10"
                      : "translate-x-full pointer-events-none",
                  )}>
                  <ul className="flex flex-col gap-y-2">
                    {course.items.map((item) => (
                      <li
                        key={item}
                        className="grid grid-cols-[auto_1fr] gap-x-2 items-baseline text-[clamp(1.2rem,2cqi,2.25rem)]">
                        <span>•</span>
                        <span className="leading-tight">{item}</span>
                      </li>
                    ))}
                    <button
                      className="inline-block w-[clamp(1.75rem,3cqi,3rem)] aspect-square align-[-0.25em] ml-8 self-end mt-2"
                      onClick={() => handleClick(index)}>
                      <BsArrowLeft className="w-full h-full fill-current stroke-1" />
                    </button>
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
