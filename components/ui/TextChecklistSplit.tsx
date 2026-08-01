import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CheckCircleIcon } from "@/components/icons";

type TextChecklistSplitProps = {
  eyebrow: string;
  title: string;
  description: string;
  checklistTitle: string;
  items: string[];
};

export function TextChecklistSplit({
  eyebrow,
  title,
  description,
  checklistTitle,
  items,
}: TextChecklistSplitProps) {
  return (
    <section className="bg-white py-24 sm:py-32">
      <Container>
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <SectionHeading
            eyebrow={eyebrow}
            title={title}
            description={description}
            align="left"
          />

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-500">
              {checklistTitle}
            </h3>
            <ul className="mt-5 flex flex-col gap-3">
              {items.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-sm leading-relaxed text-slate-700"
                >
                  <CheckCircleIcon className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
