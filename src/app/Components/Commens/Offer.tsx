"use client"
import React, { useEffect } from 'react'
import AOS from 'aos';
import { MoveRightIcon } from 'lucide-react'
import { Button } from '@/app/Components/ui/button';

export default function Offer() {
    useEffect(() => {
      AOS.init({
        duration: 1000,
        once: false, 
        mirror: true,
      });
    }, []);
  return (

    <>
        <div className="offers">
        <div className="container px-4 mx-auto">
          <div className="grid grid-cols-2 gap-4">
              <div data-aos="fade-right" className="relative col-span-2 md:col-span-1 p-6 rounded-xl bg-linear-to-br from-emerald-500 to-emerald-700 text-white space-y-2 overflow-hidden">
                <div className="z-0 absolute w-32.5 h-32.5 rounded-full bg-white/10 -top-10 -right-10"></div>
                <div className="z-0 absolute w-32.5 h-32.5 rounded-full bg-white/10 -bottom-10 -left-10"></div>
                <div className="rounded-xl p-2 bg-white/30 w-fit ">🔥Deal of the Day </div>
                <h3 className="font-bold text-[30px]">Fresh Organic Fruits</h3>
                <p className="text-gray-300 text-lg">Get up to 40% off on selected organic fruits</p>
                <div className="flex items-center gap-3">
                  <div className="text-4xl font-bold">40% OFF</div>
                  <div className="text-gray-300">
                    Use code: <span className="text-white font-bold">ORGANIC40</span>
                  </div>
                </div>
                <Button className="z-10 my-4 flex items-center text-xl font-bold p-7 rounded-3xl bg-white text-green-800">Shop Now <MoveRightIcon /> </Button>
              </div>
              <div data-aos="fade-left" className="relative col-span-2 md:col-span-1 p-6 rounded-xl bg-linear-to-br from-orange-400 to-rose-500  text-white space-y-2 overflow-hidden">
                <div className="absolute w-32.5 h-32.5 rounded-full bg-white/10 -top-10 -right-10"></div>
                <div className="absolute w-32.5 h-32.5 rounded-full bg-white/10 -bottom-10 -left-10"></div>
                <div className="rounded-xl p-2 bg-white/30 w-fit ">✨Deal of the Day </div>
                <h3 className="font-bold text-[30px]">Exotic Vegetables</h3>
                <p className="text-gray-300 text-lg">Discover our latest collection of premium vegetables</p>
                <div className="flex items-center gap-3">
                  <div className="text-4xl font-bold">25% OFF</div>
                  <div className="text-gray-300">
                    Use code: <span className="text-white font-bold">FRESH25</span>
                  </div>
                </div>
                <Button className="z-10 my-4 flex items-center text-xl font-bold p-7 rounded-3xl bg-white text-orange-600">Explore Now <MoveRightIcon /> </Button>
              </div>
          </div>
        </div>
      </div>
    </>
  )
}
