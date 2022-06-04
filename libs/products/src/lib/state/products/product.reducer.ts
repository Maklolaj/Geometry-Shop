import { Product } from "@geometry-shop/data-models";
import { createReducer, on } from "@ngrx/store";
import { ProductActions } from './product-action-types'


export const initialProductsState: ReadonlyArray<Product> = []

export const productsReducer = createReducer(
    initialProductsState,
    on(ProductActions.retrieveProductList, (state, {products}) => products)
)