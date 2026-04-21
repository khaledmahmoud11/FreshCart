import { SubCategory } from '@/types/subCategories'
import { FolderOpen, MoveRight } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

export default function SubCategoryBox({subCat}:{subCat:SubCategory}) {
  return (
    <>
        <Link href={`/products?subcategory=${subCat._id}`}>
            <div className='cursor-pointer col-span-1 group bg-white rounded-2xl border border-gray-100 p-6 shadow-sm hover:shadow-xl hover:border-green-200 transition-all duration-300 hover:-translate-y-1'>
                <div className='w-14 h-14 rounded-xl bg-green-50 flex items-center justify-center mb-4 group-hover:bg-green-100 transition-colors'>
                    <FolderOpen className='text-green-600 fill-green-600' />
                </div>
                <h3 className='font-bold text-gray-900 text-lg group-hover:text-green-600 transition-colors mb-2'>{subCat.name}</h3>
                <div className='flex items-center gap-2 text-sm text-green-600 opacity-0 group-hover:opacity-100 transition-opacity'>
                    Browse Products <MoveRight />
                </div>
            </div>
        </Link>
    </>
    )
}
