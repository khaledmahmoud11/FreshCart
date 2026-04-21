import { Apple, Carrot } from 'lucide-react'
import React from 'react'

export default function ErrorPage() {
    return (
        <>
            <div className="jsx-f1a4a174e49dbaab min-h-screen bg-[#fafbfc] flex items-center justify-center px-4 py-16 relative overflow-hidden">
                <div className='jsx-f1a4a174e49dbaab absolute inset-0 overflow-hidden'>
                    <div className="jsx-f1a4a174e49dbaab absolute top-[10%] left-[5%] text-green-200 text-4xl animate-[float_6s_ease-in-out_infinite]">
                        <Apple className='fill-green-600' />
                    </div>
                    <div className='jsx-f1a4a174e49dbaab absolute top-[20%] right-[10%] text-green-200 text-3xl animate-[float_8s_ease-in-out_infinite_1s]'>
                        <Carrot className='fill-green-600' />
                    </div>
                </div>
            </div>
        </>
    )
}
