import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
//import { Authenticate } from 'libs/data-models/src/lib/authenticate';
import { Authenticate, User } from '@geometry-shop/data-models';
import { BehaviorSubject, Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private userSubject$ = new BehaviorSubject<User>(null as any);
  user$ = this.userSubject$.asObservable();
  constructor(private httpClient: HttpClient) {}

  login(authenticate: Authenticate): Observable<User> {
    return this.httpClient
      .post<User>('http://localhost:4200/api/login', authenticate)
      .pipe(tap((user: User) => this.userSubject$.next(user)));
  }
}