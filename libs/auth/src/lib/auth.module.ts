import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { LoginComponent } from './containers/login/login.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { DataModelsModule } from '@geometry-shop/data-models';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from '@geometry-shop/material';
import { ReactiveFormsModule } from '@angular/forms';

export const authRoutes: Route[] = [
  { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    DataModelsModule,
    HttpClientModule,
    MaterialModule,
    ReactiveFormsModule,
  ],
  exports: [LoginFormComponent],
  declarations: [LoginComponent, LoginFormComponent],
})
export class AuthModule {}
