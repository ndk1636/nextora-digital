export const siteConfig = {
  name: "Nextora Digital",
  shortName: "Nextora",
  tagline: "Enterprise Software, Engineered for Scale",
  description:
    "Nextora Digital is a premium software engineering studio building SaaS platforms, enterprise systems, healthcare software, and AI-powered applications for startups and enterprises worldwide.",
  url: "https://nextoradigital.com",
  email: "hello@nextoradigital.com",
  links: {
    linkedin: "https://www.linkedin.com/company/nextora-digital",
    github: "https://github.com/nextora-digital",
    twitter: "https://twitter.com/nextoradigital",
  },
  keywords: [
    "software engineering studio",
    "SaaS product development",
    "enterprise software development",
    "custom web application development",
    "healthcare software development",
    "HRM system development",
    "AI powered applications",
    "business automation",
    "custom admin portals",
    "Next.js development agency",
  ],
} as const;

export const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Work", href: "#projects" },
  { label: "Process", href: "#process" },
  { label: "Technologies", href: "#technologies" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "FAQ", href: "#faq" },
] as const;

export const heroStats = [
  {
    label: "Growth-Ready Architecture",
    value: "Built to Scale",
    icon: "trend",
  },
  {
    label: "Fast Iteration Cycles",
    value: "Agile Delivery",
    icon: "bolt",
  },
  {
    label: "Security & Reliability",
    value: "Enterprise-Grade",
    icon: "shield",
  },
] as const;
