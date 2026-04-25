"use server"
import { getUserToken } from "@/lib/authToken"
import { CheckOutTypeShcema } from "@/schemas/CheckOutSchema";


export async function orderCash(data: CheckOutTypeShcema, cartId: string) {
    const token = await getUserToken();

    if (!token) {
        throw new Error("user is unauthorized");
    }
    const response = await fetch(`https://ecommerce.routemisr.com/api/v1/orders/${cartId}`, {
        method: "POST",
        headers: {
            "token": token as string,
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            shippingAddress: data
        }),
    });
    const responseData = await response.json();
    return responseData;
}

export async function orderOnline(data: CheckOutTypeShcema, cartId: string) {
    const token = await getUserToken();
    if (typeof window !== "undefined") {
        const response = await fetch(`https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${cartId}?url=${process.env.NEXTAUTH_URL}`, {
            method: "POST",
            headers: {
                "token": token as string,
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                shippingAddress: data
            }),
        });
        const responseData = await response.json();
        return responseData;
    }

}