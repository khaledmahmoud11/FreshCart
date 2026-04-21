export async function getReviews(productId:string){
    const response = await fetch(`${process.env.BASE_URL}/products/${productId}/reviews`,{
        method:"GET",

    })
    const data = await response.json();
    return data

}