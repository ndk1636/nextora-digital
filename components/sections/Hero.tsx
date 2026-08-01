"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { FloatingStatCard } from "@/components/ui/FloatingStatCard";
import { ArrowRightIcon } from "@/components/icons";
import { fadeInUp, staggerContainer } from "@/components/animations/variants";
import { heroStats } from "@/data/site";
import { HeroDashboardPreview } from "./HeroDashboardPreview";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-white pt-36 pb-24 sm:pt-44 sm:pb-32"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,#f8fafc,#ffffff_55%)]" />
        <div className="bg-dot-grid absolute inset-x-0 top-0 h-[560px] [mask-image:radial-gradient(ellipse_60%_55%_at_50%_0%,black_35%,transparent_100%)]" />
        <div className="animate-gradient absolute -top-40 -left-40 h-[560px] w-[560px] rounded-full bg-gradient-to-br from-brand/20 to-accent/8 blur-3xl" />
        <div className="animate-gradient absolute top-10 -right-32 h-[480px] w-[480px] rounded-full bg-gradient-to-bl from-accent/16 to-brand/8 blur-3xl [animation-delay:2s]" />
      </div>

      <Container>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="mx-auto max-w-4xl text-center"
        >
          <motion.div
            variants={fadeInUp}
            className="inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-brand"
          >
            <span className="h-px w-8 bg-gradient-to-r from-transparent to-brand/70" />
            Software Engineering Studio
            <span className="h-px w-8 bg-gradient-to-l from-transparent to-brand/70" />
          </motion.div>

          <motion.h1
            variants={fadeInUp}
            className="mt-8 text-balance font-display text-5xl font-bold leading-[1.08] tracking-[-0.025em] text-slate-900 sm:text-6xl lg:text-7xl lg:leading-[1.05]"
          >
            Enterprise software,
            <br />
            <span className="text-gradient-brand">engineered to scale.</span>
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="mx-auto mt-7 max-w-xl text-balance text-lg leading-relaxed text-slate-600"
          >
            Nextora Digital designs and builds premium SaaS platforms, HRM
            systems, healthcare software, and AI-powered business solutions
            for startups and enterprises worldwide.
          </motion.p>

          <motion.div
            variants={fadeInUp}
            className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row"
          >
            <Button href="#contact" size="lg">
              Book a Call
            </Button>
            <Button href="#projects" variant="ghost" size="lg" className="group">
              View Our Work
              <ArrowRightIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
          </motion.div>

          <motion.div variants={fadeInUp} className="mt-14">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-500">
              Built on foundations serious software runs on
            </p>
            <div className="mt-4 flex flex-wrap items-center justify-center divide-x divide-slate-200 text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-500">
              {heroStats.map((stat) => (
                <span key={stat.label} className="px-5 first:pl-0 last:pr-0">
                  {stat.value}
                </span>
              ))}
            </div>
          </motion.div>
        </motion.div>

        <div className="relative mx-auto mt-20 max-w-4xl">
          <p className="mb-6 text-center text-xs font-medium uppercase tracking-[0.14em] text-slate-500">
            A glimpse at the systems we design and build
          </p>
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-10 -top-14 hidden h-32 w-32 rotate-6 rounded-[28px] border border-brand/15 sm:block"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-10 -left-8 hidden h-20 w-20 -rotate-12 rounded-full border border-accent/20 sm:block"
          />

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
