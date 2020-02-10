import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Product } from "../types/product.interface";
import { Model } from "mongoose";
import { CreateProductDTO } from "./product.dto";

@Injectable()
export class ProductService {
  constructor(@InjectModel("Product") private productModel: Model<Product>) {}
  async findAll() {
    return await this.productModel.find().exec();
  }

  async create(productDTO: CreateProductDTO): Promise<Product> {
    const product = await this.productModel.create({
      ...productDTO
    });
    await product.save();
    return product;
  }
}
