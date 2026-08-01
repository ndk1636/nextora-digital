type IconProps = React.SVGProps<SVGSVGElement>;

function IconBase({ children, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      {children}
    </svg>
  );
}

export function TrendIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <polyline points="3 17 9 11 13 15 21 6" />
      <polyline points="15 6 21 6 21 12" />
    </IconBase>
  );
}

export function BoltIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <polygon points="13 2 3 14 11 14 11 22 21 10 13 10 13 2" />
    </IconBase>
  );
}

export function ShieldIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <path d="M12 2 4 5v6c0 5 3.5 8.5 8 11 4.5-2.5 8-6 8-11V5l-8-3Z" />
      <polyline points="9 12 11 14 15 10" />
    </IconBase>
  );
}

export function ArrowRightIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </IconBase>
  );
}

export function ArrowUpRightIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <line x1="7" y1="17" x2="17" y2="7" />
      <polyline points="8 7 17 7 17 16" />
    </IconBase>
  );
}

export function UsersIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </IconBase>
  );
}

export function HeartPulseIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <path d="M20.5 8.5c0-2.5-2-4.5-4.5-4.5-1.6 0-3 .8-3.8 2.1a4.5 4.5 0 0 0-8.2 2.4c0 5 8 10 8 10s8-4.9 8-10Z" />
      <polyline points="4.5 10 8 10 9.5 7.5 11.5 12.5 13 10 15.5 10" />
    </IconBase>
  );
}

export function AdminLayoutIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <rect x="3" y="4" width="18" height="16" rx="2" />
      <line x1="9" y1="4" x2="9" y2="20" />
      <line x1="3" y1="9" x2="9" y2="9" />
    </IconBase>
  );
}

export function BarChartIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <line x1="4" y1="20" x2="20" y2="20" />
      <rect x="5.5" y="13" width="3" height="7" />
      <rect x="10.5" y="8" width="3" height="12" />
      <rect x="15.5" y="4" width="3" height="16" />
    </IconBase>
  );
}

export function GlobeIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <circle cx="12" cy="12" r="9" />
      <ellipse cx="12" cy="12" rx="4" ry="9" />
      <line x1="3" y1="12" x2="21" y2="12" />
    </IconBase>
  );
}

export function WindowCodeIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <rect x="3" y="4" width="18" height="16" rx="2" />
      <line x1="3" y1="9" x2="21" y2="9" />
      <polyline points="8 13 6 15 8 17" />
      <polyline points="12 13 14 15 12 17" />
    </IconBase>
  );
}

export function LayersIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <polygon points="12 3 21 8 12 13 3 8 12 3" />
      <polyline points="3 13 12 18 21 13" />
      <polyline points="3 17.5 12 22.5 21 17.5" />
    </IconBase>
  );
}

export function PlugIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <path d="M9 2v5" />
      <path d="M15 2v5" />
      <path d="M6 8h12v3a6 6 0 0 1-12 0Z" />
      <path d="M12 17v5" />
    </IconBase>
  );
}

export function WorkflowIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <rect x="3" y="3" width="6" height="6" rx="1.5" />
      <rect x="15" y="15" width="6" height="6" rx="1.5" />
      <path d="M9 6h6a3 3 0 0 1 3 3v6" />
    </IconBase>
  );
}

export function SparklesIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <path d="M12 3v4M12 17v4M3 12h4M17 12h4" />
      <path d="M12 8a4 4 0 0 0 4 4 4 4 0 0 0-4 4 4 4 0 0 0-4-4 4 4 0 0 0 4-4Z" />
    </IconBase>
  );
}

export function PenToolIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <path d="M15 4 20 9 9 20H4v-5Z" />
      <line x1="13" y1="6" x2="18" y2="11" />
    </IconBase>
  );
}

export function CodeIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <polyline points="9 6 3 12 9 18" />
      <polyline points="15 6 21 12 15 18" />
    </IconBase>
  );
}

export function CheckCircleIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <circle cx="12" cy="12" r="9" />
      <polyline points="8 12.5 10.8 15 16 9.5" />
    </IconBase>
  );
}

export function SearchIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <circle cx="11" cy="11" r="7" />
      <line x1="16.5" y1="16.5" x2="21" y2="21" />
    </IconBase>
  );
}

export function ClipboardListIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <rect x="6" y="4" width="12" height="17" rx="2" />
      <path d="M9 4V3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1" />
      <line x1="9" y1="10" x2="15" y2="10" />
      <line x1="9" y1="14" x2="15" y2="14" />
      <line x1="9" y1="18" x2="12.5" y2="18" />
    </IconBase>
  );
}

