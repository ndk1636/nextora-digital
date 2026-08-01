import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { CTASection } from "@/components/ui/CTASection";
import { FAQ } from "@/components/sections/FAQ";
import { siteConfig } from "@/data/site";
import { getBreadcrumbSchema, getFaqSchema } from "@/lib/schema";
import type { BreadcrumbItem } from "@/types";

const title = "FAQ";
const description =
  "Answers to common questions about working with Nextora Digital — process, pricing, source code ownership, support, and more.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/faq" },
  openGraph: {
    title: `${title} | ${siteConfig.name}`,
    description,
    url: "/faq",
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
  { label: "FAQ" },
];

export default function FaqPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getFaqSchema()) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(getBreadcrumbSchema(breadcrumbs)),
        }}
      />

      <PageHeader
        eyebrow="FAQ"
        title="Frequently asked questions"
        description="Everything you need to know before starting a project with us — process, pricing, ownership, and support."
        breadcrumbs={breadcrumbs}
      />

      <FAQ />

      <CTASection
        title="Still have questions?"
        description="Tell us what you're building and we'll follow up with next steps — no obligation, no sales pressure."
        primaryHref="/contact"
        primaryLabel="Book a Call"
        secondaryHref="/services"
        secondaryLabel="Explore Services"
      />
    </>
  );
}
