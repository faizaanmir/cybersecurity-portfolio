"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

import type { Project } from "@/data/projects";
import { cn } from "@/lib/utils";

type ProjectCardProps = {
  project: Project;
  index: number;
  onOpen: (project: Project) => void;
};

const accentClasses: Record<Project["accent"], string> = {
  green: "from-green-500/25 to-green-500/5 text-green-100",
  emerald: "from-emerald-400/25 to-emerald-400/5 text-emerald-100",
  lime: "from-lime-400/20 to-lime-400/5 text-lime-100",
};

export function ProjectCard({ project, index, onOpen }: ProjectCardProps) {
  return (
    <motion.button
      type="button"
      onClick={() => onOpen(project)}
      className="group min-h-[360px] rounded-lg border border-green-400/15 bg-black/70 p-0 text-left shadow-2xl shadow-green-950/25 outline-none backdrop-blur transition hover:border-green-300/35 focus:ring-2 focus:ring-green-300 focus:ring-offset-2 focus:ring-offset-black"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.45, delay: index * 0.05 }}
      whileHover={{ y: -6 }}
    >
      <div
        className={cn(
          "h-36 rounded-t-lg border-b border-white/10 bg-gradient-to-br p-4",
          accentClasses[project.accent],
        )}
      >
        <div className="flex h-full flex-col justify-between rounded-md border border-green-400/15 bg-black/55 p-4">
          <div className="flex items-center justify-between">
            <span className="font-mono text-xs uppercase tracking-[0.22em]">
              {project.category}
            </span>
            <ArrowUpRight
              aria-hidden="true"
              className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              size={18}
            />
          </div>
          <div className="grid grid-cols-5 gap-2">
            {project.technologies.slice(0, 5).map((technology) => (
              <span
                key={technology}
                className="h-1.5 rounded-full bg-current opacity-60"
              />
            ))}
          </div>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-white">{project.title}</h3>
        <p className="mt-3 text-sm leading-7 text-green-100/75">
          {project.overview}
        </p>
        <div className="mt-5 flex flex-wrap gap-2">
          {project.technologies.slice(0, 3).map((technology) => (
            <span
              key={technology}
              className="rounded-md border border-green-400/15 bg-green-950/25 px-2.5 py-1 font-mono text-[11px] text-green-100/75"
            >
              {technology}
            </span>
          ))}
        </div>
      </div>
    </motion.button>
  );
}
