"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { navLinks } from "@/data/navigation";
import { siteConfig } from "@/data/site";
import { cn } from "@/lib/cn";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        isScrolled
          ? "border-b border-slate-200 bg-white/80 shadow-soft backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      )}
    >
      <Container>
        <nav aria-label="Primary" className="flex h-20 items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-2.5 text-lg font-semibold tracking-tight text-slate-900"
            onClick={() => setIsMenuOpen(false)}
          >
            <span className="font-display">
              {siteConfig.shortName}{" "}
              <span className="text-brand">Digital</span>
            </span>
          </Link>

          <ul className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm font-medium text-slate-600 transition-colors hover:text-slate-900"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="hidden md:block">
            <Button href="/contact">Book a Call</Button>
          </div>

          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-button text-slate-900 md:hidden"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((prev) => !prev)}
          >
            <MenuIcon isOpen={isMenuOpen} />
          </button>
        </nav>
      </Container>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden border-t border-slate-200 bg-white md:hidden"
          >
            <Container className="flex flex-col gap-1 py-6">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="rounded-button px-3 py-3 text-base font-medium text-slate-700 hover:bg-slate-50 hover:text-slate-900"
                >
                  {link.label}
                </Link>
              ))}
              <Button href="/contact" size="lg" className="mt-3 w-full">
                Book a Call
              </Button>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

function MenuIcon({ isOpen }: { isOpen: boolean }) {
  return (
    <span className="relative block h-4 w-5">
      <motion.span
        className="absolute left-0 top-0 h-[1.5px] w-5 rounded-full bg-current"
        animate={isOpen ? { rotate: 45, top: "7px" } : { rotate: 0, top: "0px" }}
        transition={{ duration: 0.2 }}
      />
      <motion.span
        className="absolute left-0 top-[7px] h-[1.5px] w-5 rounded-full bg-current"
        animate={{ opacity: isOpen ? 0 : 1 }}
        transition={{ duration: 0.15 }}
      />
      <motion.span
        className="absolute bottom-0 left-0 h-[1.5px] w-5 rounded-full bg-current"
        animate={isOpen ? { rotate: -45, bottom: "7px" } : { rotate: 0, bottom: "0px" }}
        transition={{ duration: 0.2 }}
      />
    </span>
  );
}
