import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type IconBadgeSize = "md" | "lg";

type IconBadgeProps = {
  children: ReactNode;
  className?: string;
  size?: IconBadgeSize;
};

const sizeStyles: Record<IconBadgeSize, string> = {
  md: "h-11 w-11 rounded-[12px]",
  lg: "h-14 w-14 rounded-[14px]",
};

export function IconBadge({ children, className, size = "md" }: IconBadgeProps) {
  return (
    <span
      className={cn(
        "flex shrink-0 items-center justify-center bg-blue-50 text-brand",
        sizeStyles[size],
        className
      )}
    >
      {children}
    </span>
  );
}
