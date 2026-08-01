"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/cn";
import { IconBadge } from "@/components/ui/IconBadge";
import {
  AdminLayoutIcon,
  BarChartIcon,
  CheckCircleIcon,
  CodeIcon,
  GlobeIcon,
  HeartPulseIcon,
  LayersIcon,
  PenToolIcon,
  PlugIcon,
  SparklesIcon,
  UsersIcon,
  WindowCodeIcon,
  WorkflowIcon,
} from "@/components/icons";
import type { ServiceIconKey, ServiceItem } from "@/types";

const icons: Record<ServiceIconKey, typeof UsersIcon> = {
  hrm: UsersIcon,
  medical: HeartPulseIcon,
  admin: AdminLayoutIcon,
  dashboard: BarChartIcon,
  website: GlobeIcon,
  webapp: WindowCodeIcon,
  saas: LayersIcon,
  api: PlugIcon,
  automation: WorkflowIcon,
  ai: SparklesIcon,
  uiux: PenToolIcon,
  frontend: CodeIcon,
};

type ServiceCardProps = ServiceItem & {
  className?: string;
  delay?: number;
};

export function ServiceCard({
  icon,
  title,
  description,
  outcome,
  className,
  delay = 0,
}: ServiceCardProps) {
  const Icon = icons[icon];

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -4 }}
      className={cn(
        "group relative flex flex-col justify-between overflow-hidden rounded-card border border-slate-200 bg-white p-6 shadow-soft transition-shadow duration-300 hover:shadow-glow sm:p-7",
        className
      )}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-gradient-to-br from-brand/10 to-accent/10 opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-100"
      />

      <div className="relative">
        <IconBadge className="transition-colors duration-300 group-hover:bg-brand group-hover:text-white">
          <Icon className="h-5 w-5" />
        </IconBadge>

        <h3 className="mt-5 text-lg font-semibold text-slate-900">{title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-slate-600">
          {description}
        </p>
      </div>

      <p className="relative mt-6 flex items-start gap-2 text-sm font-medium text-slate-900">
        <CheckCircleIcon className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500" />
        {outcome}
      </p>
    </motion.div>
  );
}
