"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { IconBadge } from "@/components/ui/IconBadge";
import {
  BadgeCheckIcon,
  ClipboardListIcon,
  LifeBuoyIcon,
  MessageCircleIcon,
} from "@/components/icons";
import { howWeWork } from "@/data/about";
import type { PrincipleIconKey } from "@/types";

const icons: Record<PrincipleIconKey, typeof ClipboardListIcon> = {
  scope: ClipboardListIcon,
  ownership: BadgeCheckIcon,
  communication: MessageCircleIcon,
  support: LifeBuoyIcon,
};

export function HowWeWork() {
  return (
    <section className="bg-white py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="How We Work"
          title="A working style built on accountability"
          description="These aren't marketing lines — they're how every engagement is actually run, from the first call to long after launch."
        />

        <div className="mx-auto mt-16 grid max-w-4xl grid-cols-1 gap-x-12 gap-y-10 sm:grid-cols-2">
          {howWeWork.map((item, index) => {
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
      </Container>
    </section>
  );
}
