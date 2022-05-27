import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Authenticate, User } from '@geometry-shop/data-models';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'geometry-shop-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent implements OnInit {
  constructor(private authService: AuthService) {}

  ngOnInit() {}

  login(authenticate: Authenticate) {
    this.authService.login(authenticate).subscribe((response: User) => {
      if (response) {
        console.log(`Username: ${response.username} from api`);
        console.log(`Country: ${response.country} from api`);
      } else {
        console.log('Empty');
      }
    });
  }
}
