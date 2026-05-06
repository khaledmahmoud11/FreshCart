import React from 'react'
import Link from "next/link"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"



import { Check,  Share2, ShoppingBasket, Star,  Truck,  Zap } from 'lucide-react';
import ProductCounter from '@/app/Components/Commens/ProductCounter';
import WishBtnInDetails from '@/app/Components/Commens/WishBtnInDetails';
import ProductGallery from '@/app/Components/Commens/ProductSlider';
import { Product, Products } from '@/types/productInterface'
import ProductsShipings from '@/app/Components/Commens/ProductsShipings'
import { getAllProducts } from '@/services/products'
import AddCartFromDetails from '@/app/Components/Commens/AddCartFromDetails'
import { getReviews } from '@/services/reviews'
import { IReview, IReviewsResponse } from '@/types/reviews'
import ProductsReviews from '@/app/Components/Commens/ProductsReviews'
import ProductItem from '@/app/Components/Commens/ProductItem'
export default async function ProdctDetails({
  params,
}: {
  params: Promise<{ productDetails: string }>
}) {
  const {productDetails} = await params

    const response = await fetch(`${process.env.BASE_URL}/products/${productDetails}`)
    const data = await response.json();
    const product : Product = data.data;
    const products : Products= await getAllProducts(product.category._id);
    const relatedProducts = products.data.filter((reProduct)=>reProduct._id !== product._id);
    
    
    
      const ReviewsResponse : IReviewsResponse = await getReviews(productDetails);
      const reviews : IReview[] = ReviewsResponse.data;

      const ratingCounts = reviews.reduce((acc: Record<number, number>, review) => {
        acc[review.rating] = (acc[review.rating] || 0) + 1;
        return acc;
      }, {});

      const ratingStats = [5, 4, 3, 2, 1].map((star) => {
        const count = ratingCounts[star] || 0;
        return {
          star,
          count,
          percentage: reviews.length > 0 ? (count / reviews.length) * 100 : 0,
        };
      });



    return (
  <>
    <div className="container px-4 mx-auto py-10">
        <Breadcrumb>
        <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink asChild>
            <Link href="/" className='text-sm text-gray-400'>Home</Link>
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink asChild>
            <Link href="/products" className='text-md text-gray-500'>{product.category.name}</Link>
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink asChild>
            <Link href="/products" className='text-lg text-gray-600'>{product.subcategory[0].name}</Link>
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage className='text-2xl font-bold'>{product.title}</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
      </Breadcrumb>

    <Card className='overflow-visible' >
        <div className='relative grid grid-cols-4 py-8 gap-10 '>
            <div className=' col-span-4 lg:col-span-1 lg:sticky top-15 h-fit'>
                <ProductGallery productImages={product.images} />
            </div>
            <div className="col-span-4 lg:col-span-3 space-y-5">
                  <CardHeader className='space-y-5'>
                    <div className="brand flex items-center gap- text-lg">
                      <div className='px-2 py-1 text-green-700 text-sm rounded-full hover:bg-green-100'>{product.category.name}</div>
                      <div className='text-sm text-gray-600'>{product.brand.name}</div>  
                    </div>
                    <CardTitle className='text-3xl font-bold' >{product.title}</CardTitle>
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
                      <p className='text-gray-400'>( {product.ratingsQuantity} Reviwes ) </p>
                    </div>
                    <div className='flex items-center gap-3'>
                      {product.priceAfterDiscount && <p className='text-3xl font-bold text-green-600' >{product.priceAfterDiscount} Egp</p> }
                      <p className={` ${product.priceAfterDiscount ? "text-gray-600 text-xl line-through" : "text-3xl"}  font-bold`}>{product.price} Egp</p>
                      {product.priceAfterDiscount && 
                        <div className="rounded-lg text-sm bg-red-500 font-bold text-white px-2 py-1 top-5 left-5">
                          Save {Math.round(((product.price-product.priceAfterDiscount)/product.price)*100)}  %
                        </div>
                      }
                    </div>
                    <div className='text-green-700 bg-green-100 rounded-full px-2 py-1 text-xl flex items-center gap-2'>
                      <span className='w-2 h-2 bg-green-700 rounded-full'></span>
                      <p>In Stock</p>
                    </div>
                    <CardDescription className='my-2 text-gray-600 text-lg'>{product.description}</CardDescription>                        
                  </CardHeader>
                  <CardContent>
                    <p className='text-gray-600 text-lg'>Quantity</p>
                    <ProductCounter productQuantity={product.quantity} productPrice={product.priceAfterDiscount || product.price} />

                    <div className='w-full'>
                      <AddCartFromDetails productId={product._id} />

                    </div>
                  </CardContent>
                  <CardFooter >
                    
                    <div className='flex items-center gap-2 w-full'>
                      <WishBtnInDetails productId={product._id} />
                      <div className='p-3 flex items-center justify-center border border-gray-200 rounded-lg hover:border-green-500 hover:text-green-500 transition-all duration-200 cursor-pointer'>
                        <Share2 />
                      </div>
                    </div>
                  </CardFooter>

              </div>
                </div>

    </Card>
    <Tabs defaultValue="account" className=" container px-4 my-5">
                  <TabsList className='my-4'>
                    
                    <TabsTrigger value="details" className=' group flex items-center gap-2 p-6 font-medium whitespace-nowrap transition-all duration-200 text-gray-600 hover:text-green-600 hover:bg-gray-50 cursor-pointer 
                    data-[state=active]:text-green-600 
                      data-[state=active]:border-b-2 
                    data-[state=active]:border-green-600 
                      data-[state=active]:shadow-sm'
                      > <ShoppingBasket className='group-hover:text-green-600 group-hover:fill-green-600 transition-all duraiton-200 ' />  Product Details</TabsTrigger>
                    
                    <TabsTrigger value="reviews" className='group flex items-center gap-2 p-6 font-medium whitespace-nowrap transition-all duration-200 text-gray-600 hover:text-green-600 hover:bg-gray-50 cursor-pointer
                    data-[state=active]:text-green-600 
                      data-[state=active]:border-b-2 
                    data-[state=active]:border-green-600 
                      data-[state=active]:shadow-sm'
                      > <Star className='group-hover:text-green-600 group-hover:fill-green-600 transition-all duraiton-200 ' /> Reviews ({product.ratingsQuantity})</TabsTrigger>
                    
                    <TabsTrigger value="Shipings" className='group flex items-center gap-2 p-6 font-medium whitespace-nowrap transition-all duration-200 text-gray-600 hover:text-green-600 hover:bg-gray-50 cursor-pointer 
                    data-[state=active]:bg-green-50 
                    data-[state=active]:text-green-600 
                      data-[state=active]:border-b-2 
                    data-[state=active]:border-green-600 
                      data-[state=active]:shadow-sm'
                      > <Truck className='group-hover:text-green-600 group-hover:fill-green-600 transition-all duraiton-200 ' /> Shipings And Returns</TabsTrigger>
                  </TabsList>

                  <TabsContent value="details">
                    <div className='space-y-3'>
                      <h3 className='text-lg font-semibold text-gray-900 mb-3'>About this Product</h3>
                      <p className='text-[16px] text-gray-600 leading-relaxed'>{product.description}</p>
                      
                      <div className='grid grid-cols-2 gap-4 px-4'>
                        
                        <div className="col-span-2 md:col-span-1 ">
                          <h4 className="font-medium text-gray-900 mb-3 text-lg">Product Information</h4>
                          <ul className='list-none space-y-2'>
                          <li className='flex items-center justify-between text-sm'>
                            <span className="text-gray-500">Category</span>
                            <span className="text-gray-900">{product.category.name}</span>
                          </li>
                          <li className='flex items-center justify-between text-sm'>
                            <span className="text-gray-500">Subcategory</span>
                            <span className="text-gray-900">{product.subcategory[0].name}</span>
                          </li>
                          <li className='flex items-center justify-between text-sm'>
                            <span className="text-gray-500">Brand</span>
                            <span className="text-gray-900">{product.brand.name}</span>
                          </li>
                          <li className='flex items-center justify-between text-sm'>
                            <span className="text-gray-500">Items Sold</span>
                            <span className="text-gray-900">{product.sold} + Sold</span>
                          </li>
                        </ul>
                        </div>

                        <div className="col-span-2 md:col-span-1 ">
                          <h4 className="font-medium text-gray-900 mb-3 text-lg">Key Features</h4>
                          <ul className='list-none space-y-2'>
                            <li className='text-sm flex items-center gap-2'>
                              <span> <Check size={14} className='text-green-500' /> </span>
                              <span className="text-gray-500">Premium Quality Product</span>
                            </li>
                            <li className='text-sm flex items-center gap-2'>
                              <span> <Check size={14} className='text-green-500' /> </span>
                              <span className="text-gray-500">100% Authentic Guarantee</span>
                            </li>
                            <li className='text-sm flex items-center gap-2'>
                              <span> <Check size={14} className='text-green-500' /> </span>
                              <span className="text-gray-500">Fast & Secure Packaging</span>
                            </li>
                            <li className='text-sm flex items-center gap-2'>
                              <span> <Check size={14} className='text-green-500' /> </span>
                              <span className="text-gray-500">Quality Tested</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="reviews">
                    <div className="flex flex-col md:flex-row items-center gap-6">

                      <div className='text-center min-w-37.5'>
                        <h3 className='text-5xl font-bold text-gray-900 mb-2'>{product.ratingsAverage}</h3>
                        <div className='flex justify-center items-center gap-1'>
                          {[0, 1, 2, 3, 4].map((index) => (
                            <Star 
                              key={index} 
                              size={18} 
                              className={index < Math.floor(product.ratingsAverage) ? "text-yellow-500 fill-yellow-500" : "text-gray-300 fill-gray-300"} 
                            />
                          ))}
                        </div>
                        <p className='text-sm text-gray-500 mt-2'>Based on {product.ratingsQuantity} reviews</p>
                      </div>

                      <div className="flex-1 w-full space-y-3">
                        {ratingStats.map((stat) => (
                          <div key={stat.star} className='flex items-center gap-4'>
                            <div className='text-sm text-gray-600 w-12 flex items-center gap-1'>
                              {stat.star} <Star size={12} className="fill-gray-600"/>
                            </div>
                            <div className='h-2.5 rounded-full flex-1 bg-gray-100 overflow-hidden'>
                              <div 
                                className='h-full bg-yellow-400 rounded-full transition-all duration-500' 
                                style={{ width: `${stat.percentage}%` }}
                              ></div>
                            </div>
                            <div className='text-sm text-gray-500 w-10 text-right'>
                              {Math.round(stat.percentage)}%
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="people-reviews my-10 space-y-6">
                      <p className='text-2xl text-gray-900 font-bold border-b pb-4'>Customer Stories</p>
                      
                      <ProductsReviews productDetails={productDetails}   />

                    </div>
                    
                    

                  </TabsContent>


                  
                  <TabsContent value="Shipings">
                    <ProductsShipings/>
                  </TabsContent>
                </Tabs>


                <div className='container px-4 my-10'>
                  <div className="relative">
                    <div className="px-3 flex items-center gap-3 before:content-[''] before:rounded-xl before:absolute before:w-1.5 before:h-10 before:bg-linear-to-b before:from-emerald-500 before:to-emerald-700 rounded-full before:top-0 before:left-0">
                          <h2 className="text-3xl font-bold">You May Also <span className="text-emerald-600">Like</span> </h2>
                    </div>
                  </div>
                </div>

                <div className="my-4  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">
                    {relatedProducts.map((item)=>
                      <React.Fragment key={item._id} >
                        <ProductItem product={item}/>
                      </React.Fragment>
                    )
                    }
                    
                </div>
    

                
    
    </div>
  </>
)
}