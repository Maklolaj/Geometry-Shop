import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ProductOptionsState } from './productOptions.reducer';
import * as fromProductOptionss from './productOptions.reducer';

export const selectProductOptionsState =
  createFeatureSelector<ProductOptionsState>('productOptions');

export const selectProductOptions = createSelector(
  selectProductOptionsState,
  fromProductOptionss.selectAll
);
