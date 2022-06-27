import { createFeatureSelector, createSelector } from '@ngrx/store';
import { BasketState } from './basket.reducer';
import * as fromBasket from './basket.reducer';
import { Product } from '@geometry-shop/data-models';

export const selectBasketState = createFeatureSelector<BasketState>('basket');

export const selectAllBasketProducts = createSelector(
  selectBasketState,
  fromBasket.selectAll
);

export const selectBasketBalance = createSelector(
  selectBasketState,
  (basketState) => {
    return basketState.totalBalance;
  }
);
