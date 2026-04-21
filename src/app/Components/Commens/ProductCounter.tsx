"use client"
import { Input } from '@/components/ui/input'
import React, { useState } from 'react'

export default function ProductCounter({ productQuantity , productPrice }: { productQuantity: number , productPrice:number }) {
    const [inputValue, setInputValue] = useState(1);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        let value = +(e.target.value);
        const max = productQuantity;

        if (value < 1) value = 1;
        if (value > max) value = max;

        setInputValue(value);
    };

    const increase = () => {
        setInputValue((prev) => {
        const max = Number(productQuantity);
        return prev < max ? prev + 1 : prev;
        });
    };

    const decrease = () => {
        setInputValue((prev) => {
        return prev > 1 ? prev - 1 : prev;
        });
    };

    return (
        <>
            <div className='flex items-center gap-3'>
                <div className="flex items-center gap-2">
                    <button onClick={decrease} className=' rounded-lg p-3 flex items-center justify-center text-gray-800 hover:text-green-500 transition-all duration-200 cursor-pointer border border-gray-200 text-2xl font-bold' >-</button>

                    <Input
                        type="number"
                        className="w-20"
                        max={productQuantity}
                        min={1}
                        value={inputValue}
                        onChange={handleChange}
                    />

                    <button onClick={increase} className=' rounded-lg p-3 flex items-center justify-center text-gray-800 hover:text-green-500 transition-all duration-200 cursor-pointer border border-gray-200 text-2xl font-bold' >+</button>
                </div>
                <p className='text-sm text-gray-500'> {productQuantity} available</p>
            </div>

            <div className='flex items-center justify-between bg-gray-50 rounded-lg p-4 mb-6'>
                      <p className='text-gray-600'>Total Price :</p>
                      <p className='text-2xl font-bold text-green-600'>{productPrice * inputValue }  EGP </p>
            </div>
        
        </>
        
        
    );
}