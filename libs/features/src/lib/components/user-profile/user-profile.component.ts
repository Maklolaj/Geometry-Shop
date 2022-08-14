import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormValues, INITIAL_FORM_GROUP_STATE, SetSubmittedValueAction, UserProfileFormState } from '@geometry-shop/data-access';
import { select, Store } from '@ngrx/store';
import { FormGroupState, NgrxValueConverter, NgrxValueConverters, ResetAction, SetValueAction } from 'ngrx-forms';
import { filter, map, Observable, take } from 'rxjs';

@Component({
  selector: 'geometry-shop-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserProfileComponent implements OnInit {

  formState$: Observable<FormGroupState<FormValues>>;

  submittedValue$: Observable<FormValues | undefined>;

  constructor(private userProfileStore: Store<UserProfileFormState>) {
    this.formState$ = userProfileStore.pipe(select(s => s.userProfile.formState));
    this.submittedValue$ = userProfileStore.pipe(select(s => s.userProfile.submittedValue));
  }

  ngOnInit(): void {}

  // Ngrx Forms date value converter
  public dateValueConverter: NgrxValueConverter<Date | null, string | null> = {
    convertViewToStateValue(value) {
      if (value === null) {
        return null;
      }

      // the value provided by the date picker is in local time but we want UTC so we recreate the date as UTC
      value = new Date(Date.UTC(value.getFullYear(), value.getMonth(), value.getDate()));
      return NgrxValueConverters.dateToISOString.convertViewToStateValue(value);
    },
    convertStateToViewValue: NgrxValueConverters.dateToISOString.convertStateToViewValue,
  };

  public reset() {
    this.userProfileStore.dispatch(new SetValueAction(INITIAL_FORM_GROUP_STATE.id, INITIAL_FORM_GROUP_STATE.value));
    this.userProfileStore.dispatch(new ResetAction(INITIAL_FORM_GROUP_STATE.id));
  }

  public submit() {
    this.formState$.pipe(
      take(1),
      filter(s => s.isValid),
      map(fs => new SetSubmittedValueAction(fs.value)),
    ).subscribe(this.userProfileStore);
  }


}
