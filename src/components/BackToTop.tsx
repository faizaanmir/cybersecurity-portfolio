"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUp } from "lucide-react";

export function BackToTop() {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 500], [0, 1]);
  const pointerEvents = useTransform(opacity, (value) =>
    value > 0.2 ? "auto" : "none",
  );

  return (
    <motion.a
      href="#home"
      aria-label="Back to top"
      className="fixed bottom-5 right-5 z-40 grid h-11 w-11 place-items-center rounded-lg border border-green-400/20 bg-black/85 text-green-200 shadow-2xl shadow-green-950/40 backdrop-blur transition hover:border-green-300/40 hover:bg-green-950/60 focus:outline-none focus:ring-2 focus:ring-green-300"
      style={{ opacity, pointerEvents }}
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.96 }}
    >
      <ArrowUp size={18} />
    </motion.a>
  );
}
