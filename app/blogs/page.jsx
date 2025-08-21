"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Clock, BookOpen, Tag } from "lucide-react";
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

export default function Blogs() {
  const [isClient, setIsClient] = useState(false);
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    setIsClient(true);
    setWindowWidth(window.innerWidth);
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const blogPosts = [
    {
      title: "Top 10 Web Design Trends for 2025",
      excerpt: "Explore the latest trends shaping the future of web design, from minimalist layouts to immersive animations.",
      date: "August 20, 2025",
      slug: "top-10-web-design-trends-2025",
      tags: ["Web Design", "Trends", "2025"],
    },
    {
      title: "Boost Your Ecommerce Sales with SEO",
      excerpt: "Learn actionable SEO strategies to increase traffic and conversions for your online store.",
      date: "August 18, 2025",
      slug: "boost-ecommerce-sales-with-seo",
      tags: ["Ecommerce", "SEO", "Tips"],
    },
    {
      title: "The Power of Responsive Design",
      excerpt: "Discover why responsive design is essential for mobile users and how to implement it effectively.",
      date: "August 15, 2025",
      slug: "power-of-responsive-design",
      tags: ["Responsive Design", "Mobile", "Development"],
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-100">
      <Navbar />
      <section
        className="relative bg-gradient-to-b from-[var(--bg-primary)] to-[var(--bg-secondary)] py-8 sm:py-12 md:py-16 lg:py-24 overflow-hidden"
        itemScope
        itemType="https://schema.org/Blog"
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
            className="text-center space-y-4 sm:space-y-6 mb-8 sm:mb-12 md:mb-16 lg:mb-20"
          >
            <motion.h2
              variants={fadeUp}
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold font-['Playfair Display'] bg-clip-text text-transparent bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)]"
              itemProp="name"
            >
              Web Design & Ecommerce Blog
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="max-w-xl sm:max-w-2xl mx-auto text-[var(--text-secondary)] text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed font-['Inter'] font-light"
              itemProp="description"
            >
              Stay updated with the latest insights on web design, ecommerce tips, and SEO strategies to elevate your online presence.
            </motion.p>
          </motion.div>

          {/* Blog Posts Grid */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-12 md:mb-16"
          >
            {blogPosts.map((post, index) => (
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
                  className="rounded-2xl border border-[var(--border)]/50 bg-gradient-to-br from-[var(--bg-primary)]/80 to-[var(--bg-secondary)]/80 p-4 sm:p-6 md:p-8 glassmorphism card-hover-elegant"
                  itemProp="blogPost"
                  itemScope
                  itemType="https://schema.org/BlogPosting"
                >
                  <div className="text-center">
                    <h3
                      className="text-xl sm:text-2xl md:text-3xl font-semibold font-['Playfair Display'] text-[var(--text-primary)] mb-2"
                      itemProp="headline"
                    >
                      {post.title}
                    </h3>
                    <p className="text-[var(--text-secondary)] text-xs sm:text-sm md:text-base font-['Inter'] mb-2">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-center gap-2 text-[var(--text-muted)] text-xs sm:text-sm mb-4">
                      <Clock className="h-4 w-4" />
                      <time dateTime={post.date} itemProp="datePublished">
                        {post.date}
                      </time>
                    </div>
                    <div className="flex flex-wrap justify-center gap-2 mb-4">
                      {post.tags.map((tag, i) => (
                        <span
                          key={i}
                          className="px-2 py-1 bg-[var(--highlight)]/10 text-[var(--highlight)] text-xs rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)] px-3 sm:px-4 py-2 text-xs sm:text-sm md:text-base font-semibold text-[var(--bg-primary)] hover:from-[var(--accent-primary)] hover:to-[var(--highlight)] transition-all duration-300 cta-glow"
                      aria-label={`Read more about ${post.title}`}
                      itemProp="url"
                    >
                      <span className="relative z-10">Read More</span>
                      <ArrowRight className="relative z-10 h-4 sm:h-5 md:h-6 w-4 sm:w-5 md:w-6" />
                    </Link>
                  </div>
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
            className="text-center mt-8 sm:mt-12 md:mt-16"
          >
            <p className="text-[var(--text-secondary)] text-xs sm:text-sm md:text-base mb-2 sm:mb-4">
              Explore more articles and expert advice to grow your business online.
            </p>
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)] px-4 sm:px-6 py-2 sm:py-3 text-sm md:text-base font-semibold font-['Playfair Display'] text-[var(--bg-primary)] hover:from-[var(--accent-primary)] hover:to-[var(--highlight)] transition-all duration-400 cta-glow"
              aria-label="Explore All Blogs"
            >
              <span className="relative z-10">Explore All Blogs</span>
              <ArrowRight className="relative z-10 h-4 sm:h-5 md:h-6 w-4 sm:w-5 md:w-6" />
            </Link>
          </motion.div>
        </div>
      </section>
      <Footer />
    </main>
  );
}