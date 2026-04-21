import { LucideIcon, MoveRight } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

export default function EmptyCart({icon: Icon,title,description1,description2,button}:{icon:LucideIcon;title:string;description1:string;description2:string;button:string}) {
    return (
        <>
            <div className=' flex items-center justify-center p-4 text-center'>
                <div>
                    <span className="w-32 h-32 rounded-full bg-linear-to-br from-gray-100 to-gray-50 flex items-center justify-center mx-auto">
                        <Icon size={50} className="text-gray-400" />
                    </span>
                    <h2 className='text-2xl font-bold text-gray-900 mb-3'>{title}</h2>
                    <div className='text-gray-500 mb-8 leading-relaxed'>
                        <p>{description1}<br/>{description2}</p>
                    </div>
                    <Link href="/products" className='inline-flex items-center gap-2 bg-linear-to-r from-green-600 to-green-700 text-white py-3.5 px-8 rounded-xl font-semibold hover:from-green-700 hover:to-green-800 transition-all shadow-lg shadow-green-600/20 active:scale-[0.98]' >
                        {button} <MoveRight />
                    </Link>
                </div>

            </div>
        </>
    )
}
