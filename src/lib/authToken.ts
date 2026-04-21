import { decode } from "next-auth/jwt";
import { cookies } from "next/headers";

export async function getUserToken(){
    
    const decodedToken = (await cookies()).get("next-auth.session-token")?.value || (await cookies()).get("__Secure-next-auth.session-token")?.value ;
    const token = await decode({token:decodedToken,secret:process.env.AUTH_SECRET !})
    return token?.token;

}
export async function getUserid(){
    
    const decodedToken = (await cookies()).get("next-auth.session-token")?.value || (await cookies()).get("__Secure-next-auth.session-token")?.value;
    const token = await decode({token:decodedToken,secret:process.env.AUTH_SECRET !})
    return token?.sub;

}

