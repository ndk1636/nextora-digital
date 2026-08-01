import type { ProjectItem } from "@/types";

export const projectAccentMap: Record<
  ProjectItem["accent"],
  { text: string; solid: string; grad: string }
> = {
  brand: { text: "text-brand", solid: "bg-brand", grad: "from-brand to-accent" },
  accent: { text: "text-accent", solid: "bg-accent", grad: "from-accent to-brand" },
  success: {
    text: "text-emerald-600",
    solid: "bg-emerald-500",
    grad: "from-emerald-500 to-accent",
  },
};
