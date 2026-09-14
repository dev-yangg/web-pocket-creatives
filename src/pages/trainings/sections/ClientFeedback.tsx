import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { clientsFeedback } from "../data";
import { HighlightedText } from "../../../components/HighlightedText";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import { useScreen } from "../../../hooks/useScreen";
import { useBreakpoint } from "../../../hooks/useBreakpoint";
import QuoteMark from "../components/QuoteMark";

const AUTO_ROTATE_MS = 5000;

const contentVariants: Variants = {
  initial: { y: 40, opacity: 0 },
  animate: { y: 0, opacity: 1 },
  exit: { y: -40, opacity: 0 },
};

const clientNameVariants: Variants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
  },
  exit: {
    opacity: 0,
  },
};

export default function ClientFeedback() {
  const feedbacks = clientsFeedback.feedbacks;
  const [activeIndex, setActiveIndex] = useState(0);
  const [barWidth, setBarWidth] = useState(0);
  const nameRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const id = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % feedbacks.length);
    }, AUTO_ROTATE_MS);

    return () => clearInterval(id);
  }, [feedbacks.length]);

  const activeClient = feedbacks[activeIndex];

  useLayoutEffect(() => {
    if (nameRef.current) {
      setBarWidth(nameRef.current.offsetWidth);
    }
  }, [activeIndex, activeClient]);
  const { lg } = useBreakpoint();
  const isLg = useScreen(lg);

  const imageVariants: Variants = {
    initial: { y: 40, opacity: 0 },
    animate: {
      y: 0,
      opacity: 1,
      x: 0,
      transition: { type: "spring", stiffness: 260, damping: 28, delay: 0.2 },
    },
    exit: {
      x: !isLg ? 0 : -40,
      y: !isLg ? -40 : 0,
      opacity: 0,
      transition: { type: "spring", stiffness: 260, damping: 28 },
    },
  };

  return (
    <section className="py-24 lg:py-64 grid items-center lg:min-h-[60dvh] relative">
      <div
        aria-hidden="true"
        className="absolute h-[90%] lg:h-[80%] left-1/2 -translate-x-1/2 w-[min(1440px,100%-calc(var(--pad)*1.25))] pointer-events-none">
        <QuoteMark />
      </div>
      <div className="content-boundary">
        {activeClient && (
          <div
            className="grid grid-cols-1 lg:grid-cols-[.35fr_1fr]
                       gap-5 lg:gap-x-12 lg:gap-y-4 items-end">
            <div className="lg:row-span-2 self-start flex justify-self-center lg:justify-self-auto mb-2 lg:mb-0 col-start-1 col-end-2 overflow-hidden">
              <AnimatePresence mode="popLayout">
                <motion.img
                  key={activeIndex}
                  src={activeClient.logo}
                  alt={activeClient.clientName}
                  variants={imageVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  className="z-10 w-[min(800px,100%)] aspect-square object-cover shrink-0"
                />
              </AnimatePresence>
            </div>

            <div className="lg:col-start-2 lg:px-8 overflow-hidden">
              <AnimatePresence mode="popLayout">
                <motion.p
                  key={activeIndex}
                  variants={contentVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  transition={{ type: "spring", stiffness: 260, damping: 28 }}
                  className="leading-snug">
                  <HighlightedText
                    text={activeClient.text}
                    highlight="Pocket Creatives"
                    highlightClassName="text-blue font-semibold"
                  />
                </motion.p>
              </AnimatePresence>
            </div>

            <h2 className="lg:col-start-2 relative md:text-heading-3 font-extrabold tracking-tighter text-right overflow-hidden pb-1">
              <AnimatePresence mode="popLayout">
                <motion.span
                  key={activeIndex}
                  ref={nameRef}
                  variants={clientNameVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  className="inline-block">
                  {activeClient.clientName}
                </motion.span>
              </AnimatePresence>

              <motion.span
                animate={{ width: barWidth }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className="absolute right-0 -bottom-1 h-3/6 bg-yellow -z-10"
              />
            </h2>
          </div>
        )}
      </div>
    </section>
  );
}
