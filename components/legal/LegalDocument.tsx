import { Container } from "@/components/ui/Container";
import { CheckCircleIcon } from "@/components/icons";
import type { LegalSection } from "@/types";

type LegalDocumentProps = {
  lastUpdated: string;
  sections: LegalSection[];
};

export function LegalDocument({ lastUpdated, sections }: LegalDocumentProps) {
  return (
    <section className="bg-white pb-24 sm:pb-32">
      <Container>
        <div className="mx-auto max-w-3xl">
          <p className="text-sm text-slate-500">Last updated: {lastUpdated}</p>

          <div className="mt-10 flex flex-col gap-10">
            {sections.map((section) => (
              <div key={section.heading}>
                <h2 className="text-xl font-semibold text-slate-900">
                  {section.heading}
                </h2>
                <div className="mt-3 flex flex-col gap-3">
                  {section.paragraphs.map((paragraph) => (
                    <p
                      key={paragraph}
                      className="text-sm leading-relaxed text-slate-600"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
                {section.list && (
                  <ul className="mt-3 flex flex-col gap-2">
                    {section.list.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2.5 text-sm leading-relaxed text-slate-600"
                      >
                        <CheckCircleIcon className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500" />
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
