import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ServiceCard } from "@/components/ui/ServiceCard";
import type { ServiceItem } from "@/types";

type RelatedServicesProps = {
  services: ServiceItem[];
};

export function RelatedServices({ services }: RelatedServicesProps) {
  return (
    <section className="bg-slate-50/60 py-24 sm:py-32">
      <Container>
        <SectionHeading eyebrow="Related Services" title="You might also need" />

        <div className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <ServiceCard
              key={service.slug}
              {...service}
              href={`/services/${service.slug}`}
              delay={index * 0.08}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
