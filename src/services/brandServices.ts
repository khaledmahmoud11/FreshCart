export async function getAllBrands(){
    const response = await fetch(`${process.env.BASE_URL}/brands`,{
        method:"GET",

    })
    const data = await response.json();
    return data

}
export async function getBrand(brandID:string){
    const response = await fetch(`${process.env.BASE_URL}/brands/${brandID}`,{
        method:"GET",

    })
    const data = await response.json();
    return data

}