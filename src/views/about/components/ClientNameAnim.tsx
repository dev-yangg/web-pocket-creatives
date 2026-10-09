import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const clients = ["Prestige Flowers", "The Telegraph", "James Read Tan"];

export default function ClientNameAnim() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % clients.length);
    }, 2500);
    return () => clearInterval(id);
  }, []);

  return (
    <span className="relative inline-block overflow-hidden align-bottom">
      <span className="invisible whitespace-nowrap">
        {clients.reduce((a, b) => (a.length > b.length ? a : b))}
      </span>

      <AnimatePresence mode="popLayout">
        <motion.span
          key={clients[index]}
          initial={{ y: "1.3em", opacity: 0 }}
          animate={{ y: "0em", opacity: 1 }}
          exit={{ y: "-1.3em", opacity: 0 }}
          transition={{ duration: 0.3, ease: [0.65, 0, 0.35, 1] }}
          className="absolute left-1/2 -translate-x-1/2 top-0 whitespace-nowrap">
          {clients[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}
