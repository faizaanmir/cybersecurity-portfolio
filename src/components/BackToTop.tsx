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
      className="fixed bottom-5 right-5 z-40 grid h-11 w-11 place-items-center rounded-lg border border-purple-400/25 bg-black/85 text-purple-200 shadow-2xl shadow-purple-950/40 backdrop-blur transition hover:border-purple-300/45 hover:bg-purple-950/60 focus:outline-none focus:ring-2 focus:ring-purple-300"
      style={{ opacity, pointerEvents }}
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.96 }}
    >
      <ArrowUp size={18} />
    </motion.a>
  );
}
