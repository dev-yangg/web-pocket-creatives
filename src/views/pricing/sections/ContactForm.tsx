import InputField from "../../../components/InputField";
import { cn } from "../../../lib/utils";
import { contactFormData } from "../data";

export default function ContactForm() {
  const { headline, subheading, fields, submitLabel } = contactFormData;
  return (
    <section className="py-24 md:py-44 bg-white md:bg-gray">
      <div className=" content-boundary grid md:grid-cols-[2fr_3fr] lg:grid-cols-[2fr_2.25fr] gap-12">
        <hgroup className="flex flex-col items-center w-[min(480px,100%)] mx-auto gap-y-6 leading-none @container">
          <h2 className="font-extrabold text-center text-[clamp(2rem,1.5rem+7.75cqi,3rem)] lg:text-[clamp(2.5rem,1.6rem+10.5cqi,8rem)]">
            {headline}
          </h2>
          <p className="text-heading-3 min-[500px]:text-center min-[500px]:text-balance md:text-left md:text-wrap">
            {subheading}
          </p>
        </hgroup>
        <section>
          <form action="" className="flex flex-col gap-y-4">
            <div className="grid md:grid-cols-3 gap-4">
              {fields.map((field) => {
                const isTextarea = field.type === "textarea";

                return (
                  <InputField
                    key={field.label.base}
                    {...field}
                    className={cn({ "md:col-span-3": isTextarea })}
                    labelClassName="font-semibold md:font-extrabold mb-1"
                    inputClass={cn(
                      "bg-white outline outline-black md:outline-none px-2 py-1",
                      {
                        "py-2": isTextarea,
                      },
                    )}
                    rows={isTextarea ? 3 : undefined}
                  />
                );
              })}
            </div>

            <button
              type="submit"
              className="bg-yellow font-extrabold px-14 py-1 rounded-xl max-md:mx-auto md:self-end w-[min(200px,100%)] mt-4 md:mt-0">
              {submitLabel}
            </button>
          </form>
        </section>
      </div>
    </section>
  );
}
