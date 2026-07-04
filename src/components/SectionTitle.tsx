"use client";

import { motion } from "framer-motion";

type SectionTitleProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function SectionTitle({ eyebrow, title, description }: SectionTitleProps) {
  return (
    <motion.div
      className="mx-auto mb-12 max-w-3xl text-center md:mb-16"
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.55, ease: "easeOut" }}
    >
      <p className="mb-3 font-mono text-xs font-semibold uppercase tracking-[0.28em] text-green-300">
        {eyebrow}
      </p>
      <h2 className="text-3xl font-semibold tracking-normal text-white md:text-5xl">
        {title}
      </h2>
      <p className="mt-5 text-base leading-8 text-green-100/75 md:text-lg">
        {description}
      </p>
    </motion.div>
  );
}
