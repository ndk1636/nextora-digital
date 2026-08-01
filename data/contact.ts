import type { ContactTrustNote } from "@/types";

export const projectTypes = [
  "Business Website",
  "Custom Web Application",
  "SaaS Product",
  "HRM / Admin System",
  "Healthcare / Billing System",
  "AI / Automation",
  "Other",
];

export const budgetRanges = [
  "Under $5,000",
  "$5,000 – $15,000",
  "$15,000 – $50,000",
  "$50,000+",
  "Not sure yet",
];

export const contactTrustNotes: ContactTrustNote[] = [
  {
    icon: "bolt",
    label: "Quick Response",
    description: "We reply to every inquiry personally, not with an autoresponder.",
  },
  {
    icon: "shield",
    label: "NDA Friendly",
    description: "Happy to sign one before any detailed project discussion.",
  },
  {
    icon: "badge",
    label: "Source Code Ownership",
    description: "Everything we build transfers to you, with no lock-in.",
  },
  {
    icon: "chat",
    label: "Professional Communication",
    description: "Direct access to the people building your software.",
  },
];
