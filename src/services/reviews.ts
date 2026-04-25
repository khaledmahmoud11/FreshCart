export async function getReviews(productId:string){
    const response = await fetch(`https://ecommerce.routemisr.com/api/v1/products/${productId}/reviews`,{
        method:"GET",

    })
    const data = await response.json();
    return data

}