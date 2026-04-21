export async function getSubCategoryOnCategory(categoryID:string){
    const response = await fetch(`${process.env.BASE_URL}/categories/${categoryID}/subcategories`,{
        method:"GET",

    })
    const data = await response.json();
    return data

}

export async function getSpecificSubCategory(subCategoryID:string){
    const response = await fetch(`${process.env.BASE_URL}/subcategories/${subCategoryID}`,{
        method:"GET",

    })
    const data = await response.json();
    return data

}