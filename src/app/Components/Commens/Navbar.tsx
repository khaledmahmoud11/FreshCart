"use client"
import Link from 'next/link'
import React, { useContext, useState } from 'react'
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  NavigationMenuTrigger,
  NavigationMenuContent,
} from "@/components/ui/navigation-menu"
import logo from "../../../assets/freshcart-logo.49f1b44d (1).png"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"

import { Badge } from "@/components/ui/badge"

import { CircleUser, Headset, Heart, LogOut, Menu, NotebookPen, PackageOpen, Settings, ShoppingCart, User, UserRound } from 'lucide-react'
import { signOut, useSession } from 'next-auth/react'
import { CartContext } from '@/provider/cart-provider'
import { Spinner } from '@/components/ui/spinner'
import Image from 'next/image'
import { WishListContext } from '@/provider/wish-list-provider'
import { UserInfoContext } from '@/provider/userInfo-provider'
import NavSerachInput from './NavSerachInput'
export default function Navbar() {


  const { status} = useSession()

  function handleLogOut(){
    signOut();
  }
  const {user} = useContext(UserInfoContext);
  const {numOfCartItems,isLoading} = useContext(CartContext);
  const {wishItems,isLoadingWish} = useContext(WishListContext);
  const [isOpen, setIsOpen] = useState(false);



  return (
    <>
      <nav className='bg-gray-100 p-5 sticky top-0 w-full z-50 gap-3'>
        <div className="container mx-auto flex items-center justify-between">
          
          <div className="nav-logo flex items-center gap-2 text-3xl font-bold">
            <Link href="/">
            <Image
              src={logo}
              alt='logo'
              width={1000}
              height={1000}
              className='w-40 mb-4 cursor-pointer'
            />
            </Link>
          </div>

          <div className="searchInput relative flex-1 max-w-sm hidden lg:flex">
      
            <NavSerachInput/>
          </div>

          <div className="nav-links hidden xl:flex">
            <NavigationMenu className='gap-4'>
            <NavigationMenuItem  className='list-none '>
              <NavigationMenuLink asChild className='text-black bg-transparent text-lg hover:text-green-400 transition-all duration-300 '>
                <Link href="/">Home</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem  className='list-none'>
              <NavigationMenuLink asChild className='text-black bg-transparent text-lg hover:text-green-400 transition-all duration-300'>
                <Link href="/products">Shop</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem  className='list-none'>
              <NavigationMenuLink asChild className='text-black bg-transparent text-lg hover:text-green-400 transition-all duration-300'>
                <Link href="/categories">
                  <NavigationMenu>
                    <NavigationMenuItem>
                      <NavigationMenuTrigger className='text-black text-lg hover:text-green-400 transition-all duration-300 bg-transparent cursor-pointer' >Categories</NavigationMenuTrigger>

                      <NavigationMenuContent>
                        <div className='w-50 space-y-3'>
                          <Link  href="/categories">  <p className='border-b border-gray-200  w-full p-2'>All Categories</p> </Link>
                          <Link href="/products?category=6439d2d167d9aa4ca970649f" > <p className='border-b border-gray-200  w-full p-2'>Electronices</p> </Link>
                          <Link href="/products?category=6439d58a0049ad0b52b9003f" > <p className='border-b border-gray-200  w-full p-2'>Women&apos;s fashion</p> </Link>   
                          <Link href="/products?category=6439d5b90049ad0b52b90048" > <p className='border-b border-gray-200  w-full p-2'>Men&apos;s fashion</p> </Link>
                          <Link href="/products?category=6439d40367d9aa4ca97064a8" > <p className='border-b border-gray-200  w-full p-2'>Care And Health</p> </Link>
                        </div>
                      </NavigationMenuContent>

                    </NavigationMenuItem>
                  </NavigationMenu>
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem  className='list-none'>
              <NavigationMenuLink asChild className='text-black bg-transparent text-lg hover:text-green-400 transition-all duration-300'>
                <Link href="/brands">Brands</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            
            </NavigationMenu>

          </div>

          <Link href="/contact" className='items-center gap-3 cursor-pointer hidden lg:flex hover:opacity-75 transition-all duration-200' >
              <div className='rounded-full flex items-center justify-center bg-green-100 p-2'>
                <Headset className='text-green-500' />
              </div>
              <div className='text-sm'>
                <p className='text-gray-500'>Support</p>
                <p >24/7 Hours</p>
              </div>
          </Link>

          <div className="nav-icons flex items-center gap-7">
            
            <Link href="/wish-list" className='relative cursor-pointer text-gray-500 hover:text-green-500 duration-200 transition-all'>
              <Heart size={24} />
              {status === "authenticated" && <Badge className='absolute -top-3 -right-3 bg-red-500 text-white'> {isLoadingWish ? <Spinner/> : wishItems > 9 ? "+9" : wishItems   } </Badge> }
              
            </Link>
            <Link href="/cart" className='relative cursor-pointer text-gray-500 hover:text-green-500 duration-200 transition-all'>
              {status === "authenticated" && <Badge className='absolute -top-3 -right-3 bg-green-500 text-white'> {isLoading ? <Spinner/> : numOfCartItems > 9 ? "+9" : numOfCartItems   } </Badge>  } 
              
              <ShoppingCart size={24} />
            </Link>
            
            
            {status === "unauthenticated" ?  
            <>
              <Link href="/login" className='text-white text-md bg-green-600 hover:bg-green-800 rounded-3xl px-4 py-3 flex items-center justify-center gap-2 font-bold '> <UserRound size={16} /> Sign In</Link>          
            </> 
            :
            <>
              <DropdownMenu >
                <DropdownMenuTrigger className='border-none cursor-pointer group' asChild>
                  <Button variant="outline"> <CircleUser size={20} className='text-gray-400 group-hover:text-green-500 transition-all duration-200' /> </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className=' p-4 w-50'>
                  <div className='flex items-center gap-3'>
                    <div className='w-10 h-10 rounded-full bg-green-100 flex items-center justify-center'>
                      <CircleUser size={20} className='text-green-600'/>
                    </div>
                    <div>
                      <p className='text-sm font-semibold text-gray-800 truncate'>{user.userName}</p>
                      <p className='text-xs text-gray-400 truncate'>{user.userEmail}</p>
                    </div>

                  </div>
                  <DropdownMenuGroup className=' my-4'>
                    <DropdownMenuItem  >
                      <Link href="/profile" className='group flex items-center gap-3 px-4 py-2.5 text-sm text-gray-600 hover:text-green-600 hover:bg-green-50 transition-colors ' >
                        <User/>
                        <span className='group-hover:text-green-600! transition-all duration-200'> My Profile </span>
                      </Link>   
                    </DropdownMenuItem>

                    <DropdownMenuItem  >
                      <Link href="/allorders" className='group flex items-center gap-3 px-4 py-2.5 text-sm text-gray-600 hover:text-green-600 hover:bg-green-50 transition-colors ' >
                        <PackageOpen />
                        <span className='group-hover:text-green-600! transition-all duration-200'> My Orders </span>
                      </Link>   
                    </DropdownMenuItem>

                    <DropdownMenuItem  >
                      <Link href="/wish-list" className='group flex items-center gap-3 px-4 py-2.5 text-sm text-gray-600 hover:text-green-600 hover:bg-green-50 transition-colors ' >
                        <Heart />
                        <span className='group-hover:text-green-600! transition-all duration-200'> My Wishlist </span>
                      </Link>   
                    </DropdownMenuItem>

                    <DropdownMenuItem  >
                      <Link href="/profile/addresses" className='group flex items-center gap-3 px-4 py-2.5 text-sm text-gray-600 hover:text-green-600 hover:bg-green-50 transition-colors ' >
                        <NotebookPen />
                        <span className='group-hover:text-green-600! transition-all duration-200'> Addresses</span>
                      </Link>   
                    </DropdownMenuItem>

                    <DropdownMenuItem  >
                      <Link href="/profile/settings" className='group flex items-center gap-3 px-4 py-2.5 text-sm text-gray-600 hover:text-green-600 hover:bg-green-50 transition-colors ' >
                        <Settings />
                        <span className='group-hover:text-green-600! transition-all duration-200'> Settings</span>
                      </Link>   
                    </DropdownMenuItem>

                  </DropdownMenuGroup>
                  <DropdownMenuSeparator />

                  <DropdownMenuGroup>
                    <DropdownMenuItem  >
                      <Link onClick={()=>handleLogOut()} href="" className='group flex items-center gap-3 px-4 py-2.5 text-sm text-gray-600 transition-colors ' >
                        <LogOut className='text-red-600 ' />
                        <span className='text-red-600! '> Sign Out</span>
                      </Link>   
                    </DropdownMenuItem>

                  </DropdownMenuGroup>
                </DropdownMenuContent>
              </DropdownMenu>
            </>  
            }
            
            <div className="flex lg:hidden">
              <Sheet open={isOpen} onOpenChange={setIsOpen}  >
                <SheetTrigger className='bg-green-600 hover:bg-green-700 transition-colors duration-200 cursor-pointer text-white h-10 w-10 rounded-full flex items-center justify-center '> <Menu size={18} /> </SheetTrigger>
                <SheetContent className='p-4 space-y-3 overflow-y-auto'>

                  <div className="logo ">
                    <Image
                      src={logo}
                      alt='logo'
                      width={1000}
                      height={1000}
                      className='w-40 mb-4'
                    />
                  </div>

                  <div className="searchInput relative flex-1 max-w-sm ">
                    <NavSerachInput/>
                  </div>
                  
                  <div onClick={() => setIsOpen(false)} className='nav-links'>
                    <ul className=' list-none'>
                      <Link href="/">
                        <li className='flex items-center gap-3 px-4 py-3 rounded-xl font-medium text-[16px] text-gray-700 hover:text-green-600 hover:bg-green-50 transition-color scursor-pointer'>Home</li>
                      </Link>
                      <Link href="/products">
                        <li className='flex items-center gap-3 px-4 py-3 rounded-xl font-medium text-[16px] text-gray-700 hover:text-green-600 hover:bg-green-50 transition-color scursor-pointer'>Shop</li>
                      </Link>
                      <Link href="/categories">
                        <li className='flex items-center gap-3 px-4 py-3 rounded-xl font-medium text-[16px] text-gray-700 hover:text-green-600 hover:bg-green-50 transition-color scursor-pointer'>Categories</li>
                      </Link>
                      <Link href="/brands">
                        <li className='flex items-center gap-3 px-4 py-3 rounded-xl font-medium text-[16px] text-gray-700 hover:text-green-600 hover:bg-green-50 transition-color scursor-pointer'>Brands</li>
                      </Link>
                    </ul>
                  </div>

                  <div onClick={() => setIsOpen(false)} className="fav">
                    <Link href="/wish-list" className='flex items-center justify-between px-4 py-3 rounded-xl font-medium text-[16px] '>
                      <div className='flex items-center gap-5'>
                        <span> <Heart  className='text-red-600 ' /> </span>
                        <span>Wish List</span>
                      </div>
                      <Badge className='bg-red-500 text-white'> {isLoadingWish ? <Spinner/> : wishItems > 9 ? "+9" : wishItems   } </Badge>
                    </Link>
                  </div>

                  <div onClick={() => setIsOpen(false)} className="cart">
                    <Link href="/cart" className='flex items-center justify-between px-4 py-3 rounded-xl font-medium text-[16px] '>
                      <div className='flex items-center gap-5'>
                        <span> <ShoppingCart  className='text-green-600 fill-green-600' /> </span>
                        <span>Cart</span>
                      </div>
                      <Badge className='bg-green-500 text-white'> {isLoading ? <Spinner/> : numOfCartItems > 9 ? "+9" : numOfCartItems   } </Badge>
                    </Link>
                  </div>

                  <div className="btns">
                    {status === "unauthenticated"  ?
                      <>
                        <div className="flex items-center gap-4">
                      
                          <Link onClick={() => setIsOpen(false)} href="/login" className='cursor-pointer rounded-lg flex-1 bg-green-600  hover:bg-green-700 transition-colors duraiton-200 border-2 border-green-600 text-white py-3 text-lg font-bold text-center'>
                            Sing In
                          </Link>
                          <Link onClick={() => setIsOpen(false)} href="/register" className='cursor-pointer rounded-lg flex-1 bg-white  text-green-600 text-lg font-bold border-2 border-green-600 py-3 text-center'>
                            Sing Up
                          </Link>
                          
                        </div>
                      </> 
                      :
                      <>
                        <div>
                          <Link onClick={() => setIsOpen(false)} href="/profile" className='flex items-center gap-5 px-4 py-3 rounded-xl font-medium text-[16px] '>
                            <span> <User /> </span>
                            <span>{user.userName}</span>
                          </Link>
                          <Link onClick={()=>{handleLogOut();setIsOpen(false);}} href="/login" className='flex items-center gap-5 px-4 py-3 rounded-xl font-medium text-[16px] text-red-600 '>
                            <span> <LogOut /> </span>
                            <span>Sign Out</span>
                          </Link>
                        </div>
                      </>  
                    }
                    
                  </div>

                  <div onClick={() => setIsOpen(false)} className="support">
                    <div className="flex items-center gap-3 px-4">
                      <span className='bg-green-100 rounded-full flex items-center justify-center p-3'>
                        <Headset size={16} className='text-green-600 ' />
                      </span>
                      <div>
                        <p className='text-sm font-semibold text-gray-700'>Need Help ?</p>
                        <p className='text-sm text-green-700'>Contact Support</p>
                      </div>
                    </div>
                  </div>


                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}
