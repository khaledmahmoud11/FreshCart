"use server"
import { getUserid } from "@/lib/authToken";

export async function getUserData(){
    const userId = await getUserid();
    if(!userId){
        throw new Error(" user is unauthrized")
    }
    const response = await fetch(`https://ecommerce.routemisr.com/api/v1/users/${userId}`,{
    method:"GET",

    })
    const data = await response.json();
    return data
}
