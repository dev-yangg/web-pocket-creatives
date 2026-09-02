import type { UseMenuReturn } from "../hooks/useMenu";
import { cn } from "../lib/utils";

export interface MenuButtonProps extends Pick<UseMenuReturn, "isOpen"> {
  className?: string;
  onClick: () => void;
}
export default function MenuButton({
  isOpen,
  className,
  onClick,
}: MenuButtonProps) {
  return (
    <button
      aria-expanded={isOpen}
      className={cn("w-8 h-5", className)}
      onClick={onClick}>
      {Array.from({ length: 3 }).map((_, index) => {
        const isFirst = index === 0;
        const isMiddle = index === 1;
        const isLast = index === 2;

        return (
          <HamburgerLine
            key={`line-${index + 1}`}
            className={cn(
              { "origin-right": isFirst },
              { "origin-center": isMiddle },
              { "origin-left": isLast },
              { "scale-0": isOpen },
            )}
          />
        );
      })}
    </button>
  );
}

function HamburgerLine({ className }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "pointer-events-none w-full h-1 bg-yellow transition-transform duration-300 ease-swap",
        className,
      )}
    />
  );
}
