"use server"
import { getUserToken } from "@/lib/authToken"
import { changePasswordTypeShcema } from "@/schemas/AuthShemas";

export async function updatePassword(data :changePasswordTypeShcema ){

    const token = await getUserToken();

    if(!token){
        throw new Error(" user is unauthrized")
    }
    const response = await fetch(`https://ecommerce.routemisr.com/api/v1/users/changeMyPassword`,{
        method:"PUT",
        body:JSON.stringify(data),
        headers:{
            token : token as string ,
            "content-type":"application/json"
        }
    })
    const ResponsedData = await response.json();
    return ResponsedData
}