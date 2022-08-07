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
  private size: number = 1;

  color = '#8393d0';

  get getSize() {
    return this.size;
  }

  set setSize(newSize: number) {
    this.size = newSize;
  }

  constructor(private productOptionsStore: Store<ProductOptionsState>) {}

  public colorChanged(color: string): void {
    // slow down emitting new colors? 
    this.productOptionsStore.dispatch(
      ProductOptionsActions.addProductOptions({
        productOptions: {
          size: this.size,
          color: this.color
        }
      })
    );
  }

  public onIncreaseSize(): void {
    if (this.getSize < 2) {
      this.setSize = this.getSize + 0.1;
      this.productOptionsStore.dispatch(
        ProductOptionsActions.addProductOptions({
          productOptions: {
            size: this.size,
            color: this.color
          }
        })
      );
    }
  }

  public onDecreaseSize(): void {
    if (this.getSize > 0.5) {
      this.setSize = this.getSize - 0.1;
      this.productOptionsStore.dispatch(
        ProductOptionsActions.addProductOptions({
          productOptions: {
            size: this.size,
            color: this.color
          }
        })
      );
    }
  }
}
