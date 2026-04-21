import { Check, RotateCcw, ShieldHalf, Truck } from 'lucide-react'
import React from 'react'

export default function ProductsShipings() {
  return (
    <>
                        <div className="grid grid-cols-1 md:grid-cols-2 px-4">
                        
                            <div className=" bg-linear-to-br from-green-50 to-green-100 rounded-lg p-6">
                                <div className='flex items-center gap-2 mb-4  '>
                                <span className='flex justify-center items-center p-3 rounded-full bg-green-600 text-white'>
                                    <Truck />
                                </span>
                                <span className='text-[16px] font-semibold text-gray-900'>Shipping Information</span>
                                </div>
                                <div>
                                <ul className='list-none space-y-2'>
                                    <li className=' text-sm text-gray-700 flex items-center gap-2'>
                                    <span> <Check size={14} className='text-green-500' /> </span>
                                    <span>Free shipping on orders over $50</span>
                                    </li>
                                    <li className=' text-sm text-gray-700 flex items-center gap-2'>
                                    <span> <Check size={14} className='text-green-500' /> </span>
                                    <span>Standard delivery: 3-5 business days</span>
                                    </li>
                                    <li className=' text-sm text-gray-700 flex items-center gap-2'>
                                    <span> <Check size={14} className='text-green-500' /> </span>
                                    <span>Express delivery available (1-2 business days)</span>
                                    </li>
                                    <li className=' text-sm text-gray-700 flex items-center gap-2'>
                                    <span> <Check size={14} className='text-green-500' /> </span>
                                    <span>Track your order in real-time</span>
                                    </li>
                                </ul>
                                </div>

                            </div>
                            
                            <div className=" bg-linear-to-br from-green-50 to-green-100 rounded-lg p-6 ">
                                <div className='flex items-center gap-2 mb-4 '>
                                <span className='flex justify-center items-center p-3 rounded-full bg-green-600 text-white'>
                                    <RotateCcw />
                                </span>
                                <span className='text-[16px] font-semibold text-gray-900'>Returns & Refunds</span>
                                </div>
                                <div>
                                <ul className='list-none space-y-2'>
                                    <li className=' text-sm text-gray-700 flex items-center gap-2'>
                                    <span> <Check size={14} className='text-green-500' /> </span>
                                    <span>30-day hassle-free returns</span>
                                    </li>
                                    <li className=' text-sm text-gray-700 flex items-center gap-2'>
                                    <span> <Check size={14} className='text-green-500' /> </span>
                                    <span>Full refund or exchange available</span>
                                    </li>
                                    <li className=' text-sm text-gray-700 flex items-center gap-2'>
                                    <span> <Check size={14} className='text-green-500' /> </span>
                                    <span>Free return shipping on defective items</span>
                                    </li>
                                    <li className=' text-sm text-gray-700 flex items-center gap-2'>
                                    <span> <Check size={14} className='text-green-500' /> </span>
                                    <span>Easy online return process</span>
                                    </li>
                                </ul>
                                </div>

                            </div>

                        </div>

                        <div className='flex items-center gap-2  p-6'>

                            <span className='flex justify-center items-center p-3 rounded-full bg-gray-300 text-gray-700'>
                                    <ShieldHalf />
                            </span>
                            
                            <div>
                                <p className='text-[16px] font-semibold text-gray-900 mb-1'>Buyer Protection Guarantee</p>
                                <p className='text-sm text-gray-600'>Get a full refund if your order doesn&apos;t arrive or isn&apos;t as described. We ensure your shopping experience is safe and secure.</p>
                            </div>


                        </div>
    </>
  )
}
