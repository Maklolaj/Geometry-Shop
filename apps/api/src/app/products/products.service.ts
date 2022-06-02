import { ProductsRepository } from './products.repository';
import { UpdateProductRequest } from './requestDto/updateProduct.dto';
import { Injectable, Logger } from "@nestjs/common";
import { Product } from './schemas/product.schema';
import { v4 as uuidv4 } from 'uuid';
import { CreateProductRequest } from './requestDto/createProduct.dto';

@Injectable()
export class ProductsService {
    constructor(private readonly productsRepository: ProductsRepository) {}

    async getProductById(productId: number): Promise<Product> {
        return this.productsRepository.findOne({ productId })        
    }

    async getProducts(): Promise<Product[]> {
        return this.productsRepository.find({})
    }

    async createProduct(product: CreateProductRequest): Promise<Product> {
        return this.productsRepository.create({
            productId: uuidv4(),
            name: product.name,
            color: product.color,
            price: product.price,
            describtion: product.describtion,
        })
    }

    async updateProduct(productId: number, updateProduct: UpdateProductRequest): Promise<Product> {
        return this.productsRepository.findOneAndUpdate({ productId }, updateProduct)
    }
}