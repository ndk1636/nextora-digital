import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageHeader } from "@/components/ui/PageHeader";
import { Button } from "@/components/ui/Button";
import { CTASection } from "@/components/ui/CTASection";
import { TextChecklistSplit } from "@/components/ui/TextChecklistSplit";
import { FeatureGrid } from "@/components/ui/FeatureGrid";
import { HighlightPanel } from "@/components/ui/HighlightPanel";
import { ProcessSteps } from "@/components/ui/ProcessSteps";
import { TechStackSection } from "@/components/ui/TechStackSection";
import { PagerNav } from "@/components/ui/PagerNav";
import { PenToolIcon } from "@/components/icons";
import { ProjectGallery } from "@/components/projects/ProjectGallery";
import { RelatedProjects } from "@/components/projects/RelatedProjects";
import {
  getAdjacentProjects,
  getProjectBySlug,
  getRelatedProjects,
  projects,
} from "@/data/projects";
import { siteConfig } from "@/data/site";
import { getBreadcrumbSchema, getProjectSchema } from "@/lib/schema";
import type { BreadcrumbItem } from "@/types";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {};
  }

  const { name, description } = project;
  const url = `/projects/${project.slug}`;

  return {
    title: name,
    description,
    alternates: { canonical: url },
    openGraph: {
      title: `${name} | ${siteConfig.name}`,
      description,
      url,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${name} | ${siteConfig.name}`,
      description,
    },
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const { previous, next } = getAdjacentProjects(slug);
  const related = getRelatedProjects(slug);

  const breadcrumbs: BreadcrumbItem[] = [
    { label: "Home", href: "/" },
    { label: "Projects", href: "/projects" },
    { label: project.name },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(getProjectSchema(project)),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(getBreadcrumbSchema(breadcrumbs)),
        }}
      />

      <PageHeader
        eyebrow={project.category}
        title={project.name}
        description={project.description}
        breadcrumbs={breadcrumbs}
      >
        <Button href="/contact" size="lg">
          Book a Call
        </Button>
        <Button href="/projects" variant="secondary" size="lg">
          All Projects
        </Button>
      </PageHeader>

      <TextChecklistSplit
        eyebrow="Overview"
        title="What this project covers"
        description={project.overview}
        checklistTitle="Project Goals"
        items={project.goals}
      />
      <FeatureGrid items={project.features} />
      <HighlightPanel
        eyebrow="Design Highlights"
        title="Notable design decisions"
        items={project.designHighlights}
        icon={<PenToolIcon className="mt-0.5 h-4 w-4 shrink-0 text-brand" />}
      />

      <ProjectGallery
        name={project.name}
        visual={project.visual}
        accent={project.accent}
      />

      <TechStackSection items={project.tech} />
      <ProcessSteps
        eyebrow="Development Approach"
        title="The same disciplined process, every time"
        description="Every project follows our standard delivery process, from discovery through post-launch support."
      />

      {previous && next && (
        <PagerNav
          previous={{ href: `/projects/${previous.slug}`, label: previous.name }}
          next={{ href: `/projects/${next.slug}`, label: next.name }}
        />
      )}

      {related.length > 0 && <RelatedProjects projects={related} />}

      <CTASection
        title="Have something similar in mind?"
        description="Tell us what you're building and we'll follow up with next steps — no obligation, no sales pressure."
        primaryHref="/contact"
        primaryLabel="Book a Call"
        secondaryHref="/projects"
        secondaryLabel="Explore All Projects"
      />
    </>
  );
}
