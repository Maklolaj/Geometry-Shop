import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Authenticate, User } from '@geometry-shop/data-models';
import { select, Store } from '@ngrx/store';
import { Observable, of, tap } from 'rxjs';
import { AuthService } from '../../services/auth/auth.service';
import { AppState } from '../../state/auth';
import { login } from '../../state/auth/auth.actions';
import { isLoggedIn, isLoggedOut } from '../../state/auth/auth.selectors';

@Component({
  selector: 'geometry-shop-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent implements OnInit {
  constructor(
    private authService: AuthService,
    private store: Store<AppState>
  ) {}

  isLoggedOut$: Observable<boolean> = of(true);

  ngOnInit() {
    this.isLoggedOut$ = this.store.pipe(select(isLoggedOut));
  }

  login(authenticate: Authenticate) {
    this.authService.login(authenticate).subscribe((user: User) => {
      if (user) {
        console.log(`Username: ${user.name} from api`);
        console.log(`Country: ${user.country} from api`);
        this.store.dispatch(login({ user }));
      } else {
        console.log('Empty');
      }
    });
  }
}
