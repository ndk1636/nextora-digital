"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { QuoteIcon } from "@/components/icons";

export function Testimonials() {
  return (
    <section
      id="testimonials"
      className="relative overflow-hidden bg-slate-50/60 py-24 sm:py-32"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="absolute -top-24 left-1/4 h-[420px] w-[420px] rounded-full bg-gradient-to-br from-brand/15 to-accent/10 blur-3xl" />
        <div className="absolute -bottom-24 right-1/4 h-[420px] w-[420px] rounded-full bg-gradient-to-tl from-accent/15 to-brand/10 blur-3xl" />
      </div>

      <Container>
        <SectionHeading
          eyebrow="Client Feedback"
          title="Building a track record, one project at a time"
          description="We hold ourselves to the standard our process is designed around — clear communication, reliable delivery, and outcomes clients are glad they invested in."
        />

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto mt-16 max-w-2xl rounded-card border border-white/60 bg-white/70 p-8 text-center shadow-elevated backdrop-blur-md sm:p-12"
        >
          <QuoteIcon className="mx-auto h-8 w-8 text-brand/25" />
          <p className="mt-6 text-lg font-medium leading-relaxed text-slate-700">
            Published client testimonials will appear here as engagements are
            completed and verified.
          </p>
          <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-slate-500">
            In the meantime, take a look at the type of systems we design and
            ship, or get in touch to talk through your project.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button href="#projects" variant="secondary">
              View Featured Work
            </Button>
            <Button href="#contact">Book a Call</Button>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
