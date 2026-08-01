"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TechBadge } from "@/components/ui/TechBadge";
import { ArrowUpRightIcon, CheckCircleIcon } from "@/components/icons";
import { projects } from "@/constants/projects";
import { cn } from "@/lib/cn";
import { ProjectVisualPreview } from "./ProjectVisualPreview";

export function Projects() {
  return (
    <section id="projects" className="bg-slate-50/60 py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="Featured Work"
          title="Representative builds across our core specialties"
          description="A look at the type of systems we design and ship — from workforce platforms to full SaaS products."
        />

        <div className="mt-16 flex flex-col gap-20 sm:gap-28">
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
                <span className="text-xs font-semibold uppercase tracking-wide text-brand">
                  {project.category}
                </span>
                <h3 className="mt-3 font-display text-2xl font-bold text-slate-900 sm:text-3xl">
                  {project.name}
                </h3>
                <p className="mt-4 text-base leading-relaxed text-slate-600">
                  {project.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <TechBadge key={tech} name={tech} />
                  ))}
                </div>

                <ul className="mt-8 flex flex-col gap-2.5">
                  {project.highlights.map((highlight) => (
                    <li
                      key={highlight}
                      className="flex items-start gap-2.5 text-sm text-slate-700"
                    >
                      <CheckCircleIcon className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500" />
                      {highlight}
                    </li>
                  ))}
                </ul>

                <p className="mt-6 flex items-start gap-2 text-sm text-slate-600">
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
