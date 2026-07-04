"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ExternalLink, X } from "lucide-react";
import { useEffect } from "react";

import type { Project } from "@/data/projects";

type ProjectModalProps = {
  project: Project | null;
  onClose: () => void;
};

const detailRows = [
  { label: "Problem", key: "problem" },
  { label: "Solution", key: "solution" },
  { label: "Impact", key: "impact" },
] as const;

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    if (!project) {
      return;
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [onClose, project]);

  return (
    <AnimatePresence>
      {project ? (
        <motion.div
          className="fixed inset-0 z-[80] grid place-items-center bg-black/82 p-4 backdrop-blur-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          role="dialog"
          aria-modal="true"
          aria-labelledby="project-modal-title"
          onMouseDown={onClose}
        >
          <motion.div
            className="max-h-[88vh] w-full max-w-4xl overflow-y-auto rounded-lg border border-purple-400/25 bg-black shadow-2xl shadow-black"
            initial={{ opacity: 0, y: 22, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.98 }}
            transition={{ duration: 0.22 }}
            onMouseDown={(event) => event.stopPropagation()}
          >
            <div className="sticky top-0 z-10 flex items-center justify-between border-b border-purple-400/20 bg-black/90 px-5 py-4 backdrop-blur">
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.22em] text-purple-300">
                  {project.category}
                </p>
                <h3
                  id="project-modal-title"
                  className="mt-1 text-xl font-semibold text-white"
                >
                  {project.title}
                </h3>
              </div>
              <button
                type="button"
                onClick={onClose}
                className="grid h-10 w-10 place-items-center rounded-lg border border-purple-400/20 bg-purple-950/25 text-purple-100 transition hover:bg-purple-900/30 focus:outline-none focus:ring-2 focus:ring-purple-300"
                aria-label="Close project details"
              >
                <X size={18} />
              </button>
            </div>

            <div className="grid gap-8 p-5 md:p-8">
              <div className="rounded-lg border border-purple-400/20 bg-gradient-to-br from-purple-500/15 via-violet-400/10 to-black p-5">
                <div className="rounded-md border border-purple-400/20 bg-black/60 p-5">
                  <p className="text-sm leading-7 text-purple-50/85">
                    {project.overview}
                  </p>
                  <div className="mt-5 grid grid-cols-3 gap-3">
                    <div className="h-20 rounded-md border border-purple-300/25 bg-purple-400/15" />
                    <div className="h-20 rounded-md border border-violet-300/25 bg-violet-400/15" />
                    <div className="h-20 rounded-md border border-fuchsia-300/25 bg-fuchsia-400/15" />
                  </div>
                </div>
              </div>

              <div className="grid gap-4 md:grid-cols-3">
                {detailRows.map((row) => (
                  <article
                    key={row.key}
                    className="rounded-lg border border-purple-400/20 bg-purple-950/15 p-4"
                  >
                    <h4 className="text-sm font-semibold text-white">
                      {row.label}
                    </h4>
                    <p className="mt-3 text-sm leading-7 text-purple-50/75">
                      {project[row.key]}
                    </p>
                  </article>
                ))}
              </div>

              <div>
                <h4 className="text-sm font-semibold text-white">
                  Technologies
                </h4>
                <div className="mt-3 flex flex-wrap gap-2">
                  {project.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-md border border-purple-400/20 bg-purple-950/25 px-3 py-1.5 font-mono text-xs text-purple-50/85"
                    >
                      {technology}
                    </span>
                  ))}
                </div>
              </div>

              <a
                href={project.githubHref}
                target="_blank"
                rel="noreferrer"
                className="inline-flex w-fit items-center gap-2 rounded-lg bg-purple-500 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-300 focus:ring-offset-2 focus:ring-offset-black"
              >
                <ExternalLink aria-hidden="true" size={16} />
                View GitHub Reference
              </a>
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
