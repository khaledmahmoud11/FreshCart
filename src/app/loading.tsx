import { Avatar } from '@/components/ui/avatar'
import React from 'react'
import { Spinner } from "@/components/ui/spinner"

export default function Loadind() {
  return (
    <div className='h-screen flex flex-column gap-3 items-center justify-center '>
        <div className="nav-logo flex items-center gap-2 text-2xl font-bold">
            <Avatar className='flex items-center justify-center rounded-xl bg-black text-white'>S</Avatar>
            <div>FreshCart</div>
        </div>
        <Spinner className='size-8' />
    </div>
  )
}
