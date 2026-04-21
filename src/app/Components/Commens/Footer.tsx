import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";
import { FaYoutube } from "react-icons/fa";

import { CreditCard, Mail, MapPin, Phone, ShoppingCart } from 'lucide-react'
import Link from 'next/link';
export default function Footer() {
  return (
    <>
      <div className="footer bg-gray-900 text-white py-8 space-y-4">
        <div className='footerHeader'>
          <div className=" container mx-auto px-4">
            <div className="grid grid-cols-6 gap-8">

              <div className="col-span-6 sm:col-span-6 md:col-span-3 lg:col-span-2 space-y-5">
                <div className='bg-white rounded-xl flex items-center gap-3 text-gray-900 w-fit py-2 px-4'>
                  <ShoppingCart className='text-green-300' />
                  <h3 className='text-3xl font-bold'>Fresh Cart</h3>
                </div>
                <p className='text-gray-400 mb-6 text-sm leading-relaxed'>FreshCart is your one-stop destination for quality products. From fashion to electronics, we bring you the best brands at competitive prices with a seamless shopping experience.</p>
                <ul className='list-none space-y-2'>
                  <li className='flex items-center gap-2'>
                    
                    <a className='flex items-center gap-3 text-gray-400 hover:text-green-500 transition-colors  ' href='tel:+1 (800) 123-4567'>
                      <Phone size={16} className='text-green-500 fill-green-500' />
                      +1 (800) 123-4567
                    </a>
                  </li>
                  <li>
                    <a href='mailto:support@freshcart.com'  className='flex items-center gap-3 text-gray-400 hover:text-green-500 transition-colors'>
                      <Mail size={16} className='text-green-500 ' />
                      support@freshcart.com
                    </a>
                  </li>
                  <li className='flex items-center gap-3 text-gray-400 '>
                    <MapPin size={16} className='text-green-500 ' />
                    123 Commerce Street, New York, NY 10001
                  </li>
                </ul>
                
                <ul className='flex items-center gap-3 list-none '>
                  <li className='group  flex items-center justify-center p-3 rounded-full bg-gray-600/30 cursor-pointer hover:bg-green-500 transition-all duration-300'>
                    <FaFacebookF size={18} className='text-gray-400 group-hover:text-white transition-all duration-300' />
                  </li>
                  <li className='group  flex items-center justify-center p-3 rounded-full bg-gray-600/30 cursor-pointer hover:bg-green-500 transition-all duration-300'>
                    <FaTwitter size={18} className='text-gray-400 group-hover:text-white transition-all duration-300' />
                  </li>
                  <li className='group  flex items-center justify-center p-3 rounded-full bg-gray-600/30 cursor-pointer hover:bg-green-500 transition-all duration-300'>
                    <IoLogoInstagram size={18} className='text-gray-400 group-hover:text-white transition-all duration-300' />
                  </li>
                  <li className='group  flex items-center justify-center p-3 rounded-full bg-gray-600/30 cursor-pointer hover:bg-green-500 transition-all duration-300'>
                    <FaYoutube size={18} className='text-gray-400 group-hover:text-white transition-all duration-300' />
                  </li>
                </ul>

              </div>
              <div className="col-span-6 sm:col-span-6 md:col-span-3 lg:col-span-1">
                <h4 className='text-xl font-bold mb-6'>Shop</h4>
                <ul className='line-none space-y-3'>
                  <li className='text-gray-400 hover:text-green-500 cursor-pointer'>
                    <Link href="/products">All Products</Link>
                  </li>
                  <li className='text-gray-400 hover:text-green-500 cursor-pointer'>
                    <Link href="/categories"> Categories</Link>
                  </li>
                  <li className='text-gray-400 hover:text-green-500 cursor-pointer'>
                    <Link href="/brands"> Brands</Link>
                  </li>
                  <li className='text-gray-400 hover:text-green-500 cursor-pointer'>
                    <Link href="/products?category=6439d2d167d9aa4ca970649f"> Electronics</Link>
                  </li>
                  <li className='text-gray-400 hover:text-green-500 cursor-pointer'>
                    <Link href="/products?category=6439d5b90049ad0b52b90048"> Man&apos;s Fashion</Link>
                  </li>
                  <li className='text-gray-400 hover:text-green-500 cursor-pointer'>
                    <Link href="/products?category=6439d58a0049ad0b52b9003f"> Woman&apos;s Fashion</Link>
                  </li>
                </ul>
              </div>
              <div className="col-span-6 sm:col-span-6 md:col-span-3 lg:col-span-1">
                <h4 className='text-xl font-bold mb-6'>Account</h4>
                <ul className='line-none space-y-3'>
                  
                  <li className='text-gray-400 hover:text-green-500 cursor-pointer'>
                    <Link href="/profile">My Account</Link>
                  </li>
                  <li className='text-gray-400 hover:text-green-500 cursor-pointer'>
                    Order History
                  </li>
                  <li className='text-gray-400 hover:text-green-500 cursor-pointer'>
                    <Link href="/wish-list">Wishlist</Link>
                  </li>
                  <li className='text-gray-400 hover:text-green-500 cursor-pointer'>
                    <Link href="/cart">Shopping Cart</Link>
                  </li>
                  <li className='text-gray-400 hover:text-green-500 cursor-pointer'>
                    <Link href="/login">Sign In</Link>
                  </li>
                  <li className='text-gray-400 hover:text-green-500 cursor-pointer'>
                    <Link href="/register">Create Account</Link>
                  </li>
                </ul>
              </div>
              <div className="col-span-6 sm:col-span-6 md:col-span-3 lg:col-span-1">
                <h4 className='text-xl font-bold mb-6'>Support</h4>
                <ul className='line-none space-y-3'>
                  <li className='text-gray-400 hover:text-green-500 cursor-pointer'>
                    <Link href="/contact">Contact Us</Link> 
                  </li>
                  <li className='text-gray-400 hover:text-green-500 cursor-pointer'>
                    Help Center 
                  </li>
                  <li className='text-gray-400 hover:text-green-500 cursor-pointer'>
                    Shipping Info
                  </li>
                  <li className='text-gray-400 hover:text-green-500 cursor-pointer'>
                    Returns & Refunds
                  </li>
                  <li className='text-gray-400 hover:text-green-500 cursor-pointer'>
                    Track Order
                  </li>

                </ul>
              </div>
              <div className="col-span-6 sm:col-span-6 md:col-span-3 lg:col-span-1">
                <h4 className='text-xl font-bold mb-6'>Legal</h4>
                <ul className='line-none space-y-3'>
                  <li className='text-gray-400 hover:text-green-500 cursor-pointer'>
                    <Link href="/privacy">Privacy Policy</Link> 
                  </li>
                  <li className='text-gray-400 hover:text-green-500 cursor-pointer'>
                    <Link href="/termsOfService">Terms of Service</Link>  
                  </li>
                  <li className='text-gray-400 hover:text-green-500 cursor-pointer'>
                    Cookie Policy
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <hr className="border-gray-700" />
        <div className="footerFooter ">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row  items-center md:justify-between gap-3 text-gray-600 text-sm">
              <p>© 2026 FreshCart. All rights reserved.</p>
              <div className='flex items-center gap-3'>
                <p className='flex items-center gap-2'> <CreditCard /> Visa</p>
                <p className='flex items-center gap-2'> <CreditCard /> PayPal</p>
                <p className='flex items-center gap-2'> <CreditCard /> Mastercard</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
