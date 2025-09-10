import { CategoriesSection } from "../sections/categories-section";

interface HomeViewProps {
  categoryId?: string;
}

export const HomeView = ({ categoryId }: HomeViewProps) => {
  return (
    <div className="mx-auto max-w-[2400px] mb-10 px-4 pt-2.5 flex flex-col gap-y-6">
      <CategoriesSection categoryId={categoryId} />
    </div>
  );
};
