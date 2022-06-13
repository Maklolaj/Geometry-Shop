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
    // this.store.pipe(
    //     select(selectAllProducts), // 'products'
    //     tap( products => {
    //         if(products.length === 0) {
    //             this.productService.getAllProducts()
    //             .pipe(
    //                 catchError((error) => {
    //                     console.log(error);
    //                     return EMPTY;
    //                 }),
    //                 map( (products:Product[]) => {
    //                     this.store.dispatch(retrieveProductList({products}));

    //                 })
    //             )
    //         }
    //         return products;
    //     })
    // )
    // const a:Product[] = []
    // return of(a);
    this.initProductsData();
    return this.waitForProfileDataToLoad();
  }

  initProductsData(): void {
    this.store.pipe(take(1)).subscribe((store) => {
      //if (store.products?.length === 0) {
      this.productService
        .getAllProducts()
        .toPromise()
        .then((products) => {
          console.log(products);
          products
            ? this.store.dispatch(retrieveProductList({ products }))
            : null;
        });
      //}
    });
  }

  waitForProfileDataToLoad(): Observable<any> {
    //should return Prodcut
    // return this.store.select('products').pipe(
    //     filter(products => !!products),
    //     take(1),
    // )
    //return this.store.pipe(select(selectAllProducts));
    let a: Product[] = [];
    return of(a);
  }
}
