"use client"
import { Button } from '@/app/Components/ui/button'
import { Card } from '@/components/ui/card'
import { Field, FieldError, FieldLabel } from '@/components/ui/field'
import { Input } from '@/components/ui/input'
import { loginSchema , loginTypeShcema } from '@/schemas/AuthShemas'
import { zodResolver } from '@hookform/resolvers/zod'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { toast } from 'sonner'
import loginPhoto from "../../../assets/loginPhoto.png";
import Image from 'next/image'
import { Clock, Eye, EyeOff, Lock, ShieldHalf, Star, Truck, Users } from 'lucide-react'
import { FaGoogle } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import Link from 'next/link'
import Info from '@/app/Components/Commens/Info'
import { Spinner } from '@/components/ui/spinner'
import { loginUSer } from '@/services/authServices'





export default function Login() {
  const router = useRouter()
  const [showPassword, setShowPassword] = useState(false)
  const form = useForm({
    resolver: zodResolver(loginSchema) ,
    defaultValues:{
      email:"",
      password:"",    
    } 
  })

  async function handleLoginSubmit(data :loginTypeShcema){

    const responseLogin = await loginUSer(data)
    console.log(responseLogin,"responseLogin0000000000000000000000000000dfhdsfhsdfhsdhsdfh0") 

    const response = await signIn("credentials",{
      email:data.email,
      password:data.password,
      redirect:false,
      // callbackUrl:"/"
    })
    console.log(response,"respose dataaaaaaaaaaaaaaaa after login")
    if(response?.ok){
      router.push("/")
      toast.success("user signin up successfully")
    }else{
      toast.error(response?.error||"user can't signin up successfully")
    }

  }

  return (
    <>
      <div className="loginPage py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 gap-4 items-center">
            <div className="hidden lg:block justify-center lg:col-span-1 ">
              <Image
                alt="loginPhoto"
                src={loginPhoto}
                width={1000}
                height={1000}
                className='w-full h-100 object-cover shadow-lg'
              />
              <div className='space-y-3 text-center'>
                <h2 className='text-3xl font-bold text-gray-800 '>FreshCart - Your One-Stop Shop for Fresh Products</h2>
                <p className='text-lg text-gray-600'>Join thousands of happy customers who trust FreshCart for their daily grocery needs</p>
                <div className='flex items-center gap-5 justify-center'>
                  <div className='flex items-center gap-2 rounded-full px-3 py-1 shadow-md'>
                    <Truck size={18} className='text-green-600 fill-green-600' />
                    <span className='text-gray-600'>Free Delivery</span>
                  </div>
                  <div className='flex items-center gap-2 rounded-full px-3 py-1 shadow-md'>
                    <ShieldHalf size={18} className='text-green-600' />
                    <span className='text-gray-600'>Secure Payment</span>
                  </div>
                  <div className='flex items-center gap-2 rounded-full px-3 py-1 shadow-md'>
                    <Clock  size={18} className='text-green-600 ' />
                    <span className='text-gray-600'>24/7 Support</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-2 lg:col-span-1 shadow-md">
              <div className='bg-white rounded-2xl shadow-xl p-8 lg:p-12'>
                <div className='text-center mb-8'>
                  <h3 className='text-3xl font-bold mb-2 '><span className='text-green-600'>Fresh</span>Cart</h3>
                  <p className='text-2xl font-bold text-gray-800 mb-2'>Welcome Back!</p>
                  <p className='text-gray-600'>Sign in to continue your fresh shopping experience</p>
                </div>
                <div className='space-y-3 py-2'>
                  <button className='w-full flex items-center justify-center gap-3 p-3 text-xl font-bold border border-gray-300 shadow-lg hover:border-green-300 rounded-xl transition-all duration-200 cursor-pointer'> <FaGoogle className='text-red-600' /> Continue With Google</button>
                  <button className='w-full flex items-center justify-center gap-3 p-3 text-xl font-bold border border-gray-300 shadow-lg hover:border-green-300 rounded-xl transition-all duration-200 cursor-pointer'> <FaFacebook className='text-blue-600' /> Continue With Facebook</button>
                </div>
                <p className='p-4 bg-white text-center text-gray-600 font-medium'>
                  OR CONTINUE WITH EMAIL
                </p>
                <Card className='p-10'>
                    
                  <form className=' space-y-4 mt-4' onSubmit={form.handleSubmit(handleLoginSubmit)} >
                    <Controller
                      name="email"
                      control={form.control}
                      render={({ field, fieldState }) => (
                        <Field data-invalid={fieldState.invalid}>
                          <FieldLabel className='font-semibold text-gray-700 mb-2 w-full flex items-center justify-between' htmlFor={field.name}>Email Address <span className='text-green-600 hover:text-green-800 transition-all duration-200 cursor-pointer'>Forget Password ?</span></FieldLabel>
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
                    <Controller
                      name="password"
                      control={form.control}
                      render={({ field, fieldState }) => (
                        <Field data-invalid={fieldState.invalid}>
                          <FieldLabel className='font-semibold text-gray-700 mb-2' htmlFor={field.name}>Password</FieldLabel>
                          <div className="relative">
                            <Input
                              {...field}
                              id={field.name}
                              aria-invalid={fieldState.invalid}
                              placeholder="please Enter Your password"
                              autoComplete="off"
                              type= {showPassword?"text":"password"}
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
                              {showPassword ? <EyeOff size={18} onClick={()=>setShowPassword(!showPassword)} /> :  <Eye size={18} onClick={()=>setShowPassword(!showPassword)} />  }
                            </button>
                          </div>

                          {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                        </Field>
                      )}
                    />
                    
                    

                    <Button className={`py-6 w-full cursor-pointer text-xl font-bold text-white bg-green-600 hover:bg-green-700 duraion-200 transition-all flex items-center gap-2 ${form.formState.isSubmitting  ? "bg-green-600/30"  : "bg-green-600"}`}>
                      {form.formState.isSubmitting && <Spinner/>}    Sing In
                      
                      </Button>
                    
                    <div className='flex items-center gap-3 justify-center text-lg py-3 '>
                      <p className='text-gray-600'>New to FreshCart?</p>
                      <Link href="/register" className='text-green-600 hover:text-green-700 transition-all duration-200'>Create an account</Link>
                    </div>
                    <div className='flex items-center gap-5 justify-center text-gray-600'>
                      <p className='flex items-center gap-2'><Lock size={12} className='text-gray-600 fill-gray-600' /> SSL Secured</p>
                      <p className='flex items-center gap-2'><Users size={12} className='text-gray-600 fill-gray-600'  />  50K+ Users</p>
                      <p className='flex items-center gap-2'><Star size={12} className='text-gray-600 fill-gray-600' /> 4.9 Rating</p>

                    </div>
                  </form>

                </Card>
              </div>
            </div>

          </div>
          <Info/>
        </div>
      </div>
      
    </>
  )
}
