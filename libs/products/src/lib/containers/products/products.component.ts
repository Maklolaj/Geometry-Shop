import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { NgtVector3 } from '@angular-three/core';
import { Curve, Mesh } from 'three';
import { Product } from '@geometry-shop/domain';
import { ProductState } from '../../state/products/product.state';
import { select, Store } from '@ngrx/store';
import { Observable, take } from 'rxjs';
import { selectCurrentProduct } from '../../state/products/product.selectors';
import {
  selectAllBasketProducts,
  selectBasketBalance,
} from '../../state/basket/basket.selectors';

@Component({
  selector: 'geometry-shop-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductsComponent implements OnInit {
  @Input() position?: NgtVector3;

  currentProduct: Observable<Product> = this.productStore.pipe(
    select(selectCurrentProduct)
  );

  productsInBasket: Observable<Product[]> = this.basketStore.pipe(
    select(selectAllBasketProducts)
  );

  totalPrice: Observable<number> = this.basketStore.pipe(
    select(selectBasketBalance)
  );

  constructor(
    private productStore: Store<ProductState>,
    private basketStore: Store<ProductState>
  ) {}

  hovered = false;
  active = false;

  selectedProductColor = 'tomato';

  ngOnInit() {}

  onBeforeRender(cube: Mesh) {
    cube.rotateY(0.01);
    cube.rotateX(0.01);
    // cube.rotation.x += 0.01;
    // cube.rotation.y += 0.01;
    cube.rotateZ(0.01);
  }

  public selectedColor(color: string): void {
    this.selectedProductColor = color;
  }

  public selectedSize(size: number): void {
    console.log(size);
  }
}
