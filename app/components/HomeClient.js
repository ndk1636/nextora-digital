"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Globe,
  Code2,
  LineChart,
  Layers,
  Palette,
} from "lucide-react";
import Link from "next/link";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};
const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.08 } } };

export default function HomeClient({ content }) {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-100">
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute -top-24 left-1/2 h-[26rem] w-[26rem] -translate-x-1/2 rounded-full bg-emerald-500/20 blur-3xl" />
        <div className="container mx-auto max-w-6xl px-4 py-20 md:py-28">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid items-center gap-12 md:grid-cols-2"
          >
            <motion.div variants={fadeUp} className="space-y-6">
              <p className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-200/90">
                <span className="h-2 w-2 rounded-full bg-emerald-400" /> UK +
                Pakistan • Global Delivery
              </p>
              <h1 className="text-4xl font-bold leading-tight sm:text-5xl md:text-6xl">
                {content.title.split("Digital Solutions")[0]}
                <span className="text-emerald-400">Digital Solutions</span>
              </h1>
              <p className="max-w-xl text-slate-300">{content.description}</p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl bg-emerald-500 px-5 py-3 font-medium text-slate-900 shadow-lg hover:bg-emerald-400 transition"
                  aria-label="Get a Free Strategy Call"
                >
                  Get a Free Strategy Call <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/work"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/15 px-5 py-3 font-medium hover:bg-white/5 transition"
                  aria-label="See Our Work"
                >
                  See Our Work
                </Link>
              </div>
              <div className="flex items-center gap-6 pt-2 text-xs text-slate-400">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-emerald-400" />{" "}
                  2‑location team (UK & PK)
                </div>
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-emerald-400" />{" "}
                  Upwork & LinkedIn verified
                </div>
              </div>
            </motion.div>
            <motion.div variants={fadeUp} className="relative">
              <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-white/0 p-6 shadow-2xl">
                <div className="grid grid-cols-2 gap-4">
                  {[
                    {
                      icon: Code2,
                      title: "Web Development",
                      desc: "Next.js, Laravel, React",
                    },
                    {
                      icon: LineChart,
                      title: "SEO & Growth",
                      desc: "Technical + Content + Links",
                    },
                    {
                      icon: Palette,
                      title: "Brand & Design",
                      desc: "Logos, UI/UX, Creatives",
                    },
                    {
                      icon: Layers,
                      title: "Paid Ads",
                      desc: "Meta, Google, LinkedIn",
                    },
                  ].map((s, i) => (
                    <div
                      key={i}
                      className="rounded-2xl border border-white/10 bg-white/5 p-4"
                    >
                      <s.icon className="h-6 w-6 mb-3" aria-hidden="true" />
                      <h4 className="font-medium">{s.title}</h4>
                      <p className="text-sm text-slate-300">{s.desc}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-4 rounded-xl border border-emerald-500/30 bg-emerald-500/10 p-4 text-sm text-emerald-200">
                  <p className="font-medium">
                    Guaranteed: measurable outcomes in 90 days
                  </p>
                  <p className="opacity-80">
                    Clear KPIs • Transparent reporting • Fast iteration
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
