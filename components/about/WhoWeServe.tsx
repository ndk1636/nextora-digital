"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { IconBadge } from "@/components/ui/IconBadge";
import {
  BarChartIcon,
  HeartPulseIcon,
  LayersIcon,
  RocketIcon,
} from "@/components/icons";
import { whoWeServe } from "@/data/about";
import type { AudienceIconKey } from "@/types";

const icons: Record<AudienceIconKey, typeof RocketIcon> = {
  startup: RocketIcon,
  enterprise: LayersIcon,
  healthcare: HeartPulseIcon,
  business: BarChartIcon,
};

export function WhoWeServe() {
  return (
    <section className="bg-slate-50/60 py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="Who We Serve"
          title="Built for teams who need software that holds up"
          description="From first-time founders to established enterprises, our clients share one thing: they need software that works exactly the way their business does."
        />

        <div className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {whoWeServe.map((item, index) => {
            const Icon = icons[item.icon];
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="rounded-card border border-slate-200 bg-white p-6 shadow-soft"
              >
                <IconBadge>
                  <Icon className="h-5 w-5" />
                </IconBadge>
                <h3 className="mt-5 text-base font-semibold text-slate-900">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
