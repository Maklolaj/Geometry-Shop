import { Product } from "@geometry-shop/data-models";
import { createReducer, on } from "@ngrx/store";
import { ProductActions } from './product-action-types'
import {createEntityAdapter, EntityState} from '@ngrx/entity';

export const initialProductsState: Product[] = []

export const productsReducer = createReducer(
    initialProductsState,
    on(ProductActions.retrieveProductList, (state, {products} ) => products )
)


export interface CoursesState extends EntityState<Product> {
    allProductsLoaded: boolean
}


export const adapter = createEntityAdapter<Product>({
    //sortComparer: compareCourses
});


export const initialCoursesState = adapter.getInitialState({
    allProductsLoaded:false
});


export const coursesReducer = createReducer(

    initialCoursesState,

    on(ProductActions.retrieveProductList,
        (state, action) => adapter.setAll( // getAll
            action.products,
            {...state,
                allProductsLoaded:true
            })),
);


export const {
    selectAll
} = adapter.getSelectors();