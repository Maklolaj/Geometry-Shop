import {
  createReducer,
  on,
} from '@ngrx/store';
import { User } from '@geometry-shop/domain';
import { AuthActions } from './auth.actions';
import { ContentObserver } from '@angular/cdk/observers';
import { getUserFromLocalStorage } from '../../utils/local-storage-serive'
export interface AuthState {
  user: User | undefined;
}

export const initialAuthState: AuthState = {
  user: getUserFromLocalStorage(),
};

export const authReducer = createReducer(
  initialAuthState,

  on(AuthActions.login, (state, action) => {
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
