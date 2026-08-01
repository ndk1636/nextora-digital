import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProjectVisualPreview } from "@/components/ui/ProjectVisualPreview";
import type { ProjectItem, ProjectVisual } from "@/types";

const nextVisual: Record<ProjectVisual, ProjectVisual> = {
  bar: "line",
  line: "list",
  list: "bar",
};

type ProjectGalleryProps = Pick<ProjectItem, "name" | "visual" | "accent">;

export function ProjectGallery({ name, visual, accent }: ProjectGalleryProps) {
  const secondaryVisual = nextVisual[visual];

  return (
    <section className="bg-slate-50/60 py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="Interface Preview"
          title="A representative look at the interface"
          description="These are illustrative interface concepts representing our design approach for this type of system — not final product screenshots."
        />

        <div className="mx-auto mt-16 grid max-w-4xl grid-cols-1 gap-6 sm:grid-cols-2">
          <div>
            <ProjectVisualPreview name={name} visual={visual} accent={accent} />
            <p className="mt-3 text-center text-xs text-slate-500">
              Primary Dashboard View
            </p>
          </div>
          <div>
            <ProjectVisualPreview
              name={name}
              visual={secondaryVisual}
              accent={accent}
            />
            <p className="mt-3 text-center text-xs text-slate-500">
              Secondary View
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
