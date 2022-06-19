import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Product } from '@geometry-shop/data-models';
import { compose, select, Store } from '@ngrx/store';
import { selectCurrentProduct } from 'libs/products/src/lib/state/products/product.selectors';
import { ProductState } from 'libs/products/src/lib/state/products/product.state';
import { selectProductId } from 'libs/products/src/lib/state/products/products.actions';
import { take } from 'rxjs';

@Component({
  selector: 'geometry-shop-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss'],
})
export class ProductItemComponent {
   //TODO change detection on push?
  @Input() product!: Product;
  constructor(private readonly store: Store<ProductState>,) {  
  }

  showProduct(productId: string): void {
    console.log(productId)
    this.store.dispatch(selectProductId({ productId }))
    this.store.pipe(take(1),select(selectCurrentProduct)).subscribe( (x) =>{
      console.log(x)
    })
  }
}
