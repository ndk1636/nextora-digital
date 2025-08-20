"use client";

import React, { useState } from "react";
import { Globe, ArrowRight, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { siteContent } from "../lib/content";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const menuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  };

  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-slate-900/60 border-b border-teal-600/20">
      <nav className="container mx-auto flex items-center justify-between py-4 px-4">
        <div className="flex items-center gap-2">
          <div className="h-10 w-10 rounded-2xl bg-teal-400/20 ring-1 ring-teal-400/40 grid place-items-center">
            <Globe className="h-6 w-6 text-teal-400" aria-hidden="true" />
          </div>
          <span className="text-xl font-semibold tracking-tight text-slate-200">
            {siteContent.footer.company}
          </span>
        </div>
        <button
          className="md:hidden p-2 focus:outline-none focus:ring-2 focus:ring-teal-400 rounded"
          onClick={toggleMenu}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
        >
          {isOpen ? (
            <X className="h-6 w-6 text-slate-200" />
          ) : (
            <Menu className="h-6 w-6 text-slate-200" />
          )}
        </button>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          {siteContent.nav.links.map((link, i) => (
            <Link
              key={i}
              href={link.href}
              className="relative text-slate-200 hover:text-teal-400 transition after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-teal-400 after:transition-all hover:after:w-full"
              rel="nofollow"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href={siteContent.nav.cta.href}
            className="inline-flex items-center gap-2 rounded-2xl bg-emerald-500 px-5 py-2.5 font-semibold text-slate-900 shadow-md hover:bg-emerald-400 hover:text-slate-900 transition-transform transform hover:scale-105"
            aria-label={siteContent.nav.cta.label}
            rel="nofollow"
          >
            {siteContent.nav.cta.label} <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </nav>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="md:hidden bg-slate-900/95 border-t border-teal-600/20"
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={menuVariants}
          >
            <div className="container mx-auto flex flex-col gap-4 py-4 px-4">
              {siteContent.nav.links.map((link, i) => (
                <Link
                  key={i}
                  href={link.href}
                  className="text-slate-200 hover:text-teal-400 transition font-medium text-lg"
                  onClick={toggleMenu}
                  rel="nofollow"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href={siteContent.nav.cta.href}
                className="inline-flex items-center gap-2 rounded-2xl bg-emerald-500 px-5 py-2.5 font-semibold text-slate-900 shadow-md hover:bg-emerald-400 transition"
                onClick={toggleMenu}
                aria-label={siteContent.nav.cta.label}
                rel="nofollow"
              >
                {siteContent.nav.cta.label} <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
