import logo from "../../../assets/freshcart-logo.49f1b44d (1).png"
import React from 'react'
import { Spinner } from "@/components/ui/spinner"
import Image from 'next/image'

export default function Loadind() {
  return (
    <div className='h-screen flex flex-column gap-3 items-center justify-center '>
        <div className="nav-logo flex items-center gap-2 text-2xl font-bold">
            <Image
                src={logo}
                alt='logo'
                width={1000}
                height={1000}
                className='w-40 mb-4 cursor-pointer'
            />
            <div>FreshCart</div>
        </div>
        <Spinner className='size-8' />
    </div>
  )
}
