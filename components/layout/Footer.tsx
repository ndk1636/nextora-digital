import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { GithubIcon, LinkedInIcon, XIcon } from "@/components/icons";
import { navLinks, siteConfig } from "@/constants/site";

const socialLinks = [
  { label: "LinkedIn", href: siteConfig.links.linkedin, icon: LinkedInIcon },
  { label: "GitHub", href: siteConfig.links.github, icon: GithubIcon },
  { label: "X (Twitter)", href: siteConfig.links.twitter, icon: XIcon },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 bg-white py-14">
      <Container>
        <div className="flex flex-col gap-10 sm:flex-row sm:items-start sm:justify-between">
          <div className="max-w-xs">
            <Link
              href="/"
              className="flex items-center gap-2.5 text-lg font-semibold tracking-tight text-slate-900"
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-[10px] bg-gradient-to-br from-brand to-accent text-sm font-bold text-white">
                N
              </span>
              <span className="font-display">
                {siteConfig.shortName} <span className="text-brand">Digital</span>
              </span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-slate-500">
              A premium software engineering studio building SaaS platforms,
              enterprise systems, and AI-powered applications.
            </p>
          </div>

          <nav
            aria-label="Footer"
            className="grid grid-cols-2 gap-x-10 gap-y-3 sm:flex sm:gap-8"
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-slate-600 transition-colors hover:text-slate-900"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex flex-col gap-4">
            <a
              href={`mailto:${siteConfig.email}`}
              className="text-sm font-medium text-slate-700 transition-colors hover:text-brand"
            >
              {siteConfig.email}
            </a>
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 text-slate-500 transition-colors hover:border-brand/40 hover:text-brand"
                >
                  <social.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-slate-200 pt-8 text-center text-xs text-slate-500 sm:text-left">
          &copy; {year} {siteConfig.name}. All rights reserved.
        </div>
      </Container>
    </footer>
  );
}
