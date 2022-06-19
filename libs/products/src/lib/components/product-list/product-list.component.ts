import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import {
  FixedSizeVirtualScrollStrategy,
  VIRTUAL_SCROLL_STRATEGY,
} from '@angular/cdk/scrolling';
import { Product } from '@geometry-shop/data-models';
import { select, Store } from '@ngrx/store';
import { selectAllProducts } from '../../state/products/product.selectors';
import { Observable, of } from 'rxjs';
import { ProductState } from '../../state/products/product.state';
import { selectAll } from '../../state/products/product.reducer';
export class CustomVirtualScrollStrategy extends FixedSizeVirtualScrollStrategy {
  constructor() {
    super(50, 250, 500);
  }
}

@Component({
  selector: 'geometry-shop-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    { provide: VIRTUAL_SCROLL_STRATEGY, useClass: CustomVirtualScrollStrategy },
  ],
})
export class ProductListComponent implements OnInit {
  items = Array.from({ length: 40 }).map((_, i) => `Item #${i}`);

  products: Product[] = [];

  constructor(private store: Store<ProductState>) {}

  products$: Observable<Product[]> = of();

  ngOnInit() {
    this.products$ = this.store.pipe(select(selectAllProducts));
    this.products$.subscribe((a) => console.log(a));
  }
}
