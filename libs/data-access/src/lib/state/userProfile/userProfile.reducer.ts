import {
  createFormGroupState,
} from 'ngrx-forms';

export interface FormValues {
    name: string;
    surname: string;
    dateOfBirth: string;
    street: string;
    city: string;
    postalCode: string;
    agreeToTermsOfUse: boolean,

}

export const FORM_ID = 'userProfile';

export const initialFormGroupState = createFormGroupState<FormValues>(FORM_ID, {
    name: '',
    surname: '',
    dateOfBirth: new Date(Date.UTC(1970, 0, 1)).toISOString(),
    street: '',
    city: '',
    postalCode: '',
    agreeToTermsOfUse: false,
});

