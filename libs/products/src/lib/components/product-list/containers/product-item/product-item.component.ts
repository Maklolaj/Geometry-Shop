import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { Product } from '@geometry-shop/domain';
import { compose, select, Store } from '@ngrx/store';
import {
  addToBasket,
  removeFromBasket,
} from 'libs/products/src/lib/state/basket/basket.actions';
import { BasketState } from 'libs/products/src/lib/state/basket/basket.state';
import { selectCurrentProduct } from 'libs/products/src/lib/state/products/product.selectors';
import { ProductState } from 'libs/products/src/lib/state/products/product.state';
import { selectProductId } from 'libs/products/src/lib/state/products/products.actions';
import { Observable, of, take, mergeMap, map } from 'rxjs';
import { selectAllBasketProducts } from '../../../../state/basket/basket.selectors';

@Component({
  selector: 'geometry-shop-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss'],
})
export class ProductItemComponent implements OnInit {
  //TODO change detection on push?
  @Input() product!: Product;
  constructor(
    private readonly productStore: Store<ProductState>,
    private readonly basketStore: Store<BasketState>
  ) {}

  isInBasket: Observable<boolean> = of(false);

  ngOnInit(): void {
    this.isInBasket = this.basketStore
      .pipe(select(selectAllBasketProducts))
      .pipe(
        map((basketList: Product[]) => basketList.indexOf(this.product) > -1)
      );
  }

  public showProduct(productId: string): void {
    this.productStore.dispatch(selectProductId({ productId }));
  }

  public addToBasket(product: Product): void {
    this.basketStore.dispatch(addToBasket({ product }));
  }

  public removeFromBasket(product: Product): void {
    this.basketStore.dispatch(removeFromBasket({ product }));
  }
}
