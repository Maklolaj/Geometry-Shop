import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Product } from '@geometry-shop/data-models';

@Component({
  selector: 'geometry-shop-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss'],
})
export class ProductItemComponent {
   //TODO change detection on push?
  @Input() product!: Product;


}
