export interface User {
    data:userData
}
export interface userData{
    _id: string;
    name: string;
    email: string;
    password: string;
    phone: string;
    role: string;
    active: boolean;
    addresses: string[];
    wishlist: string[];
    createdAt: string;
    updatedAt: string;
    passwordChangedAt: string;
    __v: number;
}