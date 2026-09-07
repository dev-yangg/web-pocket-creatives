import { IoClose } from "react-icons/io5";
import { cn } from "../lib/utils";

interface Props {
  onClose: () => void;
  className?: string;
}
export default function LightboxCloseButton({ onClose, className }: Props) {
  return (
    <button
      onClick={onClose}
      className={cn(
        "right-4 top-4 absolute w-8 aspect-square rounded-full bg-yellow text-black z-10",
        className,
      )}>
      <IoClose className="w-full h-full" />
    </button>
  );
}
