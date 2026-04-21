"use client"
import { addProductToWishList, deletProductFromWishList } from '@/actions/wish-list';
import { Spinner } from '@/components/ui/spinner';
import { WishListContext } from '@/provider/wish-list-provider'
import { Heart } from 'lucide-react'
import React, { useContext, useState } from 'react'
import { toast } from 'sonner';

export default function WishBtnInDetails({productId}:{productId:string}) {

    const {wishItemsIds,getWishListData} =  useContext(WishListContext);
    const [isLoadingAdding, setIsLoadingAdding] = useState(false)
    const [isLoadingremoving, setIsLoadingremoving] = useState(false)

    async function addToWishFromDetails(productId:string){
        try{
            setIsLoadingAdding(true);
            const response = await addProductToWishList(productId);
            console.log(response);
            toast.success(response.message);
            getWishListData();
        }catch(error){
            console.log(error)
        }finally{
            setIsLoadingAdding(false);
        }
    }

    async function removeFromWishFromDetails(productId:string){
        try{
            setIsLoadingremoving(true);
            const response = await deletProductFromWishList(productId);
            console.log(response);
            toast.success(response.message);
            getWishListData();
        }catch(error){
            console.log(error)
        }finally{
            setIsLoadingremoving(false);
        }
    }

  return (

    <>
        {wishItemsIds.includes(productId)  ?  
        
            <button onClick={()=>removeFromWishFromDetails(productId)} className='flex-1 border border-red-500 text-red-500  py-4 rounded-xl transition-all duration-200 cursor-pointer font-bold justify-center flex items-center gap-2'>
                {isLoadingremoving ? <Spinner/> : <Heart /> } In WishList
            </button>
        :
            <button onClick={()=>addToWishFromDetails(productId)} className='flex-1 border-2 border-gray-200 text-gray-600 py-4 rounded-xl  hover:text-green-500 hover:border-green-500 transition-all duration-200 cursor-pointer font-bold justify-center flex items-center gap-2'>
                {isLoadingAdding ? <Spinner/> : <Heart /> }  Add TO WishList
            </button> 
        }
        
    </>
  )
}
