"use client"
import { Leaf, Mail, MoveRightIcon, Star, Tag, Truck } from 'lucide-react'
import React, { useEffect } from 'react'
import AOS from 'aos';
import { FaApple, FaGooglePlay } from 'react-icons/fa'

export default function Newsletter() {
      useEffect(() => {
        AOS.init({
          duration: 1000,
          once: false, 
          mirror: true,
        });
      }, []);
  return (
    <>
        <div className="Newsletter">
        <div className="container px-4 mx-auto">
          <div className="mx-auto grid grid-cols-3 max-w-5xl gap-4">
            <div data-aos="fade-up" className="col-span-3 lg:col-span-2 space-y-3">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-linear-to-br from-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center shadow-lg shadow-emerald-500/30">
                  <Mail className="text-white" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-emerald-600 uppercase tracking-wide">Newsletter</p>
                  <p className="text-xs text-gray-500">50,000+ subscribers</p>
                </div>
              </div>
              <h3 className="text-3xl lg:text-4xl font-bold text-gray-900">
                Get the Freshest Updates <br/>  <span className="text-emerald-600">Delivered Free</span>
              </h3>
              <p className="text-gray-500 mt-3 text-lg">Weekly recipes, seasonal offers & exclusive member perks.</p>
              <div className="grid grid-cols-3 space-y-2">
                <div className="col-span-3 sm:col-span-1 md:col-span-1 lg:col-span-2 xl:col-span-1 flex items-center gap-2 p-2 shadow-lg">
                  <div className="bg-green-300/50 rounded-full p-2 flex items-center justify-center text-green-800 "><Leaf size={16} /></div>
                  <p className="text-gray-700">Fresh Picks Weekly</p>
                </div>
                <div className="col-span-3 sm:col-span-1 md:col-span-1 lg:col-span-2 xl:col-span-1 flex items-center gap-2 p-2 shadow-lg">
                  <div className="bg-green-300/50 rounded-full p-2 flex items-center justify-center text-green-800 "><Truck  size={16} /></div>
                  <p className="text-gray-700">Free Delivery Codes</p>
                </div>
                <div className="col-span-3 sm:col-span-1 md:col-span-1 lg:col-span-2 xl:col-span-1 flex items-center gap-2 p-2 shadow-lg">
                  <div className="bg-green-300/50 rounded-full p-2 flex items-center justify-center text-green-800 "><Tag  size={16} /></div>
                  <p className="text-gray-700">Members-Only Deals</p>
                </div>
              </div>
              <div className="flex items-center flex-col sm:flex-row gap-3">
                <input 
                className="p-4 w-full rounded-2xl outline-0 border-2 border-transparent focus:border-2 focus:border-green-700"
                placeholder="you@example.com "
                />
                <button className="sm:w-full group flex items-center justify-center gap-3 px-8 py-4 rounded-2xl font-semibold text-base transition-all duration-300 shadow-lg bg-linear-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-teal-500 text-white shadow-emerald-500/30 hover:shadow-emerald-500/40 hover:scale-[1.02]">
                  Subscribe  <MoveRightIcon />
                </button>
              </div>
              <p className="text-sm text-gray-400">✨ Unsubscribe anytime. No spam, ever.</p>
            </div>
            <div data-aos="fade-up" className=" space-y-3 col-span-3 lg:col-span-1 bg-linear-to-br from-gray-900 to-gray-800 rounded-3xl p-8 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/20 rounded-full blur-2xl"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-teal-500/20 rounded-full blur-2xl"></div>
              <div className="flex w-fit items-center gap-2  bg-emerald-500/20 text-emerald-400 text-xs font-semibold px-3 py-1.5 rounded-full border border-emerald-500/30">
                📱 MOBILE APP
              </div>
              <h3 className="text-2xl font-bold leading-tight">Shop Faster on Our App</h3>
              <p className="text-gray-400 text-sm leading-relaxed">Get app-exclusive deals & 15% off your first order.</p>
              <div className="p-3 cursor-pointer bg-gray-600/50 flex items-center gap-3 rounded-xl hover:scale-105 duraion-300 transition-all">
                <div><FaApple size={20} className="text-white fill-white" /></div>
                <div>
                  <p className="text-gray-500 text-sm">Download On</p>
                  <p className="text-white text-bold text-md">App Store</p>
                </div>
              </div>
              <div className="p-3 cursor-pointer bg-gray-600/50 flex items-center gap-3 rounded-xl hover:scale-105 duraion-300 transition-all">
                <FaGooglePlay size={20} />
                <div>
                  <p className="text-gray-500 text-sm ">Get In On</p>
                  <p className="text-white text-bold text-md">Google Play</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <p className="flex items-center">
                  <Star size={10} className="text-yellow-500 fill-yellow-500" />
                  <Star size={10} className="text-yellow-500 fill-yellow-500" />
                  <Star size={10} className="text-yellow-500 fill-yellow-500" />
                  <Star size={10} className="text-yellow-500 fill-yellow-500" />
                  <Star size={10} className="text-yellow-500 fill-yellow-500" />
                </p>
                <p className="text-gray-500">4.9 • 100K+ downloads</p>

              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
