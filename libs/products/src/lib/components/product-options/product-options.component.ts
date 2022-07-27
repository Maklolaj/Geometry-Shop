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
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductOptionsComponent {

  private scale = 1;

  @Output() 
  selectedColor: EventEmitter<string> = new EventEmitter();

  @Output()
  selectedSize: EventEmitter<number> = new EventEmitter();
  
  public color = '#8393d0';

  public get getScale() {
    return this.scale
  }

  public set setScale(x:number) {
    this.scale = x
  }

  constructor(private store: Store<ProductState>) {}

  public colorChanged(colorName: string): string {
    this.color = colorName
    this.selectedColor.emit(colorName);
    return colorName
  }

  public onIncreaseSize(): void {
    this.scale < 2 ? this.setScale = this.getScale + 0.1 : null
    this.selectedSize.emit(this.getScale)
  }

  public onDecreaseSize(): void {
    this.scale > 0.5 ? this.setScale = this.getScale - 0.1 : null
    this.selectedSize.emit(this.getScale)
  }
}
