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
      className="group rounded-lg border border-purple-400/20 bg-purple-950/15 p-6 shadow-2xl shadow-purple-950/25 backdrop-blur transition hover:border-purple-300/40 hover:bg-purple-900/20"
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.45, delay: index * 0.04 }}
      whileHover={{ y: -5 }}
    >
      <div className="mb-5 flex items-start justify-between gap-4">
        <div>
          <h3 className="text-lg font-semibold text-white">{category.title}</h3>
          <p className="mt-2 text-sm leading-6 text-purple-50/65">
            {category.description}
          </p>
        </div>
        <span className="grid h-11 w-11 shrink-0 place-items-center rounded-lg border border-purple-300/25 bg-purple-400/15 text-purple-100">
          <Icon aria-hidden="true" size={20} />
        </span>
      </div>
      <div className="flex flex-wrap gap-2">
        {category.skills.map((skill) => (
          <span
            key={skill}
            className="rounded-md border border-purple-400/20 bg-black/50 px-3 py-1.5 font-mono text-xs text-purple-50/85"
          >
            {skill}
          </span>
        ))}
      </div>
    </motion.article>
  );
}
