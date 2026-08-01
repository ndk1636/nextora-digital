"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { cn } from "@/lib/cn";
import { projectAccentMap } from "@/lib/projectAccent";
import { ArrowUpRightIcon } from "@/components/icons";
import { TechBadge } from "@/components/ui/TechBadge";
import type { ProjectItem } from "@/types";

type ProjectCardProps = ProjectItem & {
  href: string;
  delay?: number;
};

export function ProjectCard({
  name,
  category,
  description,
  tech,
  accent,
  href,
  delay = 0,
}: ProjectCardProps) {
  const theme = projectAccentMap[accent];

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -4 }}
    >
      <Link
        href={href}
        className="group relative flex flex-col overflow-hidden rounded-card border border-slate-200 bg-white p-6 shadow-soft transition-shadow duration-300 hover:shadow-glow sm:p-7"
      >
        <div className="flex items-center gap-3">
          <span
            className={cn(
              "flex h-9 w-9 shrink-0 items-center justify-center rounded-[10px] bg-gradient-to-br text-sm font-bold text-white",
              theme.grad
            )}
          >
            {name.charAt(0)}
          </span>
          <span className="text-xs font-semibold uppercase tracking-wide text-brand">
            {category}
          </span>
        </div>

        <h3 className="mt-5 text-lg font-semibold text-slate-900">{name}</h3>
        <p className="mt-2 text-sm leading-relaxed text-slate-600">
          {description}
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          {tech.slice(0, 3).map((item) => (
            <TechBadge key={item} name={item} />
          ))}
        </div>

        <span
          aria-hidden="true"
          className="absolute bottom-6 right-6 flex h-8 w-8 items-center justify-center rounded-full border border-slate-200 text-slate-400 opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:border-brand/40 group-hover:text-brand group-hover:opacity-100 sm:right-7"
        >
          <ArrowUpRightIcon className="h-4 w-4" />
        </span>
      </Link>
    </motion.div>
  );
}
