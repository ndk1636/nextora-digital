"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Globe, Mail, Phone, ArrowRight } from "lucide-react";
import Link from "next/link";
import Tilt from "react-parallax-tilt";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};
const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.2 } } };
const inputFocus = {
  focus: { scale: 1.02, borderColor: "var(--accent-primary)", transition: { duration: 0.4 } },
};

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Submitting...");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("Message sent successfully!");
        setFormData({ name: "", email: "", service: "", message: "" });
      } else {
        setStatus("Failed to send message. Please try again.");
      }
    } catch (error) {
      setStatus("An error occurred. Please try again.");
    }
    setTimeout(() => setStatus(""), 3000); // Clear status after 3s
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section
      className="relative bg-gradient-to-b from-[var(--bg-primary)] to-[var(--bg-secondary)] py-20 md:py-28 overflow-hidden"
      itemScope
      itemType="https://schema.org/ContactPoint"
    >
      {/* Aurora Background */}
      <div className="aurora">
        <span className="aurora-layer"></span>
        <span className="aurora-layer"></span>
        <span className="aurora-layer"></span>
      </div>

      <div className="container mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 relative z-10">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-center space-y-8 mb-16 md:mb-20"
        >
          <motion.h2
            variants={fadeUp}
            className="text-5xl sm:text-6xl font-bold font-['Playfair Display'] bg-clip-text text-transparent bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)]"
            itemProp="name"
          >
            Get in Touch
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="max-w-3xl mx-auto text-[var(--text-secondary)] text-lg sm:text-xl leading-relaxed font-['Inter'] font-light"
            itemProp="description"
          >
            Ready to bring your vision to life? Contact us today to start your
            project with Nextora Digital.
          </motion.p>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-10 md:gap-12"
        >
          {/* Contact Info */}
          <Tilt
            tiltMaxAngleX={8}
            tiltMaxAngleY={8}
            perspective={1000}
            scale={1.02}
            transitionSpeed={300}
          >
            <motion.div
              variants={fadeUp}
              className="rounded-3xl border border-[var(--border)] bg-white/3 p-8 md:p-10 glassmorphism card-hover"
            >
              <h3 className="text-2xl md:text-3xl font-semibold font-['Playfair Display'] text-[var(--text-primary)] mb-8">
                Connect With Us
              </h3>
              <div className="space-y-6">
                <motion.div
                  className="flex items-center gap-4"
                  whileHover={{ x: 8 }}
                  transition={{ duration: 0.2 }}
                >
                  <Phone
                    className="h-7 w-7 text-[var(--accent-primary)]"
                    aria-hidden="true"
                  />
                  <p className="text-[var(--text-secondary)] text-base md:text-lg font-['Inter'] font-light">
                    Phone:{" "}
                    <a
                      href="tel:+1234567890"
                      className="hover:text-[var(--highlight)] transition duration-300"
                      itemProp="telephone"
                    >
                      +1 (234) 567-890
                    </a>
                  </p>
                </motion.div>
                <motion.div
                  className="flex items-center gap-4"
                  whileHover={{ x: 8 }}
                  transition={{ duration: 0.2 }}
                >
                  <Mail
                    className="h-7 w-7 text-[var(--accent-primary)]"
                    aria-hidden="true"
                  />
                  <p className="text-[var(--text-secondary)] text-base md:text-lg font-['Inter'] font-light">
                    Email:{" "}
                    <a
                      href="mailto:info@nextoradigital.com"
                      className="hover:text-[var(--highlight)] transition duration-300"
                      itemProp="email"
                    >
                      info@nextoradigital.com
                    </a>
                  </p>
                </motion.div>
                <motion.div
                  className="flex items-center gap-4"
                  whileHover={{ x: 8 }}
                  transition={{ duration: 0.2 }}
                >
                  <Globe
                    className="h-7 w-7 text-[var(--accent-primary)]"
                    aria-hidden="true"
                  />
                  <p className="text-[var(--text-secondary)] text-base md:text-lg font-['Inter'] font-light">
                    Follow:{" "}
                    <a
                      href="https://x.com/nextoradigital"
                      className="hover:text-[var(--highlight)] transition duration-300"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      X Profile
                    </a>
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </Tilt>

          {/* Contact Form */}
          <Tilt
            tiltMaxAngleX={8}
            tiltMaxAngleY={8}
            perspective={1000}
            scale={1.02}
            transitionSpeed={300}
          >
            <motion.form
              variants={fadeUp}
              className="rounded-3xl border border-[var(--border)] bg-white/3 p-8 md:p-10 glassmorphism card-hover space-y-6"
              onSubmit={handleSubmit}
            >
              <motion.div
                className="relative"
                whileFocus="focus"
                variants={inputFocus}
              >
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  className="w-full rounded-xl border border-[var(--border)] bg-white/5 p-4 text-[var(--text-secondary)] text-base md:text-lg font-['Inter'] font-light focus:border-[var(--accent-primary)] focus:outline-none transition duration-300 placeholder:text-[var(--text-muted)]"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  aria-label="Full Name"
                />
              </motion.div>
              <motion.div
                className="relative"
                whileFocus="focus"
                variants={inputFocus}
              >
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="w-full rounded-xl border border-[var(--border)] bg-white/5 p-4 text-[var(--text-secondary)] text-base md:text-lg font-['Inter'] font-light focus:border-[var(--accent-primary)] focus:outline-none transition duration-300 placeholder:text-[var(--text-muted)]"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  aria-label="Email Address"
                />
              </motion.div>
              <motion.div
                className="relative"
                whileFocus="focus"
                variants={inputFocus}
              >
                <select
                  name="service"
                  className="w-full rounded-xl border border-[var(--border)] bg-white/5 p-4 text-[var(--text-secondary)] text-base md:text-lg font-['Inter'] font-light focus:border-[var(--accent-primary)] focus:outline-none transition duration-300"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  aria-label="Select a Service"
                >
                  <option value="" disabled>
                    Select a Service
                  </option>
                  <option value="logo">Logo Design</option>
                  <option value="uiux">UI/UX Design</option>
                  <option value="webapp">Web Applications</option>
                  <option value="nocode">Code/No-Code Websites</option>
                  <option value="api">API Integration</option>
                  <option value="ecommerce">Ecommerce Websites</option>
                </select>
              </motion.div>
              <motion.div
                className="relative"
                whileFocus="focus"
                variants={inputFocus}
              >
                <textarea
                  name="message"
                  placeholder="Your Message"
                  className="w-full rounded-xl border border-[var(--border)] bg-white/5 p-4 text-[var(--text-secondary)] text-base md:text-lg font-['Inter'] font-light focus:border-[var(--accent-primary)] focus:outline-none transition duration-300 placeholder:text-[var(--text-muted)]"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  aria-label="Your Message"
                ></textarea>
              </motion.div>
              <motion.button
                type="submit"
                className="relative w-full rounded-full bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)] px-8 py-4 text-base md:text-lg font-semibold font-['Inter'] text-[var(--bg-primary)] hover:from-[var(--accent-primary)] hover:to-[var(--highlight)] transition-all duration-500 cta-glow group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Submit Contact Form"
              >
                <span className="relative z-10 flex items-center justify-center gap-3">
                  Submit <ArrowRight className="h-6 w-6" />
                </span>
                <span className="absolute inset-0 bg-[var(--highlight)]/15 opacity-0 group-hover:opacity-25 transition-opacity duration-400 rounded-full" />
              </motion.button>
              <AnimatePresence>
                {status && (
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className={`text-base text-center ${
                      status.includes("success")
                        ? "text-[var(--success)]"
                        : "text-[var(--error)]"
                    } font-['Inter'] font-light`}
                    aria-live="polite"
                  >
                    {status}
                  </motion.p>
                )}
              </AnimatePresence>
            </motion.form>
          </Tilt>
        </motion.div>
      </div>
    </section>
  );
}