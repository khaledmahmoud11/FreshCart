import Image from 'next/image';
import { Eye, MoveRightIcon,  Repeat2Icon,  Star,  } from "lucide-react";
import { getAllCategories } from "@/services/categoriesServices";
import { CategoriesI } from "@/types/categories";
import Link from "next/link";
import React from "react";
import { Products } from "@/types/productInterface";
import { getAllProducts } from "@/services/products";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Offer from "./Components/Commens/Offer";
import Newsletter from "./Components/Commens/Newsletter";
import Info from "./Components/Commens/Info";
import SliderCarousel from "./Components/Commens/SliderCarousel";
import AddToCartBtn from "./Components/Commens/AddToCartBtn";
import AddToWishBtn from './Components/Commens/AddToWishBtn';
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
                <div className=" col-span-1 relative hover:shadow-md hover:-translate-y-1.5 duration-400 transition-all rounded-2xl ">
                  {product.priceAfterDiscount && 
                    <div className="absolute rounded-lg text-sm bg-red-500 font-bold text-white px-2 py-1 top-5 left-5">
                      {Math.round(((product.priceAfterDiscount-product.price)/product.price)*100)} %
                    </div>
                  }
                  
                  <div className="absolute top-5 right-0  space-y-4">
                    <AddToWishBtn productId={product._id} />
                    <div className="text-gray-600 cursor-pointer hover:text-green-700 transition-all duration-200"><Repeat2Icon size={20} /></div>
                    <Link href={`/products/${product._id}`} >
                      <div className="text-gray-600 cursor-pointer hover:text-green-700 transition-all duration-200"><Eye size={20} /></div>
                    </Link>
                  </div>
                  <Card >
                      <Image  
                        src={product.imageCover} 
                        width={1000} 
                        height={1000}
                        alt='product_image' 
                        className='w-full object-contain h-60 '
                        loading="eager"
                        fetchPriority="high"  
                      />
                      <CardHeader>
                        <div className="brand text-gray-400 text-lg">
                          {product.brand.name}
                        </div>
                        <Link href={`/products/${product._id}`} >
                          <CardTitle title={product.title} className="text-xl font-bold">
                          {product.title.split(" ").length > 5
                            ? product.title.split(" ").slice(0, 5).join(" ") + "..."
                            : product.title}
                        </CardTitle>
                        </Link>
                        
                        <CardDescription>{product.category.name}</CardDescription>
                        <div className="flex items-center gap-2">
                          <div className="flex items-center gap-2">
                            {[0,1,2,3,4].map((index)=>{
                              const filledStar = index < Math.floor(product.ratingsAverage)
                              return<React.Fragment key={index}>
                                <Star size={16} className= {filledStar ?"text-yellow-500 fill-yellow-500 ":"text-gray-500 fill-gray-500" }/>
                              </React.Fragment>
                            
                              }
                            )}
                          </div>
                          <p className='text-gray-400'> {product.ratingsAverage} </p>
                          <p className='text-gray-400'>( {product.ratingsQuantity} )</p>
                        </div>
                      </CardHeader>
                    <CardContent className="flex items-center justify-between">
                      {product.priceAfterDiscount && <p className='text-xl font-bold text-green-600' >{product.priceAfterDiscount} Egp</p> }
                      <p className={` ${product.priceAfterDiscount ? "text-gray-600 text-md line-through" : "text-lg"}  font-bold`}>{product.price} Egp</p>
                      <div >
                        <AddToCartBtn prodId ={product._id} />
                      </div>
                    </CardContent>
                  </Card>
                </div>
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
