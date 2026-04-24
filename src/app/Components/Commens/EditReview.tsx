"use client"
import { zodResolver } from '@hookform/resolvers/zod'
import React from 'react'
import { Controller, useForm } from 'react-hook-form'
import { Field, FieldError, FieldLabel } from '@/components/ui/field'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {editReviewSchema, EditReviewTypeSchema } from '@/schemas/CreateReviewSchema'
import {editReview } from '@/actions/createReview'
import { toast } from 'sonner'
import { Pencil } from 'lucide-react'
export default function EditReview({reviewIdD}:{reviewIdD:string}) {
    const form = useForm({
            resolver: zodResolver(editReviewSchema) ,
            defaultValues:{
                review:"",
                rating:undefined,
            } 
        })

    async function handleEditReview(data:EditReviewTypeSchema, reviewIdD:string){
        const response = await editReview(data,reviewIdD);
        if(response){
            toast.success("your review edited successfully")
        }
        console.log(response)
    }
    return (
        <>
            <Dialog >
                                    <DialogTrigger className='text-center w-full'>
                                        <button  className='group cursor-pointer border-gray-300 rounded-xl p-2 '>
                                            <Pencil className='text-yellow-500 group-hover:fill-yellow-500 transition-all duration-200' />
                                        </button>
                                    </DialogTrigger>
            
                                    <DialogContent className="max-w-2xl">
                                        <DialogHeader>
                                            <DialogTitle>
                                                <h2 className='text-xl font-bold text-gray-900'>Edit Your Review</h2>
                                            </DialogTitle>
                                        </DialogHeader>
            
                                        <div className='relative bg-white rounded-3xl shadow-2xl w-full p-6 sm:p-8 animate-in zoom-in-95 duration-200'>
            
                                            <form
                                                className='space-y-4 mt-4'
                                                onSubmit={form.handleSubmit((data) => handleEditReview(data,reviewIdD))}
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
                                                            >
                                                                Edit Your Review
                                                            </button>

                                                </div>
            
                                            </form>
            
                                        </div>
                                    </DialogContent>
                                </Dialog>
            
        </>
    )
}
