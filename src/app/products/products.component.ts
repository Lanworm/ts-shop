import { Component, OnInit } from '@angular/core';
import { Product } from './product.model';
import { ProductService } from './product.service';

@Component({
  selector: 'ts-shop-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  private _products: Product[];
  private _filters: any = {};

  constructor(private productService: ProductService) { }

  get products(): Product[] {
    return this._products;
  }

  get filters(): any {
    return this._filters;
  }

  ngOnInit() {
    this.getProducts();
  }

  private getProducts(): void {
    this.productService.getProducts().subscribe((products: Product[]) => {
      this._products = products;
    },
    (error) => {
      console.log(error);
    });
  }

  public filterProducts(): void {
    this._filters = { ... this.filters};
  }

}
