export type HeroStat = {
  label: string;
  value: string;
  icon: "trend" | "bolt" | "shield";
};

export type ServiceIconKey =
  | "hrm"
  | "medical"
  | "admin"
  | "dashboard"
  | "website"
  | "webapp"
  | "saas"
  | "api"
  | "automation"
  | "ai"
  | "uiux"
  | "frontend";

export type ServiceItem = {
  slug: string;
  icon: ServiceIconKey;
  title: string;
  description: string;
  outcome: string;
  featured?: boolean;
  overview: string;
  problems: string[];
  features: string[];
  benefits: string[];
  techStack: string[];
  faqs: FaqItem[];
};

export type TechCategory = {
  category: string;
  description: string;
  items: string[];
};

export type TrustIndicator = {
  value: string;
  label: string;
  description: string;
};

export type ProjectVisual = "line" | "bar" | "list";

export type ProjectItem = {
  slug: string;
  name: string;
  category: string;
  description: string;
  tech: string[];
  highlights: string[];
  impact: string;
  visual: ProjectVisual;
  accent: "brand" | "accent" | "success";
  overview: string;
  goals: string[];
  features: string[];
  designHighlights: string[];
};

export type ProcessIconKey =
  | "discovery"
  | "planning"
  | "design"
  | "development"
  | "testing"
  | "deployment"
  | "support";

export type ProcessStep = {
  step: string;
  icon: ProcessIconKey;
  title: string;
  description: string;
  output: string;
};

export type WhyChooseUsIconKey =
  | "quality"
  | "scalability"
  | "reliability"
  | "impact"
  | "partnership"
  | "transparency";

export type WhyChooseUsItem = {
  icon: WhyChooseUsIconKey;
  title: string;
  description: string;
};

export type FaqItem = {
  question: string;
  answer: string;
};

export type ContactTrustNoteIconKey = "bolt" | "shield" | "badge" | "chat";

export type ContactTrustNote = {
  icon: ContactTrustNoteIconKey;
  label: string;
  description: string;
};

export type ContactFormValues = {
  name: string;
  email: string;
  company: string;
  projectType: string;
  budget: string;
  message: string;
};

export type AudienceIconKey = "startup" | "enterprise" | "healthcare" | "business";

export type AudienceItem = {
  icon: AudienceIconKey;
  title: string;
  description: string;
};

export type PrincipleIconKey = "scope" | "ownership" | "communication" | "support";

export type PrincipleItem = {
  icon: PrincipleIconKey;
  title: string;
  description: string;
};

export type BreadcrumbItem = {
  label: string;
  href?: string;
};

export type LegalSection = {
  heading: string;
  paragraphs: string[];
  list?: string[];
};
