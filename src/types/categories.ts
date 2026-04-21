export interface Category {
    _id: string;
    name: string;
    slug: string;
    image: string;
    createdAt: string;
    updatedAt: string;
}
export interface CategoryResponse{
    data:Category;
}
export interface Metadata {
    currentPage: number;
    limit: number;
    numberOfPages: number;
}
export interface CategoriesI {
    results: number;
    metadata: Metadata;
    data: Category[];
}