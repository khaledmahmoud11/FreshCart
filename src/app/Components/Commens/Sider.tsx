"use client"
import React from 'react'
import { Gift, LogOut, Mail, Phone, Truck, User, UserPlus } from "lucide-react";
import Link from "next/link";
import { signOut, useSession } from 'next-auth/react';
export default function Sider() {
    const {data:session , status} = useSession()
  
    function handleLogOut(){
      signOut();
    }
  return (
    <>
        <div className="slider hidden lg:flex py-1">
        <div className="container flex items-center justify-between mx-auto">
          <div className="flex items-center gap-3">
            <p className="flex items-center justify-center gap-2 text-md text-gray-500 ">  <Truck size={16} className="text-green-400" /> Free Shipping on Orders 500 EGP</p>
            <p className="flex items-center justify-center gap-2 text-md text-gray-500 ">  <Gift size={16}  className="text-green-400" /> New Arrivals Daily</p>
          </div>
          <div className="flex items-center gap-14">
            <div className="flex items-center gap-3 ">
              <p className="text-gray-500 text-md hover:text-green-400 duration-200 transition-all flex items-center gap-2 ">  <Phone size={16} />  <a href="tel:+1 (800) 123-4567">+1 (800) 123-4567</a> </p>
              <p className="text-gray-500 text-md hover:text-green-400 duration-200 transition-all flex items-center gap-2 ">  <Mail  size={16} />  <a href="mailto:support@freshcart.com">support@freshcart.com</a> </p>
            </div>
            <div className="flex items-center gap-3">
              {  session ?
                <Link href="/profile" className="flex items-center gap-1 cursor-pointer text-gray-500 text-md hover:text-green-400 duration-200 transition-all"> 
                  <User/> {session.user?.name}
                </Link> 
                : 
                <Link href="/login" className="flex items-center gap-1 cursor-pointer text-gray-500 text-md hover:text-green-400 duration-200 transition-all " > 
                <User size={12} />  Sign In </Link>  
              }
              {  session ?
                <Link href="/login" onClick={()=>handleLogOut()} className="flex items-center gap-1 cursor-pointer text-gray-500 text-md hover:text-red-600 duration-200 transition-all"> 
                  <LogOut /> Sign Out
                </Link> 
                : 
                <Link href="/register" className="flex items-center gap-1 cursor-pointer text-gray-500 text-md hover:text-green-400 duration-200 transition-all " >
                  <UserPlus  size={12} />  Sign Up 
                </Link>  
              }
              
            </div>
          </div>

        </div>
      </div>
    
    </>
  )
}

