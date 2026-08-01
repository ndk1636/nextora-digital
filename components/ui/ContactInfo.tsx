import { IconBadge } from "@/components/ui/IconBadge";
import {
  BadgeCheckIcon,
  BoltIcon,
  MessageCircleIcon,
  ShieldIcon,
} from "@/components/icons";
import { contactTrustNotes } from "@/data/contact";
import { siteConfig } from "@/data/site";
import type { ContactTrustNoteIconKey } from "@/types";

const icons: Record<ContactTrustNoteIconKey, typeof BoltIcon> = {
  bolt: BoltIcon,
  shield: ShieldIcon,
  badge: BadgeCheckIcon,
  chat: MessageCircleIcon,
};

export function ContactInfo() {
  return (
    <div>
      <p className="text-sm leading-relaxed text-slate-600">
        Whether you have a fully scoped project or just an idea you want to
        pressure-test, we&apos;re glad to talk it through. Prefer email? Reach
        us directly at{" "}
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
            <li key={note.label} className="flex items-start gap-3">
              <IconBadge>
                <Icon className="h-5 w-5" />
              </IconBadge>
              <div>
                <p className="text-sm font-semibold text-slate-800">
                  {note.label}
                </p>
                <p className="mt-0.5 text-xs leading-relaxed text-slate-500">
                  {note.description}
                </p>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
