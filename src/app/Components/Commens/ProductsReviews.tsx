"use client"
import { deleteReview } from '@/actions/Review'
import { UserInfoContext } from '@/provider/userInfo-provider'
import { IReview, IReviewsResponse } from '@/types/reviews'
import { Star, Trash } from 'lucide-react'
import React, { useContext, useEffect, useState } from 'react'
import EditReview from './EditReview'
import { getReviews } from '@/services/reviews'
import { Spinner } from '@/components/ui/spinner'
import { toast } from 'sonner'
import CreateReview from './CreateReview'

export default function ProductsReviews({productDetails}:{productDetails:string}) {
    console.log(productDetails,"productDetails from prducts details componetns")

    const {user} = useContext(UserInfoContext)

    const [reviews, setReviews] = useState<IReview[]>([])
    const [isLoading, setIsLoading] = useState(false)
    const [loadingDelete, setloadingDelete] = useState(false)

    async function deleteUSerReview(reviewId:string){
        try{
            setloadingDelete(true)
            const response = await deleteReview(reviewId);
            setReviews((prev) => prev.filter((r) => r._id !== reviewId));
            toast.success("Review deleted successfully");
        }catch(error){
            console.log(error)
        }finally{
            setloadingDelete(false)
        }
    }
    


    useEffect(() => {
        async function getAllReviews() {
            try {
                setIsLoading(true)
                const ReviewsResponse: IReviewsResponse = await getReviews(productDetails);
                const reviewsData: IReview[] = ReviewsResponse.data;
                setReviews(reviewsData);
            } catch (error) {
                console.error("Error fetching reviews:", error);
            }finally{
                setIsLoading(false)
            }
        }
        
        if (productDetails) {
            getAllReviews();
        }
    }, [productDetails]);
    
    return (
        <> 
            {  isLoading ?
                <>
                    <p className="text-gray-500 text-2xl flex items-center gap-2">
                        <Spinner className='text-green-600'/> Loading Reviews ...
                    </p>
                </>
                :reviews.length > 0 ? (
                    reviews.map((review) => (
                        <div key={review._id} className='flex gap-4 p-4 rounded-lg bg-gray-50'>
                            <div className="flex items-center justify-between w-full">
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
                                <div className="flex gap-3">
                                {review.user._id === user.userId && <>
                                        <button onClick={()=>deleteUSerReview(review._id)} className='group cursor-pointer border-gray-300 rounded-lg shadow-lg p-2 '>
                                            {loadingDelete ? <Spinner/>  : <Trash size={18} className='text-red-500 group-hover:fill-red-500 transition-all duration-200' /> }
                                        </button>
                                        
                                
                                </>}
                                {( review.user._id === user.userId || user.userRole==="admin" ) && <>
                                    <EditReview reviewIdD={review._id} setReviews={setReviews} />
                                </>}
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <p className="text-gray-500 italic">No reviews yet for this product.</p>
            )}

                <CreateReview productIdD={productDetails} setReviews={setReviews} />
                
                
            
        
        </>
    )
}
