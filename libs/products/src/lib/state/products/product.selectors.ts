import { createFeatureSelector, createSelector, State } from '@ngrx/store';
// import { ProductState } from './product.state';
import { ProductsState } from './product.reducer'
import * as fromProducts from './product.reducer';
import { Dictionary } from '@ngrx/entity';

export const selectProductsState =
  createFeatureSelector<ProductsState>('products');

export const selectAllProducts = createSelector(
  selectProductsState,
  fromProducts.selectAll
);


export const selectProductEntities = createSelector(
  selectProductsState,
  fromProducts.selectEntities
);

export const selectCurrentProductId = createSelector(
  selectProductsState,
  fromProducts.getSelectedProductId
);
 
export const selectCurrentProduct = createSelector(
  selectProductEntities,
  selectCurrentProductId,
  (productEntities, productId) => productEntities[productId]!
);

export const selectBasketProducts = createSelector(
  selectProductsState,
  (ProductsState) => ProductsState.basket
);
