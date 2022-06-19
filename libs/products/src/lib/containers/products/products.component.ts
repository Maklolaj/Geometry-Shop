import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { NgtVector3 } from '@angular-three/core';
import { Curve, Mesh } from 'three';
import { Product } from '@geometry-shop/data-models';

@Component({
  selector: 'geometry-shop-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductsComponent implements OnInit{
  @Input() position?: NgtVector3;

  //@Input() productList?: Product[];

  hovered = false;
  active = false;

  ngOnInit() {
    //console.log(this.productList)
  }

  onBeforeRender(cube: Mesh) {
    cube.rotateY(0.01);
    cube.rotateX(0.01);
    // cube.rotation.x += 0.01;
    // cube.rotation.y += 0.01;
    cube.rotateZ(0.01);
  }
}
