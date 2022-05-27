import { Component, OnInit } from '@angular/core';
import { empty, Observable, of } from 'rxjs';
import { AuthService } from '@geometry-shop/auth';
import { User } from '@geometry-shop/data-models';
import { select, Store } from '@ngrx/store';
import { isLoggedOut } from 'libs/auth/src/lib/state/auth/auth.selectors';
import { AppState } from 'libs/auth/src/lib/state/auth';
import { logout } from 'libs/auth/src/lib/state/auth/auth.actions';

@Component({
  selector: 'geometry-shop-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements OnInit {
  user$: Observable<User> = null as any;

  constructor(
    private authService: AuthService,
    private store: Store<AppState>
  ) {}

  isLoggedOut$: Observable<boolean> = of();

  ngOnInit() {
    this.user$ = this.authService.user$;
    this.isLoggedOut$ = this.store.pipe(select(isLoggedOut));
  }

  logout() {
    this.authService.logout();
    this.store.dispatch(logout());
  }
}
