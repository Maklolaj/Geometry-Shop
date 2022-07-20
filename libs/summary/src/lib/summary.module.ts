import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasketSummaryComponent } from './containers/basket-summary/basket-summary.component';
import { MaterialModule } from '@geometry-shop/material';
import { StoreModule } from '@ngrx/store';
import { basketReducer } from 'libs/products/src/lib/state/basket/basket.reducer';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    StoreModule.forFeature('basket', basketReducer),
  ],
  declarations: [BasketSummaryComponent],
  exports: [BasketSummaryComponent],
})
export class SummaryModule {}
