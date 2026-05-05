import Image from 'next/image';
import { MoveRightIcon} from "lucide-react";
import { getAllCategories } from "@/services/categoriesServices";
import { CategoriesI } from "@/types/categories";
import Link from "next/link";
import React from "react";
import { Products } from "@/types/productInterface";
import { getAllProducts } from "@/services/products";
import Offer from "./Components/Commens/Offer";
import Newsletter from "./Components/Commens/Newsletter";
import Info from "./Components/Commens/Info";
import SliderCarousel from "./Components/Commens/SliderCarousel";
import ProductItem from './Components/Commens/ProductItem';
export default async function Home() {
  const Categories : CategoriesI= await getAllCategories();
  const products : Products= await getAllProducts();

  

  return (
    <>
    
      <div className="space-y-8">
        
      <div className="bg-gray-100 pb-5 overflow-hidden w-full">
        <SliderCarousel/>
        <Info/>
      </div>
      <div className="shopCategories py-10">
        <div className="container px-4 mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 relative">
            <div className="px-3 flex items-center gap-3 before:content-[''] before:rounded-xl before:absolute before:w-1.5 before:h-10 before:bg-linear-to-b before:from-emerald-500 before:to-emerald-700 rounded-full before:top-0 before:left-0">
              <h2 className="text-3xl font-bold">Shop By <span className="text-emerald-600">Category</span> </h2>
            </div>
            <Link href="categories" className="cursor-pointer flex items-center gap-2 text-green-500 hover:text-green-800 text-xl">View All Categories <MoveRightIcon /> </Link>
          </div>
          <div className="grid grid-cols-6 p-7 gap-4">
            
            {Categories.data.map((category)=>{
              return <React.Fragment key={category._id}>
                <Link href={`/products?category=${category._id}`} className="col-span-3 md:col-span-2 lg:col-span-1 flex flex-col items-center transition-transform duration-300 hover:-translate-y-2">
                  <Image src={category.image} width={1000} height={1000} alt="category_photo" className="w-25 h-25 rounded-full object-cover"/>
                  <h1>{category.name}</h1>
                </Link>
              </React.Fragment>
            })}
          </div>
        </div>
      </div>
      <Offer/>
      <div className="Featured Products py-10">
        <div className="container px-4 mx-auto">
          <div className="flex items-center justify-between relative">
            <div className="px-3 flex items-center gap-3 before:content-[''] before:rounded-xl before:absolute before:w-1.5 before:h-10 before:bg-linear-to-b before:from-emerald-500 before:to-emerald-700 rounded-full before:top-0 before:left-0">
              <h2 className="text-3xl font-bold">Featured  <span className="text-emerald-600">Products</span> </h2>
            </div>
          </div>
        <div className="my-4  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">
            {products.data.map((product)=>
              <React.Fragment key={product._id} >
                <ProductItem product={product} />
              </React.Fragment>
            )
            }
            
        </div>

      </div>
      </div>
      <Newsletter/>
      <Info/>
      </div>
    </>
  );
}
