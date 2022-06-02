import { ProductsRepository } from './products.repository'
import { UpdateProductRequest } from './requestDto/updateProduct.dto'
import { Product } from './schemas/product.schema'

export class ProductsService {
    constructor(private readonly productsRepository: ProductsRepository) {}

    async getProductById(productId: number): Promise<Product> {
        return this.productsRepository.findOne({ productId })        
    }

    async getProducts(): Promise<Product[]> {
        return this.productsRepository.find({})
    }

    async createProduct(product: Product): Promise<Product> {
        return this.productsRepository.create({
            productId: product.productId,
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