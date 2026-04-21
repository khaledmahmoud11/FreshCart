"use client";

import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";

import "swiper/css";
import Image from "next/image";

export default function ProductGallery({productImages}:{productImages:string[]}) {
  const [mainSwiper, setMainSwiper] = useState<SwiperType | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);


  return (
    <div className="w-full  max-w-2xl mx-auto">
      {/* 🔼 Main */}
      <Swiper
        onSwiper={setMainSwiper}
        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
        className="mb-4"
      >
        {productImages.map((img, i) => (
          <SwiperSlide key={i}>
            <Image
              src={img}
              alt="product_image"
              width={1000}
              height={1000}
              className="w-full h-100 lg:h-75 object-contain rounded-xl"
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* 🔽 Thumbnails */}
      <div className="w-full flex justify-center gap-2">
        {productImages.map((img, i) => (
            <Image
                key={i}
                src={img}
                alt="product_image"
                width={1000}
                height={1000}
                onClick={() => {
                mainSwiper?.slideTo(i);
                setActiveIndex(i); // 👈 مهم
                }}
                className={`
                    w-20 h-20 object-cover rounded-lg cursor-pointer
                    border-2 transition
                    ${
                        activeIndex === i
                        ? "border-blue-500 scale-105"
                        : "border-transparent opacity-70"
                    }
                `}
            />
        ))}
        </div>
    </div>
);
}