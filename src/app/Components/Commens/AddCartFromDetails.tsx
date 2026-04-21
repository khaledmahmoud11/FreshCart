"use client"
import { addProductToCart } from '@/actions/cart';
import { Button } from '@/components/ui/button';
import { Spinner } from '@/components/ui/spinner';
import { CartContext } from '@/provider/cart-provider';
import { Check, ShoppingCart } from 'lucide-react'
import React, { useContext, useState } from 'react'
import { toast } from 'sonner';

export default function AddCartFromDetails({productId}:{productId:string}) {
    const [isLoading, setIsLoading] = useState(false)
    const {getCartData} = useContext(CartContext)

    async function addToCart(productId:string){
            try {
                setIsLoading(true);
                const response = await addProductToCart(productId);
                console.log(response);
                toast.success(response.message)
                getCartData()
            } catch (error) {
                toast.error((error as Error).message)
            }finally{
                setIsLoading(false);
            }
    }
  return (
    <>
        {/* {isLoading ? <button className='w-full py-4 rounded-xl bg-green-600 hover:bg-green-700 transition-all duration-200 cursor-pointer text-white font-bold justify-center flex items-center gap-2'>
            <Check />  Added to Cart
        </button> : <button onClick={()=>addToCart(productId)}  className='w-full py-4 rounded-xl bg-green-600 hover:bg-green-700 transition-all duration-200 cursor-pointer text-white font-bold justify-center flex items-center gap-2'>
            <ShoppingCart />  Add to Cart
        </button> } */}
        <Button 
                onClick={()=>addToCart(productId)}
                disabled={isLoading}
                className='w-full py-8 rounded-xl bg-green-600 hover:bg-green-700 transition-all duration-200 cursor-pointer text-white font-bold justify-center flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed'>
                {isLoading ?
                    <> <Spinner/> Adding to Cart </> 
                : 
                    <> <ShoppingCart /> Add to Cart</> 
                }   
        </Button>
    </>

            
  )
}
