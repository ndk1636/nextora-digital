"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import Tilt from "react-parallax-tilt";
const MotionLink = motion(Link);
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};
const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.1 } } };
const iconPulse = {
  hover: { scale: 1.2, rotate: 10, transition: { duration: 0.3 } },
};

export default function Hero({ content }) {
  const stats = [
    {
      label: "Satisfied Clients",
      value: "200+",
      icon: CheckCircle2,
    },
    {
      label: "Projects Completed",
      value: "500+",
      icon: CheckCircle2,
    },
    {
      label: "Positive Reviews",
      value: "500+",
      icon: CheckCircle2,
    },
  ];

  return (
    <section
      className="relative overflow-hidden bg-gradient-to-b from-[var(--bg-primary)] to-[var(--bg-secondary)] py-16 md:py-24"
      itemScope
      itemType="https://schema.org/Organization"
    >
      {/* Aurora Background */}
      <div className="aurora">
        <span className="aurora-layer"></span>
        <span className="aurora-layer"></span>
        <span className="aurora-layer"></span>
      </div>

      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid items-center gap-12 md:grid-cols-2"
        >
          {/* Left Content */}
          <motion.div variants={fadeUp} className="space-y-custom">
            <motion.p
              variants={fadeUp}
              className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--accent-primary)]/10 px-4 py-1.5 text-xs sm:text-sm text-[var(--text-primary)] font-medium"
            >
              <span className="h-2.5 w-2.5 rounded-full bg-[var(--accent-primary)]" />
              {content.subtitle || "All-in-One Solution"}
            </motion.p>
            <h1
              className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight"
              itemProp="name"
            >
              {content.title.split("Shine Online")[0]}
              <motion.span
                className="bg-clip-text text-transparent bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)]"
                initial={{ opacity: 0.5 }}
                animate={{ opacity: 1 }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              >
                Shine Online
              </motion.span>{" "}
              with Nextora Digital
            </h1>
            <motion.p
              variants={fadeUp}
              className="max-w-xl text-[var(--text-secondary)] text-base sm:text-lg leading-relaxed"
              itemProp="description"
            >
              {content.description}
            </motion.p>
            <motion.div
              variants={fadeUp}
              className="flex flex-col sm:flex-row gap-4"
            >
              {/* Primary CTA */}
              <MotionLink
                href="/contact"
                aria-label="Get 50% Off Now"
                itemProp="url"
                className="relative inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)] px-6 py-3 text-sm sm:text-base font-semibold text-[var(--bg-primary)] hover:from-[var(--accent-primary)] hover:to-[var(--highlight)] transition-all duration-300 cta-glow group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10">Get 50% Off Now!</span>
                <ArrowRight className="relative z-10 h-5 w-5" />
                <span className="absolute inset-0 bg-[var(--highlight)]/20 opacity-0 group-hover:opacity-30 transition-opacity duration-300 rounded-full" />
              </MotionLink>

              {/* Secondary CTA */}
              <MotionLink
                href="/contact"
                aria-label="Claim Your Offer"
                itemProp="url"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-[var(--border)] bg-white/5 px-6 py-3 text-sm sm:text-base font-medium text-[var(--text-primary)] hover:bg-[var(--accent-primary)]/10 transition"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Claim Your Offer
              </MotionLink>
            </motion.div>
            <motion.ul
              variants={fadeUp}
              className="space-y-2 text-sm sm:text-base text-[var(--text-secondary)] pt-4"
            >
              <li className="flex items-center gap-2">
                <CheckCircle2
                  className="h-5 w-5 text-[var(--accent-primary)]"
                  aria-hidden="true"
                />
                Proven Team of Experts
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2
                  className="h-5 w-5 text-[var(--accent-primary)]"
                  aria-hidden="true"
                />
                Fast & Reliable Delivery
              </li>
            </motion.ul>
          </motion.div>

          {/* Stats Grid */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8"
          >
            {stats.map((stat, i) => (
              <Tilt
                key={i}
                tiltMaxAngleX={8}
                tiltMaxAngleY={8}
                perspective={1000}
                scale={1.02}
                transitionSpeed={300}
              >
                <motion.div
                  variants={fadeUp}
                  className="rounded-2xl border border-[var(--border)] bg-white/5 p-6 sm:p-8 glassmorphism card-hover group"
                  itemProp="description"
                >
                  <motion.div
                    className="flex items-center justify-center w-12 h-12 rounded-full bg-[var(--accent-primary)]/10 mb-4"
                    whileHover="hover"
                    variants={iconPulse}
                  >
                    <stat.icon
                      className="h-6 w-6 text-[var(--accent-primary)]"
                      aria-hidden="true"
                    />
                  </motion.div>
                  <p className="text-2xl sm:text-3xl font-bold text-[var(--accent-primary)]">
                    {stat.value}
                  </p>
                  <p className="text-[var(--text-secondary)] text-sm sm:text-base mt-2">
                    {stat.label}
                  </p>
                </motion.div>
              </Tilt>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}