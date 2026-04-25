"use client"

import React, { useContext, useEffect, useState } from 'react'
import visa from "../../assets/visa.png"
import amex from "../../assets/amex.png"
import mastercard from "../../assets/mastercard.png"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import Link from 'next/link'
import { BadgeInfo, Banknote, Bookmark, Building2, Check, CreditCard, Handbag, House, Lock, MapPin, MoveLeft, Phone, Plus, ReceiptText, ShieldHalf, TriangleAlert, Truck } from 'lucide-react'
import { getAllAddresses, getSpecificAddress } from '@/actions/addresses';
import { Address, AddressesResponse, SpecificAddressResponse } from '@/types/addresses';
import { Controller, useForm } from 'react-hook-form'
import { Field, FieldError, FieldLabel } from '@/components/ui/field'
import Info from '../Components/Commens/Info'

import { zodResolver } from '@hookform/resolvers/zod'
import { Input } from '@/components/ui/input'
import Image from 'next/image'
import { displayCart } from '@/actions/cart'
import { CartData, CartProduct, CartResponse } from '@/types/cart'

import { CheckOut, CheckOutTypeShcema } from '@/schemas/CheckOutSchema'
import { orderCash, orderOnline } from '@/actions/checkOut'
import { toast } from 'sonner'
import LoadingProducts from '../Components/Commens/LoadingProducts'
import { SkeletonAvatar } from '../Components/Commens/SkeletonAvatar'
import { Spinner } from '@/components/ui/spinner'
import { useRouter } from "next/navigation"
import { CartContext } from '@/provider/cart-provider'

