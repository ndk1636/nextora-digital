"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { cn } from "@/lib/cn";

type ButtonVariant = "primary" | "secondary" | "ghost";
type ButtonSize = "md" | "lg";

type CommonProps = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  children: React.ReactNode;
};

type ButtonProps =
  | (CommonProps & {
      href: string;
      onClick?: never;
      type?: never;
      disabled?: never;
    })
  | (CommonProps & {
      href?: undefined;
      onClick?: () => void;
      type?: "button" | "submit";
      disabled?: boolean;
    });

const variantStyles: Record<ButtonVariant, string> = {
  primary: "bg-brand text-white shadow-glow hover:bg-brand-dark",
  secondary:
    "bg-white text-slate-900 border border-slate-200 hover:border-brand/40 hover:text-brand",
  ghost: "bg-transparent text-slate-900 hover:text-brand",
};

const sizeStyles: Record<ButtonSize, string> = {
  md: "h-11 px-5 text-sm",
  lg: "h-12 px-7 text-base",
};

export function Button(props: ButtonProps) {
  const { variant = "primary", size = "md", className, children } = props;

  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-button font-medium transition-colors duration-200 whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-60",
    variantStyles[variant],
    sizeStyles[size],
    className
  );

  if (props.href) {
    const isExternal = props.href.startsWith("http");

    if (isExternal) {
      return (
        <motion.a
          href={props.href}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.98 }}
          className={classes}
        >
          {children}
        </motion.a>
      );
    }

    return (
      <motion.div
        whileHover={{ y: -2 }}
        whileTap={{ scale: 0.98 }}
        className="inline-block"
      >
        <Link href={props.href} className={classes}>
          {children}
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.button
      type={props.type ?? "button"}
      onClick={props.onClick}
      disabled={props.disabled}
      whileHover={props.disabled ? undefined : { y: -2 }}
      whileTap={props.disabled ? undefined : { scale: 0.98 }}
      className={classes}
    >
      {children}
    </motion.button>
  );
}
