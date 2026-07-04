"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

type RotatingTitleProps = {
  titles: string[];
};

export function RotatingTitle({ titles }: RotatingTitleProps) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setIndex((current) => (current + 1) % titles.length);
    }, 1900);

    return () => window.clearInterval(interval);
  }, [titles.length]);

  return (
    <span className="inline-grid min-h-9 overflow-hidden text-purple-100 md:min-h-10">
      <AnimatePresence mode="wait">
        <motion.span
          key={titles[index]}
          initial={{ y: 18, opacity: 0, filter: "blur(6px)" }}
          animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
          exit={{ y: -18, opacity: 0, filter: "blur(6px)" }}
          transition={{ duration: 0.32, ease: "easeOut" }}
          className="font-medium"
        >
          {titles[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}
