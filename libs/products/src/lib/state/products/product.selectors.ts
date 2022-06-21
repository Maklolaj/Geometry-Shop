import { createFeatureSelector, createSelector, State } from '@ngrx/store';
import { ProductState } from './product.state';

import * as fromProducts from './product.reducer';
import { Dictionary } from '@ngrx/entity';

export const selectProductsState =
  createFeatureSelector<ProductState>('products');

export const selectAllProducts = createSelector(
  selectProductsState as any,
  fromProducts.selectAll
);


export const selectProductEntities = createSelector(
  selectProductsState as any,
  fromProducts.selectEntities
);

export const selectCurrentProductId = createSelector(
  selectProductsState as any,
  fromProducts.getSelectedProductId
);
 
export const selectCurrentProduct = createSelector(
  selectProductEntities,
  selectCurrentProductId,
  (productEntities, productId) => productEntities[productId]!
);
