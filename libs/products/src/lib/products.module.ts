import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProductsComponent } from './containers/products/products.component';
import { NgtMeshModule } from '@angular-three/core/meshes';
import { NgtMeshStandardMaterialModule } from '@angular-three/core/materials';
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
import { productReducer } from './products.reducer';
import { NgtCanvasModule, NgtCamera } from '@angular-three/core';
import { ProductOptionsComponent } from './components/product-options/product-options.component';
import { MaterialModule } from '@geometry-shop/material';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductItemComponent } from './components/product-list/containers/product-item/product-item.component';
import { ColorPickerModule } from 'ngx-color-picker';

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
    //NgtSobaStarsModule,
    NgtStatsModule,
    RouterModule.forChild([{ path: '', component: ProductsComponent }]),
    StoreModule.forFeature('products', productReducer),
    MaterialModule,
    ColorPickerModule,
    //StoreModule.forFeature('auth', reducers),
  ],
  declarations: [
    ProductsComponent,
    ProductOptionsComponent,
    ProductListComponent,
    ProductItemComponent,
  ],
  exports: [ProductsComponent],
})
export class ProductsModule {}
