import { Spinner } from '@/components/ui/spinner'
import React from 'react'

export default function Loading() {
    return (
        <>
            <div className="container mx-auto px-4 py-10">
                
                <div className="flex items-center justify-center py-20">
                    <div className=' flex flex-col items-center'>
                        <Spinner className='text-green-500 w-20 h-20 text-center'/>
                        <h1 className='text-lg font-bold text-gray-500'>Loading Categories ...</h1>
                    </div>
                </div>
            </div>
        </>
        
    )
}
