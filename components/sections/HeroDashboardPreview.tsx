import { BrowserFrame } from "@/components/ui/BrowserFrame";

const kpiTiles = [
  { label: "Active Projects", value: "18" },
  { label: "Team Velocity", value: "94%" },
  { label: "Client NPS", value: "72" },
];

const sidebarDots = ["bg-brand", "bg-slate-200", "bg-slate-200", "bg-slate-200"];

export function HeroDashboardPreview() {
  return (
    <BrowserFrame>
      <div className="grid grid-cols-[56px_1fr] gap-3 rounded-2xl bg-slate-50/70 p-3 sm:grid-cols-[64px_1fr] sm:gap-4 sm:p-4">
        <div className="flex flex-col items-center gap-3 rounded-2xl bg-white py-4 shadow-soft">
          <span className="h-8 w-8 rounded-[10px] bg-gradient-to-br from-brand to-accent" />
          {sidebarDots.map((color, index) => (
            <span key={index} className={`h-2 w-2 rounded-full ${color}`} />
          ))}
        </div>

        <div className="flex flex-col gap-3 sm:gap-4">
          <div className="grid grid-cols-3 gap-3">
            {kpiTiles.map((tile) => (
              <div
                key={tile.label}
                className="rounded-2xl bg-white p-3 shadow-soft"
              >
                <p className="text-base font-semibold text-slate-900 sm:text-lg">
                  {tile.value}
                </p>
                <p className="mt-0.5 truncate text-[10px] font-medium text-slate-500 sm:text-[11px]">
                  {tile.label}
                </p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-3 gap-3">
            <div className="col-span-2 rounded-2xl bg-white p-4 shadow-soft">
              <div className="flex items-center justify-between">
                <span className="text-xs font-medium text-slate-500">
                  Revenue Growth
                </span>
                <span className="rounded-pill bg-emerald-50 px-2 py-0.5 text-[11px] font-medium text-emerald-600">
                  +24.6%
                </span>
              </div>
              <svg
                viewBox="0 0 240 64"
                className="mt-3 h-14 w-full sm:h-16"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                <defs>
                  <linearGradient id="heroChartFill" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#2563eb" stopOpacity="0.25" />
                    <stop offset="100%" stopColor="#2563eb" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <path
                  d="M0 46 L34 38 L68 42 L102 24 L136 30 L170 14 L204 20 L240 6 L240 64 L0 64 Z"
                  fill="url(#heroChartFill)"
                  stroke="none"
                />
                <path
                  d="M0 46 L34 38 L68 42 L102 24 L136 30 L170 14 L204 20 L240 6"
                  fill="none"
                  stroke="#2563eb"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            <div className="flex flex-col items-center justify-center rounded-2xl bg-white p-3 shadow-soft">
              <div
                className="relative flex h-14 w-14 items-center justify-center rounded-full sm:h-16 sm:w-16"
                style={{
                  background:
                    "conic-gradient(#2563eb 0% 92%, #e2e8f0 92% 100%)",
                }}
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-[11px] font-semibold text-slate-900 sm:h-12 sm:w-12 sm:text-xs">
                  92%
                </div>
              </div>
              <span className="mt-2 text-center text-[10px] font-medium text-slate-500 sm:text-[11px]">
                Project Health
              </span>
            </div>
          </div>
        </div>
      </div>
    </BrowserFrame>
  );
}
