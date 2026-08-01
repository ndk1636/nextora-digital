"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

type CTASectionProps = {
  title: string;
  description: string;
  primaryHref: string;
  primaryLabel: string;
  secondaryHref: string;
  secondaryLabel: string;
};

export function CTASection({
  title,
  description,
  primaryHref,
  primaryLabel,
  secondaryHref,
  secondaryLabel,
}: CTASectionProps) {
  return (
    <section className="bg-white py-24 sm:py-32">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="relative overflow-hidden rounded-panel bg-gradient-to-br from-brand via-blue-600 to-accent px-8 py-16 text-center text-white shadow-glow sm:px-16"
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-10 -top-10 h-64 w-64 rounded-full bg-white/10 blur-3xl"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-10 -left-10 h-64 w-64 rounded-full bg-white/10 blur-3xl"
          />

          <h2 className="relative mx-auto max-w-2xl text-balance font-display text-3xl font-bold tracking-tight sm:text-4xl">
            {title}
          </h2>
          <p className="relative mx-auto mt-4 max-w-xl text-balance text-base leading-relaxed text-blue-50">
            {description}
          </p>
          <div className="relative mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button href={primaryHref} variant="secondary">
              {primaryLabel}
            </Button>
            <Button href={secondaryHref} variant="outline">
              {secondaryLabel}
            </Button>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
