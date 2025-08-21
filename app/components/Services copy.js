"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Palette, Layers, Code2, Globe, LineChart } from "lucide-react";
import Link from "next/link";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};
const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.08 } } };

export default function Services() {
  return (
    <section className="bg-slate-900 py-20">
      <div className="container mx-auto max-w-6xl px-4">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-center space-y-6"
        >
          <motion.h2 variants={fadeUp} className="text-3xl font-bold">
            Our Services
          </motion.h2>
          <motion.p variants={fadeUp} className="text-xl text-emerald-400">
            Design. Develop. Deliver.
          </motion.p>
          <motion.p
            variants={fadeUp}
            className="max-w-2xl mx-auto text-slate-300"
          >
            Comprehensive solutions to elevate your brand with cutting-edge
            technology and creative expertise.
          </motion.p>
          <motion.div variants={fadeUp}>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 rounded-2xl bg-emerald-500 px-5 py-3 font-medium text-slate-900 hover:bg-emerald-400 transition"
            >
              Need Our Services? <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>
        </motion.div>
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-6 mt-12"
        >
          {[
            {
              title: "Logo Design",
              desc: "Unique, memorable logos that define your brand.",
              icon: Palette,
            },
            {
              title: "UI/UX Design",
              desc: "User-friendly interfaces with stunning visuals.",
              icon: Layers,
            },
            {
              title: "Web Applications",
              desc: "Custom, scalable apps for your business needs.",
              icon: Code2,
            },
            {
              title: "Code/No-Code Websites",
              desc: "Fast, responsive sites using modern platforms.",
              icon: Globe,
            },
            {
              title: "API Integration",
              desc: "Seamless connectivity for enhanced functionality.",
              icon: LineChart,
            },
            {
              title: "Ecommerce Websites",
              desc: "Powerful online stores to boost your sales.",
              icon: Layers,
            },
          ].map((service, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              className="rounded-2xl border border-white/10 bg-white/5 p-6"
            >
              <service.icon className="h-8 w-8 mb-4 text-emerald-400" />
              <h3 className="text-xl font-medium">{service.title}</h3>
              <p className="text-slate-300">{service.desc}</p>
              <ArrowRight className="h-5 w-5 mt-4 text-emerald-400" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}