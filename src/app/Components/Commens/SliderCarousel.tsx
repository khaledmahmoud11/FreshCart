"use client"
import React from 'react'
import CarouselPhoto from "../../../assets/home-slider-1.d79601a8.png" 
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Image from 'next/image'
import { Button } from '../ui/button';
import Link from 'next/link';
export default function SliderCarousel() {

useEffect(() => {
  AOS.init({
    duration: 1000,
    once: false, 
    mirror: true,
    offset: 50, 
  });

  const timer = setTimeout(() => {
    AOS.refresh();
  }, 500); 

  return () => clearTimeout(timer);
}, []);
  return (
    <>
        <Carousel className="relative mb-5">
        <CarouselContent className="-ml-4">
          <CarouselItem className="pl-4 relative" >
            <Image 
              width={1000} 
              height={1000}
              alt='product_image' 
              src={CarouselPhoto} 
              className='w-full  object-cover h-90 absolute inset-0 '
              loading="eager"
              fetchPriority="high" 
            />
            <div  className="overlay absolute h-90 inset-0 bg-green-500/70 "></div>
            <div data-aos="fade-up" data-aos-anchor-placement="center-bottom "  className="relative w-full h-100">
              <div className="h-full flex flex-col px-20 justify-center text-white space-y-3">
                <h2 className="font-bold  text-3xl">Fresh Products Delivered <br/> To Your Door</h2>
                <p>Get 20% off Your First Order</p>
                <div className="flex items-center gap-3">
                  <Link href="/products" className="rounded-xl bg-white font-bold text-green-500 text-xl p-2 h-auto hover:scale-110 duration-200 transition-all cursor-pointer">Shop Now</Link>
                  <Button className="bg-transparent border border-white text-xl text-white p-2 h-auto hover:scale-110 duration-200 transition-all cursor-pointer" >View Details</Button>
                </div>
              </div>
            </div>
          </CarouselItem>
          <CarouselItem className="pl-4 relative" >
            <Image 
              width={1000} 
              height={1000}
              alt='product_image' 
              src={CarouselPhoto} 
              className='w-full object-cover h-90 absolute inset-0'
              loading="eager"
              fetchPriority="high" 
            />

            <div className="overlay absolute inset-0 bg-green-500/70 "></div>
            <div  className="relative w-full h-100">
              <div className="h-full flex flex-col px-20 justify-center text-white space-y-3">
                <h2 className="font-bold  text-3xl">Premium Quality  <br/> Guaranteed</h2>
                <p>Fresh From Farm To Your Table</p>
                <div className="flex items-center gap-3">
                  <Link href="/products" className="rounded-xl bg-white font-bold text-blue-500 text-xl p-2 h-auto hover:scale-110 duration-200 transition-all cursor-pointer">Shop Now</Link>
                  <Button className="bg-transparent border border-white text-xl text-white p-2 h-auto hover:scale-110 duration-200 transition-all cursor-pointer" >Learn More</Button>
                </div>
              </div>
            </div>
          </CarouselItem>
          <CarouselItem className="pl-4 relative" >
            <Image 
              width={1000} 
              height={1000}
              alt='product_image' 
              src={CarouselPhoto} 
              className='w-full  object-cover h-90 absolute inset-0'
              loading="eager"
              fetchPriority="high" 
            />
            <div className="overlay absolute inset-0 bg-green-500/70 "></div>
            <div  className="relative w-full h-100">
              <div className="h-full flex flex-col px-20 justify-center text-white space-y-3">
                <h2 className="font-bold  text-3xl">Fast & Free Delivery</h2>
                <p>Same Day Delivery Avalible</p>
                <div className="flex items-center gap-3">
                  <Link href="/products" className="rounded-xl bg-white font-bold text-fuchsia-700 text-xl p-2 h-auto hover:scale-110 duration-200 transition-all cursor-pointer">Order Now</Link>
                  <Button className="bg-transparent border border-white text-xl text-white p-2 h-auto hover:scale-110 duration-200 transition-all cursor-pointer" >Delivery Info</Button>
                </div>
              </div>
            </div>
          </CarouselItem>

        </CarouselContent>
        <CarouselPrevious className="left-3 bg-white text-green-500 hover:bg-white hover:text-green-500 w-12 h-12 hover:scale-105 duration-200 transition-all"  />
        <CarouselNext className="right-3 bg-white text-green-500 hover:bg-white hover:text-green-500 w-12 h-12 hover:scale-105 duration-200 transition-all" />
        </Carousel>
    </>
  )
}
