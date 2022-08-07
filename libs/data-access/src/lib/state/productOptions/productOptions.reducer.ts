import { ProductOptions } from '@geometry-shop/domain';
import { createReducer, on, State } from '@ngrx/store';
import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { ProductOptionsActions } from '@geometry-shop/data-access';
import { ProductOptionsState } from './productOptions.state';

// export interface ProductOptionsState {
//   productOptions: ProductOptions;
// }

const productOptions: ProductOptions = {
  size:1,
  color: '#5767a1'
}
export const initialProductOptionsState: ProductOptionsState = {productOptions}

export const productOptionsReducer = createReducer(
  initialProductOptionsState,

  on(ProductOptionsActions.addProductOptions, (state, payload) => {
    const productOptions: ProductOptions = {
        ...state,
        size: payload.productOptions.size,
        color: payload.productOptions.color,
    }
      return {productOptions}
    }),
)