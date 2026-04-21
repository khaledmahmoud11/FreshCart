import { Spinner } from '@/components/ui/spinner'
import React from 'react'

export default function LoadingProducts({title}:{title:string}) {
    return (
        <>
            <div className='min-h-[60vh] flex flex-col items-center justify-center'>
                <div className=' flex flex-col items-center'>
                    <Spinner className='text-green-500 w-20 h-20 text-center'/>
                    <h1 className='text-lg font-bold text-gray-500'>Loading {title} ...</h1>
                    <p className='text-gray-400'>just a moment</p>
                </div>
            </div>
        </>
    )
}
