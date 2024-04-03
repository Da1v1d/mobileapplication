import { AxiosResponse } from "axios";
import { instance } from "../instance";
import { Product, Products } from "../../types/ProductTypes";
import { CategoryType } from "../../types/CategoryTypes";

export class ProductService {
  static getByCategory(
    category: string,
    limit: number | null = null
  ): Promise<AxiosResponse<Products>> {
    return instance.get(`/products/category/${category}`, {
      params: { limit },
    });
  }

  static getCategories(): Promise<AxiosResponse<CategoryType[]>> {
    return instance.get("/products/categories");
  }

  static getById(id: string): Promise<AxiosResponse<Product>> {
    return instance.get(`/products/${id}`);
  }

  static getAll(q?: string): Promise<AxiosResponse<Products>> {
    return instance.get(`/products${q ? "/search" : ""}`, { params: { q } });
  }
}
