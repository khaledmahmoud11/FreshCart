export interface SubCategoriesResponse {
    data: SubCategory[];
    metadata: Metadata;
    results: number;
}
export interface Metadata {
    currentPage: number;
    limit: number;
    numberOfPages: number;
}
export interface SubCategory {
    _id: string;
    name: string;
    slug: string;
    category: string;
    createdAt: string;
    updatedAt: string;
}
export interface SubCategoryResponse{
    data:SubCategory;
}
