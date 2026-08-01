import { cn } from "@/lib/cn";
import { CheckCircleIcon } from "@/components/icons";
import { BrowserFrame } from "@/components/ui/BrowserFrame";
import type { ProjectItem } from "@/types";

const accentMap: Record<
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

type ProjectVisualPreviewProps = Pick<ProjectItem, "name" | "visual" | "accent">;

export function ProjectVisualPreview({
  name,
  visual,
  accent,
}: ProjectVisualPreviewProps) {
  const theme = accentMap[accent];

  return (
    <BrowserFrame>
      <div className="rounded-2xl bg-slate-50/70 p-5 sm:p-6">
        <div className="flex items-center gap-3">
          <span
            className={cn(
              "flex h-9 w-9 items-center justify-center rounded-[10px] bg-gradient-to-br text-sm font-bold text-white",
              theme.grad
            )}
          >
            {name.charAt(0)}
          </span>
          <span className="text-sm font-semibold text-slate-900">{name}</span>
        </div>

        <div className="mt-6">
          {visual === "bar" && <BarVisual solidClass={theme.solid} />}
          {visual === "line" && <LineVisual colorClass={theme.text} />}
          {visual === "list" && <ListVisual colorClass={theme.text} />}
        </div>
      </div>
    </BrowserFrame>
  );
}

function BarVisual({ solidClass }: { solidClass: string }) {
  const heights = [40, 65, 50, 80, 60, 95, 70];
  return (
    <div className="flex h-28 items-end gap-2">
      {heights.map((height, index) => (
        <div
          key={index}
          className={cn(
            "flex-1 rounded-t-md",
            index === heights.length - 2 ? solidClass : "bg-slate-200"
          )}
          style={{ height: `${height}%` }}
        />
      ))}
    </div>
  );
}

function LineVisual({ colorClass }: { colorClass: string }) {
  return (
    <svg
      viewBox="0 0 220 80"
      className={cn("h-28 w-full", colorClass)}
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <polyline
        points="0,60 30,50 60,55 90,30 120,38 150,18 180,26 220,10"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ListVisual({ colorClass }: { colorClass: string }) {
  const rows = ["Data sync complete", "Report generated", "3 alerts resolved"];
  return (
    <ul className="space-y-3">
      {rows.map((row) => (
        <li
          key={row}
          className="flex items-center gap-3 rounded-xl bg-white px-3 py-2.5 shadow-soft"
        >
          <CheckCircleIcon className={cn("h-4 w-4 shrink-0", colorClass)} />
          <span className="text-sm text-slate-600">{row}</span>
        </li>
      ))}
    </ul>
  );
}
