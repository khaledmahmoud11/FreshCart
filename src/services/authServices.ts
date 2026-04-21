import { loginTypeShcema, registerTypeShcema } from "@/schemas/AuthShemas";

export async function registerUSer(data:registerTypeShcema){
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/auth/signup`,{
        method:"POST",
        body:JSON.stringify(data),
        headers:{
            "content-type":"application/json"
        }
    });
    const responseData = await response.json();
    return responseData;
}
export async function loginUSer(data:loginTypeShcema){
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/auth/signin`,{
        method:"POST",
        body:JSON.stringify(data),
        headers:{
            "content-type":"application/json"
        }
    });
    const responseData = await response.json();
    return responseData;
}