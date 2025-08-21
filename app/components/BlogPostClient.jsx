'use client';
import React from "react";
import { motion } from "framer-motion"; // Explicitly import only motion
import { Tag } from "lucide-react";
import Link from "next/link";
import Tilt from "react-parallax-tilt";

const cardHover = {
  hover: { scale: 1.05, transition: { duration: 0.4, ease: "easeOut" } },
};

export default function BlogPostClient({ blogPost }) {
  return (
    <Tilt tiltMaxAngleX={6} tiltMaxAngleY={6} perspective={1200} scale={1.02} transitionSpeed={400}>
      <motion.article
        variants={cardHover}
        whileHover="hover"
        className="prose prose-invert max-w-none text-[var(--text-secondary)] p-4 sm:p-6 md:p-8 rounded-2xl"
        itemProp="articleBody"
        dangerouslySetInnerHTML={{ __html: blogPost.content }}
      />
      <motion.div
        className="mt-8 sm:mt-12 md:mt-16 flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-6"
      >
        <div className="flex flex-wrap gap-2">
          {blogPost.tags.map((tag, i) => (
            <span
              key={i}
              className="px-2 py-1 bg-[var(--highlight)]/10 text-[var(--highlight)] text-xs sm:text-sm rounded-full"
              itemProp="keywords"
            >
              {tag}
            </span>
          ))}
        </div>
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)] px-4 sm:px-6 py-2 sm:py-3 text-sm md:text-base font-semibold font-['Playfair Display'] text-[var(--bg-primary)] hover:from-[var(--accent-primary)] hover:to-[var(--highlight)] transition-all duration-400 cta-glow"
          aria-label="Explore More Blogs"
        >
          <span className="relative z-10">Explore More Blogs</span>
          <Tag className="relative z-10 h-4 sm:h-5 md:h-6 w-4 sm:w-5 md:w-6" />
        </Link>
      </motion.div>
    </Tilt>
  );
}