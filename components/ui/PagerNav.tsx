import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { ArrowRightIcon } from "@/components/icons";

type PagerLink = {
  href: string;
  label: string;
};

type PagerNavProps = {
  previous: PagerLink;
  next: PagerLink;
};

export function PagerNav({ previous, next }: PagerNavProps) {
  return (
    <section className="border-t border-slate-200 bg-white py-10">
      <Container>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <Link
            href={previous.href}
            className="group flex items-center gap-3 rounded-card border border-slate-200 bg-white p-5 shadow-soft transition-shadow hover:shadow-glow"
          >
            <ArrowRightIcon className="h-4 w-4 shrink-0 rotate-180 text-slate-400 transition-colors group-hover:text-brand" />
            <span>
              <span className="block text-xs text-slate-500">Previous</span>
              <span className="block text-sm font-semibold text-slate-900">
                {previous.label}
              </span>
            </span>
          </Link>

          <Link
            href={next.href}
            className="group flex items-center justify-between gap-3 rounded-card border border-slate-200 bg-white p-5 shadow-soft transition-shadow hover:shadow-glow"
          >
            <span>
              <span className="block text-xs text-slate-500">Next</span>
              <span className="block text-sm font-semibold text-slate-900">
                {next.label}
              </span>
            </span>
            <ArrowRightIcon className="h-4 w-4 shrink-0 text-slate-400 transition-colors group-hover:text-brand" />
          </Link>
        </div>
      </Container>
    </section>
  );
}
