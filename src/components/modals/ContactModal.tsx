import { cn } from "../../lib/utils";
import InputField from "../InputField";
import { contact } from "./data";

export default function ContactModal() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 w-fluid-width-850 mx-auto gap-y-8 md:gap-x-12 pb-10 pt-4 md:pt-8 px-8 xl:px-0 @container">
      <hgroup className="flex flex-col gap-y-4 md:gap-y-8">
        <h3 className="text-white text-heading-2 font-extrabold capitalize leading-none">
          {contact.headline}
        </h3>
        <div className="flex items-start gap-x-[1ch]">
          <input
            type="checkbox"
            name={contact.consent.name}
            id={contact.consent.id}
            className="shrink-0 w-4 h-4 mt-0.5"
          />
          <label
            htmlFor={contact.consent.id}
            className="leading-snug text-[clamp(.85rem,1.5rem+.75cqi,1rem)]">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet
            odio, nihil quasi dignissimos exercitationem cupiditate!
          </label>
        </div>
      </hgroup>
      <section>
        <form action="" className="flex flex-col gap-y-3 md:gap-y-6 md:px-8">
          {contact.fields.map((field) => {
            const isTextarea = field.type === "textarea";
            return (
              <InputField
                key={field.name}
                {...field}
                inputClass={cn("bg-white outline-none px-2 py-1", {
                  "py-2": isTextarea,
                })}
                changeContentOnBreakpoint={false}
                rows={isTextarea ? 3 : undefined}
              />
            );
          })}
          <button className="bg-yellow self-end capitalize px-8 py-1 rounded-xl text-white mt-3 hover:-translate-y-1 transition-[transform_filter] duration-300 ease-in-out brightness-95 hover:brightness-100">
            {contact.submitLabel}
          </button>
        </form>
      </section>
    </div>
  );
}
