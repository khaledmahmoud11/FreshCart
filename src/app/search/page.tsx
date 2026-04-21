// import React from 'react'
// import {
//     Breadcrumb,
//     BreadcrumbItem,
//     BreadcrumbLink,
//     BreadcrumbList,
//     BreadcrumbPage,
//     BreadcrumbSeparator,
//     } from "@/components/ui/breadcrumb"
// import {
//   Select,
//   SelectContent,
//   SelectGroup,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select"

import { BrandsResponse } from "@/types/brand";
import { CategoriesI } from "@/types/categories";
import SearchHeader from "../Components/Commens/SeachHeader";
import FilterSidebar from "../Components/Commens/FilterSidebar";
import ProductToolbar from "../Components/Commens/ProductToolbar";
import ActiveFilters from "../Components/Commens/ActiveFilters";
import ProductsGrid from "../Components/Commens/ProductsGrid";
import { getAllCategories } from "@/services/categoriesServices";
import { getAllBrands } from "@/services/brandServices";


// import { Input } from '@/components/ui/input'
// import { getAllCategories } from '@/services/categoriesServices'
// import { CategoriesI, Category } from '@/types/categories';
// import { getAllProducts, getfilteredProducts } from '@/services/products';
// import { Product } from '@/types/productInterface';
// import ProductItem from '../Components/Commens/ProductItem';
// import PaginationComponent from '../Components/Commens/PaginationComponent'
// import { getAllBrands } from '@/services/brandServices'
// import { Brand, BrandsResponse } from '@/types/brand'
// import Info from '../Components/Commens/Info'
// import FilterFields from '../Components/Commens/FilterFields'

// export default async function Search({ searchParams }: string[]) {
//         const responseCategories :CategoriesI = await getAllCategories();
//         const allCategories : Category[] = responseCategories.data;
//         console.log(allCategories,"getAllCategoriessssssssssssssss")

//         const responseProducts = await getfilteredProducts(searchParams);
//         const allproducts:Product[] = responseProducts.data;
//         console.log(allproducts,"responseProducts88888888888888888888888")

//         const responseBrands : BrandsResponse = await getAllBrands();
//         const allBrands : Brand[] = responseBrands.data
//         console.log(responseBrands,"987987987979798797987")

//     return (
//         <>
//         <div className="py-10 sm:py-15">
//             <div className="container mx-auto px-4">
//                 <Breadcrumb>
//                     <BreadcrumbList>
//                         <BreadcrumbItem>
//                         <BreadcrumbLink href="/"className='text-gray-400 hover:text-green-500 transition-all duraiton-200' >Home</BreadcrumbLink>
//                         </BreadcrumbItem>
//                         <BreadcrumbSeparator />
//                         <BreadcrumbItem>
//                         <BreadcrumbPage>Search Results</BreadcrumbPage>
//                         </BreadcrumbItem>
//                     </BreadcrumbList>
//                     </Breadcrumb>
//             </div>

//             <div className="container mx-auto px-4 my-5">
//                 <div className="searchInput relative flex-1 max-w-sm hidden lg:flex ">

//                     <Input
//                     placeholder="Search for products, brands..."
//                     className="w-full h-auto py-3 px-4 border-gray-300 focus-visible:ring-0 focus-visible:border-green-500"
//                     />

//                 </div>
//                 <div className="flex gap-4">
//                     <div className="hidden lg:block w-64 shrink-0">

//                         <FilterFields allCategories={allCategories} allBrands={allBrands}/>
                        
//                     </div>
//                     <div className='flex-1 min-w-0'>
//                         <div className="flex items-center justify-between mb-6 gap-4 flex-wrap">
//                             <p>khaled</p>
//                             <div className='flex items-center gap-2'>
//                                 <span>Sort By :</span>
//                                 <Select>
//                                     <SelectTrigger className="w-60 py-6 px-4 
//                                         border border-gray-300
//                                         focus:border-green-600! focus:ring-0! focus:outline-none!
//                                         rounded-xl"
//                                         >
//                                         <SelectValue placeholder="Theme" />
//                                     </SelectTrigger>
//                                     <SelectContent>
//                                         <SelectGroup>
//                                         <SelectItem value="light">Relevance</SelectItem>
//                                         <SelectItem value="dark">Price : Low to High</SelectItem>
//                                         <SelectItem value="system">Price : High to Low</SelectItem>
//                                         <SelectItem value="system">Rating : High to Low</SelectItem>
//                                         <SelectItem value="system">Name: A to Z</SelectItem>
//                                         <SelectItem value="system">Name: Z to A</SelectItem>
//                                         </SelectGroup>
//                                     </SelectContent>
//                                 </Select>


//                             </div>
//                         </div>
//                         <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
//                             {allproducts.map((product)=>
//                                 <React.Fragment key={product._id}>
//                                     <ProductItem product={product}/>
//                                 </React.Fragment>
//                             )}
//                         </div>
//                     </div>

//                 </div>
//                 <div className="flex justify-center my-5">
//                     <PaginationComponent/>
//                 </div>
//             </div>

//             <div className="container mx-auto px-4 my-5">
//                 <Info/>
//             </div>
//         </div>
//         </>
//     )
// }



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
      <SearchHeader count={0} />
      <main className="container mx-auto px-4 py-8">
        <div className="flex gap-8">
          <FilterSidebar categories={categories} brands={brands} />
          <div className="flex-1">
            <ProductToolbar />
            <ActiveFilters categories={categories} brands={brands} />
            <ProductsGrid params={params} />
          </div>
        </div>
      </main>
    </section>
  );
}