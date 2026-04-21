import { Category } from "@/types/categories";
import CategoryList from "./CategoryList";

export default async function CategoryFilter({
  categories,
}: {
  categories: Category[];
}) {
  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-bold text-gray-900">Categories</h3>
      </div>
      <CategoryList categories={categories} />
    </div>
  );
}