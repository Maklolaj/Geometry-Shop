import { MongooseModule } from "@nestjs/mongoose";
import { Module } from "@nestjs/common";;
import { Product, ProductSchema } from "./schemas/product.schema";
import { ProductsController } from "./products.controller";
import { ProductsService } from "./products.service";
import { ProductsRepository } from "./products.repository";

@Module({
    imports: [MongooseModule.forFeature([{ name: Product.name, schema: ProductSchema}])],
    controllers: [ProductsController],
    providers: [ProductsService, ProductsRepository]
})
export class ProductsModule {}