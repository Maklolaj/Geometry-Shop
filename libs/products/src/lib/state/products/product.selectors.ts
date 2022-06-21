import { createFeatureSelector, createSelector, State } from '@ngrx/store';
// import { ProductState } from './product.state';
import { ProductsState } from './product.reducer'
import * as fromProducts from './product.reducer';
import { Dictionary } from '@ngrx/entity';
import { Product } from '@geometry-shop/data-models';

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
  (productsState) => productsState.basket
);

// export const selectBasketBalance = createSelector(
//   selectProductsState,
//   (productsState) => {
//     let total = 0;
//     productsState.basket.forEach( (product:Product) => {
//       total += product.price;
//     })
//     return total
//   }
// )