import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'geometry-shop-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  login(authenticate: any) {
    console.log(authenticate);
  }
}
