"use client"
import { Key, Lock, Mail, ShieldHalf } from 'lucide-react'
import React, { useState } from 'react'
import FirstStep from '../Components/Commens/forgetPassword/FirstStep'
import SecondStep from '../Components/Commens/forgetPassword/SecondStep'
import ThirdStep from '../Components/Commens/forgetPassword/ThirdStep'
import FinalStep from '../Components/Commens/forgetPassword/FinalStep'
export default function ForgetPassword() {
    const [step, setStep] = useState(1);
    const [email, setEmail] = useState("")

    return (
        <>
            <div className="container py-16 mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
                    <div className="hidden lg:block">
                        <div className="text-center space-y-6">
                            <div className="w-full h-96 bg-linear-to-br from-green-50 via-green-50 to-emerald-50 rounded-2xl shadow-lg flex items-center justify-center relative overflow-hidden">
                                <div className="relative flex flex-col items-center gap-6 z-10">
                                    <div className="w-28 h-28 rounded-3xl bg-white shadow-xl flex items-center justify-center rotate-3 hover:rotate-0 transition-transform duration-300">
                                        <div className="w-20 h-20 rounded-2xl bg-green-100 flex items-center justify-center">
                                            <Lock size={20} className='text-green-500' />
                                        </div>
                                    </div>
                                    <div className="absolute -left-16 top-4 w-14 h-14 rounded-xl bg-white shadow-lg flex items-center justify-center -rotate-12">
                                        <Mail size={20} className='text-green-500' />
                                    </div>
                                    <div className="absolute -right-16 top-8 w-14 h-14 rounded-xl bg-white shadow-lg flex items-center justify-center rotate-12">
                                        <ShieldHalf size={20} className='text-green-500' />
                                    </div>
                                    <div className="flex gap-3">
                                        <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse"></div>
                                        <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse [animation-delay:150ms]"></div>
                                        <div className="w-3 h-3 rounded-full bg-green-600 animate-pulse [animation-delay:300ms]">

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="space-y-4">
                                <h2 className='text-3xl font-bold text-gray-800'>Reset Your Password</h2>
                                <p className='text-lg text-gray-600'>Don&apos;t worry, it happens to the best of us. We&apos;ll help you get back into your account in no time.</p>
                                <div className="flex items-center justify-center space-x-8 text-sm text-gray-500">
                                    <div className="flex items-center gap-2">
                                        <Mail className='text-green-500' /> Email Verification
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <ShieldHalf className='text-green-500' /> Secure Reset
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Lock className='text-green-500' /> Encrypted
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full">
                        <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12">
                            {step === 4 ?
                                <FinalStep/>
                            : 
                            <>
                            
                            
                            <div className="text-center mb-8">
                                <div className="flex items-center justify-center mb-4">
                                    <span className='text-3xl font-bold text-green-600'>
                                        Fresh <span className='text-gray-800'>Cart</span>
                                    </span>                                  
                                </div>
                                <h1 className='text-2xl font-bold text-gray-800 mb-2'>Forgot Password?</h1>
                                <p className='text-gray-600'>No worries, we&apos;ll send you a reset code</p>
                            </div>
                            <div className="flex items-center justify-center mb-8">
                                <div className="flex items-center">
                                    <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold transition-all duration-300  bg-green-600 text-white ring-4 ring-green-100`}>
                                        <Mail size={14} className='text-white'/>
                                    </div>
                                    <div className={`w-16 h-0.5 mx-2 transition-all duration-300 ${step >1 ? "bg-green-600"  : "bg-gray-300" }`}>
                                        
                                    </div>
                                </div>
                                <div className="flex items-center">
                                    <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold transition-all duration-300  ${step >1 ? "bg-green-600"  : "bg-gray-300" } text-white ring-4 ring-green-100`}>
                                        <Key size={14} className='text-white'/>
                                    </div>
                                    <div className={`w-16 h-0.5 mx-2 transition-all duration-300 ${step >2 ? "bg-green-600"  : "bg-gray-300" }`}>

                                    </div>
                                </div>
                                <div className="flex items-center">
                                    <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold transition-all duration-300 ${step >2 ? "bg-green-600"  : "bg-gray-300" } text-white ring-4 ring-green-100`}>
                                        <Lock size={14} className='text-white'/>
                                    </div>

                                </div>
                            </div>
                            {
                                step===1 ?
                                    <FirstStep setStep={setStep} setEmail={setEmail}/>
                                : 
                                step===2 ?
                                    <SecondStep setStep={setStep} email={email}/>
                                :step===3 ?
                                    <ThirdStep setStep={setStep} email={email}/>
                                : 
                                <></>  
                            }

                            </> }
                            
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
