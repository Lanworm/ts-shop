import {Component, OnInit, ViewChild} from '@angular/core';
import { Product } from './product.model';
import { ProductService } from './product.service';
import { ProductCategory } from './product-category.enum';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {TsShopFilterPipe} from '../pipes/ts-shop-filter.pipe';

@Component({
  selector: 'ts-shop-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  private _products: Product[];
  private _filters: any = {};
  private _isLoading: boolean = false;

  displayedColumns: string[] = ['name', 'price', 'weight', 'inStock', 'category', 'volume'];

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  dataSource: MatTableDataSource<Product>;

  constructor(private productService: ProductService) { }

  get products(): Product[] {
    return this._products;
  }

  get filters(): any {
    return this._filters;
  }

  get isLoading(): boolean {
    return this._isLoading;
  }

  ngOnInit() {
    this.getProducts();
  }

  private getProducts(): void {
    this._isLoading = true;
    this.productService.getProducts().subscribe((products: Product[]) => {
      this._products = products;
      this.dataSource = new MatTableDataSource(this._products);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
      this._isLoading = false;
    },
    (error) => {
      console.log(error);
      this._isLoading = false;
    });
  }

  public filterProducts(): void {
    this._filters = { ... this.filters};
    this.dataSource = new MatTableDataSource(new TsShopFilterPipe().transform(this._products, this.filters));
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  public isFiltersEmpty(): boolean {
    return !this.filters || Object.keys(this.filters).length === 0;
  }

  public clearFilters(): void {
    this._filters = {};
  }

  private isDeviceNotAvailable(product: Product): boolean {
    return product.inStock === 0;
  }

  public isNotAvailable(product: Product): boolean {
    if (product.category === ProductCategory.DEVICE) {
      return this.isDeviceNotAvailable(product);
    }
    return false;
  }

  public setAvailabilityColour(product: Product): any {
    return {
      'background-color': this.isNotAvailable(product) ? '#e2cdcd' : 'inherit'
    };
  }

}
