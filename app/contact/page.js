"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};
const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.08 } } };

export default function Contact() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-100">
      <Navbar />
      <section
        id="contact"
        className="container mx-auto max-w-4xl px-4 py-16 md:py-24"
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
            Contact
          </motion.h2>
          <motion.p variants={fadeUp} className="mt-2 max-w-2xl text-slate-300">
            Tell us about your project. We usually respond within 24 hours.
          </motion.p>
          <motion.form
            variants={fadeUp}
            className="mt-8 grid gap-4 rounded-3xl border border-white/10 bg-white/5 p-6"
            onSubmit={(e) => {
              e.preventDefault();
              const form = e.currentTarget;
              const data = Object.fromEntries(new FormData(form).entries());
              alert(
                `Thanks! We'll reach out shortly.\n\n${JSON.stringify(
                  data,
                  null,
                  2
                )}`
              );
            }}
          >
            <div className="grid gap-4 md:grid-cols-2">
              <label className="grid gap-1 text-sm">
                <span>Name</span>
                <input
                  name="name"
                  required
                  className="rounded-xl bg-slate-950/40 border border-white/10 px-3 py-2 outline-none focus:border-emerald-400"
                />
              </label>
              <label className="grid gap-1 text-sm">
                <span>Email</span>
                <input
                  type="email"
                  name="email"
                  required
                  className="rounded-xl bg-slate-950/40 border border-white/10 px-3 py-2 outline-none focus:border-emerald-400"
                />
              </label>
            </div>
            <label className="grid gap-1 text-sm">
              <span>Company / Website (optional)</span>
              <input
                name="company"
                className="rounded-xl bg-slate-950/40 border border-white/10 px-3 py-2 outline-none focus:border-emerald-400"
              />
            </label>
            <label className="grid gap-1 text-sm">
              <span>Project Brief</span>
              <textarea
                name="brief"
                rows={4}
                required
                className="rounded-xl bg-slate-950/40 border border-white/10 px-3 py-2 outline-none focus:border-emerald-400"
              />
            </label>
            <div className="flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between">
              <div className="flex items-center gap-3 text-sm text-slate-300">
                <Mail className="h-4 w-4" /> hello@nextoradigital.com
              </div>
              <button className="inline-flex items-center gap-2 rounded-2xl bg-emerald-500 px-5 py-3 font-medium text-slate-900 hover:bg-emerald-400 transition">
                Send Message <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </motion.form>
        </motion.div>
      </section>
      <Footer />
    </main>
  );
}