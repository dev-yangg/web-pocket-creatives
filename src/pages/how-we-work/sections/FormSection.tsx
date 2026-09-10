import Form from "../components/Form";
import SVG3 from "../components/SVG3";
import { processForm } from "../data";

export default function FormSection() {
  const { headline, content, subheadline, form } = processForm;
  return (
    <section className="bg-yellow py-14 md:py-24 relative">
      <div
        aria-hidden="true"
        className="content-boundary absolute inset-0 pointer-events-none">
        <div className="absolute top-0 translate-y-8 screen-900:top-1/2 screen-900:-translate-y-1/2 left-0 w-full h-[35%] screen-900:w-1/2 screen-900:h-[90%]">
          <div className="h-full">
            <SVG3 />
          </div>
        </div>
      </div>
      <div className="content-boundary grid grid-cols-1 screen-900:grid-cols-2 gap-y-6 md:gap-x-4 md:items-center">
        <section className="flex flex-col gap-y-6">
          <h1 className="font-extrabold leading-none text-balance text-center md:text-left mb-2 md:mb-6">
            {headline}
          </h1>
          {content.map((text) => (
            <p key={text} className="leading-tight">
              {text}
            </p>
          ))}
        </section>
        <section className="flex flex-col gap-y-8 md:px-4">
          <h2 className="font-extrabold leading-none text-balance md:text-heading-3">
            {subheadline}
          </h2>
          <Form form={form} />
        </section>
      </div>
    </section>
  );
}
