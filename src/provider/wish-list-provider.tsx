"use client"
import { getUserWishList } from '@/actions/wish-list';
import { ProductResponse} from '@/types/wishList';
import { useSession } from 'next-auth/react';
import React, { createContext, useEffect, useState } from 'react'
    export interface wishListResponse {
    wishItemsIds: string[],
    wishItems:number,
    getWishListData:()=>void,
    isLoadingWish:boolean

    }
export const WishListContext = createContext<wishListResponse>({
    wishItemsIds:[],
    wishItems:0,
    getWishListData:()=>{},
    isLoadingWish:false
});
export default function WishlistProvider({children}:{children:React.ReactNode}) {
    const {data:session , status} = useSession()
    const [isLoadingWish, setIsLoadingWish] = useState(false)
    const [wishItems, setWishItems] = useState(0)
    const [wishItemsIds, setWishItemsIds] = useState<string[]>([]);
    async function getWishListData(){
        try {
            setIsLoadingWish(true);
            const response : ProductResponse = await  getUserWishList();
            // console.log(response , "from wish providerrrrrrrrrrrrrr")
            const ids = response.data.map(item => item._id);
            setWishItems(response.data.length)
            setWishItemsIds(ids);
            return response;
        } catch (error) {
            console.log(error)
        }finally{
            setIsLoadingWish(false);
        }
    }
    useEffect(() => {
        if(status==="unauthenticated"){
            return;
        }
        if(status==="authenticated"){
            getWishListData();
        }
    }, [status])
    return (
        <>
        <WishListContext.Provider value={{ wishItemsIds , wishItems , getWishListData ,isLoadingWish }}>
            {children}
        </WishListContext.Provider>
        </>
    )
}
