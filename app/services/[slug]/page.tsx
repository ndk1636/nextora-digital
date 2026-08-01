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
import { TrendIcon } from "@/components/icons";
import { FAQ } from "@/components/sections/FAQ";
import { RelatedServices } from "@/components/services/RelatedServices";
import {
  getAdjacentServices,
  getRelatedServices,
  getServiceBySlug,
  services,
} from "@/data/services";
import { siteConfig } from "@/data/site";
import { getBreadcrumbSchema, getServiceSchema } from "@/lib/schema";
import type { BreadcrumbItem } from "@/types";

type ServicePageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return {};
  }

  const { title, description } = service;
  const url = `/services/${service.slug}`;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title: `${title} | ${siteConfig.name}`,
      description,
      url,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${siteConfig.name}`,
      description,
    },
  };
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  const { previous, next } = getAdjacentServices(slug);
  const related = getRelatedServices(slug);

  const breadcrumbs: BreadcrumbItem[] = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: service.title },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(getServiceSchema(service)),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(getBreadcrumbSchema(breadcrumbs)),
        }}
      />

      <PageHeader
        eyebrow="Service"
        title={service.title}
        description={service.description}
        breadcrumbs={breadcrumbs}
      >
        <Button href="/contact" size="lg">
          Book a Call
        </Button>
        <Button href="/services" variant="secondary" size="lg">
          All Services
        </Button>
      </PageHeader>

      <TextChecklistSplit
        eyebrow="Overview"
        title="What this service covers"
        description={service.overview}
        checklistTitle="Problems This Solves"
        items={service.problems}
      />
      <FeatureGrid items={service.features} />
      <HighlightPanel
        eyebrow="Benefits"
        title="What you get out of it"
        items={service.benefits}
        icon={<TrendIcon className="mt-0.5 h-4 w-4 shrink-0 text-brand" />}
      />
      <ProcessSteps />
      <TechStackSection items={service.techStack} />

      <FAQ
        items={service.faqs}
        eyebrow="Service FAQ"
        title={`Questions about ${service.title}`}
        description="Can't find what you're looking for? Reach out and we'll get back to you directly."
      />

      {previous && next && (
        <PagerNav
          previous={{ href: `/services/${previous.slug}`, label: previous.title }}
          next={{ href: `/services/${next.slug}`, label: next.title }}
        />
      )}

      {related.length > 0 && <RelatedServices services={related} />}

      <CTASection
        title={`Ready to start your ${service.title} project?`}
        description="Tell us what you're building and we'll follow up with next steps — no obligation, no sales pressure."
        primaryHref="/contact"
        primaryLabel="Book a Call"
        secondaryHref="/services"
        secondaryLabel="Explore All Services"
      />
    </>
  );
}
