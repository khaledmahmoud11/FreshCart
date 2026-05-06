"use client"
import { UserInfoContext } from '@/provider/userInfo-provider'
import { getUserOrders } from '@/services/userOrders'
import React, { useContext, useEffect, useState } from 'react'
import { 

  Handbag,
  PackageOpen
} from 'lucide-react';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Order } from '@/types/order';
import OrderCard from '../Components/Commens/OrderCard';
import EmptyCart from '../Components/Commens/EmptyCart';
import LoadingProducts from '../Components/Commens/LoadingProducts';
import { Spinner } from '@/components/ui/spinner';

export default function AllOrders() {
  const [orders, setOrders] = useState<Order[]>([])
  const [isLoading, setIsLoading] = useState(true);
  const [isLoadingNumberOfOrders, setIsLoadingNumberOfOrders] = useState(true);

  const user = useContext(UserInfoContext);
  useEffect(() => {
      async function getAllUserOrders(userId: string) {
        try {
          setIsLoading(true);
          setIsLoadingNumberOfOrders(true);
          const response:Order[] = await getUserOrders(userId);
          setOrders(response)
        } catch (error) {
          console.log(error)
        }finally{
          setIsLoading(false);
          setIsLoadingNumberOfOrders(false);
        }
      }
    if (user?.user?.userId) getAllUserOrders(user.user.userId);
  }, [user?.user?.userId])

  return (
    <>
      <div className="container px mx-auto">
        <div>
          <div className='header'>
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink href="/" className='text-gray-500 hover:text-green-600 transition-all duration-200'>Home</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage>My Orders</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
            <div className='flex items-center gap-3 py-4'>
              <span className='flex items-center justify-center bg-green-600 p-3 rounded-xl'>
                <Handbag size={30} className='text-white' />
              </span>
              <div>
                <h2 className='text-3xl font-bold text-black'>My Order</h2>
                <p className='flex items-center text-lg text-gray-500'>track and manage your {isLoadingNumberOfOrders ? <> <Spinner/></> : orders.length }    orders</p>
              </div>
            </div>
          </div>
        </div>

        <div>
          {
              isLoading ?
                <LoadingProducts title='your orders'/>
              :
              orders.length > 0 ?
              <>
                {orders.map((order)=><React.Fragment key={order._id}>

                <OrderCard order={order}/>

              </React.Fragment>)}
              </>
            :
            <>
              <EmptyCart
                icon={PackageOpen}
                title="You don&apos;t have any orders"
                description1="Looks like you haven’t added anything yet."
                description2="Start shopping now!"
                button="Browse Products"
              />
            </>
            
            }
          
          
        </div>
      </div>
    </>
  );
}