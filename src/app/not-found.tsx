"use client";
import { ArrowLeft, House, ShoppingCart } from 'lucide-react'
import Link from 'next/link'
import { useRouter } from "next/navigation";
import React from 'react'

export default function NotFound() {
    const router = useRouter();
    return (
        <>
            <div className='py-10 flex items-center justify-center '>
                <div className="flex flex-col items-center space-y-6">
                    <div className="relative mx-auto w-52 h-40 sm:w-60 sm:h-44 bg-white rounded-3xl shadow-xl shadow-gray-200/60 border border-gray-100 flex items-center justify-center ">
                        <div className="absolute bg-green-600 w-20 h-20 rounded-full border-8 border-gray-300/50 -top-5 -right-5 flex items-center justify-center text-white text-3xl font-bold">
                            404
                        </div>
                        <ShoppingCart size={60} className='text-green-600 fill-green-600' />
                    </div>

                    <div className='flex items-center gap-3'>
                        <div className=" w-2.5 h-2.5 rounded-full bg-green-400"></div>
                        <div className="w-8 h-4 border-b-[3px] border-green-400 rounded-b-full"></div>
                        <div className=" w-2.5 h-2.5 rounded-full bg-green-400"></div>
                    </div>

                    <div className="text-center">
                        <h1 className='text-4xl sm:text-5xl font-black text-gray-900 mb-4 tracking-tight'>
                            Oops! Nothing Here
                        </h1>
                        <p className='text-gray-500 text-lg leading-relaxed max-w-md mx-auto'>
                            Looks like this page went out of stock! Don&apos;t worry, there&apos;s plenty more fresh content to explore.
                        </p>
                    </div>

                    <div className="flex items-center gap-4">
                        <Link href="/" className='group w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-green-600 hover:bg-green-700 text-white py-4 px-8 rounded-2xl font-bold text-lg transition-all duration-300 shadow-lg shadow-green-600/25 hover:shadow-xl hover:shadow-green-600/30 hover:-translate-y-1'>
                            <House /> GO To Home
                        </Link>
                        <button  onClick={() => router.back()} className='cursor-pointer group w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-white hover:bg-gray-50 text-gray-700 py-4 px-8 rounded-2xl font-bold text-lg transition-all duration-300 shadow-md hover:shadow-lg border border-gray-200 hover:-translate-y-1'>
                            <ArrowLeft /> GO Back
                        </button>
                    </div>

                </div>

            </div>
        </>
    )
}
