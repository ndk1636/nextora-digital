import type { ProjectItem } from "@/types";

export const projects: ProjectItem[] = [
  {
    slug: "vantara-hrm",
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
    overview:
      "Vantara HRM is a representative example of the workforce management systems we build — a desktop-integrated platform that unifies attendance tracking, activity monitoring, and leave management into a single system for distributed and hybrid teams.",
    goals: [
      "Replace manual timesheets with automated, verifiable attendance records",
      "Give managers visibility into team activity without invasive oversight",
      "Centralize HR data that was previously spread across spreadsheets",
      "Support both in-office and remote employees from one platform",
    ],
    features: [
      "Desktop activity monitoring with configurable tracking levels",
      "Automated clock-in/clock-out and attendance logging",
      "Leave requests with manager approval workflows",
      "Role-based dashboards for HR, managers, and employees",
      "Exportable timesheets ready for payroll processing",
    ],
    designHighlights: [
      "A dashboard-first layout that surfaces team status at a glance",
      "Clear visual separation between individual and team-level views",
      "Configurable privacy controls presented transparently to admins",
      "Consistent data tables across attendance, leave, and activity logs",
    ],
  },
  {
    slug: "medflow-billing",
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
    overview:
      "MedFlow Billing is a representative example of the healthcare systems we build — an end-to-end billing and leads pipeline covering patient intake, claims processing, and collections for multi-location clinics.",
    goals: [
      "Reduce claim rejections caused by manual data entry errors",
      "Give billing staff one system instead of several disconnected tools",
      "Track leads from first contact through conversion",
      "Keep patient billing data secure and audit-ready",
    ],
    features: [
      "Patient intake and lead capture in a single workflow",
      "Automated claims validation before submission",
      "Real-time claim status and collections tracking",
      "Role-based access for billing staff, providers, and admins",
      "Audit logs for every billing action",
    ],
    designHighlights: [
      "A claims pipeline view that mirrors how billing teams actually work",
      "Status-driven color coding for at-a-glance triage",
      "Minimal-friction data entry forms to reduce manual errors",
      "Clear separation between clinical and billing-facing views",
    ],
  },
  {
    slug: "orbit-dashboards",
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
    overview:
      "Orbit Dashboards is a representative example of the business intelligence systems we build — a reporting layer that consolidates data from multiple internal tools into a single real-time operations view.",
    goals: [
      "Replace end-of-month reporting with real-time visibility",
      "Unify data scattered across a dozen internal tools",
      "Let different teams see the metrics relevant to them",
      "Make it easy to go from a summary number to the underlying detail",
    ],
    features: [
      "Real-time data pipelines from multiple internal sources",
      "Customizable KPI cards and chart views",
      "Role-based dashboards for different teams",
      "Drill-down navigation from summary to detail",
      "Scheduled report exports",
    ],
    designHighlights: [
      "A modular card layout that adapts to each team's priorities",
      "Consistent charting language across every report type",
      "Clear visual hierarchy between headline metrics and supporting detail",
      "Dashboards designed to be scanned in seconds, not studied",
    ],
  },
  {
    slug: "nimbus-saas",
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
    overview:
      "Nimbus SaaS is a representative example of the SaaS products we build — a multi-tenant platform architected from the ground up with billing, authentication, and infrastructure in place for production use.",
    goals: [
      "Move from a product concept to a production-ready platform",
      "Support multiple tenants securely from a shared codebase",
      "Handle subscription billing without a custom-built payment system",
      "Build a foundation that could support enterprise customers",
    ],
    features: [
      "Multi-tenant architecture with isolated tenant data",
      "Subscription billing and plan management",
      "Authentication, roles, and account management",
      "Admin tooling for managing customers and usage",
      "API-first design for future integrations",
    ],
    designHighlights: [
      "An onboarding flow designed to get new tenants to value quickly",
      "A consistent design system applied across every screen",
      "Clear visual distinction between admin and customer-facing views",
      "Interfaces built to scale cleanly as new features are added",
    ],
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export function getRelatedProjects(slug: string, count = 3) {
  const currentIndex = projects.findIndex((project) => project.slug === slug);
  if (currentIndex === -1) return projects.slice(0, count);

  const related: ProjectItem[] = [];
  for (let i = 1; related.length < count && i <= projects.length - 1; i++) {
    related.push(projects[(currentIndex + i) % projects.length]);
  }
  return related;
}

export function getAdjacentProjects(slug: string) {
  const currentIndex = projects.findIndex((project) => project.slug === slug);
  if (currentIndex === -1) return { previous: null, next: null };

  const previous = projects[(currentIndex - 1 + projects.length) % projects.length];
  const next = projects[(currentIndex + 1) % projects.length];
  return { previous, next };
}
