import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { CTASection } from "@/components/ui/CTASection";
import { services } from "@/data/services";
import { siteConfig } from "@/data/site";
import { getBreadcrumbSchema, getServicesListSchema } from "@/lib/schema";
import { cn } from "@/lib/cn";
import type { BreadcrumbItem } from "@/types";

const title = "Services";
const description =
  "HRM systems, medical billing platforms, custom admin portals, SaaS products, and AI-powered applications — explore the software services Nextora Digital builds for startups and enterprises.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/services" },
  openGraph: {
    title: `${title} | ${siteConfig.name}`,
    description,
    url: "/services",
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
  { label: "Services" },
];

export default function ServicesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(getServicesListSchema(services)),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(getBreadcrumbSchema(breadcrumbs)),
        }}
      />

      <PageHeader
        eyebrow="Services"
        title="Software built around how your business runs"
        description="From internal systems to customer-facing products, every service below is designed and engineered around a specific business outcome — not a generic template."
        breadcrumbs={breadcrumbs}
      >
        <Button href="/contact" size="lg">
          Book a Call
        </Button>
        <Button href="/about" variant="secondary" size="lg">
          About Nextora Digital
        </Button>
      </PageHeader>

      <section className="bg-white pb-24 sm:pb-32">
        <Container>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <ServiceCard
                key={service.slug}
                {...service}
                href={`/services/${service.slug}`}
                delay={(index % 3) * 0.08}
                className={cn(service.featured && "lg:col-span-2")}
              />
            ))}
          </div>
        </Container>
      </section>

      <CTASection
        title="Not sure which service fits?"
        description="Tell us what you're trying to build and we'll help you figure out the right scope — no obligation, no sales pressure."
        primaryHref="/contact"
        primaryLabel="Book a Call"
        secondaryHref="/projects"
        secondaryLabel="View Our Work"
      />
    </>
  );
}
