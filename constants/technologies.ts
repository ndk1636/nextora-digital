import type { TechCategory } from "@/types";

export const technologies: TechCategory[] = [
  {
    category: "Frontend",
    items: ["React", "Next.js", "Vue.js", "TypeScript", "Tailwind CSS"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Laravel", "PHP", "REST APIs", "Electron.js"],
  },
  {
    category: "Data & Infra",
    items: ["PostgreSQL", "MySQL", "Redis", "Docker", "Linux"],
  },
  {
    category: "Tooling",
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

export const trustIndicators = [
  { value: "End-to-End", label: "Design Through Deployment" },
  { value: "Multi-Industry", label: "SaaS, Healthcare & Enterprise" },
  { value: "100%", label: "Source Code Ownership" },
  { value: "24/7", label: "Support Availability" },
];
