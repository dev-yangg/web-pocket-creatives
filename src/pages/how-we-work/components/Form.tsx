import { cn } from "../../../lib/utils";
import InputField, { type Props as InputFieldProps } from "./InputField";

type FormField = Omit<InputFieldProps, "inputClass">;

interface FormProps {
  fields: FormField[];
  submitLabel: string;
}

interface Props {
  form: FormProps;
}

export default function Form({ form }: Props) {
  return (
    <form action="" className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {form.fields.map((field) => (
        <InputField
          key={field.name}
          type={field.type}
          name={field.name}
          label={field.label}
          required={field.required}
          placeholder={field.placeholder}
          className={cn({
            "md:col-span-3": field.type === "textarea",
            "md:col-start-3 md:row-start-1": field.name === "contactNumber",
          })}
          inputClass={cn(
            "bg-white focus:outline-black/55 outline outline-black/55 p-2",
          )}
        />
      ))}
      <button
        type="submit"
        className="bg-blue rounded-xl shadow-below text-white font-bold py-2 mt-4 min-[600px]:max-md:w-75 min-[600px]:max-md:justify-self-end md:col-start-3 md:col-end-4">
        {form.submitLabel}
      </button>
    </form>
  );
}
