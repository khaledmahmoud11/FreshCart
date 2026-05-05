"use client"
import React, { useState } from 'react'
import { Eye, EyeOff, Lock} from 'lucide-react'
import { Controller, useForm } from 'react-hook-form'
import { Field, FieldError, FieldLabel } from '@/components/ui/field'
import { zodResolver } from '@hookform/resolvers/zod'
import { changePasswordSchema, changePasswordTypeShcema } from '@/schemas/AuthShemas'
import { Input } from '@/components/ui/input'

import { toast } from 'sonner'
import { updatePassword } from '@/actions/changePassword'
import { Spinner } from '@/components/ui/spinner'
export default function Password() {
    const form = useForm({
            resolver: zodResolver(changePasswordSchema) ,
                defaultValues:{
                currentPassword:"",
                password:"",    
                rePassword:"",    
                } 
        })
    async function handleChangePassword(data:changePasswordTypeShcema){
        try {
            const response = await updatePassword(data);
            if (response.message === "success") {
                toast.success("user data updated successfully!");
                form.reset(); 
            } else {
                const errorMsg = response.errors ? response.errors[0].msg : response.message;
                toast.error(errorMsg || "Something went wrong");
            }
            } catch (error) {
                toast.error("Network error or server is down");
                console.log(error);
            }
    
        }

    const [showCurrentPassword, setShowCurrentPassword] = useState(false)
    const [showNewPassword, setShowNewPassword] = useState(false)
    const [showConfirmNewPassword, setShowConfirmNewPassword] = useState(false)
    
    return (
        <>
            <div className='mb-6'>
                <h2 className='text-xl font-bold text-gray-900'>Password & Security</h2>
                <p className='text-gray-500 text-sm mt-1'>Change Your Password</p>
            </div>
            <div className='bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden p-6 sm:p-8'>
                <div className="flex items-center gap-3">
                    <div className='w-14 h-14 rounded-2xl bg-amber-100 flex items-center justify-center'>
                        <Lock size={20} className='text-amber-700 ' />
                    </div>
                    <div className=''>
                        <h3 className='font-bold text-gray-900'>Change Password</h3>
                        <p className='text-sm text-gray-500'>Update your account password</p>
                    </div>
                    
                </div>
                <form  onSubmit={form.handleSubmit(handleChangePassword)} >
                        <div className="space-y-4 my-5">
                            <Controller
                                name="currentPassword"
                                control={form.control}
                                render={({ field, fieldState }) => (
                                <Field data-invalid={fieldState.invalid}>
                                    <FieldLabel htmlFor={field.name} className='text-gray-700 text-[16px]' >Current Password</FieldLabel>
                                    <div className="relative">
                                        <Input
                                            {...field}
                                            id={field.name}
                                            aria-invalid={fieldState.invalid}
                                            placeholder="Enter Your Current Password"
                                            autoComplete="off"
                                            type= {showCurrentPassword?"text":"password"}
                                            className="
                                                py-6 px-4 
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
                                            {showCurrentPassword ? <EyeOff size={18} onClick={()=>setShowCurrentPassword(!showCurrentPassword)} /> :  <Eye size={18} onClick={()=>setShowCurrentPassword(!showCurrentPassword)} />  }
                                        </button>
                                    </div>
                            
                                    {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                                </Field>
                                )}
                            />
                            <Controller
                                name="password"
                                control={form.control}
                                render={({ field, fieldState }) => (
                                <Field data-invalid={fieldState.invalid}>
                                    <FieldLabel htmlFor={field.name} className='text-gray-700 text-[16px]' >New Password</FieldLabel>
                                    <div className="relative">
                                        <Input
                                            {...field}
                                            id={field.name}
                                            aria-invalid={fieldState.invalid}
                                            placeholder="Enter Your New Password"
                                            autoComplete="off"
                                            type= {showNewPassword?"text":"password"}
                                            className="
                                                py-6 px-4 
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
                                            {showNewPassword ? <EyeOff size={18} onClick={()=>setShowNewPassword(!showNewPassword)} /> :  <Eye size={18} onClick={()=>setShowNewPassword(!showNewPassword)} />  }
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
                                    <FieldLabel htmlFor={field.name} className='text-gray-700 text-[16px]' >Confirm New Password</FieldLabel>
                                    <div className="relative">
                                        <Input
                                            {...field}
                                            id={field.name}
                                            aria-invalid={fieldState.invalid}
                                            placeholder="Confirm Your New Password"
                                            autoComplete="off"
                                            type= {showConfirmNewPassword?"text":"password"}
                                            className="
                                                py-6 px-4 
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
                                            {showConfirmNewPassword ? <EyeOff size={18} onClick={()=>setShowConfirmNewPassword(!showConfirmNewPassword)} /> :  <Eye size={18} onClick={()=>setShowConfirmNewPassword(!showConfirmNewPassword)} />  }
                                        </button>
                                    </div>
                            
                                    {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                                </Field>
                                )}
                            />
                                            
                        </div>
                        <button  className={`cursor-pointer px-4 py-3 rounded-lg ${form.formState.isSubmitting ? "bg-amber-600/30" : "bg-amber-600"  } bg-amber-600 hover:bg-amber-700 transition-all duration-200 text-white flex items-center gap-2 justify-center`}>
                            {form.formState.isSubmitting  ? <Spinner/>    : <Lock className='text-white ' />  }    Change Password
                        </button>
                        
                    </form>
                
                
                
            </div>
        </>
    )
}
