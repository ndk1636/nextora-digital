"use client";

import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AccordionItem } from "@/components/ui/AccordionItem";
import { faqs as defaultFaqs } from "@/data/faqs";
import type { FaqItem } from "@/types";

type FAQProps = {
  items?: FaqItem[];
  eyebrow?: string;
  title?: string;
  description?: string;
};

export function FAQ({
  items = defaultFaqs,
  eyebrow = "FAQ",
  title = "Answers to common questions",
  description = "Can't find what you're looking for? Reach out and we'll get back to you directly.",
}: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-white py-24 sm:py-32">
      <Container>
        <SectionHeading eyebrow={eyebrow} title={title} description={description} />

        <div className="mx-auto mt-16 max-w-3xl">
          {items.map((faq, index) => (
            <AccordionItem
              key={faq.question}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onToggle={() =>
                setOpenIndex((current) => (current === index ? null : index))
              }
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
