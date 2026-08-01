import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { GithubIcon, LinkedInIcon, XIcon } from "@/components/icons";
import { legalLinks, navLinks } from "@/data/navigation";
import { services } from "@/data/services";
import { siteConfig } from "@/data/site";
import { trustedByStack } from "@/data/technologies";

const socialLinks = [
  { label: "LinkedIn", href: siteConfig.links.linkedin, icon: LinkedInIcon },
  { label: "GitHub", href: siteConfig.links.github, icon: GithubIcon },
  { label: "X (Twitter)", href: siteConfig.links.twitter, icon: XIcon },
];

const footerServices = services.slice(0, 5);

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 bg-white py-16">
      <Container>
        <div className="grid grid-cols-2 gap-x-8 gap-y-12 sm:grid-cols-4">
          <div className="col-span-2 max-w-xs sm:col-span-1">
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
              enterprise systems, and AI-powered applications for startups and
              enterprises worldwide.
            </p>
            <div className="mt-5 flex items-center gap-3">
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

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-400">
              Company
            </h3>
            <nav aria-label="Footer" className="mt-4 flex flex-col gap-3">
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
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-400">
              Services
            </h3>
            <nav className="mt-4 flex flex-col gap-3">
              {footerServices.map((service) => (
                <Link
                  key={service.slug}
                  href={`/services/${service.slug}`}
                  className="text-sm text-slate-600 transition-colors hover:text-slate-900"
                >
                  {service.title}
                </Link>
              ))}
              <Link
                href="/services"
                className="text-sm font-medium text-brand transition-colors hover:text-brand-dark"
              >
                View all services →
              </Link>
            </nav>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-400">
              Contact
            </h3>
            <div className="mt-4 flex flex-col gap-3">
              <a
                href={`mailto:${siteConfig.email}`}
                className="text-sm font-medium text-slate-700 transition-colors hover:text-brand"
              >
                {siteConfig.email}
              </a>
              <Link
                href="/contact"
                className="text-sm text-slate-600 transition-colors hover:text-slate-900"
              >
                Book a call
              </Link>
              <Link
                href="/faq"
                className="text-sm text-slate-600 transition-colors hover:text-slate-900"
              >
                Frequently asked questions
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-slate-200 pt-8">
          <p className="text-xs leading-relaxed text-slate-400">
            <span className="font-semibold text-slate-500">Built with:</span>{" "}
            {trustedByStack.join(" · ")}
          </p>
        </div>

        <div className="mt-8 flex flex-col items-center gap-4 border-t border-slate-200 pt-8 text-center sm:flex-row sm:justify-between sm:text-left">
          <p className="text-xs text-slate-500">
            &copy; {year} {siteConfig.name}. All rights reserved.
          </p>
          <nav aria-label="Legal" className="flex items-center gap-5">
            {legalLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-xs text-slate-500 transition-colors hover:text-slate-900"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </Container>
    </footer>
  );
}
