import { HttpClient } from '@angular/common/http'; 
import { Injectable } from '@angular/core';
import { Product } from './product.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  public getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>('../../assets/products.json');
  }

}
