import { createAction, props } from "@ngrx/store";
import { Product } from '@geometry-shop/data-models'

export const retrieveProductList = createAction(
    "[Load Products Effect] All products Loaded",
    props<{products: Product[]}>()
);


export const selectProductId = createAction(
    "[Select Product Effect] Select product",
    props<{productId: string}>()
);

// export const addToBasket = createAction( 
//     "[Add to balance Effect] Add to balance",
//     props<{price: number}>()
// );

// export const clearBasket = createAction(
//     "[Clear balance Effect] Clear balance"      
// );