export function RocketIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <path d="M12 15c4-2 6-6 5.5-11.5C11.5 3 7.5 5 5.5 9c-1.2 2.4-1.2 4.6 0 6.5L3 18l3-.5L4.5 21l3-1.5" />
      <circle cx="13" cy="8" r="1.75" />
    </IconBase>
  );
}

export function LifeBuoyIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="3.5" />
      <line x1="5.5" y1="5.5" x2="9" y2="9" />
      <line x1="15" y1="15" x2="18.5" y2="18.5" />
      <line x1="18.5" y1="5.5" x2="15" y2="9" />
      <line x1="9" y1="15" x2="5.5" y2="18.5" />
    </IconBase>
  );
}

export function BadgeCheckIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <path d="M12 2.5 14.4 4.4 17.4 4 18.4 6.9 21 8.4 20 11.5 21 14.6 18.4 16.1 17.4 19 14.4 18.6 12 20.5 9.6 18.6 6.6 19 5.6 16.1 3 14.6 4 11.5 3 8.4 5.6 6.9 6.6 4 9.6 4.4Z" />
      <polyline points="8.5 12.5 11 15 15.5 9.5" />
    </IconBase>
  );
}

export function TargetIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="12" cy="12" r="1" fill="currentColor" />
    </IconBase>
  );
}

export function QuoteIcon(props: IconProps) {
  return (
    <IconBase fill="currentColor" stroke="none" {...props}>
      <path d="M9.5 6.5c-3 1.4-4.5 3.6-4.5 6.6a4 4 0 0 0 4 4 3.5 3.5 0 0 0 3.5-3.5c0-1.7-1.1-3-2.7-3.4.3-1.5 1.4-2.7 3-3.4Z" />
      <path d="M19 6.5c-3 1.4-4.5 3.6-4.5 6.6a4 4 0 0 0 4 4 3.5 3.5 0 0 0 3.5-3.5c0-1.7-1.1-3-2.7-3.4.3-1.5 1.4-2.7 3-3.4Z" />
    </IconBase>
  );
}

export function PlusIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <line x1="12" y1="5" x2="12" y2="19" />
      <line x1="5" y1="12" x2="19" y2="12" />
    </IconBase>
  );
}

export function LinkedInIcon(props: IconProps) {
  return (
    <IconBase fill="currentColor" stroke="none" {...props}>
      <rect x="3" y="3" width="18" height="18" rx="3" fill="none" stroke="currentColor" strokeWidth="1.75" />
      <circle cx="7.5" cy="8" r="1.4" />
      <rect x="6.3" y="10.5" width="2.4" height="7.5" />
      <path d="M11.3 10.5h2.3v1.2c.5-.8 1.4-1.4 2.6-1.4 2 0 3 1.3 3 3.7v4h-2.4v-3.6c0-1-.4-1.7-1.4-1.7-.8 0-1.3.6-1.5 1.1-.1.2-.1.5-.1.8v3.4h-2.4z" />
    </IconBase>
  );
}

export function GithubIcon(props: IconProps) {
  return (
    <IconBase fill="currentColor" stroke="none" {...props}>
      <path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.46-1.15-1.11-1.46-1.11-1.46-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.08 2.91.83.09-.65.35-1.08.63-1.33-2.22-.25-4.56-1.11-4.56-4.95 0-1.09.39-1.98 1.03-2.68-.1-.26-.45-1.29.1-2.68 0 0 .84-.27 2.75 1.02a9.6 9.6 0 0 1 5 0c1.91-1.29 2.75-1.02 2.75-1.02.55 1.39.2 2.42.1 2.68.64.7 1.03 1.59 1.03 2.68 0 3.85-2.35 4.7-4.58 4.94.36.31.68.92.68 1.85v2.74c0 .27.18.58.69.48A10 10 0 0 0 12 2Z" />
    </IconBase>
  );
}

export function XIcon(props: IconProps) {
  return (
    <IconBase fill="currentColor" stroke="none" {...props}>
      <path d="M4 3.5h4.2l4 5.6 4.6-5.6H19l-6.3 7.6L19.6 20.5h-4.2l-4.3-6-5 6H4l6.7-8.1Z" />
    </IconBase>
  );
}

export function MessageCircleIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <path d="M21 11.5a8.5 8.5 0 0 1-8.5 8.5 8.4 8.4 0 0 1-3.9-.95L3 20l1.1-4.2A8.4 8.4 0 0 1 3.5 11.5a8.5 8.5 0 0 1 17 0Z" />
    </IconBase>
  );
}

export function LoaderIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <path d="M12 3a9 9 0 1 0 9 9" />
    </IconBase>
  );
}
