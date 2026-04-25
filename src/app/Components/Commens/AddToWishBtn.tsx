"use client"
import { addProductToWishList, deletProductFromWishList } from '@/actions/wish-list';
import { Spinner } from '@/components/ui/spinner';
import { WishListContext } from '@/provider/wish-list-provider';
import { Heart } from 'lucide-react'
import { useSession } from 'next-auth/react';
import React, { useContext, useState } from 'react'
import { toast } from 'sonner';

export default function AddToWishBtn({productId}:{productId:string}) {
    const {wishItemsIds , getWishListData } =useContext(WishListContext);
    const [addWish, setAddWish] = useState(false)
    const [removeWish, setRemoveWish] = useState(false)
      const {data:session , status} = useSession()

    async function addToWishList(productId:string){
        if(status==="unauthenticated"){
                    toast.warning("please login first")
        }else{
            try {
                setAddWish(true)
                const response = await addProductToWishList(productId);
                toast.success(response.message);
                getWishListData();
            } catch (error) {
                toast.error((error as Error).message)
            }finally{
                setAddWish(false)
            }
        }
        
    }
    
    async function deletefromWishList(productId:string){
        try {
            setRemoveWish(true)
            const response = await deletProductFromWishList(productId)
            toast.success(response.message);
            getWishListData();
        } catch (error) {
            console.log(error)
        }finally{
            setRemoveWish(false)
        }
    }

  return (
    <>  
    {wishItemsIds.includes(productId) ?
        <div onClick={()=>deletefromWishList(productId)} className="text-gray-600 cursor-pointer"> {removeWish ? <Spinner/>   : <Heart className='text-red-600 fill-red-600' size={20} /> } </div>
        :
        <div onClick={()=>addToWishList(productId)} className="text-gray-600 cursor-pointer hover:text-red-700 transition-all duration-200"> {addWish ?  <Spinner/> : <Heart size={20} />  }  </div>

    }
        
    </>
  )
}
