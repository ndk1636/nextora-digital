"use client";

import React from "react";
import { motion } from "framer-motion";
import { Code2, LineChart, Layers, Palette, Rocket, Globe } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};
const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.08 } } };

// export const metadata = {
//   title: "Services - Nextora Digital",
//   description: "Our digital services",
// };

export default function Services() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-100">
      <Navbar />
      <section
        id="services"
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
            Services
          </motion.h2>
          <motion.p variants={fadeUp} className="mt-2 max-w-2xl text-slate-300">
            Full‑stack execution across design, dev, and growth. Pick a plan or
            mix & match.
          </motion.p>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: Code2,
                title: "Web Design & Development",
                bullets: [
                  "Next.js, React, Laravel",
                  "High‑performance & SEO‑ready",
                  "E‑commerce & dashboards",
                ],
              },
              {
                icon: LineChart,
                title: "SEO & Content",
                bullets: [
                  "Technical & on‑page",
                  "Content strategy",
                  "Link building & analytics",
                ],
              },
              {
                icon: Layers,
                title: "Paid Media",
                bullets: [
                  "Google, Meta, LinkedIn",
                  "Conversion tracking",
                  "Creative testing",
                ],
              },
              {
                icon: Palette,
                title: "Branding & Design",
                bullets: [
                  "Logo & identity",
                  "UI/UX & design systems",
                  "Marketing creatives",
                ],
              },
              {
                icon: Rocket,
                title: "Startup Launch",
                bullets: [
                  "MVP in weeks",
                  "Pitch sites & waitlists",
                  "Analytics & automation",
                ],
              },
              {
                icon: Globe,
                title: "Consulting & Audits",
                bullets: [
                  "Tech & SEO audits",
                  "Roadmaps & KPIs",
                  "Growth playbooks",
                ],
              },
            ].map((card, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 hover:shadow-2xl"
              >
                <card.icon className="h-6 w-6" />
                <h3 className="mt-4 text-xl font-semibold">{card.title}</h3>
                <ul className="mt-3 space-y-2 text-sm text-slate-300">
                  {card.bullets.map((b, j) => (
                    <li key={j} className="flex gap-2">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-400" />{" "}
                      {b}
                    </li>
                  ))}
                </ul>
                <div className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full bg-emerald-500/10 blur-2xl transition group-hover:bg-emerald-500/20" />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>
      <Footer />
    </main>
  );
}
