import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { services } from "@/constants/services";
import { cn } from "@/lib/cn";

export function Services() {
  return (
    <section id="services" className="bg-white py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="Services"
          title="Software built around how your business runs"
          description="From internal systems to customer-facing products, we design and engineer the software your business runs on."
        />

        <div className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <ServiceCard
              key={service.title}
              {...service}
              delay={(index % 3) * 0.08}
              className={cn(service.featured && "lg:col-span-2")}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
