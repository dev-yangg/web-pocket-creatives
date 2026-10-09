import InputField from "../../../components/InputField";
import { cn } from "../../../lib/utils";
import { contactFormData } from "../data";

export default function ContactForm() {
  const { headline, subheading, fields, submitLabel } = contactFormData;
  return (
    <section className="py-14 lg:py-24 bg-yellow">
      <div className=" content-boundary grid lg:grid-cols-[2fr_2.25fr] gap-12 lg:gap-x-24">
        <hgroup className="flex flex-col gap-y-8">
          <h2 className="text-heading-2 font-extrabold leading-none">
            {headline}
          </h2>
          <p>{subheading}</p>
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
              className="bg-blue text-white capitalize font-extrabold px-14 py-2 rounded-xl max-md:mx-auto md:self-end w-[min(180px,100%)] mt-4 md:mt-0">
              {submitLabel}
            </button>
          </form>
        </section>
      </div>
    </section>
  );
}
