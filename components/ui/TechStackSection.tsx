import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TechBadge } from "@/components/ui/TechBadge";

type TechStackSectionProps = {
  items: string[];
};

export function TechStackSection({ items }: TechStackSectionProps) {
  return (
    <section className="bg-white py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="Technology Stack"
          title="Built with proven, well-supported technology"
        />

        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {items.map((item) => (
            <TechBadge key={item} name={item} />
          ))}
        </div>
      </Container>
    </section>
  );
}
