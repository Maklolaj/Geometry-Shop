import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasketSummaryComponent } from './containers/basket-summary/basket-summary.component';
import { MaterialModule } from '@geometry-shop/material';
import { StoreModule } from '@ngrx/store';
import { BasketReducer } from '@geometry-shop/data-access';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    StoreModule.forFeature('basket', BasketReducer.basketReducer),
  ],
  declarations: [BasketSummaryComponent],
  exports: [BasketSummaryComponent],
})
export class FeaturesModule {}
