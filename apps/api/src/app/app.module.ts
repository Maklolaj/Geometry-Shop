import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose'
import { ProductsModule } from './products/products.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost/demo'), ProductsModule, UsersModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
