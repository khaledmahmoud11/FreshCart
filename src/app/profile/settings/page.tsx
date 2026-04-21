"use client"
import { Input } from '@/components/ui/input'
import { Lock, Save, User } from 'lucide-react'
import React, { useContext, useEffect } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { Field, FieldError, FieldLabel } from '@/components/ui/field'
import { zodResolver } from '@hookform/resolvers/zod'
import { changeDataSchema, changeDataTypeShcema, changePasswordSchema, changePasswordTypeShcema } from '@/schemas/AuthShemas'
import { updatePassword } from '@/actions/changePassword'
import { toast } from 'sonner'
import { Spinner } from '@/components/ui/spinner'
import { UserInfoContext } from '@/provider/userInfo-provider'
import { updateUserData } from '@/actions/changeUserData'

export default function Settings() {
    const {user,setUser} = useContext(UserInfoContext);
    const form = useForm({
        resolver: zodResolver(changePasswordSchema) ,
            defaultValues:{
            currentPassword:"",
            password:"",    
            rePassword:"",    
            } 
    })
    const formChangeData = useForm({
        resolver: zodResolver(changeDataSchema) ,
            defaultValues:{
                name:"",
                email:"",
                phone:"",   
            } 
    })

    async function handleChangePassword(data:changePasswordTypeShcema){
        try {
            const response = await updatePassword(data);
            console.log(response, "Full Response");
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

    async function handleChangeData(data:changeDataTypeShcema){
        try {
            const response = await updateUserData(data);
            
            console.log(response);
            if (response.message === "success") {
                toast.success("User Data updated successfully!");
                setUser((prev) => ({
                ...prev,
                userName: response.user.name,
                userEmail: response.user.email,
            }));
                formChangeData.reset(); 
            } else {
                const errorMsg = response.errors ? response.errors[0].msg : response.message;
                toast.error(errorMsg || "Something went wrong");
            }
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        if (user) {
            formChangeData.reset({
                name: user.userName,
                email: user.userEmail,
                phone: user.userPhone,
            });
        }
    }, [user]);

    


    return (
        <>
            <div className='mb-6'>
                <h2 className='text-xl font-bold text-gray-900'>Account Settings</h2>
                <p className='text-gray-500 text-sm mt-1'>Update your profile information and change your password</p>
            </div>
            <div className='p-6 sm:p-8 border-b border-gray-200 rounded-lg'>
                <div className="flex items-center gap-3">
                    <div className='w-14 h-14 rounded-2xl bg-green-100 flex items-center justify-center'>
                        <User size={22} className='text-green-600 fill-green-600'/>
                    </div>
                    <div>
                        <h3 className='font-bold text-gray-900'>Profile Information</h3>
                        <p className='text-sm text-gray-500'>Update your personal details</p>
                    </div>

                </div>
                    <form onSubmit={formChangeData.handleSubmit(handleChangeData)} >
                        <div className="space-y-4 my-5">

                            <Controller
                                name="name"
                                defaultValue={user.userName}
                                control={formChangeData.control}
                                render={({ field, fieldState }) => (
                                <Field data-invalid={fieldState.invalid}>
                                    <FieldLabel htmlFor={field.name} className='text-gray-700 text-[16px]' >Full Name</FieldLabel>
                                    <Input
                                        {...field}
                                        id={field.name}
                                        aria-invalid={fieldState.invalid}
                                        placeholder="Enter Your Name"
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
                            <Controller
                                name="email"
                                defaultValue={user.userEmail}
                                control={formChangeData.control}
                                render={({ field, fieldState }) => (
                                <Field data-invalid={fieldState.invalid}>
                                    <FieldLabel htmlFor={field.name} className='text-gray-700 text-[16px]' >Email Address</FieldLabel>
                                    <Input
                                        {...field}
                                        id={field.name}
                                        aria-invalid={fieldState.invalid}
                                        placeholder="Enter Your Email"
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
                            <Controller
                                name="phone"
                                defaultValue={user.userPhone}
                                control={formChangeData.control}
                                render={({ field, fieldState }) => (
                                <Field data-invalid={fieldState.invalid}>
                                    <FieldLabel htmlFor={field.name} className='text-gray-700 text-[16px]' >Phone Number</FieldLabel>
                                    <Input
                                        {...field}
                                        id={field.name}
                                        aria-invalid={fieldState.invalid}
                                        placeholder="01xxxxxxxxx"
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

                            <button  className={`cursor-pointer px-4 py-3 rounded-lg ${formChangeData.formState.isSubmitting ? "bg-green-600/30" : "bg-green-600"  } bg-green-600 hover:bg-green-700 transition-all duration-200 text-white flex items-center gap-2 justify-center`}>
                                {formChangeData.formState.isSubmitting  ? <Spinner/>    : <Save className='text-white ' />  }    Save Change 
                            </button>

                        </div>
                        
                    </form>
                
                

                <div className='p-6 sm:p-8 bg-gray-50'>
                    <h3 className='font-bold text-gray-900 mb-4'>Account Information</h3>
                    <div className='space-y-3 text-sm'>
                        <div className='flex items-center justify-between'>
                            <p className='text-gray-500'>User ID</p>
                            <p className='font-mono text-gray-700'>{user.userId}</p>
                        </div>
                        <div className='flex items-center justify-between'>
                            <p className='text-gray-500'>{user.userRole}</p>
                            <p className='px-3 py-1 rounded-lg bg-green-100 text-green-700 font-medium capitalize'>user</p>
                        </div>
                    </div>
                </div>
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
                                    <Input
                                        {...field}
                                        id={field.name}
                                        aria-invalid={fieldState.invalid}
                                        placeholder="Enter Your Current Password"
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
                            <Controller
                                name="password"
                                control={form.control}
                                render={({ field, fieldState }) => (
                                <Field data-invalid={fieldState.invalid}>
                                    <FieldLabel htmlFor={field.name} className='text-gray-700 text-[16px]' >New Password</FieldLabel>
                                    <Input
                                        {...field}
                                        id={field.name}
                                        aria-invalid={fieldState.invalid}
                                        placeholder="Enter Your New Password"
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
                            <Controller
                                name="rePassword"
                                control={form.control}
                                render={({ field, fieldState }) => (
                                <Field data-invalid={fieldState.invalid}>
                                    <FieldLabel htmlFor={field.name} className='text-gray-700 text-[16px]' >Confirm New Password</FieldLabel>
                                    <Input
                                        {...field}
                                        id={field.name}
                                        aria-invalid={fieldState.invalid}
                                        placeholder="Confirm Your New Password"
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
                                            
                    



                            
                        </div>
                        <button  className={`cursor-pointer px-4 py-3 rounded-lg ${form.formState.isSubmitting ? "bg-amber-600/30" : "bg-amber-600"  } bg-amber-600 hover:bg-amber-700 transition-all duration-200 text-white flex items-center gap-2 justify-center`}>
                            {form.formState.isSubmitting  ? <Spinner/>    : <Lock className='text-white ' />  }    Change Password
                        </button>
                        
                    </form>
                
                
                
            </div>

        </>
    )
}
