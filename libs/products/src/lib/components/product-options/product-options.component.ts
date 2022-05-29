import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { NgtVector3 } from '@angular-three/core';
import { Mesh } from 'three';

@Component({
  selector: 'geometry-shop-product-options',
  templateUrl: './product-options.component.html',
  styleUrls: ['./product-options.component.scss'],
})
export class ProductOptionsComponent {
  color = 'red';
}
