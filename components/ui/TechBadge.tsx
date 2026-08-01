import { cn } from "@/lib/cn";

type TechBadgeProps = {
  name: string;
  className?: string;
};

export function TechBadge({ name, className }: TechBadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex shrink-0 items-center gap-2 rounded-pill border border-slate-200 bg-white px-3.5 py-1.5 text-sm font-medium text-slate-700",
        className
      )}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-br from-brand to-accent" />
      {name}
    </span>
  );
}
