interface Brand {
  _id: string;
  name: string;
  slug: string;
  image: string;
}

interface Category {
  _id: string;
  name: string;
  slug: string;
  image: string;
}

interface SubCategory {
  _id: string;
  name: string;
  slug: string;
  category: string;
}

interface Product {
  _id: string;
  id: string;
  title: string;
  imageCover: string;
  ratingsAverage: number;
  ratingsQuantity: number;
  brand: Brand;
  category: Category;
  subcategory: SubCategory[];
}

interface CartItem {
  _id: string;
  count: number;
  price: number;
  product: Product;
}

interface ShippingAddress {
  details: string;
  phone: string;
  city: string;
}

interface User {
  _id: string;
  name: string;
  email: string;
  phone: string;
}

export interface Order {
  _id: string;
  id: number;
  cartItems: CartItem[];
  createdAt: string;
  updatedAt: string;
  isDelivered: boolean;
  isPaid: boolean;
  paymentMethodType: string;
  shippingAddress: ShippingAddress;
  shippingPrice: number;
  taxPrice: number;
  totalOrderPrice: number;
  user: User;
  __v: number;
}