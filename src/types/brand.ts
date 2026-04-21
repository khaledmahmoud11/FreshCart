export interface Brand {
    _id: string;
    name: string;
    slug: string;
    image: string;
    createdAt: string;
    updatedAt: string;
}

export interface Metadata {
    currentPage: number;
    limit: number;
    nextPage: number;
    numberOfPages: number;
}

export interface BrandsResponse {
    data: Brand[];
    metadata: Metadata;
    results: number;
}
export interface spesicficBrand{
    data:Brand
}