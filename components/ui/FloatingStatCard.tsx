"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/cn";
import { BoltIcon, ShieldIcon, TrendIcon } from "@/components/icons";
import type { HeroStat } from "@/types";

const icons = {
  trend: TrendIcon,
  bolt: BoltIcon,
  shield: ShieldIcon,
};

const iconStyles = {
  trend: "bg-emerald-50 text-emerald-600",
  bolt: "bg-amber-50 text-amber-600",
  shield: "bg-blue-50 text-brand",
};

type FloatingStatCardProps = HeroStat & {
  className?: string;
  delay?: number;
};

export function FloatingStatCard({
  label,
  value,
  icon,
  className,
  delay = 0,
}: FloatingStatCardProps) {
  const Icon = icons[icon];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay }}
      className={cn("absolute", className)}
    >
      <motion.div
        animate={{ y: [0, -12, 0] }}
        transition={{
          duration: 5 + delay,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="flex items-center gap-3 rounded-card border border-slate-200 bg-white/90 px-4 py-3 shadow-elevated backdrop-blur-sm"
      >
        <span
          className={cn(
            "flex h-9 w-9 shrink-0 items-center justify-center rounded-[10px]",
            iconStyles[icon]
          )}
        >
          <Icon className="h-4 w-4" />
        </span>
        <span className="flex flex-col whitespace-nowrap">
          <span className="text-sm font-semibold text-slate-900">{value}</span>
          <span className="text-xs text-slate-500">{label}</span>
        </span>
      </motion.div>
    </motion.div>
  );
}
