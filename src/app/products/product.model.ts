import { ProductCategory } from "./product-category.enum";

export interface Product {

  name: string;
  price: number;
  weight: number;
  inStock: number;
  category: ProductCategory;
  volume: number;

}
