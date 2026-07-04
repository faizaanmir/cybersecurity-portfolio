"use client";

import { motion } from "framer-motion";
import { ArrowDownToLine, Menu, X } from "lucide-react";
import { useMemo, useState } from "react";

import { personal } from "@/data/personal";
import { useActiveSection } from "@/hooks/useActiveSection";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Home", href: "#home", id: "home" },
  { label: "About", href: "#about", id: "about" },
  { label: "Experience", href: "#experience", id: "experience" },
  { label: "Skills", href: "#skills", id: "skills" },
  { label: "Projects", href: "#projects", id: "projects" },
  { label: "Certifications", href: "#certifications", id: "certifications" },
  { label: "Contact", href: "#contact", id: "contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const ids = useMemo(() => navItems.map((item) => item.id), []);
  const activeSection = useActiveSection(ids);

  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-green-400/15 bg-black/80 backdrop-blur-xl">
      <nav
        className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8"
        aria-label="Primary navigation"
      >
        <a href="#home" className="group flex items-center gap-3">
          <span className="grid h-10 w-10 place-items-center rounded-lg border border-green-300/35 bg-green-400/10 font-mono text-sm font-bold text-green-200 shadow-[0_0_30px_rgba(34,197,94,0.18)]">
            {personal.initials}
          </span>
          <span className="hidden text-sm font-semibold text-white sm:block">
            {personal.role}
          </span>
        </a>

        <div className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={cn(
                "rounded-lg px-3 py-2 text-sm font-medium text-green-100/70 transition hover:bg-green-400/10 hover:text-green-50",
                activeSection === item.id && "bg-green-500/15 text-green-200",
              )}
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <motion.a
            href={personal.resumeHref}
            download
            className="inline-flex h-10 items-center justify-center gap-2 rounded-lg bg-green-400 px-4 text-sm font-semibold text-black transition hover:bg-green-300 focus:outline-none focus:ring-2 focus:ring-green-300 focus:ring-offset-2 focus:ring-offset-black"
            whileHover={{ y: -1 }}
            whileTap={{ scale: 0.98 }}
          >
            <ArrowDownToLine aria-hidden="true" size={16} />
            Resume
          </motion.a>
        </div>

        <button
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-green-400/20 bg-green-950/20 text-green-100 lg:hidden"
          type="button"
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {open ? (
        <motion.div
          className="border-t border-green-400/15 bg-black/95 px-4 py-4 backdrop-blur-xl lg:hidden"
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="mx-auto grid max-w-7xl gap-1">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={cn(
                  "rounded-lg px-3 py-3 text-sm font-medium text-green-100/70",
                  activeSection === item.id && "bg-green-500/15 text-green-200",
                )}
              >
                {item.label}
              </a>
            ))}
          </div>
        </motion.div>
      ) : null}
    </header>
  );
}
