import { Product } from '@geometry-shop/data-models';
import { EntityState } from '@ngrx/entity';

export interface ProductState {
  products: Product[];
}
