"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Tilt from "react-parallax-tilt";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};
const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.12 } } };
const cardHover = {
  hover: { scale: 1.06, transition: { duration: 0.4, ease: "easeOut" } },
};

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [tiltEnabled, setTiltEnabled] = useState(false);

  // ✅ Safe check for window (runs only on client)
  useEffect(() => {
    if (typeof window !== "undefined") {
      setTiltEnabled(window.innerWidth > 640);
    }
  }, []);

  const categories = [
    "All",
    "Logo Design",
    "UI UX",
    "Webflow/Wordpress",
    "Ecommerce",
    "Custom Development",
  ];

  const projects = [
    {
      id: 1,
      title: "Brand Identity Revamp",
      category: "Logo Design",
      img: "/portfolio-1.jpg",
      alt: "Logo design for a modern brand",
      description: "A vibrant logo design that elevated brand recognition.",
      link: "/portfolio/brand-identity",
    },
    {
      id: 2,
      title: "Mobile App Interface",
      category: "UI UX",
      img: "/portfolio-2.jpg",
      alt: "UI/UX design for a mobile app",
      description: "Intuitive UI/UX design for seamless user experience.",
      link: "/portfolio/mobile-app",
    },
    {
      id: 3,
      title: "Webflow Portfolio Site",
      category: "Webflow/Wordpress",
      img: "/portfolio-3.png",
      alt: "Webflow portfolio website",
      description: "A sleek Webflow site showcasing creative work.",
      link: "/portfolio/webflow-site",
    },
    {
      id: 4,
      title: "Ecommerce Platform",
      category: "Ecommerce",
      img: "/portfolio-4.jpg",
      alt: "Ecommerce website design",
      description: "A high-converting ecommerce solution for retail.",
      link: "/portfolio/ecommerce-platform",
    },
    {
      id: 5,
      title: "Custom CRM System",
      category: "Custom Development",
      img: "/portfolio-5.jpg",
      alt: "Custom CRM development",
      description: "A tailored CRM system for streamlined operations.",
      link: "/portfolio/custom-crm",
    },
    {
      id: 6,
      title: "Startup Branding",
      category: "Logo Design",
      img: "/portfolio-6.jpg",
      alt: "Startup branding logo",
      description: "Bold branding for a tech startup’s market entry.",
      link: "/portfolio/startup-branding",
    },
  ];

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (
    <section className="relative bg-gradient-to-b from-[var(--bg-primary)] to-[var(--bg-secondary)] py-16 md:py-24 lg:py-32 overflow-hidden">
      {/* Aurora Background */}
      <div className="aurora-pulse">
        <span className="aurora-layer"></span>
        <span className="aurora-layer"></span>
        <span className="aurora-layer"></span>
      </div>

      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-12 relative z-10">
        {/* Header */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16 lg:mb-20"
        >
          <motion.h2
            variants={fadeUp}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-['Playfair Display'] bg-clip-text text-transparent bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)]"
          >
            Our Portfolio
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="max-w-2xl mx-auto text-[var(--text-secondary)] text-sm sm:text-base md:text-lg leading-relaxed font-['Inter'] font-light mt-4"
          >
            Explore our diverse range of projects showcasing creativity,
            technical expertise, and client success.
          </motion.p>
        </motion.div>

        {/* Category Filters */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-10 sm:mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`rounded-xl border border-[var(--border)] px-3 sm:px-4 py-2 text-xs sm:text-sm font-medium transition-all duration-300 ${
                activeCategory === category
                  ? "bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)] text-[var(--bg-primary)] glow-md active-filter"
                  : "text-[var(--text-primary)] hover:bg-[var(--accent-primary)]/15 hover:text-[var(--highlight)]"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Project Grid */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <Tilt
                key={project.id}
                tiltMaxAngleX={6}
                tiltMaxAngleY={6}
                perspective={1200}
                scale={1.02}
                transitionSpeed={400}
                tiltEnable={tiltEnabled} // ✅ fixed
              >
                <motion.div
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="show"
                  exit={{ opacity: 0, y: 30 }}
                  whileHover="hover"
                  variants={cardHover}
                  className="rounded-2xl border border-[var(--border)]/50 bg-gradient-to-br from-[var(--bg-primary)]/80 to-[var(--bg-secondary)]/80 p-4 sm:p-6 backdrop-blur-md glassmorphism card-hover-elegant"
                >
                  <img
                    src={project.img}
                    alt={project.alt}
                    className="w-full h-32 sm:h-40 md:h-48 object-cover rounded-xl mb-4 transition-all duration-300 hover:brightness-110"
                  />
                  <h3 className="text-lg sm:text-xl font-semibold font-['Playfair Display'] text-[var(--text-primary)]">
                    {project.title}
                  </h3>
                  <p className="text-[var(--text-secondary)] text-xs sm:text-sm leading-relaxed mt-2 font-['Inter'] font-light">
                    {project.description}
                  </p>
                  <motion.div whileHover={{ x: 4 }}>
                    <Link
                      href={project.link}
                      className="inline-flex items-center gap-2 mt-3 text-sm font-medium text-[var(--accent-primary)] hover:text-[var(--highlight)] transition-all duration-300"
                    >
                      View Project{" "}
                      <ArrowRight className="h-4 sm:h-5 w-4 sm:w-5" />
                    </Link>
                  </motion.div>
                </motion.div>
              </Tilt>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* CTA Button */}
        <motion.div whileHover={{ scale: 1.06 }} whileTap={{ scale: 0.94 }}>
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)] px-5 sm:px-6 py-2 sm:py-3 text-sm font-semibold font-['Playfair Display'] text-[var(--bg-primary)] hover:from-[var(--accent-primary)] hover:to-[var(--highlight)] transition-all duration-400 cta-glow"
          >
            <span>See All Projects</span>
            <ArrowRight className="h-4 sm:h-5 w-4 sm:w-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
