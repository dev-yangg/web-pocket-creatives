import type { IconType } from "react-icons";
import { HiOutlineMail } from "react-icons/hi";
import { useModal } from "../hooks/useModal";
import { cn } from "../lib/utils";
interface Props {
  onClick?: () => void;
  icon?: IconType;
  ctaLabel?: string;
  className?: string;
}

export default function InquiryCTA({
  onClick,
  icon: Icon = HiOutlineMail,
  ctaLabel = "Have questions?",
  className,
}: Props) {
  const { openModal } = useModal();

  const handleClick = onClick ?? (() => openModal("contact"));

  return (
    <button
      type="button"
      onClick={handleClick}
      className={cn(
        "bg-yellow p-4 md:py-2 md:pl-2 md:pr-3 max-md:rounded-xl max-md:shadow-below flex items-center gap-x-[.5ch] text-black self-center md:self-start rounded-xl",
        className,
      )}>
      <span className="w-[1.5em] aspect-square">
        <Icon className="w-full h-full" />
      </span>
      <span>{ctaLabel}</span>
    </button>
  );
}
