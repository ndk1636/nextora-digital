"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const pulse = {
  animate: { opacity: [0.7, 1, 0.7], scale: [1, 1.05, 1] },
  transition: { duration: 2, repeat: Infinity, ease: "easeInOut" },
};

export default function AnnouncementBar() {
  return (
    <section
      className="relative bg-gradient-to-r from-[var(--accent-primary)]/20 to-[var(--accent-secondary)]/20 py-2.5 text-center text-[var(--text-primary)] overflow-hidden"
      role="alert"
      itemScope
      itemType="https://schema.org/Offer"
    >
      <div className="aurora aurora-sm">
        <span className="aurora-layer"></span>
        <span className="aurora-layer"></span>
      </div>
      <motion.div className="relative z-10">
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 text-sm sm:text-base font-medium"
          aria-label="Get 50% off all services"
          itemProp="url"
        >
          Get <motion.span {...pulse} className="font-bold text-[var(--highlight)]">50% OFF</motion.span> on all our services
          <span className="sparkle"></span>
          <span className="sparkle"></span>
        </Link>
      </motion.div>
    </section>
  );
}