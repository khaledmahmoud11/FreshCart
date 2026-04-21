import React from 'react'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Product} from '@/types/productInterface'
import AddToWishBtn from './AddToWishBtn'
import Link from 'next/link'
import Image from 'next/image'
import { Eye, Repeat2Icon, Star } from 'lucide-react'
import AddToCartBtn from './AddToCartBtn'
export default function ProductItem({product}:{product:Product}) {
  return (
    <>
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
                                    : product.title
                                }
                                </CardTitle>
                            </Link>
                                
                            <CardDescription>{product.category.name}</CardDescription>
                                <div className="flex items-center gap-2">
                                    <div className="flex items-center gap-2">
                                        {[0,1,2,3,4].map((index)=>
                                            {
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
        </>
    )
}
