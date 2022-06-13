import { Product } from '@geometry-shop/data-models';
import { createReducer, on, State } from '@ngrx/store';
import { ProductActions } from './product-action-types';
import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';

// export const initialProductsState: Product[] = [];

// export const productsReducer = createReducer(
//   initialProductsState,
//   on(ProductActions.retrieveProductList, (state, { products }) => products)
// );

export interface ProductsState extends EntityState<Product> {
  allProductsLoaded: boolean;
}

export const adapter: EntityAdapter<Product> = createEntityAdapter<Product>({
  selectId: (product: Product) => product.productId,
  sortComparer: compareProducts,
});

export const initialProductsState: ProductsState = adapter.getInitialState({
  allProductsLoaded: false,
});

export const productsReducer = createReducer(
  initialProductsState,

  //   on(ProductActions.retrieveProductList, (state, action) =>
  //     adapter.setAll(
  //       // getAll
  //       action.products,
  //       { ...state, allProductsLoaded: true }
  //     )
  //   )
  on(ProductActions.retrieveProductList, (state, payload) =>
    adapter.addMany(payload.products, state)
  )
);

export const { selectAll, selectEntities, selectIds, selectTotal } =
  adapter.getSelectors();

export function compareProducts(c1: Product, c2: Product) {
  const compare = c1.price - c2.price;

  if (compare > 0) {
    return 1;
  } else if (compare < 0) {
    return -1;
  } else return 0;
}
