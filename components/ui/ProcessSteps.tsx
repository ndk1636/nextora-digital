"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { processSteps } from "@/data/process";

type ProcessStepsProps = {
  eyebrow?: string;
  title?: string;
  description?: string;
};

export function ProcessSteps({
  eyebrow = "How We Build It",
  title = "The same disciplined process, every time",
  description = "Every service follows our standard delivery process, from discovery through post-launch support.",
}: ProcessStepsProps) {
  return (
    <section className="bg-slate-50/60 py-24 sm:py-32">
      <Container>
        <SectionHeading eyebrow={eyebrow} title={title} description={description} />

        <div className="mx-auto mt-16 grid max-w-5xl grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-7">
          {processSteps.map((step, index) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="flex flex-col items-center gap-3 rounded-card border border-slate-200 bg-white p-4 text-center shadow-soft"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-50 text-sm font-semibold text-brand">
                {step.step}
              </span>
              <span className="text-xs font-medium text-slate-700">
                {step.title}
              </span>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
