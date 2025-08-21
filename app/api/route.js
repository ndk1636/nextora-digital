import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const { name, email, service, message } = await request.json();

    // Example: Log to console for now
    console.log("Form submission:", { name, email, service, message });

    return NextResponse.json(
      { message: "Form submitted successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error processing form:", error);
    return NextResponse.json(
      { error: "Failed to submit form" },
      { status: 500 }
    );
  }
}
