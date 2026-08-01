"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { fadeInUp, staggerContainer } from "@/components/animations/variants";
import type { BreadcrumbItem } from "@/types";

type PageHeaderProps = {
  eyebrow: string;
  title: string;
  description: string;
  breadcrumbs?: BreadcrumbItem[];
  children?: ReactNode;
};

export function PageHeader({
  eyebrow,
  title,
  description,
  breadcrumbs,
  children,
}: PageHeaderProps) {
  return (
    <section className="relative overflow-hidden bg-white pt-36 pb-20 sm:pt-44 sm:pb-24">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,#f8fafc,#ffffff_60%)]" />
        <div className="animate-gradient absolute -top-40 -left-40 h-[560px] w-[560px] rounded-full bg-gradient-to-br from-brand/25 to-accent/10 blur-3xl" />
        <div className="animate-gradient absolute top-10 -right-32 h-[480px] w-[480px] rounded-full bg-gradient-to-bl from-accent/20 to-brand/10 blur-3xl [animation-delay:2s]" />
      </div>

      <Container>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="mx-auto max-w-3xl text-center"
        >
          {breadcrumbs && (
            <motion.div variants={fadeInUp} className="mb-5">
              <Breadcrumbs items={breadcrumbs} />
            </motion.div>
          )}

          <motion.div
            variants={fadeInUp}
            className="inline-flex items-center gap-2 rounded-pill border border-slate-200 bg-white/80 px-4 py-1.5 text-xs font-medium text-slate-600 shadow-soft backdrop-blur-sm"
          >
            {eyebrow}
          </motion.div>

          <motion.h1
            variants={fadeInUp}
            className="mt-6 text-balance font-display text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl"
          >
            {title}
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="mx-auto mt-6 max-w-2xl text-balance text-lg leading-relaxed text-slate-600"
          >
            {description}
          </motion.p>

          {children && (
            <motion.div
              variants={fadeInUp}
              className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
            >
              {children}
            </motion.div>
          )}
        </motion.div>
      </Container>
    </section>
  );
}
