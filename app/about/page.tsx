import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { Button } from "@/components/ui/Button";
import { WhoWeServe } from "@/components/about/WhoWeServe";
import { HowWeWork } from "@/components/about/HowWeWork";
import { CTASection } from "@/components/ui/CTASection";
import { siteConfig } from "@/data/site";
import { getBreadcrumbSchema } from "@/lib/schema";
import type { BreadcrumbItem } from "@/types";

const title = "About Us";
const description =
  "Nextora Digital is a software engineering studio that builds SaaS platforms, enterprise systems, and healthcare software for startups and enterprises worldwide. Learn how we work.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/about" },
  openGraph: {
    title: `${title} | ${siteConfig.name}`,
    description,
    url: "/about",
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
  { label: "About" },
];

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(getBreadcrumbSchema(breadcrumbs)),
        }}
      />

      <PageHeader
        eyebrow="About Nextora Digital"
        title="Software engineering built around outcomes, not overhead"
        description="We exist to give growing businesses access to engineering-grade software without the cost of building an internal team — the SaaS platforms, admin systems, and business tools that let operations teams stop working around spreadsheets and start working with software built for how they actually run."
        breadcrumbs={breadcrumbs}
      >
        <Button href="/contact" size="lg">
          Book a Call
        </Button>
        <Button href="/projects" variant="secondary" size="lg">
          View Our Work
        </Button>
      </PageHeader>

      <WhoWeServe />
      <HowWeWork />

      <CTASection
        title="Have a project in mind?"
        description="Tell us what you're building and we'll follow up with next steps — no obligation, no sales pressure."
        primaryHref="/contact"
        primaryLabel="Book a Call"
        secondaryHref="/services"
        secondaryLabel="Explore Services"
      />
    </>
  );
}
