"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Palette, Layers, Code2, Globe, LineChart, ShoppingCart } from "lucide-react";
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

export default function Services() {
  const [isClient, setIsClient] = useState(false);
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    setIsClient(true);
    setWindowWidth(window.innerWidth);
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const services = [
    {
      title: "Logo Design",
      desc: "Craft iconic logos that embody your brand’s unique story.",
      icon: Palette,
      benefit: "Make a lasting impression with a bold identity.",
    },
    {
      title: "UI/UX Design",
      desc: "Create intuitive, visually captivating interfaces for exceptional user experiences.",
      icon: Layers,
      benefit: "Captivate users with seamless, stunning designs.",
    },
    {
      title: "Web Applications",
      desc: "Develop powerful, scalable apps tailored to your business needs.",
      icon: Code2,
      benefit: "Optimize operations with cutting-edge solutions.",
    },
    {
      title: "Code/No-Code Websites",
      desc: "Build fast, responsive websites using Next.js, Webflow, or custom code.",
      icon: Globe,
      benefit: "Launch your digital presence with speed and style.",
    },
    {
      title: "API Integration",
      desc: "Seamlessly connect systems for enhanced functionality and automation.",
      icon: LineChart,
      benefit: "Streamline workflows with smart integrations.",
    },
    {
      title: "Ecommerce Websites",
      desc: "Design high-converting online stores to skyrocket your sales.",
      icon: ShoppingCart,
      benefit: "Drive revenue with a robust ecommerce platform.",
    },
  ];

  return (
    <section
      className="relative bg-gradient-to-b from-[var(--bg-primary)] to-[var(--bg-secondary)] py-16 md:py-24 lg:py-32 overflow-hidden"
      itemScope
      itemType="https://schema.org/Service"
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
            Our Services
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="text-xl sm:text-2xl font-semibold font-['Playfair Display'] text-[var(--highlight)]"
            itemProp="description"
          >
            Innovate. Build. Succeed.
          </motion.p>
          <motion.p
            variants={fadeUp}
            className="max-w-2xl mx-auto text-[var(--text-secondary)] text-sm sm:text-base md:text-lg leading-relaxed font-['Inter'] font-light"
          >
            Collaborate with our expert team to transform your vision into reality with innovative, high-impact digital solutions.
          </motion.p>
          <motion.div variants={fadeUp}>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)] px-4 sm:px-6 py-2 sm:py-3 text-xs sm:text-sm font-semibold font-['Playfair Display'] text-[var(--bg-primary)] hover:from-[var(--accent-primary)] hover:to-[var(--highlight)] transition-all duration-400 cta-glow"
              aria-label="Discover Our Services"
              itemProp="url"
            >
              <span className="relative z-10">Discover Our Services</span>
              <ArrowRight className="relative z-10 h-4 sm:h-5 w-4 sm:w-5" />
            </Link>
          </motion.div>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16"
        >
          {services.map((service, i) => (
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
                itemProp="serviceType"
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.4 }}
              >
                <motion.div
                  className="flex items-center justify-center w-12 sm:w-14 h-12 sm:h-14 rounded-full bg-[var(--accent-primary)]/15 mb-4 sm:mb-5 glow-md"
                  whileHover="hover"
                  variants={iconPulse}
                >
                  <service.icon className="h-5 sm:h-6 w-5 sm:w-6 text-[var(--accent-primary)]" aria-hidden="true" />
                </motion.div>
                <h3
                  className="text-lg sm:text-xl font-semibold font-['Playfair Display'] text-[var(--text-primary)]"
                  itemProp="name"
                >
                  {service.title}
                </h3>
                <p
                  className="text-[var(--text-secondary)] text-xs sm:text-sm leading-relaxed mt-2 font-['Inter'] font-light"
                  itemProp="description"
                >
                  {service.desc}
                </p>
                <p className="text-[var(--highlight)] text-xs sm:text-sm mt-2 font-['Inter'] italic">
                  {service.benefit}
                </p>
                <motion.div
                  className="mt-4"
                  whileHover={{ x: 8 }}
                  transition={{ duration: 0.3 }}
                >
                  <Link href={`/services/${service.title.toLowerCase().replace(/ /g, "-")}`}>
                    <ArrowRight className="h-5 sm:h-6 w-5 sm:w-6 text-[var(--accent-primary)] hover:text-[var(--highlight)] transition-colors duration-300" />
                  </Link>
                </motion.div>
              </motion.div>
            </Tilt>
          ))}
        </motion.div>

        {/* Testimonial Snippet */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-12 text-center max-w-2xl mx-auto p-4 sm:p-6 rounded-2xl bg-[var(--bg-secondary)]/60 backdrop-blur-lg"
        >
          <blockquote className="text-[var(--text-secondary)] text-sm sm:text-base md:text-lg italic leading-relaxed">
            "Nextora Digital delivered a stunning website that boosted our conversions by 40%. Their expertise is unmatched!" – Jane Doe, CEO of InnovateCo
          </blockquote>
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