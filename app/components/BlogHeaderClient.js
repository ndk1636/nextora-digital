'use client';

import { motion } from "framer-motion";
import { ArrowLeft, Clock } from "lucide-react";
import Link from "next/link";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};
const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.12 } } };

export default function BlogHeaderClient({ title, date }) {
  return (
    <motion.div
      variants={stagger}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="text-center space-y-4 sm:space-y-6 mb-12"
    >
      <motion.div variants={fadeUp}>
        <Link
          href="/blogs"
          className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors"
        >
          <ArrowLeft className="h-5 w-5" />
          <span>Back to Blog</span>
        </Link>
      </motion.div>

      <motion.h1
        variants={fadeUp}
        className="text-3xl md:text-4xl lg:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-pink-500"
      >
        {title}
      </motion.h1>

      <motion.div
        variants={fadeUp}
        className="flex items-center justify-center gap-2 text-slate-400 text-sm"
      >
        <Clock className="h-4 w-4" />
        <time dateTime={date}>{date}</time>
      </motion.div>
    </motion.div>
  );
}
