"use client";

import { motion } from "framer-motion";
import { ArrowDownToLine, Briefcase, Code, FolderKanban } from "lucide-react";

import { personal } from "@/data/personal";

const buttons = [
  {
    label: "Download Resume",
    href: personal.resumeHref,
    icon: ArrowDownToLine,
    variant: "primary",
    download: true,
  },
  {
    label: "View Projects",
    href: "#projects",
    icon: FolderKanban,
    variant: "secondary",
    download: false,
  },
  {
    label: "GitHub",
    href: personal.githubHref,
    icon: Code,
    variant: "ghost",
    download: false,
  },
  {
    label: "LinkedIn",
    href: personal.linkedInHref,
    icon: Briefcase,
    variant: "ghost",
    download: false,
  },
] as const;

export function HeroButtons() {
  return (
    <motion.div
      className="flex flex-col gap-3 sm:flex-row sm:flex-wrap"
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.35, duration: 0.55 }}
    >
      {buttons.map((button) => {
        const Icon = button.icon;

        return (
          <motion.a
            key={button.label}
            href={button.href}
            target={button.href.startsWith("http") ? "_blank" : undefined}
            rel={button.href.startsWith("http") ? "noreferrer" : undefined}
            download={button.download ? true : undefined}
            className={
              button.variant === "primary"
                ? "inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-green-500 px-5 text-sm font-semibold text-black shadow-[0_18px_45px_rgba(34,197,94,0.28)] transition hover:bg-green-400 focus:outline-none focus:ring-2 focus:ring-green-300 focus:ring-offset-2 focus:ring-offset-black"
                : button.variant === "secondary"
                  ? "inline-flex h-12 items-center justify-center gap-2 rounded-lg border border-green-300/30 bg-green-400/10 px-5 text-sm font-semibold text-green-50 backdrop-blur transition hover:border-green-300/60 hover:bg-green-400/15 focus:outline-none focus:ring-2 focus:ring-green-300 focus:ring-offset-2 focus:ring-offset-black"
                  : "inline-flex h-12 items-center justify-center gap-2 rounded-lg border border-green-400/15 bg-green-950/20 px-5 text-sm font-semibold text-green-100 backdrop-blur transition hover:border-green-300/50 hover:bg-green-400/10 focus:outline-none focus:ring-2 focus:ring-green-300 focus:ring-offset-2 focus:ring-offset-black"
            }
            whileHover={{ y: -3, scale: 1.01 }}
            whileTap={{ scale: 0.98 }}
          >
            <Icon aria-hidden="true" size={18} />
            {button.label}
          </motion.a>
        );
      })}
    </motion.div>
  );
}
