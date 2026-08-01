"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CheckCircleIcon } from "@/components/icons";

type FeatureGridProps = {
  items: string[];
};

export function FeatureGrid({ items }: FeatureGridProps) {
  return (
    <section className="bg-slate-50/60 py-24 sm:py-32">
      <Container>
        <SectionHeading eyebrow="Key Features" title="What's included" />

        <div className="mx-auto mt-16 grid max-w-4xl grid-cols-1 gap-4 sm:grid-cols-2">
          {items.map((item, index) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: (index % 4) * 0.06 }}
              className="flex items-start gap-3 rounded-card border border-slate-200 bg-white p-4 shadow-soft"
            >
              <CheckCircleIcon className="mt-0.5 h-5 w-5 shrink-0 text-brand" />
              <span className="text-sm font-medium text-slate-800">
                {item}
              </span>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
