"use server"
import { getUserToken } from "@/lib/authToken"

export async function addProductToWishList(productId : string){

    const token = await getUserToken();

    if(!token){
        throw new Error(" user is unauthrized")
    }
    const response = await fetch("https://ecommerce.routemisr.com/api/v1/wishlist",{
        method:"POST",
        body:JSON.stringify({productId}),
        headers:{
            token : token as string ,
            "content-type":"application/json"
        }
    })
    const data = await response.json();
    return data
}

export async function getUserWishList(){

    const token = await getUserToken();

    if(!token){
        throw new Error(" user is unauthrized")
    }
    const response = await fetch("https://ecommerce.routemisr.com/api/v1/wishlist",{
        method:"GET",
        headers:{
            token : token as string ,
            "content-type":"application/json"
        }
    })
    const data = await response.json();
    return data
}

export async function deletProductFromWishList(productId : string){

    const token = await getUserToken();

    if(!token){
        throw new Error(" user is unauthrized")
    }
    const response = await fetch(`https://ecommerce.routemisr.com/api/v1/wishlist/${productId}`,{
        method:"DELETE",
        headers:{
            token : token as string ,
            "content-type":"application/json"
        }
    })
    const data = await response.json();
    return data
}