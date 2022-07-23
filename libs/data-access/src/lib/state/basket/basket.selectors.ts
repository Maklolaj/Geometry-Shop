import { createFeatureSelector, createSelector } from '@ngrx/store';
import { BasketState } from './basket.reducer';
import * as fromBasket from './basket.reducer';
import { Product } from '@geometry-shop/domain';

export const selectBasketState = createFeatureSelector<BasketState>('basket');

export const selectAllBasketProducts = createSelector(
  selectBasketState,
  fromBasket.selectAll
);

export const selectBasketBalance = createSelector(
  selectAllBasketProducts,
  (basketProducts) => {
    let total = 0;
    basketProducts.forEach((element) => {
      total = total + element.price;
    });
    return total;
  }
);
