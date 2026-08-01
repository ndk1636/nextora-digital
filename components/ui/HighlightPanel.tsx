"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

type HighlightPanelProps = {
  eyebrow: string;
  title: string;
  items: string[];
  icon: ReactNode;
};

export function HighlightPanel({
  eyebrow,
  title,
  items,
  icon,
}: HighlightPanelProps) {
  return (
    <section className="bg-white py-24 sm:py-32">
      <Container>
        <SectionHeading eyebrow={eyebrow} title={title} />

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto mt-16 grid max-w-4xl grid-cols-1 gap-x-10 gap-y-5 rounded-panel border border-slate-200 bg-slate-50/60 p-8 sm:grid-cols-2 sm:p-10"
        >
          {items.map((item) => (
            <div key={item} className="flex items-start gap-3">
              {icon}
              <span className="text-sm leading-relaxed text-slate-700">
                {item}
              </span>
            </div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
