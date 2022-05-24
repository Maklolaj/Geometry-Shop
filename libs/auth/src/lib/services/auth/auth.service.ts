import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Authenticate } from 'libs/data-models/src/lib/authenticate';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private httpClient: HttpClient) {}

  login(authenticate: Authenticate): Observable<any> {
    return this.httpClient.post(
      'http://localhost:4200/api/login',
      authenticate
    );
  }
}
