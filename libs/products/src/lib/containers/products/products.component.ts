import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { NgtVector3 } from '@angular-three/core';
import { Curve, Mesh } from 'three';

@Component({
  selector: 'geometry-shop-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductsComponent {
  @Input() position?: NgtVector3;

  hovered = false;
  active = false;

  onBeforeRender(cube: Mesh) {
    cube.rotateY(0.01);
    cube.rotateX(0.01);
    // cube.rotation.x += 0.01;
    // cube.rotation.y += 0.01;
    cube.rotateZ(0.01);
  }
}
