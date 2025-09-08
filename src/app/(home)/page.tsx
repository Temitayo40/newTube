import { HydrateClient, trpc } from "@/trpc/server";
import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
export default async function Home() {
  void trpc.hello.prefetch({ text: "damilola" });
  return (
    <HydrateClient>
      <Suspense fallback={<p>loading...</p>}>
        <ErrorBoundary fallback={<p>Error...</p>}></ErrorBoundary>
      </Suspense>
    </HydrateClient>
  );
}
