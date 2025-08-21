"use client";

import React, { useState, useRef, memo } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
} from "framer-motion";
import { useSpring, animated } from "@react-spring/web";
import {
  ArrowRight,
  Code,
  Server,
  Brush,
  Cloud,
  Layout,
  Database,
  Box,
} from "lucide-react";
import Link from "next/link";
import Tilt from "react-parallax-tilt";
import { useSpotlightEffect } from "./SpotlightEffect";

// Animation variants
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const cardFlip = {
  rest: {
    rotateY: 0,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
  hover: {
    rotateY: 180,
    scale: 1.03,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const ctaPulse = {
  animate: { scale: [1, 1.04, 1], opacity: [0.9, 1, 0.9] },
  transition: { duration: 2.5, repeat: Infinity, ease: "easeInOut" },
};

const iconLoad = {
  initial: { opacity: 0, scale: 0.7 },
  animate: { opacity: 1, scale: 1, transition: { duration: 0.6 } },
  hover: { scale: 1.15, transition: { duration: 0.4 } },
};

// Constants
const CATEGORIES = ["All", "Frontend", "Backend", "Design", "DevOps"];

const TECHNOLOGIES = [
  {
    name: "React",
    category: "Frontend",
    icon: Code,
    description: "JavaScript library for dynamic UI.",
    proficiency: "Expert",
  },
  {
    name: "Next.js",
    category: "Frontend",
    icon: Layout,
    description: "React framework for SSR and static sites.",
    proficiency: "Expert",
  },
  {
    name: "Node.js",
    category: "Backend",
    icon: Server,
    description: "Scalable JavaScript runtime for servers.",
    proficiency: "Advanced",
  },
  {
    name: "Figma",
    category: "Design",
    icon: Brush,
    description: "Collaborative UI/UX prototyping tool.",
    proficiency: "Expert",
  },
  {
    name: "AWS",
    category: "DevOps",
    icon: Cloud,
    description: "Cloud platform for scalable apps.",
    proficiency: "Advanced",
  },
  {
    name: "Tailwind CSS",
    category: "Frontend",
    icon: Layout,
    description: "Utility-first CSS for rapid UI.",
    proficiency: "Expert",
  },
  {
    name: "MongoDB",
    category: "Backend",
    icon: Database,
    description: "NoSQL database for flexible storage.",
    proficiency: "Advanced",
  },
  {
    name: "Adobe XD",
    category: "Design",
    icon: Brush,
    description: "Modern UI/UX design tool.",
    proficiency: "Advanced",
  },
  {
    name: "Docker",
    category: "DevOps",
    icon: Box,
    description: "Containerization for deployments.",
    proficiency: "Advanced",
  },
  {
    name: "Laravel",
    category: "Backend",
    icon: Server,
    description: "PHP framework for elegant web applications.",
    proficiency: "Advanced",
  },
  {
    name: "CodeIgniter",
    category: "Backend",
    icon: Server,
    description: "Lightweight PHP framework for rapid development.",
    proficiency: "Advanced",
  },
  {
    name: "WordPress",
    category: "Backend",
    icon: Layout,
    description: "CMS platform for customizable websites.",
    proficiency: "Expert",
  },
];

// Counter component
const Counter = memo(({ end }) => {
  const { number } = useSpring({
    from: { number: 0 },
    number: end,
    config: { duration: 1800, easing: (t) => 1 - Math.pow(1 - t, 3) },
  });

  return (
    <span className="inline-flex items-center font-['Playfair Display']">
      <animated.span>{number.to((n) => n.toFixed(0))}</animated.span>
      <motion.span
        className="ml-2 text-[var(--highlight)]"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 1.8, repeat: Infinity }}
      >
        +
      </motion.span>
    </span>
  );
});

// ProficiencyMeter component
const ProficiencyMeter = memo(({ level }) => {
  const percentage = level === "Expert" ? 90 : 75;
  const { width } = useSpring({
    from: { width: 0 },
    width: percentage,
    config: { duration: 1000, easing: (t) => 1 - Math.pow(1 - t, 3) },
  });

  return (
    <div className="w-full h-2 bg-[var(--bg-secondary)]/50 rounded-full mt-4">
      <animated.div
        className={`h-full rounded-full ${
          level === "Expert"
            ? "bg-[var(--accent-primary)]"
            : "bg-[var(--accent-secondary)]"
        }`}
        style={{ width: width.to((w) => `${w}%`) }}
        role="progressbar"
        aria-valuenow={percentage}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label={`Proficiency level: ${level}`}
      />
    </div>
  );
});

// TechnologyCard component

const TechnologyCard = memo(({ tech }) => {
  const cardRef = useRef(null);
  const [isFlipped, setIsFlipped] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  useSpotlightEffect(cardRef);

  // Only run on client
  React.useEffect(() => {
    if (typeof window !== "undefined") {
      const handleResize = () => setIsDesktop(window.innerWidth > 768);
      handleResize(); // set initial value
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  const handleInteraction = () => setIsFlipped(!isFlipped);

  return (
    <Tilt
      tiltMaxAngleX={6}
      tiltMaxAngleY={6}
      perspective={1200}
      scale={1.02}
      transitionSpeed={500}
      tiltEnable={isDesktop}
    >
      <motion.div
        ref={cardRef}
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        exit={{ opacity: 0, y: 30 }}
        className="relative min-h-[220px] rounded-2xl bg-gradient-to-br from-[var(--bg-primary)]/80 to-[var(--bg-secondary)]/80 p-6 backdrop-blur-lg border border-[var(--border)]/50 group spotlight card-hover-elegant"
        whileHover={isDesktop ? "hover" : {}}
        variants={isDesktop ? cardFlip : {}}
        style={{ transformStyle: "preserve-3d" }}
        tabIndex={0}
        role="button"
        aria-label={`Learn more about ${tech.name}`}
        aria-expanded={isFlipped}
        onClick={handleInteraction}
        onKeyDown={(e) =>
          (e.key === "Enter" || e.key === " ") && handleInteraction()
        }
      >
        {/* Front Face */}
        <motion.div
          className="absolute inset-0 flex flex-col items-center justify-center backface-hidden"
          style={{ backfaceVisibility: "hidden", opacity: isFlipped ? 0 : 1 }}
          animate={{ opacity: isFlipped ? 0 : 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <motion.div
            className="w-16 h-16 mx-auto mb-5 flex items-center justify-center bg-gradient-to-r from-[var(--accent-primary)]/20 to-[var(--accent-secondary)]/20 rounded-full glow-md neon-glow"
            initial="initial"
            animate="animate"
            whileHover="hover"
            variants={iconLoad}
            aria-hidden="true"
          >
            <tech.icon className="h-9 w-9 text-[var(--accent-primary)]" />
          </motion.div>
          <span className="text-xs uppercase tracking-wider text-[var(--text-muted)] font-['Inter']">
            {tech.category}
          </span>
          <h3
            className="text-2xl font-semibold font-['Playfair Display'] text-transparent bg-clip-text bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)] text-center"
            itemProp="name"
          >
            {tech.name}
          </h3>
          <ProficiencyMeter level={tech.proficiency} />
        </motion.div>

        {/* Back Face */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center backface-hidden bg-gradient-to-br from-[var(--accent-primary)]/30 to-[var(--accent-secondary)]/30 rounded-2xl p-6"
          style={{
            backfaceVisibility: "hidden",
            transform: isDesktop ? "rotateY(180deg)" : "none",
            opacity: isFlipped ? 1 : 0,
          }}
          animate={{ opacity: isFlipped ? 1 : 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <p className="text-base text-[var(--text-primary)] text-center font-['Inter'] font-light leading-relaxed">
            {tech.description}
          </p>
        </motion.div>
      </motion.div>
    </Tilt>
  );
});


function Technologies() {
  const [activeCategory, setActiveCategory] = useState("All");
  const { scrollY } = useScroll();
  const yParallax = useTransform(scrollY, [0, 400], [0, -12]);

  const filteredTechnologies = React.useMemo(
    () =>
      activeCategory === "All"
        ? TECHNOLOGIES
        : TECHNOLOGIES.filter((tech) => tech.category === activeCategory),
    [activeCategory]
  );

  return (
    <section
      className="relative bg-gradient-to-b from-[var(--bg-primary)] to-[var(--bg-secondary)] py-16 md:py-24 overflow-hidden"
      itemScope
      itemType="https://schema.org/SoftwareApplication"
    >
      <div className="aurora-pulse">
        <span className="aurora-layer"></span>
        <span className="aurora-layer"></span>
        <span className="aurora-layer"></span>
      </div>

      <div className="container mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 relative z-10">
        {/* Header Section */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-center space-y-6 mb-12 md:mb-16"
        >
          <motion.div variants={fadeUp} className="flex justify-center gap-6">
            <div className="text-[var(--accent-primary)] font-['Playfair Display']">
              <span className="font-bold text-4xl md:text-5xl">
                <Counter end={10} />
              </span>{" "}
              Years of Expertise
            </div>
          </motion.div>
          <motion.h2
            variants={fadeUp}
            className="text-5xl md:text-6xl font-extrabold font-['Playfair Display'] bg-clip-text text-transparent bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)]"
            itemProp="name"
          >
            Technologies We Master
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="max-w-2xl mx-auto text-[var(--text-secondary)] text-lg md:text-xl leading-relaxed font-['Inter'] font-light"
            itemProp="description"
          >
            Cutting-edge tools and frameworks for innovative and elegant
            solutions.
          </motion.p>
        </motion.div>

        {/* Category Filters */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="flex flex-wrap gap-3 justify-center mb-10 bg-[var(--bg-secondary)]/80 backdrop-blur-md py-4 rounded-2xl scrollbar-hide"
          aria-live="polite"
          role="tablist"
        >
          {CATEGORIES.map((category) => (
            <motion.button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`relative rounded-xl border border-[var(--border)] px-5 py-2.5 text-base font-medium transition-all duration-300 ${
                activeCategory === category
                  ? "bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)] text-[var(--bg-primary)] glow-md active-filter"
                  : "text-[var(--text-primary)] hover:bg-[var(--accent-primary)]/15 hover:text-[var(--highlight)]"
              } focus:outline-none focus:ring-2 focus:ring-[var(--accent-primary)] focus:ring-offset-2 focus:ring-offset-[var(--bg-primary)]`}
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.94 }}
              role="tab"
              aria-selected={activeCategory === category}
              aria-label={`Filter technologies by ${category}`}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Category Stats */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="flex justify-center gap-5 mb-10 text-base text-[var(--text-secondary)] font-['Inter'] font-light"
        >
          <span>
            {filteredTechnologies.length} {activeCategory} Technologies
          </span>
        </motion.div>

        {/* Technologies Grid */}
        {filteredTechnologies.length > 0 ? (
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8"
            style={{ y: yParallax }}
            role="region"
            aria-label="Technologies grid"
          >
            <AnimatePresence>
              {filteredTechnologies.map((tech) => (
                <TechnologyCard key={tech.name} tech={tech} />
              ))}
            </AnimatePresence>
          </motion.div>
        ) : (
          <p className="text-center text-[var(--text-secondary)] text-lg font-['Inter'] font-light">
            No technologies found for this category.
          </p>
        )}

        {/* CTA */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="flex justify-center mt-16"
        >
          <Link href="/contact" passHref>
            <motion.div
              className="relative inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)] px-8 py-4 text-lg font-semibold font-['Playfair Display'] text-[var(--bg-primary)] hover:from-[var(--accent-primary)] hover:to-[var(--highlight)] focus:outline-none focus:ring-2 focus:ring-[var(--accent-primary)] focus:ring-offset-2 focus:ring-offset-[var(--bg-primary)] transition-all duration-400 cta-glow"
              aria-label="Work With Us"
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.94 }}
              {...ctaPulse}
            >
              <span className="relative z-10">Work With Us</span>
              <ArrowRight className="relative z-10 h-6 w-6" />
            </motion.div>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

export default Technologies;
