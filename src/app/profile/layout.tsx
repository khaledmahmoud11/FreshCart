import { Geist, Geist_Mono } from "next/font/google";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import {  ChevronRight, MapPin, Settings, User } from "lucide-react";
import Link from "next/link";
import Info from "../Components/Commens/Info";
    const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
    });

    const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
    });
    export default function RootLayout({
    children,
    }: Readonly<{
    children: React.ReactNode;
    }>) {
    return (
        <html lang="en">
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased`}
            >   
                <div className="bg-linear-to-br from-green-600 via-green-500 to-green-400 text-white">
                    <div className="container mx-auto px-4 py-10 sm:py-14">
                        
                        <Breadcrumb>
                            <BreadcrumbList>
                                <BreadcrumbItem>
                                <BreadcrumbLink href="/" className='text-white/70 hover:text-white transition-all duration-200'>Home</BreadcrumbLink>
                                </BreadcrumbItem>
                                <BreadcrumbSeparator />
                                <BreadcrumbItem>
                                <BreadcrumbPage className='text-white'>My Account</BreadcrumbPage>
                                </BreadcrumbItem>
                            </BreadcrumbList>
                        </Breadcrumb>
                        
                        <div className='flex items-center gap-3 my-5'>
                            <div className='w-20 h-20 rounded-3xl bg-white/20 backdrop-blur-sm flex items-center justify-center shadow-2xl shadow-green-900/30 ring-1 ring-white/30'>
                                <User className='text-white fill-white'  size={40} />    
                            
                            </div>
                            <div>
                            <h1 className='text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight '>My Account </h1>
                            <p className='text-white/80 mt-2 text-lg'>Manage your addresses and account settings</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container mx-auto px-4 py-10 sm:py-15 ">
                    <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                        <div className="col-span-1">
                            <div className="p-4 shadow-lg border border-gray-100 rounded-xl">
                                <h2 className="font-bold text-gray-900 my-5">My Acoount</h2>
                                <hr className="border-gray-200" />
                                <div className="space-y-2 py-3">
                                    <Link href="/profile/addresses" className="flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 group bg-green-50 text-green-700">
                                        <div className="w-10 h-10 rounded-lg flex items-center justify-center transition-colors bg-green-500 text-white">
                                            <MapPin size={18} className="text-white "/>
                                        </div>
                                        <p className="font-medium flex-1" >My Addresses</p>
                                        <span> <ChevronRight className="text-green-600" /> </span>
                                    </Link>
                                    <Link href="/profile/settings" className="flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 group bg-green-50 text-green-700">
                                        <div className="w-10 h-10 rounded-lg flex items-center justify-center transition-colors bg-green-500 text-white">
                                            <Settings size={18} className="text-white "/>
                                        </div>
                                        <p className="font-medium flex-1" >Settings</p>
                                        <span> <ChevronRight className="text-green-600" /> </span>
                                    </Link>

                                </div>

                            </div>
                        </div>
                        <div className="col-span-1 lg:col-span-3">
                            {children}
                        </div>
                    </div>
                </div>

                <Info />

            </body>
        </html>
    );
    }