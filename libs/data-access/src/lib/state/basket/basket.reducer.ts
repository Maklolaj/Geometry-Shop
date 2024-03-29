import { CustomProduct } from '@geometry-shop/domain';
import { createReducer, on, State } from '@ngrx/store';
import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { BasketActions } from '@geometry-shop/data-access';

export interface BasketState extends EntityState<CustomProduct> {}

export const basketAdapter: EntityAdapter<CustomProduct> = createEntityAdapter<CustomProduct>({
  selectId: (product: CustomProduct) => product.productId,
});

export const initialProductsState: BasketState = basketAdapter.getInitialState({});

export const basketReducer = createReducer(
  initialProductsState,
  on(BasketActions.addToBasket, (state, payload) => {
    return basketAdapter.addOne(payload.product, {
      ...state,
    });
  }),
  on(BasketActions.clearBasket, (state) => {
    return basketAdapter.removeAll({ ...state });
  }),
  on(BasketActions.removeFromBasket, (state, payload) => {
    return basketAdapter.removeOne(payload.product.productId, {
      ...state,
    });
  })
);

export const { selectAll, selectEntities, selectIds, selectTotal } =
basketAdapter.getSelectors();
