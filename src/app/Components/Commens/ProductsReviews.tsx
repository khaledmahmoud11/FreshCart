"use client"
import { UserInfoContext } from '@/provider/userInfo-provider'
import { IReview } from '@/types/reviews'
import { Star } from 'lucide-react'
import { userInfo } from 'os'
import React, { useContext } from 'react'

export default function ProductsReviews({review}:{review:IReview}) {

    const {user} = useContext(UserInfoContext)
    

    return (
        <>  
                
                <div className="flex items-center justify-between">
                    <div>
                        <div className='h-12 w-12 rounded-full bg-green-600 text-white flex items-center justify-center font-bold shrink-0'>
                            {review.user.name.charAt(0).toUpperCase()}
                        </div>
                        <div className="space-y-1">
                            <p className='font-bold text-gray-900'>{review.user.name}</p>
                            <div className="flex gap-0.5 mb-2">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} size={14} className={i < review.rating ? "text-yellow-500 fill-yellow-500" : "text-gray-300"} />
                                ))}
                            </div>
                            <p className='text-gray-600 leading-relaxed'>{review.review}</p>
                        </div>
                    </div>
                     <div>
                        <div className="flex gap-3">
                            <p>edit</p>
                            <p>delete</p>
                        </div>
                    
                    </div>
                </div>
            
        
        </>
    )
}
