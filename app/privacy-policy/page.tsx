import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { LegalDocument } from "@/components/legal/LegalDocument";
import { legalLastUpdated, privacyPolicySections } from "@/data/legal";
import { siteConfig } from "@/data/site";
import { getBreadcrumbSchema } from "@/lib/schema";
import type { BreadcrumbItem } from "@/types";

const title = "Privacy Policy";
const description =
  "How Nextora Digital collects, uses, and protects information submitted through this website.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/privacy-policy" },
  openGraph: {
    title: `${title} | ${siteConfig.name}`,
    description,
    url: "/privacy-policy",
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
  { label: "Privacy Policy" },
];

export default function PrivacyPolicyPage() {
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
        title="Privacy Policy"
        description="How we collect, use, and protect information submitted through this website."
        breadcrumbs={breadcrumbs}
      />

      <LegalDocument
        lastUpdated={legalLastUpdated}
        sections={privacyPolicySections}
      />
    </>
  );
}
