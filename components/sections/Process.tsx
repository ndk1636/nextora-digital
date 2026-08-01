"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  ClipboardListIcon,
  CodeIcon,
  LifeBuoyIcon,
  PenToolIcon,
  RocketIcon,
  SearchIcon,
  CheckCircleIcon,
} from "@/components/icons";
import { processSteps } from "@/constants/process";
import type { ProcessIconKey } from "@/types";

const icons: Record<ProcessIconKey, typeof SearchIcon> = {
  discovery: SearchIcon,
  planning: ClipboardListIcon,
  design: PenToolIcon,
  development: CodeIcon,
  testing: CheckCircleIcon,
  deployment: RocketIcon,
  support: LifeBuoyIcon,
};

export function Process() {
  return (
    <section id="process" className="bg-white py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="Our Process"
          title="A disciplined path from idea to production"
          description="Every engagement follows the same proven process, so you always know what's happening and what's next."
        />

        <div className="relative mx-auto mt-16 max-w-3xl">
          <div className="absolute left-7 top-2 bottom-2 w-px bg-slate-200 sm:left-8" />

          <div className="flex flex-col">
            {processSteps.map((item, index) => {
              const Icon = icons[item.icon];
              return (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.5, delay: (index % 4) * 0.08 }}
                  className="relative flex gap-6 pb-12 last:pb-0"
                >
                  <span className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-slate-200 bg-white text-brand shadow-soft sm:h-16 sm:w-16">
                    <Icon className="h-5 w-5 sm:h-6 sm:w-6" />
                  </span>

                  <div className="pt-2">
                    <span className="text-xs font-semibold tracking-wide text-slate-500">
                      Step {item.step}
                    </span>
                    <h3 className="mt-1 text-lg font-semibold text-slate-900">
                      {item.title}
                    </h3>
                    <p className="mt-2 max-w-xl text-sm leading-relaxed text-slate-600">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
