import {createFeatureSelector, createSelector} from '@ngrx/store';
import { ProductState } from './product.state';


export const selectProductsState =
    createFeatureSelector<ProductState>("products");


export const selectAllProducts = createSelector(
    selectProductsState, 
    (state: ProductState) => state  //TODO state has no properties
);

