"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { cn } from "@/lib/cn";
import { IconBadge } from "@/components/ui/IconBadge";
import {
  AdminLayoutIcon,
  ArrowUpRightIcon,
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
  href?: string;
};

export function ServiceCard({
  icon,
  title,
  description,
  outcome,
  features,
  featured,
  className,
  delay = 0,
  href,
}: ServiceCardProps) {
  const Icon = icons[icon];

  const cardClasses = cn(
    "group relative flex flex-col justify-between overflow-hidden rounded-card border bg-white p-6 shadow-soft transition-shadow duration-300 hover:shadow-glow sm:p-7",
    featured ? "border-brand/15 sm:p-8" : "border-slate-200",
    className
  );

  const content = (
    <>
      <div
        aria-hidden="true"
        className={cn(
          "pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-gradient-to-br from-brand/10 to-accent/10 blur-2xl transition-opacity duration-300 group-hover:opacity-100",
          featured ? "opacity-60" : "opacity-0"
        )}
      />

      <div className="relative">
        <IconBadge
          size={featured ? "lg" : "md"}
          className="transition-colors duration-300 group-hover:bg-brand group-hover:text-white"
        >
          <Icon className={featured ? "h-6 w-6" : "h-5 w-5"} />
        </IconBadge>

        <h3
          className={cn(
            "mt-5 font-semibold tracking-[-0.01em] text-slate-900",
            featured ? "text-xl" : "text-lg"
          )}
        >
          {title}
        </h3>
        <p
          className={cn(
            "mt-2.5 leading-relaxed text-slate-600",
            featured ? "max-w-sm text-[15px]" : "text-sm"
          )}
        >
          {description}
        </p>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {features.slice(0, featured ? 4 : 2).map((feature) => (
            <span
              key={feature}
              className="rounded-pill bg-slate-100 px-2.5 py-1 text-[11px] font-medium text-slate-600"
            >
              {feature}
            </span>
          ))}
        </div>
      </div>

      <p className="relative mt-6 flex items-start gap-2 text-sm font-medium text-slate-900">
        <CheckCircleIcon className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500" />
        {outcome}
      </p>

      {href && (
        <span
          aria-hidden="true"
          className="absolute bottom-6 right-6 flex h-8 w-8 items-center justify-center rounded-full border border-slate-200 text-slate-400 opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:border-brand/40 group-hover:text-brand group-hover:opacity-100 sm:right-7"
        >
          <ArrowUpRightIcon className="h-4 w-4" />
        </span>
      )}
    </>
  );

  if (href) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.5, delay }}
        whileHover={{ y: -4 }}
      >
        <Link href={href} className={cardClasses}>
          {content}
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -4 }}
      className={cardClasses}
    >
      {content}
    </motion.div>
  );
}
