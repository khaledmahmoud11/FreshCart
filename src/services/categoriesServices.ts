export async function getAllCategories(){
    const response = await fetch(`${process.env.BASE_URL}/categories`,{
        method:"GET",

    })
    const data = await response.json();
    return data

}
export async function getCategory(categoryID:string){
    const response = await fetch(`${process.env.BASE_URL}/categories/${categoryID}`,{
        method:"GET",

    })
    const data = await response.json();
    return data

}