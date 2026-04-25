"use client"
import { MapPin, Plus } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Controller, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { AddAddresses, AddAddressesTypeShcema } from '@/schemas/AddressesShcema'
import { Field, FieldError, FieldLabel } from '@/components/ui/field'
import { Input } from '@/components/ui/input'
import { addAddress, deleteAddress, getAllAddresses, UpdateAddress } from '@/actions/addresses'
import { Address } from '@/types/addresses'
import AddressCard from '@/app/Components/Commens/AddressCard'
import { toast } from 'sonner'
import { Skeleton } from '@/components/ui/skeleton'
import { SkeletonAvatar } from '@/app/Components/Commens/SkeletonAvatar'
export default function Addresses() {
    const [addresses, setAddresses] = useState<Address[]>([]);
    const [editingId, setEditingId] = useState<string | null>(null);
    const [loading, setLoading] = useState(true)
    const [open, setOpen] = useState(false);
    const form = useForm({
        resolver: zodResolver(AddAddresses) ,
        defaultValues:{
            name:"",
            details:"",
            phone:"",
            city:"",
        } 
    })


    async function handleAddingAddgress(data: AddAddressesTypeShcema) {
        try {
            const response = await addAddress(data);
            toast.success(response.message);
            setAddresses(response.data);
            cancelAdding();
        } catch (error) {
            console.log(error);
        }
    }

    async function handleUpdatingAdress(addressId:string,data: AddAddressesTypeShcema){
        try {
            const response = await UpdateAddress(addressId,data);
            toast.success(response.message)
            setAddresses((prevAddresses) => 
                prevAddresses.map((addr) => 
                    addr._id === addressId ? response.data : addr
                )
            );

            cancelAdding();
        } catch (error) {
            console.log(error)
        }
    }

    function cancelAdding() {
        form.reset({ name: "", details: "", phone: "", city: "" });
        setEditingId(null);
        setOpen(false);
    }

    async function handleDisplayAddresses(){
        try {
            setLoading(true)
            const response = await getAllAddresses();
            setAddresses(response.data)
            console.log(response)
            
        } catch (error) {
            console.log(error)
        }finally{
            setLoading(false)
        }
        
    }



    async function handleDeleteAddress(addressId:string){
            try {
                const response = await deleteAddress(addressId);
                toast.success(response.message)
                setAddresses(response.data)
            } catch (error) {
                console.log(error)
            }
    }

    function handleEditAddress(address: Address) {
        setEditingId(address._id);
        form.reset({
            name: address.name,
            details: address.details,
            phone: address.phone,
            city: address.city,
        });
        setOpen(true);
    }


    useEffect(() => {
        handleDisplayAddresses()
    }, [])


    return (
        <>
            <div className='flex items-center justify-between'>
                <div>
                    <h2 className='text-xl font-bold text-gray-900'>My Addresses</h2>
                    <p className='text-gray-500 text-sm mt-1'>Manage your saved delivery addresses</p>
                </div>
                <div>
                    <Dialog open={open} onOpenChange={setOpen}>
                        <DialogTrigger className='cursor-pointer inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-green-600 text-white font-semibold hover:bg-green-700 transition-colors shadow-lg shadow-green-600/25'>
                            <Plus /> Add Addresses
                        </DialogTrigger>

                        <DialogContent className="max-w-2xl">
                            <DialogHeader>
                                <DialogTitle>
                                    <h2 className='text-xl font-bold text-gray-900'>Add New Address</h2>
                                </DialogTitle>
                            </DialogHeader>

                            <div className='relative bg-white rounded-3xl shadow-2xl w-full p-6 sm:p-8 animate-in zoom-in-95 duration-200'>

                                <form
                                    className='space-y-4 mt-4'
                                    onSubmit={form.handleSubmit((data) => {
                                        if (editingId) {
                                            handleUpdatingAdress(editingId, data); 
                                        } else {
                                            handleAddingAddgress(data); 
                                        }
                                    })}
                                >

                                    <Controller
                                        name="name"
                                        control={form.control}
                                        render={({ field, fieldState }) => (
                                            <Field data-invalid={fieldState.invalid}>
                                                <FieldLabel htmlFor={field.name} className='text-gray-700 text-[16px]'>
                                                    Address Name
                                                </FieldLabel>

                                                <Input
                                                    {...field}
                                                    id={field.name}
                                                    aria-invalid={fieldState.invalid}
                                                    placeholder="e.g.home,office"
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
                                        name="details"
                                        control={form.control}
                                        render={({ field, fieldState }) => (
                                            <Field data-invalid={fieldState.invalid}>
                                                <FieldLabel htmlFor={field.name} className="text-gray-700 text-[16px]">
                                                    Full Address
                                                </FieldLabel>

                                                <textarea
                                                    {...field}
                                                    id={field.name}
                                                    aria-invalid={fieldState.invalid}
                                                    placeholder="street, building, apartment"
                                                    autoComplete="off"
                                                    className="
                                                        py-6 px-4 
                                                        placeholder:text-base placeholder:text-gray-400
                                                        border border-gray-300
                                                        focus:border-green-600! focus:ring-0! focus:outline-none!
                                                        rounded-xl
                                                        w-full
                                                        resize-none
                                                    "
                                                    rows={4}
                                                />

                                                {fieldState.invalid && (
                                                    <FieldError errors={[fieldState.error]} />
                                                )}
                                            </Field>
                                        )}
                                    />

                                    <div className="flex items-center justify-center gap-4">

                                        <Controller
                                            name="phone"
                                            control={form.control}
                                            render={({ field, fieldState }) => (
                                                <Field data-invalid={fieldState.invalid}>
                                                    <FieldLabel htmlFor={field.name} className='text-gray-700 text-[16px]'>
                                                        Phone Number
                                                    </FieldLabel>

                                                    {/* FIX: type="text" بدل textarea */}
                                                    <Input
                                                        type="text"
                                                        {...field}
                                                        id={field.name}
                                                        aria-invalid={fieldState.invalid}
                                                        placeholder="01xxxxxxxxx"
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
                                            name="city"
                                            control={form.control}
                                            render={({ field, fieldState }) => (
                                                <Field data-invalid={fieldState.invalid}>
                                                    <FieldLabel htmlFor={field.name} className='text-gray-700 text-[16px]'>
                                                        City
                                                    </FieldLabel>

                                                    <Input
                                                        {...field}
                                                        id={field.name}
                                                        aria-invalid={fieldState.invalid}
                                                        placeholder="cairo"
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

                                    </div>

                                    <div className="flex items-center gap-3 justify-between">

                                        <button
                                            type="button"
                                            className='flex-1 cursor-pointer inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-gray-300 text-black font-semibold hover:bg-gray-700 transition-colors shadow-lg shadow-green-300/25'
                                            onClick={()=>cancelAdding()}
                                        >
                                            Cancel
                                        </button>
                                        
                                        {editingId ?
                                            <>
                                                <button
                                                    type="submit"
                                                    className='flex-1 cursor-pointer inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-green-600 text-white font-semibold hover:bg-green-700 transition-colors shadow-lg shadow-green-600/25'
                                                >
                                                    update Addresse
                                                </button>
                                            </>
                                            :
                                            <>
                                                <button
                                                    type="submit"
                                                    className='flex-1 cursor-pointer inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-green-600 text-white font-semibold hover:bg-green-700 transition-colors shadow-lg shadow-green-600/25'
                                                >
                                                    Add Addresse
                                                </button>
                                            </>
                                            
                                        }
                                        

                                    </div>

                                </form>

                            </div>
                        </DialogContent>
                    </Dialog>
                </div>
                
            </div>
            <div className='addresses'>
                <div className='addresses'>
                    {loading ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <SkeletonAvatar/>
                                <SkeletonAvatar/>
                        </div>
                    ) : addresses.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {addresses.map((address) => (
                                <React.Fragment key={address._id}>
                                    <AddressCard 
                                        id={address._id} 
                                        name={address.name} 
                                        details={address.details} 
                                        phone={address.phone} 
                                        city={address.city} 
                                        handleDeleteAddress={handleDeleteAddress} 
                                        handleEditAddress={() => handleEditAddress(address)} 
                                    />
                                </React.Fragment>
                            ))}
                        </div>
                    ) : (
                        <div className='bg-white rounded-3xl border border-gray-100 p-12 text-center'>
                            <div className='w-20 h-20 rounded-full bg-gray-100 flex items-center justify-center mx-auto mb-5'>
                                <MapPin size={30} />
                            </div>
                            <h3 className='text-lg font-bold text-gray-900 mb-2'>
                                No Addresses Yet
                            </h3>
                            <p className='text-gray-500 mb-6 max-w-sm mx-auto'>
                                Add your first delivery address to make checkout faster and easier.
                            </p>
                            <button
                                onClick={() => setOpen(true)}
                                className='cursor-pointer inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-green-600 text-white font-semibold hover:bg-green-700 transition-colors shadow-lg shadow-green-600/25'
                            >
                                <Plus /> Add Addresses
                            </button>
                        </div>
                    )}
                </div>

                
                
                
            </div>
            
        </>
    )
}
