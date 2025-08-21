"use client";

import React from "react";
import { motion } from "framer-motion";
import { Facebook, Linkedin, Instagram, Dribbble } from "lucide-react";
import Link from "next/link";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};
const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.08 } } };

export default function Footer() {
  return (
    <footer className="bg-[var(--bg-secondary)] border-t border-[var(--border)] py-12">
      <div className="container mx-auto max-w-6xl px-4">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-4 gap-8"
        >
          <motion.div variants={fadeUp}>
            <h3 className="text-xl font-bold text-[var(--accent-primary)]">Nextora Digital</h3>
            <p className="text-[var(--text-secondary)] mt-4">
              Your trusted partner for digital excellence. From design to
              development, we make your brand shine.
            </p>
          </motion.div>
          <motion.div variants={fadeUp}>
            <h4 className="font-medium">Useful Links</h4>
            <ul className="mt-4 space-y-2 text-[var(--text-secondary)]">
              {["Blog", "Privacy Policy", "Terms of Service"].map((link) => (
                <li key={link}>
                  <Link
                    href={`/${link.toLowerCase().replace(" ", "-")}`}
                    className="hover:text-[var(--highlight)] transition"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
          <motion.div variants={fadeUp}>
            <h4 className="font-medium">Overview</h4>
            <ul className="mt-4 space-y-2 text-[var(--text-secondary)]">
              {["About Us", "Services", "Portfolio", "Contact"].map((link) => (
                <li key={link}>
                  <Link
                    href={`/${link.toLowerCase().replace(" ", "-")}`}
                    className="hover:text-[var(--highlight)] transition"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
          <motion.div variants={fadeUp}>
            <h4 className="font-medium">Follow Us</h4>
            <div className="flex gap-4 mt-4">
              {[
                { name: "Facebook", icon: Facebook, url: "https://facebook.com" },
                { name: "LinkedIn", icon: Linkedin, url: "https://linkedin.com" },
                { name: "Instagram", icon: Instagram, url: "https://instagram.com" },
                { name: "Dribbble", icon: Dribbble, url: "https://dribbble.com" },
              ].map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  aria-label={social.name}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <social.icon className="h-6 w-6 text-[var(--text-secondary)] hover:text-[var(--accent-primary)] transition" />
                </a>
              ))}
            </div>
          </motion.div>
        </motion.div>
        <motion.p
          variants={fadeUp}
          className="text-center text-[var(--text-secondary)] mt-12"
        >
          © 2025 – Nextora Digital. All rights reserved.
        </motion.p>
      </div>
    </footer>
  );
}