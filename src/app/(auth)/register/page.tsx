"use client"
import { Button } from '@/app/Components/ui/button'
import { Card } from '@/components/ui/card'
import { Field, FieldError, FieldLabel } from '@/components/ui/field'
import { Input } from '@/components/ui/input'
import { registerSchema, registerTypeShcema } from '@/schemas/AuthShemas'
import { registerUSer } from '@/services/authServices'
import { zodResolver } from '@hookform/resolvers/zod'
import { Eye, EyeOff, ShieldHalf, Star, Truck, UserPlus } from 'lucide-react'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { toast } from 'sonner'
import avatarReview from "../../../assets/review-author.png"
import Image from 'next/image'
import Link from 'next/link'
import Info from '@/app/Components/Commens/Info'
import { Spinner } from '@/components/ui/spinner'

export default function Register() {
  const router = useRouter()
  const form = useForm({
    resolver: zodResolver(registerSchema) ,
    defaultValues:{
      name:"",
      email:"",
      password:"",    
      rePassword:"",
      phone:"",
    } 
  })

  async function handleSubmit(data :registerTypeShcema){
    try {
      const response = await registerUSer(data)
      if(response.message ==="success"){
        router.push("/login")
          toast.success("user signed up successfully")
      }else{
        toast.error("user can't signed up successfully")
      }
    } catch (error) {
      console.log(error)
    }
    
  }

  const [strengthValue, setStrengthValue] = useState(0)
  const [strengthCounter, setStrengthCounter] = useState(0)
  const [strengthWord, setStrengthWord] = useState("")
  const [strengthColor, setStrengthColor] = useState("")

  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setshowConfirmPassword] = useState(false)

    function testPassword(password: string) {
    let strength = 0;
    let counterForWord = 0;

    if (password.length > 0) strength++;
    if (password.length >= 8) strength++;
    if (password.length >= 12) strength++;
    if (password.length >= 16) strength++;
    if (/[0-9]/.test(password)) strength++;
    if (/[a-z]/.test(password)) strength++;
    if (/[A-Z]/.test(password)) strength++;
    if (/[!@#$%^&*(),.?":{}|<>]/.test(password)) strength++;

    if (password.length >= 8) counterForWord++;
    if (password.length >= 12) counterForWord++;
    if (/[a-z]/.test(password)) counterForWord++;
    if (/[A-Z]/.test(password)) counterForWord++;
    if (/[!@#$%^&*(),.?":{}|<>]/.test(password)) counterForWord++;

    let word = "";
    let color=""
    if (password.length === 0) {
      word = "";
    } else if (counterForWord <= 3) {
      word = "Weak";
      color="bg-red-500"
    } else if (counterForWord === 4) {
      word = "Good";
      color="bg-blue-500"
    }else{
      word = "Strong";
      color="bg-green-500"
    } 

    setStrengthValue(strength);
    setStrengthCounter(counterForWord);
    setStrengthWord(word);
    setStrengthColor(color)

    return strength; 
  }
  


  return (
    <>
      <main className='container mx-auto px-4'>
        <div className="grid grid-cols-2">
          <div className="col-span-2 lg:col-span-1">
            <h1 className='text-4xl font-bold'> Welcome to <span className='text-green-600'>FreshCart</span> </h1>
            <p className='text-xl mt-2 mb-4'>Join thousands of happy customers who enjoy fresh groceries delivered right to their doorstep.</p>
            
            <div className='space-y-5 my-8'>
              <div className='flex items-center gap-3'>
                <span className='bg-green-200 flex items-center justify-center p-3 rounded-full'>
                  <Star size={25} className='text-green-600 fill-green-600' />
                </span>
                <div>
                  <h2 className='text-lg font-semibold text-gray-700'>Premium Quality</h2>
                  <p className='text-gray-600'>Premium quality products sourced from trusted suppliers.</p>
                </div>
              </div>
              <div className='flex items-center gap-3'>
                <span className='bg-green-200 flex items-center justify-center p-3 rounded-full'>
                  <Truck size={25} className='fill-green-600 text-green-600' />
                </span>
                <div>
                  <h2 className='text-lg font-semibold text-gray-700'>Fast Delivery</h2>
                  <p className='text-gray-600'>Same-day delivery available in most areas.</p>
                </div>
              </div>
              <div className='flex items-center gap-3'>
                <span className='bg-green-200 flex items-center justify-center p-3 rounded-full'>
                  <ShieldHalf size={25} className='text-green-600 ' />
                </span>
                <div>
                  <h2 className='text-lg font-semibold text-gray-700'>Secure Shopping</h2>
                  <p className='text-gray-600'>Your data and payments are completely secure.</p>
                </div>
              </div>


            </div>

            <div className='review bg-white shadow-sm p-4 rounded-md'>
              <div className='flex items-center gap-4 mb-4 '>
                <div className='w-15 h-15 rounded-full overflow-hidden'>
                  <Image
                    src={avatarReview}
                    alt='avatar'
                    width={1000}
                    height={1000}
                    className='object-contain w-full h-full'
                  />
                </div>
                <div>
                  <h3>Sarah Johnson</h3>
                  <div className='flex items-center-safe'>
                    <Star className='text-yellow-400 fill-yellow-400'/>
                    <Star className='text-yellow-400 fill-yellow-400'/>
                    <Star className='text-yellow-400 fill-yellow-400'/>
                    <Star className='text-yellow-400 fill-yellow-400'/>
                    <Star className='text-yellow-400 fill-yellow-400'/>

                  </div>
                </div>
              </div>
              <p className='italic text-gray-600'>&quot; FreshCart has transformed my shopping experience. The quality of the products is outstanding, and the delivery is always on time. Highly recommend ! &quot; </p>
            </div>

          </div>
          <div className="col-span-2 lg:col-span-1">
            <Card className='bg-white rounded-2xl shadow-lg px-6 py-10'>
              <div className='text-center text-gray-700'>
                <h2 className='text-center text-3xl font-semibold mb-2'>Create Your Account</h2>
                <p className='text-[16px]'>Start your fresh journey with us today</p>
              </div>

                
              <form className=' space-y-4 mt-4' onSubmit={form.handleSubmit(handleSubmit)} >

                <Controller
                  name="name"
                  control={form.control}
                  render={({ field, fieldState }) => (
                    <Field data-invalid={fieldState.invalid}>
                      <FieldLabel htmlFor={field.name} className='text-gray-700 text-[16px]' >Name*</FieldLabel>
                      <Input
                        {...field}
                        id={field.name}
                        aria-invalid={fieldState.invalid}
                        placeholder="Ali"
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
                  control={form.control}
                  render={({ field, fieldState }) => (
                    <Field data-invalid={fieldState.invalid}>
                      <FieldLabel htmlFor={field.name} className='text-gray-700 text-[16px]'>Email*</FieldLabel>
                      <Input
                        {...field}
                        id={field.name}
                        aria-invalid={fieldState.invalid}
                        placeholder="Ali@example.com"
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
                      <FieldLabel htmlFor={field.name} className='text-gray-700 text-[16px]'>Password*</FieldLabel>
                        
                      <div className="relative">
                        <Input
                          {...field}
                          onChange={(e) => {
                            field.onChange(e);
                            testPassword(e.target.value)
                          }}
                          id={field.name}
                          aria-invalid={fieldState.invalid}
                          placeholder="Create a Strong Password"
                          autoComplete="off"
                          type={showPassword ? "text" : "password"}
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
                            {showPassword ? <EyeOff size={18} onClick={()=>setShowPassword(!showPassword)} /> :  <Eye size={18} onClick={()=>setShowPassword(!showPassword)} />  }
                        </button>
                      </div>
                      {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                    </Field>
                    
                  )}
                />
                <div className='flex items-center gap-2' >
                  <div className='w-full h-1 rounded-full bg-gray-300'>
                    <div style={{ width: `${(strengthValue / 8) * 100}%` }} className={`h-1 rounded-full ${strengthColor}`}></div>
                  </div>
                  <span className='whitespace-nowrap'>{strengthWord}</span>
                </div>
                <Controller
                  name="rePassword"
                  control={form.control}
                  render={({ field, fieldState }) => (
                    <Field data-invalid={fieldState.invalid}>
                      <FieldLabel htmlFor={field.name} className='text-gray-700 text-[16px]'>Confirm Password</FieldLabel>
                      <div className="relative">
                        <Input
                          {...field}
                          id={field.name}
                          aria-invalid={fieldState.invalid}
                          placeholder="Confirm Your Password"
                          autoComplete="off"
                          type={showConfirmPassword ? "text" : "password"}
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
                              {showConfirmPassword ? <EyeOff size={18} onClick={()=>setshowConfirmPassword(!showConfirmPassword)} /> :  <Eye size={18} onClick={()=>setshowConfirmPassword(!showConfirmPassword)} />  }
                        </button>
                      </div>

                      {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                    </Field>
                  )}
                />
                <Controller
                  name="phone"
                  control={form.control}
                  render={({ field, fieldState }) => (
                    <Field data-invalid={fieldState.invalid}>
                      <FieldLabel htmlFor={field.name} className='text-gray-700 text-[16px]'>Phone Number*</FieldLabel>
                      <Input
                        {...field}
                        id={field.name}
                        aria-invalid={fieldState.invalid}
                        placeholder="+1 234 567 8900"
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
                <div className='flex items-center'>
                  <input id="terms" className="size-4 accent-green-600 cursor-pointer" type="checkbox" name="terms" />
                  <label htmlFor ="terms" className="ms-2 text-gray-700 text-[16px]">
                    I agree to the 
                    <Link href="/terms" className="text-green-600 hover:underline">Terms of Service</Link> and <Link href="/privacy-policy" className="text-green-600 hover:underline" >Privacy Policy</Link> *</label>
                </div>
                <Button 
                  disabled={form.formState.isSubmitting}
                  className='cursor-pointer text-lg font-bold py-5 flex items-center gap-2 w-full bg-green-600 text-white hover:bg-green-700 transition-all duraiton-200 disabled:opacity-50 disabled:cursor-not-allowed'>
                  {form.formState.isSubmitting  ?  <Spinner/> : <UserPlus className='text-white fill-white' /> }
                  Create An Account
                </Button>

              </form>

              <p className='border-t pt-10 border-gray-300/30 my-4 text-center'>
                  Already have an account? <Link href="/login" className='text-green-600 hover:underline font-medium'>Sign In</Link>
              </p>

            </Card>
          </div>
        </div>




      </main>
      <Info />
    </>
  )
}
