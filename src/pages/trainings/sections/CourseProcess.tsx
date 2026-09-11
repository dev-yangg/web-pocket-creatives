import { courseProcess } from "../data";
import FloatingArrowDown from "../../../components/FloatingArrowDown";

export default function CourseProcess() {
  return (
    <section className="bg-blue py-14 lg:py-24">
      <div className="content-boundary text-white grid grid-cols-1 lg:grid-cols-[3fr_1fr] gap-y-8 md:gap-y-14">
        <h1 className="font-extrabold leading-none">
          {courseProcess.headline}
        </h1>
        <div className="flex flex-col gap-y-4">
          {courseProcess.content.map((text) => (
            <p key={text} className="leading-tight">
              {text}
            </p>
          ))}
        </div>
        <FloatingArrowDown className="text-white justify-self-center lg:col-start-2 lg:col-end-3 lg:row-start-1 lg:row-end-3 lg:self-center lg:-translate-y-12" />
      </div>
    </section>
  );
}
