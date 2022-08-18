import { Action, combineReducers } from '@ngrx/store';
import {
  createFormGroupState,
  createFormStateReducerWithUpdate,
  FormGroupState,
  updateGroup,
  validate,
} from 'ngrx-forms';
import {
  required,
  requiredTrue,
  maxLength,
  email,
} from 'ngrx-forms/validation';

export interface FormValues {
  name: string;
  surname: string;
  email: string;
  dateOfBirth: string;
  street: string;
  city: string;
  postalCode: string;
  agreeToTermsOfUse: boolean;
}

export interface UserProfileFormState {
  userProfile: {
    formState: FormGroupState<FormValues>;
    submittedValue: FormValues | undefined;
  };
}

export class SetSubmittedValueAction implements Action {
  static readonly TYPE = 'userProfile/SET_SUBMITTED_VALUE';
  readonly type = SetSubmittedValueAction.TYPE;
  constructor(public submittedValue: FormValues) {}
}

export const FORM_ID = 'userProfile';

export const INITIAL_FORM_GROUP_STATE = createFormGroupState<FormValues>(
  FORM_ID,
  {
    name: '',
    surname: '',
    email: '',
    dateOfBirth: new Date(Date.UTC(1970, 0, 1)).toISOString(),
    street: '',
    city: '',
    postalCode: '',
    agreeToTermsOfUse: false,
  }
);

const validationFormReducer = createFormStateReducerWithUpdate<FormValues>(
  updateGroup<FormValues>({
    name: validate(required, maxLength(20)),
    surname: validate(required, maxLength(20)),
    email: validate(email),
    agreeToTermsOfUse: validate(requiredTrue),
  })
);

const userProfileCombineReducers = combineReducers<
  UserProfileFormState['userProfile'],
  any
>({
  formState(s = INITIAL_FORM_GROUP_STATE, a: Action) {
    return validationFormReducer(s, a);
  },
  submittedValue(s: FormValues | undefined, a: SetSubmittedValueAction) {
    switch (a.type) {
      case SetSubmittedValueAction.TYPE:
        return a.submittedValue;

      default:
        return s;
    }
  },
});

export function userProfileReducers(
  s: UserProfileFormState['userProfile'],
  a: Action
) {
  return userProfileCombineReducers(s, a);
}
