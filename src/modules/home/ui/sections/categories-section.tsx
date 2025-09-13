"use client";
import { FilterCarousel } from "@/components/filter-carousel";
import { trpc } from "@/trpc/client";
import { useRouter } from "next/navigation";
import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
interface CategoriesSectionProps {
  categoryId?: string;
}

// i am doing not to forhet that were ever i use useSuspenseQuery, i have to wrap it with a Suspense
export const CategoriesSection = ({ categoryId }: CategoriesSectionProps) => {
  return (
    <Suspense fallback={<FilterCarousel onSelect={() => {}} data={[]} />}>
      <ErrorBoundary fallback={<p>Error...</p>}>
        <CategoriesSectionSuspense categoryId={categoryId} />
      </ErrorBoundary>
    </Suspense>
  );
};

const CategoriesSectionSuspense = ({ categoryId }: CategoriesSectionProps) => {
  const router = useRouter();
  const [categories] = trpc.categories.getMany.useSuspenseQuery();

  const data = categories.map(({ name, id }) => ({
    value: id,
    label: name,
  }));

  const onSelect = (value: string | null) => {
    const url = new URL(window.location.href);
    if (value) {
      url.searchParams.set("categoryId", value);
    } else {
      url.searchParams.delete("categoryId");
    }
    router.push(url.toString());
  };

  return (
    <FilterCarousel
      onSelect={onSelect}
      isLoading={false}
      data={data}
      value={categoryId}
    />
  );
};
