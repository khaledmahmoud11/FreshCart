export async function getAllProducts(categoryId?:string , brandId?:string , subcategoryId?:string ){
    const baseUrl = `${process.env.BASE_URL}/products`;
    const url = 
    categoryId ? `${process.env.BASE_URL}/products?category[in]=${categoryId}` 
    : brandId ? `${process.env.NEXT_PUBLIC_BASE_URL}/products?brand=${brandId}`     
    :subcategoryId ? `${process.env.BASE_URL}/products?subcategory=${subcategoryId}`
    : baseUrl
    const response = await fetch(url,{
        method:"GET",
    })
    const data = await response.json();
    return data
}

export async function getfilteredProducts(filters?: {
    category?: string;
    brand?: string;
    subcategory?: string;
    minPrice?: string;
    maxPrice?: string;
    sort?: string;
    search?: string;
    }) {
    const baseUrl = `${process.env.BASE_URL}/products`;

    const params = new URLSearchParams();

    // category
    if (filters?.category) {
        params.append("category[in]", filters.category);
    }

    // brand
    if (filters?.brand) {
        params.append("brand", filters.brand);
    }

    // subcategory
    if (filters?.subcategory) {
        params.append("subcategory", filters.subcategory);
    }

    // price range
    if (filters?.minPrice) {
        params.append("price[gte]", filters.minPrice);
    }

    if (filters?.maxPrice) {
        params.append("price[lte]", filters.maxPrice);
    }

    // sorting
    if (filters?.sort) {
        params.append("sort", filters.sort);
    }

    // search
    if (filters?.search) {
        params.append("keyword", filters.search);
    }

    const url = `${baseUrl}?${params.toString()}`;

    const res = await fetch(url, {
        method: "GET",
        cache: "no-store",
    });

    return res.json();
}