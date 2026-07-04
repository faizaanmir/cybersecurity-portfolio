"use client";

import { motion } from "framer-motion";

import type { SkillCategory } from "@/data/skills";

type SkillCardProps = {
  category: SkillCategory;
  index: number;
};

export function SkillCard({ category, index }: SkillCardProps) {
  const Icon = category.icon;

  return (
    <motion.article
      className="group rounded-lg border border-green-400/15 bg-green-950/15 p-6 shadow-2xl shadow-green-950/25 backdrop-blur transition hover:border-green-300/35 hover:bg-green-900/20"
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.45, delay: index * 0.04 }}
      whileHover={{ y: -5 }}
    >
      <div className="mb-5 flex items-start justify-between gap-4">
        <div>
          <h3 className="text-lg font-semibold text-white">{category.title}</h3>
          <p className="mt-2 text-sm leading-6 text-green-100/65">
            {category.description}
          </p>
        </div>
        <span className="grid h-11 w-11 shrink-0 place-items-center rounded-lg border border-green-300/20 bg-green-400/10 text-green-200">
          <Icon aria-hidden="true" size={20} />
        </span>
      </div>
      <div className="flex flex-wrap gap-2">
        {category.skills.map((skill) => (
          <span
            key={skill}
            className="rounded-md border border-green-400/15 bg-black/50 px-3 py-1.5 font-mono text-xs text-green-100/85"
          >
            {skill}
          </span>
        ))}
      </div>
    </motion.article>
  );
}
