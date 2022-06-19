import { createFeatureSelector, createSelector, State } from '@ngrx/store';
import { ProductState } from './product.state';

import * as fromProducts from './product.reducer';

export const selectProductsState =
  createFeatureSelector<ProductState>('products');

export const selectAllProducts = createSelector(
  selectProductsState as any,
  fromProducts.selectAll
);
