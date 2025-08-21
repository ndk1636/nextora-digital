"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";

const MotionLink = motion(Link);

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};
const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.15 } } };

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navItems = ["About Us", "Our Services", "Blogs", "Pricing"];

  return (
    <nav
      className="bg-[var(--bg-primary)]/95 backdrop-blur-xl border-b border-[var(--border)] sticky top-0 z-50 glassmorphismm"
      role="navigation"
      itemScope
      itemType="https://schema.org/SiteNavigationElement"
    >
      <div className="container mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 py-6 flex items-center justify-between">
        {/* Logo */}
        <motion.div variants={fadeUp} initial="hidden" animate="show">
          <MotionLink
            href="/"
            aria-label="Nextora Digital Home"
            itemProp="url"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="text-3xl sm:text-4xl font-bold font-['Playfair Display'] bg-clip-text text-transparent bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)] hover:from-[var(--accent-primary)] hover:to-[var(--highlight)] transition-all duration-500"
          >
            Nextora Digital
          </MotionLink>
        </motion.div>

        {/* Desktop Menu */}
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="show"
          className="hidden md:flex space-x-10"
        >
          {navItems.map((item) => (
            <MotionLink
              key={item}
              href={`/${item.toLowerCase().replace(" ", "-")}`}
              aria-label={item}
              itemProp="url"
              variants={fadeUp}
              whileHover={{ scale: 1.05 }}
              className="text-[var(--text-primary)] text-base font-medium font-['Inter'] hover:text-[var(--highlight)] transition-all duration-400 relative active-filter"
            >
              {item}
            </MotionLink>
          ))}
        </motion.div>

        {/* Desktop CTA */}
        <motion.div variants={fadeUp} initial="hidden" animate="show">
          <MotionLink
            href="/contact"
            aria-label="Contact Us"
            itemProp="url"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="hidden md:inline-flex relative rounded-full bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)] px-6 py-3 text-base font-semibold font-['Inter'] text-[var(--bg-primary)] hover:from-[var(--accent-primary)] hover:to-[var(--highlight)] transition-all duration-500 cta-glow group"
          >
            <span className="relative z-10">Contact Us</span>
            <span className="absolute inset-0 bg-[var(--highlight)]/15 opacity-0 group-hover:opacity-25 transition-opacity duration-400 rounded-full" />
          </MotionLink>
        </motion.div>

        {/* Mobile Menu Toggle */}
        <motion.button
          className="md:hidden text-[var(--text-primary)] p-2 rounded-full hover:bg-[var(--bg-secondary)]/60 transition-all duration-300 glow-sm"
          onClick={toggleMenu}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          {isOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
        </motion.button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="md:hidden bg-[var(--bg-primary)]/95 backdrop-blur-xl border-t border-[var(--border)] shadow-lg glassmorphism"
        >
          <div className="container mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 py-6 flex flex-col space-y-5">
            {navItems.map((item) => (
              <MotionLink
                key={item}
                href={`/${item.toLowerCase().replace(" ", "-")}`}
                aria-label={item}
                itemProp="url"
                onClick={toggleMenu}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="text-[var(--text-primary)] text-lg font-medium font-['Inter'] hover:text-[var(--highlight)] transition-all duration-400"
              >
                {item}
              </MotionLink>
            ))}
            <MotionLink
              href="/contact"
              aria-label="Contact Us"
              itemProp="url"
              onClick={toggleMenu}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative rounded-full bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)] px-6 py-3 text-base font-semibold font-['Inter'] text-[var(--bg-primary)] hover:from-[var(--accent-primary)] hover:to-[var(--highlight)] transition-all duration-500 cta-glow group text-center"
            >
              <span className="relative z-10">Contact Us</span>
              <span className="absolute inset-0 bg-[var(--highlight)]/15 opacity-0 group-hover:opacity-25 transition-opacity duration-400 rounded-full" />
            </MotionLink>
          </div>
        </motion.div>
      )}
    </nav>
  );
}