import { createAction, props } from '@ngrx/store';
import { Product } from '@geometry-shop/domain';

export const retrieveProductList = createAction(
  '[Load Products Effect] All products Loaded',
  props<{ products: Product[] }>()
);

export const selectProductId = createAction(
  '[Select Product Effect] Select product',
  props<{ productId: string }>()
);
