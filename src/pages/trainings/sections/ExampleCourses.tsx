import { exampleCourses } from "../data";

export default function ExampleCourses() {
  const { headline, courses, ctaLabel, ctaIcon: Icon } = exampleCourses;

  return (
    <section className="py-14 lg:py-24">
      <div className="content-boundary flex flex-col gap-y-8">
        <h2 className="text-heading-1 capitalize font-extrabold text-center leading-none">
          {headline}
        </h2>
        <ul className="grid grid-cols-1 md:grid-cols-3">
          {courses.map((course) => {
            return (
              <li key={course.title} className="bg-yellow">
                <h3
                  className="text-heading-3 leading-none py-6 px-10"
                  onClick={() => console.log("clicked")}>
                  {course.title}
                </h3>
                <div className="bg-blue text-white py-6 px-10">
                  <ul className="flex flex-col gap-y-2 ">
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
