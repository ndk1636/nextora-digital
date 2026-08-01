import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type IconBadgeProps = {
  children: ReactNode;
  className?: string;
};

export function IconBadge({ children, className }: IconBadgeProps) {
  return (
    <span
      className={cn(
        "flex h-11 w-11 shrink-0 items-center justify-center rounded-[12px] bg-blue-50 text-brand",
        className
      )}
    >
      {children}
    </span>
  );
}
