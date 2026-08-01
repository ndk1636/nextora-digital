"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TechBadge } from "@/components/ui/TechBadge";
import { cn } from "@/lib/cn";
import { technologies } from "@/data/technologies";

const accentBars = [
  "bg-gradient-to-r from-brand to-brand",
  "bg-gradient-to-r from-accent to-accent",
  "bg-gradient-to-r from-indigo-600 to-indigo-600",
  "bg-gradient-to-r from-slate-400 to-slate-400",
];

export function Technologies() {
  return (
    <section id="technologies" className="bg-white py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="Technologies"
          title="A modern stack, chosen for the long run"
          description="We pick proven, well-supported technology for every layer of the stack — never trend-chasing, always maintainable."
        />

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {technologies.map((category, index) => {
            const [core, ...supporting] = category.items;
            return (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="overflow-hidden rounded-card border border-slate-200 bg-white shadow-soft"
              >
                <div className={cn("h-1", accentBars[index % accentBars.length])} />
                <div className="p-6">
                  <h3 className="text-sm font-semibold text-slate-900">
                    {category.category}
                  </h3>
                  <p className="mt-1.5 text-xs leading-relaxed text-slate-500">
                    {category.description}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    <span className="inline-flex items-center gap-1.5 rounded-pill bg-slate-900 px-3 py-1.5 text-xs font-semibold text-white">
                      {core}
                    </span>
                    {supporting.map((item) => (
                      <TechBadge key={item} name={item} />
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
