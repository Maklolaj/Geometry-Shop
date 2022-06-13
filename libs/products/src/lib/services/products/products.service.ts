import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '@geometry-shop/data-models';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private httpClient: HttpClient) {}

  getAllProducts(): Observable<Product[]> {
    return this.httpClient.get<Product[]>('http://localhost:4200/api/products');
  }
}
