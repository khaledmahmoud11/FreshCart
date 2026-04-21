import { Trash } from 'lucide-react'
import Image from 'next/image'
import React, { useContext, useEffect, useState } from 'react'
import { CartProduct } from '@/types/cart'
import { deletProductFromCart, updateProduct } from '@/actions/cart'
import { toast } from 'sonner'
import { Spinner } from '@/components/ui/spinner'
import { CartContext } from '@/provider/cart-provider'


import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Button } from '../ui/button'
import Link from 'next/link'

export  default  function CartItem({item,setCartItems}:{item:CartProduct,setCartItems:(products:CartProduct[])=>void}) {
    console.log(item,"product howa daaaaaaaaaaaaaaaaaaa")
    const [isLoadingInc, setisLoadingInc] = useState(false)
    const [isLoadingDec, setisLoadingDec] = useState(false)
    const [itemCount, setItemCount] = useState(0)
    const {getCartData}=useContext(CartContext)
    useEffect(()=>{
      setItemCount(item.count)
    },[item])
    async function deleteitem(itemId:string){
        try {
            const response = await deletProductFromCart(itemId);
            console.log(response)
            setCartItems(response.data.products )
            toast.success(response.message)
            getCartData();
        } catch (error) {
            console.log(error)
        }
        
    }


    

    async function updateItem(prodcutId:string,count:number){
      
      try {
          if(count > itemCount){
            setisLoadingInc(true);
          }else{
            setisLoadingDec(true);
          }
            const response = await updateProduct(prodcutId,count);
            console.log(response,"response updating");
            setCartItems(response.data.products );
            toast.success(response.message);
            getCartData();
        } catch (error) {
            console.log(error);
        }finally{
          setisLoadingInc(false);
          setisLoadingDec(false);
        }
    }

    return (
    <>
    
        <div className="item border border-gray-200 rounded-2xl  p-6 shadow-md flex items-center gap-5">
                <Link href={`/products/${item.product._id}`}>
                    <Image
                      src={item.product.imageCover}
                      alt='item-logo'
                      width={1000}
                      height={1000}
                      className='w-30 h-50 object-contain hover:scale-105 duration-200 transition-all cursor-pointer'
                    />
                </Link>
              <div className='space-y-3 w-full'>

                <Link href={`/products/${item.product._id}`}>
                  <h2 title={item.product.title} className='font-semibold text-gray-900 hover:text-green-600 cursor-pointer transition-colors leading-relaxed text-base sm:text-lg '>
                    {item.product.title.split(" ").length > 5
                                ? item.product.title.split(" ").slice(0, 5).join(" ") + "..."
                                : item.product.title}
                  </h2>
                </Link>
                
                <p className='inline-block px-2.5 py-1 bg--50 text-green-700 text-xs font-medium rounded-full'>{item.product.category.name}</p>
                <p className='text-green-600 font-bold text-lg'>{item.priceAfterDiscount ? item.priceAfterDiscount :  item.price} EGP </p>
                <div className='flex items-center justify-between flex-wrap gap-4 '>
                  <div className='flex items-center gap-5 border border-gray-200 rounded-xl px-4 py-2'>
                    <button disabled={item.count <= 1}  onClick={()=>updateItem( item.product._id , itemCount - 1 )} className=' cursor-pointer bg-gray-200 flex items-center justify-center text-gray-700 p-2 rounded-lg '> {isLoadingDec ? <Spinner/> : "-"} </button>
                    <span className=' font-bold text-xl '> {itemCount} </span>
                    <button onClick={()=>updateItem( item.product._id , itemCount + 1 )} className=' cursor-pointer bg-green-500 flex items-center justify-center text-white p-2 rounded-lg '> {isLoadingInc ? <Spinner/> : "+"} </button>
                  </div>
                  <div className='flex items-center gap-2'>
                    <div className='text-right'>
                      <p className='text-xs text-gray-400 mb-0.5'>Total</p>
                      <p className='text-xl font-bold text-gray-900'>{(itemCount * (item.priceAfterDiscount ?? item.price))} <span className='text-sm font-medium text-gray-400' >Egp</span></p>
                    </div>
                    
                    <AlertDialog >
                      <AlertDialogTrigger >
                        <Button asChild variant="outline">
                          <div className='group hover:bg-red-500 rounded-xl border border-red-300 flex items-center justify-center p-3 duration-200 transition-all cursor-pointer'>
                            <Trash  size={16} className='text-red-600 fill-red-600 group-hover:text-white group-hover:fill-white duration-200 transition-all ' /> 
                        </div>
                        </Button>
                      </AlertDialogTrigger>
                      <AlertDialogContent className=' space-y-3 flex flex-col items-center' >
                        <div className='bg-red-300 w-fit flex items-center justify-center p-4 rounded-full text-center '>
                          <Trash  size={25} className='text-red-600  ' /> 
                        </div>
                        <AlertDialogHeader>
                          <AlertDialogTitle className='w-full text-center font-bold text-2xl'>Remove Item?</AlertDialogTitle>
                          <AlertDialogDescription className='w-full text-center' >
                            Remove  <span className='text-xl text-black font-bold'>{item.product.title}</span>  from your cart?
                          </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter className='w-fit gap-4'>
                          <AlertDialogCancel className='border border-gray-200 text-black p-5 cursor-pointer bg-transparent hover:bg-black/70 transition-all duration-200'  >Cancel</AlertDialogCancel>
                          <AlertDialogAction className='bg-red-600 text-white p-5 cursor-pointer ' onClick={()=>deleteitem(item.product._id)}>Remove</AlertDialogAction>
                        </AlertDialogFooter>
                      </AlertDialogContent>
                    </AlertDialog>
                    

                  </div>
                </div>
              </div>
            </div>

            
    </>
  )
}
