import { CategoryType } from "./CategoryTypes";

export interface ProductsType {
  products: ProductType[];
  total: number;
  skip: number;
  limit: number;
}

export interface ProductType {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: CategoryType;
  thumbnail: string;
  images: string[];
}
