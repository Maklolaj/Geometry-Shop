import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { NgtVector3 } from '@angular-three/core';
import { Curve, Mesh } from 'three';
import { Product, ProductOptions } from '@geometry-shop/domain';
import { select, Store } from '@ngrx/store';
import { Observable, take } from 'rxjs';
import {
  ProductSelectors,
  BasketSelectors,
  ProductState,
  ProductOptionsSelectors,
} from '@geometry-shop/data-access';
import { ProductOptionsState } from '@geometry-shop/data-access';

@Component({
  selector: 'geometry-shop-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductsComponent implements OnInit {
  public hovered = false;

  public active = false

  public size!: number;

  public selectedProductColor!:string;

  currentProduct: Observable<Product> = this.productStore.pipe(
    select(ProductSelectors.selectCurrentProduct)
  );

  productsInBasket: Observable<Product[]> = this.basketStore.pipe(
    select(BasketSelectors.selectAllBasketProducts)
  );

  productOptions: Observable<ProductOptionsState> = this.productOptionsStore.pipe(
    select(ProductOptionsSelectors.selectProductOptions)
  );

  constructor(
    private productStore: Store<ProductState>,
    private basketStore: Store<ProductState>,
    private productOptionsStore: Store<ProductOptionsState>,
  ) {}

  ngOnInit() {
    this.setupProductOptionsSubscription();
  }

  private setupProductOptionsSubscription() {
    this.productOptions.pipe(
      ).subscribe((productOption: ProductOptionsState) => {
        this.size = productOption.productOptions.size
        this.selectedProductColor = productOption.productOptions.color
      });
  }

  onBeforeRender(cube: Mesh) {
    cube.rotateY(0.01);
    cube.rotateX(0.01);
    cube.rotateZ(0.01);
  }
}
