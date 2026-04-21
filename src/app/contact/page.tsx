import { CircleQuestionMark, Clock, Headset, Mail, MapPin, MoveRight, Phone, Send } from 'lucide-react'
import React from 'react'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Textarea } from '@/components/ui/textarea'
import Link from 'next/link'
import Info from '../Components/Commens/Info'
export default function Contact() {
  return (
    <>
      <div className="bg-linear-to-br from-green-600 via-green-500 to-green-400 text-white">
        <div className="container mx-auto px-4 py-10 sm:py-14">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/" className='text-white/70 hover:text-white transition-colors duraiton-200'>Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage className='text-white'>Contact Us</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          
          
          <div className='flex items-center gap-3 my-5'>
            <div className='w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center shadow-xl ring-1 ring-white/30'>
              <Headset size={40} />    
              
            </div>
            <div>
              <h1 className='text-3xl sm:text-4xl font-bold tracking-tight '>Contact Us</h1>
              <p className='text-white/80 mt-1'>We&apos;d love to hear from you. Get in touch with our team.</p>
            </div>
          </div>
        </div>
      </div>
      <div className='py-10 sm:py-15'>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-3 gap-4">
            <div className="col-span-3 lg:col-span-1 space-y-6">

              <div className="rounded-2xl border border-gray-100 p-6 shadow-sm">
                <div className="flex items-start gap-4">
                  <div className='w-12 h-12 rounded-xl bg-green-50 flex items-center justify-center shrink-0'>
                    <Phone className='text-green-600 fill-green-600' />
                  </div>
                  <div>
                    <h3 className='font-semibold text-gray-900 mb-1'>Phone</h3>
                    <p className='text-gray-500 text-sm mb-2'>Mon-Fri from 8am to 6pm</p>
                    <a href="tel:+1 (800) 123-4567" className='text-green-600 font-medium hover:underline'>+1 (800) 123-4567</a>
                  </div>
                </div>
                
              </div>

              <div className="rounded-2xl border border-gray-100 p-6 shadow-sm">
                <div className="flex items-start gap-4">
                  <div className='w-12 h-12 rounded-xl bg-green-50 flex items-center justify-center shrink-0'>
                    <Mail className='text-green-600 ' />
                  </div>
                  <div>
                    <h3 className='font-semibold text-gray-900 mb-1'>Email</h3>
                    <p className='text-gray-500 text-sm mb-2'>We&apos;ll respond within 24 hours</p>
                    <a href="mailto:support@freshcart.com" className='text-green-600 font-medium hover:underline'>support@freshcart.com</a>
                  </div>
                </div>
                
              </div>

              <div className="rounded-2xl border border-gray-100 p-6 shadow-sm">
                <div className="flex items-start gap-4">
                  <div className='w-12 h-12 rounded-xl bg-green-50 flex items-center justify-center shrink-0'>
                    <MapPin className='text-green-600' />
                  </div>
                  <div>
                    <h3 className='font-semibold text-gray-900 mb-1'>Office</h3>
                    <p className='text-gray-500 text-sm mb-2'>123 Commerce Street<br/>New York, NY 10001<br/>United States</p>
                  </div>
                </div>
                
              </div>

              <div className="rounded-2xl border border-gray-100 p-6 shadow-sm">
                <div className="flex items-start gap-4">
                  <div className='w-12 h-12 rounded-xl bg-green-50 flex items-center justify-center shrink-0'>
                    <Clock className='fill-green-600 text-white' />
                  </div>
                  <div>
                    <h3 className='font-semibold text-gray-900 mb-1'>Business Hours</h3>
                    <p className='text-gray-500 text-sm mb-2'>Monday - Friday: 8am - 6pm<br/>Saturday: 9am - 4pm<br/>Sunday: Closed</p>
                  </div>
                </div>
                
              </div>

              <div className='bg-white rounded-2xl border border-gray-100 p-6 shadow-sm'>
                <h3 className='font-semibold text-gray-900 mb-4'>Follow Us</h3>
                <div className="flex items-center gap-5">
                  <span className='cursor-pointer flex items-center justify-center p-3 rounded-full text-gray-700 hover:bg-green-600 hover:text-white transition-all duration-200'>
                    <FaFacebookF />
                  </span>
                  <span className='cursor-pointer flex items-center justify-center p-3 rounded-full text-gray-700 hover:bg-green-600 hover:text-white transition-all duration-200'>
                    <FaTwitter />
                  </span>
                  <span className='cursor-pointer flex items-center justify-center p-3 rounded-full text-gray-700 hover:bg-green-600 hover:text-white transition-all duration-200'>
                    <FaInstagram />
                  </span>
                  <span className='cursor-pointer flex items-center justify-center p-3 rounded-full text-gray-700 hover:bg-green-600 hover:text-white transition-all duration-200'>
                    <FaLinkedinIn />
                  </span>
                </div>
              </div>


            </div>
            <div className="col-span-3 lg:col-span-2">
              <div className="bg-white rounded-2xl border border-gray-100 p-6 lg:p-8 shadow-sm">
                <div className='flex items-center gap-3 mb-6'>
                  <div className='w-12 h-12 rounded-xl bg-green-50 flex items-center justify-center'>
                    <Headset className='text-green-600' />
                  </div>
                  <div>
                    <h2 className='text-xl font-bold text-gray-900'>Send us a Message</h2>
                    <p className='text-gray-500 text-sm'>Fill out the form and we&apos;ll get back to you</p>
                  </div>

                </div>

                <form className='space-y-5'>

                  <div className='flex flex-col md:flex-row md:items-center gap-3'>
                    <div className='space-y-3 flex-1'>
                      <Label htmlFor="fullname" className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name
                      </Label>
                      <Input
                        required
                        type='name'
                        id='fullname'
                        placeholder='John Doe'                      
                        className="
                          py-6 px-4 
                          placeholder:text-base placeholder:text-gray-400
                          border border-gray-300
                        focus:border-green-500! focus:ring-0! focus:outline-none!
                          rounded-xl"
                      />
                    </div>
                    <div className='space-y-3 flex-1'>
                      <Label htmlFor="emailAddress" className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address
                      </Label>
                      <Input
                        required
                        type='name'
                        id='emailAddress'
                        placeholder='John@example.com'                      
                        className="
                          py-6 px-4 
                          placeholder:text-base placeholder:text-gray-400
                          border border-gray-300
                        focus:border-green-500! focus:ring-0! focus:outline-none!
                          rounded-xl"
                      />
                    </div>
                  </div>

                  <div>
                      <Label htmlFor="subject" className="text-sm font-medium text-gray-700">
                        Subject
                      </Label>
                      
                      <Select>
                        <SelectTrigger 
                          id="subject" 
                          className="w-full py-6 px-4 border-gray-300 rounded-xl focus:ring-0! focus:ring-offset-0! focus:border-green-500! outline-none! text-gray-600"
                        >
                          <SelectValue placeholder="Select a subject" />
                        </SelectTrigger>
                        
                        <SelectContent className="rounded-xl shadow-lg border-gray-200">
                          <SelectItem value="general" className="py-2 focus:bg-green-50 focus:text-green-700">
                            General Inquiry
                          </SelectItem>
                          <SelectItem value="order" className="py-2 focus:bg-green-50 focus:text-green-700">
                            Order Support
                          </SelectItem>
                          <SelectItem value="shipping" className="py-2 focus:bg-green-50 focus:text-green-700">
                            Shipping Question
                          </SelectItem>
                          <SelectItem value="returns" className="py-2 focus:bg-green-50 focus:text-green-700">
                            Returns & Refunds
                          </SelectItem>
                          <SelectItem value="product" className="py-2 focus:bg-green-50 focus:text-green-700">
                            Product Information
                          </SelectItem>
                          <SelectItem value="feedback" className="py-2 focus:bg-green-50 focus:text-green-700">
                            Feedback & Suggestions
                          </SelectItem>
                          <SelectItem value="other" className="py-2 focus:bg-green-50 focus:text-green-700">
                            Other
                          </SelectItem>
                        </SelectContent>
                      </Select>
                  </div>

                  <div>
                    <Label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                        Subject
                      </Label>

                    <Textarea
                      required
                      id='message'
                      placeholder='How Can We Help You ?'
                      className="
                        h-35
                        py-6 px-4 
                        placeholder:text-base placeholder:text-gray-400
                        border border-gray-300
                      focus:border-green-500! focus:ring-0! focus:outline-none!
                        rounded-xl
                        resize-none
                      "
                      
                    />
                  </div>
                  
                  <div>
                    <button className='cursor-pointer px-6 py-3 rounded-lg bg-green-600 hover:bg-green-700 transition-all duration-200 text-white font-bold text-lg flex items-center justify-center gap-2'>
                      <Send className='fill-white' /> Send Message
                    </button>
                  </div>


                </form>


              </div>

              <div className="mt-6 bg-green-50 rounded-2xl p-6 border border-green-100">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center shrink-0 shadow-sm">
                    <CircleQuestionMark size={22} className='fill-green-500 text-white' />
                  </div>
                  <div>
                    <h3 className='font-semibold text-gray-900 mb-1'>
                      Looking for quick answers?
                    </h3>
                    <p className='text-gray-600 text-sm mb-3'>Check out our Help Center for frequently asked questions about orders, shipping, returns, and more.</p>
                    <Link href="/support" className='text-green-600 font-medium text-sm hover:underline inline-flex items-center gap-1'>
                      Visit Help Center <MoveRight size={12} />
                    </Link>
                  </div>
                </div>
              </div>
              

            </div>

          </div>
          <Info/>
        </div>
      </div>
    </>
  )
}
