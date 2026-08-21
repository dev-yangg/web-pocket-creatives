import type { IconType } from "react-icons";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import { cn } from "../lib/utils";

interface ArrowButtonProps {
  ariaLabel: string;
  className?: string;
  icon: IconType;
  onClick: () => void;
  disabled?: boolean;
}

interface CarouselControlsProps {
  className?: string;
  onPrevious: () => void;
  onNext: () => void;
  disablePrevious?: boolean;
  disableNext?: boolean;
  previousLabel?: string;
  nextLabel?: string;
}

export default function CarouselControls({
  className,
  onPrevious,
  onNext,
  disablePrevious = false,
  disableNext = false,
  previousLabel = "previous slide",
  nextLabel = "next slide",
}: CarouselControlsProps) {
  return (
    <div role="group" aria-label="carousel navigation" className="flex gap-4">
      <ArrowButton
        className={className}
        ariaLabel={previousLabel}
        icon={FaArrowLeft}
        onClick={onPrevious}
        disabled={disablePrevious}
      />
      <ArrowButton
        className={className}
        ariaLabel={nextLabel}
        icon={FaArrowRight}
        onClick={onNext}
        disabled={disableNext}
      />
    </div>
  );
}

function ArrowButton({
  ariaLabel,
  className,
  icon: Icon,
  onClick,
  disabled,
}: ArrowButtonProps) {
  return (
    <button
      type="button"
      aria-label={ariaLabel}
      aria-disabled={disabled}
      disabled={disabled}
      onClick={onClick}
      className={cn(
        "w-6 aspect-square rounded-full p-1 transition-transform duration-150 ease-swap",
        className,
        {
          "scale-0": disabled,
        },
      )}>
      <Icon />
    </button>
  );
}
