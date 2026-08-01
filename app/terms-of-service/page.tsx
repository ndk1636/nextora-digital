import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { LegalDocument } from "@/components/legal/LegalDocument";
import { legalLastUpdated, termsOfServiceSections } from "@/data/legal";
import { siteConfig } from "@/data/site";
import { getBreadcrumbSchema } from "@/lib/schema";
import type { BreadcrumbItem } from "@/types";

const title = "Terms of Service";
const description =
  "The terms that govern your use of the Nextora Digital website and our software development services.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/terms-of-service" },
  openGraph: {
    title: `${title} | ${siteConfig.name}`,
    description,
    url: "/terms-of-service",
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
  { label: "Terms of Service" },
];

export default function TermsOfServicePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(getBreadcrumbSchema(breadcrumbs)),
        }}
      />

      <PageHeader
        eyebrow="Legal"
        title="Terms of Service"
        description="The terms that govern your use of this website and our software development services."
        breadcrumbs={breadcrumbs}
      />

      <LegalDocument
        lastUpdated={legalLastUpdated}
        sections={termsOfServiceSections}
      />
    </>
  );
}
