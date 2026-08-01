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
  icon: ServiceIconKey;
  title: string;
  description: string;
  outcome: string;
  featured?: boolean;
};

export type TechCategory = {
  category: string;
  items: string[];
};

export type ProjectVisual = "line" | "bar" | "list";

export type ProjectItem = {
  name: string;
  category: string;
  description: string;
  tech: string[];
  highlights: string[];
  impact: string;
  visual: ProjectVisual;
  accent: "brand" | "accent" | "success";
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
};

export type WhyChooseUsIconKey =
  | "quality"
  | "scalability"
  | "reliability"
  | "impact"
  | "partnership";

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
};

export type ContactFormValues = {
  name: string;
  email: string;
  company: string;
  projectType: string;
  budget: string;
  message: string;
};
