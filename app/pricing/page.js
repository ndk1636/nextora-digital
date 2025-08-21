"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, CheckCircle2, Clock, Award } from "lucide-react";
import Link from "next/link";
import Tilt from "react-parallax-tilt";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};
const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.12 } } };
const cardHover = {
  hover: { scale: 1.05, transition: { duration: 0.4, ease: "easeOut" } },
};

export default function Pricing() {
  const [isClient, setIsClient] = useState(false);
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    setIsClient(true);
    setWindowWidth(window.innerWidth);
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const plans = [
    {
      title: "Starter",
      price: "999",
      description: "Perfect For Small Projects",
      slots: 4,
      features: [
        "6-10 pages",
        "Exclusive design",
        "Ecommerce functionality",
        "Optimized Images",
        "Express Build",
        "Speed Optimization",
        "10 Products Uploaded",
        "On Page SEO",
        "Off Page SEO",
        "8 Social Media Posts",
        "COM Domain (1 year)",
        "Web Hosting (1 year)",
        "Blog Integration",
        "Email Marketing Setup",
      ],
    },
    {
      title: "Professional",
      price: "1,999",
      description: "Great For Growing Brands & Online Stores",
      slots: 2,
      features: [
        "10-20 pages",
        "Advanced Design",
        "Ecommerce functionality",
        "Optimized Images",
        "Speed Optimization",
        "20 Products Uploaded",
        "On Page SEO",
        "Off Page SEO",
        "8 Social Media Posts",
        "COM Domain (1 year)",
        "Web Hosting (1 year)",
        "Blog Integration",
        "Email Marketing Setup",
      ],
    },
    {
      title: "Business",
      price: "3,999",
      description: "Best For Businesses & Entrepreneurs",
      slots: 2,
      features: [
        "20-40 pages",
        "Advanced Design",
        "Ecommerce functionality",
        "Optimized Images",
        "Premium Launch",
        "Speed Optimization",
        "On Page SEO",
        "Off Page SEO",
        "8 Social Media Posts",
        "COM Domain (1 year)",
        "Web Hosting (1 year)",
        "50+ Products Uploaded",
        "Blog Integration",
        "Priority Support",
      ],
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-100">
      <Navbar />
      <section
        className="relative bg-gradient-to-b from-[var(--bg-primary)] to-[var(--bg-secondary)] py-16 md:py-24 lg:py-32 overflow-hidden"
        itemScope
        itemType="https://schema.org/Product"
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
              Affordable Web Design Pricing
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="max-w-2xl mx-auto text-[var(--text-secondary)] text-sm sm:text-base md:text-lg leading-relaxed font-['Inter'] font-light"
              itemProp="description"
            >
              Choose the perfect plan for your website or ecommerce store. Our
              packages are tailored to boost your online presence with expert
              design and SEO optimization.
            </motion.p>
          </motion.div>

          {/* Pricing Plans */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16"
          >
            {plans.map((plan, index) => (
              <Tilt
                key={index}
                tiltMaxAngleX={6}
                tiltMaxAngleY={6}
                perspective={1200}
                scale={1.02}
                transitionSpeed={400}
                tiltEnable={isClient && windowWidth > 640}
              >
                <motion.div
                  variants={fadeUp}
                  className="rounded-2xl border border-[var(--border)]/50 bg-gradient-to-br from-[var(--bg-primary)]/80 to-[var(--bg-secondary)]/80 p-6 sm:p-8 glassmorphism card-hover-elegant"
                  itemProp="offers"
                  itemScope
                  itemType="https://schema.org/Offer"
                >
                  <div className="text-center">
                    <h3
                      className="text-2xl sm:text-3xl font-semibold font-['Playfair Display'] text-[var(--text-primary)] mb-2"
                      itemProp="name"
                    >
                      {plan.title}
                    </h3>
                    <p className="text-[var(--text-secondary)] text-sm font-['Inter'] mb-4">
                      {plan.description}
                    </p>
                    {plan.slots > 0 && (
                      <p className="text-[var(--highlight)] text-xs font-medium mb-4">
                        {plan.slots} Slots Available, Hurry!
                      </p>
                    )}
                    <p className="text-3xl sm:text-4xl font-bold text-[var(--accent-primary)] mb-4">
                      ${plan.price}
                      <span className="text-sm text-[var(--text-secondary)]">
                        /month
                      </span>
                    </p>
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)] px-4 py-2 text-xs sm:text-sm font-semibold text-[var(--bg-primary)] hover:from-[var(--accent-primary)] hover:to-[var(--highlight)] transition-all duration-300 cta-glow"
                      aria-label={`Book a free call for ${plan.title} plan`}
                      itemProp="url"
                    >
                      <span className="relative z-10">Book a Free Call</span>
                      <ArrowRight className="relative z-10 h-4 sm:h-5 w-4 sm:w-5" />
                    </Link>
                  </div>
                  <ul className="mt-6 space-y-2">
                    {plan.features.map((feature, i) => (
                      <li
                        key={i}
                        className="flex items-center text-[var(--text-secondary)] text-sm"
                      >
                        <CheckCircle2
                          className="h-5 w-5 text-[var(--success)] mr-2"
                          aria-hidden="true"
                        />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </Tilt>
            ))}
          </motion.div>

          {/* Call to Action */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-center mt-12 sm:mt-16"
          >
            <p className="text-[var(--text-secondary)] text-sm sm:text-base mb-4">
              Need a custom plan? Contact us for personalized pricing tailored
              to your needs.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)] px-6 py-3 text-sm font-semibold font-['Playfair Display'] text-[var(--bg-primary)] hover:from-[var(--accent-primary)] hover:to-[var(--highlight)] transition-all duration-400 cta-glow"
              aria-label="Contact Us for Custom Pricing"
            >
              <span className="relative z-10">Contact Us</span>
              <ArrowRight className="relative z-10 h-5 w-5" />
            </Link>
          </motion.div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
