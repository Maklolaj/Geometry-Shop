import { ProductOptions } from '@geometry-shop/domain';
import { createReducer, on, State } from '@ngrx/store';
import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { ProductOptionsActions } from '@geometry-shop/data-access';

export interface ProductOptionsState extends EntityState<ProductOptions> {}

export const productOptionsAdapter: EntityAdapter<ProductOptions> =
  createEntityAdapter<ProductOptions>();

export const initialProductOptionsState: ProductOptionsState =
  productOptionsAdapter.getInitialState({});

export const productOptionsReducer = createReducer(
  initialProductOptionsState,
  on(ProductOptionsActions.addProductOptions, (state, payload) => {
    return productOptionsAdapter.addOne(payload.productOptions, {
      ...state,
    });
  })
);

export const { selectAll, selectEntities, selectIds, selectTotal } =
  productOptionsAdapter.getSelectors();
