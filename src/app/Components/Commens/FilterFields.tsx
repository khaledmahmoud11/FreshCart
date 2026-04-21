"use client";
import React from 'react'
import { Brand,} from '@/types/brand'
import {  Category } from '@/types/categories';
import { useRouter, useSearchParams, usePathname } from "next/navigation";
export default function FilterFields({allCategories,allBrands,}: {allCategories: Category[];allBrands: Brand[];}) {
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const handleCategoryChange = (categoryId: string) => {
        const params = new URLSearchParams(searchParams.toString());

        const current = searchParams.getAll("category");

        if (current.includes(categoryId)) {
            // remove
            const newCategories = current.filter(id => id !== categoryId);

            params.delete("category");
            newCategories.forEach(id => params.append("category", id));
        } else {
            // add
            params.append("category", categoryId);
        }

        router.push(`${pathname}?${params.toString()}`);
    };
    return (
        <>
                        <div className="bg-white space-y-4 rounded-2xl border border-gray-100 p-6 sticky top-24">
                            {/* filter by categories */}
                            <div className="space-y-6">
                                <p>Categories</p>
                                <div className='space-y-2 max-h-52 overflow-y-auto'>
                                    {allCategories.map((category)=>
                                    <React.Fragment key={category._id}>
                                        <label onChange={() => handleCategoryChange(category._id)} className='flex items-center gap-3 cursor-pointer group'>
                                            <input type="checkbox" className='w-4 h-4 rounded border-gray-300 text-green-600 focus:ring-green-500' />
                                            <span className='text-sm text-gray-600 group-hover:text-gray-900 transition-colors'>
                                                {category.name}
                                            </span>
                                        </label>
                                    </React.Fragment>)}
                                    
                                </div>
                            </div>

                            {/* filter by price */}
                            <div >
                                <h3 className='font-bold text-gray-900 mb-4'>Price Range</h3>
                                <div className="grid grid-cols-2 gap-3 mb-3 ">
                                    <div>
                                        <label className='text-xs text-gray-500 mb-1 block'>Min (EGP)</label>
                                        <input placeholder='0' type="number" className='w-full px-3 py-2 rounded-lg border border-gray-200 text-sm focus:border-green-500 focus:ring-1 focus:ring-green-500 outline-none' />
                                    </div>
                                    <div>
                                        <label className='text-xs text-gray-500 mb-1 block'>Max (EGP)</label>
                                        <input placeholder='No limit' type="number" className='w-full px-3 py-2 rounded-lg border border-gray-200 text-sm focus:border-green-500 focus:ring-1 focus:ring-green-500 outline-none' />
                                    </div>
                                </div>
                                
                            </div>
                            <div className='flex flex-wrap gap-2 my-2'>
                                <button className='cursor-pointer px-3 py-1.5 rounded-full text-xs font-medium transition-colors bg-gray-100 text-gray-600 hover:bg-gray-200'>
                                    Under 500
                                </button>
                                <button className='cursor-pointer px-3 py-1.5 rounded-full text-xs font-medium transition-colors bg-gray-100 text-gray-600 hover:bg-gray-200'>
                                    Under 1k
                                </button>
                                <button className='cursor-pointer px-3 py-1.5 rounded-full text-xs font-medium transition-colors bg-gray-100 text-gray-600 hover:bg-gray-200'>
                                    Under 5k
                                </button>
                                <button className='cursor-pointer px-3 py-1.5 rounded-full text-xs font-medium transition-colors bg-gray-100 text-gray-600 hover:bg-gray-200'>
                                    Under 10k
                                </button>
                            </div>

                            {/* filter by brands */}
                            <div className="space-y-6">
                                <p>Brands</p>
                                <div className='space-y-2 max-h-52 overflow-y-auto'>
                                    {allBrands.map((brand)=>
                                    <React.Fragment key={brand._id}>
                                        <label className='flex items-center gap-3 cursor-pointer group'>
                                            <input type="checkbox" className='w-4 h-4 rounded border-gray-300 text-green-600 focus:ring-green-500' />
                                            <span className='text-sm text-gray-600 group-hover:text-gray-900 transition-colors'>
                                                {brand.name}
                                            </span>
                                        </label>
                                    </React.Fragment>)}
                                    
                                </div>
                            </div>

                        </div>
        </>
    )
}
