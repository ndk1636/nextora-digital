"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TechBadge } from "@/components/ui/TechBadge";
import { technologies } from "@/constants/technologies";

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
          {technologies.map((category, index) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="rounded-card border border-slate-200 bg-white p-6 shadow-soft"
            >
              <h3 className="text-sm font-semibold text-slate-900">
                {category.category}
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {category.items.map((item) => (
                  <TechBadge key={item} name={item} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
