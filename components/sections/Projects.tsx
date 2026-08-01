"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TechBadge } from "@/components/ui/TechBadge";
import { ProjectVisualPreview } from "@/components/ui/ProjectVisualPreview";
import { ArrowUpRightIcon, CheckCircleIcon } from "@/components/icons";
import { projects } from "@/data/projects";
import { cn } from "@/lib/cn";

export function Projects() {
  return (
    <section id="projects" className="bg-slate-50/60 py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="Featured Work"
          title="Representative builds across our core specialties"
          description="A look at the type of systems we design and ship — from workforce platforms to full SaaS products."
        />

        <div className="mt-20 flex flex-col gap-24 sm:gap-32">
          {projects.map((project, index) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16"
            >
              <div className={cn(index % 2 === 1 && "lg:order-2")}>
                <ProjectVisualPreview
                  name={project.name}
                  visual={project.visual}
                  accent={project.accent}
                />
              </div>

              <div className={cn(index % 2 === 1 && "lg:order-1")}>
                <div className="flex items-center gap-3">
                  <span className="font-display text-sm font-semibold text-slate-400">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="h-px w-5 bg-slate-300" />
                  <span className="text-xs font-semibold uppercase tracking-[0.14em] text-brand">
                    {project.category}
                  </span>
                </div>
                <h3 className="mt-4 text-balance font-display text-2xl font-bold tracking-[-0.02em] text-slate-900 sm:text-3xl">
                  {project.name}
                </h3>
                <p className="mt-4 max-w-md text-base leading-relaxed text-slate-600">
                  {project.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <TechBadge key={tech} name={tech} />
                  ))}
                </div>

                <div className="mt-7 flex flex-wrap gap-2.5">
                  {project.highlights.map((highlight) => (
                    <span
                      key={highlight}
                      className="inline-flex items-center gap-2 rounded-pill border border-slate-200 bg-white px-3.5 py-2 text-xs font-medium text-slate-700 shadow-soft"
                    >
                      <CheckCircleIcon className="h-3.5 w-3.5 shrink-0 text-emerald-500" />
                      {highlight}
                    </span>
                  ))}
                </div>

                <p className="mt-7 flex items-start gap-3 border-l-2 border-brand/25 pl-4 text-sm leading-relaxed text-slate-600">
                  <ArrowUpRightIcon className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
                  {project.impact}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
