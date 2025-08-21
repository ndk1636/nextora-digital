"use client";

import React from "react";
import { Mail, Phone, Linkedin, Briefcase } from "lucide-react";
import Link from "next/link";
import { siteContent } from "../lib/content";

export default function Footer() {
  const socialIcons = {
    Linkedin: <Linkedin className="h-5 w-5 text-teal-400" aria-hidden="true" />,
    Briefcase: <Briefcase className="h-5 w-5 text-teal-400" aria-hidden="true" />,
  };

  return (
    <footer className="bg-slate-900 border-t border-teal-600/20 py-12" role="contentinfo">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4 text-sm text-slate-400">
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-xl bg-teal-400/20 ring-1 ring-teal-400/40 grid place-items-center">
              <svg className="h-5 w-5 text-teal-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10" />
                <path d="M2 12h20" />
                <path d="M12 2v20" />
              </svg>
            </div>
            <span className="text-lg font-semibold text-slate-200">{siteContent.footer.company}</span>
          </div>
          <p className="text-slate-300">
            Building future-ready digital solutions for global brands.
          </p>
          <p>© {siteContent.footer.year} {siteContent.footer.company}. All rights reserved.</p>
        </div>
        <div className="space-y-4">
          <h3 className="text-base font-semibold text-slate-200">Quick Links</h3>
          <ul className="space-y-2">
            {siteContent.footer.links.map((link, i) => (
              <li key={i}>
                <Link href={link.href} className="hover:text-teal-400 transition" rel="nofollow">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="space-y-4">
          <h3 className="text-base font-semibold text-slate-200">Contact Us</h3>
          <div className="flex items-center gap-2">
            <Mail className="h-5 w-5 text-teal-400" aria-hidden="true" />
            <a href={`mailto:${siteContent.footer.contact.email}`} className="hover:text-teal-400 transition">
              {siteContent.footer.contact.email}
            </a>
          </div>
          <div className="flex items-center gap-2">
            <Phone className="h-5 w-5 text-teal-400" aria-hidden="true" />
            <a href={`tel:${siteContent.footer.contact.phone}`} className="hover:text-teal-400 transition">
              {siteContent.footer.contact.phone}
            </a>
          </div>
          <div className="flex items-center gap-4 pt-2">
            {siteContent.footer.socials.map((social, i) => (
              <a
                key={i}
                href={social.href}
                className="hover:text-teal-400 transition"
                aria-label={social.label}
                rel="nofollow"
                target="_blank"
              >
                {socialIcons[social.icon]}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}