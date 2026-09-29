import { useState } from "react";
import { type Category } from "../data/globals";
import { IoMdArrowDropdown } from "react-icons/io";

interface Props<T extends string> {
  options: readonly Category<T>[];
  value: T;
  onChange: (id: T) => void;
  ariaLabel?: string;
}

export default function CategorySelection<T extends string>({
  options,
  value,
  onChange,
  ariaLabel,
}: Props<T>) {
  const [open, setOpen] = useState(false);
  const selected = options.find((opt) => opt.id === value);

  return (
    <div
      role="group"
      aria-label={ariaLabel ?? "Filter by category"}
      className="outline-3 outline-black bg-white px-4 py-1">
      <button
        type="button"
        aria-expanded={open}
        onClick={() => setOpen((prev) => !prev)}
        className="flex items-center gap-x-[.65ch]">
        <span>{selected?.label}</span>
        <span>
          <IoMdArrowDropdown className="w-5 aspect-square" />
        </span>
      </button>

      {open && (
        <ul>
          {options
            .filter((opt) => opt.id !== value)
            .map((opt) => (
              <li key={opt.id}>
                <button
                  type="button"
                  onClick={() => {
                    onChange(opt.id);
                    setOpen(false);
                  }}>
                  {opt.label}
                </button>
              </li>
            ))}
        </ul>
      )}
    </div>
  );
}
