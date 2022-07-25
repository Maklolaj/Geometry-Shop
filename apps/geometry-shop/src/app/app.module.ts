import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import { authRoutes, AuthModule } from '@geometry-shop/auth';
import { AuthGuard } from '@geometry-shop/data-access'
import { BasketSummaryComponent } from '@geometry-shop/features';
import { LayoutModule } from '@geometry-shop/layout';
import { from } from 'rxjs';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(
      [
        { path: '', pathMatch: 'full', redirectTo: 'products' },
        { path: 'auth', children: authRoutes },
        {
          path: 'products',
          loadChildren: () =>
            import('@geometry-shop/products').then(
              (module) => module.ProductsModule
            ),
          canActivate: [AuthGuard],
        },
        {
          path: 'summary',
          loadChildren: () =>
            import('@geometry-shop/features').then(
              (module) => module.FeaturesModule,
            ),
          component: BasketSummaryComponent,
          canActivate: [AuthGuard],
        },
      ],
      {
        initialNavigation: 'enabled',
      }
    ),
    AuthModule,
    LayoutModule,
    StoreModule.forRoot({}),
    StoreRouterConnectingModule.forRoot(),
    StoreDevtoolsModule.instrument({ maxAge: 25 }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
