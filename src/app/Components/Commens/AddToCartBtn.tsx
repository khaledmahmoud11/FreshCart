"use client"
import { addProductToCart } from '@/actions/cart';
import { Spinner } from '@/components/ui/spinner';
import { CartContext } from '@/provider/cart-provider';
import { Check, Plus } from 'lucide-react'
import React, { useContext, useState } from 'react'
import { toast } from 'sonner';
import { Button } from '../ui/button';
import { useSession } from 'next-auth/react';

export default function AddToCartBtn({prodId}:{prodId:string}) {

    const [isLoading, setIsLoading] = useState(false)
    const {getCartData} = useContext(CartContext)
      const {data:session , status} = useSession()
    

    async function addToCart(productId:string){
        if(status==="unauthenticated"){
            toast.warning("please login first")
        }else{
            try {
                setIsLoading(true);
                const response = await addProductToCart(productId);
                toast.success(response.message)
                getCartData()
            } catch (error) {
                toast.error((error as Error).message)
            }finally{
                setIsLoading(false);
            }
        }
            
    }
    return (
        <>  
            
            <Button 
                onClick={()=>addToCart(prodId)}
                disabled={isLoading}
                className="cursor-pointer h-10 w-10 rounded-full flex items-center justify-center transition bg-green-600 text-white hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed">
                {isLoading ? <Spinner/>   : <Plus  /> } 
            </Button> 
        </>
    )
}
