"use client";

import { useId, useState, type FormEvent, type ReactNode } from "react";
import { Button } from "@/components/ui/Button";
import { CheckCircleIcon, LoaderIcon } from "@/components/icons";
import { budgetRanges, projectTypes } from "@/constants/contact";
import { cn } from "@/lib/cn";
import type { ContactFormValues } from "@/types";

const initialValues: ContactFormValues = {
  name: "",
  email: "",
  company: "",
  projectType: projectTypes[0],
  budget: budgetRanges[0],
  message: "",
};

type Status = "idle" | "submitting" | "success" | "error";

const inputClass =
  "w-full rounded-button border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 transition-colors focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20";

export function ContactForm() {
  const [values, setValues] = useState<ContactFormValues>(initialValues);
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const nameId = useId();
  const emailId = useId();
  const companyId = useId();
  const projectTypeId = useId();
  const budgetId = useId();
  const messageId = useId();

  function updateField<K extends keyof ContactFormValues>(
    field: K,
    value: ContactFormValues[K]
  ) {
    setValues((prev) => ({ ...prev, [field]: value }));
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      if (!response.ok) {
        const data = await response.json().catch(() => null);
        throw new Error(data?.error ?? "Something went wrong. Please try again.");
      }

      setStatus("success");
      setValues(initialValues);
    } catch (error) {
      setStatus("error");
      setErrorMessage(
        error instanceof Error ? error.message : "Something went wrong."
      );
    }
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-center justify-center rounded-card border border-slate-200 bg-white p-10 text-center shadow-soft">
        <span className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
          <CheckCircleIcon className="h-6 w-6" />
        </span>
        <h3 className="mt-4 text-lg font-semibold text-slate-900">
          Message sent
        </h3>
        <p className="mt-2 max-w-sm text-sm leading-relaxed text-slate-600">
          Thanks for reaching out — we&apos;ll review your project details and
          get back to you shortly.
        </p>
        <Button
          variant="secondary"
          className="mt-6"
          onClick={() => setStatus("idle")}
        >
          Send another message
        </Button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="rounded-card border border-slate-200 bg-white p-6 shadow-soft sm:p-8"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Name" htmlFor={nameId}>
          <input
            id={nameId}
            name="name"
            type="text"
            required
            autoComplete="name"
            value={values.name}
            onChange={(event) => updateField("name", event.target.value)}
            className={inputClass}
          />
        </Field>

        <Field label="Email" htmlFor={emailId}>
          <input
            id={emailId}
            name="email"
            type="email"
            required
            autoComplete="email"
            value={values.email}
            onChange={(event) => updateField("email", event.target.value)}
            className={inputClass}
          />
        </Field>

        <Field label="Company" htmlFor={companyId} optional>
          <input
            id={companyId}
            name="company"
            type="text"
            autoComplete="organization"
            value={values.company}
            onChange={(event) => updateField("company", event.target.value)}
            className={inputClass}
          />
        </Field>

        <Field label="Project Type" htmlFor={projectTypeId}>
          <select
            id={projectTypeId}
            name="projectType"
            value={values.projectType}
            onChange={(event) => updateField("projectType", event.target.value)}
            className={inputClass}
          >
            {projectTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </Field>

        <Field label="Budget Range" htmlFor={budgetId} className="sm:col-span-2">
          <select
            id={budgetId}
            name="budget"
            value={values.budget}
            onChange={(event) => updateField("budget", event.target.value)}
            className={inputClass}
          >
            {budgetRanges.map((range) => (
              <option key={range} value={range}>
                {range}
              </option>
            ))}
          </select>
        </Field>

        <Field label="Message" htmlFor={messageId} className="sm:col-span-2">
          <textarea
            id={messageId}
            name="message"
            required
            rows={5}
            value={values.message}
            onChange={(event) => updateField("message", event.target.value)}
            className={cn(inputClass, "resize-none")}
          />
        </Field>
      </div>

      {status === "error" && (
        <p role="alert" className="mt-4 text-sm text-red-600">
          {errorMessage}
        </p>
      )}

      <Button
        type="submit"
        size="lg"
        className="mt-6 w-full sm:w-auto"
        disabled={status === "submitting"}
      >
        {status === "submitting" ? (
          <>
            <LoaderIcon className="h-4 w-4 animate-spin" />
            Sending…
          </>
        ) : (
          "Send Message"
        )}
      </Button>
    </form>
  );
}

type FieldProps = {
  label: string;
  htmlFor: string;
  children: ReactNode;
  optional?: boolean;
  className?: string;
};

function Field({ label, htmlFor, children, optional, className }: FieldProps) {
  return (
    <div className={className}>
      <label
        htmlFor={htmlFor}
        className="mb-1.5 block text-sm font-medium text-slate-700"
      >
        {label}{" "}
        {optional && (
          <span className="font-normal text-slate-500">(optional)</span>
        )}
      </label>
      {children}
    </div>
  );
}
