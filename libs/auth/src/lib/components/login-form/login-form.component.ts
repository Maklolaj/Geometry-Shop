import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Authenticate } from '@geometry-shop/data-models';
// import { Authenticate } from 'libs/data-models/src/lib/authenticate';

@Component({
  selector: 'geometry-shop-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent {
  @Output() submitForm = new EventEmitter<Authenticate>();

  loginForm = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });

  login() {
    this.submitForm.emit({
      name: this.loginForm.value.username,
      password: this.loginForm.value.password,
    } as Authenticate);
  }

  checkRender(): boolean {
    console.log('checkRender');
    return true;
  }
}
