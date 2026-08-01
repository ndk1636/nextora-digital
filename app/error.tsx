"use client";

import { useEffect } from "react";
import { PageHeader } from "@/components/ui/PageHeader";
import { Button } from "@/components/ui/Button";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <PageHeader
      eyebrow="Error"
      title="Something went wrong"
      description="An unexpected error occurred while loading this page. You can try again or head back home."
    >
      <Button onClick={reset}>Try Again</Button>
      <Button href="/" variant="secondary">
        Back to Home
      </Button>
    </PageHeader>
  );
}
