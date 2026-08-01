"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/cn";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "center" | "left";
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  className,
}: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        "max-w-2xl",
        align === "center" ? "mx-auto text-center" : "text-left",
        className
      )}
    >
      {eyebrow && (
        <span
          className={cn(
            "inline-flex items-center gap-2.5 text-xs font-semibold uppercase tracking-[0.16em] text-brand",
            align === "center" && "justify-center"
          )}
        >
          <span className="h-px w-6 bg-gradient-to-r from-transparent to-brand/60" />
          {eyebrow}
        </span>
      )}
      <h2 className="mt-5 text-balance font-display text-3xl font-bold leading-[1.1] tracking-[-0.02em] text-slate-900 sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-balance text-lg leading-relaxed text-slate-600">
          {description}
        </p>
      )}
    </motion.div>
  );
}
