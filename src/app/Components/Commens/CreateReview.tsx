"use client"
import { zodResolver } from '@hookform/resolvers/zod'
import React, { useContext, useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { Field, FieldError, FieldLabel } from '@/components/ui/field'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { CreateReviewSchema, CreateReviewTypeSchema } from '@/schemas/CreateReviewSchema'
import { createReview } from '@/actions/Review'
import { toast } from 'sonner'
import { IReview } from '@/types/reviews'
import { UserInfoContext } from '@/provider/userInfo-provider'
export default function CreateReview({productIdD,setReviews}:{productIdD:string,setReviews:React.Dispatch<React.SetStateAction<IReview[]>>}) {
    const {user} = useContext(UserInfoContext)
    const form = useForm({
            resolver: zodResolver(CreateReviewSchema) ,
            defaultValues:{
                review:"",
                rating:undefined,
            } 
        })

    async function handleCreateReview(data:CreateReviewTypeSchema, productId:string){
        const response = await createReview(data, productId);
        
        if (response && response.data) {
            toast.success("Your review added successfully");
            const completeReview = {
            ...response.data,
            user: {
                _id: user.userId,      
                name: user.userName  
            }
        };

        setReviews((prevReviews) => [completeReview, ...prevReviews]);
            
            setOpen(false); 
            form.reset();
        } else {
            toast.error(response?.errors?.msg || response?.message || "Failed to add review");
        }
    }
        const [open, setOpen] = useState(false)
    
    return (
        <>
            <Dialog open={open} onOpenChange={setOpen} >
                                    <DialogTrigger className='text-center w-full'>
                                        <div className="createReview cursor-pointer text-center mt-4 text-green-600 hover:text-green-700 font-medium">
                                            Write a Review
                                        </div>
                                    </DialogTrigger>
            
                                    <DialogContent className="max-w-2xl">
                                        <DialogHeader>
                                            <DialogTitle>
                                                <h2 className='text-xl font-bold text-gray-900'>Create New Review</h2>
                                            </DialogTitle>
                                        </DialogHeader>
            
                                        <div className='relative bg-white rounded-3xl shadow-2xl w-full p-6 sm:p-8 animate-in zoom-in-95 duration-200'>
            
                                            <form
                                                className='space-y-4 mt-4'
                                                onSubmit={form.handleSubmit((data) => handleCreateReview(data, productIdD))}
                                            >
                                                
                                                <Controller
                                                    name="review"
                                                    control={form.control}
                                                    render={({ field, fieldState }) => (
                                                        <Field data-invalid={fieldState.invalid}>
                                                            <FieldLabel htmlFor={field.name} className="text-gray-700 text-[16px]">
                                                                Your Review
                                                            </FieldLabel>
            
                                                            <textarea
                                                                {...field}
                                                                id={field.name}
                                                                aria-invalid={fieldState.invalid}
                                                                placeholder="white your review for this products"
                                                                autoComplete="off"
                                                                className="
                                                                    py-6 px-4 
                                                                    placeholder:text-base placeholder:text-gray-400
                                                                    border border-gray-300
                                                                    focus:border-green-600! focus:ring-0! focus:outline-none!
                                                                    rounded-xl
                                                                    w-full
                                                                    resize-none
                                                                "
                                                                rows={4}
                                                            />
            
                                                            {fieldState.invalid && (
                                                                <FieldError errors={[fieldState.error]} />
                                                            )}
                                                        </Field>
                                                    )}
                                                />
                                                <Controller
                                                    name="rating"
                                                    control={form.control}
                                                    render={({ field, fieldState }) => (
                                                        <Field data-invalid={fieldState.invalid}>
                                                            <FieldLabel className='text-gray-700 text-[16px] mb-2'>
                                                                Your Rating
                                                            </FieldLabel>

                                                            <div className="flex gap-4 py-2">
                                                                {[1, 2, 3, 4, 5].map((num) => (
                                                                    <label key={num} className="flex items-center gap-2 cursor-pointer group">
                                                                        <input
                                                                            type="radio"
                                                                            name={field.name}
                                                                            value={num}
                                                                            checked={Number(field.value) === num}
                                                                            onChange={() => field.onChange(num)}
                                                                            className="w-4 h-4 text-green-600 border-gray-300 focus:ring-green-500"
                                                                        />
                                                                        <span className="text-gray-600 group-hover:text-green-600">{num}</span>
                                                                    </label>
                                                                ))}
                                                            </div>

                                                            {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                                                        </Field>
                                                    )}
                                                />
            
                                                
            
                                                <div className="flex items-center gap-3 justify-between">

                                                            <button
                                                                type="submit"
                                                                className='flex-1 cursor-pointer inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-green-600 text-white font-semibold hover:bg-green-700 transition-colors shadow-lg shadow-green-600/25'
                                                                onClick={()=>setOpen(false)}
                                                            >
                                                                Create A Review
                                                            </button>

                                                </div>
            
                                            </form>
            
                                        </div>
                                    </DialogContent>
                                </Dialog>
            
        </>
    )
}
