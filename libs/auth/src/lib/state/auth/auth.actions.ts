import { createAction, props } from '@ngrx/store';
import { User } from '@geometry-shop/data-models';
import * as AuthActions from './auth.actions';

export { AuthActions };

export const login = createAction(
  '[Login Page] User Login',
  props<{ user: User }>()
);

export const logout = createAction('[Top Menu] Logout');
