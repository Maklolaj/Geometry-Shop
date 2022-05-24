import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { LoginComponent } from './containers/login/login.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { DataModelsModule } from '@geometry-shop/data-models';

export const authRoutes: Route[] = [
  { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [CommonModule, RouterModule, DataModelsModule],
  exports: [LoginFormComponent],
  declarations: [LoginComponent, LoginFormComponent],
})
export class AuthModule {}
