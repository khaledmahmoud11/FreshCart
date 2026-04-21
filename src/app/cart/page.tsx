"use client"
import React, { useContext, useEffect, useState } from 'react'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import Link from 'next/link'
import { Check, Lock, MoveLeft, PackageOpen, ShoppingCart, Trash } from 'lucide-react'
import Info from '../Components/Commens/Info'
import { deleteAllProduct, displayCart } from '@/actions/cart'
import CartItem from '../Components/Commens/CartItem'
import { CartProduct } from '@/types/cart'
import { toast } from 'sonner'
import { Spinner } from '@/components/ui/spinner'
import { CartContext } from '@/provider/cart-provider'
import LoadingProducts from '../Components/Commens/LoadingProducts'
import EmptyCart from '../Components/Commens/EmptyCart'


export default function Cart() {

  const [cartItems, setCartItems] = useState<CartProduct[]>([])
  const [loadingClear, setLoadingClear] = useState(false);
  const [isLoadingItems, setIsLoadingItems] = useState(false)

  const {getCartData,totalPrice,numOfCartItems,isLoading} = useContext(CartContext)

  async function viewCart(){
    try{
          setIsLoadingItems(true)
          const response = await displayCart();
          // console.log(response,"all productss")
          setCartItems(response?.data.products);
          
    }catch{
      console.log("error")
    }finally{
      setIsLoadingItems(false)
    }

  }

  async function clearCart(){
    try {
      setLoadingClear(true);
      const response = await deleteAllProduct();
      console.log(response);
      toast.success(response.message)
      setCartItems(response.data.products)
      getCartData();
    } catch (error) {
      console.log(error)
    }finally{
      setLoadingClear(false);
    }
  }




  useEffect(() => {
    viewCart();
    
  }, [])
  

  return (
    <>
    <div className="container mx-auto px-4 pt-5">
      <div>
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
                Shopping Cart
              </BreadcrumbPage>
            </BreadcrumbItem>

          </BreadcrumbList>
        </Breadcrumb>
      
      </div>
      
      <div className="body py-5">

        {isLoadingItems?
          <LoadingProducts title='your Cart Items'/>
          :
          cartItems.length > 0 ?
          <>
          
            <div className='header'>
              <div className='flex items-center gap-3 py-4'>
                <span className='flex items-center justify-center bg-green-600 p-1 rounded-xl'>
                  <ShoppingCart size={40} className='text-white fill-white ' />
                </span>
                <h2 className='text-3xl font-bold text-black '>Shopping Cart</h2>
              </div>
              <p className='text-lg text-gray-500 '>You Have <span className='text-green-500'> { isLoading?  <Spinner className='inline' /> : numOfCartItems} items </span> in Your Cart</p>
            </div>

                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 ">
                  <div className="items col-span-1 lg:col-span-2 space-y-5">
                    
                    
                    {cartItems && cartItems.map((item)=> 
                      <>

                        <CartItem key={item._id} item={item} setCartItems={setCartItems} />
                      </>
                    )}

                    <hr className='border-gray-200' />
                    <div className='flex items-center justify-between' >
                      <Link href="/products" className='flex items-center gap-2 text-green-600 hover:text-green-700 font-medium text-sm  '> <MoveLeft /> Continue Shopping </Link>
                      <span onClick={()=>clearCart()} className='group cursor-pointer flex items-center gap-2 text-sm text-gray-400 hover:text-red-500 transition-colors '> {loadingClear ? <Spinner/>  : <Trash size={16} className='fill-gray-400 group-hover:fill-red-500 group-hover:scale-105 transition-all duration-200' /> }  Clear All Items </span>
                    </div>
                  </div>
                  
                  <div className="payment col-span-1  h-full relative">
                    <div className="rounded-xl overflow-hidden border border-gray-200  sticky top-20 ">
                      <div className="header bg-gray-900 p-5 ">
                        <h2 className='text-white font-bold text-lg'>Order Summary</h2>
                      </div>
                      <div className='p-5 space-y-3'>
                        <div className='flex items-center justify-between'>
                          <span className='text-gray-600'>Subtotal ( { isLoading?  <Spinner className='inline' /> : numOfCartItems}  Items)</span>
                          <span className='font-semibold text-gray-600'>{ isLoading?  <Spinner className='inline' /> : totalPrice} EGP</span>
                        </div>
                        <div className='flex items-center justify-between'>
                          <span className='text-gray-600'>Shipping</span>
                          <span className='font-medium text-green-600'>Calculated At Checkout</span>
                        </div>
                        <hr className='border-gray-200' />
                        <div className='flex items-center justify-between text-xl font-bold'>
                          <span className='text-gray-600'>Estimated Total</span>
                          <span className='font-semibold text-green-600'>{ isLoading?  <Spinner className='inline' /> : totalPrice}</span>
                        </div>
                        <Link href="/checkout" className='w-full flex items-center justify-center gap-2 bg-green-600 text-white py-3.5 rounded-xl font-semibold hover:bg-green-700 transition-all'> <Lock  />  Secure CheckOut</Link>
                        <p className='text-xs text-gray-400 text-center'> Dont have an account? <Link href="/register" className='text-green-600 hover:underline'> Sign uP </Link> </p>
                        <ul className='my-4 list-none space-y-3'>
                          <li className='text-xs text-gray-500 flex items-center gap-1'> <Check size={14} className='text-gray-500' /> Your cart items will be saved </li>
                          <li className='text-xs text-gray-500 flex items-center gap-1'> <Check size={14} className='text-gray-500' />  Track your orders easily </li>
                          <li className='text-xs text-gray-500 flex items-center gap-1'> <Check size={14} className='text-gray-500' />  Access exclusive member deals </li>

                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
          </>
          :
            <EmptyCart
              icon={PackageOpen}
              title="Your cart is empty"
              description1="Looks like you haven’t added anything yet."
              description2="Start shopping now!"
              button="Browse Products"
            />
      
        }
      </div>
      <div className='footer py-2 bg-green-50 border-y border-green-100'>
        <Info/>
      </div>
    </div>
      
    </>
    
  )
}
