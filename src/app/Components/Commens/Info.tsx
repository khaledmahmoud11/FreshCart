import { Headset, RotateCcw, ShieldHalf, Truck } from 'lucide-react'
import React from 'react'

export default function Info() {
  return (
    <>
    <div className="info my-5">
              <div className="container px-4 mx-auto grid grid-cols-4 gap-5">
                <div className="col-span-4 md:col-span-2 lg:col-span-1 flex items-center gap-3 bg-white p-3 rounded-xl shadow-lg ">
                  <div className="rounded-full flex items-center justify-center p-2 bg-green-100">
                    <Truck className="text-green-500 fill-green-500" />
                  </div>
                  <div>
                    <p className="font-bold">Free Shipping</p>
                    <p className="text-gray-500 text-sm"> On orders over 500 EGP</p>
                  </div>
                </div>
                <div className="col-span-4 md:col-span-2 lg:col-span-1 flex items-center gap-3 bg-white p-3 rounded-xl shadow-lg ">
                  <div className="rounded-full flex items-center justify-center p-2 bg-green-100">
                    <RotateCcw className="text-green-500" />
                  </div>
                  <div>
                    <p className="font-bold">Easy Returns</p>
                    <p className="text-gray-500 text-sm">14-day return policy</p>
                  </div>
                </div>
                <div className="col-span-4 md:col-span-2 lg:col-span-1 flex items-center gap-3 bg-white p-3 rounded-xl shadow-lg ">
                  <div className="rounded-full flex items-center justify-center p-2 bg-green-100">
                    <ShieldHalf className="text-green-700 " />
                  </div>
                  <div>
                    <p className="font-bold">Secure Payment</p>
                    <p className="text-gray-500 text-sm"> 100% secure transactions</p>
                  </div>
                </div>
                
                <div className="col-span-4 md:col-span-2 lg:col-span-1 flex items-center gap-3 bg-white p-3 rounded-xl shadow-lg ">
                  <div className="rounded-full flex items-center justify-center p-2 bg-green-100">
                    <Headset  className="text-green-500" />
                  </div>
                  <div>
                    <p className="font-bold">24/7 Support</p>
                    <p className="text-gray-500 text-sm"> Dedicated support team</p>
                  </div>
                </div>
              </div>
          </div>
    </>
  )
}
