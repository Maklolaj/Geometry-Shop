import { routerReducer } from '@ngrx/router-store';
import { Action, ActionReducerMap, createReducer, on } from '@ngrx/store';

export const appFeatureKey = 'products';

export interface ProductState {
  procutName: string;
}

export const prodcutInitialState: ProductState = {
  procutName: 'TEST',
};

export const productReducer = createReducer(prodcutInitialState);

export interface AppState {}

export const reducerss: ActionReducerMap<AppState> = {
  router: routerReducer,
};
