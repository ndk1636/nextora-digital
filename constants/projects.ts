import type { ProjectItem } from "@/types";

export const projects: ProjectItem[] = [
  {
    name: "Vantara HRM",
    category: "HRM & Workforce Management",
    description:
      "A desktop-integrated HRM platform tracking employee activity, attendance, and productivity across distributed teams in real time.",
    tech: ["Electron.js", "Node.js", "PostgreSQL", "React"],
    highlights: [
      "Automated attendance replaces manual timesheets",
      "Desktop activity insights across every location",
    ],
    impact:
      "Gives distributed teams a single, automated source of truth for attendance and activity, in place of manual timesheets.",
    visual: "bar",
    accent: "brand",
  },
  {
    name: "MedFlow Billing",
    category: "Medical Billing & Leads System",
    description:
      "An end-to-end billing and leads pipeline for a multi-clinic healthcare provider, from patient intake to claim reconciliation.",
    tech: ["Laravel", "MySQL", "Vue.js", "REST APIs"],
    highlights: [
      "Automated validation rules reduce manual data entry",
      "Unified pipeline from patient intake to reconciliation",
    ],
    impact:
      "Streamlines the full billing-to-collections workflow for a multi-clinic provider, reducing manual, repetitive data entry.",
    visual: "line",
    accent: "success",
  },
  {
    name: "Orbit Dashboards",
    category: "Business Intelligence Portal",
    description:
      "A unified reporting layer that consolidates data from a dozen internal tools into a single real-time operations dashboard.",
    tech: ["Next.js", "Node.js", "PostgreSQL", "Redis"],
    highlights: [
      "Consolidates multiple data sources into one live view",
      "Real-time reporting replaces manual spreadsheet exports",
    ],
    impact:
      "Gives leadership real-time visibility into operations, replacing scattered spreadsheets and end-of-month reporting cycles.",
    visual: "list",
    accent: "accent",
  },
  {
    name: "Nimbus SaaS",
    category: "Multi-Tenant SaaS Platform",
    description:
      "A production-ready multi-tenant SaaS product built from concept through launch, including billing, auth, and infrastructure.",
    tech: ["Next.js", "TypeScript", "PostgreSQL", "Docker"],
    highlights: [
      "Multi-tenant architecture ready from day one",
      "Billing, auth, and infrastructure built in from the start",
    ],
    impact:
      "Took a founder from concept to a production-ready multi-tenant SaaS platform, prepared for its first enterprise customers.",
    visual: "line",
    accent: "brand",
  },
];
