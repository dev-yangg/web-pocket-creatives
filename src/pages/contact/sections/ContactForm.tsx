import { useEffect, useRef } from "react";
import InputField from "../../../components/InputField";
import { useBreakpoint } from "../../../hooks/useBreakpoint";
import { useModal } from "../../../hooks/useModal";
import { useScreen } from "../../../hooks/useScreen";
import { cn } from "../../../lib/utils";
import { heroData } from "../data";

export default function ContactForm() {
  const { headline, subheading, fields, cta } = heroData;
  const {
    mobileFormTrigger: { icon: Icon, label },
    submitLabel,
  } = cta;
  const { openModal, closeModal } = useModal();
  const { lg } = useBreakpoint();
  const isLg = useScreen(lg);
  const closeModalRef = useRef(closeModal);

  useEffect(() => {
    closeModalRef.current = closeModal;
  });

  useEffect(() => {
    if (isLg) closeModalRef.current();
  }, [isLg]);

  return (
    <section className="pt-44 bg-blue pb-14">
      <div className="content-boundary grid grid-cols-1 lg:grid-cols-2 gap-x-8">
        <hgroup className="text-white flex flex-col gap-y-8 md:text-balance min-[55rem]:text-wrap w-[min(600px,100%)] justify-self-center">
          <h1 className="text-heading-1 font-extrabold leading-none ">
            {headline}
          </h1>
          <div className="flex flex-col gap-y-4">
            {subheading.map((content, index) => (
              <p key={index}>{content}</p>
            ))}
          </div>
          <button
            className="flex lg:hidden items-center justify-center text-black gap-x-[.5ch] font-bold bg-yellow rounded-3xl pl-4 pr-6 py-4 self-center shadow-below"
            onClick={() => openModal("contact")}>
            <span className="w-[2em] aspect-square">
              <Icon className="w-full h-full" />
            </span>
            <span>{label}</span>
          </button>
        </hgroup>
        <form action="" className="hidden lg:flex lg:flex-col gap-y-4">
          <div className="grid grid-cols-3 gap-4">
            {fields.map((field) => {
              const isTextarea = field.type === "textarea";
              return (
                <InputField
                  key={field.name}
                  {...field}
                  labelClassName="text-white"
                  inputClass="bg-gray py-1 px-2"
                  className={cn({ "col-span-3": isTextarea })}
                  rows={isTextarea ? 12 : undefined}
                />
              );
            })}
          </div>
          <button
            type="submit"
            className="self-end bg-yellow font-bold capitalize px-14 py-1">
            {submitLabel}
          </button>
        </form>
      </div>
    </section>
  );
}
