import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from 'mongoose'

export type ProductDocument = Product & Document

@Schema()
export class Product {
    @Prop()
    productId: string;

    @Prop()
    name: string;

    @Prop()
    color: string;

    @Prop()
    price: number;

    @Prop()
    describtion: string;
}

export const ProductSchema = SchemaFactory.createForClass(Product)