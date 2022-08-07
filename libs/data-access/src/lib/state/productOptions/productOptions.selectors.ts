import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ProductOptionsState } from './productOptions.state';

export const selectProductOptionsState =
  createFeatureSelector<ProductOptionsState>('productOptions');

export const selectProductOptions = createSelector(
  selectProductOptionsState,
  productOptionsState => productOptionsState
);
