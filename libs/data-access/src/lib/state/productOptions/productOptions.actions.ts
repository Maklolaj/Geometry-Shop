import { createAction, props } from '@ngrx/store';
import { ProductOptions } from '@geometry-shop/domain';

export const addProductOptions = createAction(
  '[Addp roduct options Effect] Add product options',
  props<{ productOptions: ProductOptions }>()
);

export const selectProductOptions = createAction(
  '[Select Product Options Effect] Select product options'
);
