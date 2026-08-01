"use client";

import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AccordionItem } from "@/components/ui/AccordionItem";
import { faqs } from "@/constants/faqs";

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-white py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="FAQ"
          title="Answers to common questions"
          description="Can't find what you're looking for? Reach out and we'll get back to you directly."
        />

        <div className="mx-auto mt-16 max-w-3xl">
          {faqs.map((faq, index) => (
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
