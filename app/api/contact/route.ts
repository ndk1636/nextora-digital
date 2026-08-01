import { NextResponse } from "next/server";
import type { ContactFormValues } from "@/types";

function isNonEmptyString(value: unknown): value is string {
  return typeof value === "string" && value.trim().length > 0;
}

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export async function POST(request: Request) {
  let body: Partial<ContactFormValues>;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const { name, email, message } = body;

  if (!isNonEmptyString(name) || !isNonEmptyString(email) || !isNonEmptyString(message)) {
    return NextResponse.json(
      { error: "Name, email, and message are required." },
      { status: 400 }
    );
  }

  if (!isValidEmail(email)) {
    return NextResponse.json({ error: "Please provide a valid email." }, { status: 400 });
  }

  // NOTE: This endpoint validates and accepts submissions but does not yet
  // deliver them anywhere. Wire in an email provider (e.g. Resend, SES) or a
  // CRM/database write here before relying on this in production.

  return NextResponse.json({ success: true }, { status: 200 });
}
