import { AxiosResponse } from "axios";
import { instance } from "../instance";
import { ProductType, ProductsType } from "../../types/ProductTypes";
import { CategoryType } from "../../types/CategoryTypes";

export class ProductService {
  static getByCategory(
    category: string,
    limit: number | null = null
  ): Promise<AxiosResponse<ProductsType>> {
    return instance.get(`/products/category/${category}`, {
      params: { limit },
    });
  }

  static getCategories(): Promise<AxiosResponse<CategoryType[]>> {
    return instance.get("/products/categories");
  }

  static getById(id: string): Promise<AxiosResponse<ProductType>> {
    return instance.get(`/products/${id}`);
  }

  static getAll(q?: string): Promise<AxiosResponse<ProductsType>> {
    return instance.get(`/products${q ? "/search" : ""}`, { params: { q } });
  }
}
