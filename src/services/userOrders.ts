export async function getUserOrders(usertId:string){
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/orders/user/${usertId}`,{
        method:"GET",

    })
    const data = await response.json();
    return data

}