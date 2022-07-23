import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { NgtVector3 } from '@angular-three/core';
import { Mesh } from 'three';
import { Observable } from 'rxjs';
import { ProductState } from '@geometry-shop/data-access';
import { select, Store } from '@ngrx/store';

@Component({
  selector: 'geometry-shop-product-options',
  templateUrl: './product-options.component.html',
  styleUrls: ['./product-options.component.scss'],
})
export class ProductOptionsComponent {
  color = 'red';

  // productsBasket: Observable<number> = this.store.pipe(select(selectBasketBalance));

  @Output() 
  selectedColor: EventEmitter<string> = new EventEmitter();

  @Output()
  selectedSize: EventEmitter<number> = new EventEmitter();

  constructor(private store: Store<ProductState>) {}

  public colorChanged(colorName: string): string {
    this.color = colorName
    this.selectedColor.emit(colorName);
    return colorName
  }

  public productSizeChanged(productSize: any): void {
    this.selectedSize.emit(productSize.target.value);
  }
}
