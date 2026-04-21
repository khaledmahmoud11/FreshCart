"use client"
import React, { useContext, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { wishItemI } from '@/types/wishList'

import { Check, Dot, ShoppingCart, Trash } from 'lucide-react'
import { deletProductFromWishList, getUserWishList } from '@/actions/wish-list'
import { toast } from 'sonner'
import { addProductToCart } from '@/actions/cart'
import { CartContext } from '@/provider/cart-provider'
import { WishListContext } from '@/provider/wish-list-provider'
import { Spinner } from '@/components/ui/spinner'

export default function WishListItem({item , setWishItems}:{item:wishItemI,setWishItems:(items:wishItemI[])=>void  }) {


    const { getCartData , cartItemsIds } = useContext(CartContext);
    const {getWishListData} = useContext(WishListContext);
    // console.log(cartItemsIds,"cartItemsIdscartItemsIds")
    const [isLoadingAdding, setisLoadingAdding] = useState(false)    
    const [isLoadingRemoving, setisLoadingRemoving] = useState(false)    
    
    async function deleteFromWish(itemId:string) {
        try {
            setisLoadingRemoving(true)
            const response = await deletProductFromWishList(itemId);
            console.log(response);
            toast.success(response.message);
            const afterRespose = await getUserWishList();
            setWishItems(afterRespose.data)
            getWishListData();
        } catch (error) {
            console.log(error)
        }finally{
            setisLoadingRemoving(false)
        }

    }
    async function addItemToCart(itemId:string){
        try {
            setisLoadingAdding(true)
            const response = await addProductToCart(itemId);
            console.log(response);
            toast.success(response.message)
            getCartData();
        } catch (error) {
            console.log(error)
        }finally{
            setisLoadingAdding(false)
        }
    }

    
  return (
    
    <>
            <div className='grid grid-cols-12 items-center gap-4 shadow-md rounded-lg '>
                <div className="col-span-12 md:col-span-6 ">
                    <div className='flex items-center gap-3'>
                        <div className='p-2 rounded-xl flex items-center justify-center'>
                            <Link href={`/products/${item._id}`} className='w-20 h-20 rounded-xl bg-gray-50 border border-gray-100 overflow-hidden shrink-0'>
                                <Image
                                    src={item.imageCover}
                                    alt='product_photo'
                                    width={1000}
                                    height={1000}
                                    className='w-full h-full object-contain p-2'
                                />
                            </Link>
                            
                        </div>
                        <div>
                            <Link href={`/products/${item._id}`}>
                                <p title={item.title} className='font-medium text-gray-900 hover:text-green-600 transition-colors line-clamp-2 cursor-pointer'>
                                    {item.title.split(" ").length > 5
                                ? item.title.split(" ").slice(0, 5).join(" ") + "..."
                                : item.title}
                                </p>
                            </Link>
                            <p className='text-sm text-gray-400 mt-1'> {item.category.name} </p>
                        </div>
                    </div>
                </div>
                
                <div className='col-span-12 md:col-span-2 text-center flex items-center md:justify-center'>
                    <span className='md:hidden text-sm text-gray-500 mr-2'>Price:</span>
                    <span className='font-semibold text-gray-900'> {item.priceAfterDiscount || item.price} EGP</span>
                </div>
                        
                <div className='col-span-12 md:col-span-2 text-center flex items-center md:justify-center'>
                    <span className='md:hidden text-sm text-gray-500 mr-2'>Status:</span>
                    <span className='inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-green-50 text-green-700'> {cartItemsIds.includes(item._id) ? <span className='flex items-center gap-2'> <ShoppingCart size={16} className='text-green-600 fill-green-600' />Cart</span>  : <span className='flex items-center gap-2'> <Dot  className='text-green-600 fill-green-600' />In Stock</span>  }  </span>
                </div>
                <div className='col-span-12 md:col-span-2 text-center flex items-center gap-3'>
                     
                    {cartItemsIds.includes(item._id) ?
                        <Link className='w-full border border-green-600 rounded-xl' href="/cart">
                            <button className=' w-full cursor-pointer flex justify-center gap-2 flex-1 items-center px-4 py-2.5 rounded-lg text-sm font-medium  duration-200 transition-all  text-green-700 ' > <Check size={18} className='text-green-700 ' />  <span className='md:hidden lg:inline'>View Cart</span> </button>
                        </Link> 
                        : 
                        <button onClick={()=>addItemToCart(item._id)} className='cursor-pointer flex justify-center gap-2 flex-1 items-center px-4 py-2.5 rounded-lg text-sm font-medium bg-green-600 hover:bg-green-700 duration-200 transition-all  text-white ' > {isLoadingAdding ? <Spinner/>  : <ShoppingCart size={18} className='text-white fill-white' /> }   <span className='md:hidden lg:inline'>Add To Cart</span> </button>   }
                        <span onClick={()=>deleteFromWish(item._id)}  className='cursor-pointer group flex items-center justify-center p-2 border border-gray-200 hover:border hover:border-red-500 transition-all duration-200 rounded-lg' > {isLoadingRemoving ? <Spinner/> : <Trash size={18} className='text-gray-600 fill-gray-600 group-hover:fill-red-500 group-hover:text-red-500 transition-all duration-200   ' /> }  </span>
                </div>
            </div>
                    
    </>
  )
}
