"use client";

import { motion } from "framer-motion";
import { BadgeCheck } from "lucide-react";

import type { Certification } from "@/data/certifications";

type CertificationCardProps = {
  certification: Certification;
  index: number;
};

export function CertificationCard({
  certification,
  index,
}: CertificationCardProps) {
  return (
    <motion.article
      className="rounded-lg border border-purple-400/20 bg-purple-950/15 p-5 shadow-xl shadow-purple-950/20 backdrop-blur"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.45, delay: index * 0.05 }}
      whileHover={{ y: -4 }}
    >
      <div className="mb-5 flex items-center gap-3">
        <span className="grid h-10 w-10 place-items-center rounded-lg bg-purple-400/15 text-purple-100 ring-1 ring-purple-300/25">
          <BadgeCheck aria-hidden="true" size={19} />
        </span>
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-purple-300">
          {certification.issuer}
        </p>
      </div>
      <h3 className="text-lg font-semibold text-white">{certification.name}</h3>
      <p className="mt-3 text-sm leading-7 text-purple-50/75">
        {certification.focus}
      </p>
    </motion.article>
  );
}
