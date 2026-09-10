import { cn } from "../../../lib/utils";

export type ResponsiveLabel = string | { base: string; breakpoint: string };

export interface Props {
  name: string;
  label: ResponsiveLabel;
  placeholder: string;
  required: boolean;
  type?: React.InputHTMLAttributes<HTMLInputElement>["type"] | "textarea";
  className?: string;
  inputClass?: string;
}

export default function InputField({
  name,
  label,
  placeholder,
  required,
  type = "text",
  className,
  inputClass,
}: Props) {
  const isTextarea = type === "textarea";
  return (
    <fieldset className={cn("@container flex flex-col", className)}>
      <label htmlFor={name} className="md:text-[clamp(.95rem,2cqi,.95rem)]">
        {typeof label === "string" ? (
          label
        ) : (
          <>
            <span className="xl:hidden">{label.base}</span>
            <span className="hidden xl:inline">{label.breakpoint}</span>
          </>
        )}
        {required && <span className="text-red"> *</span>}
      </label>
      {isTextarea ? (
        <textarea
          id={name}
          name={name}
          required={required}
          placeholder={placeholder}
          rows={8}
          className={cn("resize-none", inputClass)}
        />
      ) : (
        <input
          id={name}
          type={type}
          name={name}
          required={required}
          placeholder={placeholder}
          className={cn("w-full", inputClass)}
        />
      )}
    </fieldset>
  );
}
