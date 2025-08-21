"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, CheckCircle2, Users, Clock, Award } from "lucide-react";
import Link from "next/link";
import Tilt from "react-parallax-tilt";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};
const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.12 } } };
const iconPulse = {
  hover: { scale: 1.15, rotate: 10, transition: { duration: 0.4, ease: "easeOut" } },
};

export default function WhyChooseUs() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [isClient, setIsClient] = useState(false);
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    setIsClient(true);
    setWindowWidth(window.innerWidth);
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const testimonials = [
    {
      quote: "Nextora Digital delivered a stunning website that boosted conversions by 40%.",
      author: "Jane Doe, CEO of InnovateCo",
    },
    {
      quote: "Their team delivered a custom app in record time, exceeding our expectations.",
      author: "John Smith, Founder of TechTrend",
    },
    {
      quote: "Seamless collaboration and top-notch expertise made our project a success.",
      author: "Emily Chen, CMO of GrowEasy",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const features = [
    {
      title: "Unmatched Expertise",
      desc: "Blend of custom code and no-code mastery for tailored solutions.",
      icon: Award,
      benefit: "Solutions that fit your unique needs perfectly.",
    },
    {
      title: "Lightning-Fast Delivery",
      desc: "Rapid project turnaround without sacrificing quality.",
      icon: Clock,
      benefit: "Get to market faster with flawless results.",
    },
    {
      title: "Client-Centric Collaboration",
      desc: "Your vision drives our process with seamless communication.",
      icon: Users,
      benefit: "A partnership that brings your ideas to life.",
    },
  ];

  return (
    <section
      className="relative bg-gradient-to-b from-[var(--bg-primary)] to-[var(--bg-secondary)] py-16 md:py-24 lg:py-32 overflow-hidden"
      itemScope
      itemType="https://schema.org/Organization"
    >
      {/* Aurora Background */}
      <div className="aurora-pulse">
        <span className="aurora-layer"></span>
        <span className="aurora-layer"></span>
        <span className="aurora-layer"></span>
      </div>

      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-12 relative z-10">
        {/* Header Section */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-center space-y-6 sm:space-y-8 mb-12 sm:mb-16 lg:mb-20"
        >
          <motion.h2
            variants={fadeUp}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-['Playfair Display'] bg-clip-text text-transparent bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)]"
            itemProp="name"
          >
            Why Choose Nextora Digital?
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="max-w-2xl mx-auto text-[var(--text-secondary)] text-sm sm:text-base md:text-lg leading-relaxed font-['Inter'] font-light"
            itemProp="description"
          >
            We deliver innovative, high-impact solutions with unmatched expertise, speed, and dedication to your success.
          </motion.p>
          <motion.div variants={fadeUp}>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)] px-4 sm:px-6 py-2 sm:py-3 text-xs sm:text-sm font-semibold font-['Playfair Display'] text-[var(--bg-primary)] hover:from-[var(--accent-primary)] hover:to-[var(--highlight)] transition-all duration-400 cta-glow"
              aria-label="Partner with Us"
              itemProp="url"
            >
              <span className="relative z-10">Partner with Us</span>
              <ArrowRight className="relative z-10 h-4 sm:h-5 w-4 sm:w-5" />
            </Link>
          </motion.div>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16"
        >
          {features.map((feature, i) => (
            <Tilt
              key={i}
              tiltMaxAngleX={6}
              tiltMaxAngleY={6}
              perspective={1200}
              scale={1.02}
              transitionSpeed={400}
              tiltEnable={isClient && windowWidth > 640}
            >
              <motion.div
                variants={fadeUp}
                className="rounded-2xl border border-[var(--border)]/50 bg-gradient-to-br from-[var(--bg-primary)]/80 to-[var(--bg-secondary)]/80 p-4 sm:p-6 glassmorphism card-hover-elegant"
                itemProp="makesOffer"
                itemType="https://schema.org/Offer"
              >
                <motion.div
                  className="flex items-center justify-center w-12 sm:w-14 h-12 sm:h-14 rounded-full bg-[var(--accent-primary)]/15 mb-4 sm:mb-5 glow-md"
                  whileHover="hover"
                  variants={iconPulse}
                >
                  <feature.icon className="h-5 sm:h-6 w-5 sm:w-6 text-[var(--accent-primary)]" aria-hidden="true" />
                </motion.div>
                <h3
                  className="text-lg sm:text-xl font-semibold font-['Playfair Display'] text-[var(--text-primary)]"
                  itemProp="name"
                >
                  {feature.title}
                </h3>
                <p
                  className="text-[var(--text-secondary)] text-xs sm:text-sm leading-relaxed mt-2 font-['Inter'] font-light"
                  itemProp="description"
                >
                  {feature.desc}
                </p>
                <p className="text-[var(--highlight)] text-xs sm:text-sm mt-2 font-['Inter'] italic">
                  {feature.benefit}
                </p>
              </motion.div>
            </Tilt>
          ))}
        </motion.div>

        {/* Success Metrics */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16"
        >
          {[
            { label: "Projects Completed", value: 150, icon: CheckCircle2 },
            { label: "Client Satisfaction", value: "98%", icon: Users },
            { label: "Years of Expertise", value: 10, icon: Award },
          ].map((metric, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              className="text-center p-4 sm:p-6 rounded-2xl bg-[var(--bg-secondary)]/50 backdrop-blur-md"
            >
              <motion.div
                className="flex items-center justify-center w-10 sm:w-12 h-10 sm:h-12 rounded-full bg-[var(--highlight)]/15 mx-auto mb-3 sm:mb-4 glow-sm"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              >
                <metric.icon className="h-5 sm:h-6 w-5 sm:w-6 text-[var(--highlight)]" aria-hidden="true" />
              </motion.div>
              <p className="text-xl sm:text-2xl md:text-3xl font-bold text-[var(--accent-primary)]">
                {metric.value}
              </p>
              <p className="text-[var(--text-secondary)] text-xs sm:text-sm mt-1">{metric.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Testimonial Carousel */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-center max-w-xl sm:max-w-2xl mx-auto p-4 sm:p-6 rounded-2xl bg-[var(--bg-secondary)]/60 backdrop-blur-lg"
        >
          <AnimatePresence mode="wait">
            <motion.blockquote
              key={activeTestimonial}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="text-[var(--text-secondary)] text-sm sm:text-base md:text-lg italic leading-relaxed"
              itemProp="review"
              itemType="https://schema.org/Review"
            >
              "{testimonials[activeTestimonial].quote}"
              <footer className="mt-3 text-sm sm:text-base text-[var(--highlight)] font-['Inter']">
                – {testimonials[activeTestimonial].author}
              </footer>
            </motion.blockquote>
          </AnimatePresence>
          <motion.div
            variants={fadeUp}
            className="mt-6"
          >
            <Link
              href="/testimonials"
              className="inline-flex items-center gap-2 rounded-full bg-[var(--highlight)]/20 px-4 sm:px-5 py-2 text-xs sm:text-sm font-medium text-[var(--highlight)] hover:bg-[var(--highlight)]/30 transition-all duration-300"
              aria-label="Read More Testimonials"
            >
              Read More Testimonials
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}