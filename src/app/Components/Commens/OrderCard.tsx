import React, { useState } from 'react'
import { 
  Calendar, 
  MapPin, 
  Phone, 
  ChevronUp, 
  ChevronDown, 
  Clock, 
  ShoppingBag,
}from 'lucide-react';
import { RiCashFill } from "react-icons/ri";
import Image from 'next/image';
import { Order } from '@/types/order';
import { getOrderStatus } from '@/services/allordersColors';
import { FaCreditCard } from 'react-icons/fa';

export default function OrderCard({order}:{order:Order}) {
    const [isExpanded, setIsExpanded] = useState(false);
    function standardDate (dateString: string){
        const date = new Date(dateString);
        
        return new Intl.DateTimeFormat('en-US', {
            month: 'short', 
            day: 'numeric', 
            year: 'numeric', 
        }).format(date);
    };

    const status = getOrderStatus(order);

  const statusStyles = {

    green: {

      bg: "bg-green-100",

      text: "text-green-500",

      border: "border-green-200",

      iconBg: "bg-green-500",

    },

    blue: {

      bg: "bg-blue-100",

      text: "text-blue-500",

      border: "border-blue-200",

      iconBg: "bg-blue-500",

    },

    amber: {

      bg: "bg-amber-100",

      text: "text-amber-500",

      border: "border-amber-200",

      iconBg: "bg-amber-500",

    },

  };

  const styles = statusStyles[status.color as keyof typeof statusStyles];


    return (
        <>
            <div className="bg-gray-50">
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 mb-6 relative transition-all duration-300">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
                <div className="flex gap-4">
                  <div className="w-20 h-20 bg-gray-100 rounded-lg flex items-center justify-center border border-gray-100">
                    <Image width={1000} height={1000} src={order.cartItems[0].product.imageCover} alt="product" className="rounded-md" />
                  </div>

                  <div className="space-y-1">
                    <div
                      className={`rounded-lg inline-flex items-center gap-1.5 px-2.5 py-1 bg-${status.color}-100 text-${status.color}-500 text-xs font-semibold mb-2`}
                    >
                      <status.icon className={styles.text} />
                      {status.label}
                    </div>
                    <h2 className="text-xl font-bold text-gray-800"># {order.id}</h2>
                    <div className="flex flex-wrap gap-4 text-gray-500 text-sm mt-2">
                      <span className="flex items-center gap-1">
                        <Calendar size={14} /> {standardDate(order.createdAt)}
                      </span>
                      <span className="flex items-center gap-1 text-gray-300">|</span>
                      <span className="flex items-center gap-1">
                        {order.cartItems.length} item
                      </span>
                      <span className="flex items-center gap-1 text-gray-300">|</span>
                      <span className="flex items-center gap-1">
                        <MapPin size={14} /> {order.shippingAddress?.city|| "alex"}
                      </span>
                    </div>
                    <p className="text-lg font-bold text-gray-900 mt-2">{order.totalOrderPrice} <span className="text-xs font-normal text-gray-500 uppercase">EGP</span></p>
                  </div>
                </div>

                <button 
                  onClick={() => setIsExpanded(!isExpanded)}
                  className="mt-4 md:mt-0 flex items-center gap-2 bg-emerald-500 text-white px-5 py-2 rounded-lg hover:bg-emerald-600 transition-all active:scale-95"
                >
                  {isExpanded ? (
                    <>Hide <ChevronUp size={18} /></>
                  ) : (
                    <>Details <ChevronDown size={18} /></>
                  )}
                </button>
              </div>
              <div className="absolute top-4 right-4 ">
                <div
                  className={`size-10 ${order?.paymentMethodType === "cash" ? "bg-gray-100" : "bg-violet-100"} rounded-xl flex items-center justify-center`}
                >
                  {order?.paymentMethodType === "cash" ? (
                    <RiCashFill className="size-5 text-gray-600" />
                  ) : (
                    <FaCreditCard className="size-5 text-purple-600" />
                  )}
                </div>
              </div>
            </div>

            <div className={`transition-all container px-4 duration-500 ease-in-out overflow-hidden ${isExpanded ? 'opacity-100 max-h-250' : 'opacity-0 max-h-0'}`}>
              <div className="space-y-6">
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-gray-800 font-semibold mb-4">
                    <div className="bg-emerald-100 text-emerald-600 p-1 rounded">
                      <ShoppingBag size={14} />
                    </div>
                    Order Items
                  </div>
                  
                  {order.cartItems.map((item) => (
                    <div key={item._id} className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex justify-between items-center">
                      <div className="flex gap-4 items-center">
                        <div className="w-12 h-12 bg-gray-50 rounded-lg border flex items-center justify-center">
                          <Image height={1000} width={1000} src={item.product.imageCover} alt={item.product.title} className="w-10 h-10 object-contain" />
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-800">{item.product.title}</h4>
                          <p className="text-sm text-gray-500">{item.count} × {item.price} EGP</p>
                        </div>
                      </div>
                      <div className="text-right font-bold text-gray-900">
                        {item.count * item.price} <span className="text-[10px] text-gray-400 font-normal uppercase">EGP</span>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-2 text-gray-800 font-semibold mb-4">
                        <div className="bg-blue-100 text-blue-600 p-1 rounded">
                          <MapPin size={14} />
                        </div>
                        Delivery Address
                      </div>
                      <h3 className="font-bold text-gray-800 text-lg mb-1">{order.shippingAddress?.city || "alex"}</h3>
                      <p className="text-gray-500 text-sm mb-4">{order.shippingAddress?.details || "elsyouf"}</p>
                    </div>
                    <div className="flex items-center gap-2 text-gray-700">
                      <Phone size={16} className="text-gray-400" />
                      <span className="text-sm">{order.user.phone}</span>
                    </div>
                  </div>

                  <div className="bg-amber-50/50 p-6 rounded-xl border border-amber-100">
                    <div className="flex items-center gap-2 text-gray-800 font-semibold mb-6">
                      <div className="bg-orange-100 text-orange-600 p-1 rounded">
                        <Clock size={14} />
                      </div>
                      Order Summary
                    </div>
                    <div className="space-y-3">
                      <div className="flex justify-between text-sm text-gray-600">
                        <span>Subtotal</span>
                        <span>{order.totalOrderPrice} EGP</span>
                      </div>
                      <div className="flex justify-between text-sm text-gray-600">
                        <span>Shipping</span>
                        <span className="text-gray-400 italic">Free</span>
                      </div>
                      <div className="pt-3 border-t border-amber-200 flex justify-between items-center">
                        <span className="font-bold text-gray-900 text-lg">Total</span>
                        <span className="font-black text-gray-900 text-xl">{order.totalOrderPrice} EGP</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            </div>
        </>
    )
}
