"use client"
import { Button } from '@/components/ui/button'
import { Spinner } from '@/components/ui/spinner'
import { ForgetPasswordEnterEmailSchema, ForgetPasswordEnterEmailTypeShcema } from '@/schemas/ForgetPasswordSchema'
import { zodResolver } from '@hookform/resolvers/zod'
import Link from 'next/link'
import React, { Dispatch, SetStateAction } from 'react'
import { Field, FieldError, FieldLabel } from '@/components/ui/field'
import { Input } from '@/components/ui/input'
import { Controller, useForm } from 'react-hook-form'
import { ArrowLeft } from 'lucide-react'
import { sendEmail } from '@/services/forgetPasswordServices'
import { toast } from 'sonner'
export default function FirstStep({setStep,setEmail}:{setStep: Dispatch<SetStateAction<number>>,setEmail: Dispatch<SetStateAction<string>>}) {
        const form = useForm({
            resolver: zodResolver(ForgetPasswordEnterEmailSchema) ,
            defaultValues:{
                email:"",
            } 
        })
        async function handleEnterEmail(data :ForgetPasswordEnterEmailTypeShcema){
            const response = await sendEmail(data);
            setEmail(data.email)
            console.log(response,"after send email");
            if(response.statusMsg==="fail"){
                toast.error(response.message)
            }else{
                toast.success(response.message)
                setStep(2)
            }
        }
    return (
        <>
            <form className=' space-y-4 mt-4' onSubmit={form.handleSubmit(handleEnterEmail)} >
                    <Controller
                        name="email"
                        control={form.control}
                        render={({ field, fieldState }) => (
                            <Field data-invalid={fieldState.invalid}>
                                <FieldLabel className='font-semibold text-gray-700 mb-2 w-full flex items-center justify-between' htmlFor={field.name}>Email Address </FieldLabel>
                                    <Input
                                        
                                        {...field}
                                        id={field.name}
                                        aria-invalid={fieldState.invalid}
                                        placeholder="please Enter Your Email Address"
                                        autoComplete="off"
                                        className="
                                        py-6 px-4 
                                        placeholder:text-base placeholder:text-gray-400
                                        border border-gray-300
                                        focus:border-green-600! focus:ring-0! focus:outline-none!
                                        rounded-xl
                                        "
                                />

                                {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                            </Field>
                        )}
                    />

                    <Button className={`py-6 w-full cursor-pointer text-xl font-bold text-white bg-green-600 hover:bg-green-700 duraion-200 transition-all flex items-center gap-2 ${form.formState.isSubmitting  ? "bg-green-600/30"  : "bg-green-600"}`}>
                        {form.formState.isSubmitting && <Spinner/>}    Send Reset Code
                    </Button>
                    <Link href="/login" className='flex items-center justify-center gap-2 text-green-500 hover:text-green-600 transition-all duration-200'> <ArrowLeft /> Back to Sign In</Link>
            </form>
            <div className="text-center mt-8 pt-6 border-t border-gray-100">
                <p className='text-gray-600'>Remember your password? <Link href="/login" className='text-green-600 hover:text-green-700 font-semibold transition-colors'> Sign In</Link></p>
            </div>
        </>
    )
}
