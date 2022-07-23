import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { Product } from '@geometry-shop/domain';
import { compose, select, Store } from '@ngrx/store';
import {
  BasketActions,
  BasketSelectors,
  ProductActions,
  ProductState,
  BasketState,
} from '@geometry-shop/data-access';
import { Observable, of, take, mergeMap, map } from 'rxjs';

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
      .pipe(select(BasketSelectors.selectAllBasketProducts))
      .pipe(
        map((basketList: Product[]) => basketList.indexOf(this.product) > -1)
      );
  }

  public showProduct(productId: string): void {
    this.productStore.dispatch(ProductActions.selectProductId({ productId }));
  }

  public addToBasket(product: Product): void {
    this.basketStore.dispatch(BasketActions.addToBasket({ product }));
  }

  public removeFromBasket(product: Product): void {
    this.basketStore.dispatch(BasketActions.removeFromBasket({ product }));
  }
}
