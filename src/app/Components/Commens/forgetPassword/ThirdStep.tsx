"use client"
import { Button } from '@/components/ui/button'
import { Spinner } from '@/components/ui/spinner'
import { UpdatePasswordSchema, UpdatePasswordTypeShcema } from '@/schemas/ForgetPasswordSchema'
import { zodResolver } from '@hookform/resolvers/zod'
import React, { Dispatch, SetStateAction, useState } from 'react'
import { Field, FieldError, FieldLabel } from '@/components/ui/field'
import { Input } from '@/components/ui/input'
import { Controller, useForm } from 'react-hook-form'
import { Eye, EyeOff } from 'lucide-react'
import { resetPasswordService } from '@/services/forgetPasswordServices'
import { toast } from 'sonner'

export default function ThirdStep({setStep,email}:{setStep: Dispatch<SetStateAction<number>>,email:string}) {
        const form = useForm({
            resolver: zodResolver(UpdatePasswordSchema) ,
            defaultValues:{
                password:"",
                rePassword:""
            } 
        })
        const [showpassword, setShowpassword] = useState(false)
        const [showRePassword, setShowRePassword] = useState(false)
        async function handleEnterEmail(data :UpdatePasswordTypeShcema){
            const response = await resetPasswordService(data,email);
            if(response.token){
                toast.success("Reset Password successfully");
                setStep(4);
            }
        }
    return (
        <>
            <form className=' space-y-4 mt-4' onSubmit={form.handleSubmit(handleEnterEmail)} >
                    <Controller
                        name="password"
                        control={form.control}
                        render={({ field, fieldState }) => (
                            <Field data-invalid={fieldState.invalid}>
                            <FieldLabel className='font-semibold text-gray-700 mb-2 w-full flex items-center justify-between' htmlFor={field.name}>New Password </FieldLabel>
                            <div className="relative">
                                <Input
                                {...field}
                                id={field.name}
                                aria-invalid={fieldState.invalid}
                                placeholder="please Enter Your password"
                                autoComplete="off"
                                type= {showpassword?"text":"password"}
                                className="
                                    py-6 px-4 pr-12
                                    placeholder:text-base placeholder:text-gray-400
                                    border border-gray-300
                                    focus:border-green-600! focus:ring-0! focus:outline-none!
                                    rounded-xl
                                "
                                />

                                <button
                                type="button"
                                className="cursor-pointer absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                                >
                                {showpassword ? <EyeOff size={18} onClick={()=>setShowpassword(!showpassword)} /> :  <Eye size={18} onClick={()=>setShowpassword(!showpassword)} />  }
                                </button>
                            </div>

                            {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                            </Field>
                        )}
                    />
                    <Controller
                        name="rePassword"
                        control={form.control}
                        render={({ field, fieldState }) => (
                            <Field data-invalid={fieldState.invalid}>
                            <FieldLabel className='font-semibold text-gray-700 mb-2 w-full flex items-center justify-between' htmlFor={field.name}>Confirm Password</FieldLabel>
                            <div className="relative">
                                <Input
                                {...field}
                                id={field.name}
                                aria-invalid={fieldState.invalid}
                                placeholder="please Enter Your password"
                                autoComplete="off"
                                type= {showRePassword?"text":"password"}
                                className="
                                    py-6 px-4 pr-12
                                    placeholder:text-base placeholder:text-gray-400
                                    border border-gray-300
                                    focus:border-green-600! focus:ring-0! focus:outline-none!
                                    rounded-xl
                                "
                                />

                                <button
                                type="button"
                                className="cursor-pointer absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                                >
                                {showRePassword ? <EyeOff size={18} onClick={()=>setShowRePassword(!showRePassword)} /> :  <Eye size={18} onClick={()=>setShowRePassword(!showRePassword)} />  }
                                </button>
                            </div>

                            {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                            </Field>
                        )}
                    />

                    <Button className={`py-6 w-full cursor-pointer text-xl font-bold text-white bg-green-600 hover:bg-green-700 duraion-200 transition-all flex items-center gap-2 ${form.formState.isSubmitting  ? "bg-green-600/30"  : "bg-green-600"}`}>
                        {form.formState.isSubmitting && <Spinner/>}   Reset Password
                    </Button>
            </form>

        </>
    )
}
