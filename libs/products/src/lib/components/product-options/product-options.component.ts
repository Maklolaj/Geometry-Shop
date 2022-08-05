import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { NgtVector3 } from '@angular-three/core';
import { Mesh } from 'three';
import { Observable } from 'rxjs';
import {
  ProductOptionsActions,
  ProductState,
} from '@geometry-shop/data-access';
import { select, Store } from '@ngrx/store';
import { ProductOptionsState } from 'libs/data-access/src/lib/state/productOptions/productOptions.reducer';
import { ProductOptions } from '@geometry-shop/domain';

@Component({
  selector: 'geometry-shop-product-options',
  templateUrl: './product-options.component.html',
  styleUrls: ['./product-options.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductOptionsComponent {
  private productOptions: ProductOptions = {
    size: 1,
    color: '#8393d0',
  };

  get getColor() {
    return this.productOptions.color;
  }

  get getSize() {
    return this.productOptions.size;
  }

  constructor(private productOptionsStore: Store<ProductOptionsState>) {}

  public colorChanged(colorName: string): void {
    this.productOptions.color = colorName;
    this.productOptionsStore.dispatch(
      ProductOptionsActions.addProductOptions({
        productOptions: this.productOptions,
      })
    );
  }

  public onIncreaseSize(): void {
    if (this.productOptions.size < 2) {
      this.productOptions.size + 0.1;
      this.productOptionsStore.dispatch(
        ProductOptionsActions.addProductOptions({
          productOptions: this.productOptions,
        })
      );
    }
  }

  public onDecreaseSize(): void {
    if (this.productOptions.size > 0.5) {
      this.productOptions.size - 0.1;
      this.productOptionsStore.dispatch(
        ProductOptionsActions.addProductOptions({
          productOptions: this.productOptions,
        })
      );
    }
  }
}
