import { Product } from "../product-data-models/product";

export interface CustomProduct extends Product {
    size: number;
    
    color: string;
}
