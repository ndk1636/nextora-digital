import type { ProcessStep } from "@/types";

export const processSteps: ProcessStep[] = [
  {
    step: "01",
    icon: "discovery",
    title: "Discovery",
    description:
      "We study your workflows, users, and business goals to define what actually needs to be built.",
    output: "Scoped project brief",
  },
  {
    step: "02",
    icon: "planning",
    title: "Planning",
    description:
      "Scope, architecture, and timeline are mapped into a clear plan before a single line of code is written.",
    output: "Technical roadmap",
  },
  {
    step: "03",
    icon: "design",
    title: "Design",
    description:
      "Interfaces are designed around real usage patterns, then validated with you before development begins.",
    output: "Reviewed interface design",
  },
  {
    step: "04",
    icon: "development",
    title: "Development",
    description:
      "Engineers build in focused sprints with regular check-ins, so you always know exactly where things stand.",
    output: "Working software, in sprints",
  },
  {
    step: "05",
    icon: "testing",
    title: "Testing",
    description:
      "Every feature is tested against real-world edge cases before it's considered done, not just demoed.",
    output: "Verified, edge-case-tested build",
  },
  {
    step: "06",
    icon: "deployment",
    title: "Deployment",
    description:
      "We handle infrastructure, deployment, and cutover so launch day is uneventful by design.",
    output: "Live production system",
  },
  {
    step: "07",
    icon: "support",
    title: "Support",
    description:
      "Post-launch monitoring and support keep systems healthy as your team and usage grow.",
    output: "Ongoing monitoring & support",
  },
];
