import { Product } from '@geometry-shop/data-models';
import { createAction, props } from '@ngrx/store';

export const addToBasket = createAction(
  '[Add to balance Effect] Add to basket',
  props<{ product: Product }>()
);

export const clearBasket = createAction('[Clear balance Effect] Clear basket');
