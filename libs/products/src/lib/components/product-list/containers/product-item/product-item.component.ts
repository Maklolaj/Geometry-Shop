import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { CustomProduct, Product } from '@geometry-shop/domain';
import { select, Store } from '@ngrx/store';
import {
  BasketActions,
  BasketSelectors,
  ProductActions,
  ProductState,
  BasketState,
} from '@geometry-shop/data-access';
import { Observable, of, map } from 'rxjs';

@Component({
  selector: 'geometry-shop-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductItemComponent implements OnInit {
  @Input() product!: Product;
  constructor(
    private readonly productStore: Store<ProductState>,
    private readonly basketStore: Store<BasketState>
  ) {}

  isInBasket: Observable<boolean> = of(false);

  ngOnInit(): void {
    this.setupBasketSelectionStatus();
  }

  private setupBasketSelectionStatus(): void {
    this.isInBasket = this.basketStore
      .pipe(select(BasketSelectors.selectAllBasketProducts))
      .pipe(
        map((basketList: Product[]) => basketList.indexOf(this.product) > -1)
      );
  }

  public showProduct(productId: string): void {
    this.productStore.dispatch(ProductActions.selectProductId({ productId }));
  }

  public addToBasket(value: Product): void {
    // Add Product options store
    const product: CustomProduct = { ...value, size: 10, color: 'red' };
    this.basketStore.dispatch(BasketActions.addToBasket({ product }));
  }

  public removeFromBasket(value: Product): void {
    // Add Product options store
    const product: CustomProduct = { ...value, size: 10, color: 'red' };
    this.basketStore.dispatch(BasketActions.removeFromBasket({ product }));
  }
}
