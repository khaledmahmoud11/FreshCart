export interface ProductResponse {
  count: number;
  status: string;
  data: wishItemI[];
}

export interface wishItemI {
  _id: string;
  id: string;
  title: string;
  slug: string;
  description: string;
  imageCover: string;
  images: string[];
  price: number;
  priceAfterDiscount?:number;
  quantity: number;
  sold: number;
  ratingsAverage: number;
  ratingsQuantity: number;
  createdAt: string;
  updatedAt: string;
  __v: number;
  

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