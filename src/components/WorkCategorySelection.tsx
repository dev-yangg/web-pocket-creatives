import { useState } from "react";
import {
  workCategories,
  type Category,
  type WorkCategoryId,
} from "../data/globals";
import { IoMdArrowDropdown } from "react-icons/io";

interface Props {
  options?: readonly Category<WorkCategoryId>[];
  value: WorkCategoryId;
  onChange: (id: WorkCategoryId) => void;
  ariaLabel?: string;
}

export default function WorkCategorySelection({
  options = workCategories,
  value,
  onChange,
  ariaLabel,
}: Props) {
  const [open, setOpen] = useState(false);
  const selected = options.find((opt) => opt.id === value);

  return (
    <div
      role="group"
      aria-label={ariaLabel ?? "Filter by category"}
      className="w-[min(200px,100%)] mx-auto outline-3 outline-black bg-white pl-4 pr-2 py-1 flex flex-col">
      <button
        type="button"
        aria-expanded={open}
        onClick={() => setOpen((prev) => !prev)}
        className="flex items-center justify-between gap-x-[1ch]">
        <span>{selected?.label}</span>
        <span className="inline-block ml-auto w-5 aspect-square">
          <IoMdArrowDropdown className="w-full h-full" />
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
