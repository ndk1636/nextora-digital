"use client";

import React, { useState, useEffect } from "react";
import { ArrowRight, Star, ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import Tilt from "react-parallax-tilt";
import {
  motion,
  useSpring,
  useTransform,
  AnimatePresence,
} from "framer-motion";
const MotionLink = motion(Link);

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};
const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.1 } } };
const slideIn = {
  hidden: { opacity: 0, x: 50 },
  show: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } },
};
const cardHover = {
  hover: { scale: 1.05, transition: { duration: 0.3 } },
};

function Counter({ end }) {
  const springValue = useSpring(0, {
    duration: 2000,
    bounce: 0,
  });

  const rounded = useTransform(springValue, (latest) => Math.round(latest));

  React.useEffect(() => {
    springValue.set(end);
  }, [end, springValue]);

  return <motion.span>{rounded}</motion.span>;
}

export default function Testimonials() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [isDesktop, setIsDesktop] = useState(false);

  const testimonials = [
    {
      quote:
        "Nextora Digital delivered a stunning website that boosted conversions by 40%.",
      name: "John Doe",
      role: "CEO, TechCorp",
      rating: 5,
    },
    {
      quote:
        "Their team delivered our project on time with exceptional quality and unmatched expertise.",
      name: "Jane Smith",
      role: "Founder, EcomStore",
      rating: 5,
    },
    {
      quote:
        "Partnering with Nextora Digital was the best decision for our brand’s digital growth.",
      name: "Mike Brown",
      role: "Marketing Lead, StartupX",
      rating: 5,
    },
  ];

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  // Detect window width for responsive layout
  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section
      className="relative bg-gradient-to-b from-[var(--bg-primary)] to-[var(--bg-secondary)] py-16 md:py-24 overflow-hidden"
      itemScope
      itemType="https://schema.org/Review"
    >
      {/* Aurora Background */}
      <div className="aurora">
        <span className="aurora-layer"></span>
        <span className="aurora-layer"></span>
        <span className="aurora-layer"></span>
      </div>

      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-center space-y-custom mb-12 md:mb-16"
        >
          <motion.div variants={fadeUp} className="flex justify-center gap-4">
            <div className="text-[var(--accent-primary)]">
              <span className="font-bold text-2xl sm:text-3xl">
                <Counter end={50} />+
              </span>{" "}
              Satisfied Clients
            </div>
          </motion.div>
          <motion.h2
            variants={fadeUp}
            className="text-4xl sm:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)]"
            itemProp="name"
          >
            What Our Clients Say
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="max-w-3xl mx-auto text-[var(--text-secondary)] text-base sm:text-lg leading-relaxed"
            itemProp="description"
          >
            Hear from our clients about how Nextora Digital elevated their
            brands with innovative solutions.
          </motion.p>
          <motion.div variants={fadeUp}>
            <MotionLink
              href="/contact"
              className="relative inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)] px-6 py-3 text-sm sm:text-base font-semibold text-[var(--bg-primary)] hover:from-[var(--accent-primary)] hover:to-[var(--highlight)] transition-all duration-300 cta-glow group"
              aria-label="Get a Free Website Audit"
              itemProp="url"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10">Get a Free Website Audit</span>
              <ArrowRight className="relative z-10 h-5 w-5" />
              <span className="absolute inset-0 bg-[var(--highlight)]/20 opacity-0 group-hover:opacity-30 transition-opacity duration-300 rounded-full" />
            </MotionLink>
          </motion.div>
        </motion.div>

        {/* Testimonial Carousel */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="relative grid md:grid-cols-3 gap-6 sm:gap-8"
        >
          <AnimatePresence mode="wait">
            {testimonials.map(
              (testimonial, i) =>
                (activeTestimonial === i || isDesktop) && (
                  <Tilt
                    key={i}
                    tiltMaxAngleX={8}
                    tiltMaxAngleY={8}
                    perspective={1000}
                    scale={1.02}
                    transitionSpeed={300}
                  >
                    <motion.div
                      variants={slideIn}
                      initial="hidden"
                      animate="show"
                      exit={{ opacity: 0, x: -50 }}
                      whileHover="hover"
                      className={`rounded-2xl border border-[var(--border)] bg-white/5 p-6 sm:p-8 glassmorphism card-hover group ${
                        activeTestimonial === i ? "glow-lg" : ""
                      }`}
                      itemProp="review"
                      itemType="https://schema.org/Review"
                    >
                      {/* Stars */}
                      <div className="flex gap-1 mb-4">
                        {Array(testimonial.rating)
                          .fill()
                          .map((_, j) => (
                            <Star
                              key={j}
                              className="h-5 w-5 text-[var(--highlight)] fill-current"
                              aria-hidden="true"
                            />
                          ))}
                      </div>

                      {/* Quote */}
                      <blockquote
                        className="text-[var(--text-secondary)] text-base sm:text-lg italic leading-relaxed"
                        itemProp="reviewBody"
                      >
                        "{testimonial.quote}"
                      </blockquote>

                      {/* Author */}
                      <footer className="mt-4">
                        <p
                          className="font-medium text-[var(--text-primary)]"
                          itemProp="author"
                        >
                          {testimonial.name}
                        </p>
                        <p className="text-sm text-[var(--text-secondary)]" itemProp="role">
                          {testimonial.role}
                        </p>
                      </footer>
                    </motion.div>
                  </Tilt>
                )
            )}
          </AnimatePresence>
        </motion.div>

        {/* Carousel Controls (Mobile Only) */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="flex justify-center gap-6 mt-8 md:hidden"
        >
          <button
            onClick={() =>
              setActiveTestimonial(Math.max(0, activeTestimonial - 1))
            }
            disabled={activeTestimonial === 0}
            className="p-3 rounded-full bg-[var(--accent-primary)]/20 disabled:opacity-50 hover:bg-[var(--accent-primary)]/40 transition glow-sm"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-5 w-5 text-[var(--accent-primary)]" />
          </button>
          <button
            onClick={() =>
              setActiveTestimonial(
                Math.min(testimonials.length - 1, activeTestimonial + 1)
              )
            }
            disabled={activeTestimonial === testimonials.length - 1}
            className="p-3 rounded-full bg-[var(--accent-primary)]/20 disabled:opacity-50 hover:bg-[var(--accent-primary)]/40 transition glow-sm"
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-5 w-5 text-[var(--accent-primary)]" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}