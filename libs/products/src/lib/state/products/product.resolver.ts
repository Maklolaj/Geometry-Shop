import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import {
  catchError,
  EMPTY,
  filter,
  map,
  Observable,
  of,
  subscribeOn,
  take,
  tap,
  timer,
} from 'rxjs';
import { select, Store } from '@ngrx/store';
import { ProductState } from './product.state';
import { ProductsService } from '../../services/products/products.service';
import { selectAllProducts } from './product.selectors';
import { retrieveProductList } from './products.actions';
import { Product } from '@geometry-shop/data-models';

@Injectable({ providedIn: 'root' })
export class ProductResolver implements Resolve<any> {
  constructor(
    private readonly store: Store<ProductState>,
    private readonly router: Router,
    private readonly productService: ProductsService
  ) {}

  resolve(route: ActivatedRouteSnapshot): Observable<any> {
    this.initProductsData();
    return this.waitForProfileDataToLoad();
  }

  initProductsData(): void {
    let productsLoaded = false;
    this.store.pipe(select(selectAllProducts)).pipe(take(1), map( (products) =>
      { return products.length > 0}
    )).subscribe ( (areLoaded) => {
      productsLoaded = areLoaded
    })

    this.store.pipe(take(1)).subscribe((store) => {
      if (!productsLoaded) {
      this.productService
        .getAllProducts()
        .toPromise()
        .then((products) => {
          console.log(products);
          products
            ? this.store.dispatch(retrieveProductList({ products }))
            : null;
        });
      }
    });
  }

  waitForProfileDataToLoad(): Observable<Product[]> {
    return this.store.pipe(select(selectAllProducts)).pipe(take(1));
  }
}
