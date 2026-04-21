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
export interface metadata {
  currentPage: number;
  numberOfPages: number;
  limit: number;
  prevPage: number;
}



export interface Products{
  data:Product[];
  metadata: metadata;
}

export interface Product {
  _id: string;
  id: string;
  title: string;
  slug: string;
  description: string;

  price: number;
  quantity: number;
  sold: number;

  imageCover: string;
  images: string[];

  ratingsAverage: number;
  ratingsQuantity: number;

  brand: Brand;
  category: Category;
  subcategory: SubCategory[];

  createdAt: string;
  updatedAt: string;
  priceAfterDiscount?:number;
}