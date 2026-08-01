import type { TechCategory, TrustIndicator } from "@/types";

export const technologies: TechCategory[] = [
  {
    category: "Frontend",
    description: "Interfaces built for speed, clarity, and accessibility.",
    items: ["React", "Next.js", "Vue.js", "TypeScript", "Tailwind CSS"],
  },
  {
    category: "Backend",
    description: "Reliable services that hold up under real business load.",
    items: ["Node.js", "Laravel", "PHP", "REST APIs", "Electron.js"],
  },
  {
    category: "Data & Infra",
    description: "Storage and infrastructure engineered for uptime.",
    items: ["PostgreSQL", "MySQL", "Redis", "Docker", "Linux"],
  },
  {
    category: "Tooling",
    description: "The workflow that keeps delivery disciplined and traceable.",
    items: ["Git", "CI/CD", "Figma", "Postman", "Jira"],
  },
];

export const trustedByStack = [
  "Next.js",
  "React",
  "Laravel",
  "Node.js",
  "TypeScript",
  "PostgreSQL",
  "Vue.js",
  "Docker",
  "Electron.js",
  "Tailwind CSS",
  "MySQL",
  "Redis",
];

export const trustIndicators: TrustIndicator[] = [
  {
    value: "End-to-End",
    label: "Design Through Deployment",
    description: "One team, one accountable process, start to finish.",
  },
  {
    value: "Multi-Industry",
    label: "SaaS, Healthcare & Enterprise",
    description: "Systems built for regulated and high-growth environments alike.",
  },
  {
    value: "100%",
    label: "Source Code Ownership",
    description: "Everything we build transfers to you, with no lock-in.",
  },
  {
    value: "24/7",
    label: "Support Availability",
    description: "Monitoring and response coverage after you launch.",
  },
];
