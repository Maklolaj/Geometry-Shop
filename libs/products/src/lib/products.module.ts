import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProductsComponent } from './containers/products/products.component';
import { NgtMeshModule } from '@angular-three/core/meshes';
import { NgtMeshStandardMaterialModule } from '@angular-three/core/materials';
import { NgtBoxGeometryModule } from '@angular-three/core/geometries';
import {
  NgtAmbientLightModule,
  NgtSpotLightModule,
  NgtPointLightModule,
} from '@angular-three/core/lights';
import {
  Store,
  StoreFeatureModule,
  StoreModule,
  StoreRootModule,
} from '@ngrx/store';
import { authReducer } from '../../../auth/src/lib/state/auth/auth.reducer';
import {
  prodcutInitialState,
  productReducer,
  reducerss,
} from './products.reducer';
import { authRoutes, AuthModule, AuthGuard } from '@geometry-shop/auth';
import { reducers } from 'libs/auth/src/lib/state/auth';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { NgtCanvasModule } from '@angular-three/core';

@NgModule({
  imports: [
    CommonModule,
    NgtCanvasModule,
    NgtMeshModule,
    NgtAmbientLightModule,
    NgtSpotLightModule,
    NgtPointLightModule,
    NgtBoxGeometryModule,
    NgtMeshStandardMaterialModule,
    RouterModule.forChild([{ path: '', component: ProductsComponent }]),
    StoreModule.forFeature('products', productReducer),
    //StoreModule.forFeature('auth', reducers),
  ],
  declarations: [ProductsComponent],
  exports: [ProductsComponent],
  providers: [AuthGuard],
})
export class ProductsModule {}
