"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  CheckCircle2,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import Countdown from "react-countdown";
import { siteContent } from "../lib/content";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const slideIn = {
  hidden: { opacity: 0, x: 60 },
  show: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const pulse = {
  hidden: { scale: 0.9, opacity: 0 },
  show: {
    scale: 1,
    opacity: 1,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

const tooltipVariants = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

export default function Process() {
  const [activeStep, setActiveStep] = useState(0);
  const [isDesktop, setIsDesktop] = useState(false);
  const [progress, setProgress] = useState(100); // Default to 100 for server rendering
  const carouselRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);

  const { process } = siteContent;

  // Detect window width on client side
  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Calculate progress on client side only
  useEffect(() => {
    const updateProgress = () => {
      const total = Date.parse(process.offerEndDate) - Date.now();
      const progressValue =
        ((Date.parse(process.offerEndDate) - Date.now()) / total) * 100;
      setProgress(Math.max(0, Math.min(100, progressValue))); // Clamp between 0 and 100
    };

    updateProgress(); // Initial calculation
    const interval = setInterval(updateProgress, 1000); // Update every second
    return () => clearInterval(interval); // Cleanup interval
  }, []);

  // Drag-to-scroll for mobile carousel
  const handleDragStart = (e) => {
    setIsDragging(true);
    setStartX(e.pageX || (e.touches && e.touches[0].pageX));
  };

  const handleDragEnd = () => {
    setIsDragging(false);
  };

  const handleDragMove = (e) => {
    if (!isDragging || !carouselRef.current) return;
    const x = e.pageX || (e.touches && e.touches[0].pageX);
    const diff = startX - x;
    if (Math.abs(diff) > 50) {
      if (diff > 0 && activeStep < process.steps.length - 1) {
        setActiveStep(activeStep + 1);
      } else if (diff < 0 && activeStep > 0) {
        setActiveStep(activeStep - 1);
      }
      setStartX(x);
    }
  };

  // Scroll to active step on mobile
  useEffect(() => {
    if (carouselRef.current && !isDesktop) {
      const children = Array.from(carouselRef.current.children);
      const stepElement = children[activeStep];
      if (stepElement) {
        stepElement.scrollIntoView({ behavior: "smooth", inline: "center" });
      }
    }
  }, [activeStep, isDesktop]);

  // Countdown renderer with elegant ring
  const renderer = ({ days, hours, minutes }) => {
    return (
      <div className="relative flex items-center justify-center">
        <motion.svg
          className="w-24 h-24"
          viewBox="0 0 40 40"
          animate={{ scale: [1, 1.03, 1] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <path
            d="M20 2.5 a 17.5 17.5 0 0 1 0 35 a 17.5 17.5 0 0 1 0 -35"
            fill="none"
            stroke="rgba(245, 246, 245, 0.08)"
            strokeWidth="2"
          />
          <path
            d="M20 2.5 a 17.5 17.5 0 0 1 0 35 a 17.5 17.5 0 0 1 0 -35"
            fill="none"
            stroke="url(#countdownGrad)"
            strokeWidth="2"
            strokeDasharray={`${progress}, 100`}
          />
          <defs>
            <linearGradient
              id="countdownGrad"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop
                offset="0%"
                style={{ stopColor: "var(--accent-primary)", stopOpacity: 1 }}
              />
              <stop
                offset="100%"
                style={{ stopColor: "var(--highlight)", stopOpacity: 1 }}
              />
            </linearGradient>
          </defs>
        </motion.svg>
        <span className="absolute text-sm md:text-base font-medium text-[var(--text-primary)]">
          {days}d {hours}h
        </span>
      </div>
    );
  };

  return (
    <section
      className="relative bg-gradient-to-b from-[var(--bg-primary)] to-[var(--bg-secondary)] py-16 md:py-24 overflow-hidden"
      itemScope
      itemType="https://schema.org/HowTo"
    >
      {/* Particle Background */}
      <div className="particles">
        <span className="sparkle"></span>
        <span className="sparkle"></span>
        <span className="sparkle"></span>
        <span className="sparkle"></span>
        <span className="sparkle"></span>
      </div>

      {/* Wave Background */}
      <svg
        className="absolute top-0 left-0 w-full h-48 text-[var(--accent-primary)]/8"
        preserveAspectRatio="none"
        viewBox="0 0 1440 140"
      >
        <path
          d="M0,70 C360,110 500,30 720,90 C1080,110 1440,70 1440,70 L1440,140 L0,140 Z"
          fill="currentColor"
          opacity="0.5"
        />
      </svg>

      <div className="container mx-auto max-w-7xl px-6 relative z-10">
        {/* Header Section */}
        <motion.div
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.25 } },
          }}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-center space-y-8 mb-16"
        >
          <motion.h2
            variants={fadeUp}
            className="text-4xl md:text-5xl font-extrabold font-['Playfair Display'] text-transparent bg-clip-text bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)]"
            itemProp="name"
          >
            {process.title}
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="max-w-4xl mx-auto text-[var(--text-secondary)] text-lg md:text-xl leading-relaxed font-['Inter'] font-medium"
            itemProp="description"
          >
            {process.description}
          </motion.p>
          <motion.div
            variants={fadeUp}
            className="text-[var(--text-primary)] font-medium"
            aria-live="polite"
          >
            <span className="text-base md:text-lg">Offer ends in: </span>
            <Countdown date={process.offerEndDate} renderer={renderer} />
          </motion.div>
          <motion.div variants={fadeUp}>
            <Link
              href="/contact"
              className="relative inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)] px-8 py-4 text-base md:text-lg font-semibold font-['Inter'] text-[var(--bg-primary)] hover:from-[var(--accent-primary)] hover:to-[var(--highlight)] transition-all duration-500 cta-glow"
              aria-label={process.cta}
            >
              <span className="relative z-10">{process.cta}</span>
              <ArrowRight className="relative z-10 h-6 w-6" />
            </Link>
          </motion.div>
        </motion.div>

        {/* Curved Timeline with Marker */}
        <div className="relative flex justify-center gap-10 md:gap-14 mb-20 overflow-x-auto pb-10 hide-scrollbar snap-x snap-mandatory timeline-container">
          <svg
            className="absolute top-0 left-0 w-full h-24 md:h-28 -z-10"
            preserveAspectRatio="none"
            viewBox="0 0 1200 120"
          >
            <path
              d="M0 60 C300 20 600 100 900 20 S1200 60 1200 60"
              fill="none"
              stroke="url(#timelineGrad)"
              strokeWidth="4"
              strokeDasharray="1200"
              strokeDashoffset={
                1200 - (activeStep / (process.steps.length - 1)) * 1200
              }
            >
              <animate
                attributeName="strokeDashoffset"
                from="1200"
                to={1200 - (activeStep / (process.steps.length - 1)) * 1200}
                dur="0.7s"
                fill="freeze"
                easing="ease-in-out"
              />
            </path>
            <motion.circle
              cx={`${(activeStep / (process.steps.length - 1)) * 100}%`}
              cy="60"
              r="12"
              fill="url(#markerGrad)"
              className="timeline-marker glow-md"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <animateMotion
                dur="0.7s"
                fill="freeze"
                path="M0 60 C300 20 600 100 900 20 S1200 60 1200 60"
                calcMode="linear"
                keyPoints={`0;${activeStep / (process.steps.length - 1)}`}
                keyTimes="0;1"
                keySplines="0.42 0 0.58 1"
              />
            </motion.circle>
            <defs>
              <linearGradient
                id="timelineGrad"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="0%"
              >
                <stop
                  offset="0%"
                  style={{ stopColor: "var(--accent-primary)", stopOpacity: 1 }}
                />
                <stop
                  offset="100%"
                  style={{
                    stopColor: "var(--accent-secondary)",
                    stopOpacity: 1,
                  }}
                />
              </linearGradient>
              <linearGradient
                id="markerGrad"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop
                  offset="0%"
                  style={{ stopColor: "var(--accent-primary)", stopOpacity: 1 }}
                />
                <stop
                  offset="100%"
                  style={{
                    stopColor: "var(--highlight)",
                    stopOpacity: 1,
                  }}
                />
              </linearGradient>
            </defs>
          </svg>
          {process.steps.map((step, i) => (
            <button
              key={i}
              onClick={() => setActiveStep(i)}
              className={`relative flex flex-col items-center text-center transition-all duration-500 group snap-center min-w-[120px] md:min-w-[160px] timeline-step ${
                activeStep === i
                  ? "text-[var(--accent-primary)] scale-110"
                  : "text-[var(--text-secondary)]"
              }`}
              aria-current={activeStep === i ? "step" : undefined}
              aria-label={`Go to step ${i + 1}: ${step.title}`}
            >
              <motion.div
                className={`w-16 h-16 md:w-18 md:h-18 rounded-full flex items-center justify-center font-semibold text-xl md:text-2xl border-2 timeline-circle ${
                  activeStep === i
                    ? "border-[var(--accent-primary)] bg-[var(--accent-primary)]/15 glow-md"
                    : "border-[var(--text-secondary)]/50"
                }`}
                animate={activeStep === i ? { scale: [1, 1.15, 1] } : {}}
                transition={{ duration: 0.6, ease: "easeInOut" }}
              >
                {activeStep > i ? (
                  <CheckCircle2 className="h-8 w-8 text-[var(--accent-primary)]" />
                ) : (
                  i + 1
                )}
              </motion.div>
              <span className="text-sm md:text-base mt-5 max-w-[160px] font-['Inter'] font-medium timeline-title">
                {step.title}
              </span>
              <motion.div
                variants={tooltipVariants}
                initial="hidden"
                animate="show"
                className="absolute -bottom-20 text-sm text-[var(--text-primary)] hidden group-hover:block md:block z-20 bg-[var(--bg-secondary)]/90 px-4 py-2 rounded-xl glassmorphism shadow-lg timeline-tooltip"
              >
                {step.tooltip}
              </motion.div>
            </button>
          ))}
        </div>
        {/* Progress Bar for Mobile */}
        <div className="flex justify-center gap-3 mt-6 md:hidden progress-bar">
          {process.steps.map((_, i) => (
            <span
              key={i}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                activeStep === i ? "active" : ""
              }`}
            />
          ))}
        </div>

        {/* Steps Carousel/Content */}
        <div
          ref={carouselRef}
          className="flex snap-x snap-mandatory overflow-x-auto md:overflow-visible hide-scrollbar"
          onMouseDown={handleDragStart}
          onMouseMove={handleDragMove}
          onMouseUp={handleDragEnd}
          onTouchStart={handleDragStart}
          onTouchMove={handleDragMove}
          onTouchEnd={handleDragEnd}
        >
          <AnimatePresence mode="wait">
            {process.steps.map(
              (step, i) =>
                (activeStep === i || isDesktop) && (
                  <motion.div
                    key={i}
                    variants={slideIn}
                    initial="hidden"
                    animate="show"
                    exit={{ opacity: 0, x: -60 }}
                    className="snap-center md:snap-none min-w-full md:min-w-0 md:w-1/2 mx-auto group"
                    itemProp="step"
                    itemScope
                    itemType="https://schema.org/HowToStep"
                  >
                    <div
                      className={`p-8 rounded-3xl glassmorphism transition-all duration-500 ${
                        activeStep === i ? "scale-105 glow-lg" : ""
                      } shadow-lg hover:shadow-xl`}
                    >
                      <div className="flex flex-col md:flex-row items-center gap-8">
                        <div className="md:w-1/2 order-2 md:order-1">
                          <h3
                            className="text-2xl md:text-3xl font-semibold font-['Playfair Display'] text-[var(--text-primary)]"
                            itemProp="name"
                          >
                            {step.title}
                          </h3>
                          <p
                            className="text-[var(--text-secondary)] mt-3 text-base md:text-lg font-['Inter'] leading-relaxed"
                            itemProp="description"
                          >
                            {step.description}
                          </p>
                          <p
                            className="text-sm text-[var(--text-secondary)] mt-2"
                            itemProp="estimatedDuration"
                          >
                            Duration:{" "}
                            {step.duration.replace("PT", "").toLowerCase()}
                          </p>
                          <p
                            className="text-sm text-[var(--text-secondary)] mt-2"
                            itemProp="tool"
                          >
                            Tools: {step.tools.join(", ")}
                          </p>
                        </div>
                        <div className="md:w-1/2 order-1 md:order-2">
                          <Image
                            src={step.svg}
                            alt={step.alt}
                            width={140}
                            height={140}
                            className="w-full h-36 md:h-56 object-contain rounded-lg shadow-md transform group-hover:scale-105 group-hover:brightness-110 transition-all duration-500"
                            itemProp="image"
                          />
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )
            )}
          </AnimatePresence>
        </div>

        {/* Carousel Controls (Mobile Only) */}
        <div className="flex justify-center gap-6 mt-8 md:hidden">
          <button
            onClick={() => setActiveStep(Math.max(0, activeStep - 1))}
            disabled={activeStep === 0}
            className="p-3 rounded-full bg-[var(--accent-primary)]/15 disabled:opacity-40 hover:bg-[var(--accent-primary)]/30 transition-all duration-300 glow-md"
            aria-label="Previous step"
          >
            <ChevronLeft className="h-6 w-6 text-[var(--accent-primary)]" />
          </button>
          <button
            onClick={() =>
              setActiveStep(Math.min(process.steps.length - 1, activeStep + 1))
            }
            disabled={activeStep === process.steps.length - 1}
            className="p-3 rounded-full bg-[var(--accent-primary)]/15 disabled:opacity-40 hover:bg-[var(--accent-primary)]/30 transition-all duration-300 glow-md"
            aria-label="Next step"
          >
            <ChevronRight className="h-6 w-6 text-[var(--accent-primary)]" />
          </button>
        </div>
      </div>
    </section>
  );
}