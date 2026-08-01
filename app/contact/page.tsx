import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { Container } from "@/components/ui/Container";
import { ContactInfo } from "@/components/ui/ContactInfo";
import { ProcessSteps } from "@/components/ui/ProcessSteps";
import { CTASection } from "@/components/ui/CTASection";
import { FAQ } from "@/components/sections/FAQ";
import { ContactForm } from "@/components/sections/ContactForm";
import { siteConfig } from "@/data/site";
import { getBreadcrumbSchema, getContactPageSchema } from "@/lib/schema";
import type { BreadcrumbItem } from "@/types";

const title = "Contact";
const description =
  "Get in touch with Nextora Digital to talk through a software project — HRM systems, healthcare billing, SaaS products, or custom web applications.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/contact" },
  openGraph: {
    title: `${title} | ${siteConfig.name}`,
    description,
    url: "/contact",
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
  { label: "Contact" },
];

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(getContactPageSchema()),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(getBreadcrumbSchema(breadcrumbs)),
        }}
      />

      <PageHeader
        eyebrow="Contact"
        title="Let's talk about your project"
        description="Tell us what you're building and we'll follow up with next steps — no obligation, no sales pressure."
        breadcrumbs={breadcrumbs}
      />

      <section className="bg-white pb-24 sm:pb-32">
        <Container>
          <div className="grid gap-10 lg:grid-cols-5 lg:gap-16">
            <div className="lg:col-span-2">
              <ContactInfo />
            </div>
            <div className="lg:col-span-3">
              <ContactForm />
            </div>
          </div>
        </Container>
      </section>

      <ProcessSteps
        eyebrow="Engagement Process"
        title="What happens after you reach out"
        description="Every engagement follows the same disciplined process, from discovery through post-launch support."
      />

      <FAQ
        title="Answers before you reach out"
        description="The questions we hear most from businesses considering a project with us."
      />

      <CTASection
        title="Prefer to explore first?"
        description="Take a look at our services and past work before reaching out."
        primaryHref="/services"
        primaryLabel="Explore Services"
        secondaryHref="/projects"
        secondaryLabel="View Our Work"
      />
    </>
  );
}
