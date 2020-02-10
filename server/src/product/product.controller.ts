import { Controller, Get, Res, HttpStatus, Post, Body } from "@nestjs/common";
import { ProductService } from "./product.service";
import { CreateProductDTO } from "./product.dto";
import { Product } from "../types/product.interface";

@Controller("product")
export class ProductController {
  constructor(private productService: ProductService) {}

  @Get()
  async getAllProduct() {
    return await this.productService.findAll();
  }

  @Post()
  async create(@Body() product: CreateProductDTO): Promise<Product> {
    return await this.productService.create(product);
  }
}
