import { CustomProduct } from '@geometry-shop/domain';
import { createAction, props } from '@ngrx/store';

export const addToBasket = createAction(
  '[Add to basket Effect] Add to basket',
  props<{ product: CustomProduct }>()
);

export const removeFromBasket = createAction(
  '[Remove from basket Effect] Remove from basket',
  props<{ product: CustomProduct }>()
);

export const clearBasket = createAction('[Clear balance Effect] Clear basket');
