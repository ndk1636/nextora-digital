"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { FloatingStatCard } from "@/components/ui/FloatingStatCard";
import { ArrowRightIcon } from "@/components/icons";
import { fadeInUp, staggerContainer } from "@/components/animations/variants";
import { heroStats } from "@/constants/site";
import { HeroDashboardPreview } from "./HeroDashboardPreview";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-white pt-36 pb-24 sm:pt-44 sm:pb-32"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
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
          <motion.div
            variants={fadeInUp}
            className="inline-flex items-center gap-2 rounded-pill border border-slate-200 bg-white/80 px-4 py-1.5 text-xs font-medium text-slate-600 shadow-soft backdrop-blur-sm"
          >
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500" />
            </span>
            Software Engineering Studio for Ambitious Businesses
          </motion.div>

          <motion.h1
            variants={fadeInUp}
            className="mt-6 font-display text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl"
          >
            Enterprise Software,
            <br className="hidden sm:block" /> Engineered for Scale
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="mx-auto mt-6 max-w-2xl text-balance text-lg leading-relaxed text-slate-600"
          >
            Nextora Digital designs and builds premium SaaS platforms, HRM
            systems, healthcare software, and AI-powered business solutions
            for startups and enterprises worldwide.
          </motion.p>

          <motion.div
            variants={fadeInUp}
            className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <Button href="#contact" size="lg">
              Book a Call
            </Button>
            <Button href="#projects" variant="secondary" size="lg">
              View Work
              <ArrowRightIcon className="h-4 w-4" />
            </Button>
          </motion.div>
        </motion.div>

        <div className="relative mx-auto mt-24 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <HeroDashboardPreview />
          </motion.div>

          <FloatingStatCard
            {...heroStats[0]}
            delay={0.2}
            className="left-2 top-6 hidden md:block md:-left-10"
          />
          <FloatingStatCard
            {...heroStats[1]}
            delay={0.5}
            className="right-2 top-16 hidden md:block md:-right-10"
          />
          <FloatingStatCard
            {...heroStats[2]}
            delay={0.8}
            className="bottom-6 left-1/2 hidden -translate-x-1/2 md:block md:bottom-[-2rem] md:left-16 md:translate-x-0"
          />
        </div>
      </Container>
    </section>
  );
}
