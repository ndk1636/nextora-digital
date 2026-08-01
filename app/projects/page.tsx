import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { CTASection } from "@/components/ui/CTASection";
import { projects } from "@/data/projects";
import { siteConfig } from "@/data/site";
import { getBreadcrumbSchema, getProjectsListSchema } from "@/lib/schema";
import type { BreadcrumbItem } from "@/types";

const title = "Projects";
const description =
  "Representative examples of the HRM platforms, healthcare billing systems, dashboards, and SaaS products Nextora Digital designs and builds.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/projects" },
  openGraph: {
    title: `${title} | ${siteConfig.name}`,
    description,
    url: "/projects",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${title} | ${siteConfig.name}`,
    description,
  },
};

const breadcrumbs: BreadcrumbItem[] = [
  { label: "Home", href: "/" },
  { label: "Projects" },
];

export default function ProjectsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(getProjectsListSchema(projects)),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(getBreadcrumbSchema(breadcrumbs)),
        }}
      />

      <PageHeader
        eyebrow="Our Work"
        title="Representative builds across our core specialties"
        description="A closer look at the type of systems we design and build — from workforce platforms to full SaaS products. These are representative examples of our engineering approach, not case studies tied to a named client."
        breadcrumbs={breadcrumbs}
      >
        <Button href="/contact" size="lg">
          Book a Call
        </Button>
        <Button href="/services" variant="secondary" size="lg">
          Explore Services
        </Button>
      </PageHeader>

      <section className="bg-white pb-24 sm:pb-32">
        <Container>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <ProjectCard
                key={project.slug}
                {...project}
                href={`/projects/${project.slug}`}
                delay={(index % 3) * 0.08}
              />
            ))}
          </div>
        </Container>
      </section>

      <CTASection
        title="Have something similar in mind?"
        description="Tell us what you're building and we'll follow up with next steps — no obligation, no sales pressure."
        primaryHref="/contact"
        primaryLabel="Book a Call"
        secondaryHref="/services"
        secondaryLabel="View Our Services"
      />
    </>
  );
}
