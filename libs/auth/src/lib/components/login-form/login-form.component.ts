import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Authenticate } from 'libs/data-models/src/lib/authenticate';

@Component({
  selector: 'geometry-shop-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent {
  @Output() submit = new EventEmitter<Authenticate>();

  login(authenticate: Authenticate) {
    this.submit.emit(authenticate);
  }

  checkRender(): boolean {
    console.log('checkRender');
    return true;
  }
}
