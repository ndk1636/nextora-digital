import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProjectCard } from "@/components/ui/ProjectCard";
import type { ProjectItem } from "@/types";

type RelatedProjectsProps = {
  projects: ProjectItem[];
};

export function RelatedProjects({ projects }: RelatedProjectsProps) {
  return (
    <section className="bg-white py-24 sm:py-32">
      <Container>
        <SectionHeading eyebrow="Related Projects" title="More representative work" />

        <div className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.slug}
              {...project}
              href={`/projects/${project.slug}`}
              delay={index * 0.08}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
