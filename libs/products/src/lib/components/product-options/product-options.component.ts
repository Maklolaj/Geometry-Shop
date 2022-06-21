import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { NgtVector3 } from '@angular-three/core';
import { Mesh } from 'three';

@Component({
  selector: 'geometry-shop-product-options',
  templateUrl: './product-options.component.html',
  styleUrls: ['./product-options.component.scss'],
})
export class ProductOptionsComponent {
  color = 'red';

  @Output() 
  selectedColor: EventEmitter<string> = new EventEmitter();

  @Output()
  selectedSize: EventEmitter<number> = new EventEmitter();


  public colorChanged(colorName: string): string {
    this.color = colorName
    this.selectedColor.emit(colorName);
    return colorName
  }

  public productSizeChanged(productSize: any): void {
    this.selectedSize.emit(productSize.target.value);
  }
}
