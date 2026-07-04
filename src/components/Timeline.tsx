"use client";

import { motion } from "framer-motion";

import type { ExperienceItem } from "@/data/experience";

type TimelineProps = {
  items: ExperienceItem[];
};

export function Timeline({ items }: TimelineProps) {
  return (
    <div className="relative mx-auto max-w-5xl">
      <div className="absolute left-4 top-0 hidden h-full w-px bg-gradient-to-b from-purple-300 via-purple-600 to-transparent md:block" />
      <div className="grid gap-6">
        {items.map((item, index) => (
          <motion.article
            key={`${item.company}-${item.role}`}
            className="relative rounded-lg border border-purple-400/20 bg-black/70 p-6 shadow-2xl shadow-purple-950/25 backdrop-blur md:ml-12"
            initial={{ opacity: 0, x: -22 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
          >
            <span className="absolute -left-[2.95rem] top-7 hidden h-4 w-4 rounded-full border-2 border-purple-200 bg-purple-600 shadow-[0_0_22px_rgba(168,85,247,0.7)] md:block" />
            <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
              <div>
                <p className="font-mono text-xs font-semibold uppercase tracking-[0.22em] text-purple-300">
                  {item.company}
                </p>
                <h3 className="mt-2 text-2xl font-semibold text-white">
                  {item.role}
                </h3>
              </div>
              <span className="w-fit rounded-md border border-purple-400/20 bg-purple-950/30 px-3 py-1.5 font-mono text-xs text-purple-50/75">
                {item.period}
              </span>
            </div>
            <p className="mt-5 text-sm leading-7 text-purple-50/75 md:text-base">
              {item.summary}
            </p>
            <div className="mt-6 grid gap-5 lg:grid-cols-[1.4fr_0.8fr]">
              <div>
                <h4 className="text-sm font-semibold text-purple-50">
                  Responsibilities
                </h4>
                <div className="mt-3 flex flex-wrap gap-2">
                  {item.responsibilities.map((responsibility) => (
                    <span
                      key={responsibility}
                      className="rounded-md bg-purple-500/15 px-3 py-1.5 text-xs font-medium text-purple-50 ring-1 ring-purple-400/20"
                    >
                      {responsibility}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-purple-50">
                  Achievements
                </h4>
                <ul className="mt-3 grid gap-2 text-sm text-purple-50/75">
                  {item.achievements.map((achievement) => (
                    <li key={achievement} className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-purple-300" />
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  );
}
