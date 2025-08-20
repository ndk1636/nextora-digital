"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};
const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.08 } } };

// export const metadata = {
//   title: "Work - Nextora Digital",
//   description: "Selected work",
// };

export default function Work() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-100">
      <Navbar />
      <section
        id="work"
        className="container mx-auto max-w-6xl px-4 py-16 md:py-24"
      >
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
            Selected Work
          </motion.h2>
          <motion.p variants={fadeUp} className="mt-2 max-w-2xl text-slate-300">
            A peek into results. Replace these with your real case studies.
          </motion.p>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              {
                tag: "E‑commerce",
                title: "+142% Revenue in 90 Days",
                desc: "Shop rebuild on Next.js + SEO overhaul.",
              },
              {
                tag: "SaaS",
                title: "+68% Sign‑ups",
                desc: "New website, ICP messaging, and paid tests.",
              },
              {
                tag: "Local Services",
                title: "3x Leads",
                desc: "GMB + local SEO + landing pages.",
              },
            ].map((w, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="group rounded-3xl border border-white/10 bg-white/5 p-6"
              >
                <span className="text-xs text-emerald-300">{w.tag}</span>
                <h3 className="mt-2 text-xl font-semibold">{w.title}</h3>
                <p className="mt-2 text-slate-300">{w.desc}</p>
                <div className="mt-4 inline-flex items-center gap-2 text-sm text-emerald-300 group-hover:translate-x-1 transition">
                  View Case Study <ArrowRight className="h-4 w-4" />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>
      <Footer />
    </main>
  );
}