export default function Checkout() {


        const [isLoadingCheckOutPage, setIsLoadingCheckOutPage] = useState(true)
        const [isLoadingAddresses, setIsLoadingAddresses] = useState(true)
        const [addresses, setAddresses] = useState<Address[]>([])
        const [cartProducts, setCartProducts] = useState<CartProduct[]>([])
        const [addressId, setAddressId] = useState("")
        const [payment, setPayment] = useState("cash")
        const [totalPrice, setTotalPrice] = useState(0)
        const [cartID, setcartID] = useState("")
        
        const router = useRouter();

        const {setNumOfCartItems} = useContext(CartContext)
        

        const form = useForm({
            resolver: zodResolver(CheckOut),
            defaultValues:{
                details: "",
                phone: "",
                city: ""    
            } 
        })

        async function getAllAddresse(){
            try{
                setIsLoadingAddresses(true)
                const addressesResponse:AddressesResponse = await getAllAddresses();
                const addressesData:Address[] = addressesResponse.data
                setAddresses(addressesData)
            }catch(error){
                console.log(error)
            }finally{
                setIsLoadingAddresses(false)
            }
        }

        async function getAddress(addressId:string){
            try {
                const response :SpecificAddressResponse = await getSpecificAddress(addressId);
                const data : Address = response.data
                setAddressId(data._id)
                form.reset({
                    details: data.details,
                    phone: data.phone,
                    city: data.city,
                });
            } catch (error) {
                console.log(error)
            }
        }

        function resetAddress(){
            setAddressId("");
            form.reset({
                    details: "",
                    phone: "",
                    city: "",
            });
        }

        async function handleCashCheckOut(data:CheckOutTypeShcema){
            try{
                const response = await orderCash(data,cartID);
                if (response?.status === "success") {
                    toast.success("Payment completed successfully ");
                    router.push("/allorders")
                    setNumOfCartItems(0)
                } else {
                    toast.error(response?.message || "Payment failed");
                }
                setCartProducts([])
            }catch(error){
                console.log(error)
            }
        }

        async function handleOnlineCheckOut(data:CheckOutTypeShcema){
            try{
                const response = await orderOnline(data,cartID);
                console.log(response)
                if (response?.status === "success") {
                    console.log(response.session)
                    open(response.session.url,"_self")
                } else {
                    toast.error(response?.message || "Payment failed");
                }
                setCartProducts([])
            }catch(error){
                console.log(error)
            }
        }

        async function getCartProducts(){
            try {
                setIsLoadingCheckOutPage(true);
                const response :CartResponse = await displayCart();
                const cartData :CartData = response.data;
                setTotalPrice(cartData.totalCartPrice ?? 0)
                setcartID(cartData._id)
                const cartProdcuts:CartProduct[] = cartData.products;
                setCartProducts(cartProdcuts)
            } catch (error) {
                console.log(error)
            }finally{
                setIsLoadingCheckOutPage(false);
            }
        }

        useEffect(()=>{
            getCartProducts();
            getAllAddresse();
        },[])
        

    
    return (
        <>

            {isLoadingCheckOutPage 
            ?
                <LoadingProducts title="checkout" />
            :
            
            cartProducts.length > 0   
            ?
                <>
                    <div className="container px-4 mx-auto">
                        <Breadcrumb className='my-5'>
                            <BreadcrumbList>
                                <BreadcrumbItem>
                                <BreadcrumbLink href="/" className='text-gray-500 hover:text-green-600 transition-all duration-200'>Home</BreadcrumbLink>
                                </BreadcrumbItem>
                                <BreadcrumbSeparator />
                                <BreadcrumbItem>
                                <BreadcrumbLink href="/cart" className='text-gray-500 hover:text-green-600 transition-all duration-200'>Cart</BreadcrumbLink>
                                </BreadcrumbItem>
                                <BreadcrumbSeparator />
                                <BreadcrumbItem>
                                <BreadcrumbPage>Checkout</BreadcrumbPage>
                                </BreadcrumbItem>
                            </BreadcrumbList>
                        </Breadcrumb>
                        
                        <div className='flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4'>
                            <div>
                                <div className='flex items-center gap-3'>
                                    <span className='bg-linear-to-br from-green-600 to-green-700 text-white w-12 h-12 rounded-xl flex items-center justify-center shadow-lg shadow-green-600/20'>
                                        <ReceiptText />
                                    </span>
                                    <h1 className='text-3xl font-bold text-gray-900 flex items-center gap-3'>Complete Your Order</h1>
                                </div>
                                <p className='text-gray-500 mt-2'>Review your items and complete your purchase</p>
                            </div>
                            <Link href="/cart" className='text-green-600 hover:text-green-700 font-medium flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-green-50 transition-all'>
                                <MoveLeft /> Back TO Cart
                            </Link>
                        </div>
                        
                        <form className='my-10 sm:my-16' onSubmit={form.handleSubmit(payment==="cash"? handleCashCheckOut : handleOnlineCheckOut )}>
                            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                            <div className="lg:col-span-2 space-y-6">
                                <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm">
                                    <div className="bg-linear-to-r from-green-600 to-green-700 px-6 py-4">
                                        <h2 className='text-lg font-bold text-white flex items-center gap-2'>
                                            <House />  Shipping Address
                                        </h2>
                                        <p className='text-green-100 text-sm mt-1'>Where should we deliver your order?</p>
                                    </div>
                                    <div className="p-6 space-y-5">
                                        <div className="pb-5 border-b border-gray-100">
                                            <div className='flex items-center gap-2 mb-3'>
                                                <Bookmark className='text-green-600 fill-green-600' /> <span className='font-semibold text-gray-800' >Saved Addresses</span>
                                            </div>
                                            <div className="space-y-3">
                                                <p className='text-sm font-medium text-gray-600'>
                                                    Select a saved address or enter a new one below
                                                </p>
                                                {isLoadingAddresses
                                                ?
                                                    <>
                                                        <SkeletonAvatar/>
                                                        <SkeletonAvatar/>
                                                        <SkeletonAvatar/>
                                                    </>
                                                :    
                                                
                                                addresses.map((address)=><React.Fragment key={address._id}>
                                                    <div onClick={()=>getAddress(address._id)} className='cursor-pointer'>
                                                        <div
                                                            className={`w-full transition-all duration-200 text-left ${
                                                                addressId === address._id
                                                                ? "p-4 rounded-xl border-2 border-green-500 bg-green-50 ring-2 ring-green-500/20"
                                                                : "p-5 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-md hover:border-green-100 group"
                                                            }`}
                                                            >
                                                            <div className="flex items-start justify-between gap-4">
                                                                <div className="flex items-start gap-4 flex-1">
                                                                
                                                                <div
                                                                    className={`flex items-center justify-center shrink-0 transition-colors ${
                                                                    addressId === address._id
                                                                        ? "w-10 h-10 rounded-lg bg-green-500 text-white"
                                                                        : "w-11 h-11 rounded-xl bg-green-50 group-hover:bg-green-100"
                                                                    }`}
                                                                >
                                                                    <MapPin />
                                                                </div>

                                                                <div className="flex-1 min-w-0">
                                                                    <h3
                                                                    className={`${
                                                                        addressId === address._id
                                                                        ? "font-semibold text-green-700"
                                                                        : "font-bold text-gray-900 mb-1"
                                                                    }`}
                                                                    >
                                                                    {address.name}
                                                                    </h3>

                                                                    <p
                                                                    className={`text-sm text-gray-600 ${
                                                                        addressId === address._id ? "mt-0.5 line-clamp-1" : "mb-3 line-clamp-2"
                                                                    }`}
                                                                    >
                                                                    {address.details}
                                                                    </p>

                                                                    <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
                                                                    <span className="flex items-center gap-1.5">
                                                                        <Phone size={14} /> {address.phone}
                                                                    </span>
                                                                    <span className="flex items-center gap-1.5">
                                                                        <Building2 /> {address.city}
                                                                    </span>
                                                                    </div>
                                                                </div>
                                                                </div>
                                                            </div>
                                                            </div>
                                                    </div>
                                                    
                                                </React.Fragment>)
                                                }

                                                <div  onClick={() => resetAddress()} className='cursor-pointer'>
                                                    <div
                                                        className={`w-full p-4 rounded-xl border-2 border-dashed text-left transition-all duration-200 ${
                                                            addressId === ""
                                                            ? "border-green-500 bg-green-50"
                                                            : "border-gray-300 hover:border-green-300 hover:bg-gray-50"
                                                        }`}
                                                    >
                                                        <div className="flex items-center gap-2">
                                                            
                                                            <span
                                                            className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                                                                addressId === ""
                                                                ? "bg-green-500 text-white"
                                                                : "bg-gray-100 text-gray-500"
                                                            }`}
                                                            >
                                                            <Plus />
                                                            </span>

                                                            <div>
                                                            <p
                                                                className={`font-semibold ${
                                                                addressId === "" ? "text-green-700" : "text-gray-700"
                                                                }`}
                                                            >
                                                                Use a different address
                                                            </p>

                                                            <p className="text-xs text-gray-500 mt-0.5">
                                                                Enter a new shipping address manually
                                                            </p>
                                                            </div>

                                                        </div>
                                                    </div>
                                                </div>
                                                
                                                
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-3 p-4 bg-blue-50 rounded-xl border border-blue-100">
                                            <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
                                                <BadgeInfo size={16} className='fill-blue-500' />
                                            </div>
                                            <div>
                                                <p className='text-sm text-blue-800 font-medium'>Delivery Information</p>
                                                <p className='text-xs text-blue-600 mt-0.5'>Using your saved address. You can edit the details below if needed.</p>
                                            </div>
                                        </div>

                                        <div>

                                            <Controller
                                                    name="city"
                                                    control={form.control}
                                                    render={({ field, fieldState }) => (
                                                        <Field data-invalid={fieldState.invalid}>
                                                            <FieldLabel htmlFor={field.name} className='text-gray-700 text-[16px]'>
                                                                City
                                                            </FieldLabel>

                                                            <div className="relative">
                                                                <Input
                                                                {...field}
                                                                id={field.name}
                                                                aria-invalid={fieldState.invalid}
                                                                placeholder="cairo"
                                                                autoComplete="off"
                                                                className="
                                                                    py-6 px-15 
                                                                    placeholder:text-base placeholder:text-gray-400
                                                                    border border-gray-300
                                                                    focus:border-green-600! focus:ring-0! focus:outline-none!
                                                                    rounded-xl
                                                                "
                                                                />
                                                                <span className="absolute left-4 top-1/2 -translate-y-1/2 w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center">
                                                                    <Building2 size={16} />
                                                                </span>
                                                            </div>

                                                            {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                                                        </Field>
                                                    )}
                                                />

                                            <Controller
                                                name="details"
                                                control={form.control}
                                                render={({ field, fieldState }) => (
                                                    <Field data-invalid={fieldState.invalid}>
                                                        <FieldLabel htmlFor={field.name} className="text-gray-700 text-[16px]">
                                                            Full Address
                                                        </FieldLabel>

                                                        <div className="relative">
                                                            <textarea
                                                                {...field}
                                                                id={field.name}
                                                                aria-invalid={fieldState.invalid}
                                                                placeholder="street, building, apartment"
                                                                autoComplete="off"
                                                                className="
                                                                    py-6 px-15 
                                                                    placeholder:text-base placeholder:text-gray-400
                                                                    border border-gray-300
                                                                    focus:border-green-600! focus:ring-0! focus:outline-none!
                                                                    rounded-xl
                                                                    w-full
                                                                    resize-none
                                                                "
                                                                rows={4}
                                                            />
                                                            <span className="absolute left-4 top-5 w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center">
                                                                <MapPin size={16} />
                                                            </span>
                                                        </div>

                                                        {fieldState.invalid && (
                                                            <FieldError errors={[fieldState.error]} />
                                                        )}
                                                    </Field>
                                                )}
                                            />
                                            <Controller
                                                    name="phone"
                                                    control={form.control}
                                                    render={({ field, fieldState }) => (
                                                        <Field data-invalid={fieldState.invalid}>
                                                            <FieldLabel htmlFor={field.name} className='text-gray-700 text-[16px]'>
                                                                Phone Number
                                                            </FieldLabel>

                                                            <div className="relative">
                                                                <Input
                                                                    type="text"
                                                                    {...field}
                                                                    id={field.name}
                                                                    aria-invalid={fieldState.invalid}
                                                                    placeholder="01xxxxxxxxx"
                                                                    autoComplete="off"
                                                                    className="
                                                                        py-6 px-15
                                                                        placeholder:text-base placeholder:text-gray-400
                                                                        border border-gray-300
                                                                        focus:border-green-600! focus:ring-0! focus:outline-none!
                                                                        rounded-xl
                                                                    "
                                                                />
                                                                <span className="absolute left-4 top-1/2 -translate-y-1/2 w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center">
                                                                    <Phone size={16} />
                                                                </span>
                                                                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-sm text-gray-400">
                                                                    Egyption Number Only
                                                                </span>
                                                            </div>

                                                            {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                                                        </Field>
                                                    )}
                                                />                       
                                        </div>

                                        

                                    </div>
                                </div>

                                <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm">
                                    <div className="bg-linear-to-r from-green-600 to-green-700 px-6 py-4">
                                        <h2 className='text-lg font-bold text-white flex items-center gap-2'>
                                            <CreditCard /> Payment Method
                                        </h2>
                                        <p className='text-green-100 text-sm mt-1'>Choose how you&apos;d like to pay</p>
                                    </div>
                                    <div className="p-6 space-y-4">

                                        <div onClick={()=>setPayment("cash")} className="cursor-pointer">
                                            <div
                                                className={`w-full p-5 rounded-xl border-2 transition-all flex items-center gap-4 group ${
                                                    payment ==="cash"
                                                    ? "border-green-500 bg-linear-to-r from-green-50 to-emerald-50 shadow-sm"
                                                    : "border-gray-200 hover:border-green-200 hover:bg-gray-50"
                                                }`}
                                                >
                                                <div
                                                    className={`w-14 h-14 rounded-xl flex items-center justify-center transition-all ${
                                                    payment ==="cash"
                                                        ? "bg-linear-to-br from-green-500 to-green-600 text-white shadow-lg shadow-green-500/30"
                                                        : "bg-gray-100 text-gray-400 group-hover:bg-gray-200"
                                                    }`}
                                                >
                                                    <Banknote />
                                                </div>

                                                <div className="flex-1 text-left">
                                                    <h3
                                                    className={`font-bold ${
                                                        payment ==="cash" ? "text-green-700" : "text-gray-900"
                                                    }`}
                                                    >
                                                    Cash On Delivery
                                                    </h3>

                                                    <p className="text-sm text-gray-500 mt-0.5">
                                                    Pay when your order arrives at your doorstep
                                                    </p>
                                                </div>

                                                <div
                                                    className={`w-7 h-7 rounded-full flex items-center justify-center transition-all ${
                                                    payment ==="cash"
                                                        ? "bg-green-600 text-white"
                                                        : "border-2 border-gray-200"
                                                    }`}
                                                >
                                                    <Check size={16} />
                                                </div>
                                            </div>
                                        </div>
                                        
                                        
                                        <div onClick={()=>setPayment("online")} className="cursor-pointer">
                                            <div
                                            className={`w-full p-5 rounded-xl border-2 transition-all flex items-center gap-4 group ${
                                                payment ==="online"
                                                ? "border-green-500 bg-linear-to-r from-green-50 to-emerald-50 shadow-sm"
                                                : "border-gray-200 hover:border-green-200 hover:bg-gray-50"
                                            }`}
                                            >
                                            <div
                                                className={`w-14 h-14 rounded-xl flex items-center justify-center transition-all ${
                                                payment ==="online"
                                                    ? "bg-linear-to-br from-green-500 to-green-600 text-white shadow-lg shadow-green-500/30"
                                                    : "bg-gray-100 text-gray-400 group-hover:bg-gray-200"
                                                }`}
                                            >
                                                <CreditCard />
                                            </div>

                                            <div className="flex-1 text-left">
                                                <h3
                                                className={`font-bold ${
                                                    payment ==="online" ? "text-green-700" : "text-gray-900"
                                                }`}
                                                >
                                                Pay Online
                                                </h3>

                                                <p className="text-sm text-gray-500 mt-0.5">
                                                Secure payment with Credit/Debit Card via Stripe
                                                </p>

                                                <div className="flex items-center gap-2 mt-2">
                                                <Image src={visa} alt="visa-photo" width={1000} height={1000} className="h-5 w-6" />
                                                <Image src={mastercard} alt="visa-photo" width={1000} height={1000} className="h-5 w-6" />
                                                <Image src={amex} alt="visa-photo" width={1000} height={1000} className="h-5 w-6" />
                                                </div>
                                            </div>

                                            <div
                                                className={`w-7 h-7 rounded-full flex items-center justify-center transition-all ${
                                                payment ==="online"
                                                    ? "bg-green-600 text-white"
                                                    : "border-2 border-gray-200"
                                                }`}
                                            >
                                                <Check size={16} />
                                            </div>
                                            </div>
                                        </div>

                                        <div className="flex items-center gap-3 p-4 bg-linear-to-r from-green-50 to-emerald-50 rounded-xl border border-green-100 mt-4">
                                            <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center shrink-0">
                                                <ShieldHalf className='text-green-500 ' />
                                            </div>
                                            <div>
                                                <p className='text-sm font-medium text-green-800'>
                                                    Secure & Encrypted
                                                </p>
                                                <p className='text-xs text-green-600 mt-0.5'>
                                                    Your payment info is protected with 256-bit SSL encryption
                                                </p>
                                                
                                            </div>
                                        </div>

                                    </div>
                                </div>

                            </div>

                            <div className="lg:col-span-1">
                                <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm sticky top-4">
                                    <div className="bg-linear-to-r from-green-600 to-green-700 px-6 py-4">
                                        <h2 className='text-lg font-bold text-white flex items-center gap-2'><Lock /> Order Summary</h2>
                                        <p className='text-green-100 text-sm mt-1'>5 items</p>
                                    </div>
                                    <div className='p-5'>
                                        {/* items */}
                                        <div className="space-y-3 max-h-56 overflow-y-auto mb-5 pr-1">
                                            {cartProducts.map((product)=><React.Fragment key={product._id}>

                                                <div className="flex items-center gap-3 p-3 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors">
                                                    <div className="w-14 h-14 rounded-lg bg-white p-1 border border-gray-100 shrink-0">
                                                        <Image
                                                            src={product.product.imageCover}
                                                            alt='products-item'
                                                            width={1000}
                                                            height={1000}
                                                            className='w-full h-full object-contain'
                                                        />
                                                    </div>
                                                    <div className="flex-1 min-w-0">
                                                        <p className='text-sm font-medium text-gray-900 truncate'>
                                                            {product.product.title}
                                                        </p>
                                                        <p className='text-xs text-gray-500 mt-0.5'>
                                                            {product.count} × {product.priceAfterDiscount || product.price} EGP
                                                        </p>
                                                    </div>
                                                    <p className='text-sm font-bold text-gray-900 shrink-0'>
                                                        {product.count * (product.priceAfterDiscount || product.price)}
                                                    </p>
                                                </div>
                                            
                                            </React.Fragment>)}
                                        </div>
                                        
                                        <hr className='border-gray-100 my-4' />
                                        <div className="space-y-3">

                                            <div className="flex justify-between text-gray-600">
                                                <span>Subtotal</span>
                                                <span className='font-medium'>{totalPrice} EGP</span>
                                            </div>

                                            <div className="flex justify-between text-gray-600">
                                                <div className="flex items-center gap-2">
                                                    <Truck  /> Shipping
                                                </div>
                                                <span className='text-green-600 font-semibold'>
                                                    FREE
                                                </span>
                                            </div>

                                            <hr className='border-gray-100' />
                                            <div className="flex justify-between items-center">
                                                <span className='text-lg font-bold text-gray-900'>Total</span>
                                                <div className="text-right">
                                                    <span className='text-2xl font-bold text-green-600'>
                                                        {totalPrice}
                                                    </span>
                                                    <span className='text-sm text-gray-500 ml-1'>EGP</span>
                                                </div>
                                            </div>

                                        </div>
                                        <div className="buttons">
                                            { payment==="cash" ?
                                                <>
                                                    <button className={`cursor-pointer w-full mt-6 bg-linear-to-r from-green-600 to-green-700 text-white py-4 rounded-xl font-bold hover:from-green-700 hover:to-green-800 transition-all disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2 shadow-lg shadow-green-600/20 active:scale-[0.98] ${form.formState.isSubmitting  ? "bg-green-600/30"  : "bg-green-600"}`}>
                                                        {form.formState.isSubmitting ? <Spinner/>:  <Handbag size={16} /> }  Place Order 
                                                    </button>
                                                </>
                                            :
                                                <>
                                                    <button className={`cursor-pointer w-full mt-6 bg-linear-to-r from-green-600 to-green-700 text-white py-4 rounded-xl font-bold hover:from-green-700 hover:to-green-800 transition-all disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2 shadow-lg shadow-green-600/20 active:scale-[0.98] ${form.formState.isSubmitting  ? "bg-green-600/30"  : "bg-green-600"}`}>
                                                        {form.formState.isSubmitting ? <Spinner/>: <ShieldHalf size={16} /> }    Proceed To Payment
                                                    </button>
                                                </>
                                            }
                                            
                                        </div>
                                        <div className="flex items-center justify-center gap-4 mt-4 py-3 border-t border-gray-100">
                                            <div className="flex items-center gap-1.5 text-xs text-gray-500">
                                                <ShieldHalf size={14} className='text-green-500' /> Secure
                                            </div>
                                            <div className="flex items-center gap-1.5 text-xs text-gray-500">
                                                <Truck size={14} className='text-blue-500' /> Fast Delivery
                                            </div>
                                            <div className="flex items-center gap-1.5 text-xs text-gray-500">
                                                <Handbag size={14} className='text-orange-500' /> Easy Returns
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>


                        </div>

                        </form>

                        <Info/>
                    </div>
                </>
            :        
                <>
                    <div className="min-h-[60vh] flex items-center justify-center px-4">
                        <div className="max-w-md text-center">
                            <div className="w-24 h-24 rounded-full bg-linear-to-br from-amber-50 to-orange-50 flex items-center justify-center mx-auto mb-6">
                                <TriangleAlert size={60} className='text-yellow-400' />
                            </div>
                            <h2 className='text-2xl font-bold text-gray-900 mb-3'>Your cart is empty</h2>
                            <p className='text-gray-500 mb-6'>Add some items to your cart before checking out.</p>                
                            <Link href="/products" className='inline-flex items-center gap-2 bg-linear-to-r from-green-600 to-green-700 text-white py-3.5 px-8 rounded-xl font-semibold hover:from-green-700 hover:to-green-800 transition-all shadow-lg shadow-green-600/20'>
                                Continue Shopping               
                            </Link>                
                        </div>
                    </div>
                </>

            }

            
        </>
    )
}
