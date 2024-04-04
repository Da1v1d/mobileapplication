import { ProductService } from "./service";

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
