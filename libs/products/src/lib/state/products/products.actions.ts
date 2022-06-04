import { createAction, props } from "@ngrx/store";
import { Product } from '@geometry-shop/data-models'

export const laodAllProducts = createAction(
    "[Product Resolver] Loas All products"
);

export const retrieveProductList = createAction(
    "[Load Products Effect] All products Loaded",
    props<{products: Product[]}>()
);
