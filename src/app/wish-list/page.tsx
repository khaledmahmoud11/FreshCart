"use client"
import WishListItem from "../Components/Commens/WishListItem"
import React, { useEffect, useState } from 'react'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import Link from 'next/link'
import { ArrowLeftIcon, Heart } from 'lucide-react'
import { getUserWishList } from '@/actions/wish-list'
import { wishItemI } from '@/types/wishList'
import { Spinner } from "@/components/ui/spinner"
import LoadingProducts from "../Components/Commens/LoadingProducts"
import EmptyCart from "../Components/Commens/EmptyCart"
export default function WishList() {

  const [wishItems, setWishItems] = useState<wishItemI[]>([]);
  const [isLoading, setisLoading] = useState(false)


  async function getWishList(){
    try {
      setisLoading(true)
      const response = await getUserWishList();
      setWishItems(response.data || []);
    } catch (error) {
      console.log(error)
    }finally{
      setisLoading(false)
    }
  }

  useEffect(()=>{
    getWishList();
  },[])



  return (
    <>
      <div className="container mx-auto py-6 px-6">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link href="/" className='text-sm text-gray-500 hover:text-green-600 transition-all duration-200'>Home</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage className='text-md text-gray-900 font-medium'>
                 Wishlist
              </BreadcrumbPage>
            </BreadcrumbItem>

          </BreadcrumbList>
        </Breadcrumb>

        {isLoading ?
            <LoadingProducts title='Your Wish List'/>
          :
          wishItems.length >0 ?
            <>
              <div className='flex items-center gap-3 py-2'>
                <div className='flex items-center justify-center p-3 rounded-xl bg-red-100'>
                  <Heart size={24} className='text-red-500 fill-red-500'  />
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-gray-900">My Wishlist</h1>
                  <p className='text-gray-500 text-sm'> {isLoading ? <Spinner/> : <> {wishItems.length} </>}  items saved</p>
                </div>

              </div>

              <div className='py-10'>
                <div className="hidden md:grid grid-cols-12 items-center gap-4 py-4 px-6  bg-gray-50 border-b border-gray-00 text-sm font-medium text-gray-500 rounded-xl ">
                  <div className="md:col-span-6">
                    <div>
                      Products
                    </div>
                  </div>
                  <div className="md:col-span-2 text-center">
                    Price
                  </div>
                  <div className="md:col-span-2 text-center">
                    Status
                  </div>
                  <div className="md:col-span-2 text-center">
                    Actions
                  </div>
                                
                </div>
                
                {/* item in widht listttttttttttttttt */}

                <div className="space-y-3">
                  {wishItems.map((item)=>  <WishListItem key={item._id} item={item} setWishItems={setWishItems} /> )}
                  
                </div>
                
              <div className="py-4 ">
                <Link href="/" className="flex items-center gap-3 cursor-pointer w-fit text-gray-500 hover:text-green-500 transition-all duration-200 ">
                  <ArrowLeftIcon  /> Continue Shopping
                </Link>
              </div>


              </div>
            </>
          :

          <EmptyCart
              icon={Heart }
              title="Your wishlist is empty"
              description1="Browse products and save your favorites here."
              description2=""
              button="Browse Products"
          />

        }
      </div>
    </>
  )
}
