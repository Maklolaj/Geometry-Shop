import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProductsComponent } from './containers/products/products.component';
import { NgtMeshModule } from '@angular-three/core/meshes';
import {
  NgtMeshStandardMaterialModule,
  NgtShadowMaterialModule,
} from '@angular-three/core/materials';
//import { NgtTes } from '@angular-three/soba/staging';
import {
  NgtBoxGeometryModule,
  NgtPlaneGeometryModule,
  NgtCylinderGeometryModule,
  NgtCapsuleGeometryModule,
  NgtCircleGeometryModule,
  NgtConeGeometryModule,
  NgtDodecahedronGeometryModule,
  NgtExtrudeGeometryModule,
  NgtIcosahedronGeometryModule,
  NgtLatheGeometryModule,
  NgtOctahedronGeometryModule,
  NgtTubeGeometryModule,
  NgtRingGeometryModule,
  NgtTorusGeometryModule,
  NgtWireframeGeometryModule,
} from '@angular-three/core/geometries';
import {
  NgtAmbientLightModule,
  NgtSpotLightModule,
  NgtPointLightModule,
} from '@angular-three/core/lights';
import { StoreModule } from '@ngrx/store';
import { NgtStatsModule } from '@angular-three/core/stats';
import { NgtCanvasModule, NgtCamera } from '@angular-three/core';
import { ProductOptionsComponent } from './components/product-options/product-options.component';
import { MaterialModule } from '@geometry-shop/material';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductItemComponent } from './components/product-list/containers/product-item/product-item.component';
import { ColorPickerModule } from 'ngx-color-picker';
import { ProductResolver } from '@geometry-shop/data-access';
import { ProductsService } from '@geometry-shop/data-access';
import { BasketReducer } from '@geometry-shop/data-access';
import { ProductReducer } from '@geometry-shop/data-access';
import { NgtOrthographicCameraModule } from '@angular-three/core/cameras';

@NgModule({
  imports: [
    CommonModule,
    NgtCanvasModule,
    NgtMeshModule,
    NgtAmbientLightModule,
    NgtSpotLightModule,
    NgtPointLightModule,

    NgtBoxGeometryModule,
    NgtPlaneGeometryModule,
    NgtCylinderGeometryModule,
    NgtCapsuleGeometryModule,
    NgtCircleGeometryModule,
    NgtConeGeometryModule,
    NgtDodecahedronGeometryModule,
    NgtExtrudeGeometryModule,
    NgtIcosahedronGeometryModule,
    NgtLatheGeometryModule,
    NgtOctahedronGeometryModule,
    NgtTubeGeometryModule,
    NgtRingGeometryModule,
    NgtTorusGeometryModule,

    NgtMeshStandardMaterialModule,
    NgtShadowMaterialModule,
    NgtOrthographicCameraModule,
    //NgtSobaStarsModule,
    NgtStatsModule,
    RouterModule.forChild([
      {
        path: '',
        component: ProductsComponent,
        resolve: { productsData: ProductResolver },
      },
    ]),
    StoreModule.forFeature('products', ProductReducer.productsReducer),
    StoreModule.forFeature('basket', BasketReducer.basketReducer),
    MaterialModule,
    ColorPickerModule,
  ],
  declarations: [
    ProductsComponent,
    ProductOptionsComponent,
    ProductListComponent,
    ProductItemComponent,
  ],
  exports: [ProductsComponent],
  providers: [ProductsService, ProductResolver],
})
export class ProductsModule {}
