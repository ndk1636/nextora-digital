"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { IconBadge } from "@/components/ui/IconBadge";
import {
  BadgeCheckIcon,
  LayersIcon,
  ShieldIcon,
  TargetIcon,
  UsersIcon,
} from "@/components/icons";
import { partnershipHighlight, whyChooseUs } from "@/constants/whyChooseUs";
import type { WhyChooseUsIconKey } from "@/types";

const icons: Record<WhyChooseUsIconKey, typeof ShieldIcon> = {
  quality: BadgeCheckIcon,
  scalability: LayersIcon,
  reliability: ShieldIcon,
  impact: TargetIcon,
  partnership: UsersIcon,
};

export function WhyChooseUs() {
  return (
    <section className="bg-slate-50/60 py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="Why Nextora Digital"
          title="A long-term engineering partner, not a vendor"
          description="We build software the way an in-house team would — with context, accountability, and skin in the outcome."
        />

        <div className="mt-16 grid gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:sticky lg:top-32 lg:self-start"
          >
            <div className="relative overflow-hidden rounded-panel bg-gradient-to-br from-brand via-blue-600 to-accent p-8 text-white shadow-glow sm:p-10">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-10 -top-10 h-48 w-48 rounded-full bg-white/10 blur-3xl"
              />
              <span className="flex h-11 w-11 items-center justify-center rounded-[12px] bg-white/15">
                <UsersIcon className="h-5 w-5" />
              </span>
              <p className="mt-6 text-sm font-medium text-blue-100">
                {partnershipHighlight.label}
              </p>
              <p className="mt-2 font-display text-3xl font-bold tracking-tight sm:text-4xl">
                {partnershipHighlight.title}
              </p>
              <p className="mt-5 max-w-sm text-sm leading-relaxed text-blue-50">
                {partnershipHighlight.description}
              </p>
            </div>
          </motion.div>

          <div className="flex flex-col gap-8">
            {whyChooseUs.map((item, index) => {
              const Icon = icons[item.icon];
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className="flex gap-4"
                >
                  <IconBadge>
                    <Icon className="h-5 w-5" />
                  </IconBadge>
                  <div>
                    <h3 className="text-base font-semibold text-slate-900">
                      {item.title}
                    </h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-slate-600">
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
