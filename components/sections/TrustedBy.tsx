import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TechBadge } from "@/components/ui/TechBadge";
import { trustIndicators, trustedByStack } from "@/constants/technologies";

export function TrustedBy() {
  const marqueeItems = [...trustedByStack, ...trustedByStack];

  return (
    <section
      className="border-y border-slate-200 bg-slate-50/60 py-20 sm:py-24"
      aria-label="Technology stack and trust indicators"
    >
      <Container>
        <SectionHeading
          eyebrow="Engineering Capabilities"
          title="Built with technology enterprises trust"
          description="From interfaces to infrastructure, every product we ship runs on stacks proven at enterprise scale."
        />

        <div className="relative mt-14 overflow-hidden">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-slate-50 to-transparent sm:w-32" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-slate-50 to-transparent sm:w-32" />

          <div className="animate-marquee flex w-max gap-3">
            {marqueeItems.map((name, index) => (
              <TechBadge key={`${name}-${index}`} name={name} />
            ))}
          </div>
        </div>

        <div className="mt-16 grid grid-cols-2 gap-x-6 gap-y-10 border-t border-slate-200 pt-12 sm:grid-cols-4">
          {trustIndicators.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="font-display text-3xl font-bold text-slate-900">
                {stat.value}
              </p>
              <p className="mt-1 text-sm text-slate-500">{stat.label}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
