import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { CreateProductRequest } from './requestDto/createProduct.dto';
import { UpdateProductRequest } from './requestDto/updateProduct.dto'

import { Product } from './schemas/product.schema';
import { ProductsService } from './products.service'

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get(':productId')
  async getProduct(@Param('productId') productId: number): Promise<Product> {
    return this.productsService.getProductById(productId);
  }

  @Get()
  async getProducts(): Promise<Product[]> {
      return this.productsService.getProducts();
  }

  @Post()
  async createProduct(@Body() createProductDto: CreateProductRequest): Promise<Product> {
      return this.productsService.createProduct(createProductDto)
  }

  @Patch(':productId')
  async updateProduct(@Param('productId') productId: number, @Body() UpdateProductRequest: UpdateProductRequest): Promise<Product> {
      return this.productsService.updateProduct(productId, UpdateProductRequest);
  }
}