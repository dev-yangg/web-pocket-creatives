import InputField from "../../../components/InputField";
import { cn } from "../../../lib/utils";
import { contactForm } from "../data";

export default function ContactForm() {
  const { headline, fields, submitLabel } = contactForm;
  return (
    <section className="bg-yellow py-16 md:py-24">
      <div className="content-boundary grid grid-cols-1 md:grid-cols-2  gap-y-14 gap-x-8 @container">
        <h2 className="text-[clamp(1.75rem,4rem+3cqi,3rem)] lg:text-heading-2 font-extrabold leading-none mt-3">
          {headline}
        </h2>
        <form action="" className="flex flex-col gap-y-4">
          <div className="grid md:grid-cols-3 gap-4">
            {fields.map((field, index) => {
              const isTextarea = field.type === "textarea";
              return (
                <InputField
                  key={`${index}-${field.name}`}
                  {...field}
                  className={cn("", { "md:col-span-3": isTextarea })}
                  labelClassName="font-bold"
                  inputClass="bg-white p-2 md:px-4 md:py-3"
                  rows={isTextarea ? 3 : undefined}
                />
              );
            })}
          </div>
          <button
            type="submit"
            className="bg-blue w-[min(500px,100%)] min-[550px]:w-auto px-14 py-2 text-white font-bold text-center rounded-xl capitalize self-center md:self-end">
            {submitLabel}
          </button>
        </form>
      </div>
    </section>
  );
}
