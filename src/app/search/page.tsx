import { getAllBrands } from "@/services/brandServices";
import { getAllCategories } from "@/services/categoriesServices";
import { BrandsResponse } from "@/types/brand";
import { CategoriesI } from "@/types/categories";
import SearchHeader from "../Components/Commens/SeachHeader";
import FilterSidebar from "../Components/Commens/FilterSidebar";
import SearchProductsView from "../Components/Commens/SearchProductsView";


export interface SearchParams {
  brand?: string;
  category?: string;
  keyword?: string;
  priceLte?: number;
  sort?: string;
}

export default async function Search({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const params = await searchParams;
  const { data: categories }: CategoriesI = await getAllCategories();
  const { data: brands }: BrandsResponse = await getAllBrands();

  return (
    <section className="min-h-screen bg-gray-50">
      <SearchHeader/>
      <main className="container mx-auto px-4 py-8">
        <div className="flex gap-8">
          <FilterSidebar categories={categories} brands={brands} />
          <SearchProductsView
            categories={categories}
            brands={brands}
            params={params}
          />
        </div>
      </main>
    </section>
  );
}