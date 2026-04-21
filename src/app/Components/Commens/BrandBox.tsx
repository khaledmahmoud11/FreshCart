import { Brand } from '@/types/brand'
import { MoveRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function BrandBox({brand}:{brand:Brand}) {
  return (
    <>
      <Link href={`/products?brand=${brand._id}`}>
        <div className="col-span-1">
          <div className="group cursor-pointer bg-white rounded-2xl border border-gray-100 p-4 sm:p-5 shadow-sm hover:shadow-xl hover:border-violet-200 transition-all duration-300 hover:-translate-y-1">
            <div className="aspect-square rounded-xl overflow-hidden bg-gray-50 mb-3 p-4 flex items-center justify-center">
              <Image
                src={brand.image}
                alt='brand_photo'
                width={1000}
                height={1000}
                className='w-full h-full object-contain group-hover:scale-110 transition-transform duration-500'                    
              />
            </div>
            <h3 className='font-semibold text-gray-900 text-center text-sm group-hover:text-violet-600 transition-colors truncate'>{brand.name}</h3>
            <div className='flex justify-center mt-1.5 opacity-0 group-hover:opacity-100 transition-opacity'>
              <span className='text-xs text-violet-600 flex items-center gap-1'>View Products <MoveRight size={12}/>  </span>
            </div>
          </div>
        </div>  
      </Link>
    </>
  )
}
