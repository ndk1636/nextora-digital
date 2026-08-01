import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Page Not Found",
  description: "The page you're looking for doesn't exist or may have moved.",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <PageHeader
      eyebrow="404"
      title="Page not found"
      description="The page you're looking for doesn't exist or may have moved. Let's get you back on track."
    >
      <Button href="/">Back to Home</Button>
      <Button href="/contact" variant="secondary">
        Contact Us
      </Button>
    </PageHeader>
  );
}
