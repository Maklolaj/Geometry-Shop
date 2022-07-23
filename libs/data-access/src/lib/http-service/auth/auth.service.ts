import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Authenticate, User } from '@geometry-shop/domain';
import { BehaviorSubject, Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private userSubject$ = new BehaviorSubject<User>(null as any);

  // Current User
  user$ = this.userSubject$.asObservable();

  constructor(private httpClient: HttpClient) {
    const user = localStorage.getItem('user');
    if (user) {
      this.userSubject$.next(JSON.parse(user));
    }
  }

  login(authenticate: Authenticate): Observable<User> {
    return this.httpClient
      .post<User>('http://localhost:4200/api/user/login', authenticate)
      .pipe(
        tap((user: User) => {
          this.userSubject$.next(user);
          localStorage.setItem('user', JSON.stringify(user));
        })
      );
  }

  logout(): void {
    this.userSubject$.next(null as any);
    localStorage.removeItem('user');
  }
}
