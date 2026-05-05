"use client";
import { Repeat2Icon } from 'lucide-react';
import React from 'react'
import { toast } from 'sonner';

export default function ShareProdcutBtn({productId}:{productId:string}) {
    async function copyProductsUrl(prodId:string){
        const text = `${window.location.origin}/products/${prodId}`;
        console.log(text)
        await navigator.clipboard.writeText(text);
        toast.success("Product Copied!");
    }
    return (
        <>
            <div
                onClick={()=>copyProductsUrl(productId)}
                className="text-gray-600 cursor-pointer hover:text-green-700 transition-all duration-200"><Repeat2Icon size={20} />
            </div>
        </>
    )
}
