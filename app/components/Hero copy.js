"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};
const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.08 } } };

export default function Hero({ content }) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-950 to-slate-900">
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
              <span className="h-2 w-2 rounded-full bg-emerald-400" />{" "}
              {content.subtitle || "All-in-One Solution"}
            </p>
            <h1 className="text-4xl font-bold leading-tight sm:text-5xl md:text-6xl">
              {content.title.split("Shine Online")[0]}
              <span className="text-emerald-400">Shine Online</span> with Nextora
              Digital
            </h1>
            <p className="max-w-xl text-slate-300">{content.description}</p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-emerald-500 px-5 py-3 font-medium text-slate-900 shadow-lg hover:bg-emerald-400 transition"
                aria-label="Get 50% Off Now"
              >
                Get 50% Off Now! <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/15 px-5 py-3 font-medium hover:bg-white/5 transition"
                aria-label="Claim Your Offer"
              >
                Claim Your Offer
              </Link>
            </div>
            <div className="grid grid-cols-3 gap-4 pt-4 text-sm text-slate-400">
              <div>
                <span className="font-bold text-emerald-400">200+</span>{" "}
                Satisfied Clients
              </div>
              <div>
                <span className="font-bold text-emerald-400">500+</span> Projects
                Completed
              </div>
              <div>
                <span className="font-bold text-emerald-400">500+</span> Positive
                Reviews
              </div>
            </div>
            <ul className="space-y-2 text-sm text-slate-300">
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-emerald-400" /> Proven Team
                of Experts
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-emerald-400" /> Fast &
                Reliable Delivery
              </li>
            </ul>
          </motion.div>
          <motion.div variants={fadeUp} className="relative">
            <Image
              src="/hero-image.png"
              alt="Nextora Digital digital solutions"
              width={600}
              height={400}
              className="rounded-3xl shadow-2xl"
              priority
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}