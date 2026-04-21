"use client"
import { displayCart } from '@/actions/cart';
import { CartResponse } from '@/types/cart';
import { useSession } from 'next-auth/react';
import React, { createContext, Dispatch, SetStateAction, useEffect, useState } from 'react'
interface cartInterface{
    numOfCartItems:number,
    setNumOfCartItems: Dispatch<SetStateAction<number>>,
    isLoading:boolean,
    getCartData:()=>void,
    totalPrice:number,
    cartItemsIds:string[]
}
export const CartContext = createContext<cartInterface>({
    numOfCartItems:0,
    isLoading:false,
    getCartData:()=>{},
    totalPrice:0,
    cartItemsIds:[],
    setNumOfCartItems: () => {},
});
export default function CartProvider({children}:{children:React.ReactNode}) {
    const {data:session , status} = useSession()
    const [cartItemsIds, setCartItemsIds] = useState<string[]>([]);
    const [numOfCartItems, setNumOfCartItems] = useState(0)
    const [isLoading, setIsLoading] = useState(false)
    const [totalPrice, setTotalPrice] = useState(0)
    async function getCartData(){
        try {
            setIsLoading(true);
            const response : CartResponse = await  displayCart();
            // console.log(response , "frrrrrrrrrrrom provider")
            const totalCount = response.data.products.reduce((acc, item) => {
                return acc + item.count;
            }, 0);
            setNumOfCartItems(totalCount);
            setTotalPrice(response.data.totalCartPrice as number)
            const ids = response.data.products.map(item => item.product._id);
            setCartItemsIds(ids);
        } catch (error) {
            
            console.log(error)
        }finally{
            setIsLoading(false);
        }
    }
    useEffect(() => {
        if(status==="unauthenticated"){
            return;
        }
        if(status==="authenticated"){
            getCartData();
        }
    }, [status])
    return (
        <>
        <CartContext.Provider value={{numOfCartItems,setNumOfCartItems,isLoading,getCartData , totalPrice , cartItemsIds }}>
            {children}
        </CartContext.Provider>
        </>
    )
}
