export interface CartResponse {
    cartId: string;
    data: CartData;
    message: string;
    numOfCartItems: string;
    status:string; 
}

export interface CartData {
    _id: string;
    cartOwner: string;
    products: CartProduct[];
    createdAt: string;
    updatedAt?: string;
    totalCartPrice?: number;
    __v?: number;
}

export interface CartProduct {
    _id: string;
    count: number;
    price: number;
    priceAfterDiscount? :number;
    product: Product;
}

export interface Product {
    _id: string;
    id: string;
    title: string;
    slug: string;
    imageCover: string;
    quantity: number;
    ratingsAverage: number;

    brand: Brand;
    category: Category;
    subcategory: SubCategory[];
}

export interface Brand {
    _id: string;
    name: string;
    slug: string;
    image: string;
}

export interface Category {
    _id: string;
    name: string;
    slug: string;
    image: string;
}

export interface SubCategory {
    _id: string;
    name: string;
    slug: string;
    category: string;
}