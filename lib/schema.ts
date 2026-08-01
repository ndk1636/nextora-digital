import { siteConfig } from "@/data/site";
import { faqs } from "@/data/faqs";
import type { BreadcrumbItem, FaqItem, ProjectItem, ServiceItem } from "@/types";

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

export function getServicesListSchema(items: ServiceItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: items.map((service, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Service",
        name: service.title,
        description: service.description,
        url: `${siteConfig.url}/services/${service.slug}`,
        provider: {
          "@type": "Organization",
          name: siteConfig.name,
        },
      },
    })),
  };
}

export function getServiceSchema(service: ServiceItem) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.overview,
    url: `${siteConfig.url}/services/${service.slug}`,
    serviceType: service.title,
    areaServed: "Worldwide",
    provider: {
      "@type": "ProfessionalService",
      name: siteConfig.name,
      url: siteConfig.url,
    },
  };
}

export function getProjectsListSchema(items: ProjectItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: items.map((project, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "CreativeWork",
        name: project.name,
        description: project.description,
        url: `${siteConfig.url}/projects/${project.slug}`,
        creator: {
          "@type": "Organization",
          name: siteConfig.name,
        },
      },
    })),
  };
}

export function getProjectSchema(project: ProjectItem) {
  return {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.name,
    description: project.overview,
    url: `${siteConfig.url}/projects/${project.slug}`,
    about: project.category,
    creator: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
  };
}

export function getContactPageSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: `Contact ${siteConfig.name}`,
    description: siteConfig.description,
    url: `${siteConfig.url}/contact`,
    about: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
      email: siteConfig.email,
    },
  };
}

export function getBreadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      ...(item.href ? { item: `${siteConfig.url}${item.href}` } : {}),
    })),
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
