import type { ReactNode } from "react";

type BrowserFrameProps = {
  children: ReactNode;
};

export function BrowserFrame({ children }: BrowserFrameProps) {
  return (
    <div className="rounded-panel border border-slate-200 bg-white p-3 shadow-elevated sm:p-4">
      <div className="flex items-center gap-1.5 px-2 pb-3">
        <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
        <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
        <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
        <div className="ml-4 h-6 flex-1 rounded-full bg-slate-50" />
      </div>
      {children}
    </div>
  );
}
