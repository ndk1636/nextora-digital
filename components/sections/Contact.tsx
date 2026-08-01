import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { IconBadge } from "@/components/ui/IconBadge";
import {
  BadgeCheckIcon,
  BoltIcon,
  MessageCircleIcon,
  ShieldIcon,
} from "@/components/icons";
import { contactTrustNotes } from "@/constants/contact";
import { siteConfig } from "@/constants/site";
import type { ContactTrustNoteIconKey } from "@/types";
import { ContactForm } from "./ContactForm";

const icons: Record<ContactTrustNoteIconKey, typeof BoltIcon> = {
  bolt: BoltIcon,
  shield: ShieldIcon,
  badge: BadgeCheckIcon,
  chat: MessageCircleIcon,
};

export function Contact() {
  return (
    <section id="contact" className="bg-slate-50/60 py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="Contact"
          title="Let's talk about your project"
          description="Tell us what you're building and we'll follow up with next steps — no obligation, no sales pressure."
        />

        <div className="mt-16 grid gap-10 lg:grid-cols-5 lg:gap-16">
          <div className="lg:col-span-2">
            <p className="text-sm leading-relaxed text-slate-600">
              Prefer email? Reach us directly at{" "}
              <a
                href={`mailto:${siteConfig.email}`}
                className="font-medium text-brand hover:underline"
              >
                {siteConfig.email}
              </a>
              .
            </p>

            <ul className="mt-8 flex flex-col gap-5">
              {contactTrustNotes.map((note) => {
                const Icon = icons[note.icon];
                return (
                  <li key={note.label} className="flex items-center gap-3">
                    <IconBadge>
                      <Icon className="h-5 w-5" />
                    </IconBadge>
                    <span className="text-sm font-medium text-slate-800">
                      {note.label}
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <ContactForm />
          </div>
        </div>
      </Container>
    </section>
  );
}
