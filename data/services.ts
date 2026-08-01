import type { ServiceItem } from "@/types";

export const services: ServiceItem[] = [
  {
    slug: "hrm-employee-tracking",
    icon: "hrm",
    title: "HRM & Employee Activity Tracking",
    description:
      "Desktop activity monitoring, attendance tracking, and workforce management built for distributed and in-office teams.",
    outcome: "Cuts payroll disputes and manual timesheet work to near zero.",
    featured: true,
    overview:
      "A desktop-integrated HRM platform that brings attendance, activity tracking, and workforce management into one system. Built for teams that need visibility into how work actually gets done — whether staff are in the office, remote, or hybrid.",
    problems: [
      "Manual timesheets that are easy to fudge and tedious to reconcile",
      "No visibility into how remote or hybrid teams are actually spending their day",
      "Payroll disputes caused by inconsistent attendance records",
      "HR data scattered across spreadsheets, chat threads, and paper forms",
    ],
    features: [
      "Desktop activity monitoring with screenshots and usage logs",
      "Automated clock-in/clock-out and attendance tracking",
      "Leave management with approval workflows",
      "Role-based access for HR, managers, and employees",
      "Exportable timesheets synced directly to payroll",
      "Real-time dashboards for team-wide activity trends",
    ],
    benefits: [
      "Payroll processed from accurate, automated records",
      "Managers get visibility without micromanaging",
      "HR spends less time chasing down attendance discrepancies",
      "One system of record for the entire employee lifecycle",
    ],
    techStack: ["Electron.js", "Node.js", "PostgreSQL", "React"],
    faqs: [
      {
        question: "Does the activity tracking work for fully remote teams?",
        answer:
          "Yes. The desktop client runs on any employee's machine regardless of location, syncing activity and attendance data back to a central dashboard your HR team can access from anywhere.",
      },
      {
        question: "Can it integrate with our existing payroll system?",
        answer:
          "Yes, attendance and timesheet data can be exported or integrated via API with most payroll providers — we'll scope the specific integration during discovery.",
      },
      {
        question:
          "Is employee monitoring configurable, or is it all-or-nothing?",
        answer:
          "It's configurable. You control what's tracked — activity levels, screenshots, app usage — and at what frequency, so the system matches your company's policies rather than the other way around.",
      },
    ],
  },
  {
    slug: "medical-billing-leads-management",
    icon: "medical",
    title: "Medical Billing & Leads Management",
    description:
      "Claims processing, patient billing, and lead pipelines purpose-built for clinics, practices, and healthcare networks.",
    outcome: "Faster claim turnaround with fewer denied submissions.",
    featured: true,
    overview:
      "An end-to-end billing and leads pipeline built for clinics, practices, and healthcare networks — covering patient intake, claims processing, and collections in one system, with data privacy handled as a core requirement, not an afterthought.",
    problems: [
      "Claims rejected or delayed due to manual data entry errors",
      "Leads falling through the cracks between intake and follow-up",
      "Billing staff juggling multiple disconnected tools",
      "No clear visibility into claim status or the collections pipeline",
    ],
    features: [
      "Patient intake and lead capture in one workflow",
      "Automated claims validation before submission",
      "Real-time claim status tracking",
      "Role-based access for billing staff, providers, and admins",
      "Collections and payment tracking dashboard",
      "Audit-ready records for compliance reviews",
    ],
    benefits: [
      "Fewer denied claims from upfront validation",
      "Faster follow-up on leads before they go cold",
      "One system instead of juggling spreadsheets and portals",
      "Billing staff spend less time on manual data entry",
    ],
    techStack: ["Laravel", "MySQL", "Vue.js", "REST APIs"],
    faqs: [
      {
        question: "How is patient data kept secure?",
        answer:
          "Data privacy and access control are built into the system from the start — role-based permissions, encrypted storage, and audit logs are standard, not optional add-ons.",
      },
      {
        question:
          "Can it connect to the clearinghouse or insurance portals we already use?",
        answer:
          "In most cases, yes — we integrate with clearinghouses and payer portals via their APIs or supported data formats. We'll confirm compatibility during discovery.",
      },
      {
        question: "Do you build for single practices or multi-location networks?",
        answer:
          "Both. The system is architected to support a single clinic or scale across multiple locations with shared or location-specific data views.",
      },
    ],
  },
  {
    slug: "custom-admin-portals",
    icon: "admin",
    title: "Custom Admin Portals",
    description:
      "Role-based back-office systems that give your team one place to manage operations, users, and permissions.",
    outcome: "Replaces spreadsheets and email chains with one source of truth.",
    overview:
      "Role-based back-office systems that give your team a single place to manage operations, users, and permissions — replacing the patchwork of spreadsheets, shared inboxes, and disconnected tools most growing businesses end up running on.",
    problems: [
      "Operations spread across spreadsheets, email, and ad hoc tools",
      "No clear permission structure for who can see or edit what",
      "Manual processes that don't scale as the team grows",
      "No single source of truth for operational data",
    ],
    features: [
      "Role-based access control for every user type",
      "Custom workflows built around your operations",
      "Searchable, filterable data tables for every resource",
      "Audit logs for accountability and compliance",
      "Configurable dashboards for different teams",
      "API-ready architecture for future integrations",
    ],
    benefits: [
      "One system replaces scattered spreadsheets and tools",
      "Permissions match how your organization actually works",
      "Operations scale without adding administrative overhead",
      "New team members onboard faster with a clear system",
    ],
    techStack: ["Next.js", "Node.js", "PostgreSQL", "Tailwind CSS"],
    faqs: [
      {
        question: "Can the portal be tailored to our specific workflows?",
        answer:
          "Yes — this is custom software built around how your team actually operates, not a generic template you have to adapt to.",
      },
      {
        question: "How many user roles can the system support?",
        answer:
          "As many as your organization needs. Role and permission structures are designed during planning based on your actual org chart and access requirements.",
      },
      {
        question: "Can we add new features after launch?",
        answer:
          "Yes. The architecture is built to extend cleanly, and since you own the source code, your team or ours can keep building on it after launch.",
      },
    ],
  },
  {
    slug: "business-dashboards",
    icon: "dashboard",
    title: "Business Dashboards",
    description:
      "Real-time reporting dashboards that unify data from multiple sources into decisions leadership can act on.",
    outcome: "Same-day visibility instead of end-of-month reporting.",
    overview:
      "Real-time reporting dashboards that unify data from multiple sources into decisions leadership can act on — replacing static spreadsheets and end-of-month reports with a live view of how the business is actually performing.",
    problems: [
      "Leadership making decisions on stale, end-of-month data",
      "Data scattered across multiple tools with no unified view",
      "Reports that take hours to compile manually",
      "No way to drill down from summary numbers to root causes",
    ],
    features: [
      "Real-time data pipelines from multiple sources",
      "Customizable charts, KPI cards, and reporting views",
      "Drill-down navigation from summary to detail",
      "Role-based dashboard views for different teams",
      "Scheduled exports and automated reporting",
      "Mobile-responsive views for on-the-go visibility",
    ],
    benefits: [
      "Decisions based on current data, not last month's export",
      "Hours of manual reporting work eliminated",
      "One dashboard instead of switching between tools",
      "Trends and issues surfaced before they become problems",
    ],
    techStack: ["Next.js", "PostgreSQL", "Redis", "TypeScript"],
    faqs: [
      {
        question: "What data sources can feed into the dashboard?",
        answer:
          "Databases, third-party APIs, and internal systems can all be connected — we map your specific data sources during discovery and planning.",
      },
      {
        question: "Can different teams see different views?",
        answer:
          "Yes. Dashboards are role-based, so finance, operations, and leadership can each see the metrics relevant to them without needing separate tools.",
      },
      {
        question: "How current is the data?",
        answer:
          "Dashboards are built for real-time or near-real-time updates, depending on your data source's own refresh rate and requirements.",
      },
    ],
  },
  {
    slug: "business-websites",
    icon: "website",
    title: "Business Websites",
    description:
      "Fast, SEO-optimized marketing sites engineered to convert visitors and represent your brand at an enterprise level.",
    outcome: "Higher qualified lead volume from organic search and referrals.",
    overview:
      "Fast, SEO-optimized marketing sites engineered to convert visitors and represent your brand at an enterprise level — built on modern infrastructure so performance and search visibility are foundational, not bolted on afterward.",
    problems: [
      "A website that looks dated compared to competitors",
      "Slow load times costing search rankings and conversions",
      "A site that isn't built to generate qualified leads",
      "No clear path from visitor to booked call or purchase",
    ],
    features: [
      "SEO-optimized architecture with semantic markup",
      "Fast, responsive design across every device",
      "Conversion-focused layouts and calls to action",
      "Content management for easy updates without a developer",
      "Analytics and tracking set up from day one",
      "Accessibility best practices built in",
    ],
    benefits: [
      "Higher qualified lead volume from organic search",
      "A site that reflects the quality of your business",
      "Faster load times that keep visitors from bouncing",
      "Content your team can update without waiting on a developer",
    ],
    techStack: ["Next.js", "React", "Tailwind CSS", "TypeScript"],
    faqs: [
      {
        question: "Will the website be optimized for search engines from launch?",
        answer:
          "Yes — semantic HTML, metadata, sitemaps, and performance optimization are part of the build, not a separate add-on.",
      },
      {
        question: "Can our team update content ourselves after launch?",
        answer:
          "Yes, we set up a content workflow so your team can make routine updates without needing a developer for every change.",
      },
      {
        question: "How long does a typical business website take to build?",
        answer:
          "It depends on scope and page count — we'll give you a concrete timeline after discovery, typically ranging from a few weeks for a focused site to longer for larger, content-heavy builds.",
      },
    ],
  },
  {
    slug: "custom-web-applications",
    icon: "webapp",
    title: "Custom Web Applications",
    description:
      "Bespoke internal and customer-facing applications built around your exact operational workflows.",
    outcome: "Software that fits the business, not the other way around.",
    overview:
      "Bespoke internal and customer-facing applications built around your exact operational workflows — for businesses that have outgrown off-the-shelf software and need something built specifically for how they work.",
    problems: [
      "Off-the-shelf software that almost fits, but forces workarounds",
      "Manual processes that no existing tool handles well",
      "Disconnected tools that don't talk to each other",
      "Workflows that don't scale as the team and volume grow",
    ],
    features: [
      "Custom workflows built around your exact processes",
      "Integrations with the tools you already use",
      "Role-based access and permission structures",
      "Scalable architecture built for growth",
      "Clean, maintainable codebase your team can build on",
      "Full ownership of source code and infrastructure",
    ],
    benefits: [
      "Software that fits the business, not the other way around",
      "Manual workarounds eliminated",
      "One connected system instead of disjointed tools",
      "A foundation that scales as the business grows",
    ],
    techStack: ["React", "Node.js", "PostgreSQL", "TypeScript"],
    faqs: [
      {
        question: "How is this different from off-the-shelf software?",
        answer:
          "Off-the-shelf tools are built for the average use case. A custom application is built around your specific workflows, data, and integrations — no workarounds required.",
      },
      {
        question: "What if our requirements change mid-project?",
        answer:
          "Planning happens up front, but we build in focused, reviewable increments so scope adjustments can be handled without derailing the whole project.",
      },
      {
        question: "Who maintains the application after launch?",
        answer:
          "You own the full source code, so your team can maintain it, or we can continue supporting it through an ongoing maintenance plan.",
      },
    ],
  },
  {
    slug: "saas-product-development",
    icon: "saas",
    title: "Custom SaaS Product Development",
    description:
      "End-to-end SaaS builds — multi-tenancy, billing, auth, and infrastructure — taken from idea to production.",
    outcome: "Launch-ready SaaS products without building an in-house team.",
    overview:
      "End-to-end SaaS builds — multi-tenancy, billing, authentication, and infrastructure — taken from idea to production. For founders and teams who need a real product, not a prototype, ready for their first paying customers.",
    problems: [
      "An idea that hasn't been turned into a working product",
      "No in-house team to design, build, and ship a SaaS platform",
      "Uncertainty around multi-tenant architecture and billing",
      "A prototype that isn't ready for real customers or scale",
    ],
    features: [
      "Multi-tenant architecture from day one",
      "Subscription billing and plan management",
      "Authentication, authorization, and account management",
      "Production-grade infrastructure and deployment pipeline",
      "Admin tooling for managing customers and usage",
      "API-first design for future integrations",
    ],
    benefits: [
      "A launch-ready product, not just a prototype",
      "No need to build or hire an in-house engineering team",
      "Architecture that supports your first enterprise customers",
      "A technical foundation built to scale with demand",
    ],
    techStack: ["Next.js", "TypeScript", "PostgreSQL", "Docker"],
    faqs: [
      {
        question: "Do you build the whole product, or just parts of it?",
        answer:
          "We can take a SaaS product from concept through launch — architecture, frontend, backend, billing, and infrastructure — or work alongside an existing team on specific parts of the build.",
      },
      {
        question: "Can the product support enterprise customers later?",
        answer:
          "Yes, multi-tenant architecture and scalable infrastructure are built in from the start, so the product doesn't need a rebuild when a larger customer signs on.",
      },
      {
        question: "What billing providers do you integrate with?",
        answer:
          "We typically integrate with providers like Stripe for subscription billing, and can adapt to your preferred provider during planning.",
      },
    ],
  },
  {
    slug: "api-integrations",
    icon: "api",
    title: "API Integrations",
    description:
      "Connect your systems to payment gateways, CRMs, EHRs, and third-party platforms with reliable, documented APIs.",
    outcome: "Eliminates manual data re-entry between disconnected tools.",
    overview:
      "Connecting your systems to payment gateways, CRMs, EHRs, and third-party platforms with reliable, documented APIs — so your tools share data automatically instead of relying on manual exports and re-entry.",
    problems: [
      "Data manually copied between disconnected systems",
      "Third-party tools that don't talk to your internal software",
      "Fragile, undocumented integrations that break silently",
      "No visibility when a sync or webhook fails",
    ],
    features: [
      "REST API design and integration with third-party platforms",
      "Webhook handling for real-time data sync",
      "Error handling and retry logic for reliability",
      "Authentication and secure credential management",
      "Documentation for every integration built",
      "Monitoring and alerting for integration failures",
    ],
    benefits: [
      "Manual data re-entry eliminated between systems",
      "Systems stay in sync automatically and reliably",
      "Fewer silent failures thanks to monitoring and alerts",
      "Clear documentation your team can reference long-term",
    ],
    techStack: ["Node.js", "REST APIs", "PostgreSQL", "Redis"],
    faqs: [
      {
        question: "What kinds of platforms can you integrate with?",
        answer:
          "Payment gateways, CRMs, EHRs, marketing tools, and most platforms that expose a documented API or webhook system.",
      },
      {
        question: "What happens if an integration fails?",
        answer:
          "We build in error handling, retry logic, and monitoring so failures are caught and alerted on rather than failing silently.",
      },
      {
        question: "Do you document the integrations you build?",
        answer:
          "Yes, every integration comes with documentation covering how it works, its data flow, and how to troubleshoot it.",
      },
    ],
  },
  {
    slug: "business-automation",
    icon: "automation",
    title: "Business Automation",
    description:
      "Workflow automation that removes repetitive manual work from operations, finance, and support teams.",
    outcome: "Hours of manual work reclaimed every week.",
    overview:
      "Workflow automation that removes repetitive manual work from operations, finance, and support teams — so your team spends time on decisions that need a human, not data entry that doesn't.",
    problems: [
      "Teams spending hours a week on repetitive manual tasks",
      "Manual handoffs between teams causing delays and errors",
      "Processes that depend on one person remembering to do them",
      "No visibility into where a process is stuck",
    ],
    features: [
      "Workflow automation across operations, finance, and support",
      "Automated notifications and task handoffs between teams",
      "Rule-based triggers for recurring processes",
      "Integration with existing tools and systems",
      "Audit trail for every automated action",
      "Dashboards to monitor automated workflow status",
    ],
    benefits: [
      "Hours of manual work reclaimed every week",
      "Fewer errors from manual handoffs",
      "Processes that run consistently, not by memory",
      "Clear visibility into where every process stands",
    ],
    techStack: ["Node.js", "PostgreSQL", "REST APIs", "Redis"],
    faqs: [
      {
        question: "What kinds of processes can be automated?",
        answer:
          "Anything rule-based and repetitive — approvals, notifications, data syncing, report generation, and handoffs between teams or systems.",
      },
      {
        question: "Will we lose visibility into automated processes?",
        answer:
          "No — every automated workflow includes an audit trail and dashboard so you can see exactly what ran, when, and what happened.",
      },
      {
        question: "Can automation be added to our existing systems?",
        answer:
          "In most cases, yes. We connect to your existing tools via API rather than requiring you to replace what's already working.",
      },
    ],
  },
  {
    slug: "ai-powered-applications",
    icon: "ai",
    title: "AI Powered Applications",
    description:
      "AI-assisted features — from intelligent search to automated document processing — embedded into your product.",
    outcome: "New product capabilities that competitors can't match manually.",
    overview:
      "AI-assisted features — from intelligent search to automated document processing — embedded directly into your product, designed to solve a specific business problem rather than added as a generic chatbot.",
    problems: [
      "Manual document review and data extraction that doesn't scale",
      "Search or lookup tools that don't understand what users mean",
      "Repetitive classification or tagging work done by hand",
      "Competitors shipping AI features you haven't been able to build",
    ],
    features: [
      "Intelligent search and semantic lookup",
      "Automated document processing and data extraction",
      "Content classification and tagging",
      "AI features embedded directly into existing workflows",
      "Human-in-the-loop review for high-stakes decisions",
      "Monitoring for accuracy and model performance",
    ],
    benefits: [
      "Manual review work reduced, not eliminated blindly",
      "Faster turnaround on document-heavy processes",
      "Product capabilities that would take years to build in-house",
      "AI features scoped to a real business problem, not a demo",
    ],
    techStack: ["Node.js", "Next.js", "PostgreSQL", "TypeScript"],
    faqs: [
      {
        question: "Do you build custom AI models, or use existing ones?",
        answer:
          "In most cases, we integrate and fine-tune existing foundation models for your use case — it's faster to ship and more reliable than training from scratch.",
      },
      {
        question: "How do you handle AI accuracy and mistakes?",
        answer:
          "We design human-in-the-loop review for decisions that matter, and monitor model performance in production rather than treating AI as fire-and-forget.",
      },
      {
        question: "What's a realistic first AI feature to build?",
        answer:
          "It depends on your data and workflows — we typically start with a well-scoped feature like document extraction or intelligent search, then expand from there.",
      },
    ],
  },
  {
    slug: "ui-ux-design",
    icon: "uiux",
    title: "UI/UX Design",
    description:
      "Interface design grounded in usability research, delivering products that feel as good as they perform.",
    outcome: "Lower support tickets and higher user activation rates.",
    overview:
      "Interface design grounded in usability research, delivering products that feel as good as they perform — because a well-built product with a confusing interface still loses users.",
    problems: [
      "A product that's functional but confusing to use",
      "High support ticket volume from unclear workflows",
      "Low user activation or adoption after signup",
      "An interface that doesn't reflect the quality of the product",
    ],
    features: [
      "User research and usability testing",
      "Wireframing and interactive prototypes",
      "Design systems for consistent, scalable interfaces",
      "Accessibility considered from the first draft",
      "Handoff-ready designs for engineering",
      "Iteration based on real user feedback",
    ],
    benefits: [
      "Lower support tickets from clearer workflows",
      "Higher user activation and adoption rates",
      "A consistent design system that scales with the product",
      "An interface that matches the quality of the engineering behind it",
    ],
    techStack: ["Figma", "React", "Tailwind CSS"],
    faqs: [
      {
        question: "Do you design from scratch or work with our existing brand?",
        answer:
          "Both — we can design within your existing brand guidelines or help establish a design system if you don't have one yet.",
      },
      {
        question:
          "Is the design handed off as static mockups or working components?",
        answer:
          "We deliver handoff-ready designs, and when paired with our frontend development, that design becomes real, working components — not just static images.",
      },
      {
        question: "How do you validate a design before development starts?",
        answer:
          "Through prototyping and usability feedback where relevant, so major usability issues are caught before engineering time is spent building them.",
      },
    ],
  },
  {
    slug: "frontend-development",
    icon: "frontend",
    title: "Frontend Development",
    description:
      "Pixel-accurate, accessible, high-performance frontends built with modern frameworks and best practices.",
    outcome: "Fast, responsive experiences across every device.",
    overview:
      "Pixel-accurate, accessible, high-performance frontends built with modern frameworks and best practices — turning designs into interfaces that are fast, responsive, and built to last.",
    problems: [
      "Designs that don't translate cleanly into working code",
      "Slow-loading interfaces that hurt conversion and SEO",
      "Frontend code that's hard to maintain or extend",
      "Interfaces that break on mobile or older browsers",
    ],
    features: [
      "Pixel-accurate implementation from design files",
      "Performance optimization for fast load times",
      "Responsive layouts across every device size",
      "Accessible markup following WCAG best practices",
      "Component-based architecture for maintainability",
      "Cross-browser testing and compatibility",
    ],
    benefits: [
      "Fast, responsive experiences across every device",
      "Frontend code your team can maintain and extend",
      "Better search rankings from improved performance",
      "Fewer bugs from inconsistent, ad hoc implementation",
    ],
    techStack: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    faqs: [
      {
        question: "Can you build from our existing designs?",
        answer:
          "Yes — we implement from Figma or other design files, or work with our own UI/UX design service if you need both.",
      },
      {
        question: "What frameworks do you build with?",
        answer:
          "Primarily React and Next.js, using TypeScript and Tailwind CSS — a modern, well-supported stack chosen for long-term maintainability.",
      },
      {
        question: "Will the frontend be optimized for performance and SEO?",
        answer:
          "Yes, performance and semantic, crawlable markup are treated as requirements, not afterthoughts, especially for anything customer-facing.",
      },
    ],
  },
];

export function getServiceBySlug(slug: string) {
  return services.find((service) => service.slug === slug);
}

export function getRelatedServices(slug: string, count = 3) {
  const currentIndex = services.findIndex((service) => service.slug === slug);
  if (currentIndex === -1) return services.slice(0, count);

  const related: ServiceItem[] = [];
  for (let i = 1; related.length < count && i <= services.length - 1; i++) {
    related.push(services[(currentIndex + i) % services.length]);
  }
  return related;
}

export function getAdjacentServices(slug: string) {
  const currentIndex = services.findIndex((service) => service.slug === slug);
  if (currentIndex === -1) return { previous: null, next: null };

  const previous = services[(currentIndex - 1 + services.length) % services.length];
  const next = services[(currentIndex + 1) % services.length];
  return { previous, next };
}
