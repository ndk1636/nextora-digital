import { siteConfig } from "@/constants/site";
import { faqs } from "@/constants/faqs";
import type { FaqItem } from "@/types";

export function getOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    email: siteConfig.email,
    sameAs: Object.values(siteConfig.links),
    areaServed: "Worldwide",
    serviceType: [
      "Software Engineering",
      "SaaS Product Development",
      "Custom Web Application Development",
      "Healthcare Software Development",
      "HRM System Development",
      "Business Automation",
    ],
  };
}

export function getFaqSchema(items: FaqItem[] = faqs) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}
