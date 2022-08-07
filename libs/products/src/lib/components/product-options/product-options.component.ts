import {
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';
import {
  ProductOptionsActions,
} from '@geometry-shop/data-access';
import { Store } from '@ngrx/store';
import { ProductOptionsState } from '@geometry-shop/data-access';

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
