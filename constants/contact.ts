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
  { icon: "bolt", label: "Quick Response" },
  { icon: "shield", label: "NDA Friendly" },
  { icon: "badge", label: "Source Code Ownership" },
  { icon: "chat", label: "Professional Communication" },
];
