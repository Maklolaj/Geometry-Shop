import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasketSummaryComponent } from './containers/basket-summary/basket-summary.component';
import { MaterialModule } from '@geometry-shop/material';
import { StoreModule } from '@ngrx/store';
import { BasketReducer, userProfileReducers } from '@geometry-shop/data-access';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { NgrxFormsModule } from 'ngrx-forms';
import { CustomErrorStateMatcherDirective } from './components/error-state-matcher/error-state-matcher';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    NgrxFormsModule,
    StoreModule.forFeature('basket', BasketReducer.basketReducer),
    StoreModule.forFeature('userProfile', userProfileReducers),
  ],
  declarations: [
    BasketSummaryComponent,
    UserProfileComponent,
    CustomErrorStateMatcherDirective,
  ],
  exports: [BasketSummaryComponent, CustomErrorStateMatcherDirective],
})
export class FeaturesModule {}
