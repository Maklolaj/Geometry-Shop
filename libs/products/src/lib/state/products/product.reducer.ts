import { Product } from '@geometry-shop/data-models';
import { createReducer, on, State } from '@ngrx/store';
import { ProductActions } from './product-action-types';
import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';

export interface ProductsState extends EntityState<Product> {
  selectedProductId: string;
}

export const adapter: EntityAdapter<Product> = createEntityAdapter<Product>({
  selectId: (product: Product) => product.productId,
  sortComparer: compareProducts,
});

export const initialProductsState: ProductsState = adapter.getInitialState({
  selectedProductId: '',
});

export const productsReducer = createReducer(
  initialProductsState,
  on(ProductActions.retrieveProductList, (state, payload) =>
    adapter.addMany(payload.products, state)
  ),
  on(ProductActions.selectProductId, (state, { productId }) => {
    return { ...state, selectedProductId: productId };
  })
);

// Selectors
export const { selectAll, selectEntities, selectIds, selectTotal } =
  adapter.getSelectors();

export const getSelectedProductId = (state: ProductsState) =>
  state.selectedProductId;

// Order loaded entities
export function compareProducts(c1: Product, c2: Product) {
  const compare = c1.price - c2.price;

  if (compare > 0) {
    return 1;
  } else if (compare < 0) {
    return -1;
  } else return 0;
}
