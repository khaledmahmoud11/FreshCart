import React from 'react'
import { FaUserShield } from 'react-icons/fa'
import { LiaCookieSolid } from "react-icons/lia";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Database, Lock, Mail, MoveLeft, MoveRight,Scale, Share2, ShieldHalf,UserCheck2 } from 'lucide-react';
import Link from 'next/link';
import Info from '../Components/Commens/Info';
export default function Privacy() {
  return (
    <>
        <div className="bg-linear-to-br from-green-600 via-green-500 to-green-400 text-white">
                <div className="container mx-auto px-4 py-10 sm:py-14">
                    
                    <Breadcrumb>
                        <BreadcrumbList>
                            <BreadcrumbItem>
                            <BreadcrumbLink href="/" className='text-white/70 hover:text-white transition-all duration-200'>Home</BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem>
                            <BreadcrumbPage className='text-white'>Privacy Policy</BreadcrumbPage>
                            </BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>
                    
                    <div className='flex items-center gap-3 my-5'>
                        <div className='w-20 h-20 rounded-3xl bg-white/20 backdrop-blur-sm flex items-center justify-center shadow-2xl shadow-green-900/30 ring-1 ring-white/30'>
                            <ShieldHalf  size={40} />    
                        
                        </div>
                        <div>
                        <h1 className='text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight '>Privacy Policy </h1>
                        <p className='text-white/80 mt-2 text-lg'>Last updated: February 2026</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container mx-auto px-4 py-10 sm:py-15'>
                <div className='bg-linear-to-r from-green-50 to-green-100/50 border border-green-200 rounded-3xl p-6 sm:p-8 mb-12 shadow-sm'>
                    <div className="flex items-start gap-4">
                        <div className='w-12 h-12 rounded-2xl bg-green-500 flex items-center justify-center shrink-0 shadow-lg shadow-green-500/25 '>
                            <ShieldHalf size={20} className='text-white' />
                        </div>
                        <div>
                            <h2 className='text-lg font-bold text-green-900 mb-2'>Your Privacy Matters</h2>
                            <p className='text-green-800 leading-relaxed'>This Privacy Policy describes how FreshCart collects, uses, and protects your personal information when you use our services. We are committed to ensuring that your privacy is protected.</p>
                        </div>
                    </div>    

                    
                    
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">

                    <div className='bg-white rounded-3xl border border-gray-100 p-6 sm:p-8 shadow-sm hover:shadow-lg hover:border-green-100 transition-all duration-300 group'>
                        <div className="flex items-start gap-4 mb-5">
                            <div className='w-12 h-12 rounded-2xl bg-linear-to-br from-green-100 to-green-50 flex items-center justify-center shrink-0 group-hover:from-green-500 group-hover:to-green-400 transition-all duration-300'>
                                <Database className='text-green-600 group-hover:text-white transition-all duration-200' />
                            </div>
                            <div>
                                <span className='text-xs font-bold text-green-600 uppercase tracking-wider'>Article 1</span>
                                <h2 className='text-xl font-bold text-gray-900'>Information We Collect</h2>
                            </div>
                        </div>
                        <div className='space-y-3'>
                            <div className='flex items-start gap-3 text-gray-600 leading-relaxed'>
                                <span className='text-xs font-bold text-green-500 bg-green-50 px-2 py-0.5 rounded-md mt-0.5 shrink-0'>
                                    1.1
                                </span>
                                <p className='text-sm'><strong className='text-gray-800'>Personal Data:</strong> Name, email address, phone number, and shipping address.</p>
                            </div>
                            <div className='flex items-start gap-3 text-gray-600 leading-relaxed'>
                                <span className='text-xs font-bold text-green-500 bg-green-50 px-2 py-0.5 rounded-md mt-0.5 shrink-0'>
                                    1.2
                                </span>
                                <p className='text-sm'><strong className='text-gray-800'>Payment Data:</strong> Credit card information processed securely through our payment providers.</p>
                            </div>
                            <div className='flex items-start gap-3 text-gray-600 leading-relaxed'>
                                <span className='text-xs font-bold text-green-500 bg-green-50 px-2 py-0.5 rounded-md mt-0.5 shrink-0'>
                                    1.3
                                </span>
                                <p className='text-sm'><strong className='text-gray-800'>Technical Data:</strong> IP address, browser type, device information, and access times.</p>
                            </div>
                            <div className='flex items-start gap-3 text-gray-600 leading-relaxed'>
                                <span className='text-xs font-bold text-green-500 bg-green-50 px-2 py-0.5 rounded-md mt-0.5 shrink-0'>
                                    1.4
                                </span>
                                <p className='text-sm'><strong className='text-gray-800'>Usage Data:</strong> Pages viewed, products browsed, and actions taken within our platform.</p>
                            </div>
                        </div>
                    </div>

                    <div className='bg-white rounded-3xl border border-gray-100 p-6 sm:p-8 shadow-sm hover:shadow-lg hover:border-green-100 transition-all duration-300 group'>
                        <div className="flex items-start gap-4 mb-5">
                            <div className='w-12 h-12 rounded-2xl bg-linear-to-br from-green-100 to-green-50 flex items-center justify-center shrink-0 group-hover:from-green-500 group-hover:to-green-400 transition-all duration-300'>
                                <FaUserShield size={20} className='text-green-600  group-hover:text-white transition-all duration-200' />
                            </div>
                            <div>
                                <span className='text-xs font-bold text-green-600 uppercase tracking-wider'>Article 2</span>
                                <h2 className='text-xl font-bold text-gray-900'>How We Use Your Information</h2>
                            </div>
                        </div>
                        <div className='space-y-3'>
                            <div className='flex items-start gap-3 text-gray-600 leading-relaxed'>
                                <span className='text-xs font-bold text-green-500 bg-green-50 px-2 py-0.5 rounded-md mt-0.5 shrink-0'>
                                    2.1
                                </span>
                                <p className='text-sm'>To process and fulfill your orders.</p>
                            </div>
                            <div className='flex items-start gap-3 text-gray-600 leading-relaxed'>
                                <span className='text-xs font-bold text-green-500 bg-green-50 px-2 py-0.5 rounded-md mt-0.5 shrink-0'>
                                    2.2
                                </span>
                                <p className='text-sm'>To send order confirmations and shipping updates.</p>
                            </div>
                            <div className='flex items-start gap-3 text-gray-600 leading-relaxed'>
                                <span className='text-xs font-bold text-green-500 bg-green-50 px-2 py-0.5 rounded-md mt-0.5 shrink-0'>
                                    2.3
                                </span>
                                <p className='text-sm'>To provide customer support and respond to inquiries.</p>
                            </div>
                            <div className='flex items-start gap-3 text-gray-600 leading-relaxed'>
                                <span className='text-xs font-bold text-green-500 bg-green-50 px-2 py-0.5 rounded-md mt-0.5 shrink-0'>
                                    2.4
                                </span>
                                <p className='text-sm'>To improve our products, services, and user experience.</p>
                            </div>
                            <div className='flex items-start gap-3 text-gray-600 leading-relaxed'>
                                <span className='text-xs font-bold text-green-500 bg-green-50 px-2 py-0.5 rounded-md mt-0.5 shrink-0'>
                                    2.5
                                </span>
                                <p className='text-sm'>To send promotional communications (with your consent).</p>
                            </div>
                        </div>
                    </div>

                    <div className='bg-white rounded-3xl border border-gray-100 p-6 sm:p-8 shadow-sm hover:shadow-lg hover:border-green-100 transition-all duration-300 group'> 
                        <div className="flex items-start gap-4 mb-5">
                            <div className='w-12 h-12 rounded-2xl bg-linear-to-br from-green-100 to-green-50 flex items-center justify-center shrink-0 group-hover:from-green-500 group-hover:to-green-400 transition-all duration-300'>
                                <Lock className='text-green-600 group-hover:text-white transition-all duration-200' />
                            </div>
                            <div>
                                <span className='text-xs font-bold text-green-600 uppercase tracking-wider'>Article 3</span>
                                <h2 className='text-xl font-bold text-gray-900'>Data Protection</h2>
                            </div>
                        </div>
                        <div className='space-y-3'>
                            <div className='flex items-start gap-3 text-gray-600 leading-relaxed'>
                                <span className='text-xs font-bold text-green-500 bg-green-50 px-2 py-0.5 rounded-md mt-0.5 shrink-0'>
                                    3.1
                                </span>
                                <p className='text-sm'>We implement industry-standard encryption (SSL/TLS) for all data transfers.</p>
                            </div>
                            <div className='flex items-start gap-3 text-gray-600 leading-relaxed'>
                                <span className='text-xs font-bold text-green-500 bg-green-50 px-2 py-0.5 rounded-md mt-0.5 shrink-0'>
                                    3.2
                                </span>
                                <p className='text-sm'>Payment information is processed by PCI-compliant payment providers.</p>
                            </div>
                            <div className='flex items-start gap-3 text-gray-600 leading-relaxed'>
                                <span className='text-xs font-bold text-green-500 bg-green-50 px-2 py-0.5 rounded-md mt-0.5 shrink-0'>
                                    3.3
                                </span>
                                <p className='text-sm'>We conduct regular security audits and vulnerability assessments.</p>
                            </div>
                            <div className='flex items-start gap-3 text-gray-600 leading-relaxed'>
                                <span className='text-xs font-bold text-green-500 bg-green-50 px-2 py-0.5 rounded-md mt-0.5 shrink-0'>
                                    3.4
                                </span>
                                <p className='text-sm'>Access to personal data is restricted to authorized personnel only.</p>
                            </div>
                        </div>
                    </div>

                    <div className='bg-white rounded-3xl border border-gray-100 p-6 sm:p-8 shadow-sm hover:shadow-lg hover:border-green-100 transition-all duration-300 group'>
                        <div className="flex items-start gap-4 mb-5">
                            <div className='w-12 h-12 rounded-2xl bg-linear-to-br from-green-100 to-green-50 flex items-center justify-center shrink-0 group-hover:from-green-500 group-hover:to-green-400 transition-all duration-300'>
                                <Share2 className='text-green-600 group-hover:text-white transition-all duration-200' />
                            </div>
                            <div>
                                <span className='text-xs font-bold text-green-600 uppercase tracking-wider'>Article 4</span>
                                <h2 className='text-xl font-bold text-gray-900'>Information Sharing</h2>
                            </div>
                        </div>
                        <div className='space-y-3'>
                            <div className='flex items-start gap-3 text-gray-600 leading-relaxed'>
                                <span className='text-xs font-bold text-green-500 bg-green-50 px-2 py-0.5 rounded-md mt-0.5 shrink-0'>
                                    4.1
                                </span>
                                <p className='text-sm'>We do not sell, trade, or rent your personal information to third parties.</p>
                            </div>
                            <div className='flex items-start gap-3 text-gray-600 leading-relaxed'>
                                <span className='text-xs font-bold text-green-500 bg-green-50 px-2 py-0.5 rounded-md mt-0.5 shrink-0'>
                                    4.2
                                </span>
                                <p className='text-sm'>We may share data with trusted service providers who assist in our operations.</p>
                            </div>
                            <div className='flex items-start gap-3 text-gray-600 leading-relaxed'>
                                <span className='text-xs font-bold text-green-500 bg-green-50 px-2 py-0.5 rounded-md mt-0.5 shrink-0'>
                                    4.3
                                </span>
                                <p className='text-sm'>We may disclose information when required by law or to protect our rights.s</p>
                            </div>

                        </div>
                    </div>

                    <div className='bg-white rounded-3xl border border-gray-100 p-6 sm:p-8 shadow-sm hover:shadow-lg hover:border-green-100 transition-all duration-300 group'>
                        <div className="flex items-start gap-4 mb-5">
                            <div className='w-12 h-12 rounded-2xl bg-linear-to-br from-green-100 to-green-50 flex items-center justify-center shrink-0 group-hover:from-green-500 group-hover:to-green-400 transition-all duration-300'>
                                <UserCheck2  className='text-green-600 group-hover:text-white transition-all duration-200' />
                            </div>
                            <div>
                                <span className='text-xs font-bold text-green-600 uppercase tracking-wider'>Article 5</span>
                                <h2 className='text-xl font-bold text-gray-900'>Your Rights</h2>
                            </div>
                        </div>
                        <div className='space-y-3'>
                            <div className='flex items-start gap-3 text-gray-600 leading-relaxed'>
                                <span className='text-xs font-bold text-green-500 bg-green-50 px-2 py-0.5 rounded-md mt-0.5 shrink-0'>
                                    5.1
                                </span>
                                <p className='text-sm'><strong className='text-gray-800'>Access:</strong> Request a copy of your personal data.</p>
                            </div>
                            <div className='flex items-start gap-3 text-gray-600 leading-relaxed'>
                                <span className='text-xs font-bold text-green-500 bg-green-50 px-2 py-0.5 rounded-md mt-0.5 shrink-0'>
                                    5.2
                                </span>
                                <p className='text-sm'><strong className='text-gray-800'>Rectification:</strong> Request correction of inaccurate data.</p>
                            </div>
                            <div className='flex items-start gap-3 text-gray-600 leading-relaxed'>
                                <span className='text-xs font-bold text-green-500 bg-green-50 px-2 py-0.5 rounded-md mt-0.5 shrink-0'>
                                    5.3
                                </span>
                                <p className='text-sm'><strong className='text-gray-800'>Erasure:</strong> Request deletion of your personal data.</p>
                            </div>
                            <div className='flex items-start gap-3 text-gray-600 leading-relaxed'>
                                <span className='text-xs font-bold text-green-500 bg-green-50 px-2 py-0.5 rounded-md mt-0.5 shrink-0'>
                                    5.4
                                </span>
                                <p className='text-sm'><strong className='text-gray-800'>Portability:</strong> Request your data in a portable format.</p>
                            </div>
                            <div className='flex items-start gap-3 text-gray-600 leading-relaxed'>
                                <span className='text-xs font-bold text-green-500 bg-green-50 px-2 py-0.5 rounded-md mt-0.5 shrink-0'>
                                    5.5
                                </span>
                                <p className='text-sm'><strong className='text-gray-800'>Opt-out:</strong> Unsubscribe from marketing communications at any time.</p>
                            </div>

                        </div>
                    </div>

                    <div className='bg-white rounded-3xl border border-gray-100 p-6 sm:p-8 shadow-sm hover:shadow-lg hover:border-green-100 transition-all duration-300 group'>
                        <div className="flex items-start gap-4 mb-5">
                            <div className='w-12 h-12 rounded-2xl bg-linear-to-br from-green-100 to-green-50 flex items-center justify-center shrink-0 group-hover:from-green-500 group-hover:to-green-400 transition-all duration-300'>
                                <LiaCookieSolid size={20} className='text-green-600 group-hover:text-white transition-all duration-200' />
                            </div>
                            <div>
                                <span className='text-xs font-bold text-green-600 uppercase tracking-wider'>Article 6</span>
                                <h2 className='text-xl font-bold text-gray-900'>Cookies</h2>
                            </div>
                        </div>
                        <div className='space-y-3'>
                            <div className='flex items-start gap-3 text-gray-600 leading-relaxed'>
                                <span className='text-xs font-bold text-green-500 bg-green-50 px-2 py-0.5 rounded-md mt-0.5 shrink-0'>
                                    6.1
                                </span>
                                <p className='text-sm'>We use cookies to enhance your browsing experience and remember preferences.</p>
                            </div>
                            <div className='flex items-start gap-3 text-gray-600 leading-relaxed'>
                                <span className='text-xs font-bold text-green-500 bg-green-50 px-2 py-0.5 rounded-md mt-0.5 shrink-0'>
                                    6.2
                                </span>
                                <p className='text-sm'>You can control cookie settings through your browser preferences.</p>
                            </div>
                            <div className='flex items-start gap-3 text-gray-600 leading-relaxed'>
                                <span className='text-xs font-bold text-green-500 bg-green-50 px-2 py-0.5 rounded-md mt-0.5 shrink-0'>
                                    6.3
                                </span>
                                <p className='text-sm'>Disabling cookies may affect the functionality of certain features.</p>
                            </div>

                        </div>
                    </div>

                    <div className='bg-white rounded-3xl border border-gray-100 p-6 sm:p-8 shadow-sm hover:shadow-lg hover:border-green-100 transition-all duration-300 group'>
                        <div className="flex items-start gap-4 mb-5">
                            <div className='w-12 h-12 rounded-2xl bg-linear-to-br from-green-100 to-green-50 flex items-center justify-center shrink-0 group-hover:from-green-500 group-hover:to-green-400 transition-all duration-300'>
                                <Scale className='text-green-600 group-hover:text-white transition-all duration-200' />
                            </div>
                            <div>
                                <span className='text-xs font-bold text-green-600 uppercase tracking-wider'>Article 7</span>
                                <h2 className='text-xl font-bold text-gray-900'>Data Retention</h2>
                            </div>
                        </div>
                        <div className='space-y-3'>
                            
                            <div className=' text-gray-600 leading-relaxed'>
                                <p className='text-sm'>We retain your personal information only for as long as necessary to fulfill the purposes outlined in this policy, or as required by law. Account data is deleted within 30 days of account closure upon request.</p>
                            </div>
                            
                        </div>
                    </div>

                    <div className='bg-white rounded-3xl border border-gray-100 p-6 sm:p-8 shadow-sm hover:shadow-lg hover:border-green-100 transition-all duration-300 group'>
                        <div className="flex items-start gap-4 mb-5">
                            <div className='w-12 h-12 rounded-2xl bg-linear-to-br from-green-100 to-green-50 flex items-center justify-center shrink-0 group-hover:from-green-500 group-hover:to-green-400 transition-all duration-300'>
                                <Mail className='text-green-600 group-hover:text-white transition-all duration-200' />
                            </div>
                            <div>
                                <span className='text-xs font-bold text-green-600 uppercase tracking-wider'>Article 8</span>
                                <h2 className='text-xl font-bold text-gray-900'>Contact Us</h2>
                            </div>
                        </div>
                        <div className='space-y-3'>
                            
                            <div className='text-gray-600 leading-relaxed'>
                                <p className='text-sm'>For questions about this Privacy Policy or to exercise your rights, contact our Data Protection Officer at</p>
                                <a href="mailto:privacy@freshcart.com" className='block text-green-600 hover:text-green-700 font-semibold hover:underline'>privacy@freshcart.com</a>
                            </div>
                            
                        </div>
                    </div>

                </div>

                <div className='py-8 flex flex-col gap-3 items-center sm:flex-row sm:justify-between'>
                    <Link href="/" className='p-3 rounded-xl bg-gray-300 text-gray-700 hover:bg-gray-400 transition-all duration-200 flex items-center gap-2'>
                        <MoveLeft size={14} /> Back To Home 
                    </Link>
                    <Link href="/termsOfService" className='p-3 rounded-xl bg-green-600 text-white hover:bg-green-700 transition-all duration-200 flex items-center gap-2'>
                        View Terms Of Sevices <MoveRight size={14} /> 
                    </Link>
                </div>

                <Info/>

            </div>
    </>
  )
}
