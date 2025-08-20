"use client";

import React from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};
const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.08 } } };

// export const metadata = {
//   title: "Process - Nextora Digital",
//   description: "Our process",
// };

export default function Process() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-100">
      <Navbar />
      <section
        id="process"
        className="border-y border-white/10 bg-gradient-to-b from-white/5 to-transparent"
      >
        <div className="container mx-auto max-w-6xl px-4 py-16 md:py-24">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <motion.h2
              variants={fadeUp}
              className="text-3xl md:text-4xl font-semibold"
            >
              Process
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="mt-2 max-w-2xl text-slate-300"
            >
              Fast, transparent, outcome‑driven.
            </motion.p>
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {[
                {
                  step: "01",
                  title: "Discover",
                  desc: "Audit, goals & KPI alignment.",
                },
                {
                  step: "02",
                  title: "Design & Build",
                  desc: "UX, UI, and dev sprints.",
                },
                {
                  step: "03",
                  title: "Launch & Grow",
                  desc: "Tracking, SEO, and paid experiments.",
                },
              ].map((p, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  className="rounded-3xl border border-white/10 bg-white/5 p-6"
                >
                  <div className="text-sm font-semibold text-emerald-300">
                    {p.step}
                  </div>
                  <h3 className="mt-1 text-xl font-semibold">{p.title}</h3>
                  <p className="mt-2 text-slate-300">{p.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
