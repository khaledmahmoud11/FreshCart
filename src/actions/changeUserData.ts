"use server"
import { getUserToken } from "@/lib/authToken"
import { changeDataTypeShcema} from "@/schemas/AuthShemas";

export async function updateUserData(data :changeDataTypeShcema ){

    const token = await getUserToken();

    if(!token){
        throw new Error(" user is unauthrized")
    }
    const response = await fetch(`https://ecommerce.routemisr.com/api/v1/users/updateMe/`,{
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