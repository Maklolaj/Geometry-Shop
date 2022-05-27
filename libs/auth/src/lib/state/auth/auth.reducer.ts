import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createReducer,
  createSelector,
  MetaReducer,
  on,
} from '@ngrx/store';
import { User } from '@geometry-shop/data-models';
import { AuthActions } from './auth.actions';
import { ContentObserver } from '@angular/cdk/observers';
import { getUserFromLocalStorage } from '../../services/auth/auth.utils';

export interface AuthState {
  user: User | undefined;
}

export const initialAuthState: AuthState = {
  user: getUserFromLocalStorage(),
};

export const authReducer = createReducer(
  initialAuthState,

  on(AuthActions.login, (state, action) => {
    console.log(action.user.username + ' reducer');
    return {
      user: action.user,
    };
  }),

  on(AuthActions.logout, (state, action) => {
    return {
      user: undefined,
    };
  })
);
