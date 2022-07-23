import { Product } from '@geometry-shop/domain';
import { createReducer, on, State } from '@ngrx/store';
import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { BasketActions } from './basket-action-types';

export interface BasketState extends EntityState<Product> {}

export const adapter: EntityAdapter<Product> = createEntityAdapter<Product>({
  selectId: (product: Product) => product.productId,
});

export const initialProductsState: BasketState = adapter.getInitialState({});

export const basketReducer = createReducer(
  initialProductsState,
  on(BasketActions.addToBasket, (state, payload) => {
    return adapter.addOne(payload.product, {
      ...state,
    });
  }),
  on(BasketActions.clearBasket, (state) => {
    return adapter.removeAll({ ...state });
  }),
  on(BasketActions.removeFromBasket, (state, payload) => {
    return adapter.removeOne(payload.product.productId, {
      ...state,
    });
  })
);

export const { selectAll, selectEntities, selectIds, selectTotal } =
  adapter.getSelectors();
