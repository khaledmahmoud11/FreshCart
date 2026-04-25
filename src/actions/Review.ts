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
export async function deleteReview(reviewId: string) {
    const token = await getUserToken();
    if (!token) throw new Error("user is unauthorized");

    const response = await fetch(`https://ecommerce.routemisr.com/api/v1/reviews/${reviewId}`, {
        method: "DELETE",
        headers: {
            token: token as string,
            "content-type": "application/json"
        }
    });

    if (!response.ok) {
        return { status: response.status, message: "Failed to delete" };
    }

    const responseText = await response.text();
    if (!responseText) return { message: "success" }; 

    try {
        return JSON.parse(responseText);
    } catch (e) {
        return { message: "success", raw: responseText };
    }
}

export async function editReview(data:CreateReviewTypeSchema,reviewId:string){

    const token = await getUserToken();

    if(!token){
        throw new Error(" user is unauthrized")
    }
    const response = await fetch(`https://ecommerce.routemisr.com/api/v1/reviews/${reviewId}`,{
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