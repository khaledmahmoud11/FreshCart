"use server";
import { getUserToken } from "@/lib/authToken";
import { CreateReviewTypeSchema} from "@/schemas/CreateReviewSchema";

export async function createReview(data:CreateReviewTypeSchema,productId:string){

    const token = await getUserToken();

    if(!token){
        throw new Error(" user is unauthrized")
    }
    const response = await fetch(`https://ecommerce.routemisr.com/api/v1/products/${productId}/reviews`,{
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