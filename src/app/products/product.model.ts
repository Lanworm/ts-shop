import { ProductCategory } from "./product-category.enum";

export class Product {

    constructor(public name: string,
    public price: number,
    public weight: number,
    public inStock: number,
    public category: ProductCategory,
    public volume: number) {}

}
