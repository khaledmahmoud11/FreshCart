"use client"
import { Button } from '@/components/ui/button'
import { Spinner } from '@/components/ui/spinner'
import { VerificationCodeSchema, VerificationCodeTypeShcema } from '@/schemas/ForgetPasswordSchema'
import { zodResolver } from '@hookform/resolvers/zod'
import React, { Dispatch, SetStateAction, useState } from 'react'
import { Field, FieldError, FieldLabel } from '@/components/ui/field'
import { Input } from '@/components/ui/input'
import { Controller, useForm } from 'react-hook-form'
import { ArrowLeft } from 'lucide-react'
import { sendEmail, VerifyResetCode } from '@/services/forgetPasswordServices'
import { toast } from 'sonner'
export default function SecondStep({setStep,email}:{setStep: Dispatch<SetStateAction<number>>,email:string}) {
        const form = useForm({
            resolver: zodResolver(VerificationCodeSchema) ,
            defaultValues:{
                resetCode:"",
            } 
        })
        async function handleSendVerificationCode(data :VerificationCodeTypeShcema){
            const response = await VerifyResetCode(data);
            console.log(response,"after enter code");
            if(response.statusMsg==="fail"){
                toast.error(response.message)
            }else{
                toast.success("verification Code Is Correct")
                setStep(3)
            }
        }

        const [isloading, setisloading] = useState(false)
        async function handleResendCode(email:string){

            try{
                setisloading(true)
                const response = await sendEmail(email);
                console.log(response,"after send email");
                if(response.statusMsg==="fail"){
                        toast.error(response.message)
                    }else{
                        toast.success(response.message)
                    }
            }finally{
                setisloading(false)
            }
        }
        
    return (
        <>
            <form className=' space-y-4 mt-4' onSubmit={form.handleSubmit(handleSendVerificationCode)} >
                    <Controller
                        name="resetCode"
                        control={form.control}
                        render={({ field, fieldState }) => (
                            <Field data-invalid={fieldState.invalid}>
                                <FieldLabel className='font-semibold text-gray-700 mb-2 w-full flex items-center justify-between' htmlFor={field.name}>Verification Code </FieldLabel>
                                    <Input
                                        
                                        {...field}
                                        id={field.name}
                                        aria-invalid={fieldState.invalid}
                                        placeholder="please Enter Verification Code"
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
                    <div className="flex items-center justify-center gap-2">
                        <p className='text-sm text-gray-500'>
                            Didn&apos;t receive the code?
                        </p>
                        <button
                            type="button"
                            onClick={() => handleResendCode(email)}
                            className="flex items-center gap-2 cursor-pointer text-green-600 hover:text-green-700 font-semibold transition-colors"
                        >
                        {isloading && <Spinner />} Resend Code
                        </button>                    </div>
                    <Button className={`py-6 w-full cursor-pointer text-xl font-bold text-white bg-green-600 hover:bg-green-700 duraion-200 transition-all flex items-center gap-2 ${form.formState.isSubmitting  ? "bg-green-600/30"  : "bg-green-600"}`}>
                        {form.formState.isSubmitting && <Spinner/>}    Verify Code
                    </Button>
            </form>
            <div className="text-center my-3">
                <button onClick={()=>setStep(1)} className='curosr-pointer inline-flex items-center gap-2 text-sm text-gray-500 hover:text-green-600 font-medium transition-colors'> 
                    <ArrowLeft/>  Change Email Address
                </button>
            </div>
        </>
    )
}
