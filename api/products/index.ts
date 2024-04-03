import { ProductService } from "./service";

export const getProductByCategory = (category: string, limit?: number) => {
  return ProductService.getByCategory(category, limit);
};

export const getProductCategories = () => {
  return ProductService.getCategories();
};
export const getProductById = (id: string) => {
  return ProductService.getById(id);
};
export const getAllProducts = (q?: string) => {
  return ProductService.getAll(q);
};

export class ProductsApi {
  static getProductByCategory = (category: string, limit?: number) => {
    return ProductService.getByCategory(category, limit);
  };

  static getProductCategories = () => {
    return ProductService.getCategories();
  };

  static getProductById = (id: string) => {
    return ProductService.getById(id);
  };

  static getAllProducts = (q?: string) => {
    return ProductService.getAll(q);
  };
}
