"use server"
import { getUserToken } from "@/lib/authToken"

export async function addProductToCart(productId : string){

    const token = await getUserToken();

    if(!token){
        throw new Error(" user is unauthrized")
    }
    const response = await fetch("https://ecommerce.routemisr.com/api/v2/cart",{
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


export async function displayCart(){

    const token = await getUserToken();
    
    if(!token){
        throw new Error(" user is unauthrized")
    }
    const response = await fetch("https://ecommerce.routemisr.com/api/v2/cart",{
        method:"GET",
        headers:{
            token : token as string ,
            "content-type":"application/json"
        }
    })
    const data = await response.json();
    return data


}

export async function deletProductFromCart(productId : string){

    const token = await getUserToken();

    if(!token){
        throw new Error(" user is unauthrized")
    }
    const response = await fetch(`https://ecommerce.routemisr.com/api/v2/cart/${productId}`,{
        method:"DELETE",
        headers:{
            token : token as string ,
            "content-type":"application/json"
        }
    })
    const data = await response.json();
    return data
}


export async function updateProduct( productId : string , count:number ){

    const token = await getUserToken();

    if(!token){
        throw new Error(" user is unauthrized")
    }
    const response = await fetch(`https://ecommerce.routemisr.com/api/v2/cart/${productId}`,{
        method:"PUT",
        body:JSON.stringify({count}),
        headers:{
            token : token as string ,
            "content-type":"application/json"
        }
    })
    const data = await response.json();
    return data
}

export async function deleteAllProduct(){

    const token = await getUserToken();

    if(!token){
        throw new Error(" user is unauthrized")
    }
    const response = await fetch(`https://ecommerce.routemisr.com/api/v2/cart`,{
        method:"DELETE",
        headers:{
            token : token as string ,
            "content-type":"application/json"
        }
    })
    const data = await response.json();
    return data
}