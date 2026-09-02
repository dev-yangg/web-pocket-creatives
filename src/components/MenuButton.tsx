import { AnimatePresence, motion } from "framer-motion";
import type { UseMenuReturn } from "../hooks/useMenu";
import { cn } from "../lib/utils";

export interface MenuButtonProps extends Pick<UseMenuReturn, "isOpen"> {
  className?: string;
  onClick: () => void;
}

const STAGGER = 0.05;
const HAMBURGER_DURATION = 0.3;
const HAMBURGER_EASE = [0.4, 0, 0.2, 1] as const;
const CROSS_EXIT_DURATION = 0.2;
const CROSS_ENTER_DELAY = HAMBURGER_DURATION;

export default function MenuButton({
  isOpen,
  className,
  onClick,
}: MenuButtonProps) {
  return (
    <button
      aria-expanded={isOpen}
      className={cn("relative w-8 h-5", className)}
      onClick={onClick}>
      <div className="w-full h-full flex flex-col justify-between">
        {Array.from({ length: 3 }).map((_, index) => {
          const isFirst = index === 0;
          const isMiddle = index === 1;
          const isLast = index === 2;

          const delay = isOpen
            ? index * STAGGER
            : CROSS_EXIT_DURATION + index * STAGGER;

          return (
            <HamburgerLine
              key={`line-${index + 1}`}
              scaleX={isOpen ? 0 : 1}
              delay={delay}
              className={cn(
                { "origin-right": isFirst },
                { "origin-center": isMiddle },
                { "origin-left": isLast },
              )}
            />
          );
        })}
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="absolute inset-0"
            initial="hidden"
            animate="visible"
            exit="hidden">
            {Array.from({ length: 2 }).map((_, index) => {
              const isFirst = index === 0;
              const isLast = index === 1;

              return (
                <CrossLine
                  key={`line-${index + 1}`}
                  className={cn(
                    { "rotate-45": isFirst },
                    { "-rotate-45": isLast },
                  )}
                />
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </button>
  );
}

function HamburgerLine({
  className,
  scaleX,
  delay,
}: {
  className?: string;
  scaleX: number;
  delay: number;
}) {
  return (
    <motion.div
      aria-hidden="true"
      animate={{ scaleX }}
      transition={{ duration: HAMBURGER_DURATION, ease: HAMBURGER_EASE, delay }}
      className={cn(
        "pointer-events-none w-full h-1 bg-yellow origin-top",
        className,
      )}
    />
  );
}

function CrossLine({ className }: { className?: string }) {
  return (
    <motion.div
      variants={{
        hidden: {
          scale: 0,
          opacity: 0,
          transition: { duration: CROSS_EXIT_DURATION, delay: 0 },
        },
        visible: {
          scale: 1,
          opacity: 1,
          transition: { duration: 0.2, delay: CROSS_ENTER_DELAY },
        },
      }}
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-full h-1 bg-blue",
        className,
      )}
    />
  );
}
