import { SlArrowDown } from "react-icons/sl";
import { cn } from "../lib/utils";

export default function FloatingArrowDown({
  className,
}: {
  className?: string;
}) {
  return (
    <div
      aria-hidden="true"
      className={cn("w-34 aspect-square grid place-items-center", className)}>
      <SlArrowDown className="fill-current w-full h-full animate-float" />
    </div>
  );
}
