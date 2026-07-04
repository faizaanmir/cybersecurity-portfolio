"use client";

import { motion } from "framer-motion";
import type { SocialLink } from "@/data/personal";

type ContactCardProps = {
  card: SocialLink;
  index: number;
};

export function ContactCard({ card, index }: ContactCardProps) {
  const Icon = card.icon;
  const shouldDownload = card.href.startsWith("/") && card.label === "Resume";

  return (
    <motion.a
      href={card.href}
      target={card.href.startsWith("http") ? "_blank" : undefined}
      rel={card.href.startsWith("http") ? "noreferrer" : undefined}
      download={shouldDownload ? true : undefined}
      className="group rounded-lg border border-purple-400/20 bg-black/70 p-5 shadow-xl shadow-purple-950/20 backdrop-blur transition hover:border-purple-300/40 hover:bg-purple-900/20 focus:outline-none focus:ring-2 focus:ring-purple-300 focus:ring-offset-2 focus:ring-offset-black"
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.45, delay: index * 0.05 }}
      whileHover={{ y: -4 }}
    >
      <span className="mb-5 grid h-11 w-11 place-items-center rounded-lg border border-purple-300/25 bg-purple-400/15 text-purple-100">
        <Icon aria-hidden="true" size={20} />
      </span>
      <h3 className="text-lg font-semibold text-white">{card.label}</h3>
      <p className="mt-2 text-sm text-purple-50/75">{card.value}</p>
    </motion.a>
  );
}
