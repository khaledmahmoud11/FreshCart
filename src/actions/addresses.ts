"use server"
import { getUserToken } from "@/lib/authToken"
import { AddAddressesTypeShcema } from "@/schemas/AddressesShcema";

export  async function getAllAddresses(){
    const token = await getUserToken();
    
    if(!token){
        throw new Error(" user is unauthrized")
    }
    const response = await fetch("https://ecommerce.routemisr.com/api/v1/addresses",{
        method:"GET",
        headers:{
            token : token as string ,
            "content-type":"application/json"
        }
    })
    const data = await response.json();
    return data
}

export async function getSpecificAddress(addressId : string){

    const token = await getUserToken();

    if(!token){
        throw new Error(" user is unauthrized")
    }
    const response = await fetch(`https://ecommerce.routemisr.com/api/v1/addresses/${addressId}`,{
        method:"GET",
        headers:{
            token : token as string ,
            "content-type":"application/json"
        }
    })
    const data = await response.json();
    return data
}



export async function addAddress(data:AddAddressesTypeShcema){

    const token = await getUserToken();

    if(!token){
        throw new Error(" user is unauthrized")
    }
    const response = await fetch("https://ecommerce.routemisr.com/api/v1/addresses",{
        method:"POST",
        body:JSON.stringify(data),
        headers:{
            token : token as string ,
            "content-type":"application/json"
        }
    })
    const respose = await response.json();
    return respose
}

export async function deleteAddress(addressId : string){

    const token = await getUserToken();

    if(!token){
        throw new Error(" user is unauthrized")
    }
    const response = await fetch(`https://ecommerce.routemisr.com/api/v1/addresses/${addressId}`,{
        method:"DELETE",
        headers:{
            token : token as string ,
            "content-type":"application/json"
        }
    })
    const data = await response.json();
    return data
}

export async function UpdateAddress(addressId : string,data:AddAddressesTypeShcema){

    const token = await getUserToken();

    if(!token){
        throw new Error(" user is unauthrized")
    }
    const response = await fetch(`https://ecommerce.routemisr.com/api/v1/addresses/${addressId}`,{
        method:"PUT",
        body:JSON.stringify(data),
        headers:{
            token : token as string ,
            "content-type":"application/json"
        }
    })
    const respose = await response.json();
    return respose
}