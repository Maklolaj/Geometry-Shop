import { Product } from '@geometry-shop/data-models';
import { createReducer, on, State } from '@ngrx/store';
import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { BasketActions } from './basket-action-types';

export interface BasketState extends EntityState<Product> {
  totalBalance: number;
}

export const adapter: EntityAdapter<Product> = createEntityAdapter<Product>({
  selectId: (product: Product) => product.productId,
});

export const initialProductsState: BasketState = adapter.getInitialState({
  totalBalance: 0,
});

export const basketReducer = createReducer(
  initialProductsState,
  on(BasketActions.addToBasket, (state, payload) =>
    adapter.addOne(payload.product, state)
  ),
  on(BasketActions.clearBasket, (state) => {
    return adapter.removeAll(state);
  })
);

export const { selectAll, selectEntities, selectIds, selectTotal } =
  adapter.getSelectors();
